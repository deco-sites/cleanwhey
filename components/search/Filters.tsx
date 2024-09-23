import type {
  Filter,
  FilterToggle,
  FilterToggleValue,
  ProductListingPage,
} from "apps/commerce/types.ts";
import { parseRange } from "apps/commerce/utils/filters.ts";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";
import MultiRangeSlider from "../../islands/MultiRangeSlider.tsx";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function ValueItem({ url, selected, label, quantity }: FilterToggleValue) {
  return (
    <a href={url} rel="nofollow" class="flex items-center gap-2">
      <div
        aria-checked={selected}
        class="[--chkbg:#E06741] [--chkfg:white] checkbox w-4 h-4 rounded border border-gray-300 bg-white"
      />
      <span class="text-sm capitalize">{label.toLowerCase()}</span>
      {quantity > 0 && <span class="text-sm text-base-300">({quantity})</span>}
    </a>
  );
}
function ValueItemColor({ url, selected, label }: FilterToggleValue) {
  const COLORS = {
    LARANJA: "#E06741",
    AZUL: " #2b41c6",
  };
  return (
    <a href={url} rel="nofollow" class="flex items-center gap-2">
      <div
        aria-checked={selected}
        class=" checkbox w-8 h-8 border p-1 border-gray-200 aria-checked:border-2 bg-white rounded-full aria-checked:border-gray-400 "
        style={{ background: COLORS[(label as keyof typeof COLORS) || "#fff"] }}
      />
    </a>
  );
}

function FilterValues({ key, values }: FilterToggle) {
  const avatars = key === "cor";
  const flexDirection = avatars ? "flex-row items-center" : "flex-col";

  const newFilters: FilterToggleValue[] = [];
  values.forEach((value) => {
    if (value.value != "clean-whey-medical") {
      const filter = newFilters.find((filter) => filter.value === value.value);
      if (filter) {
        filter.quantity += value.quantity;
      } else {
        newFilters.push(value);
      }
    }
  });
  if (key === "price") {
    const valuesArray = Object.entries(values);

    const url = valuesArray[0][1].url;

    const urlPrice = url
      .split("&")
      .slice(0, -1)
      .filter((r) => r.includes("filter.price"))[0]
      ?.split("=")[1]
      ?.split("%3A");
    const urlBrowser = url
      .split("&")
      .slice(0, -1)
      .filter((r) => !r.includes("filter.price"))
      .join("&");

    const rangeArray: number[] = [];

    valuesArray.map((value) => {
      const aux = value[1].value.split(":");
      const auxArr = aux.map((r) => parseInt(r));
      rangeArray.push(...auxArr);
    });
    rangeArray.sort((a, b) => a - b);
    const minRange = rangeArray[0];
    const maxRange = rangeArray[rangeArray.length - 1];

    const [currentMaxMin, setCurrentMaxMin] = useState({
      max: urlPrice ? parseInt(urlPrice[1]) : maxRange,
      min: urlPrice ? parseInt(urlPrice[0]) : minRange,
    });

    let timeOutId = 0;
    let firstTime = 0;

    return (
      <div class={`h-16 mt-4`}>
        <MultiRangeSlider
          min={minRange}
          max={maxRange}
          currentMin={currentMaxMin.min}
          currentMax={currentMaxMin.max}
          onChange={(query: { min: number; max: number }) => {
            if (
              currentMaxMin.max != query.max ||
              currentMaxMin.min != query.min
            ) {
              if (firstTime > 0) {
                clearTimeout(timeOutId);
                timeOutId = setTimeout(() => {
                  setCurrentMaxMin({ max: query.max, min: query.min });
                  window.location.href =
                    urlBrowser +
                    "&filter.price=" +
                    query.min +
                    "%3A" +
                    query.max;
                }, 500);
              }
              firstTime++;
            }
          }}
        />
      </div>
    );
  }
  return (
    <ul class={clx(`flex flex-wrap gap-2`, flexDirection)}>
      {newFilters.map((item) => {
        if (key === "price") {
          const range = parseRange(item.value);

          return (
            range && (
              <div>
                <ValueItem
                  {...item}
                  label={`${formatPrice(range.from)} - ${formatPrice(
                    range.to
                  )}`}
                />
              </div>
            )
          );
        } else if (avatars) {
          return <ValueItemColor {...item} />;
        } else {
          return <ValueItem {...item} />;
        }
      })}
    </ul>
  );
}

function Filters({ filters }: Props) {
  const filtersArray: Filter[] = [];

  filters.forEach((filter) => {
    // Verifica se já existe um item no filtersArray com a mesma chave
    const existingFilter = filtersArray.find((item) => item.key === filter.key);

    if (existingFilter) {
      // Se o filtro já existe, adiciona os valores do novo filtro ao array de valores existente
      existingFilter.values = [
        ...new Set([...existingFilter.values, ...filter.values]),
      ];
    } else {
      // Se o filtro não existe, adiciona ao filtersArray
      filtersArray.push(filter);
    }
  });

  return (
    <ul class="flex flex-col gap-6 p-4 sm:p-0">
      {filtersArray.filter(isToggle).map((filter, index) => (
        <>
          {filter.label != "Departamento" && filter.label != "Category 4" && (
            <div className="collapse rounded-none collapse-arrow border-b border-gray-100">
              <input
                type="checkbox"
                className={"peer"}
                name={`my-accordion-${index}`}
              />
              <div className="collapse-title after:!h-3 after:!w-3 after:text-gray-300 after:peer-checked:text-orange-300 text-gray-300 text-lg font-bold gap-2 !flex items-center p-0 peer-checked:text-orange-300 capitalize">
                {filter.label.toLowerCase()}
              </div>
              <div className="collapse-content overflow-y-auto overflow-x-hidden">
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
