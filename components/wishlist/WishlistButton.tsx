import { AnalyticsItem } from "apps/commerce/types.ts";
import { useScript } from "deco/hooks/useScript.ts";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useSendEvent } from "../../sdk/useSendEvent.ts";
import Icon from "../ui/Icon.tsx";

interface Props {
  variant?: "full" | "icon";
  item: AnalyticsItem;
}

const onLoad = (id: string, productID: string) =>
  window.STOREFRONT.WISHLIST.subscribe((sdk) => {
    const button = document.getElementById(id) as HTMLButtonElement;
    const inWishlist = sdk.inWishlist(productID);

    button.disabled = false;
    button.classList.remove("htmx-request");
    button.querySelector("svg")?.setAttribute(
      "fill",
      inWishlist ? "black" : "none",
    );

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
  } else {
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

  return (
    <>
      <button
        id={id}
        data-wishlist-button
        disabled
        {...addToWishlistEvent}
        aria-label="Add to wishlist"
        hx-on:click={useScript(onClick, productID, productGroupID)}
        class={clx(
          "btn no-animation",
          variant === "icon"
            ? "w-[44px] h-[44px] hover:bg-transparent btn-circle btn-ghost btn-sm border border-gray-100"
            : "btn-primary btn-outline gap-2 w-full",
        )}
      >
        <Icon
          id="favorite-new"
          class="[.htmx-request_&]:hidden text-transparent"
          fill="none"
        />
        {variant === "full" && (
          <span class="[.htmx-request_&]:hidden">Add to wishlist</span>
        )}
        <span class="[.htmx-request_&]:inline hidden loading loading-spinner" />
      </button>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad, id, productID) }}
      />
    </>
  );
}

export default WishlistButton;
