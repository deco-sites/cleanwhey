import { AnalyticsItem, Product } from "apps/commerce/types.ts";
import { JSX } from "preact";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";
import ShippingSimulationForm from "../shipping/Form.tsx";
import OutOfStock from "./OutOfStock.tsx";
import ProductSelector from "./ProductVariantSelector.tsx";
import { useId } from "../../sdk/useId.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import QuantitySelector from "../ui/QuantitySelector.tsx";
import { useScript as useScript } from "@deco/deco/hooks";
import { useOffer } from "../../sdk/useOffer.ts";
export interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  products: Product[] | null;
  product: Product;
  seller: string;
  item: AnalyticsItem;
  ctaText?: string;
}

const onClick = (productID: string) => {
  event?.stopPropagation();
  const button = event?.currentTarget as HTMLButtonElement | null;
  const container = button!.closest<HTMLDivElement>("div[data-cart-item]")!;
  const { item, platformProps } = JSON.parse(
    decodeURIComponent(container.getAttribute("data-cart-item")!),
  );

const input : HTMLInputElement | null = document.querySelector(`input[id="${productID}"]`)
const quantity = Number(input?.value) || 1
  console.log("newItem", item)

  window.STOREFRONT.CART.addToCart(item as any, platformProps);
  setTimeout(()=>{
    window.STOREFRONT.CART.setQuantity(productID, quantity)
  },1000)
  setTimeout(() => { 
    const button: HTMLButtonElement | null = window.document.querySelector(
      '[aria-label="open cart"]',
    );
    button?.click();
  }, 500);
};
const onChange = () => {
  const input = event!.currentTarget as HTMLInputElement;
  const productID = input!
    .closest("div[data-cart-item]")!
    .getAttribute("data-item-id")!;
  const quantity = Number(input.value);

  if (!input.validity.valid) {
    return;
  }

  window.STOREFRONT.CART.setQuantity(productID, quantity);
  setTimeout(() => {
    const button: HTMLButtonElement | null = window.document.querySelector(
      '[aria-label="open cart"]',
    );
    button?.click();
  }, 500);
};
// Copy cart form values into AddToCartButton
const onLoad = (id: string) => {
  window.STOREFRONT.CART.subscribe((sdk) => {
    const container = document.getElementById(id);
    const checkbox = container?.querySelector<HTMLInputElement>(
      'input[type="checkbox"]',
    );
    const input = container?.querySelector<HTMLInputElement>(
      'input[type="number"]',
    );
    const itemID = container?.getAttribute("data-item-id")!;
    const quantity = sdk.getQuantity(itemID) || 0;
    console.log("carregou pdp", id, sdk)
    if (!input || !checkbox) {
      return;
    }
    input.value = quantity.toString();
    checkbox.checked = quantity > 0;
    // enable interactivity
    container
      ?.querySelectorAll<HTMLButtonElement>("button")
      .forEach((node) => (node.disabled = false));
    container
      ?.querySelectorAll<HTMLButtonElement>("input")
      .forEach((node) => (node.disabled = false));
  });
};
const useAddToCart = ({ product, seller }: Props) => {
  const platform = usePlatform();
  const { additionalProperty = [], isVariantOf, productID } = product;
  const productGroupID = isVariantOf?.productGroupID;
  if (platform === "vtex") {
    return {
      allowedOutdatedData: ["paymentData"],
      orderItems: [{ quantity: 1, seller: seller, id: productID }],
    };
  }
  if (platform === "shopify") {
    return { lines: { merchandiseId: productID } };
  }
  if (platform === "vnda") {
    return {
      quantity: 1,
      itemId: productID,
      attributes: Object.fromEntries(
        additionalProperty.map(({ name, value }) => [name, value]),
      ),
    };
  }
  if (platform === "wake") {
    return {
      productVariantId: Number(productID),
      quantity: 1,
    };
  }
  if (platform === "nuvemshop") {
    return {
      quantity: 1,
      itemId: Number(productGroupID),
      add_to_cart_enhanced: "1",
      attributes: Object.fromEntries(
        additionalProperty.map(({ name, value }) => [name, value]),
      ),
    };
  }
  if (platform === "linx") {
    return {
      ProductID: productGroupID,
      SkuID: productID,
      Quantity: 1,
    };
  }
  return null;
};
function AddToCartButton(props: Props) {
  const { product, item, class: _class, products } = props;
  const { productID, offers, isVariantOf, url, name } = product;
  const {
    price = 0,
    listPrice,
    seller = "1",
    availability,
    installments,
    salePrice,
  } = useOffer(offers);
  const pixObj = product.isVariantOf?.hasVariant
    .filter((value) => value.url == url)[0]
    .offers?.offers[0].priceSpecification.filter(
      (value) => value.name?.toLowerCase() == "pix",
    )[0];
  const pixporcent =
    (pixObj && salePrice && (pixObj.price / salePrice) * 100) ||
    (price && salePrice && (price / salePrice) * 100);
  const title = isVariantOf?.name ?? product.name;
  const platformProps = useAddToCart(props);
  const id = useId();

  return (
    <>
      {/* Sku Selector */}
      {!title?.toLocaleLowerCase().includes("coqueteleira") && (
        <div class="mt-4">
          <ProductSelector product={product} similares={products} />
        </div>
      )}
      <div
        id={id}
        class="flex flex-col "
        data-item-id={product.productID}
        data-cart-item={encodeURIComponent(
          JSON.stringify({ item, platformProps }),
        )}
      >
        {/* Prices */}
        <div class={` flex flex-row `}>
          <div class="flex flex-col w-1/2 pt-4">
            {availability !== "https://schema.org/InStock"
              ? (
                <span className="text-red-300 font-bold text-xl">
                  Fora de estoque
                </span>
              )
              : (
                <>
                  <span className="text-xl font-bold flex gap-2 text-gray-400 items-center">
                    {formatPrice(pixObj?.price) || formatPrice(price)}
                    <p className="text-sm text-gray-300">
                      via PIX {pixporcent && -(pixporcent - 100) % 1 < 0.5
                        ? Math.floor(-(pixporcent - 100)) + "% OFF "
                        : Math.ceil(-(pixporcent! - 100)) + "% OFF "}
                      ou
                    </p>
                  </span>

                  {salePrice !== listPrice
                    ? (
                      <div className="flex flex-row">
                        <span className="line-through text-sm font-normal text-gray-300">
                          {formatPrice(listPrice, offers?.priceCurrency)}
                        </span>
                        <span className="pl-2.5 text-sm font-normal text-gray-300">
                          {formatPrice(salePrice, offers?.priceCurrency)}
                        </span>
                      </div>
                    )
                    : (
                      <span className="text-sm font-normal text-gray-300">
                        {formatPrice(listPrice, offers?.priceCurrency)}
                      </span>
                    )}

                  <span className="max-w-[265px] text-sm font-normal text-gray-300">
                    {installments}
                  </span>
                </>
              )}
          </div>
          <div class="flex flex-grow w-1/2 m-auto justify-center snap-center items-center">
            <QuantitySelector
              disabled
              min={1}
              value={1}
              max={100}
              id={productID}
            />
          </div>
        </div>
        {/* Shipping Simulation */}
        <div class="mt-4">
          <ShippingSimulationForm
            items={[{ id: Number(product.sku), quantity: 1, seller: seller }]}
          />
        </div>

        <input type="checkbox" class="hidden peer" />

        <button
          disabled
          class={clx("flex-grow", _class?.toString())}
          hx-on:click={useScript(onClick, productID)}
        >
          {props.ctaText ?? "COMPRAR AGORA"}
          <svg
            class="w-4 h-4 md:w-8 md:h-8 lg:w-5 lg:h-5 xl:w-8 xl:h-8"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.667 4 8v18.667a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 28 26.667V8l-4-5.333zM4 8h24"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.333 13.333a5.333 5.333 0 1 1-10.666 0"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {/* Quantity Input */}

        <script
          type="module"
          dangerouslySetInnerHTML={{ __html: useScript(onLoad, id) }}
        />
      </div>
    </>
  );
}
export default AddToCartButton;
