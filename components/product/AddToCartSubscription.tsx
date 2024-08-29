// deno-lint-ignore-file no-constant-condition
import { useCart } from "apps/vtex/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";
import { useSignal } from "@preact/signals";
export interface Props extends Omit<BtnProps, "onAddItem"> {
  seller: string;
  productID: string;
  /** @format color */
  buttonColor?: string;
  i?: number;
  attach?: string;
  cont?: {
    key: string;
    value: string;
  };
}

function AddToCartButton(
  { seller, productID, buttonColor, i, attach, cont }: Props,
) {
  const { addItems, addItemAttachment } = useCart();
  const { key, value } = cont;
  const count = useSignal(1);

  const onAddItem = () =>
    addItems({
      orderItems: [{
        id: productID,
        seller: seller,
        quantity: count.value,
      }],
    });

  const onAddAttachment = () =>
    addItemAttachment({
      index: i ? i : 0,
      attachment: attach ? attach : "vtex.subscriptions.assinatura",
      content: {
        key: value,
      },
    });

  return (
    <div class="flex items-center gap-3">
      <Button
        buttonColor={buttonColor}
        onAddItem={onAddItem}
        onAddAttachment={onAddAttachment}
      />
    </div>
  );
}

export default AddToCartButton;
