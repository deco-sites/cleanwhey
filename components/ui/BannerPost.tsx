import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";
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
    <div class="container">
      <Image
        class={` w-full h-full`}
        src={image.desktop}
        alt={image.alt}
        width={image.widthDesktop}
        height={image.heightDesktop}
      />
    </div>
  );
}

export default BannerPost;
