import { type JSX } from "preact";
import { clx } from "../../sdk/clx.ts";
import { useId } from "../../sdk/useId.ts";
import { useScript as useScript } from "@deco/deco/hooks";
const onClick = (delta: number) => {
  // doidera!
  event!.stopPropagation();
  const button = event!.currentTarget as HTMLButtonElement;
  const input = button.parentElement
    ?.querySelector<HTMLInputElement>('input[type="number"]')!;
  const min = Number(input.min) || -Infinity;
  const max = Number(input.max) || Infinity;
  input.value = `${Math.min(Math.max(input.valueAsNumber + delta, min), max)}`;
  input.dispatchEvent(new Event("change", { bubbles: true }));
};
function QuantitySelector(
  { id = useId(), disabled, ...props }: JSX.IntrinsicElements["input"],
) {
  return (
    <div class="h-7 join border border-gray-200 min-w-[120px] w-auto justify-between rounded-lg">
      <button
        type="button"
        class="btn h-auto min-h-full hover:bg-transparent  bg-gray-100 justify-center items-center"
        style={"border-radius: 8px 0px 0px 8px;"}
        hx-on:click={useScript(onClick, -1)}
        disabled={disabled}
      >
        <span>-</span>
      </button>
      <div
        data-tip={`Quantity must be between ${props.min} and ${props.max}`}
        class={clx(
          "join-item",
          "flex justify-center items-center",
          "has-[:invalid]:tooltip has-[:invalid]:tooltip-error has-[:invalid]:tooltip-open has-[:invalid]:tooltip-bottom",
        )}
      >
        <input
          id={id}
          class={clx(
            "input text-center h-auto p-0 [appearance:textfield]",
            "invalid:input-error",
          )}
          disabled={disabled}
          inputMode="numeric"
          type="number"
          {...props}
        />
      </div>
      <button
        type="button"
        class="btn h-auto min-h-full hover:bg-transparent bg-gray-100 justify-center items-center"
        style={"border-radius: 0px 8px 8px 0px;"}
        hx-on:click={useScript(onClick, 1)}
        disabled={disabled}
      >
        <span>+</span>
      </button>
    </div>
  );
}
export default QuantitySelector;
