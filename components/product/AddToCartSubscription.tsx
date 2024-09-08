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
  const { addItems, addItemAttachment } = useCart();
  const count = useSignal(1);

  const onAddItem = () =>
    addItems({
      orderItems: [{
        id: productID,
        seller: seller,
        quantity: count.value,
      }],
    });

  const onAddAttachment = () => {

    addItemAttachment({
      index: 0,
      attachment: "vtex.subscription.assinatura",
      content: {
        "assinatura": "mensal",
      },
    });
  }

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
