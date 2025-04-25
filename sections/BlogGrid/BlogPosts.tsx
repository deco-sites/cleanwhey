import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "apps/blog/types.ts";
import Icon from "../../components/ui/Icon.tsx";
import Slider from "../../components/ui/Slider.tsx";
import { useId } from "../../sdk/useId.ts";

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
    <div class="container desktop:mx-auto  mx-0 my-5 desktop:my-10 text-sm">
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

  const ContainerComponent = page === 0 ? Container : Fragment;

  const id = useId();
  return (
    <div id={id} class={"relative"}>
      <ContainerComponent>
        <>
          {sectionTitle && (
            <h2
              class="text-center font-bold text-2xl text-gray-300"
              dangerouslySetInnerHTML={{ __html: sectionTitle }}
            />
          )}

          <Slider className="carousel carousel-center max-w-full w-full desktop:justify-center space-x-4 p-4 phone:pr-4 phone:pl-4 relative">
            <div class="gap-4 flex py-5 px-4">
              {posts?.slice(from, to).map((post, index) => (
                <Slider.Item index={index} class="carousel-item overflow-hidden rounded-lg flex flex-col bg-white-300 max-w-[270px] p-2.5 w-full desktop:mx-0">
                  <figure class="relative">
                    <Image
                      width={635}
                      height={953}
                      class="w-full object-cover"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      src={post.image || DEFAULT_IMAGE}
                      alt={post.image}
                      decoding="async"
                      loading="lazy"
                      id={post.slug}
                    />

                    <div class="flex flex-wrap gap-2 absolute -bottom-3 left-0">
                      {post.categories?.map((category) => (
                        <div class="px-2 badge text-white badge-lg rounded-lg text-sm border border-orange-300  background-primary">
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
                        class="background-primary rounded-lg p-2.5"
                        href={`/blog/${post.slug}`}
                      >
                        <Icon class="text-white" id={"arrow-right-custom"} />
                      </a>
                    </div>
                  </div>
                </Slider.Item>
              ))}
            </div>
          </Slider>

          <Slider.JS rootId={id} />

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
    </div>
  );
}
