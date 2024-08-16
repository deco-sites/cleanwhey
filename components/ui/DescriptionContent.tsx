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
    <div class="grid grid-cols-1 grid-rows-1 bg-white-300">
      {secoes.map((secao) => (
        <div class="bg-white-300">
          <secao.Component {...secao.props} />
        </div>
      ))}
    </div>
  );
}

export interface Props {
  contents?: Content[];
}

export const loader = (props: Props, req: Request) => {
  const { contents } = { ...props };

  const reqUrl = new URL(req.url);
  const reqPathname = reqUrl.pathname;
  const reqSearchParams = reqUrl.searchParams;

  const content = contents?.find(({ matcher }) => {
    // Separa o matcher em pathname e queryString manualmente
    const [matcherPathname, matcherQueryString] = matcher.split("?");

    // Verifica o pathname manualmente
    const isPathnameMatch = reqPathname === matcherPathname;

    if (!isPathnameMatch) {
      return false;
    }

    // Verifica a queryString se ela existir no matcher
    if (matcherQueryString) {
      const matcherSearchParams = new URLSearchParams(matcherQueryString);
      for (const [key, value] of matcherSearchParams.entries()) {
        if (reqSearchParams.get(key) !== value) {
          return false;
        }
      }
    }

    return true;
  });

  return { content };
};

export default Content;
