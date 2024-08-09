import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { useDevice } from "deco/hooks/useDevice.ts";
import Icon from "../../components/ui/Icon.tsx";

export interface Question {
  question: string;
  answer: HTMLWidget;
}

interface Props {
  id: string;
  title: string;
  table: {
    altText: string;
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
  };
  ingredients: {
    title: string;
    content: HTMLWidget;
  };
  nutritionalPromotionImage: {
    altText: string;
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
  };
  questions?: Question[];
}

function Question({ question, answer }: Question) {
  return (
    <details
      open
      class="m-auto collapse collapse-open collapse-arrow border border-gray-100 bg-white"
    >
      <summary
        class={`collapse-title after:!h-3 after:!w-3 
        after:text-orange-300 text-2xl text-gray-300 font-bold gap-2 
        !flex items-center`}
      >
        {question}
      </summary>
      <div
        class="collapse-content"
        dangerouslySetInnerHTML={{ __html: answer }}
      />
    </details>
  );
}

export default function NutritionalInformation(props: Props) {
  const {
    id,
    title,
    table,
    ingredients,
    nutritionalPromotionImage,
    questions,
  } = props;
  const device = useDevice();

  return (
    <section class="bg-white-300 pb-8 md:pb-8" id={id}>
      <div className="container px-4 md:px-0">
        <h2 class={"font-bold mb-6 text-gray-400 text-[32px] md:text-5xl"}>
          {title}
        </h2>
      </div>
      <div className="container flex flex-col md:flex-row px-4 md:px-0">
        <div class="tabela mb-6 w-full rounded-lg md:px-8 md:bg-white md:max-w-[730px] md:mr-6">
          <Picture>
            <Source
              src={table.mobile.src}
              width={table.mobile.width ?? 350}
              height={table.mobile.height ?? 718}
              media="(max-width: 767px)"
            />
            <Source
              src={table.desktop.src}
              width={table.desktop.width ?? 350}
              height={table.desktop.height ?? 718}
              media="(min-width: 767px)"
            />
            <img
              class="w-full"
              src={table.desktop.src}
              loading={"lazy"}
              alt={table.altText ?? title}
            />
          </Picture>
        </div>
        <div class="double-content flex flex-col w-full md:max-w-[462px]">
          <div className="ingredientes mb-6 bg-white rounded-lg p-4">
            <h3 class="mb-4 text-gray-400 text-base font-bold">
              {ingredients.title}
            </h3>
            <hr class={"mb-4 text-gray-100"} />
            <div
              class="text-gray-300 font-normal text-base"
              dangerouslySetInnerHTML={{ __html: ingredients.content }}
            />
          </div>

          {device === "mobile" && (
            <div class="mb-6">
              <ul class="w-full">
                <li class="gap-2 flex flex-col">
                  {questions?.map((question) => <Question {...question} />)}
                </li>
              </ul>
            </div>
          )}

          <div class="promotion-image mb-8">
            <Picture>
              <Source
                src={nutritionalPromotionImage.mobile.src}
                width={nutritionalPromotionImage.mobile.width ?? 350}
                height={nutritionalPromotionImage.mobile.height ?? 718}
                media="(max-width: 767px)"
              />
              <Source
                src={nutritionalPromotionImage.desktop.src}
                width={nutritionalPromotionImage.desktop.width ?? 350}
                height={nutritionalPromotionImage.desktop.height ?? 718}
                media="(min-width: 767px)"
              />
              <img
                class="w-full"
                src={nutritionalPromotionImage.desktop.src}
                alt={nutritionalPromotionImage.altText ?? title}
              />
            </Picture>
          </div>
        </div>
      </div>
      {device === "desktop" && (
        <div className="container px-4 md:px-0">
          <div class="pb-6">
            <ul class="w-full">
              <li class="gap-2 flex flex-col">
                {questions?.map((question) => <Question {...question} />)}
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
