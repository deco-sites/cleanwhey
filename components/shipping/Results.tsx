/**
 * TODO: support other platforms. Currently only for VTEX
 */
import { AppContext } from "apps/vtex/mod.ts";
import type { SimulationOrderForm, SKU, Sla } from "apps/vtex/utils/types.ts";
import { formatPrice } from "../../sdk/format.ts";
import { ComponentProps } from "../../sections/Component.tsx";
import Icon from "../../components/ui/Icon.tsx";

export interface Props {
  items: SKU[];
}

const formatShippingEstimate = (estimate: string) => {
  const [, time, type] = estimate.split(/(\d+)/);

  if (type === "bd") return `${time} Dias`;
  if (type === "d") return `${time} Dias`;
  if (type === "h") return `${time} horas`;
};

export async function action(props: Props, req: Request, ctx: AppContext) {
  const form = await req.formData();

  try {
    const result = await ctx.invoke("vtex/actions/cart/simulation.ts", {
      items: props.items,
      postalCode: `${form.get("postalCode") ?? ""}`,
      country: "BRA",
    }) as SimulationOrderForm | null;
    //console.log(result);
    return { result };
  } catch {
    return { result: null };
  }
}

export default function Results({ result }: ComponentProps<typeof action>) {
  const methods =
    result?.logisticsInfo?.reduce(
      (initial, { slas }) => [...initial, ...slas],
      [] as Sla[]
    ) ?? [];

  if (!methods.length) {
    return (
      <div class="p-2">
        <span>CEP inválido</span>
      </div>
    );
  }

  return (
    <ul class="flex flex-col gap-4 p-4 border border-base-300 rounded">
      <span> Opções de frete para o CEP</span> <span> X</span>
      {result !== null && <span>{result.postalCode}</span> }
      {methods.map((method) => (
        <li class="flex justify-between items-center border-base-200 not-first-child:border-t text-[#A1A6B7] border-b">
          <Icon id="truck" size={24} stroke="0.01" />

          <span class="text-button w-1/4 text-start">{method.name}:</span>
          <span class="text-button text-[#A1A6B7] w-1/4">
            {formatShippingEstimate(method.shippingEstimate)}
          </span>
          <span class="text-base font-semibold text-right w-1/4">
            {method.price === 0
              ? "Grátis"
              : formatPrice(method.price / 100, "BRL", "pt-BR")}
          </span>
        </li>
      ))}
    </ul>
  );
}
