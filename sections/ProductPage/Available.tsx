import TrustvoxStoreReviewsCarousel from "apps/ra-trustvox/sections/TrustvoxStoreReviewsCarousel.tsx";

export interface AvailableProps {
  storeId: string;
  numberOfReviews: number;
}

function Available(props: AvailableProps) {
  const { numberOfReviews, storeId } = props;

  return (
    <TrustvoxStoreReviewsCarousel enableStaging numberOfReviewsInStoreCarousel={numberOfReviews} storeId={storeId} />
  )
}

export default Available;