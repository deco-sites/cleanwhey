import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { type Section as Section } from "@deco/deco/blocks";
export interface Props {
  section: Section;
  image: {
    src: ImageWidget;
    alt?: string;
    href?: string;
  };
}
export default function ShelfWithImage({ section, image }: Props) {
  return (
    <div class="container">
      <div class="grid phone:grid-cols-2 grid-cols-1">
        <div class="phone:max-w-xs mx-auto flex items-center">
          <section.Component {...section.props} />
        </div>
        <a href={image.href}>
          <Image
            src={image.src}
            class="w-full h-full object-cover"
            width={720}
            height={640}
            alt={image.alt}
          />
        </a>
      </div>
    </div>
  );
}
