import getImagePath from "@/lib/getImagePath";
import { getMovie } from "@/lib/getMovies";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

async function MoviePage({ params: { id } }: Props) {
  const movie = await getMovie(id);
  console.log(movie);
  return (
    <>
      <div className="flex-full min-w-0 relative w-screen h-screen">
        <Image
          className=" object-cover w-full h-full"
          key={movie.id}
          src={getImagePath(movie.backdrop_path, true)}
          alt="Movie"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0  top-32 left-32 z-50 w-2/3">
          <p className="text-6xl  font-bold pb-2">{movie.title}</p>
          <p className=" text-4xl">{movie.overview}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      </div>
    </>
  );
}

export default MoviePage;
