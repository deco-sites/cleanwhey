import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";
import Image from "apps/website/components/Image.tsx";
import { useDevice } from "@deco/deco/hooks";

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
  /**
   * @description Ativar customização HTML no Banner, mesmo desativado, inserir o link no campo de action
   */
  activateContent?: boolean;

  action?: {
    /** @description when user clicks on the image, go to this link */
    href?: string;
    /** @description Image text title */
    title?: HTMLWidget;
    /** @description Button label, deixe vazio para não aparecer o botão laranja */
    label?: string;
  };
  position?: "Left" | "Right";
  extraLink?: {
    /** @description go to this link */
    href?: string;
    /** @description Button label */
    label?: string;
  };
  selos?: Selo[];
}

interface Selo {
  image?: ImageWidget;
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

const WIDTH = {
  "mobile": 375,
  "tablet": 375,
  "desktop": 1520,
};
const HEIGHT = {
  "mobile": 523,
  "tablet": 523,
  "desktop": 545,
};

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const { mobile, desktop, action, extraLink, selos, activateContent } =
    image;
  const params = { promotion_name: image.alt };

  const selectPromotionEvent = useSendEvent({
    on: "click",
    event: { name: "select_promotion", params },
  });

  const viewPromotionEvent = useSendEvent({
    on: "view",
    event: { name: "view_promotion", params },
  });

  const device = useDevice()
  const ASPECT_RATIO = `${WIDTH[device]} / ${HEIGHT[device]}`;

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
            ${image.position == "Left" ? "desktop:left-40 mobile:left-50" : ""}
            ${image.position == "Right" ? "desktop:right-40 mobile:right-50" : ""}
            absolute h-auto desktop:h-full w-full top-5 mobile:top-24
            flex flex-col justify-center items-start
            px-5 mobile:px-0 left-1/2 -translate-x-1/2
            mobile:items-center mobile:max-w-[320px]`}
        >
          {activateContent && action.title && (
            <span
              class={`text-[32px] text-center desktop:text-left font-normal leading desktop:leading-[10px] font-lato text-[#808184]`}
              dangerouslySetInnerHTML={{ __html: action.title }}
            />
          )}

          {activateContent && (
            <div className="actions flex flex-col desktop:flex-row items-center gap-2 mt-4">
              {action.label != undefined && (
                <button
                  class="border w-full phone:w-auto !border-orange-300  hover:bg-primary !text-white hover:text-white !bg-primary btn btn-primary rounded-lg btn-outline"
                  aria-label={action.label}
                >
                  {action.label}
                </button>
              )}

              <button
                class="btn btn-primary rounded-lg btn-outline hover:text-blue-300 hover:bg-transparent border !text-blue-300 !border-blue-300 !bg-transparent"
                aria-label={extraLink?.href}
              >
                {extraLink?.label}
              </button>
            </div>
          )}

          {activateContent && (
            <div class={"selos mt-8"}>
              <div className="flex gap-4">
                {selos?.map((selo) => (
                  <Image
                    width={32}
                    height={32}
                    src={selo.image || ""}
                    alt={selo.label}
                    loading={"lazy"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <Image
        src={device === "mobile" ? mobile : desktop}
        width={WIDTH[device]}
        height={HEIGHT[device]}
        fetchPriority={lcp ? "high" : "auto"}
        preload={lcp}
        loading={lcp ? "eager" : "lazy"}
        style={{ aspectRatio: ASPECT_RATIO }}
        class="w-full"
        {...viewPromotionEvent} />
    </a >
  );
}

function Carousel({ images = [], preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class={clx(
        "grid",
        "grid-rows-[auto_32px_auto_auto]",
        "grid-cols-[32px_1fr_32px]",
        "mobile:grid-cols-[112px_1fr_112px] mobile:min-h-min",
        "w-screen max-w-full phone:mb-8 mb-6"
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
        <div class="flex items-center justify-center z-10 col-start-1 row-start-2 left-10 relative">
          <Slider.PrevButton
            class="btn btn-neutral btn-outline btn-circle no-animation btn-sm"
            disabled={false}
          >
            <Icon id="chevron-right" class="rotate-180" />
          </Slider.PrevButton>
        </div>
      )}
      {images.length > 1 && (
        <div class="flex items-center justify-center z-10 col-start-3 row-start-2 right-10 relative">
          <Slider.NextButton
            class="btn btn-neutral btn-outline btn-circle no-animation btn-sm"
            disabled={false}
          >
            <Icon id="chevron-right" />
          </Slider.NextButton>
        </div>
      )}

      {/* <ul
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
      </ul> */}

      <Slider.JS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default Carousel;
