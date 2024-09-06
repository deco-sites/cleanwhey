import { useUser } from "apps/vtex/hooks/useUser.ts";
import Icon from "../ui/Icon.tsx";
import { useScript } from "deco/hooks/useScript.ts";

export default function WishlistClick() {
    const { user } = useUser();
    const isUserLoggedIn = Boolean(user.value?.email)

    const onClick = () => {
        if (!isUserLoggedIn) {
          window.alert(`Por favor, faça login para adicionar a sua Wishlist`);
        }
      };

    return (
        <>
            {isUserLoggedIn && (
              <a
              class="p-1 hover:!bg-transparent text-white btn btn-sm font-normal btn-ghost no-animation"
              href={"/wishlist"}
            >
              <Icon id="wishlist_button" class="h-8 w-8" />
            </a>
            )}
            {!isUserLoggedIn && (
              <a
              class="p-1 hover:!bg-transparent text-white btn btn-sm font-normal btn-ghost no-animation"
              hx-on:click={useScript(onClick)}
              >
                <Icon id="wishlist_button" class="h-8 w-8" />
              </a>
            )}
        </>
    )
}