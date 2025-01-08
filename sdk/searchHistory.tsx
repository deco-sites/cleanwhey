import { IS_BROWSER } from "$fresh/runtime.ts";

export interface SearchEntry {
  term: string;
  date: string;
}

export function addRecentSearch(term: string): void {
  console.log("addRecentSearch called with term:", term);

  const recentSearches = getRecentSearches();
  console.log("Current recentSearches:", recentSearches);

  const searchExists = recentSearches.some((search) => search.term === term);

  if (!searchExists) {
    const newSearchEntry: SearchEntry = {
      term: term,
      date: new Date().toISOString(),
    };

    if (recentSearches.length >= 5) {
      recentSearches.pop();
    }

    recentSearches.unshift(newSearchEntry);

    try {
      if (IS_BROWSER && typeof localStorage !== "undefined") {
        console.log("Saving to localStorage:", recentSearches);
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
      } else {
        console.warn("localStorage is not available");
      }
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }
}

export function getRecentSearches(): SearchEntry[] {
  if (IS_BROWSER && typeof localStorage !== "undefined") {
    try {
      const recentSearches = JSON.parse(
        localStorage.getItem("recentSearches") || "[]"
      );
      console.log("Fetched recentSearches from localStorage:", recentSearches);
      return recentSearches.slice().reverse();
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  }
  return [];
}
