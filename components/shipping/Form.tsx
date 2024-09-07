import type { SKU } from "apps/vtex/utils/types.ts";
import { useId } from "../../sdk/useId.ts";
import { useComponent } from "../../sections/Component.tsx";

export interface Props {
  items: SKU[];
}

export default function Form({ items }: Props) {
  const slot = useId();

  return (
    <>
      <div class="flex flex-row gap-2 items-center justify-between">
        <div class="flex flex-col w-2/5">
          <span class="whitespace-nowrap flex gap-2 text-gray-300 text-sm font-normal">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17h4V5H2v12h3m15 0h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5m0 8h1"
                stroke="#A1A6B7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m10 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                stroke="#A1A6B7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Calcular Frete:
          </span>
          {
            /* <span>
          Informe seu CEP para consultar os prazos de entrega
        </span> */
          }
        </div>

        <form
          class="join w-full gap-2"
          hx-target={`#${slot}`}
          hx-swap="innerHTML"
          hx-sync="this:replace"
          hx-post={useComponent(import.meta.resolve("./Results.tsx"), {
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
            class="btn no-animation text-white rounded-lg bg-blue-300"
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
