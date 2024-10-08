import ImageLoader from "@/components/ImageLoader";
import Rating from "@/components/Rating";
import { getMovie } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
};

async function MoviePage({ params: { id } }: Props) {
  const movie = await getMovie(id);
  const dateObject = new Date(movie.release_date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="flex-full min-w-0 relative w-screen h-screen">
        <ImageLoader
          movie={movie}
          classes="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0  top-32  z-40 w-full px-3 sm:px-10 overflow-x-hidden">
          <p className="text-2xl md:text-6xl sm:text-4xl  font-bold pb-2 ">
            {movie.title}{" "}
            <span className="text-lg md:text-3xl">{formattedDate}</span>
          </p>
          <p className="md:text-4xl sm:text-2xl italic w-full sm:w-2/3">
            {movie.overview}
          </p>
          <Rating rating={movie.vote_average} voteCount={movie.vote_count} />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-200/0
        via-gray-900/10 to-gray-600 dark:to-[#1A1C29]/80 z-10"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-200/0
        via-gray-900/10 to-gray-600 dark:to-[#1A1C29]/80 z-10"
        />
      </div>
    </>
  );
}

export default MoviePage;
