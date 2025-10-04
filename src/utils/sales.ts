import { TProduct } from "../types/product";

export function getFlashSales(data: TProduct[]): TProduct[] {
  const mens = data.filter(d => d.category === "men's clothing");
  const womens = data.filter(d => d.category === "women's clothing");

  const mensSorted = mens.slice().sort((a, b) => b.id - a.id);
  const womensSorted = womens.slice().sort((a, b) => b.id - a.id);

  const newestMen = mensSorted[0];
  const newestWomen = womensSorted[0];
  const oldestMen = mensSorted.at(-1);
  const oldestWomen = womensSorted.at(-1);

  return [newestMen, newestWomen, oldestMen, oldestWomen].filter(
    (p): p is TProduct => Boolean(p)
  );
}