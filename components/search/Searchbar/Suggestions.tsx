import { Suggestion } from "apps/commerce/types.ts";
import { Resolved } from "deco/mod.ts";
import type { AppContext } from "../../../apps/site.ts";
import { clx } from "../../../sdk/clx.ts";
import { ComponentProps } from "../../../sections/Component.tsx";
import Icon from "../../ui/Icon.tsx";
import { ACTION, NAME } from "./Form.tsx";
import Image from "apps/website/components/Image.tsx";
import { Pix } from "../../../loaders/BusnissRule/Pix.ts";
import { formatPix } from "../../../sdk/formatPix.tsx";
import { useOffer } from "../../../sdk/useOffer.ts";
import { formatPrice } from "../../../sdk/format.ts";

export interface Props {
  /**
   * @title Suggestions Integration
   * @todo: improve this typings ({query: string, count: number}) => Suggestions
   */
  loader: Resolved<Suggestion | null>;
  pix: Pix;
}

export const action = async (props: Props, req: Request, ctx: AppContext) => {
  const {
    loader: { __resolveType, ...loaderProps },
    pix,
  } = props;

  const form = await req.formData();
  const query = `${form.get(NAME ?? "q")}`;

  // @ts-expect-error This is a dynamic resolved loader
  const suggestion = (await ctx.invoke(__resolveType, {
    ...loaderProps,
    query,
  })) as Suggestion | null;

  return { suggestion, query, pix };
};

export const loader = async (props: Props, req: Request, ctx: AppContext) => {
  const {
    loader: { __resolveType, ...loaderProps },
    pix,
  } = props;

  const query = new URL(req.url).searchParams.get(NAME ?? "q");

  // @ts-expect-error This is a dynamic resolved loader
  const suggestion = (await ctx.invoke(__resolveType, {
    ...loaderProps,
    query,
  })) as Suggestion | null;

  return { suggestion, query, pix };
};

function Suggestions({
  suggestion,
  pix,
}: ComponentProps<typeof loader, typeof action>) {
  const { products = [], searches = [] } = suggestion ?? {};
  const recentSearches = searches;
  const hasProducts = Boolean(products.length);
  const hasTerms = Boolean(searches.length);

  return (
    <div
      class={clx(
        `overflow-y-scroll mt-2`,
        !hasProducts && !hasTerms && "hidden",
      )}
    >
      <div class="gap-4 grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 p-4">
        <div class="flex flex-col gap-6">
          <span
            class="font-bold text-18 text-blue-300 border-b border-orange-100 pb-2 w-36"
            role="heading"
            aria-level={3}
          >
            {products.length > 0 && searches.length === 0
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
                  >
                    {/* <Icon id="searchRecent" class={"text-[#A1A6B7]"}/> */}
                    {index + 1} -{" "}
                    <span dangerouslySetInnerHTML={{ __html: term }} />
                  </a>
                </li>
              ))}
            {products.length > 0 &&
              searches.length === 0 &&
              products.map((product) => {
                const title = product.isVariantOf?.name ?? product.name;
                const variantName = title
                  ?.toLowerCase()
                  .replace("cor:", "")
                  .replace("tamanho:", "")
                  .replace(/sabor:[^;]*/g, "")
                  .replace(/;/g, "")
                  .trim();

                const size = product?.additionalProperty?.find(
                  (property) => property.name == "TAMANHO",
                );

                const [front, back] = product.image ?? [];
                const { price, installments } = useOffer(product?.offers);
                const valuePix = formatPix(
                  price || 0,
                  pix.porcentagePix,
                  pix.valueMax,
                );
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
                            <span class={"text-ellipsis-custom text-sm"}>
                              {product.isVariantOf?.name == title
                                ? `${title?.toLowerCase()} ${
                                  size?.value ? "- " + size.value : ""
                                }`
                                : title?.toLowerCase() == variantName
                                ? `${title?.toLowerCase()} - ${
                                  product.isVariantOf?.name
                                    ?.toLowerCase()
                                    .replace("tamanho:", "")
                                    .replace(/sabor:[^;]*/g, "")
                                    .replace(";", "")
                                    .replace("cor:", "")
                                }`
                                : `${product.isVariantOf?.name?.toLowerCase()} ${
                                  variantName?.toLowerCase()
                                    ? `- ${variantName?.toLowerCase()}`
                                    : ""
                                } ${size?.value ? "- " + size.value : ""}`}
                            </span>
                            <span class="text-lg font-bold">
                              {formatPrice(valuePix) + " "}
                              <span class="text-sm text-gray-300">no Pix</span>
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
        {recentSearches.length > 0 && (
          <div class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden">
            <span
              class="font-bold text-18 text-blue-300 border-b border-blue-300 pb-2 w-36"
              role="heading"
              aria-level={3}
            >
              Buscas Recentes
            </span>
            <ul class="flex flex-col gap-6">
              {recentSearches.map(({ term }) => (
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
