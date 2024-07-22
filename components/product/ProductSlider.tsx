import { Product } from "apps/commerce/types.ts";
import { clx } from "../../sdk/clx.ts";
import Icon from "../ui/Icon.tsx";
import Slider from "../ui/Slider.tsx";
import ProductCard from "./ProductCard.tsx";
import { useId } from "../../sdk/useId.ts";

interface Props {
  products: Product[];
  itemListName?: string;
}

function ProductSlider({ products, itemListName }: Props) {
  const id = useId();

  return (
    <>
      <div
        id={id}
        class="flex items-center justify-between sm:justify-unset"
        // style={{
        //   gridTemplateColumns: "min-content 1fr min-content",
        // }}
      >
        <div>
          <Slider.PrevButton class="disable:bg-transparent flex btn !bg-transparent border-none btn-neutral btn-sm btn-circle no-animation">
            <Icon id="arrow-right-custom" class="rotate-180 text-orange-300" />
          </Slider.PrevButton>
        </div>

        <div class="w-full px-0 sm:px-4 max-w-[85%] sm:max-w-full">
          <Slider class="carousel sm:carousel-end carousel-center w-full gap-4 py-4">
            {products?.map((product, index) => (
              <Slider.Item
                index={index}
                class={clx(
                  "carousel-item w-full md:w-[calc(25%-16px)]",
                  "first:pl-0 first:sm:pl-2",
                  "last:pr-0 last:sm:pr-2",
                )}
              >
                <ProductCard
                  index={index}
                  product={product}
                  itemListName={itemListName}
                  class="mx-4 sm:mx-0 p-4 w-full border border-gray-100 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"
                />
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <div>
          <Slider.NextButton class="disabled:bg-transparent flex btn btn-neutral border-none !bg-transparent btn-sm btn-circle no-animation">
            <Icon id="arrow-right-custom" class="text-orange-300" />
          </Slider.NextButton>
        </div>
      </div>
      <Slider.JS rootId={id} />
    </>
  );
}

export default ProductSlider;
