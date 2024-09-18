import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import Icon from "../ui/Icon.tsx";
import { useScript as useScript } from "@deco/deco/hooks";
const onLoad = (containerID: string) => {
  window.STOREFRONT.USER.subscribe((sdk) => {
    const container = document.getElementById(containerID) as HTMLDivElement;
    const nodes = container.querySelectorAll<HTMLAnchorElement>("a");
    const login = nodes.item(0);
    const account = nodes.item(1);
    const user = sdk.getUser();
    if (user?.email) {
      login.classList.add("hidden");
      account.classList.remove("hidden");
    } else {
      login.classList.remove("hidden");
      account.classList.add("hidden");
    }
  });
};
function SignIn({ variant }: {
  variant: "mobile" | "desktop";
}) {
  const id = useId();
  return (
    <div id={id}>
      <a
        class={clx(
          "btn btn-sm hover:!bg-transparent font-normal btn-ghost no-animation text-white p-0",
          variant === "mobile" && "btn-square",
        )}
        href="/login-page"
        aria-label="Login"
      >
        <Icon id="account_circle" class="w-8 h-8" />
      </a>
      <a
        class={clx(
          "hidden",
          "btn btn-sm hover:!bg-transparent font-normal btn-ghost no-animation text-white p-0",
          variant === "mobile" && "btn-square",
        )}
        href="/login-page"
        aria-label="Account"
      >
        <Icon id="account_circle" class="w-8 h-8" />
      </a>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(onLoad, id) }}
      />
    </div>
  );
}
export default SignIn;
