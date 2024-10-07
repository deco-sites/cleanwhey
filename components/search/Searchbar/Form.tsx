/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */
import { Suggestion } from "apps/commerce/types.ts";
import {
  SEARCHBAR_INPUT_FORM_ID,
  SEARCHBAR_POPUP_ID,
} from "../../../constants.ts";
import { useId } from "../../../sdk/useId.ts";
import { useComponent } from "../../../sections/Component.tsx";
import Icon from "../../ui/Icon.tsx";
import { Props as SuggestionProps } from "./Suggestions.tsx";
import { Pix } from "../../../loaders/BusnissRule/Pix.ts";
import { useScript as useScript } from "@deco/deco/hooks";
import { asResolved as asResolved } from "@deco/deco";
import { type Resolved } from "@deco/deco";
import { addRecentSearch } from "../../../sdk/searchHistory.tsx";
// When user clicks on the search button, navigate it to
export const ACTION = "/s";
// Querystring param used when navigating the user
export const NAME = "q";
export interface SearchbarProps {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /** @description Loader to run when suggesting new elements */
  loader: Resolved<Suggestion | null>;
  pix: Pix;
}
const script = (formId: string, name: string, popupId: string) => {
  const form = document.getElementById(formId) as HTMLFormElement | null;
  const input = form?.elements.namedItem(name) as HTMLInputElement | null;
  form?.addEventListener("submit", () => {
    const search_term = input?.value;
    if (search_term) {
      window.DECO.events.dispatch({
        name: "search",
        params: { search_term },
      });
    }
  });
  // Keyboard event listeners
  addEventListener("keydown", (e: KeyboardEvent) => {
    const isK = e.key === "k" || e.key === "K" || e.keyCode === 75;
    // Open Searchbar on meta+k
    if (e.metaKey === true && isK) {
      const input = document.getElementById(popupId) as HTMLInputElement | null;
      if (input) {
        input.checked = true;
        document.getElementById(formId)?.focus();
      }
    }
  });
};
const Suggestions = import.meta.resolve("./Suggestions.tsx");
export default function Searchbar({
  placeholder = "What are you looking for?",
  loader,
}: SearchbarProps) {
  const slot = useId();

  return (
    <div
      class="w-full max-w-[675px] grid relative"
      style={{ gridTemplateRows: "min-content auto" }}
    >
      <form
        id={SEARCHBAR_INPUT_FORM_ID}
        action={ACTION}
        class="join rounded-lg"
      >
        <input
          id="search"
          autoFocus
          tabIndex={0}
          class="input input-bordered join-item flex-grow outline-none focus:outline-none border-0"
          name={NAME}
          placeholder={placeholder}
          autocomplete="off"
          hx-target={`#${slot}`}
          hx-post={
            loader &&
            useComponent<SuggestionProps>(Suggestions, {
              loader: asResolved(loader),
            })
          }
          hx-trigger={`click, input changed delay:300ms, ${NAME}`}
          hx-indicator={`#${SEARCHBAR_INPUT_FORM_ID}`}
          hx-swap="innerHTML"
        />

        <button
          type="submit"
          class="btn join-item btn-square no-animation border-0"
          onClick={() => takeValue()}
          aria-label="Search"
          for={SEARCHBAR_INPUT_FORM_ID}
          tabIndex={-1}
        >
          <span class="loading loading-spinner loading-xs hidden [.htmx-request_&]:inline" />
          <Icon
            id="search"
            class="inline [.htmx-request_&]:hidden max-h-4 max-w-4"
          />
        </button>
      </form>

      {/* Suggestions slot */}
      <div
        class="absolute left-0 top-[110%] w-full bg-white rounded-lg z-10"
        id={slot}
      />

      {/* Send search events as the user types */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: useScript(
            script,
            SEARCHBAR_INPUT_FORM_ID,
            NAME,
            SEARCHBAR_POPUP_ID
          ),
        }}
      />
    </div>
  );
}
