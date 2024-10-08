"use client";

import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import SwiperCarousel from "./library_components/SwiperCarousel";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-40">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      {!isVertical && <SwiperCarousel movies={movies} />}

      {isVertical && (
        <div
          className={cn(
            "flex overflow-scroll scrollbar-hide space-x-4 px-5 lg:px-10 py-5",
            isVertical && "flex-col space-x-0 space-y-12"
          )}
          key={title}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={cn(
                "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
              )}
            >
              <MovieCard movie={movie} />
              <div className="max-w-2xl">
                <p className="font-bold">
                  {movie.title} (
                  {movie.release_date.slice(0, movie.release_date.indexOf("-"))}
                  )
                </p>
                <hr className="mb-3" />
                <p className="">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MoviesCarousel;
