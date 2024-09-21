import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  const movies = await getSearchMovies(termToUse);
  const discover = await getDiscoverMovies();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col splce-y-4 mt-32 xl:mt-42">
          <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
          <MoviesCarousel title="Movies" isVertical movies={movies} />
        </div>
      </div>
      <MoviesCarousel movies={discover} title="You may also like" />
    </>
  );
}

export default SearchPage;
