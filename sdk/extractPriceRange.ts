import { FilterRangeValue, FilterToggleValue } from "apps/commerce/types.ts";

export function extractPriceRangeFromFilters(
  prices?: FilterToggleValue[] | FilterRangeValue,
): { low: number; high: number } {
  if (!prices || (prices as FilterToggleValue[]).length === 0) {
    return {
      low: 0,
      high: 0,
    };
  }

  let values: number[][];

  if (Array.isArray(prices)) {
    // Se 'prices' for um array de 'FilterToggleValue', extrai os valores
    values = prices.map((result) => result.value.split(":").map(Number));
  } else {
    // Se 'prices' for do tipo 'FilterRangeValue', cria um array com seus valores 'min' e 'max'
    values = [[prices.min, prices.max]];
  }

  return {
    low: Math.min(...values.map(([to, _]) => to)),
    high: Math.max(...values.map(([_, from]) => from)),
  };
}
