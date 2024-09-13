// import { AddToCartParams } from "apps/commerce/types.ts";
import { useState } from "preact/hooks";
import Button from "../ui/Button.tsx";

export interface Props {
  /** @description: sku name */
  onAddItem: () => Promise<void>;
  onAddAttachment: () => Promise<void>;
  /** @format color */
  buttonColor?: string;
}

const useAddToCart = (
  { onAddItem, onAddAttachment }: Props,
) => {
  const [loading, setLoading] = useState(false);

  const onClick = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(true);

      await onAddItem();
      await onAddAttachment();
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
      class="w-full md:w-auto btn no-animation rounded-[5px] bg-[#F0D02C] font-medium text-xs flex justify-center items-center text-center uppercase outline-none transition-all hover:bg-black hover:text-white hover:border-black border text-black border-solid border-[#F0D02C] h-[55px]"
    >
      Adicionar à Sacola
    </Button>
  );
}
