import type {
  // ProductGroup,
  // ProductLeaf,
  ProductListingPage,
  // PropertyValue,
} from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { useScript } from "deco/hooks/useScript.ts";
import { useSection } from "deco/hooks/useSection.ts";
import { SectionProps } from "deco/mod.ts";
import ProductCard from "../../components/product/ProductCard.tsx";
import Filters from "../../components/search/Filters.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";
import Breadcrumb from "../ui/Breadcrumb.tsx";
import Drawer from "../ui/Drawer.tsx";
import Sort from "./Sort.tsx";
import { useDevice } from "deco/hooks/useDevice.ts";
import { Pix } from "../../loaders/BusnissRule/Pix.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import ProductShelf, { Props as PropsShelf } from "../../sections/Product/ProductShelf.tsx";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
// import { Product } from "apps/vtex/utils/types.ts";

interface NotFound {
  /** @description text to be rendered on top of the image */
  title?: HTMLWidget;
  /** @description text to be rendered on top of the image */
  buttonLabel?: string;
  link?: string;
  image: {
    /** @description Image for big screens */
    desktop: ImageWidget;
    /** @description Image for small screens */
    mobile: ImageWidget;
    /** @description image alt text */
    alt?: string;
  };
  shelf: PropsShelf;
}

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

  layout?: Layout;

  /** @description 0 for ?page=0 as your first page */
  startingPage?: 0 | 1;

  /** @hidden */
  partial?: "hideMore" | "hideLess";
  notFound: NotFound;
}

function NotFound(props: SectionProps<typeof loader>) {

  const newUrl = new URL(props.url)
  const term = newUrl.searchParams.get("q")

  console.log("search", props)

  const { notFound } = props
  const { image, title, link, buttonLabel } = notFound


  return (
    <div class="flex flex-col mb-20">
      <div class="grid grid-cols-1 grid-rows-1">
        <Picture preload class="col-start-1 col-span-1 row-start-1 row-span-1">
          <Source
            src={image.mobile}
            width={380}
            height={330}
            media="(max-width: 767px)"
          />
          <Source
            src={image.desktop}
            width={1366}
            height={232}
            media="(min-width: 767px)"
          />
          <img class="w-full" src={image.desktop} alt={image.alt ?? title} />
        </Picture>

        <div class="
      container flex flex-col gap-8 
      items-start justify-start pt-8 pl-8 sm:justify-center sm:items-start col-start-1 
      col-span-1 row-start-1 row-span-1 w-full">
          <h1>
            {title && (
              <span
                class="text-sm sm:text-base font-normal text-gray-400"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </h1>
          {link && (
            <h2>
              <a
                href={link}
                class="text-sm font-normal text-white 
              p-4 bg-orange-300 rounded-lg uppercase"
              >
                {buttonLabel}
              </a>
            </h2>
          )}
        </div>
      </div>
      <div class="w-full h-full flex flex-col text-gray-300 font-lato gap-8 mb-20 px-4 lg:px-0" >
        <div class="flex flex-col mt-8 container">
          <span>Home{`>`}
            <span class="text-orange-300 font-normal">
              Resultados da busca "{term}"
            </span>
          </span>
          <span class="font-bold text-2xl text-gray-400">{term}</span>
        </div>
        <div class="flex justify-center items-center flex-col lg:flex-row gap-8 lg:gap-0">
          <div class="flex justify-start items-start w-full lg:w-[300px]">
            <span class="text-5xl font-bold text-start" >
              OOPS!
            </span>
          </div>
          <div class="flex flex-col">
            <span class="text-lg font-bold">
              Não encontramos nenhum resultado para “{term}”
            </span>
            <span class="text-base mt-4">
              O que eu faço?
            </span>
            <ul class="text-base mt-8 list-disc pl-[18px]">
              <li>
                Verifique os termos digitados.
              </li>
              <li>

                Tente utilizar uma única palavra.

              </li>
              <li>
                Utilize termos genéricos na busca
              </li>
              <li>
                Procure utilizar sinônimos ao termo desejado
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ProductShelf {...props.notFound.shelf} />
    </div>
  );
}

const useUrlRebased = (overrides: string | undefined, base: string) => {
  let url: string | undefined = undefined;

  if (overrides) {
    const temp = new URL(overrides, base);
    const final = new URL(base);

    final.pathname = temp.pathname;
    for (const [key, value] of temp.searchParams.entries()) {
      final.searchParams.set(key, value);
    }

    url = final.href;
  }

  return url;
};

function PageResult(props: SectionProps<typeof loader>) {
  const { layout, startingPage = 0, url, partial, pix } = props;
  const page = props.page!;
  const { products, pageInfo } = page;
  const perPage = pageInfo?.recordPerPage || products.length;
  const zeroIndexedOffsetPage = pageInfo.currentPage - startingPage;
  const offset = zeroIndexedOffsetPage * perPage;

  const nextPageUrl = useUrlRebased(pageInfo.nextPage, url);
  const prevPageUrl = useUrlRebased(pageInfo.previousPage, url);
  const partialPrev = useSection({
    href: prevPageUrl,
    props: { partial: "hideMore" },
  });
  const partialNext = useSection({
    href: nextPageUrl,
    props: { partial: "hideLess" },
  });

  const infinite = layout?.pagination !== "pagination";

  const pageFormated = pageInfo.nextPage
    ? pageInfo.nextPage.split("page=")[0]
    : "?";
  const links = [];
  const totalPages = Math.ceil(pageInfo.records / pageInfo.recordPerPage);

  for (let i = 1; i <= totalPages; i++) {
    links.push({
      "label": i,
      "href": `${pageFormated}page=${i}`,
    });
  }

  return (
    <div class="grid grid-flow-row grid-cols-1 place-items-center">
      <div
        class={clx(
          "pb-2 sm:pb-10",
          (!prevPageUrl || partial === "hideLess") && "hidden",
        )}
      >
        <a
          rel="prev"
          class="btn btn-ghost"
          hx-swap="outerHTML show:parent:top"
          hx-get={partialPrev}
        >
          <span class="inline [.htmx-request_&]:hidden">
            Show Less
          </span>
          <span class="loading loading-spinner hidden [.htmx-request_&]:block" />
        </a>
      </div>

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
            pix={pix}
          />
        ))}
        {products?.map((product, i) => {
          const { isVariantOf } = product;
          const hasVariant = isVariantOf?.hasVariant ?? [];
          const isAcessory = product.additionalProperty?.filter((item) =>
            item.name == "category" && item.value == "Acessórios"
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
                pix={pix}
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
                  pix={pix}
                />
              );
            }
            return null;
          });
        })}
      </div>

      <div class={clx("pt-2 sm:pt-10 w-full flex justify-center", "")}>
        {infinite
          ? (
            <div class="flex justify-center [&_section]:contents">
              <a
                rel="next"
                class={clx(
                  "btn btn-ghost",
                  (!nextPageUrl || partial === "hideMore") && "hidden",
                )}
                hx-swap="outerHTML show:parent:top"
                hx-get={partialNext}
              >
                <span class="inline [.htmx-request_&]:hidden">
                  Show More
                </span>
                <span class="loading loading-spinner hidden [.htmx-request_&]:block" />
              </a>
            </div>
          )
          : (
            <div class="flex justify-center my-4">
              <div class="join gap-2">
                <a
                  aria-label="previous page link"
                  rel="prev"
                  href={pageInfo.previousPage ?? "#"}
                  class="btn btn-ghost join-item"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.333 16H6.667M16 25.333 6.667 16 16 6.667"
                      stroke="#E06741"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                {links.map((link) => {
                  return (
                    <a
                      href={link.href}
                      class={`btn !rounded-lg ${pageInfo.currentPage == link.label
                        ? "btn-primary hover:bg-orange-300 bg-orange-300 border-orange-300 hover:border-orange-300"
                        : "btn-ghost"
                        } join-item`}
                    >
                      <span>
                        {link.label}
                      </span>
                    </a>
                  );
                })}
                <a
                  aria-label="next page link"
                  rel="next"
                  href={pageInfo.nextPage ?? "#"}
                  class="btn btn-ghost join-item"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66663 16H25.3333"
                      stroke="#E06741"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 6.66666L25.3333 16L16 25.3333"
                      stroke="#E06741"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

const setPageQuerystring = (page: string, id: string) => {
  const element = document.getElementById(id)?.querySelector(
    "[data-product-list]",
  );

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

  const { startingPage = 0, url, partial } = props;
  const page = props.page!;
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;
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
            ...(useOffer(product.offers)),
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

  const sortBy = sortOptions.length > 0 && (
    <Sort sortOptions={sortOptions} url={url} />
  );

  return (
    <>
      <div id={container} {...viewItemListEvent} class="w-full">
        {partial
          ? <PageResult {...props} />
          : (
            <div class="container flex flex-col gap-4 sm:gap-5 w-full py-4 sm:py-5 px-5 sm:px-0">
              <Breadcrumb itemListElement={breadcrumb?.itemListElement} />

              {device === "mobile" && (
                <Drawer
                  id={controls}
                  aside={
                    <div class="bg-base-100 flex flex-col h-full divide-y overflow-y-hidden">
                      <div class="flex justify-between items-center">
                        <h1 class="px-4 py-3">
                          <span class="font-medium text-2xl">Filtros</span>
                        </h1>
                        <label class="btn btn-ghost" for={controls}>
                          <Icon id="close" />
                        </label>
                      </div>
                      <div class="flex-grow overflow-auto">
                        <Filters filters={filters} />
                      </div>
                    </div>
                  }
                >
                  <div class="flex sm:hidden justify-between items-end">
                    <label
                      class="btn btn-ghost
                    text-orange-300 rounded-lg border border-orange-300"
                      for={controls}
                    >
                      Filtros
                    </label>

                    <div class="flex flex-col">
                      {results}
                      {sortBy}
                    </div>
                  </div>
                </Drawer>
              )}

              <div class="md:gap-8 grid place-items-center grid-cols-1 sm:grid-cols-[250px_1fr]">
                {device === "desktop" && (
                  <aside class="
                  place-self-start flex flex-col gap-3
                  border border-gray-100 border-b border-b-orange-300
                  bg-white-300 rounded-t-lg p-4
                  ">
                    <span class="text-base font-normal text-gray-300 h-12 flex gap-2 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.667 2H1.333l5.334 6.307v4.36L9.333 14V8.307z"
                          stroke="#A1A6B7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Filtros
                    </span>

                    <Filters filters={filters} />
                  </aside>
                )}

                <div class="flex flex-col gap-9">
                  {device === "desktop" && (
                    <div class="flex justify-between items-center">
                      {results}
                      <div>
                        {sortBy}
                      </div>
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

function SearchResult({
  page,
  ...props
}: SectionProps<typeof loader>) {
  if (!page || page.pageInfo.records == 0) {
    return <NotFound {...props} />;
  }

  return <Result {...props} page={page} />;
}

export const loader = (props: Props, req: Request) => {

  return {
    ...props,
    url: req.url,
  };
};

export default SearchResult;
