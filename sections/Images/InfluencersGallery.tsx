import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import { useDevice as useDevice } from "@deco/deco/hooks";
interface influencers {
  images: {
    normal: ImageWidget;
  };
  link: string;
  textLabel: string;
  description: RichText;
}
export interface Props {
  title?: RichText;
  items: influencers[];
  conteudoFlutuante: {
    text: RichText;
    link: string;
    label?: string;
  };
}
const Desktop = ({ items, conteudoFlutuante }: Props) => {
  const id = useId();
  return (
    <section>
      <div id={id} class="relative">
        <Slider className="carousel gap-1.5 md:pr-4 md:pl-4">
          {items &&
            items.map((item, index) => (
              <Slider.Item
                index={index}
                class="carousel-item relative group !ml-0 flex w-1/4 duration-300 h-full transition-all items-center justify-center"
              >
                <a
                  class={`rounded-lg w-full h-full transition-all duration-300 relative overflow-hidden`}
                  href={item.link}
                >
                  <Image
                    class={`rounded-lg w-full duration-300 transition-all  min-h-[470px] max-h-[470px] h-full `}
                    src={item.images.normal}
                    loading={"lazy"}
                    width={300}
                    height={470}
                  />
                  <div class="font-regular text-sm leading-4 transition-all text-left text-white py-8 px-6 duration-300 hidden bg-[#385A88CC] group-hover:flex flex-col w-full h-full z-10 absolute top-0 left-0 overflow-y-scroll items-start justify-start scroll-custom overflow-x-hidden rounded-md">
                    <h2 class={"font-bold mb-6"}>{item.textLabel}</h2>
                    <span
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      class="[&_*]:text-[14x] [&_*]:leading-normal"
                    />
                  </div>
                </a>
                <p class="z-20 w-[90%] group-hover:hidden absolute top-8 bg-[#163E73D9] p-1.5 font-regular rounded-lg text-white  text-center text-lg">
                  {item.textLabel}
                </p>
              </Slider.Item>
            ))}
        </Slider>
        {items && items.length > 4 && (
          <>
            <div
              class="rounded-full border-gray-200 border bg-white w-8 h-8 z-10 flex items-center 
                justify-center absolute top-2/4 left-4"
            >
              <Slider.PrevButton class="cursor-pointer" disabled={false}>
                <Icon id="chevron-right" class="rotate-180 text-orange-300" />
              </Slider.PrevButton>
            </div>
            <div
              class="rounded-full border-gray-200 border bg-white w-8 h-8 z-10 flex items-center 
                justify-center absolute top-2/4 right-4"
            >
              <Slider.NextButton class="cursor-pointer" disabled={false}>
                <Icon id="chevron-right" class="text-orange-300" />
              </Slider.NextButton>
            </div>
            <Slider.JS rootId={id} />
          </>
        )}
      </div>

      <div class="relative mt-2.5 m-auto z-30 !text-center max-w-lg border rounded-lg p-6 border-gray-200 bg-white">
        <div
          class="text-gray-300 mb-4"
          dangerouslySetInnerHTML={{ __html: conteudoFlutuante.text }}
        />
        <a
          href={conteudoFlutuante.link}
          class="bg-orange-300 block text-center w-full rounded-lg py-2 px-4 text-white text-base font-normal"
        >
          {conteudoFlutuante.label ? conteudoFlutuante.label : "Saiba mais"}
        </a>
      </div>
    </section>
  );
};
const Mobile = ({ items, conteudoFlutuante }: Props) => {
  const id = useId();
  return (
    <section>
      <div id={id} class="relative">
        <Slider className="carousel carousel-center max-w-md space-x-4 p-4 gap-1.5 md:pr-4 md:pl-4 pr-0">
          {items &&
            items.map((item, index) => (
              <Slider.Item
                index={index}
                class="carousel-item relative group !ml-0 flex w-[85%] duration-300 h-full transition-all items-center justify-center"
              >
                <a
                  class={`rounded-lg w-full h-full transition-all duration-300 relative overflow-hidden`}
                  href={item.link}
                >
                  <Image
                    class={`rounded-lg w-full duration-300 transition-all  min-h-[470px] max-h-[470px] h-full `}
                    src={item.images.normal}
                    loading={"lazy"}
                    width={300}
                    height={470}
                  />
                  <div class="font-regular text-sm leading-4 transition-all text-left text-white py-8 px-6 duration-300 hidden bg-[#385A88CC] group-hover:flex flex-col w-full h-full z-10 absolute top-0 left-0 overflow-y-scroll items-start justify-start scroll-custom overflow-x-hidden rounded-md">
                    <h2 class={"font-bold mb-6"}>{item.textLabel}</h2>
                    <span
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      class="[&_*]:text-[14x] [&_*]:leading-normal"
                    />
                  </div>
                </a>
                <p class="z-20 w-[90%] group-hover:hidden absolute top-8 bg-[#163E73D9] p-1.5 font-regular rounded-lg text-white  text-center text-lg">
                  {item.textLabel}
                </p>
              </Slider.Item>
            ))}
        </Slider>

        <div
          class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
                justify-center absolute top-2/4 left-4"
        >
          <Slider.PrevButton class="cursor-pointer" disabled={false}>
            <Icon id="chevron-right" class="rotate-180 text-orange-300" />
          </Slider.PrevButton>
        </div>

        <div
          class="rounded-full border-gray-200 border bg-white w-8 h-8 flex items-center 
                justify-center absolute top-2/4 right-4"
        >
          <Slider.NextButton class="cursor-pointer" disabled={false}>
            <Icon id="chevron-right" class="text-orange-300" />
          </Slider.NextButton>
        </div>

        <Slider.JS rootId={id} />
      </div>

      <div class="relative mt-2.5 m-auto z-30 !text-center max-w-[90%] border rounded-lg p-6 border-gray-200 bg-white">
        <div
          class="text-gray-300 mb-4"
          dangerouslySetInnerHTML={{ __html: conteudoFlutuante.text }}
        />
        <a
          href={conteudoFlutuante.link}
          class="bg-orange-300 block text-center w-full rounded-lg py-2 px-4 text-white text-base font-normal"
        >
          {conteudoFlutuante.label ? conteudoFlutuante.label : "Saiba mais"}
        </a>
      </div>
    </section>
  );
};
export default function InfluencersGallery({
  title,
  items,
  conteudoFlutuante,
}: Props) {
  const device = useDevice();
  return (
    <section class="section container mb-12">
      {title && (
        <div class={"title"}>
          <h2
            class={"text-2xl font-bold text-gray-200 text-center mb-4 px-4"}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      )}
      <div className={`content`}>
        {device === "desktop" ? (
          <Desktop items={items} conteudoFlutuante={conteudoFlutuante} />
        ) : (
          <Mobile items={items} conteudoFlutuante={conteudoFlutuante} />
        )}
      </div>
    </section>
  );
}
