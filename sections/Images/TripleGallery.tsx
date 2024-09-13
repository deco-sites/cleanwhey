import { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "deco/hooks/useDevice.ts";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";

interface categories {
  image: ImageWidget;
  link?: {
    url: string;
    title: string;
  };
  subtitle: string;
  title: string;
  flag?: ImageWidget;
}
/**
 * @title {{{title}}}
 */
export interface Props {
  items: categories[];
}

const Desktop = ({ items }: Props) => {
  return (
    <>
      {items &&
        items.map((item) => (
          <div class="relative flex w-full flex-col items-center justify-center">
            <a
              class={`w-full h-full relative overflow-hidden`}
              href={item.link?.url}
            >
              <img
                class={`w-full h-full`}
                src={item.image}
                width={455}
                height={428}
                loading={"lazy"}
              />
            </a>
            <div class="text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.50)] 
                    absolute top-0  left-0 w-full h-full flex flex-col 
                    items-center justify-center
                    text-white  text-center
                    ">
              <p class="mb-3 font-regular text-sm text-white">
                {item.subtitle}
              </p>
              <h2
                class={`max-w-[275px] ${
                  item.flag ? "mb-6" : "mb-12"
                } font-bold text-xl md:text-2xl text-white`}
              >
                {item.title}
              </h2>
              {item.flag && <img class="max-w-[150px]" src={item.flag} />}
              {!item.flag && (
                <span class="text-white text-sm font-regular">
                  {item.link?.title}
                </span>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

const Mobile = ({ items }: Props) => {
  const id = useId();
  return (
    <section id={id} class="relative">
      <Slider className="carousel carousel-center max-w-md space-x-4 p-4 md:pr-4 md:pl-4 pr-0">
        {items &&
          items.map((item, index) => (
            <Slider.Item
              index={index}
              class="carousel-item relative group !ml-0 flex w-[85%] duration-300 h-full transition-all items-center justify-center"
            >
              <a
                class={`w-full h-full relative overflow-hidden`}
                href={item.link?.url}
              >
                <img
                  class={`w-full`}
                  src={item.image}
                  loading={"lazy"}
                />
              </a>
              <div class="text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.50)] 
                        absolute top-0  left-0 w-full h-full flex flex-col 
                        items-center justify-center
                        text-center
                        ">
                <p class="mb-3 font-regular text-sm text-white">
                  {item.subtitle}
                </p>
                <h2
                  class={`max-w-[275px] ${
                    item.flag ? "mb-6" : "mb-12"
                  } font-bold text-xl md:text-2xl text-white`}
                >
                  {item.title}
                </h2>
                {item.flag && <img class="max-w-[150px]" src={item.flag} />}
                {!item.flag && (
                  <span class="text-white text-sm font-regular">
                    {item.link?.title}
                  </span>
                )}
              </div>
            </Slider.Item>
          ))}
      </Slider>

      <div class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
            justify-center absolute top-2/4 left-5">
        <Slider.PrevButton
          class="cursor-pointer"
          disabled={false}
        >
          <Icon id="chevron-right" class="rotate-180 text-orange-300" />
        </Slider.PrevButton>
      </div>

      <div class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
            justify-center absolute top-2/4 right-5">
        <Slider.NextButton
          class="cursor-pointer"
          disabled={false}
        >
          <Icon id="chevron-right" class="text-orange-300" />
        </Slider.NextButton>
      </div>

      <Slider.JS rootId={id} />
    </section>
  );
};

export default function TripleGallery({ items }: Props) {
  const device = useDevice();
  return (
    <section class="section">
      <div
        className={`content ${device === "desktop" ? "grid grid-cols-3" : ""}`}
      >
        {device === "desktop"
          ? <Desktop items={items} />
          : <Mobile items={items} />}
      </div>
    </section>
  );
}
