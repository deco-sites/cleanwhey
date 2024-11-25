import type { ImageWidget } from "apps/admin/widgets.ts";
import type { RichText } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Texto
   * @description Texto que será exibido ao lado da imagem
   */
  texto?: RichText;
  /**
   * @title Tamanho do componente
   * @description Tamanho que o componente de imagem vai ocupar
   */
  widthComponente:
    | "1/2"
    | "1/3"
    | "2/3"
    | "1/4"
    | "3/4"
    | "1/5"
    | "2/5"
    | "3/5"
    | "4/5"
    | "1/6"
    | "2/6"
    | "4/6"
    | "5/6"
    | "1/12"
    | "2/12"
    | "3/12"
    | "4/12"
    | "5/12"
    | "7/12"
    | "8/12"
    | "9/12"
    | "10/12"
    | "11/12";
  /**
   * @description Informações da imagem, incluindo as versões para desktop e mobile
   */
  image: {
    desktop: ImageWidget;
    widthDesktop: number;
    heightDesktop: number;
    mobile: ImageWidget;
    widthMobile: number;
    heightMobile: number;
    alt?: string;
  };

  /**
   * @title Ordem
   * @description Define a posição do texto em relação à imagem (esquerda ou direita)
   * @description Se for "left", o texto ficará à esquerda e a imagem à direita. Caso contrário, será o contrário.
   */
  placement: "left" | "right";

  /**
   * @title Bordas da imagem
   * @description Define o border-radius da imagem. Pode ser "none", "sm", "md", "lg", "xl", "full".
   * @description Isso irá determinar se a imagem terá bordas arredondadas e o quanto.
   */
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";

  /**
   * @title Margens
   * @description Permite aplicar margem abaixo da section ao componente (se verdadeiro aplica margem extra).
   */
  margem: boolean;

  /**
   * @title Margem na exibição de computador
   * @description Margens verticais do componente no desktop (em px). Se não for definido, será 0.
   * @description Essa propriedade controlará o espaçamento superior e inferior no desktop.
   */
  marginYDesktop?: number;

  /**
   * @title Margem em mobile
   * @descriptionMargem fixa de 6px no mobile.
   * @descriptionEssa propriedade controla a margem no eixo Y no layout móvel.
   */
  marginYMobile?: number;
}

const BORDER_RADIUS = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};
const WIDTH_IMAGE = {
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "2/6": "w-2/6",
  "4/6": "w-4/6",
  "5/6": "w-5/6",
  "1/12": "w-1/12",
  "2/12": "w-2/12",
  "3/12": "w-3/12",
  "4/12": "w-4/12",
  "5/12": "w-5/12",
  "7/12": "w-7/12",
  "8/12": "w-8/12",
  "9/12": "w-9/12",
  "10/12": "w-10/12",
  "11/12": "w-11/12",
};
const WIDTH_TEXT = {
  "1/2": "w-1/2",
  "1/3": "w-2/3",
  "2/3": "w-1/3",
  "1/4": "w-3/4",
  "3/4": "w-1/4",
  "1/5": "w-4/5",
  "2/5": "w-3/5",
  "3/5": "w-2/5",
  "4/5": "w-1/5",
  "1/6": "w-5/6",
  "2/6": "w-4/6",
  "4/6": "w-2/6",
  "5/6": "w-1/6",
  "1/12": "w-11/12",
  "2/12": "w-10/12",
  "3/12": "w-9/12",
  "4/12": "w-8/12",
  "5/12": "w-7/12",
  "7/12": "w-5/12",
  "8/12": "w-4/12",
  "9/12": "w-3/12",
  "10/12": "w-2/12",
  "11/12": "w-1/12",
};

const PLACEMENT = {
  left: "flex-col lg:flex-row-reverse",
  right: "flex-col lg:flex-row",
};

export default function TextImage({
  image,
  placement,
  texto,
  borderRadius = "none",
  margem,
  marginYMobile,
  marginYDesktop = 0,
  widthComponente,
}: Props) {
  return (
    <div
      className={`flex flex-col w-full mt-2.5 lg:mt-5 xl:container ${
        margem ? "mb-14" : ""
      }
        ${marginYDesktop ? `lg:my-[${marginYDesktop}px]` : ""}
        ${marginYMobile ? `lg:my-[${marginYMobile}px]` : ""}
        `}
    >
      <div
        className={`flex w-full gap-5 items-start ${PLACEMENT[placement]}
         `}
      >
        <div className={`${WIDTH_IMAGE[widthComponente]} `}>
          <Picture>
            <Source
              media="(max-width: 767px)"
              src={image.mobile}
              width={image.widthMobile}
              height={image.heightMobile}
            />
            <Source
              media="(min-width: 768px)"
              src={image.desktop}
              width={image.widthDesktop}
              height={image.heightDesktop}
            />
            <Image
              src={image.desktop}
              alt={image.alt}
              width={image.widthDesktop}
              height={image.heightDesktop}
              className={`bg-cover w-full ${BORDER_RADIUS[borderRadius]}`}
            />
          </Picture>
        </div>

        <div
          className={` flex   items-start  min-h-full ${WIDTH_TEXT[widthComponente]}`}
        >
          {texto && <span dangerouslySetInnerHTML={{ __html: texto }} />}
        </div>
      </div>
    </div>
  );
}
