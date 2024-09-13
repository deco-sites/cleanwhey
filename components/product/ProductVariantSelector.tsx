import type { Product } from "apps/commerce/types.ts";
import { clx } from "../../sdk/clx.ts";
import { relative } from "../../sdk/url.ts";
import { useId } from "../../sdk/useId.ts";
import { useVariantPossibilities } from "../../sdk/useVariantPossiblities.ts";

interface Props {
  product: Product;
}

const colors: Record<string, string | undefined> = {
  White: "white",
  Black: "black",
  Gray: "gray",
  Blue: "#99CCFF",
  Green: "#aad1b5",
  Yellow: "#F1E8B0",
  DarkBlue: "#4E6E95",
  LightBlue: "#bedae4",
  DarkGreen: "#446746",
  LightGreen: "#aad1b5",
  DarkYellow: "#c6b343",
  LightYellow: "#F1E8B0",
};

// const useStyles = (value: string, checked: boolean) => {
//   if (colors[value]) {
//     return clx(
//       "h-12 w-12 block",
//       "rounded-full",
//       "ring-2 ring-offset-2",
//       checked ? "ring-primary border-orange-300" : "ring-transparent border-gray-200",
//     );
//   }

//   return clx(
//     "btn btn-ghost rounded-full h-12 w-12 p-0 overflow-hidden",
//     checked && "btn-outline ",
//   );
// };

export const Ring = ({
  value,
  checked = false,
  class: _class,
  image,
}: {
  value: string;
  checked?: boolean;
  class?: string;
  image?: string;
}) => {
  const color = colors[value];
  // const styles = clx(useStyles(value, checked), _class);

  return (
    <div
      class={`flex flex-col gap-1 capitalize items-center text-xs font-bold text-center
    ${checked ? "text-orange-300" : "text-gray-300"}`}
    >
      <span
        style={{ backgroundColor: color }}
        class={`btn hover:border-orange-300 btn-ghost hover:bg-transparent bg-transparent rounded-full h-12 w-12 p-0 overflow-hidden
      ${checked ? "ring-primary border-orange-300" : "border-gray-200"}
      `}
      >
        {image && <img width={40} height={40} loading={"lazy"} src={image} />}
      </span>
      {color ? null : value}
    </div>
  );
};

export const Box = ({
  value,
  checked = false,
  class: _class,
}: {
  value: string;
  checked?: boolean;
  class?: string;
}) => {
  const upperText = value.toUpperCase();

  return (
    <div
      class={`rounded-lg min-w-[60px] py-1 px-4
      ${checked ? "bg-gray-400 text-white" : "bg-gray-100 text-gray-300"}`}
    >
      <span
        class={`font-bold text-xs text-center  ${
          checked ? "text-white" : "text-grat-300"
        }`}
      >
        {upperText.replace(/G$/, "g")}
      </span>
    </div>
  );
};

function VariantSelector({ product }: Props) {
  const { url, isVariantOf } = product;
  const hasVariant = isVariantOf?.hasVariant ?? [];
  const possibilities = useVariantPossibilities(hasVariant, product);
  const tastes = product.isSimilarTo;
  const relativeUrl = relative(url);
  const id = useId();
  const productTaste = product.additionalProperty?.find(
    (item) => item.name == "SABOR",
  );

  return (
    <>
      {tastes && tastes.length > 0 && (
        <span class="text-sm text-gray-300 font-normal mb-2 uppercase">
          SABORES
        </span>
      )}
      <ul
        class="flex flex-row flex-wrap gap-2 mb-4"
        hx-target="body"
        hx-swap="outerHTML"
        hx-replace-url="true"
        hx-sync="this:replace"
      >
        {tastes && tastes.length > 0 && (
          <li class="flex flex-col gap-2 min-w-[80px]">
            {product.image && product.image?.length > 0 && (
              <Ring
                value={productTaste?.value?.toLowerCase() || "Sabor"}
                image={product?.image[0]?.url}
                checked={true}
              />
            )}
          </li>
        )}
        {tastes?.map((item) => {
          const relativeLink = relative(item.url);
          const filteredProperties = item.isVariantOf?.additionalProperty
            .filter(
              ({ name }) => name === "Nome nos similares",
            );
          return (
            <li class="flex flex-col gap-2 min-w-[80px]">
              <label
                class="cursor-pointer grid grid-cols-1 grid-rows-1 place-items-center"
                hx-get={relativeLink}
              >
                {/* Checkbox for radio button on the frontend */}
                <input
                  class="hidden peer"
                  type="radio"
                  name={`${id}-${item.name}`}
                  checked={false}
                />
                <div
                  class={clx(
                    "col-start-1 row-start-1 col-span-1 row-span-1",
                    "transition-opacity",
                  )}
                >
                  {item.image &&
                    item.image?.length > 0 &&
                    filteredProperties && (
                    <Ring
                      value={filteredProperties[0]?.value || "Sabor"}
                      image={item?.image[0]?.url}
                      checked={false}
                    />
                  )}
                </div>
                {/* Loading spinner */}
                <div
                  class={clx(
                    "col-start-1 row-start-1 col-span-1 row-span-1",
                    "opacity-0 [.htmx-request_&]:opacity-100 transition-opacity",
                    "flex justify-center items-center",
                  )}
                >
                  <span class="loading loading-sm loading-spinner" />
                </div>
              </label>
            </li>
          );
        })}
      </ul>
      <ul
        class="flex flex-col gap-2"
        hx-target="body"
        hx-swap="outerHTML"
        hx-replace-url="true"
        hx-sync="this:replace"
      >
        {Object.keys(possibilities).map((name) => (
          <li
            class={`flex flex-col gap-2 ${
              name == "SABOR" || name == "activeSubscriptions" ? "hidden" : ""
            }`}
          >
            <span class="text-sm text-gray-300 font-normal uppercase mb-2">
              {name}
            </span>
            <ul class="flex flex-row flex-wrap gap-4">
              {Object.entries(possibilities[name])
                .filter(([value]) => value)
                .map(([value, link]) => {
                  const relativeLink = relative(link?.url);
                  const checked = relativeLink === relativeUrl;

                  return (
                    <li>
                      <label
                        class="cursor-pointer grid grid-cols-1 grid-rows-1 place-items-center"
                        hx-get={relativeLink}
                      >
                        {/* Checkbox for radio button on the frontend */}
                        <input
                          class="hidden peer"
                          type="radio"
                          name={`${id}-${name}`}
                          checked={checked}
                        />
                        <div
                          class={clx(
                            "col-start-1 row-start-1 col-span-1 row-span-1",
                            "transition-opacity",
                          )}
                        >
                          <Box
                            value={value}
                            // image={link?.image}
                            checked={checked}
                          />
                        </div>
                        {/* Loading spinner */}
                        <div
                          class={clx(
                            "col-start-1 row-start-1 col-span-1 row-span-1",
                            "opacity-0 [.htmx-request_&]:opacity-100 transition-opacity",
                            "flex justify-center items-center",
                          )}
                        >
                          <span class="loading loading-sm loading-spinner" />
                        </div>
                      </label>
                    </li>
                  );
                })}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default VariantSelector;
