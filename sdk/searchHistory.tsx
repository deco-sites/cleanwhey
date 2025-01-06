export interface SearchEntry {
  term: string;
  date: string;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null; 
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}


function setCookie(name: string, value: string, days: number = 7): void {
  if (typeof document === "undefined") return; 
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}
   expires=${expires}; path=/`;
}

export function addRecentSearch(term: string): void {
  console.log("addRecentSearch called with term:", term);

  const recentSearchesJSON = getCookie("recentSearches");
  const recentSearches: SearchEntry[] = recentSearchesJSON
    ? JSON.parse(recentSearchesJSON)
    : [];

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

    setCookie("recentSearches", JSON.stringify(recentSearches), 7);
    console.log("Saved to cookies:", recentSearches);
  }
}

export function getRecentSearches(): SearchEntry[] {

  const recentSearchesJSON = getCookie("recentSearches");
  if (recentSearchesJSON) {
    try {
      const recentSearches: SearchEntry[] = JSON.parse(recentSearchesJSON);
      console.log("Fetched recentSearches from cookies:", recentSearches);
      return recentSearches.slice().reverse();
    } catch (error) {
      console.error("Error parsing recentSearches cookie:", error);
      return [];
    }
  }
  return [];
}
