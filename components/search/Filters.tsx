import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";
import { parseRange } from "apps/commerce/utils/filters.ts";
import Avatar from "../../components/ui/Avatar.tsx";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem(
  { url, selected, label, quantity }: FilterToggleValue,
) {
  return (
    <a href={url} rel="nofollow" class="flex items-center gap-2">
      <div
        aria-checked={selected}
        class="[--chkbg:#E06741] [--chkfg:white] checkbox w-4 h-4 rounded border border-gray-300 bg-white"
      />
      <span class="text-sm">{label}</span>
      {quantity > 0 && <span class="text-sm text-base-300">({quantity})</span>}
    </a>
  );
}

function FilterValues({ key, values }: FilterToggle) {
  const avatars = key === "cor";
  const flexDirection = avatars ? "flex-row items-center" : "flex-col";

  return (
    <ul class={clx(`flex flex-wrap gap-2`, flexDirection)}>
      {values.map((item) => {
        const { url, selected, value } = item;

        // if (avatars) {
        //   return (
        //     <a href={url} rel="nofollow">
        //       <Avatar
        //         content={value}
        //         variant={selected ? "active" : "default"}
        //       />
        //     </a>
        //   );
        // }

        if (key === "price") {
          const range = parseRange(item.value);
          // console.log(values)

          return range && (
            <>
              <ValueItem
                {...item}
                label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
              />
              {
                /* <div class="grid border-solid border-b border-gray-200 grid-rows-[1fr] transition-[grid-template-rows] duration-600 ease-in-out">
                <div class="overflow-y-auto overflow-x-hidden max-h-[400px]">
                  <div class="false h-16 mt-4">
                    <div class="container-slideri">
                      <input type="range" min={range.from} max={range.to} value={range.from} class="thumb_ thumb--zindex-3 false" />
                      <input type="range" min={range.from} max={range.to} value={range.to} class="thumb_ thumb--zindex-4" />
                      <div class="slider_">
                        <div class="slider__track"></div>
                        <div class="slider__range"></div>
                        <div class="slider__left-value">{range.from}</div>
                        <div class="slider__right-value">{range.to}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */
              }
            </>
          );
        }

        return <ValueItem {...item} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  // console.log("filtros:", filters);
  return (
    <ul class="flex flex-col gap-6 p-4 sm:p-0">
      {filters
        .filter(isToggle)
        .map((filter, index) => (
          <>
            {
              /* <li class="flex flex-col gap-4">
              <span>{filter.label}</span>
              <FilterValues {...filter} />
            </li> */
            }
            {filter.label != "Departamento" &&
              filter.label != "Category 4" && (
              <div className="collapse rounded-none collapse-arrow border-b border-gray-100">
                <input
                  type="checkbox"
                  className={"peer"}
                  name={`my-accordion-${index}`}
                />
                <div className="collapse-title after:!h-3 after:!w-3 after:text-gray-300 after:peer-checked:text-orange-300 text-gray-300 text-lg font-bold gap-2 !flex items-center p-0 peer-checked:text-orange-300">
                  {filter.label}
                </div>
                <div className="collapse-content">
                  <FilterValues {...filter} />
                </div>
              </div>
            )}
          </>
        ))}
    </ul>
  );
}

export default Filters;
