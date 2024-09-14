import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "deco/hooks/useDevice.ts";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";

interface categories {
  images: {
    normal: ImageWidget;
    onHover: ImageWidget;
  };
  link: string;
  textLabel: string;
}
export interface Props {
  title?: HTMLWidget;
  items: categories[];
}

const Desktop = ({ items }: Props) => {
  return (
    <>
      {items &&
        items.map((item, index) => (
          <div class="relative group flex w-full duration-300 h-full transition-all items-center justify-center">
            <a
              class={`${index == 0 ? "rounded-l-lg" : ""} 
                            ${index == 3 ? "rounded-r-lg" : ""} 
                            w-full h-full transition-all duration-300 relative overflow-hidden max-h-[386px]`}
              href={item.link}
            >
              <img
                class={`${index == 0 ? "rounded-l-lg" : ""} 
                            ${
                  index == 3 ? "rounded-r-lg" : ""
                } w-full duration-300 transition-all group-hover:scale-125 h-full max-h-[386px]`}
                src={item.images.normal}
                loading={"lazy"}
              />

              <div class="transition-all duration-300 hidden group-hover:flex w-full h-full bg-white/85 z-10 absolute top-0 left-0 flex items-center justify-center">
                <img src={item.images.onHover} />
              </div>
            </a>
            <p class="z-20 w-auto absolute bottom-0 bg-orange-300 p-3 rounded text-white font-bold  text-center text-lg uppercase">
              {item.textLabel}
            </p>
          </div>
        ))}
    </>
  );
};

const Mobile = ({ items }: Props) => {
  const id = useId();
  return (
    <section id={id} class="relative">
      <Slider className="carousel carousel-center max-w-md space-x-4 p-4 md:pr-4 md:pl-4 ">
        {items &&
          items.map((item, index) => (
            <Slider.Item
              index={index}
              class="carousel-item relative group !ml-0 flex w-[85%] duration-300 h-full transition-all items-center justify-center"
            >
              <a
                class={`${index == 0 ? "rounded-l-lg" : ""} 
                                ${index == 3 ? "rounded-r-lg" : ""} 
                                w-full h-full transition-all duration-300 relative overflow-hidden`}
                href={item.link}
              >
                <img
                  class={`${index == 0 ? "rounded-l-lg" : ""} 
                                ${
                    index == 3 ? "rounded-r-lg" : ""
                  } w-full duration-300 transition-all group-hover:scale-125 h-full max-h-[370px]`}
                  src={item.images.normal}
                  loading={"lazy"}
                />

                <div class="transition-all duration-300 hidden group-hover:flex w-full h-full bg-white/85 z-10 absolute top-0 left-0 items-center justify-center">
                  <img src={item.images.onHover} />
                </div>
              </a>
              <p class="z-20 w-auto absolute bottom-0 bg-orange-300 p-3 rounded-tr text-white font-bold  text-center text-lg uppercase">
                {item.textLabel}
              </p>
            </Slider.Item>
          ))}
      </Slider>

      <div class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
            justify-center absolute top-2/4 left-5">

        <Slider.PrevButton class="cursor-pointer" disabled={false}>
          <Icon id="chevron-right" class="rotate-180 text-orange-300" />
        </Slider.PrevButton>
      </div>

      <div class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
            justify-center absolute top-2/4 right-5">

        <Slider.NextButton class="cursor-pointer" disabled={false}>
          <Icon id="chevron-right" class="text-orange-300" />
        </Slider.NextButton>
      </div>

      <Slider.JS rootId={id} />
    </section>
  );
};

export default function CategoryGallery({ title, items }: Props) {
  const device = useDevice();
  return (
    <section class="section container mt-5 md:mt-12">
      {title && (
        <div class={"title"}>
          <h2
            class={"text-2xl  font-bold text-gray-200 text-center mb-4"}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      )}
      <div
        className={`content ${device === "desktop" ? "grid grid-cols-4" : ""}`}
      >
        {device === "desktop"
          ? <Desktop items={items} />
          : <Mobile items={items} />}
      </div>
    </section>
  );
}
