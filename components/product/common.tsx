import { useState } from "preact/hooks";
import Button from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";

export interface Props {
  /** @description: sku name */
  onAddItem: () => Promise<void>;
  /** @format color */
  buttonColor?: string;
}

const useAddToCart = (
  { onAddItem }: Props,
) => {
  const [loading, setLoading] = useState(false);

  const onClick = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);

      await onAddItem();
    } finally {
      setLoading(false);
    }
  };

  return { onClick, loading, "data-deco": "add-to-cart" };
};

export default function AddToCartButton(props: Props) {
  const btnProps = useAddToCart(props);

  return (
    <Button
      {...btnProps}
      style={{
        backgroundColor: props.buttonColor ? props.buttonColor : "",
        borderColor: props.buttonColor ? props.buttonColor : "",
      }}
      class="w-full btn no-animation rounded-[5px] bg-transparent font-medium text-sm flex justify-center items-center text-center outline-none transition-all hover:text-white hover:border-black border border-solid border-[#193861] h-[55px] text-[#193861] hover:bg-[#193861]"
    >
      Assine e economize até R$ 99,99
      <Icon id={"arrow-subscribe"} />
    </Button>
  );
}
