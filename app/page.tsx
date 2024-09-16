import MoviesCarousel from "@/components/MoviesCarousel";
import { getMoviesProvider } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getMoviesProvider(0);
  const topRatedMovies = await getMoviesProvider(1);
  const popularMovies = await getMoviesProvider(2);

  return (
    <main className="">
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
