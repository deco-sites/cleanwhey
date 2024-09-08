import type { SectionProps } from "deco/types.ts";

interface Card {
  subtitle?: string;
  /** @format rich-text */
  description?: string;
}
/**
 * @titleBy matcher
 */
export interface Section {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  /** @format rich-text */
  title?: string;
  cards?: Card[];
}

function Section(props: SectionProps<ReturnType<typeof loader>>) {
  const { section } = props;

  if (!section) {
    return null;
  }

  const { title, cards } = section;

  return (
    <section class={"section container md:px-0 px-4"}>
      {title && (
        <div class="title">
          <h2
            class="text-2xl font-bold text-gray-200 md:text-left text-center mb-4 pb-2 md:px-0 px-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      )}
      <div class="grid md:grid-cols-3 mb-4 grid-cols-1 gap-2 md:px-0 px-4">
        {cards && cards.length > 0 &&
          cards.map((card) => (
            <div class="border border-gray-100 bg-white-300 rounded p-4">
              <h3 class="text-base font-bold md:text-left text-center text-orange-300">
                {card.subtitle}
              </h3>
              {card.description && (
                <span
                  dangerouslySetInnerHTML={{ __html: card.description }}
                  class="text-gray-300 text-base md:text-left text-center"
                />
              )}
            </div>
          ))}
      </div>
    </section>
  );
}

export interface Props {
  sections?: Section[];
}

export const loader = (props: Props, req: Request) => {
  const { sections } = { ...props };

  const section = sections?.find(({ matcher }) =>
    new URLPattern({ pathname: matcher }).test(req.url)
  );

  return { section };
};

export default Section;
