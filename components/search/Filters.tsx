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
      <div aria-checked={selected} class="[--chkbg:#E06741] [--chkfg:white] checkbox w-4 h-4 rounded border border-gray-300 bg-white" />
      <span class="text-sm">{label}</span>
      {quantity > 0 && <span class="text-sm text-base-300">({quantity})</span>}
    </a>
  );
}

function FilterValues({ key, values }: FilterToggle) {
  const avatars = key === "tamanho" || key === "cor";
  const flexDirection = avatars ? "flex-row items-center" : "flex-col";

  return (
    <ul class={clx(`flex flex-wrap gap-2`, flexDirection)}>
      {values.map((item) => {
        const { url, selected, value } = item;

        if (avatars) {
          return (
            <a href={url} rel="nofollow">
              <Avatar
                content={value}
                variant={selected ? "active" : "default"}
              />
            </a>
          );
        }

        if (key === "price") {
          const range = parseRange(item.value);

          return range && (
            <ValueItem
              {...item}
              label={`${formatPrice(range.from)} - ${formatPrice(range.to)}`}
            />
          );
        }

        return <ValueItem {...item} />;
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  console.log("filtros:", filters)
  return (
    <ul class="flex flex-col gap-6 p-4 sm:p-0">
      {filters
        .filter(isToggle)
        .map((filter, index) => (
          <>
            {/* <li class="flex flex-col gap-4">
              <span>{filter.label}</span>
              <FilterValues {...filter} />
            </li> */}
            {filter.label != "Departamento" &&
            filter.label != "Category 4" && (
              <div className="collapse rounded-none collapse-arrow border-b border-gray-100">
                <input type="checkbox" className={"peer"} name={`my-accordion-${index}`} />
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
