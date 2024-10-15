import { IS_BROWSER } from "$fresh/runtime.ts";

export interface SearchEntry {
  term: string;
  date: string;
}

export function addRecentSearch(term: string): void {
  if (!IS_BROWSER) return; // Verifica se está no navegador

  const recentSearches = getRecentSearches().reverse();

  const searchExists = recentSearches.some((search) => search.term === term);

  if (!searchExists) {
    const newSearchEntry: SearchEntry = {
      term: term,
      date: new Date().toISOString(),
    };

    if (recentSearches.length >= 5) {
      const firstFive = recentSearches.slice(1, 5);
      firstFive.push(newSearchEntry);
      localStorage.setItem("recentSearches", JSON.stringify(firstFive));
    } else {
      recentSearches.push(newSearchEntry);
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }
  }
}

export function getRecentSearches(): SearchEntry[] {
  if (!IS_BROWSER) return []; // Retorna um array vazio no lado do servidor

  const recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  return recentSearches.reverse();
}
