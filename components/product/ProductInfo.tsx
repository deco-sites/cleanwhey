import { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";
import { useId } from "../../sdk/useId.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";
import ShippingSimulationForm from "../shipping/Form.tsx";
import WishlistButton from "../wishlist/WishlistButton.tsx";
import AddToCartButton from "./AddToCartButton.tsx";
import OutOfStock from "./OutOfStock.tsx";
import ProductSelector from "./ProductVariantSelector.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";

interface Props {
  page: ProductDetailsPage | null;
}

function ProductInfo({ page }: Props) {
  const id = useId();

  // console.log(page?.product);

  if (page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const { breadcrumbList, product } = page;
  const { productID, offers, isVariantOf } = product;
  const description = product.description || isVariantOf?.description;
  const title = isVariantOf?.name ?? product.name;

  const {
    price = 0,
    listPrice,
    seller = "1",
    availability,
  } = useOffer(offers);

  // const percent = listPrice && price
  //   ? Math.round(((listPrice - price) / listPrice) * 100)
  //   : 0;

  const breadcrumb = {
    ...breadcrumbList,
    itemListElement: breadcrumbList?.itemListElement.slice(0, -1),
    numberOfItems: breadcrumbList.numberOfItems - 1,
  };

  const item = mapProductToAnalyticsItem({
    product,
    breadcrumbList: breadcrumb,
    price,
    listPrice,
  });

  const viewItemEvent = useSendEvent({
    on: "view",
    event: {
      name: "view_item",
      params: {
        item_list_id: "product",
        item_list_name: "Product",
        items: [item],
      },
    },
  });

  return (
    <div {...viewItemEvent} class="flex flex-col" id={id}>
      {/* Price tag */}
      {
        /* <span
        class={clx(
          "text-sm/4 font-normal text-black bg-primary bg-opacity-15 text-center rounded-badge px-2 py-1",
          percent < 1 && "opacity-0",
          "w-fit",
        )}
      >
        {percent} % off
      </span> */
      }

      {/* Product Name */}
      <span
        class={clx(
          "font-bold text-gray-400 flex items-start justify-between text-2xl",
          "pt-4",
        )}
      >
        {title}
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

      {/* Sku Selector */}
      <div class="mt-4">
        <ProductSelector product={product} />
      </div>

      {/* Prices */}
      <div class="flex flex-col pt-4">
        {listPrice != price && <span class="line-through text-sm font-normal text-gray-300">
          {formatPrice(listPrice, offers?.priceCurrency)}
        </span>}

        <span class="text-[32px] font-bold flex gap-2 items-center text-gray-400">
          {formatPrice(price, offers?.priceCurrency)}
          <p class="text-sm text-gray-300">no PIX</p>
        </span>
      </div>

      {/* Shipping Simulation */}
      <div class="mt-4">
        <ShippingSimulationForm
          items={[{ id: Number(product.sku), quantity: 1, seller: seller }]}
        />
      </div>

      {/* Add to Cart and Favorites button */}
      <div class="mt-4 sm:mt-10 flex flex-col gap-2">
        {availability === "https://schema.org/InStock"
          ? (
            <>
              <AddToCartButton
                item={item}
                seller={seller}
                product={product}
                class="btn btn-primary hover:bg-orange-300 hover:border-orange-300 no-animation bg-orange-300 border-orange-300 rounded-lg h-14"
                disabled={false}
              />

              <AddToCartButtonVTEX
                productID={productID}
                seller={seller}
              />
            </>
          )
          : <OutOfStock productID={productID} />}
      </div>
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
