import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <>
      <p>Page Not Found. You might want to go back home!</p>

      <Link className="mt-32 text-sm underline " href="/">
        <p>Return Home🏠</p>
      </Link>
    </>
  );
}
