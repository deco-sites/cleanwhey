import { useUser } from "apps/vtex/hooks/useUser.ts";
import Icon from "../ui/Icon.tsx";

export default function WishlistClick() {
  const { user } = useUser();
  const isUserLoggedIn = Boolean(user.value?.email || user.value?.givenName);

  return (
    <>
      {/* {isUserLoggedIn && ( */}
      <a
        class="p-1 hover:!bg-transparent text-white btn btn-sm font-normal btn-ghost no-animation"
        href={"/wishlist"}
      >
        <Icon id="wishlist_button" class="h-8 w-8" />
      </a>
      {/* )} */}
      {
        /* {!isUserLoggedIn && (
        <a
          class="p-1 hover:!bg-transparent text-white btn btn-sm font-normal btn-ghost no-animation"
          hx-on:click={"window.alert(`Por favor, faça login para adicionar a sua Wishlist`)"}
        >
          <Icon id="wishlist_button" class="h-8 w-8" />
        </a>
      )} */
      }
    </>
  );
}
