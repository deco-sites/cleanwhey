import type { Product } from "apps/commerce/types.ts";
import { useSection } from "deco/hooks/useSection.ts";
import { clx } from "../../sdk/clx.ts";
import { relative } from "../../sdk/url.ts";
import { useId } from "../../sdk/useId.ts";
import { useVariantPossibilities } from "../../sdk/useVariantPossiblities.ts";

interface Props {
  product: Product;
}

const colors: Record<string, string | undefined> = {
  "White": "white",
  "Black": "black",
  "Gray": "gray",
  "Blue": "#99CCFF",
  "Green": "#aad1b5",
  "Yellow": "#F1E8B0",
  "DarkBlue": "#4E6E95",
  "LightBlue": "#bedae4",
  "DarkGreen": "#446746",
  "LightGreen": "#aad1b5",
  "DarkYellow": "#c6b343",
  "LightYellow": "#F1E8B0",
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

export const Ring = (
  { value, checked = false, class: _class, image }: {
    value: string;
    checked?: boolean;
    class?: string;
    image?: string;
  },
) => {
  const color = colors[value];
  // const styles = clx(useStyles(value, checked), _class);

  return (
    <div class={`uppercase flex flex-col gap-1 items-center text-xs font-bold text-center
    ${checked ? "text-orange-300" : "text-gray-300"}`}>
      <span style={{ backgroundColor: color }} 
      class={`btn hover:border-orange-300 btn-ghost hover:bg-transparent bg-transparent rounded-full h-12 w-12 p-0 overflow-hidden
      ${checked ? "ring-primary border-orange-300" : "border-gray-200"}
      `}>
        {image && (
          <img width={40} height={40} loading={"lazy"} src={image} />
        )}
      </span>
      {color ? null : value}
    </div>
  );
};

function VariantSelector({ product }: Props) {
  const { url, isVariantOf } = product;
  const hasVariant = isVariantOf?.hasVariant ?? [];
  const possibilities = useVariantPossibilities(hasVariant, product);
  const relativeUrl = relative(url);
  const id = useId();

  console.log(possibilities)

  return (
    <ul
      class="flex flex-col gap-4"
      hx-target="body"
      hx-swap="outerHTML"
      hx-replace-url="true"
      hx-sync="this:replace"
    >
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2">
          <span class="text-sm text-gray-300 font-normal mb-2">{name}</span>
          <ul class="flex flex-row gap-4">
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
                        <Ring value={value} image={link?.image} checked={checked} />
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
  );
}

export default VariantSelector;
