import TrustvoxProductReviews from "apps/ra-trustvox/sections/TrustvoxProductReviews.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import TrustvoxRateConfig from "apps/ra-trustvox/sections/TrustvoxRateConfig.tsx";

export interface AvailableProps {
  storeId: string;
  page: ProductDetailsPage | null;
}

function Available(props: AvailableProps) {
  const { storeId, page } = props;

  return (
    <div>
      <h2
        className={
          "font-bold mb-6 text-gray-400 text-[32px] md:text-5xl text-center"
        }
      >
        Nossas Avaliações
      </h2>
      <TrustvoxProductReviews
        enableStaging={true}
        page={page}
        storeId={storeId}
      />
    </div>
  );
}

export default Available;
