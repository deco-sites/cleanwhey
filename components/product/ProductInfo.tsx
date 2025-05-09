import { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import WishlistButton from "../wishlist/WishlistButton.tsx";
import AddToCartButton from "./AddToCartButtonpdp.tsx";
import OutOfStock from "./OutOfStock.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import { SendEventOnView } from "../Analytics.tsx";

import type { Product } from "apps/commerce/types.ts";

interface Props {
  page: ProductDetailsPage | null;
  products: Product[] | null;
}

function ProductInfo({ page, products }: Props) {
  const id = useId();

  // console.log(page?.product);

  if (page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const { breadcrumbList, product } = page;
  const { productID, offers, isVariantOf, name, additionalProperty } = product;
  const description = product.description || isVariantOf?.description;
  const title = isVariantOf?.name ?? product.name;
  const {
    price = 0,
    listPrice,
    seller = "1",
    availability,
  } = useOffer(offers);

  const breadcrumb = {
    ...breadcrumbList,
    itemListElement: breadcrumbList?.itemListElement.slice(0, -1),
    numberOfItems: breadcrumbList.numberOfItems - 1,
  };

  const validade =
    product.additionalProperty?.some(
      (property) => property.value === "VÁLIDADE PRÓXIMA"
    ) || false;

  const item = mapProductToAnalyticsItem({
    product,
    breadcrumbList: breadcrumb,
    price,
    listPrice,
  });

  const hasSubscription = additionalProperty?.find((property) => property.name === "vtex.subscription.assinatura");

  const domainValues = hasSubscription?.value ? JSON.parse(hasSubscription?.value)[0] : {};
  const arrayValuesSubscription = domainValues.DomainValues
    ? domainValues.DomainValues.split(",").map((value: string) => value.trim())
    : [];

  return (
    <div class="flex flex-col" id={id}>
      <span
        class={clx(
          "font-bold text-gray-400 flex items-start justify-between text-2xl capitalize",
          "pt-4"
        )}
      >
        {title} - {name}
        <WishlistButton item={item} variant="icon" />
      </span>

      {/* Description card */}
      <div class="mt-4">
        <span class="text-sm">
          {description && (
            <div
              class="text-gray-300 text-sm font-normal"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </span>
      </div>
      {validade && (
        <div class="w-full flex justify-start self-start mt-5">
          <span
            class={clx(
              "p-1 flex items-center justify-center leading-4 text-center bg-red-300 rounded text-white text-sm uppercase font-bold",
              "opacity-1",
              "w-fit"
            )}
          >
            Validade próxima.
          </span>
        </div>
      )}
      <div class="mt-4 desktop:mt-5 flex flex-col gap-2">
        {availability === "https://schema.org/InStock" ? (
          <>
            <AddToCartButton
              products={products}
              item={item}
              seller={seller}
              product={product}
              variantsSubscription={arrayValuesSubscription}
              class="btn btn-primary hover:background-primary hover:border-orange-300  no-animation background-primary border-orange-300  rounded-lg h-14"
            />
            <AddToCartButtonVTEX
              productID={productID}
              seller={seller}
              valuePrice={listPrice ?? price}
            />
          </>
        ) : (
          <OutOfStock productID={productID} />
        )}
      </div>
      <SendEventOnView
        id={id}
        event={{
          name: "view_item",
          params: {
            item_list_id: "product",
            item_list_name: "Product",
            items: [item],
          },
        }}
      />
    </div>
  );
}

// export const loader = async await (props: Props, req: Request, ctx: AppContext) => {
//   if (!props.page || !props.page.product) return null;

//   const cookies = req.headers.get("cookie");
//   const orderFormIdMatch = cookies && cookies.match(/checkout.vtex.com=__ofid=([^;]+)/);
//   const orderFormID = orderFormIdMatch ? orderFormIdMatch[1] : undefined;
// }

export default ProductInfo;
