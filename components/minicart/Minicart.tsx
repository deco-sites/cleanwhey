import { AppContext } from "../../apps/site.ts";
import { MINICART_DRAWER_ID, MINICART_FORM_ID } from "../../constants.ts";
import { clx } from "../../sdk/clx.ts";
import { formatPrice } from "../../sdk/format.ts";
import { useComponent } from "../../sections/Component.tsx";
//import Coupon from "./Coupon.tsx";
//import FreeShippingProgressBar from "./FreeShippingProgressBar.tsx";
import CartItem, { Item } from "./Item.tsx";
import { useScript as useScript } from "@deco/deco/hooks";
export interface Minicart {
  /** Cart from the ecommerce platform */
  platformCart: Record<string, unknown>;
  /** Cart from storefront. This can be changed at your will */
  storefront: {
    items: Item[];
    total: number;
    subtotal: number;
    discounts: number;
    coupon?: string;
    locale: string;
    currency: string;
    enableCoupon?: boolean;
    freeShippingTarget: number;
    checkoutHref: string;
  };
}
const onLoad = (formID: string) => {
  console.log("carregou")
  const form = document.getElementById(formID) as HTMLFormElement;
  window.STOREFRONT.CART.dispatch(form);
  // view_cart event
  if (typeof IntersectionObserver !== "undefined") {
    new IntersectionObserver((items, observer) => {
      for (const item of items) {
        if (item.isIntersecting && item.target === form) {
          window.DECO.events.dispatch({
            name: "view_cart",
            params: window.STOREFRONT.CART.getCart(),
          });
          observer?.unobserve(item.target);
        }
      }
    }).observe(form);
  }
  // Disable form interactivity while cart is being submitted
  document.body.addEventListener(
    "htmx:before-send", // deno-lint-ignore no-explicit-any
    ({ detail: { elt } }: any) => {
      if (elt !== form) {
        return;
      }
      // Disable addToCart button interactivity
      document.querySelectorAll("div[data-cart-item]").forEach((container) => {
        container
          ?.querySelectorAll("button")
          .forEach((node) => (node.disabled = true));
        container
          ?.querySelectorAll("input")
          .forEach((node) => (node.disabled = true));
      });
    }
  );
};
const sendBeginCheckoutEvent = () => {
  window.DECO.events.dispatch({
    name: "being_checkout",
    params: window.STOREFRONT.CART.getCart(),
  });
};
const onClick = () => {
  const miniDrawer = document.getElementById(
    "minicart-drawer"
  ) as HTMLInputElement | null;
  if (miniDrawer) {
    miniDrawer.checked = false;
  }
};
export const action = async (_props: unknown, req: Request, ctx: AppContext) =>
  req.method === "PATCH"
    ? { cart: await ctx.invoke("site/loaders/minicart.ts") } // error fallback
    : { cart: await ctx.invoke("site/actions/minicart/submit.ts") };
export function ErrorFallback() {
  return (
    <div class="flex flex-col flex-grow justify-center items-center overflow-hidden w-full gap-2">
      <div class="flex flex-col gap-1 p-6 justify-center items-center">
        <span class="font-semibold">Error while updating cart</span>
        <span class="text-sm text-center">
          Click in the button below to retry or refresh the page
        </span>
      </div>

      <button
        class="btn btn-primary"
        hx-patch={useComponent(import.meta.url)}
        hx-swap="outerHTML"
        hx-target="closest div"
      >
        Retry
      </button>
    </div>
  );
}
export default function Cart({
  cart: {
    platformCart,
    storefront: {
      items,
      total,
      // subtotal,
      coupon,
      discounts,
      locale,
      currency,
      // enableCoupon = true,
      // freeShippingTarget,
      checkoutHref,
    },
  },
}: {
  cart: Minicart;
}) {
  const count = items.length;
  return (
    <>
      <form
        class="contents"
        id={MINICART_FORM_ID}
        hx-sync="this:replace"
        hx-trigger="submit, change delay:300ms"
        hx-target="this"
        hx-indicator="this"
        hx-disabled-elt="this"
        hx-post={useComponent(import.meta.url)}
        hx-swap="outerHTML"
      >
        {/* Button to submit the form */}
        <button hidden autofocus />

        {/* Add to cart controllers */}
        <input name="add-to-cart" type="hidden" />
        <button hidden name="action" value="add-to-cart" />

        <input name="add-to-attachment" type="hidden" value={"1 month"} />
        <button hidden name="action" value="add-to-attachment" />

        {/* This contains the STOREFRONT cart. */}
        <input
          type="hidden"
          name="storefront-cart"
          value={encodeURIComponent(
            JSON.stringify({ coupon, currency, value: total, items })
          )}
        />

        {/* This contains the platformCart cart from the commerce platform. Integrations usually use this value, like GTM, pixels etc */}
        <input
          type="hidden"
          name="platform-cart"
          value={encodeURIComponent(JSON.stringify(platformCart))}
        />

        <div
          class={clx(
            "flex flex-col flex-grow justify-start items-center overflow-hidden w-full ",
            "[.htmx-request_&]:pointer-events-none [.htmx-request_&]:opacity-60 [.htmx-request_&]:cursor-wait transition-opacity duration-300"
          )}
        >
          {count === 0 ? (
            <div class="flex flex-col gap-6">
              <span class="font-medium text-2xl">Sua sacola está vazia</span>
              <label
                for={MINICART_DRAWER_ID}
                class="btn btn-outline no-animation"
              >
                Escolher produtos
              </label>
            </div>
          ) : (
            <div class="w-full h-full flex justify-between flex-col ">
              <ul
                role="list"
                class="mt-6 px-2 flex-grow overflow-y-auto flex flex-col gap-6 w-full overflow-scroll pb-[290px] overflow-x-hidden"
              >
                {items.map((item, index) => (
                  <li class="border-b border-gray-100 pb-4">
                    <CartItem
                      item={item}
                      index={index}
                      locale={locale}
                      currency={currency}
                    />
                  </li>
                ))}
              </ul>

              {/* Cart Footer */}
              <footer class="w-full border-t border-gray-200 bg-white absolute bottom-0">
                {/* Subtotal */}
                <div class="border-t border-base-200 py-2 flex flex-col">
                  {discounts > 0 && (
                    <div class="flex justify-between items-center px-4">
                      <span class="text-sm">Descontos</span>
                      <span class="text-sm">
                        {formatPrice(discounts, currency, locale)}
                      </span>
                    </div>
                  )}
                  {/* <div class="w-full flex justify-between px-4 text-sm">
                <span>Subtotal</span>
                <output form={MINICART_FORM_ID}>
                  {formatPrice(subtotal, currency, locale)}
                </output>
              </div> */}
                  {/* {enableCoupon && <Coupon coupon={coupon} />} */}
                </div>

                {/* Total */}
                <div class="border-b border-gray-100 pt-4 pb-4 flex flex-col justify-end items-end gap-2 mx-4">
                  <div class="flex justify-between items-center w-full">
                    <span class="text-base text-[#808184] font-normal">
                      Total
                    </span>
                    <output
                      form={MINICART_FORM_ID}
                      class="text-base text-gray-400 font-bold"
                    >
                      {formatPrice(total, currency, locale)}
                    </output>
                  </div>
                  {/* <span class="text-sm text-base-300">
                Taxas e fretes serão calculados no checkout
              </span> */}
                </div>

                <div class="p-4">
                  <a
                    class="btn w-full hover:bg-primary hover:border-bg-300 no-animation bg-primary rounded-lg"
                    href={checkoutHref}
                    hx-on:click={useScript(sendBeginCheckoutEvent)}
                  >
                    <span class="[.htmx-request_&]:hidden text-white text-base font-bold">
                      Ir para o pagamento
                    </span>
                    <span class="[.htmx-request_&]:inline hidden loading loading-spinner" />
                  </a>
                  <a
                    class="text-center mt-3 block text-orange-300 font-bold text-base py-4"
                    href="javascript:void(0)"
                    hx-on:click={useScript(onClick)}
                  >
                    Continuar comprando
                  </a>
                </div>
              </footer>
            </div>
          )}
        </div>
      </form>
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(onLoad, MINICART_FORM_ID),
        }}
      />
    </>
  );
}
