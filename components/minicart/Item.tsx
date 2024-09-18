import { AnalyticsItem } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";
import QuantitySelector from "../ui/QuantitySelector.tsx";
import { useScript as useScript } from "@deco/deco/hooks";
export type Item = AnalyticsItem & {
  listPrice: number;
  image: string;
};
export interface Props {
  item: Item;
  index: number;
  locale: string;
  currency: string;
}
const QUANTITY_MAX_VALUE = 100;
const removeItemHandler = () => {
  const itemID = (event?.currentTarget as HTMLButtonElement | null)
    ?.closest("fieldset")
    ?.getAttribute("data-item-id");
  if (typeof itemID === "string") {
    window.STOREFRONT.CART.setQuantity(itemID, 0);
  }
};
function CartItem({ item, index, locale, currency }: Props) {
  const { image, listPrice, price = Infinity, quantity } = item;
  const isGift = price < 0.01;
  // deno-lint-ignore no-explicit-any
  let name = (item as any).item_name;
  name = name
    .replace("Tamanho:", "- ")
    .replace(/Sabor:[^;]*/g, "")
    .replace(";", "")
    .replace("Cor:", "");
  function removeDuplicateWordsPreserveOrder(text: string) {
    const words = text.split(/\s+/);
    const seen = new Set();
    const uniqueWords = words.filter((word) => {
      if (seen.has(word)) {
        return false;
      }
      seen.add(word);
      return true;
    });
    return uniqueWords.join(" ");
  }
  const newName = removeDuplicateWordsPreserveOrder(name);
  return (
    <fieldset
      // deno-lint-ignore no-explicit-any
      data-item-id={(item as any).item_id}
      class="grid grid-rows-1 gap-2 px-4"
      style={{ gridTemplateColumns: "auto 1fr" }}
    >
      <Image
        alt={name}
        src={image.replace("-55-55", "")}
        style={{ aspectRatio: "80 / 80" }}
        width={80}
        height={80}
        class="h-full object-contain"
      />

      {/* Info */}
      <div class="flex flex-col gap-2">
        {/* Name and Remove button */}
        <div class="flex justify-between items-center ">
          <legend
            class="text-sm font-normal text-gray-400"
            style={"display: block; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis"}
          >
            {newName}
          </legend>
          <button
            class={clx(
              isGift && "hidden",
              "btn btn-ghost btn-square no-animation",
            )}
            hx-on:click={useScript(removeItemHandler)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                stroke="#CF2424"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Price Block */}
        <div class="flex items-end justify-between">
          <div class="flex flex-col items-start ">
            {price != listPrice && (
              <span class="line-through text-sm text-gray-200 font-normal">
                {formatPrice(price, currency, locale)}
              </span>
            )}
            <span class="text-lg font-bold text-gray-400">
              {isGift ? "Grátis" : formatPrice(price, currency, locale)}
            </span>
          </div>

          {/* Quantity Selector */}
          <div class={clx(isGift && "hidden")}>
            <QuantitySelector
              min={0}
              max={QUANTITY_MAX_VALUE}
              value={quantity}
              name={`item::${index}`}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
}
export default CartItem;
