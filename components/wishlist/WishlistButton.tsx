import { AnalyticsItem } from "apps/commerce/types.ts";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";
import { useScript as useScript } from "@deco/deco/hooks";
// import Icon from "../ui/Icon.tsx";
interface Props {
    variant?: "full" | "icon";
    item: AnalyticsItem;
}
const onLoad = (id: string, productID: string) => window.STOREFRONT.WISHLIST.subscribe((sdk) => {
    const button = document.getElementById(id) as HTMLButtonElement;
    const inWishlist = sdk.inWishlist(productID);
    button.disabled = false;
    button.classList.remove("htmx-request");
    button.querySelector("svg")?.setAttribute("fill", inWishlist ? "black" : "none");
    const span = button.querySelector("span");
    if (span) {
        span.innerHTML = inWishlist ? "Remove from wishlist" : "Add to wishlist";
    }
});
const onClick = (productID: string, productGroupID: string) => {
    const button = event?.currentTarget as HTMLButtonElement;
    const user = window.STOREFRONT.USER.getUser();
    if (user?.email) {
        button.classList.add("htmx-request");
        window.STOREFRONT.WISHLIST.toggle(productID, productGroupID);
    }
    else {
        window.alert(`Por favor, faça login para adicionar a sua Wishlist`);
    }
};
function WishlistButton({ item, variant = "full" }: Props) {
    // deno-lint-ignore no-explicit-any
    const productID = (item as any).item_id;
    const productGroupID = item.item_group_id ?? "";
    const id = useId();
    const addToWishlistEvent = useSendEvent({
        on: "click",
        event: {
            name: "add_to_wishlist",
            params: { items: [item] },
        },
    });
    return (<>
      <button id={id} data-wishlist-button disabled {...addToWishlistEvent} aria-label="Add to wishlist" hx-on:click={useScript(onClick, productID, productGroupID)} class={clx("btn no-animation", variant === "icon"
            ? "w-[44px] h-[44px] hover:bg-transparent btn-circle btn-ghost btn-sm border border-gray-100"
            : "btn-primary btn-outline gap-2 w-full")}>
        <svg class="[.htmx-request_&]:hidden text-transparent" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.42 4.58C19.9183 4.07658 19.3222 3.67714 18.6658 3.40459C18.0095 3.13204 17.3057 2.99174 16.595 2.99174C15.8843 2.99174 15.1806 3.13204 14.5242 3.40459C13.8678 3.67714 13.2717 4.07658 12.77 4.58L12 5.36L11.23 4.58C10.7283 4.07658 10.1322 3.67714 9.47585 3.40459C8.81947 3.13204 8.11574 2.99174 7.40503 2.99174C6.69431 2.99174 5.99058 3.13204 5.3342 3.40459C4.67783 3.67714 4.0817 4.07658 3.58003 4.58C1.46003 6.7 1.33003 10.28 4.00003 13L12 21L20 13C22.67 10.28 22.54 6.7 20.42 4.58Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {variant === "full" && (<span class="[.htmx-request_&]:hidden">Add to wishlist</span>)}
        <span class="[.htmx-request_&]:inline hidden loading loading-spinner"/>
      </button>
      <script type="module" dangerouslySetInnerHTML={{ __html: useScript(onLoad, id, productID) }}/>
    </>);
}
export default WishlistButton;
