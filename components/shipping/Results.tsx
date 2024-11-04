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
    const result = (await ctx.invoke("vtex/actions/cart/simulation.ts", {
      items: props.items,
      postalCode: `${form.get("postalCode") ?? ""}`,
      country: "BRA",
    })) as SimulationOrderForm | null;
    //console.log(result);
    return { result };
  } catch {
    return { result: null };
  }
}

export default function Results({ result }: ComponentProps<typeof action>) {
  const methods = result?.logisticsInfo?.reduce(
    (initial, { slas }) => [...initial, ...slas],
    [] as Sla[],
  ) ?? [];

  if (!methods.length) {
    return (
      <div class="p-2">
        <span>CEP inválido</span>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4 px-4 lg:px-8 py-4 border rounded-lg border-[#AFAFC0]">
      <div class="text-sm text-[#A1A6B7] flex-col flex">
        <span>Opções de frete para o CEP</span>
        {result !== null && (
          <span class="font-semibold">{result.postalCode}</span>
        )}
      </div>
      {methods.map((method, index) => (
        <li
          key={index} // Adicione uma chave única para cada item
          className={`flex justify-between items-center text-[#A1A6B7] border-[#AFAFC0] pb-4 ${
            index !== methods.length - 1 ? "border-b" : "border-b-0"
          }`}
        >
          <Icon id="truck" size={24} stroke="0.01" />
          <span className="text-button w-1/4 text-start text-sm">
            {method.name}:
          </span>
          <span className="text-button text-[#A1A6B7] w-1/4 text-xs">
            {formatShippingEstimate(method.shippingEstimate)}
          </span>
          <span className=" font-semibold text-right w-1/4 text-xs text-[#464B59]">
            {method.price === 0
              ? "Grátis"
              : formatPrice(method.price / 100, "BRL", "pt-BR")}
          </span>
        </li>
      ))}
    </ul>
  );
}
