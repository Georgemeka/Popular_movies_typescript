"use client";

import Link from "next/link";
import Image from "next/image";

type MovieProps = {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
};

const Movie: React.FC<MovieProps> = ({
  title,
  id,
  poster_path,
  release_date,
}) => {
  const imagePath = `https://image.tmdb.org/t/p/original/`;

  return (
    <div>
      {/* <h1>{title}</h1>
      <h2>{release_date}</h2> */}
      <Link href={`${id}`}>
        <Image
          src={imagePath + poster_path}
          alt={title}
          width={500}
          height={750}
        />
      </Link>
    </div>
  );
};

export default Movie;
