import type { SiteNavigationElement } from "apps/commerce/types.ts";
import { useSignal } from "@preact/signals";
import Icon from "../components/ui/Icon.tsx";
// import { useScript } from "deco/hooks/useScript.ts";
export interface Props {
  navItems: SiteNavigationElement[];
}

function MenuItem({ item }: { item: SiteNavigationElement }) {
  const open = useSignal<null | number>(null); // Controla o índice do menu aberto
  const openSub = useSignal<null | number>(null); // Controla o índice do submenu aberto
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <p
      class={`py-[20px] pl-[30px] pr-[12px] tracking-[0.7px] text-base font-bold text-gray-300 flex-grow min-h-[40px] flex items-center justify-start`}
    >
      {item.name}
    </p>
  );

  return (
    <li class="last:border-b!">
      <div
        class={`flex justify-between items-center w-full border-b border-gray-100`}
        onClick={() => {
          if (hasChildren) open.value = open.value === null ? 1 : null; // Alterna o menu
        }}
      >
        {hasChildren ? title : (
          <a
            class="w-full inline-block text-base font-bold text-gray-300"
            href={item.url}
          >
            {title}
          </a>
        )}

        {hasChildren && (
          <button class="mr-4">
            <Icon
              class={"block text-orange-300"}
              id="chevron-right"
              height={24}
              width={24}
            />
          </button>
        )}

        {hasChildren && (
          <ul
            class={`${
              open.value ? "right-0 visible" : "right-[-100vw] invisible"
            } top-[140px] h-[calc(100%-138px)]
            transition-all ease-in-out duration-400 flex flex-col fixed w-full bg-[#fff] z-[99999] overflow-y-auto
          `}
          >
            <li class="w-full relative flex justify-start items-center h-[60px] border-b border-gray-100">
              <button class="absolute left-0 w-[46px] flex justify-center items-center" onClick={() => open.value = null}>
                <Icon
                  class={"block text-gray-400"}
                  id="chevron-right"
                  style={{ transform: "rotate(180deg)" }}
                  height={24}
                  width={24}
                />
              </button>
              <p class="w-full h-[60px] py-2 ml-10 flex justify-start items-center text-left">
                <span class="text-gray-400 text-base font-bold text-left tracking-[0.8px]">
                  {item.name}
                </span>
              </p>
            </li>
            <li>
              <a
                href={item.url}
                class="py-[20px] pl-[30px] pr-[12px] flex-grow min-h-[40px] flex items-center justify-start"
              >
                <p class="text-underline font-bold text-base text-gray-300">
                  Ver tudo
                </p>
              </a>
            </li>

            {item.children!.map((node, index) => {
              const hasSubChildren =
                Array.isArray(node.children) && node.children.length > 0;

              const subTitle = (
                <p
                  class={`py-[20px] pl-[30px] pr-[12px] tracking-[0.7px] text-base font-bold text-gray-300 flex-grow min-h-[40px] flex items-center justify-start`}
                >
                  {node.name}
                </p>
              );

              return (
                <li
                  key={index}
                  class="relative"
                  onClick={() => {
                    if (hasSubChildren) openSub.value = openSub.value === index ? null : index; // Alterna o submenu correspondente
                  }}
                >
                  {hasSubChildren ? (
                    subTitle
                  ) : (
                    <a
                      href={node.url}
                      class="py-[20px] pl-[30px] pr-[12px] flex-grow min-h-[40px] flex items-center justify-start text-gray-300 text-base font-bold"
                    >
                      <p class="text-gray-300 text-base font-bold">
                        {node.name}
                      </p>
                    </a>
                  )}

                  {hasSubChildren && (
                    <>
                      <button class="mr-4 absolute right-0 top-0 bottom-0">
                        <Icon
                          class={"block text-orange-300"}
                          id="chevron-right"
                          height={24}
                          width={24}
                        />
                      </button>
                      <ul
                        class={`${
                          openSub.value === index
                            ? "right-0 visible"
                            : "right-[-100vw] invisible"
                        } top-[140px] h-[calc(100%-138px)] transition-all ease-in-out duration-400 flex flex-col fixed w-full bg-[#fff] z-[999999] overflow-y-auto`}
                      >
                        <li class="w-full relative flex justify-start items-center h-[60px] border-b border-gray-100">
                          <button
                            class="absolute left-0 w-[46px] flex justify-center items-center"
                            onClick={() => openSub.value = null}
                          >
                            <Icon
                              class={"block text-gray-400"}
                              id="chevron-right"
                              style={{ transform: "rotate(180deg)" }}
                              height={24}
                              width={24}
                            />
                          </button>
                          <p
                            class="w-full h-[60px] py-2 ml-10 flex justify-start items-center text-left"
                          >
                            <span class="text-gray-300 text-base font-bold">
                              {node.name}
                            </span>
                          </p>
                        </li>
                        {node.children?.map((child, childIndex) => (
                          <li key={childIndex} class="pl-3">
                            <a
                              href={child.url}
                              class="py-[20px] pl-[30px] pr-[12px] tracking-[0.7px] text-base font-bold text-gray-300 flex-grow min-h-[40px] flex items-center justify-start"
                            >
                              <p class="text-gray-300 text-base font-bold">
                                {child.name}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </li>
  );
}




function Menu({ navItems }: Props) {
  return (
    <div class="w-full min-w-full" style={{ minWidth: "100vw" }}>
      <ul class="overflow-y-auto flex-grow flex flex-col">
        {navItems.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
