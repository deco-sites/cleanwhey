// import { IS_BROWSER } from "$fresh/runtime.ts";

// export interface SearchEntry {
//   term: string;
//   date: string;
// }

// export function addRecentSearch(term: string): void {
//   // Retrieve the recent searches from localStorage

//   const recentSearches = getRecentSearches().reverse();

//   // Check if the term already exists in the recent searches
//   const searchExists = recentSearches.some((search) => search.term === term);

//   if (!searchExists) {
//     // Add the new search entry
//     const newSearchEntry: SearchEntry = {
//       term: term,
//       date: new Date().toISOString(),
//     };

//     // Limit the recent searches to 5
//     if (recentSearches.length >= 5) {
//       const firstFive = recentSearches.slice(1, 5);
//       firstFive.push(newSearchEntry);
//       if (IS_BROWSER) {
//         localStorage.setItem("recentSearches", JSON.stringify(firstFive));
//       }
//     } else {
//       recentSearches.push(newSearchEntry);
//       if (IS_BROWSER) {
//         localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
//       }
//     }
//   }
// }

// export function getRecentSearches(): SearchEntry[] {
//   const recentSearches = JSON.parse(
//     !IS_BROWSER ? localStorage.getItem("recentSearches") || "[]" : "[]",
//   );
//   return recentSearches.reverse();
// }
// Função para obter as buscas recentes do localStorage
export function getRecentSearches() {
  const searches = localStorage.getItem("searchHistory");

  // Se não houver histórico, retorna um array vazio
  if (!searches) {
    return [];
  }

  // Converte a string JSON de volta em um array de objetos de busca
  return JSON.parse(searches);
}

// Função para adicionar uma busca recente ao localStorage
export function addRecentSearch(term) {
  const searches = getRecentSearches(); // Obtém o histórico atual
  const maxHistorySize = 5; // Limite de histórico que você deseja manter

  // Se o termo já estiver no histórico, removemos ele para evitar duplicatas
  const filteredSearches = searches.filter((search) => search.term !== term);

  // Adiciona a nova busca ao início do array
  filteredSearches.unshift({ term });

  // Limita o tamanho do histórico
  const updatedSearches = filteredSearches.slice(0, maxHistorySize);

  // Salva o novo histórico no localStorage
  localStorage.setItem("searchHistory", JSON.stringify(updatedSearches));
}
