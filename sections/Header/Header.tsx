import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import Alert, { alert } from "../../components/header/Alert.tsx";
import Bag from "../../components/header/Bag.tsx";
// import { useUser } from "apps/vtex/hooks/useUser.ts";
import NavItem from "../../components/header/NavItem.tsx";
import SignIn from "../../components/header/SignIn.tsx";
import Searchbar, { type SearchbarProps } from "../../components/search/Searchbar/Form.tsx";
import Drawer from "../../components/ui/Drawer.tsx";
import Icon from "../../components/ui/Icon.tsx";
// import Modal from "../../components/ui/Modal.tsx";
import { type SectionProps as SectionProps } from "@deco/deco";

import {
  HEADER_HEIGHT_DESKTOP,
  HEADER_HEIGHT_MOBILE,
  NAVBAR_HEIGHT_MOBILE,
  // SEARCHBAR_DRAWER_ID,
  // SEARCHBAR_POPUP_ID,
  SIDEMENU_CONTAINER_ID,
  SIDEMENU_DRAWER_ID,
} from "../../constants.ts";
import Menu from "../../islands/Menu.tsx";
// import { useScript } from "deco/hooks/useScript.ts";
import WishlistClick from "../../components/header/WishlistClick.tsx";
import {
  useDevice as useDevice,
  useSection as useSection,
} from "@deco/deco/hooks";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface Props {
  alerts?: alert[];
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;
  /**
   * @title Searchbar
   * @description Searchbar configuration
   */
  searchbar: SearchbarProps;
  /** @title Logo */
  logo: Logo;
  /** @hide true */
  variant?: "initial" | "menu";
}
// type Props = Omit<SectionProps, "alert" | "variant">;

const Desktop = (props: SectionProps<typeof loader>) => {
  const { navItems, logo, searchbar } = props;
  const newUrl = new URL(props.url);
  return (
    <>
      <div class="flex flex-col gap-4 pt-5">
        <div class="container flex justify-between items-center px-2 desktop-sm:px-0 gap-4 max-w-[1216px] mx-auto">
          <div class="place-self-start">
            <a href="/" aria-label="Store logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 100}
                height={logo.height || 23}
                class="min-w-[130px] h-auto"
              />
            </a>
          </div>

          <Searchbar {...searchbar} />

          <div class="flex gap-4">
            <a
              class="text-white hover:!bg-transparent btn btn-sm font-normal btn-ghost no-animation gap-2 flex items-center"
              href={newUrl.pathname != "/" ? "/faq" : "#1840087127-0"}
            >
              <Icon id="duvidas" class="h-8 w-8" />
              <p>
                Dúvidas
                <br />
                Frequentes
              </p>
            </a>

            <WishlistClick />

            <SignIn variant="desktop" />
            <Bag />
          </div>
        </div>

        <div class="flex justify-between items-center text-base bg-accent px-2 desktop-sm:px-0">
          <div className="container max-w-[1216px] mx-auto">
            <ul class="flex justify-between">
              {navItems?.slice(0, 8).map((item) => <NavItem item={item} />)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const Mobile = ({ logo, searchbar }: Props) => {
  // const { user } = useUser();
  return (
    <>
      <Drawer
        id={SIDEMENU_DRAWER_ID}
        aside={
          <Drawer.Aside title="Menu" drawer={SIDEMENU_DRAWER_ID}>
            <div
              id={SIDEMENU_CONTAINER_ID}
              class="h-full flex items-center justify-center"
              style={{ minWidth: "100vw" }}
            >
              <span class="loading loading-spinner" />
            </div>
          </Drawer.Aside>
        }
      />

      <div
        class="grid place-items-start items-center w-screen px-5 pt-4 pb-3 gap-4"
        style={{
          gridTemplateColumns: "auto min-content min-content",
        }}
      >
        <div class={"flex-grow inline-flex items-center justify-center gap-3"}>
          <label
            for={SIDEMENU_DRAWER_ID}
            class="btn btn-square btn-sm btn-ghost"
            aria-label="open menu"
            hx-target={`#${SIDEMENU_CONTAINER_ID}`}
            hx-swap="outerHTML"
            hx-trigger="click once"
            hx-get={useSection({ props: { variant: "menu" } })}
          >
            <Icon id="menu" class="text-white h-8 w-8" />
          </label>

          {logo && (
            <a
              href="/"
              class="flex-grow inline-flex items-center justify-center"
              style={{ minHeight: NAVBAR_HEIGHT_MOBILE }}
              aria-label="Store logo"
            >
              <Image src={logo.src} alt={logo.alt} width={96} height={48} />
            </a>
          )}
        </div>

        <SignIn variant="mobile" />

        <Bag />
      </div>
      <div className="container px-5 pb-5">
        <Searchbar {...searchbar} />
      </div>
    </>
  );
};
function Header(props: SectionProps<typeof loader>) {
  const device = useDevice();
  const {
    alerts = [],
    logo = {
      src:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
      width: 100,
      height: 16,
      alt: "Logo",
    },
  } = props;
  // const user = useUser();
  return (
    <header
      style={{
        height: device === "desktop"
          ? HEADER_HEIGHT_DESKTOP
          : HEADER_HEIGHT_MOBILE,
      }}
    >
      <div class="fixed w-full z-40 bg-primary">
        {alerts.length > 0 && <Alert alerts={alerts} />}
        {device === "desktop" ? <Desktop {...props} /> : <Mobile {...props} />}
      </div>
    </header>
  );
}
export const loader = (props: Props, req: Request) => {
  return {
    ...props,
    url: req.url,
  };
};
export default function Section({ ...props }: SectionProps<typeof loader>) {
  if (props.variant === "menu") {
    return <Menu navItems={props.navItems ?? []} />;
  }
  return <Header {...props} />;
}
