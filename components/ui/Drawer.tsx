import { type ComponentChildren } from "preact";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import Icon from "./Icon.tsx";
import { useScript as useScript } from "@deco/deco/hooks";
import SignIn from "../header/SignIn.tsx";
export interface Props {
  open?: boolean;
  class?: string;
  children?: ComponentChildren;
  aside: ComponentChildren;
  id?: string;
}
const script = (id: string) => {
  const handler = (e: KeyboardEvent) => {
    if (e.key !== "Escape" && e.keyCode !== 27) {
      return;
    }
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (!input) {
      return;
    }
    input.checked = false;
  };
  addEventListener("keydown", handler);
};
function Drawer({
  children,
  aside,
  open,
  class: _class = "",
  id = useId(),
}: Props) {
  return (
    <>
      <div class={clx("drawer", _class)}>
        <input
          id={id}
          name={id}
          checked={open}
          type="checkbox"
          class="drawer-toggle"
          aria-label={open ? "open drawer" : "closed drawer"}
        />

        <div class="drawer-content">{children}</div>

        <aside
          data-aside
          class={clx(
            "drawer-side h-full z-40 overflow-hidden",
            "[[data-aside]&_section]:contents"
          )}
        >
          <label for={id} class="drawer-overlay" />
          {aside}
        </aside>
      </div>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(script, id) }}
      />
    </>
  );
}
function Aside({
  title,
  drawer,
  children,
}: {
  title: string;
  drawer: string;
  children: ComponentChildren;
}) {
  return (
    <div
      data-aside
      class="bg-base-100 grid grid-rows-[auto_1fr] h-full"
      style={{ maxWidth: "100vw" }}
    >
      <div class={`${drawer == "sidemenu-drawer" ? "background-primary" : ""}`}>
        <div class="flex justify-between items-center">
          <h1 class="px-4 py-3">
            <span class="font-medium text-xl flex items-center gap-2 text-orange-300">
              {drawer == "minicart-drawer" && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18"
                    stroke="#E06741"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 10a4 4 0 1 1-8 0"
                    stroke="#E06741"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {drawer == "sidemenu-drawer" && (
                <img src={`/image/logo-drawer.png`} loading={"lazy"} />
              )}
              {drawer != "sidemenu-drawer" && <>{title}</>}
            </span>
          </h1>
          <label for={drawer} aria-label="X" class="btn btn-ghost text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6 6 18M6 6l12 12"
                stroke={`${
                  drawer == "sidemenu-drawer" ? "#ffffff" : "#464B59"
                }`}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </div>
        {drawer == "sidemenu-drawer" && (
          <div class="flex justify-between items-center">
            <a
              class="p-4 h-auto text-white hover:!bg-transparent btn btn-sm font-normal btn-ghost no-animation gap-2 flex items-center"
              href="/faq"
            >
              <Icon id="duvidas" class="h-8 w-8" />
              <p>
                Dúvidas
                <br />
                Frequentes
              </p>
            </a>
            <div class="flex flex-row justify-center self-center items-center snap-center">
              <SignIn variant="mobile" />

              <a
                class="p-4 hoverflex flex-col h-full overflow-y-auto:!bg-transparent text-white btn btn-sm font-normal btn-ghost no-animation"
                href="/wishlist"
              >
                <Icon id="wishlist_button" class="h-8 w-8" />
              </a>
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
Drawer.Aside = Aside;
export default Drawer;
