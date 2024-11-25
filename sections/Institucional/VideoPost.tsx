import { RichText, VideoWidget } from "apps/admin/widgets.ts";

export interface BannerInstitucional {
  /**
   * @title Vídeo
   * @description Vídeo que será exibido
   */
  video?: VideoWidget;
  /**
   * @title Um texto descritivo para acessibilidade
   */
  alt: string;
  /**
   * @title Texto
   * @description Texto que será exibido ao lado da imagem
   */
  texto?: RichText;

  /**
   * @title Ordem
   * @description Define a posição do texto em relação à imagem (esquerda ou direita)
   * @description Se for "left", o texto ficará à esquerda e a imagem à direita. Caso contrário, será o contrário.
   */
  placement: "left" | "right";

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
}

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

export default function BannerInstitucional({
  alt,
  video,
  widthComponente,
  texto,
  placement,
}: BannerInstitucional) {
  return (
    <>
      <div
        className={`flex flex-col w-full mt-2.5 lg:mt-5 xl:container self-center align-center justify-center`}
      >
        <div
          className={`flex w-full gap-5 items-start ${PLACEMENT[placement]}
         `}
        >
          <div className={`${WIDTH_IMAGE[widthComponente]} `}>
            <div class="mx-2.5 lg:container lg:mx-auto flex items-center justify-center mt-5 pb-8">
              {video && (
                <video
                  class="h-full w-full cursor-pointer "
                  controls
                  autoplay
                  alt={alt}
                >
                  <source src={video} type="video/mp4" />
                </video>
              )}
            </div>
          </div>

          <div
            className={` flex   items-start  min-h-full ${WIDTH_TEXT[widthComponente]}`}
          >
            {texto && <span dangerouslySetInnerHTML={{ __html: texto }} />}
          </div>
        </div>
      </div>
    </>
  );
}
