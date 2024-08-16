// import Icon from "deco-sites/aviator/components/ui/Icon.tsx";
// import Text from "deco-sites/aviator/components/ui/Text.tsx";
// import Button from "deco-sites/aviator/components/ui/Button.tsx";
// import { useSignal } from "@preact/signals";
// import { useUI } from "deco-sites/aviator/sdk/useUI.ts";
// import { useScroll } from "deco-sites/aviator/sdk/useScroll.ts";
// import type { INavItem } from "./NavItem.tsx";
// import { useUser } from "deco-sites/std/packs/vtex/hooks/useUser.ts";

// export interface Props {
//   items: INavItem[];
// }

// function MenuItem(
//   { item, level = 0, scrollPosition }: {
//     item: INavItem;
//     level?: number;
//     scrollPosition?: number;
//   },
// ) {
//   const open = useSignal(false);
//   const hasChildren = Array.isArray(item.children) && item.children.length > 0;

//   const title = (
//     <p
//       class={`py-[20px] pl-[30px] pr-[12px] tracking-[0.7px] flex-grow min-h-[40px] flex items-center justify-start font-semibold ${
//         item.isRed ? "text-[#DB1616]" : "text-[#252526]"
//       }  text-[14px]`}
//     >
//       {item.label}
//     </p>
//   );

//   return (
//     <li class="last:border-b!">
//       <div
//         class={`flex justify-between items-center w-full ${
//           level > 0 ? "pl-4" : ""
//         }`}
//         onClick={() => {
//           if (item.children.length > 0) open.value = !open.value;
//         }}
//       >
//         {hasChildren
//           ? title
//           : <a class="w-full inline-block" href={item.href}>{title}</a>}

//         {hasChildren && level == 0 && (
//           <Button class="relative left-[-30px]" variant="icon">
//             <Icon
//               class={"block"}
//               id="ChevronRight"
//               height={15}
//               width={15}
//               strokeWidth={1.5}
//             />
//           </Button>
//         )}
//       </div>

//       {hasChildren && (
//         <ul
//           class={`${open.value ? "right-0" : "right-[-100vw]"} ${
//             scrollPosition! > 0
//               ? "top-[49px] h-[calc(100%-49px-52px)]"
//               : "top-[59px] h-[calc(100%-59px-52px)]"
//           } transition-all ease-in-out duration-400 flex flex-col fixed w-full bg-[#fff] z-[999999] divide-y divide-default overflow-y-auto`}
//         >
//           <li
//             class="w-full relative flex justify-center items-center bg-[#f0f1f2] h-[60px]"
//             onClick={() => {
//               if (hasChildren) open.value = !open.value;
//             }}
//           >
//             <Button
//               class="absolute left-0 w-[46px] flex justify-center items-center"
//               variant="icon"
//             >
//               <Icon
//                 class={"block"}
//                 id="ChevronLeft"
//                 height={15}
//                 width={15}
//                 strokeWidth={1.5}
//               />
//             </Button>
//             <p
//               href={item.href}
//               class="w-full h-[60px] py-2 flex justify-center items-center text-center"
//             >
//               <span class="text-[#252526] text-[14px] font-bold text-center tracking-[0.8px]">
//                 {item.label}
//               </span>
//             </p>
//           </li>
//           <li>
//             <a
//               href={item.href}
//               class="py-[20px] pl-[30px] pr-[12px] flex-grow min-h-[40px] flex items-center justify-start text-[#252526] text-[14px]"
//             >
//               <p class="text-[#252526] text-[14px] text-underline font-bold">
//                 Ver tudo
//               </p>
//             </a>
//           </li>
//           {item.children!.map((node) => (
//             <>
//               <li>
//                 <a
//                   href={node.href}
//                   class="py-[20px] pl-[30px] pr-[12px] flex-grow min-h-[40px] flex items-center justify-start text-[#252526] text-[14px]"
//                 >
//                   <p class="text-[#252526] text-[14px]">
//                     {node.label}
//                   </p>
//                 </a>
//               </li>
//               {node.children!.map((child) => {
//                 if (child.label != "Ver tudo") {
//                   return (
//                     <li>
//                       <a
//                         href={child.href}
//                         class="py-[20px] pl-[30px] pr-[12px] flex-grow min-h-[40px] flex items-center justify-start text-[#252526] text-[14px]"
//                       >
//                         <p class="text-[#252526] text-[14px]">
//                           {child.label}
//                         </p>
//                       </a>
//                     </li>
//                   );
//                 }
//               })}
//             </>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// }

// function Menu({ items }: Props) {
//   const { displayMenu, vtexIdScriptsLoaded } = useUI();
//   const scroll = useScroll();
//   const { user } = useUser();

//   return (
//     <>
//       <ul class="overflow-y-auto flex-grow flex flex-col divide-y divide-default first:shadowFirstMenuItem">
//         {items.map((item) => (
//           <MenuItem item={item} scrollPosition={scroll.value} />
//         ))}
//       </ul>

//     </>
//   );
// }
