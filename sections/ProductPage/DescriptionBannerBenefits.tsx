import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

interface Benefit {
  icon: ImageWidget;
  title: string;
  description: string;
}

interface Props {
  leftImage?: {
    desktop: {
      src: ImageWidget;
      width?: number;
      height?: number;
    };
    mobile: {
      src: ImageWidget;
      width?: number;
      height?: number;
    };
    alt: string;
  };
  /**@description  Recomendado no maximo 110 caracters*/
  title?: HTMLWidget;
  benefits?: Benefit[];
}
export default function DescriptionBannerBenefits(props: Props) {
  const { leftImage, title, benefits } = props;

  return (
    <section class="bg-white-300 pb-8 desktop:pb-16">
      <div className="container px-4 desktop:px-0 flex flex-col desktop:flex-row items-center justify-between desktop:gap-5 desktop:px-2 desktop-sm:px-0">
        <div class={"banner w-full desktop:w-2/4"}>
          {leftImage && (
            <Picture>
              <Source
                src={leftImage.mobile.src}
                width={leftImage.mobile.width ?? 356}
                height={leftImage.mobile.height ?? 277}
                media="(max-width: 767px)"
              />
              <Source
                src={leftImage.desktop.src}
                width={leftImage.desktop.width ?? 1052}
                height={leftImage.desktop.height ?? 948}
                media="(min-width: 767px)"
              />
              <img
                class="w-full desktop:max-w-[576px] mx-auto"
                src={leftImage.desktop.src}
                alt={leftImage.alt}
              />
            </Picture>
          )}
        </div>

        <div class={"desktop:w-[65%] w-full max-w-[668px] py-12 desktop-sm:py-0"}>
          {title && (
            <h2
              class="mb-4 desktop:text-start text-center text-2xl desktop:text-3xl text-[#a1a6b7] font-regular"
              dangerouslySetInnerHTML={{ __html: title.replaceAll(/font-size:[^;"]+;?/g, '') }}
            />
          )}
          <ul class="flex flex-col gap-2">
            {benefits &&
              benefits.map((benefit) => (
                <li class="py-6 px-4 bg-white border rounded-lg border-gray-100 flex flex-col text-center desktop:flex-row desktop:text-start items-center gap-4">
                  <div className="icone">
                    <img src={benefit.icon} loading={"lazy"} />
                  </div>
                  <div className="content flex flex-col gap-1">
                    <h3 class="font-bold text-base text-orange-300">
                      {benefit.title}
                    </h3>
                    <p class="font-normal text-base text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
