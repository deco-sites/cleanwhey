import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
// import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "apps/blog/types.ts";
// import { useId } from "../../sdk/useId.ts";
import Icon from "../../components/ui/Icon.tsx";

export interface CTA {
  text?: string;
  link?: string;
}

/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  button: boolean;
  cta?: CTA;
  sectionTitle?: HTMLWidget;
  posts?: BlogPost[] | null;
  pagination?: {
    /**
     * @title First page
     * @description Leave it as 0 to start from the first page
     */
    page?: number;
    /** @title items per page */
    perPage?: number;
  };
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

function Container({ children }: { children: ComponentChildren }) {
  return (
    <div class="container lg:mx-auto  mx-0 my-5 lg:my-10 text-sm">
      <div class="space-y-8">{children}</div>
    </div>
  );
}

export default function BlogPosts({
  cta = { text: "Ver todas as postagens", link: " " },
  button = false,
  sectionTitle,
  posts = [],
  pagination: { page = 0, perPage = 6 } = {},
}: Props) {
  const from = perPage * page;
  const to = perPage * (page + 1);

  // It's boring to generate ids. Let's autogen them
  // const postList = useId();

  // Get the HTMX link for this section
  // const fetchMoreLink = usePartialSection({
  //   mode: "append",
  //   // Renders this section with the next page
  //   props: {
  //     pagination: { perPage, page: page + 1 },
  //   },
  // })["f-partial"];

  // function calculateReadingTime(words: number): string {
  //   const wordsPerMinute = 250;
  //   const estimatedTimeMinutes = words / wordsPerMinute;

  //   const roundedReadingTime = Math.round(estimatedTimeMinutes);
  //   return `${roundedReadingTime} min`;
  // }

  const ContainerComponent = page === 0 ? Container : Fragment;
  return (
    <ContainerComponent>
      <>
        {sectionTitle && (
          <h2
            class="text-center font-bold text-2xl text-gray-300"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
        )}

        <div class="gap-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 py-5">
          {posts?.slice(from, to).map((post) => (
            <div class="overflow-hidden rounded-lg flex flex-col bg-white-300 p-2.5 max-w-72 mx-auto lg:mx-0">
              <figure class="relative">
                <Image
                  width={635}
                  height={953}
                  class="w-full min-h-[400px] max-h-[400px] object-cover"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={post.image || DEFAULT_IMAGE}
                  alt={post.image}
                  decoding="async"
                  loading="lazy"
                  id={post.slug}
                />

                <div class="flex flex-wrap gap-2 absolute -bottom-3 left-0">
                  {post.categories?.map((category) => (
                    <div class="px-2 badge text-white badge-lg rounded-lg text-sm border border-orange-300  bg-primary">
                      {category.name}
                    </div>
                  ))}
                </div>
              </figure>
              <div class="p-2 space-y-4 flex flex-col flex-1">
                <div class="space-y-2 flex-1">
                  <h3
                    class="text-base text-gray-400 font-normal mt-2.5"
                    id={`title-${post.slug}`}
                  >
                    {post.title}
                  </h3>
                </div>

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
                    class="bg-primary rounded-lg p-2.5"
                    href={`/blog/${post.slug}`}
                  >
                    <Icon class="text-white" id={"arrow-right-custom"} />
                  </a>
                  {
                    /* <span>•</span>
                  <span>{post.authors[0]?.name}</span> */
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* {to < (posts?.length || 1000) && ( */}
        {button && (
          <a href={cta.link} class="flex justify-center w-full pb-6">
            <span class="text-blue-300 font-normal text-sm inline border border-blue-300 rounded-lg py-3 px-4">
              {cta.text}
            </span>
          </a>
        )}
      </>
    </ContainerComponent>
  );
}
