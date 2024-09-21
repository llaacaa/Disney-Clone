import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);
  const discover = await getDiscoverMovies();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col splce-y-4 mt-32 xl:mt-42">
          <h1 className="text-6xl font-bold px-10">
            Search results for {genre} genre
          </h1>
          <MoviesCarousel movies={movies} isVertical title="Movies" />
        </div>
      </div>
      <MoviesCarousel movies={discover} title="You may also like" />
    </>
  );
}

export default GenrePage;
