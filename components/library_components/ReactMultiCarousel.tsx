"use client";

import { Movie } from "@/typings";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

type Props = {
  movies: Movie[];
};

function ReactMultiCarousel({ movies }: Props) {
  return (
    <Carousel responsive={responsive} infinite={true} focusOnSelect={false}>
      {movies.map((movie) => (
        <div key={movie.id} className="select-none">
          <MovieCard movie={movie} />
        </div>
      ))}
    </Carousel>
  );
}

export default ReactMultiCarousel;
