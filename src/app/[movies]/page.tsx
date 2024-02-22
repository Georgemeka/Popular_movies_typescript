import Image from "next/image";

export default async function MovieDetail({
  params,
}: {
  params: { movies: string };
}) {
  const imagePath = `https://image.tmdb.org/t/p/original/`;
  const { movies } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movies}?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Cannot fetch data");
  }

  const data = await res.json();
  console.log(data);

  return (
    <div>
      <div>
        <h2 className="bg-green-600 text-sm text-green-100 inline-block my-2 py-2 px-4 rounded-lg text-center">
          {data.status}
        </h2>
        <Image
          src={imagePath + data.poster_path}
          alt={data.title}
          width={600}
          height={600}
          className="my-5 w-full"
          priority
        />
        <h2 className="text-2xl">Movie Title: {data.title}</h2>
        <p className="italic text-sm">{data.tagline}</p>

        <h2 className="text-lg">Release Date: {data.release_date}</h2>
        <h2 className="text-lg">Duration: {data.runtime} minutes</h2>

        <p className="text-lg mb-10 italic">{data.overview}</p>
      </div>
    </div>
  );
}
