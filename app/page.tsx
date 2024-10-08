import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getMoviesProvider } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getMoviesProvider(0);
  const topRatedMovies = await getMoviesProvider(1);
  const popularMovies = await getMoviesProvider(2);

  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
      <div className="bg-black text-white py-4 text-center bottom-0 fixed sm:static">
        <p>Made by Lazar Kojic 2024</p>
        <p className="text-sm">
          This application is a copy of Disney+ and uses data from The Movie
          Database API. All rights to the content belong to their respective
          owners.
        </p>
      </div>
    </main>
  );
}
