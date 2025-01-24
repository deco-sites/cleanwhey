import { useCart } from "apps/vtex/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";
import { useSignal } from "@preact/signals";

export interface Props extends Omit<BtnProps, "onAddItem"> {
  seller: string;
  productID: string;
  /** @format color */
  buttonColor?: string;
}

function AddToCartButton(
  { seller, productID, buttonColor }: Props,
) {
  const { addItems, addItemAttachment, cart } = useCart();
  const count = useSignal(1);

  const onAddItem = async () => {
    const container = document.querySelector<HTMLDivElement>(
      "div[data-cart-item]",
    )!;
    const { item, platformProps } = JSON.parse(
      decodeURIComponent(container.getAttribute("data-cart-item")!),
    );

    const res = await addItems({
      orderItems: [{
        quantity: item.quantity,
        seller: "1",
        id: item.item_id,
      }]
    }).finally(async () => {
      const cartItem = await cart.value
      cartItem.items.map((cart, index) => {
        if (cart.id == item.item_id) {
          addItemAttachment({
            index: index,
            attachment: "vtex.subscription.assinatura",
            content: {
              "vtex.subscription.key.frequency": " 1 month",
            },
          });
        }
      })
    })

    setTimeout(() => {
      const refresh: HTMLButtonElement | null = window.document.querySelector("#refresh-minicart")
      const button: HTMLButtonElement | null = window.document.querySelector(
        '[aria-label="open cart"]',
      );
      setTimeout(() => {

        button?.click();
      }, 200)
      refresh?.click();
    }, 500);
  };

  return (
    <div class="flex items-center gap-3">
      <Button
        buttonColor={buttonColor}
        onAddItem={onAddItem}
      />
    </div>
  );
}

export default AddToCartButton;
