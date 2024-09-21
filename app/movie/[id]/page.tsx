import getImagePath from "@/lib/getImagePath";
import { getMovie } from "@/lib/getMovies";
import { Movie } from "@/typings";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

async function MoviePage({ params: { id } }: Props) {
  const movie: Movie = await getMovie(id);

  return (
    <>
      <div className="flex-full min-w-0">
        <Image
          key={movie.id}
          src={getImagePath(movie.backdrop_path, true)}
          alt=""
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
}

export default MoviePage;
