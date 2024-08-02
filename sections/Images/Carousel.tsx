import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;

  /** @description mobile otimized image */
  mobile: ImageWidget;

  /** @description Image's alt text */
  alt: string;

  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: HTMLWidget;
    /** @description Button label, deixe vazio para não aparecer o botão laranja */
    label?: string;
  };
  position?: "Left" | "Right";
  extraLink?: {
    /** @description go to this link */
    href: string;
    /** @description Button label */
    label: string;
  };
  selos?: Selo[];
}

interface Selo {
  image: ImageWidget;
  label?: string;
}

export interface Props {
  images?: Banner[];

  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;

  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem(
  { image, lcp }: { image: Banner; lcp?: boolean },
) {
  const {
    alt,
    mobile,
    desktop,
    action,
    extraLink,
    selos,
  } = image;
  const params = { promotion_name: image.alt };

  const selectPromotionEvent = useSendEvent({
    on: "click",
    event: { name: "select_promotion", params },
  });

  const viewPromotionEvent = useSendEvent({
    on: "view",
    event: { name: "view_promotion", params },
  });

  return (
    <a
      {...selectPromotionEvent}
      href={action?.href ?? "#"}
      aria-label={action?.label}
      class="relative block overflow-y-hidden w-full"
    >
      {action && (
        <div
          class={`
            ${image.position == "Left" ? "left-0 sm:left-40 md:left-50" : ""}
            ${
            image.position == "Right" ? "right-0 sm:right-40 md:right-50" : ""
          }
            absolute h-auto md:h-full w-full top-5 md:top-0
            flex flex-col justify-center items-center
            px-5 sm:px-0
            sm:items-start sm:max-w-xl`}
        >
          <span
            class={`${
              image.position == "Left" ? "md:text-5xl" : "md:text-7xl"
            } text-[32px] text-center md:text-left font-normal leading-10 md:leading-[80px] font-lato text-gray-200`}
            dangerouslySetInnerHTML={{ __html: action.title }}
          />

          {
            /* <span class="font-normal text-base text-base-100 pt-4 pb-12">
            {action.subTitle}
          </span> */
          }
          <div className="actions flex flex-col md:flex-row items-center gap-2 mt-4">
            {action.label != undefined && (
              <button
                class="border w-full md:w-auto border-orange-300 hover:bg-orange-300 !text-white hover:text-white !bg-orange-300 btn btn-primary rounded-lg btn-outline bg-base-100"
                aria-label={action.label}
              >
                {action.label}
              </button>
            )}

            <button
              class="btn btn-primary rounded-lg btn-outline hover:text-blue-300 hover:bg-transparent bg-transparent border !text-blue-300 border-blue-300"
              aria-label={extraLink?.href}
            >
              {extraLink?.label}
            </button>
          </div>

          <div class={"selos mt-8"}>
            <div className="flex gap-4">
              {selos?.map((selo) => (
                <img width={32} height={32} src={selo.image} alt={selo.label} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Picture preload={lcp} {...viewPromotionEvent}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={380}
          height={530}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1366}
          height={490}
        />
        <img
          class="object-cover w-full h-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

function Carousel({ images = [], preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class={clx(
        "grid",
        "grid-rows-[1fr_32px_1fr_64px]",
        "grid-cols-[32px_1fr_32px]",
        "sm:grid-cols-[112px_1fr_112px] sm:min-h-min",
        "w-screen max-w-full md:mb-8 mb-6",
      )}
    >
      <div class="col-span-full row-span-full">
        <Slider class="carousel carousel-center w-full gap-6">
          {images.map((image, index) => (
            <Slider.Item index={index} class="carousel-item w-full">
              <BannerItem image={image} lcp={index === 0 && preload} />
            </Slider.Item>
          ))}
        </Slider>
      </div>
      {images.length > 1 && (
        <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
          <Slider.PrevButton
            class="btn btn-neutral btn-outline btn-circle no-animation btn-sm"
            disabled={false}
          >
            <Icon id="chevron-right" class="rotate-180" />
          </Slider.PrevButton>
        </div>
      )}
      {images.length > 1 && (
        <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
          <Slider.NextButton
            class="btn btn-neutral btn-outline btn-circle no-animation btn-sm"
            disabled={false}
          >
            <Icon id="chevron-right" />
          </Slider.NextButton>
        </div>
      )}

      {
        /* <ul
        class={clx(
          "col-span-full row-start-4 z-10",
          "carousel justify-center gap-3",
        )}
      >
        {images.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot
              index={index}
              class={clx(
                "bg-black opacity-20 h-3 w-3 no-animation rounded-full",
                "disabled:w-8 disabled:bg-base-100 disabled:opacity-100 transition-[width]",
              )}
            >
            </Slider.Dot>
          </li>
        ))}
      </ul> */
      }

      <Slider.JS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default Carousel;
