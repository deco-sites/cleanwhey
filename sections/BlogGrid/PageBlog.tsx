import { type SectionProps as SectionProps } from "@deco/deco";
import { type Section as Section } from "@deco/deco/blocks";
import { BlogPost } from "apps/blog/types.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../../components/ui/Icon.tsx";

/**
 * @titleBy matcher
 */
export interface Content {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  secoes: Section[];
}
function Content(props: SectionProps<ReturnType<typeof loader>>) {
  const { content, posts } = props;
  if (!content) {
    return null;
  }
  const { secoes } = content;

  return (
    <div class="flex flex-row   bg-white   px-1.5 lg:mx-auto container ">
      <div class={`flex flex-col  ${posts && " w-full lg:w-4/5"}`}>
        {secoes.map((secao) => (
          <div class={`bg-white-300 flex flex-col px-2.5 `}>
            <secao.Component {...secao.props} />
          </div>
        ))}
      </div>
      {posts && (
        <div class="hidden w-1/5 bg-white-400 rounded lg:flex flex-col justify-start ml-2.5 mt-2.5 gap-2.5 p-2.5 ">
          <h2 class={`font-semibold`}>Confira outras postagens</h2>
          {posts.map((post, i) => {
            if (!post || !post.title || post.categories.length === 0) {
              return null;
            }

            return (
              <div
                key={i}
                class={`w-full bg-white-300 flex flex-row justify-evenly self-start border-2 border-white-300 gap-2 rounded`}
              >
                {post.image && (
                  <Image
                    src={post.image}
                    width={60}
                    height={60}
                    alt={post.alt}
                  />
                )}
                <div
                  class={`flex flex-col w-full snap-center self-center justify-evenly`}
                >
                  <span class={`w-full text-sm font-bold`}>{post.title}</span>
                  {post.categories.map((cat, index) => (
                    <div
                      key={index}
                      class="bg-primary w-fit text-xs rounded-lg px-2.5 "
                    >
                      {cat.name}
                    </div>
                  ))}

                  <div class="flex flex-wrap gap-2 items-center justify-between">
                    <span class="text-gray-300 text-sm font-normal">
                      {post.date
                        ? new Date(post.date)
                            .toLocaleDateString("pt-BR", {
                              month: "short",
                              day: "numeric",
                              year: "2-digit",
                            })
                            .replace(" de ", " ")
                            .replace(".", "")
                            .replace(" de ", ", ")
                        : ""}
                    </span>
                    <a
                      class="bg-primary rounded-lg p-0.5 mr-1"
                      href={`/blog/${post.slug}`}
                    >
                      <Icon class="text-white" id={"arrow-right-custom"} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export interface Props {
  contents?: Content[];
  posts?: BlogPost[] | null;
}
export const loader = (props: Props, req: Request) => {
  const { contents, posts } = props;
  const reqUrl = new URL(req.url);
  const reqPathname = reqUrl.pathname;
  const reqSearchParams = reqUrl.searchParams;
  const content = contents?.find(({ matcher }) => {
    const [matcherPathname, matcherQueryString] = matcher.split("?");

    const isPathnameMatch = reqPathname === matcherPathname;
    if (!isPathnameMatch) {
      return false;
    }

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
  return { content, posts };
};
export default Content;
