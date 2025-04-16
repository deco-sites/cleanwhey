import { Product } from "apps/commerce/types.ts";
import { ComponentProps } from "../../sections/Component.tsx";
import { AppContext } from "../../apps/site.ts";

export interface Props {
  productID: Product["productID"];
}
export const action = async (props: Props, req: Request, ctx: AppContext) => {
  const form = await req.formData();

  const name = `${form.get("name") ?? ""}`;
  const email = `${form.get("email") ?? ""}`;

  await (ctx as any).invoke("vtex/actions/notifyme.ts", {
    skuId: props.productID,
    name,
    email,
  });

  return { result: true }
}

export default function SendForm({ result }: ComponentProps<typeof action>) {

  if (result == false) {
    return null
  }

  return (
    <div class="flex w-full justify-center items-center gap-2 flex-col mt-4">
      <span class="text-lg text-center mt-2">Seu e-mail foi cadastrado na nossa base de dados</span>
      <span class="text-sm text-center text-gray-300 ">Assim que este produto estiver disponível em estoque novamente, avisaremos você!</span>
    </div>
  );
}