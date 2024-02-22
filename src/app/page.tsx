import Link from "next/link";
import Movie from "./Movie";

type MovieProps = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  const data = await res.json();
  // console.log(data);

  return (
    <>
      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie: MovieProps) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </>
  );
}
