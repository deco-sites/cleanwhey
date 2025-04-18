import { MINICART_DRAWER_ID } from "../../constants.ts";
import { useId } from "../../sdk/useId.ts";
import Icon from "../ui/Icon.tsx";
import { useScript as useScript } from "@deco/deco/hooks";

function onViewCartEvent() {
  window.DECO.events.dispatch({
    name: 'view_cart',
    params: window.STOREFRONT.CART.getCart(),
  })
}

const onLoad = (id: string) =>
  window.STOREFRONT.CART.subscribe((sdk) => {
    const counter = document.getElementById(id);
    const count = sdk.getCart()?.items.length ?? 0;
    if (!counter) {
      return;
    }
    // Set minicart items count on header
    if (count === 0) {
      counter.classList.add("hidden");
    } else {
      counter.classList.remove("hidden");
    }
    counter.innerText = count > 9 ? "9+" : count.toString();
  });
function Bag() {
  const id = useId();
  return (
    <>
      <label
        class="indicator"
        for={MINICART_DRAWER_ID}
        aria-label="open cart"
        hx-on:click={useScript(onViewCartEvent)}
      >
        <span
          id={id}
          class="hidden indicator-item badge badge-neutral text-primary-content badge-sm font-normal"
        />

        <span class="text-white hover:!bg-transparent btn btn-square btn-sm btn-ghost no-animation">
          <Icon id="shopping_bag" class="w-8 h-8" />
        </span>
      </label>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad, id) }}
      />
    </>
  );
}
export default Bag;
