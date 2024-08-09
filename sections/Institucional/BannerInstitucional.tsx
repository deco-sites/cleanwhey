import { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface BannerInstitucional {
  img: {
    desktop: {
      image: ImageWidget;
      width: number;
      height: number;
    };
    mobile: {
      image: ImageWidget;
      width: number;
      height: number;
    };
    alt: string;
    isVideo?: boolean;
    video?: VideoWidget;
    videoThumbnail?: ImageWidget;
  };
}

export default function BannerInstitucional({
  img,
}: BannerInstitucional) {
  return (
    <>
      <div class="mx-auto flex items-center justify-center pb-8">
        {!img.isVideo && (
          <Picture>
            <Source
              media="(max-width: 767px)"
              src={img.mobile.image}
              width={img.mobile.width}
              height={img.mobile.height}
            />
            <Source
              media="(min-width: 768px)"
              src={img.desktop.image}
              width={img.desktop.width}
              height={img.desktop.height}
            />

            <img src={img.desktop.image} alt={img.alt} />
          </Picture>
        )}

        {img.isVideo && img.video && (
          <video
            poster={img.videoThumbnail}
            class="h-full w-full cursor-pointer rounded-lg"
            controls
          >
            <source
              src={img.video}
              type="video/mp4"
            />
          </video>
        )}
      </div>
    </>
  );
}
