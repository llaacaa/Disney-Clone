import { SearchResults } from "@/typings";

async function fetchFromTMBD(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;
  return data;
}

export async function getMoviesProvider(urlNumber: number) {
  const moviesUrl = [
    "https://api.themoviedb.org/3/movie/upcoming",
    "https://api.themoviedb.org/3/movie/top_rated",
    "https://api.themoviedb.org/3/movie/popular",
  ];

  const url = new URL(moviesUrl[urlNumber]);

  const data = await fetchFromTMBD(url);
  return data.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTMBD(url);
  return data.results;
}

export async function getSearchMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");

  url.searchParams.set("query", term);

  const data = await fetchFromTMBD(url);
  return data.results;
}
