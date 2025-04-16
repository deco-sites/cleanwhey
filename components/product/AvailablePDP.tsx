import TrustvoxProductReviews from "apps/ra-trustvox/sections/TrustvoxProductReviews.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";

export interface AvailablePDPProps {
  storeId: string;
  page: ProductDetailsPage | null;
}

function AvailablePDP(props: AvailablePDPProps) {
  const { page, storeId } = props;

  return (
    <div>
      <h2 className={"font-bold mb-6 text-gray-400 text-[32px] md:text-5xl text-center"}>Nossas Avaliações</h2>
      <TrustvoxProductReviews page={page} enableStaging={false} storeId={storeId} />
    </div>
  )
}

export default AvailablePDP;