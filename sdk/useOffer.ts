import type {
  AggregateOffer,
  UnitPriceSpecification,
} from "apps/commerce/types.ts";
import { formatPrice } from "./format.ts";

const bestInstallment = (
  acc: UnitPriceSpecification | null,
  curr: UnitPriceSpecification,
) => {
  if (curr.priceComponentType !== "https://schema.org/Installment") {
    return acc;
  }

  if (!acc) {
    return curr;
  }

  if (acc.price > curr.price) {
    return curr;
  }

  if (acc.price < curr.price) {
    return acc;
  }

  if (
    acc.billingDuration &&
    curr.billingDuration &&
    acc.billingDuration < curr.billingDuration
  ) {
    return curr;
  }

  return acc;
};

const installmentToString = (installment: UnitPriceSpecification) => {
  const { billingDuration, billingIncrement } = installment;

  if (!billingDuration || !billingIncrement) {
    return "";
  }

  return `${billingDuration}x de ${
    formatPrice(
      billingIncrement,
    )
  } ${"sem juros"}`;
};

function getMaxBillingDuration(
  arr: UnitPriceSpecification[],
): UnitPriceSpecification | null {
  return arr.reduce<UnitPriceSpecification | null>((max, current) => {
    if (
      current.billingDuration !== undefined &&
      (max === null ||
        max.billingDuration === undefined ||
        current.billingDuration > max.billingDuration)
    ) {
      return current;
    }
    return max;
  }, null);
}

export const useOffer = (aggregateOffer?: AggregateOffer) => {
  const offer = aggregateOffer?.offers[0];
  const listPrice = offer?.priceSpecification.find(
    (spec) => spec.priceType === "https://schema.org/ListPrice",
  );
  const salePrice = offer?.priceSpecification.find(
    (spec) => spec.priceType === "https://schema.org/SalePrice",
  );
  //const installment = offer?.priceSpecification.reduce(bestInstallment, null);
  const installment = offer?.priceSpecification &&
    getMaxBillingDuration(offer?.priceSpecification);

  const seller = offer?.seller;
  const price = offer?.price;
  const availability = offer?.availability;

  return {
    price,
    listPrice: listPrice?.price,
    availability,
    seller,
    salePrice: salePrice?.price,
    installments: installment && price
      ? installmentToString(installment)
      : null,
  };
};
