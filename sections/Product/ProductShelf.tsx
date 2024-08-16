import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductSlider from "../../components/product/ProductSlider.tsx";
import Section, {
  Props as SectionHeaderProps,
} from "../../components/ui/Section.tsx";
import { useOffer } from "../../sdk/useOffer.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";

export interface Props extends SectionHeaderProps {
  products: Product[] | null;
}

export default function ProductShelf(
  { products, title, isFeatured, icon }: Props,
) {
  if (!products || products.length === 0) {
    return null;
  }

  const viewItemListEvent = useSendEvent({
    on: "view",
    event: {
      name: "view_item_list",
      params: {
        item_list_name: title,
        items: products.map((product, index) =>
          mapProductToAnalyticsItem({
            index,
            product,
            ...(useOffer(product.offers)),
          })
        ),
      },
    },
  });

  return (
    <Section.Container
      {...viewItemListEvent}
      class={`${
        isFeatured ? "bg-blue-300 rounded-lg mt-12 max-w-[95%] !container" : ""
      }`}
    >
      <Section.Header title={title} isFeatured={isFeatured} icon={icon} />

      <ProductSlider
        products={products}
        itemListName={title}
        isFeatured={isFeatured}
      />
    </Section.Container>
  );
}

export function LoadingFallback() {
  return (
    <div
      style={{ height: "716px" }}
      class="flex justify-center items-center"
    >
      <span class="loading loading-spinner" />
    </div>
  );
}
