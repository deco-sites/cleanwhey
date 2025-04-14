import { Product } from "apps/commerce/types.ts";
// import { clx } from "../../sdk/clx.ts";
import Icon from "../ui/Icon.tsx";
import Slider from "../ui/Slider.tsx";
import ProductCard from "./ProductCard.tsx";
import { useId } from "../../sdk/useId.ts";
import { Props as SectionHeaderProps } from "../../components/ui/Section.tsx";

interface Props extends SectionHeaderProps {
  products: Product[];
  itemListName?: string;
}

function ProductSlider({ products, itemListName, isFeatured }: Props) {
  const id = useId();
  return (
    <>
      <div
        id={id}
        class="flex items-center justify-between desktop:justify-unset mb-4 max-w-[1216px] mx-auto"
      >
        <div>
          <Slider.PrevButton class="disable:bg-transparent flex btn !bg-transparent border-none btn-neutral btn-sm btn-circle no-animation">
            <Icon
              id="arrow-right-custom"
              class={`${isFeatured ? "text-white" : "text-orange-300"
                } rotate-180`}
            />
          </Slider.PrevButton>
        </div>

        <div
          class={`${isFeatured
              ? "phone:max-w-[90%] max-w-[85%]"
              : "desktop:max-w-[95%] max-w-[80%]"
            } w-full px-0 `}
        >
          <Slider class="carousel w-full gap-4 pt-4">
            {products?.map((product, index) => {
              return (
                <Slider.Item
                  key={index}
                  index={index}
                  className={`carousel-item w-full 
                first:pl-0 first:mobile:pl-2 last:pr-0 last:mobile:pr-2
                ${isFeatured
                      ? "desktop:w-[calc(33.33%-16px)]"
                      : "desktop:w-[calc(33%-16px)] desktop-lg:w-[calc(25%-16px)]"
                    }
              `}
                >
                  <ProductCard
                    product={product}
                    productName={product.name}
                    isFeatured={isFeatured}
                    itemListName={itemListName}
                    class={`mx-4 desktop:mx-0 p-4 w-full ${isFeatured ? "bg-white" : ""
                      } border border-gray-100 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]`}
                  />
                </Slider.Item>
              );
            })}
          </Slider>
        </div>

        <div>
          <Slider.NextButton class="disabled:bg-transparent flex btn btn-neutral border-none !bg-transparent btn-sm btn-circle no-animation -ml-2">
            <Icon
              id="arrow-right-custom"
              class={`${isFeatured ? "text-white" : "text-orange-300"}`}
            />
          </Slider.NextButton>
        </div>
      </div>
      <Slider.JS rootId={id} infinite />
    </>
  );
}

export default ProductSlider;
