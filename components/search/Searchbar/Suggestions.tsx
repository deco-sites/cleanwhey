import { Product, Suggestion } from "apps/commerce/types.ts";
import type { AppContext } from "../../../apps/site.ts";
import { clx } from "../../../sdk/clx.ts";
import { ComponentProps } from "../../../sections/Component.tsx";
import Icon from "../../ui/Icon.tsx";
import { ACTION, NAME } from "./Form.tsx";
import Image from "apps/website/components/Image.tsx";
import { useOffer } from "../../../sdk/useOffer.ts";
import { formatPrice } from "../../../sdk/format.ts";
import { type Resolved } from "@deco/deco";
import { useScript } from "@deco/deco/hooks";
import {
  getRecentSearches,
  addRecentSearch,
} from "../../../sdk/searchHistory.tsx";

export interface Props {
  /**
   * @title Suggestions Integration
   * @todo: improve this typings ({query: string, count: number}) => Suggestions
   */
  loader: Resolved<Suggestion | null>;
  term: string;
}
export const action = async (props: Props, req: Request, ctx: AppContext) => {
  const {
    loader: { __resolveType, ...loaderProps },
    term,
  } = props;
  const form = await req.formData();
  const query = `${form.get(NAME ?? "q")}`;
  // @ts-expect-error This is a dynamic resolved loader
  const suggestion = (await ctx.invoke(__resolveType, {
    ...loaderProps,
    query,
  })) as Suggestion | null;
  const valor = form.get("q");

  if (valor) {
    addRecentSearch(valor as string);
  }
  return { suggestion, query };
};
export const loader = async (props: Props, req: Request, ctx: AppContext) => {
  const {
    loader: { __resolveType, ...loaderProps },
  } = props;
  const query = new URL(req.url).searchParams.get(NAME ?? "q");
  // @ts-expect-error This is a dynamic resolved loader
  const suggestion = (await ctx.invoke(__resolveType, {
    ...loaderProps,
    query,
  })) as Suggestion | null;

  return { suggestion, query };
};
function Suggestions({
  suggestion,
}: ComponentProps<typeof loader, typeof action>) {
  const { products = [], searches = [] } = suggestion ?? {};
  const searchHistory = getRecentSearches();
  const hasTerms = Boolean(searches.length);
  const newProducts: Product[] = [];
  products?.map((item) => {
    if (!item.category?.includes("Clean Whey Medical")) {
      newProducts.push(item);
    }
  });
  const hasProducts = Boolean(newProducts.length);
  return (
    <div
      id={"modal"}
      class={clx(
        `overflow-y-scroll mt-2 `,
        "before:content-['']  before:h-screen before:bg-black before:absolute before:-z-10 before:left-[-100vw] before:right-0 before:w-[200vw] before:opacity-50 before:bg-black-100",
        !hasProducts && !hasTerms && "hidden"
      )}
      style={{ display: `${(!hasProducts && !hasTerms && "none") || "flex"}` }}
      hx-on:click={useScript(() => {
        const modal: HTMLDivElement | null =
          document.querySelector("#modal") || null;
        modal!.style.display = "none";
      })}
    >
      <div class="gap-4 grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 p-4 w-full bg-white">
        <div class="flex flex-col gap-6">
          <span
            class="font-bold text-18 text-blue-300 border-b border-orange-100 pb-2 w-36"
            role="heading"
            aria-level={3}
          >
            {newProducts.length > 0 && searches.length === 0
              ? "Produtos"
              : "Buscas populares"}
          </span>

          <ul class="flex flex-col gap-6">
            {searches.length > 0 &&
              searches.map(({ term }, index) => (
                <li>
                  {/* TODO @gimenes: use name and action from searchbar form */}
                  <a
                    href={`${ACTION}?${NAME}=${term}`}
                    class="flex gap-1 items-center"
                    onClick={() => addRecentSearch(term)}
                  >
                    {/* <Icon id="searchRecent" class={"text-[#A1A6B7]"}/> */}
                    {index + 1} -{" "}
                    <span dangerouslySetInnerHTML={{ __html: term }} />
                  </a>
                </li>
              ))}
            {newProducts.length > 0 &&
              searches.length === 0 &&
              newProducts.map((product) => {
                const title = product.isVariantOf?.name ?? product.name;
                const variantName = title
                  ?.toLowerCase()
                  .replace("cor:", "")
                  .replace("tamanho:", "")
                  .replace(/sabor:[^;]*/g, "")
                  .replace(/;/g, "")
                  .trim();
                const size = product?.additionalProperty?.find(
                  (property) => property.name == "TAMANHO"
                );
                const [front, back] = product.image ?? [];
                const { price, installments } = useOffer(product?.offers);
                return (
                  <li>
                    {/* TODO @gimenes: use name and action from searchbar form */}
                    <a href={`${product.url}`} class="flex gap-1 items-center">
                      <div class="flex flex-row w-full">
                        <div class="flex flex-row w-full gap-2">
                          <Image
                            width={80}
                            height={80}
                            loading="lazy"
                            src={back?.url ?? front.url!}
                            alt={back?.alternateName ?? front.alternateName}
                            class=" object-cover min-h-20 "
                          />
                          <div class={"flex flex-col justify-between gap-1"}>
                            <span
                              class={"text-ellipsis-custom text-sm capitalize"}
                            >
                              {product.isVariantOf?.name == title
                                ? `${title?.toLowerCase()} ${
                                    size?.value ? "- " + size.value : ""
                                  }`
                                : title?.toLowerCase() == variantName
                                ? `${title?.toLowerCase()} - ${product.isVariantOf?.name
                                    ?.toLowerCase()
                                    .replace("tamanho:", "")
                                    .replace(/sabor:[^;]*/g, "")
                                    .replace(";", "")
                                    .replace("cor:", "")}`
                                : `${product.isVariantOf?.name?.toLowerCase()} ${
                                    variantName?.toLowerCase()
                                      ? `- ${variantName?.toLowerCase()}`
                                      : ""
                                  } ${size?.value ? "- " + size.value : ""}`}
                            </span>

                            <span class="text-xs">{installments}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        {searchHistory.length > 0 && (
          <div class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden">
            <span
              class="font-bold text-18 text-blue-300 border-b border-blue-300 pb-2 w-36"
              role="heading"
              aria-level={3}
            >
              Buscas Recentes
            </span>
            <ul class="flex flex-col gap-6">
              {searchHistory.map(({ term }) => (
                <li>
                  {/* TODO @gimenes: use name and action from searchbar form */}
                  <a
                    href={`${ACTION}?${NAME}=${term}`}
                    class="flex gap-4 items-center"
                  >
                    <span>
                      <Icon id="search" />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: term }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Suggestions;
