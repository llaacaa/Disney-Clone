import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <>
      <div>
        Your id is {id} and the genre is {genre}
      </div>
    </>
  );
}

export default GenrePage;
