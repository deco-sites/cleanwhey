import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { useDevice as useDevice } from "@deco/deco/hooks";
interface Props {
  title?: string;
  description?: HTMLWidget;
  percentageBanner?: {
    desktop: ImageWidget;
    width?: number;
    heigth?: number;
    mobile: ImageWidget;
    Mobilewidth?: number;
    Mobileheigth?: number;
    alt?: string;
  };
  rightImage?: {
    desktop: ImageWidget;
    width?: number;
    heigth?: number;
    mobile: ImageWidget;
    Mobilewidth?: number;
    Mobileheigth?: number;
    alt: string;
  };
}
export default function DescriptionBannerRight(props: Props) {
  const { title, description, percentageBanner, rightImage } = props;
  const device = useDevice();
  return (
    <section class="bg-white-300 pb-8 md:pb-16" id={"visaogeral"}>
      <div class="container px-4 xl:px-0 flex items-start md:flex-row flex-col justify-between md:gap-5 py-12 xl:py-0">
        <div class="max-w-[522px] content flex flex-col items-center justify-start w-full">
          <h2 class={"text-gray-400 font-bold text-5xl mb-6"}>{title}</h2>
          {description && (
            <div
              class="max-w-lg text-gray-300 text-base font-normal mb-16"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {device === "desktop" && percentageBanner && (
            <Picture>
              <Source
                src={percentageBanner.mobile}
                width={percentageBanner.Mobilewidth || 348}
                media="(max-width: 767px)"
              />
              <Source
                src={percentageBanner.desktop}
                width={percentageBanner.width || 522}
                media="(min-width: 767px)"
              />
              <img
                class="w-full "
                src={percentageBanner.desktop}
                alt={percentageBanner.alt ?? title}
              />
            </Picture>
          )}
          {device === "mobile" && rightImage && (
            <Picture>
              <Source
                src={rightImage.mobile}
                width={rightImage.Mobilewidth || 348}
                height={rightImage.Mobileheigth || 238}
                media="(max-width: 767px)"
              />
              <Source
                src={rightImage.desktop}
                width={rightImage.width || 624}
                height={rightImage.heigth || 428}
                media="(min-width: 767px)"
              />
              <img
                class="w-full cover"
                src={rightImage.desktop}
                alt={rightImage.alt}
              />
            </Picture>
          )}
        </div>
        <div class={"banner w-full max-w-[624px]"}>
          {device === "desktop" && rightImage && (
            <Picture>
              <Source
                src={rightImage.mobile}
                width={rightImage.Mobilewidth || 348}
                height={rightImage.Mobileheigth || 238}
                media="(max-width: 767px)"
              />
              <Source
                src={rightImage.desktop}
                width={rightImage.width || 624}
                height={rightImage.heigth || 428}
                media="(min-width: 767px)"
              />
              <img
                class="w-full"
                src={rightImage.desktop}
                alt={rightImage.alt}
              />
            </Picture>
          )}
          {device === "mobile" && percentageBanner && (
            <Picture>
              <Source
                src={percentageBanner.mobile}
                width={percentageBanner.Mobilewidth || 348}
                height={percentageBanner.Mobileheigth || 92}
                media="(max-width: 767px)"
              />
              <Source
                src={percentageBanner.desktop}
                width={percentageBanner.width || 522}
                height={percentageBanner.heigth || 139}
                media="(min-width: 767px)"
              />
              <img
                class="w-full max-w-[522px]"
                src={percentageBanner.desktop}
                alt={percentageBanner.alt ?? title}
              />
            </Picture>
          )}
        </div>
      </div>
    </section>
  );
}
export function LoadingFallback() {
  return (
    <div style={{ height: "716px" }} class="flex justify-center items-center">
      <span class="loading loading-spinner" />
    </div>
  );
}
