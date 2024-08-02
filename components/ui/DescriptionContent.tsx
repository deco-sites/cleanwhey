import type { SectionProps } from "deco/types.ts";
import { Section } from "deco/blocks/section.ts";

/**
 * @titleBy matcher
 */
export interface Content {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  secoes: Section[];
}

function Content(props: SectionProps<ReturnType<typeof loader>>) {
  const { content } = props;

  if (!content) {
    return null;
  }

  const { secoes } = content;

  return (
    <div class="grid grid-cols-1 grid-rows-1">
        {secoes.map((secao) => (
            <>
              <secao.Component {...secao.props} />
            </>
          ))}
    </div>
  );
}

export interface Props {
  contents?: Content[];
}

export const loader = (props: Props, req: Request) => {
  const { contents } = {...props };

  const content = contents?.find(({ matcher }) =>
    new URLPattern({ pathname: matcher }).test(req.url)
  );

  return { content };
};

export default Content;
