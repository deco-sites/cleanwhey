import TrustvoxStoreReviewsCarousel from "apps/ra-trustvox/sections/TrustvoxStoreReviewsCarousel.tsx";

export interface AvailableProps {
  storeId: string;
  numberOfReviews: number;
}

function Available(props: AvailableProps) {
  const { numberOfReviews, storeId } = props;

  return (
    <div>
      <h2 className={"font-bold mb-6 text-gray-400 text-[32px] md:text-5xl text-center"}>Nossas Avaliações</h2>
      <TrustvoxStoreReviewsCarousel enableStaging numberOfReviewsInStoreCarousel={numberOfReviews} storeId={storeId} />
    </div>
  )
}

export default Available;