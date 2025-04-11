import { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";
import { useDevice as useDevice } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";
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
            <div
              class={`w-full h-full relative overflow-hidden`}
            >
              <img
                class={`w-full h-full`}
                src={item.image}
                width={455}
                height={428}
                loading={"lazy"}
              />
            </div>
            <a
              class="text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.50)] absolute top-0  left-0 w-full h-full flex flex-col items-center justify-center text-center"
              href={item.link?.url}
            >
              <p class="mb-3 font-regular text-sm text-white">
                {item.subtitle}
              </p>
              <h2
                class={`max-w-[275px] ${item.flag ? "mb-6" : "mb-12"
                  } font-bold text-xl phone:text-2xl text-white`}
              >
                {item.title}
              </h2>
              {item.flag && <img class="max-w-[150px]" src={item.flag} />}
              {!item.flag && (
                <span class="text-white text-sm font-regular">
                  {item.link?.title}
                </span>
              )}
            </a>
          </div>
        ))}
    </>
  );
};
const Mobile = ({ items }: Props) => {
  const id = useId();
  return (
    <section id={id} class="relative">
      <Slider className="carousel carousel-center max-w-md space-x-4 p-4 phone:pr-4 phone:pl-4 pr-0">
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
                <Image
                  width={305}
                  height={286}
                  alt={item.title}
                  class={`w-full`} src={item.image} loading={"lazy"} />
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
                  class={`max-w-[275px] ${item.flag ? "mb-6" : "mb-12"
                    } font-bold text-xl phone:text-2xl text-white`}
                >
                  {item.title}
                </h2>
                {item.flag &&
                  <Image
                    width={132}
                    class="max-w-[150px] object-contain w-full"
                    src={item.flag}
                    alt={item.title} />}
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
