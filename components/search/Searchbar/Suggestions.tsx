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

export interface Props {
  /**
   * @title Suggestions Integration
   * @todo: improve this typings ({query: string, count: number}) => Suggestions
   */
  loader: Resolved<Suggestion | null>;
}
export interface SearchEntry {
  term: string;
  date: string;
}

function teste() {
  function addRecentSearch(term: string): void {
    const recentSearches = getRecentSearches();

    const searchExists = recentSearches.some((search) => search.term === term);

    if (!searchExists) {
      const newSearchEntry: SearchEntry = {
        term: term,
        date: new Date().toISOString(),
      };

      if (recentSearches.length >= 5) {
        recentSearches.pop();
      }

      recentSearches.unshift(newSearchEntry);

      try {
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  }

  function getRecentSearches(): SearchEntry[] {
    try {
      const recentSearches = JSON.parse(
        localStorage.getItem("recentSearches") || "[]",
      );
      return recentSearches.slice();
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  }

  const url = document.location;

  const search = url.search.replace("?q=", "").replaceAll("+", " ");
  const verify = search.includes("&") ? search.split("&")[0] : search;

  addRecentSearch(verify);
  const array = getRecentSearches();

  const ul = document.querySelector("#recents");

  array.map((term) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = term.term;
    a.href = `/s?q=${term.term}`;
    li.appendChild(a);
    ul?.appendChild(li);
  });
}

export const action = async (props: Props, req: Request, ctx: AppContext) => {
  const {
    loader: { __resolveType, ...loaderProps },
  } = props;
  const form = await req.formData();
  const query = `${form.get(NAME ?? "q")}`;

  // @ts-expect-error This is a dynamic resolved loader
  const suggestion = (await ctx.invoke(__resolveType, {
    ...loaderProps,
    query,
  })) as Suggestion | null;

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
  const hasTerms = Boolean(searches.length);
  const newProducts: Product[] = [];

  products?.map((item) => {
    if (!item.category?.includes("Clean Whey Medical")) {
      newProducts.push(item);
    }
  });

  const hasProducts = Boolean(newProducts.length);
  const hasRecentSearches = true;

  return (
    <div
      id={"modal"}
      class={clx(
        `overflow-y-scroll mt-2 `,
        "before:content-['']  before:h-screen before:bg-black before:absolute before:-z-10 before:left-[-100vw] before:right-0 before:w-[200vw] before:opacity-50 before:bg-black-100",
        !hasProducts && !hasTerms && !hasRecentSearches && "hidden",
      )}
      style={{
        display: `${
          (!hasProducts && !hasTerms && !hasRecentSearches && "none") || "flex"
        }`,
      }}
      hx-on:click={useScript(() => {
        const modal: HTMLDivElement | null = document.querySelector("#modal") ||
          null;
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
                <li key={index}>
                  <a
                    href={`${ACTION}?${NAME}=${term}`}
                    class="flex gap-1 items-center"
                  >
                    {index + 1} -{" "}
                    <span dangerouslySetInnerHTML={{ __html: term }} />
                  </a>
                </li>
              ))}

            {newProducts.length > 0 &&
              searches.length === 0 &&
              newProducts.map((product, index) => {
                const title = product.isVariantOf?.name ?? product.name;
                const { url } = product;

                const [front, back] = product.image ?? [];
                const { price, installments, salePrice } = useOffer(
                  product?.offers,
                );
                const pixObj = product.isVariantOf?.hasVariant
                  .filter((value) => value.url == url)[0]
                  .offers?.offers[0].priceSpecification.filter(
                    (value) => value.name?.toLowerCase() == "pix",
                  )[0];

                const pixporcent =
                  (pixObj && salePrice && (pixObj.price / salePrice) * 100) ||
                  (price && salePrice && (price / salePrice) * 100);

                return (
                  <li key={index}>
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
                          <div class="flex flex-col justify-between gap-1">
                            <span class="text-ellipsis-custom text-sm capitalize">
                              {title} - {product.name}
                            </span>
                            {formatPrice(pixObj?.price) || formatPrice(price)}
                            <p class="text-sm text-gray-300">
                              via PIX{" "}
                              {pixporcent && -(pixporcent - 100) % 1 < 0.5
                                ? Math.floor(-(pixporcent - 100)) + "% OFF "
                                : Math.ceil(-(pixporcent! - 100)) +
                                  "% OFF "} ou
                            </p>
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

        <div class="flex overflow-x-auto gap-[5px] pb-5">
          {products.length > 0 &&
            products.map((product, index) => {
              const title = product.isVariantOf?.name ?? product.name;
              const { url } = product;

              const [front, back] = product.image ?? [];
              const { price, installments, salePrice } = useOffer(
                product?.offers,
              );
              const pixObj = product.isVariantOf?.hasVariant
                .filter((value) => value.url == url)[0]
                .offers?.offers[0].priceSpecification.filter(
                  (value) => value.name?.toLowerCase() == "pix",
                )[0];

              const pixporcent =
                (pixObj && salePrice && (pixObj.price / salePrice) * 100) ||
                (price && salePrice && (price / salePrice) * 100);

              return (
                <a
                  key={index}
                  href={`${product.url}`}
                  class="card card-compact group bg-white hover:bg-[#F7EDDF] text-sm grid grid-rows-[auto_1fr_auto] h-full min-w-[160px] max-w-[300px] border border-gray-100 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] md:p-4 p-1"
                >
                  <Image
                    width={80}
                    height={80}
                    loading="lazy"
                    src={back?.url ?? front.url!}
                    alt={back?.alternateName ?? front.alternateName}
                    class=" object-cover min-h-20 "
                  />
                  <span class="text-ellipsis-custom text-sm capitalize">
                    {title} - {product.name}
                  </span>
                  {formatPrice(pixObj?.price) || formatPrice(price)}
                  <p class="text-sm text-gray-300">
                    via PIX {pixporcent && -(pixporcent - 100) % 1 < 0.5
                      ? Math.floor(-(pixporcent - 100)) + "% OFF "
                      : Math.ceil(-(pixporcent! - 100)) +
                        "% OFF "} ou
                  </p>
                  <span class="text-xs">{installments}</span>
                </a>
              );
            })}
        </div>

        {
          /* <div class="flex flex-col pt-6 md:pt-0 gap-6 overflow-x-hidden">
          <span
            class="font-bold text-18 text-blue-300 border-b border-blue-300 pb-2 w-36"
            role="heading"
            aria-level={3}
          >
            Buscas recentes
          </span>
          <ul class="flex flex-col gap-6"
          id="recents">

          </ul>
        </div> */
        }
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(teste) }}
      />
    </div>
  );
}

export default Suggestions;
