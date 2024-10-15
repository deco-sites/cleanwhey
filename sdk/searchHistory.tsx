import { IS_BROWSER } from "$fresh/runtime.ts";

export interface SearchEntry {
  term: string;
  date: string;
}

export function addRecentSearch(term: string): void {
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
      if (IS_BROWSER) {
        localStorage.setItem("recentSearches", JSON.stringify(firstFive));
      }
    } else {
      recentSearches.push(newSearchEntry);
      if (IS_BROWSER) {
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
      }
    }
  }
}

export function getRecentSearches(): SearchEntry[] {
  const recentSearches = JSON.parse(
    IS_BROWSER ? localStorage.getItem("recentSearches") || "[]" : "[]"
  );
  return recentSearches.reverse();
}
