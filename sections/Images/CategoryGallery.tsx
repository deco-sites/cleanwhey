import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";
import { useDevice as useDevice } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";
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
              <Image
                class={`${index == 0 ? "rounded-l-lg" : ""} 
                            ${index == 3 ? "rounded-r-lg" : ""
                  } w-full duration-300 transition-all group-hover:scale-125 h-full max-h-[386px] object-cover`}
                src={item.images.normal}
                loading={"lazy"}
                width={304}
                height={386}
              />

              <div class="transition-all duration-300 hidden group-hover:flex w-full h-full bg-white/85 z-10 absolute top-0 left-0 items-center justify-center">
                <Image
                  loading={"lazy"}
                  width={72}
                  height={72}
                  src={item.images.onHover} />
              </div>
            </a>
            <p class="z-20 w-auto absolute bottom-0 background-primary p-3 rounded text-white font-bold  text-center desktop:text-sm desktop-sm:text-lg uppercase">
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
      <Slider className="carousel carousel-center max-w-full space-x-4 p-4 phone:pr-4 phone:pl-4 ">
        {items &&
          items.map((item, index) => (
            <Slider.Item
              index={index}
              class="carousel-item relative group !ml-0 flex max-w-[370px] duration-300 h-full transition-all items-center justify-center"
            >
              <a
                class={`${index == 0 ? "rounded-l-lg" : ""} 
                                ${index == 3 ? "rounded-r-lg" : ""} 
                                w-full h-full transition-all duration-300 relative overflow-hidden object-cover`}
                href={item.link}
              >
                <Image
                  class={`${index == 0 ? "rounded-l-lg" : ""} 
                                ${index == 3 ? "rounded-r-lg" : ""
                    } w-full duration-300 transition-all group-hover:scale-125 h-full`}
                  src={item.images.normal}
                  loading={"lazy"}
                  width={292}
                  height={370}
                />

                <div class="transition-all duration-300 hidden group-hover:flex w-full h-full bg-white/85 z-10 absolute top-0 left-0 items-center justify-center">
                  <Image
                    loading="lazy"
                    width={72}
                    height={72}
                    src={item.images.onHover} />
                </div>
              </a>
              <p class="z-20 w-auto absolute bottom-0 background-primary p-3 rounded-tr text-white font-bold text-center uppercase text-base">
                {item.textLabel}
              </p>
            </Slider.Item>
          ))}
      </Slider>

      <div
        class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
            justify-center absolute top-2/4 left-5 z-10"
      >
        <Slider.PrevButton class="cursor-pointer" disabled={false}>
          <Icon id="chevron-right" class="rotate-180 text-orange-300" />
        </Slider.PrevButton>
      </div>

      <div
        class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
            justify-center absolute top-2/4 right-5 z-10"
      >
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
    <section class="section container mt-5 phone:mt-12 px-2 desktop-sm:px-0 max-w-[1216px] mx-auto">
      {title && (
        <div class={"title"}>
          <h2
            class={"text-2xl  font-bold text-[#808184] text-center mb-4"}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      )}
      <div
        className={`content ${device === "desktop" ? "grid grid-cols-4" : ""}`}
      >
        {device === "desktop" ? (
          <Desktop items={items} />
        ) : (
          <Mobile items={items} />
        )}
      </div>
    </section>
  );
}
