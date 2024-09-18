import Glider from "react-glider";
import "glider-js/glider.min.css";
import MovieCard from "../MovieCard";

function GliderCarousel({ movies }: { movies: Movie[] }) {
  return (
    <Glider
      className="glider-perspective"
      draggable
      slidesToShow={5}
      slidesToScroll={1}
    >
      {movies.map((movie) => (
        <div className="slide-outer" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </Glider>

    // <div >
    //   <Glider draggable slidesToScroll={1}>
    //     {movies.map((movie) => (
    //       <div className="embla__item" key={movie.id}>
    //         <MovieCard movie={movie} />
    //       </div>
    //     ))}
    //   </Glider>
    // </div>
  );
}

export default GliderCarousel;
