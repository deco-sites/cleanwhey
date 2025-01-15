import { AnalyticsItem, Product } from "apps/commerce/types.ts";
import { JSX } from "preact";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import QuantitySelector from "../ui/QuantitySelector.tsx";
import { useScript as useScript } from "@deco/deco/hooks";
export interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  product: Product;
  seller: string;
  item: AnalyticsItem;
  ctaText?: string;
}

const onClick = () => {
  event?.stopPropagation();
  const button = event?.currentTarget as HTMLButtonElement | null;
  const container = button!.closest<HTMLDivElement>("div[data-cart-item]")!;
  const { item, platformProps } = JSON.parse(
    decodeURIComponent(container.getAttribute("data-cart-item")!),
  );
  window.STOREFRONT.CART.addToCart(item, platformProps);
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

    const itemID = container?.getAttribute("data-item-id")!;
    const quantity = sdk.getQuantity(itemID) || 0;
    if (!checkbox) {
      return;
    }
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
  const { product, item, class: _class } = props;
  const platformProps = useAddToCart(props);
  const id = useId();
  return (
    <div
      id={id}
      class="flex flex-col "
      data-item-id={product.productID}
      data-cart-item={encodeURIComponent(
        JSON.stringify({ item, platformProps }),
      )}
    >
      <input type="checkbox" class="hidden peer" />

      <button
        disabled
        class={clx("flex-grow group disabled:bg-primary disabled:opacity-80", _class?.toString())}
        hx-on:click={useScript(onClick)}
      >
        <span className="group-disabled:flex hidden loading loading-spinner loading-md"></span>
        <div class={"group-disabled:hidden flex justify-center items-center gap-2"  }>

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
      </div>
      </button>

      {/* Quantity Input */}

      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad, id) }}
      />
    </div>
  );
}
export default AddToCartButton;
