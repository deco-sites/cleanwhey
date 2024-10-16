import type { SKU } from "apps/vtex/utils/types.ts";
import { useId } from "../../sdk/useId.ts";
import { useComponent } from "../../sections/Component.tsx";
import Icon from "../../components/ui/Icon.tsx";

export interface Props {
  items: SKU[];
}

const Results = import.meta.resolve("./Results.tsx");

export default function Form({ items }: Props) {
  const slot = useId();
  return (
    <>
      <div class="flex flex-row gap-2 items-center justify-between">
        <div class="flex flex-col w-2/5">
          <span class="whitespace-nowrap flex gap-2 text-gray-300 text-sm font-normal">
            <Icon id="truck" size={24} stroke="0.01" />
            Calcular Frete:
          </span>
        </div>

        <form
          class="join w-full gap-2"
          hx-target={`#${slot}`}
          hx-swap="innerHTML"
          hx-sync="this:replace"
          hx-post={useComponent(Results, {
            items,
          })}
        >
          <input
            as="input"
            type="text"
            class="w-full input input-bordered border border-gray-200 rounded-lg"
            placeholder="Insira seu CEP"
            name="postalCode"
            maxLength={8}
            size={8}
          />
          <button
            type="submit"
            class="btn no-animation text-white rounded-lg bg-neutral"
          >
            <span class="[.htmx-request_&]:hidden inline">OK</span>
            <span class="[.htmx-request_&]:inline hidden loading loading-spinner loading-xs" />
          </button>
        </form>

        {/* Results Slot */}
      </div>

      <div id={slot} class={"mt-5"} />
    </>
  );
}
