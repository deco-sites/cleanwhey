import { IS_BROWSER } from "$fresh/runtime.ts";

export interface SearchEntry {
  term: string;
  date: string;
}

export function addRecentSearch(term: string): void {
  // Retrieve the recent searches from localStorage

  const recentSearches = getRecentSearches().reverse();

  // Check if the term already exists in the recent searches
  const searchExists = recentSearches.some((search) => search.term === term);

  if (!searchExists) {
    // Add the new search entry
    const newSearchEntry: SearchEntry = {
      term: term,
      date: new Date().toISOString(),
    };

    // Limit the recent searches to 5
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
