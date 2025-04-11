import type { BreadcrumbList } from "apps/commerce/types.ts";
import { relative } from "../../sdk/url.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [{ name: "Home", item: "/" }, ...itemListElement];

  return (
    <div class="breadcrumbs py-0 text-xs font-normal text-base-300 phone:px-2 desktop-sm:px-0">
      <ul>
        {items
          .filter(({ name, item }) => name && item)
          .map(({ name, item }, index) => (
            <li>
              <a
                class={`
              ${index === items.length - 1 ? "text-orange-300  font-bold" : ""}
              text-sm text-gray-300
              `}
                href={relative(item)}
              >
                {name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
