import { useSection } from "deco/hooks/useSection.ts";
import { JSX } from "preact";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /** @description Section title */
  title?: HTMLWidget;
  /** @description ativar seção em destaque */
  isFeatured?: boolean;
  icon?: ImageWidget;

  // /** @description See all link */
  // cta?: string;
}

function Header({ title, isFeatured, icon }: Props) {
  if (!title) {
    return null;
  }

  return (
    <div
      class={`flex justify-center items-center gap-2 px-5 sm:px-0`}
    >
      <span
        class={`${
          isFeatured ? "font-normal !text-white" : "font-semibold text-gray-300"
        } text-2xl text-center sm:text-2xl pt-3`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <img loading={"lazy"} src={icon} />
      {
        /* {cta && (
        <a class="text-sm font-medium text-primary" href={cta}>
          See all
        </a>
      )} */
      }
    </div>
  );
}

interface Tab {
  title: string;
}

function Tabbed(
  { tabs, current = 0, children }: {
    tabs: Tab[];
    /** @description Current tab index. Defaults to 0 */
    current?: number;
    children: JSX.Element;
  },
) {
  const id = useId();

  return (
    <>
      <div class="flex px-5 sm:px-0 gap-3">
        <div role="tablist" class="tabs gap-3">
          {tabs.map((tab, index) => (
            <button
              role="tab"
              class={clx(
                "tab tab-lg rounded-full",
                index === current
                  ? "tab-active bg-primary bg-opacity-15"
                  : "bg-base-200",
                "gap-2",
              )}
              hx-get={useSection({ props: { tabIndex: index } })}
              hx-swap="outerHTML"
              hx-target="closest section"
              hx-indicator={`#${id}`}
            >
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        <span
          id={id}
          class="[.htmx-request&]:inline hidden loading loading-spinner loading-xs"
        />
      </div>

      {children}
    </>
  );
}

function Container({ class: _class, ...props }: JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      class={clx(
        "container flex flex-col gap-4 w-full py-5 sm:pt-10",
        _class?.toString(),
      )}
    />
  );
}

function Section() {}

Section.Container = Container;
Section.Header = Header;
Section.Tabbed = Tabbed;

export default Section;
