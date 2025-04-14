import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import {
  HEADER_HEIGHT_DESKTOP,
  NAVBAR_HEIGHT_DESKTOP,
} from "../../constants.ts";
import Icon from "../ui/Icon.tsx";

function NavItem({ item }: { item: SiteNavigationElement }) {
  const { url, name, children } = item;
  const image = item?.image?.[0];

  return (
    <li
      class="group flex items-center justify-between pr-5"
      style={{ height: NAVBAR_HEIGHT_DESKTOP }}
    >
      <a
        href={url}
        class="group-hover:underline flex items-center gap-1 text-white  text-base font-bold"
      >
        {name}
        {children && children.length > 0 && (
          <Icon id="chevron-right" class={"rotate-90"} />
        )}
      </a>

      {children && children.length > 0 && (
        <div
          class="max-h-[375px] min-h-[375px] border-b-4 border-accent fixed hidden hover:flex group-hover:flex bg-base-100 z-40 items-center justify-between gap-6 border-t-2 w-full px-2"
          style={{
            top: "0px",
            left: "0px",
            marginTop: HEADER_HEIGHT_DESKTOP,
          }}
        >
          <div className="container flex items-center justify-between max-w-[1216px]">
            <ul class="flex relative flex-col items-start justify-center gap-2 min-w-[200px] border-r-gray-200 border-r pr-5">
              <li>
                <h2 class=" text-lg text-orange-300 font-bold">{name}</h2>
              </li>
              {children.map((node) => (
                <li class="p-0 group/lastmenu w-full">
                  <a
                    class="group-hover/lastmenu:text-orange-300 text-gray-300  text-base font-bold flex items-center justify-between"
                    href={node.url}
                  >
                    <span>{node.name}</span>
                    {node.children && node.children.length > 0 && (
                      <Icon id="arrow-right-custom" class="text-orange-300" />
                    )}
                  </a>
                  {node.children?.length! > 0 && (
                    <ul class=" border-r-gray-200 border-r after:absolute after:right-[90%] after:h-full after:bg-transparent after:w-1/2 min-w-[200px] px-5 h-full group-hover/lastmenu:flex hidden flex-col gap-1 pt-4 absolute top-0 left-full">
                      {node.children?.map((leaf) => (
                        <li class="p-0 group/finalmenu w-full">
                          <a
                            class="hover:underline group-hover/finalmenu:text-orange-300 text-gray-300 flex items-center justify-between"
                            href={leaf.url}
                          >
                            <span class="text-base text-gray-300 font-bold  uppercase">
                              {leaf.name}
                            </span>
                            {leaf.children && leaf.children.length > 0 && (
                              <Icon
                                id="arrow-right-custom"
                                class="text-orange-300"
                              />
                            )}
                          </a>

                          <ul class=" after:absolute after:right-[90%] after:h-full after:bg-transparent after:w-1/2 min-w-[200px] px-5 h-full group-hover/finalmenu:flex hidden flex-col gap-1 mt-4 absolute top-0 left-full">
                            {leaf.children?.map((final) => (
                              <li class="min-w-[200px]">
                                <a
                                  class="hover:underline min-w-[200px]"
                                  href={final.url}
                                >
                                  <span class="text-base text-gray-300 min-w-[200px] font-bold  uppercase">
                                    {final.name}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {image?.url && (
              <Image
                class="p-0"
                src={image.url}
                alt={image.alternateName}
                width={345}
                height={189}
                loading="lazy"
              />
            )}
          </div>
        </div>
      )}
    </li>
  );
}

export default NavItem;
