import { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice as useDevice } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";
export interface Benefits {
  image: ImageWidget;
  title: string;
  subtitle: string;
}
export interface Props {
  items: Benefits[];
}
const Desktop = ({ items }: Props) => {
  return (
    <section class="container border-b border-gray-100 pb-8 px-2 desktop-sm:px-0">  
      <div class="grid grid-cols-4 max-w-[1216px] mx-auto">
        {items &&
          items.map((item) => (
            <div class={"flex flex-col gap-2 justify-center items-center"}>
              <Image
                width={32}
                height={32}
                loading="lazy"
                src={item.image}
                alt={item.title}
                class="w-8 h-8"
              />
              <div class="text-center">
                <h2 class="text-lg font-bold text-orange-300">{item.title}</h2>
                <p class="text-base font-regular text-[#808184]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
const Mobile = ({ items }: Props) => {
  return (
    <div className="container pb-6 border-b border-gray-100 flex">
      <div className="carousel carousel-center w-full max-w-6xl justify-between space-x-4 p-4 mx-auto">
        {items &&
          items.map((item) => (
            <div
              class={
                "carousel-item flex flex-col gap-2 justify-center items-center"
              }
            >
              <figure class="w-8 h-8">
                <img src={item.image} />
              </figure>
              <div class="text-center">
                <h2 class="text-lg font-bold text-orange-300">{item.title}</h2>
                <p class="text-base font-regular text-gray-200">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default function Regua(props: Props) {
  const device = useDevice();
  return (
    <>
      {device === "desktop" ? (
        <Desktop items={props.items} />
      ) : (
        <Mobile items={props.items} />
      )}
    </>
  );
}
