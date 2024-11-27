import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
/**
 * @titleBy matcher
 */
export interface BannerPost {
  image: {
    /** @description Imagem para telas grandes */
    desktop: ImageWidget;
    widthDesktop: number;
    heightDesktop: number;

    /** @description Imagem para telas pequenas */
    mobile: ImageWidget;
    widthMobile: number;
    heightMobile: number;

    /** @description Texto alternativo da imagem */
    alt?: string;
  };
}

function BannerPost(props: BannerPost) {
  const { image } = props;

  return (
    <div class="grid grid-cols-1 grid-rows-1 container">
      <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
        <Source
          src={image.mobile}
          width={image.widthMobile}
          height={image.heightMobile}
          media="(max-width: 767px)"
        />
        <Source
          src={image.desktop}
          width={image.widthDesktop}
          height={image.heightMobile}
          media="(min-width: 767px)"
        />
        <img class="w-full bg-cover" src={image.desktop} alt={image.alt} />
      </Picture>
    </div>
  );
}

export default BannerPost;
