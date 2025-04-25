import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { useDevice as useDevice } from "@deco/deco/hooks";
interface Props {
  banner?: {
    desktop?: {
      src: ImageWidget;
      alt: string;
      width?: number;
      height?: number;
    };
    mobile?: {
      src: ImageWidget;
      alt: string;
      width?: number;
      height?: number;
    };
  };
  title?: string;
  subtitle?: string;
  content?: HTMLWidget;
  rightCard?: {
    title?: string;
    content?: HTMLWidget;
  };
}
export default function DescriptionFullbanner(props: Props) {
  const { banner, title, subtitle, content, rightCard } = props;
  const device = useDevice();
  return (
    <section>
      <div
        class={`relative w-full pb-8 desktop:pb-16 desktop:mb-16 bg-no-repeat bg-center bg-cover desktop:min-h-96 desktop:px-2 desktop-sm:px-0`}
        style={{
          backgroundImage: `${device == "desktop"
              ? `url(${banner?.desktop?.src}`
              : `url(${banner?.mobile?.src}`
            })`,
        }}
      >
        {
          /* {banner && banner.mobile && banner.desktop && (
        <Picture>
          <Source
            media="(max-width: 640px)"
            src={banner.mobile.src}
            width={banner.mobile.width ?? 380}
            height={banner.mobile.height ?? 1087}
          />
          <Source
            media="(min-width: 640px)"
            src={banner.desktop.src}
            width={banner.desktop.width ?? 1366}
            height={banner.desktop.height ?? 424}
          />
          <img
            src={banner.desktop.src}
            alt={title}
            class="w-full object-cover"
          />
        </Picture>
      )} */
        }
        <div class="w-full top-0 left-0 h-full flex flex-col desktop:flex-row items-center">
          <div
            class={`flex px-4 pt-12 desktop:px-0 desktop:items-start items-center flex-col desktop:flex-row h-auto gap-8 desktop:gap-16 container justify-end mb-96 desktop:mb-0`}
          >
            <div class="max-w-[384px]">
              <h2 class="font-bold text-white text-[32px] mb-2 leading-9 text-center desktop:text-start">
                {title}
              </h2>
              <p class="font-bold text-base text-white mb-4 text-center desktop:text-start">
                {subtitle}
              </p>
              {content && (
                <div
                  class={"text-white [&>ul]:pl-8 [&>ul>li]:mb-2 [&>ul>li]:!list-disc"}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
            {rightCard && rightCard.title != "" && (
              <div class="bg-white rounded-lg p-4 max-w-[384px]">
                <h3 class="mb-4 text-gray-400 font-bold">{rightCard?.title}</h3>
                <hr class="mb-4 text-gray-100" />
                {rightCard?.content && (
                  <div
                    class="font-normal text-gray-300 font-base [&>ul]:pl-8 [&>ul>li]:mb-2 [&>ul>li]:!list-disc"
                    dangerouslySetInnerHTML={{ __html: rightCard?.content }}
                  />
                )}
              </div>
            )}

            {!rightCard?.title && <div class="p-4 max-w-[384px] w-full"></div>}
          </div>
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
