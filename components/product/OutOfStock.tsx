import type { Product } from "apps/commerce/types.ts";
import { useComponent } from "../../sections/Component.tsx";
const SendForm = import.meta.resolve("./SendForm.tsx");

export interface Props {
  productID: Product["productID"];
}

export default function Notify({ productID }: Props) {

  return (
    <form
      class="form-control justify-start gap-2"
      hx-sync="this:replace"
      hx-indicator="this"
      hx-swap="innerHTML"
      hx-post={useComponent<Props>(SendForm, { productID })}
    >
      <span class="text-base">Este produto está indisponível no momento</span>
      <span class="text-sm">Avise-me quando estiver disponível</span>

      <input placeholder="Nome" class="input input-bordered" name="name" />
      <input placeholder="Email" class="input input-bordered" name="email" />

      <button class="btn btn-primary no-animation">
        <span class="[.htmx-request_&]:hidden inline">Enviar</span>
        <span class="[.htmx-request_&]:inline hidden loading loading-spinner loading-xs" />
      </button>
    </form>
  );
}
