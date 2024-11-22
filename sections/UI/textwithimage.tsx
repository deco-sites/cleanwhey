import type { ImageWidget } from "apps/admin/widgets.ts";
import type { RichText } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface Props {
  texto?: RichText;
  image: {
    desktop: ImageWidget;
    widthDesktop: number;
    heigthhDesktop: number;
    mobile: ImageWidget;
    widthMobile: number;
    heigthMobile: number;
    alt?: string;
  };
  placement: "left" | "right";
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  margem: boolean;
}

const BORDER_RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full", // Adicionando a classe para borda totalmente arredondada
};

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

export default function Services({
  image,
  placement,
  texto,
  borderRadius = "none",
  margem,
}: Props) {
  return (
    <div className={`bg-base-100 flex flex-col   ${margem ?? "py-14"} `}>
      <div
        className={`flex xl:container   ${
          margem ?? "py-12 lg:py-28 md:mx-10 mx-5 xl:mx-auto"
        } 
          text-left items-start justify-between
            ${PLACEMENT[placement]}`}
      >
        <Picture className="flex-shrink-0">
          <Source
            media="(max-width: 767px)"
            src={image.mobile}
            width={image.widthMobile}
            height={image.heigthMobile}
          />
          <Source
            media="(min-width: 768px)"
            src={image.desktop}
            width={image.widthDesktop}
            height={image.heigthhDesktop}
          />

          <img
            src={image.desktop}
            alt={image.alt}
            className={`bg-cover ${BORDER_RADIUS[borderRadius]}`}
          />
        </Picture>

        <div className="w-full lg:w-1/2 flex-1 space-y-2 lg:space-y-4 h-full lg:max-w-xl gap-4 items-start text-start min-h-full">
          {texto && (
            <span
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: texto }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
