import type { ProductListingPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductCard from "../../components/product/ProductCard.tsx";

import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";

import { Pix } from "../../loaders/BusnissRule/Pix.ts";

import {
  useDevice as useDevice,
  useScript as useScript,
  useSection as useSection,
} from "@deco/deco/hooks";
import { type SectionProps as SectionProps } from "@deco/deco";

export interface Layout {
  /**
   * @title Pagination
   * @description Format of the pagination
   */
  pagination?: "show-more" | "pagination";
}
export interface Props {
  /** @title Integration */
  page: ProductListingPage | null;
  pix: Pix;
  /** @description 0 for ?page=0 as your first page */
  startingPage?: 0 | 1;
  /** @hidden */
  partial?: "hideMore" | "hideLess";
}

function PageResult(props: SectionProps<typeof loader>) {
  const { startingPage = 0, pix } = props;
  const page = props.page!;
  const { products, pageInfo } = page;
  const perPage = pageInfo?.recordPerPage || products.length;
  const zeroIndexedOffsetPage = pageInfo.currentPage - startingPage;
  const offset = zeroIndexedOffsetPage * perPage;

  return (
    <div class="grid grid-flow-row grid-cols-1 place-items-center">
      <div
        data-product-list
        class={clx(
          "grid items-center",
          "grid-cols-2 gap-1",
          "sm:grid-cols-3 sm:gap-10",
          "w-full",
        )}
      >
        {products.map((product, i) => (
          <ProductCard
            key={`product-card-${product.productID}`}
            product={product}
            productName={product.name}
            preload={i === 0}
            index={offset + i}
            class="h-full min-w-[160px] max-w-[300px] border border-gray-100 
                      shadow-[0_0_10px_0_rgba(0,0,0,0.1)] md:p-4 p-1"
          />
        ))}
        {products?.map((product, i) => {
          const { isVariantOf } = product;
          const hasVariant = isVariantOf?.hasVariant ?? [];
          const isAcessory = product.additionalProperty?.filter(
            (item) => item.name == "category" && item.value == "Acessórios",
          );
          {
            isAcessory && (
              <ProductCard
                key={`product-card-${product.productID}`}
                product={product}
                productName={product.isVariantOf?.name}
                preload={i === 0}
                index={offset + i}
                class="h-full min-w-[160px] max-w-[300px] border border-gray-100 
                shadow-[0_0_10px_0_rgba(0,0,0,0.1)] md:p-4 p-1"
              />
            );
          }
          return hasVariant.map((item, index) => {
            if (item.sku != product.sku) {
              return (
                <ProductCard
                  key={`product-card-${item.productID}`}
                  product={item}
                  productName={product.isVariantOf?.name}
                  preload={index === 0}
                  index={offset + index}
                  class="h-full min-w-[160px] max-w-[300px] border border-gray-100 
                  shadow-[0_0_10px_0_rgba(0,0,0,0.1)] md:p-4 p-1"
                />
                //Essa parte do codigo quebra os filtros Diego 08/09 filtrar variantes tbm
              );
            }
            return null;
          });
        })}
      </div>
    </div>
  );
}
const setPageQuerystring = (page: string, id: string) => {
  const element = document
    .getElementById(id)
    ?.querySelector("[data-product-list]");
  if (!element) {
    return;
  }
  new IntersectionObserver((entries) => {
    const url = new URL(location.href);
    const prevPage = url.searchParams.get("page");
    for (let it = 0; it < entries.length; it++) {
      if (entries[it].isIntersecting) {
        url.searchParams.set("page", page);
      } else if (
        typeof history.state?.prevPage === "string" &&
        history.state?.prevPage !== page
      ) {
        url.searchParams.set("page", history.state.prevPage);
      }
    }
    history.replaceState({ prevPage }, "", url.href);
  }).observe(element);
};

function Result(props: SectionProps<typeof loader>) {
  const container = useId();
  const controls = useId();
  const device = useDevice();
  const { startingPage = 0, partial } = props;
  const page = props.page!;
  const { products, breadcrumb, pageInfo } = page;
  const perPage = pageInfo?.recordPerPage || products.length;
  const zeroIndexedOffsetPage = pageInfo.currentPage - startingPage;
  const offset = zeroIndexedOffsetPage * perPage;
  const viewItemListEvent = useSendEvent({
    on: "view",
    event: {
      name: "view_item_list",
      params: {
        // TODO: get category name from search or cms setting
        item_list_name: breadcrumb.itemListElement?.at(-1)?.name,
        item_list_id: breadcrumb.itemListElement?.at(-1)?.item,
        items: page.products?.map((product, index) =>
          mapProductToAnalyticsItem({
            ...useOffer(product.offers),
            index: offset + index,
            product,
            breadcrumbList: page.breadcrumb,
          })
        ),
      },
    },
  });
  const results = (
    <span class="text-sm font-normal">
      Exibindo {page.pageInfo.records &&
          page.pageInfo.recordPerPage &&
          page.pageInfo.recordPerPage > page.pageInfo.records
        ? page.pageInfo.records
        : page.pageInfo.recordPerPage} de {page.pageInfo.records} resultados
    </span>
  );

  return (
    <>
      <div id={container} {...viewItemListEvent} class="w-full">
        {partial
          ? <PageResult {...props} />
          : (
            <div class="container flex flex-col gap-4 sm:gap-5 w-full py-4 sm:py-5 px-5 sm:px-0">
              <div class="md:gap-8 grid place-items-center grid-cols-1 sm:grid-cols-1">
                <div class="flex flex-col gap-9">
                  {device === "desktop" && (
                    <div class="flex justify-between items-center">
                      {results}
                    </div>
                  )}
                  <PageResult {...props} />
                </div>
              </div>
            </div>
          )}
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(
            setPageQuerystring,
            `${pageInfo.currentPage}`,
            container,
          ),
        }}
      />
    </>
  );
}

function SearchResultWishlist({ page, ...props }: SectionProps<typeof loader>) {
  if (!page || page.pageInfo.records == 0) {
    return (
      <>
        <p class="text-orange-300 text-2xl text-center">
          Nenhum produto encontrado na sua Wishlist
        </p>
      </>
    );
  }
  return <Result {...props} page={page} />;
}

export const loader = (props: Props) => {
  return {
    ...props,
  };
};
export default SearchResultWishlist;
