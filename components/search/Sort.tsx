import { ProductListingPage } from "apps/commerce/types.ts";
import { useScript as useScript } from "@deco/deco/hooks";
const SORT_QUERY_PARAM = "sort";
const PAGE_QUERY_PARAM = "page";
export type Props = Pick<ProductListingPage, "sortOptions"> & {
    url: string;
};
const getUrl = (href: string, value: string) => {
    const url = new URL(href);
    url.searchParams.delete(PAGE_QUERY_PARAM);
    url.searchParams.set(SORT_QUERY_PARAM, value);
    return url.href;
};
const labels: Record<string, string> = {
    "relevance:desc": "Relevância",
    "price:desc": "Maior Preço",
    "price:asc": "Menor Preço",
    "orders:desc": "Mais vendidos",
    "name:desc": "Nome - de Z a A",
    "name:asc": "Nome - de A a Z",
    "release:desc": "Lançamento",
    "discount:desc": "Maior desconto",
};
function Sort({ sortOptions, url }: Props) {
    const current = getUrl(url, new URL(url).searchParams.get(SORT_QUERY_PARAM) ?? "");
    const options = sortOptions?.map(({ value, label }) => ({
        value: getUrl(url, value),
        label,
    }));
    return (<div class={"flex items-center gap-4 text-gray-300"}>
      <label for="sort" class="hidden sm:block w-full text-sm text-gray-300">
        Ordenar por
      </label>
      <select name="sort" class="!appearance-none focus:outline-none select w-full max-w-sm text-orange-300 rounded-lg border border-orange-300" hx-on:change={useScript(() => {
            const select = event!.currentTarget as HTMLSelectElement;
            window.location.href = select.value;
        })}>
        {options.map(({ value, label }) => (<option label={labels[label] ?? label} value={value} selected={value === current}>
            {label}
          </option>))}
      </select>
    </div>);
}
export default Sort;
