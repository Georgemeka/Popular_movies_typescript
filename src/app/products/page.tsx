import Link from "next/link";
import React from "react";

export default async function page() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/157336?api_key=47c75d1a84e4c702029098515d435d53`
  );

  const data = res.json();
  console.log(data);

  return <></>;
}
