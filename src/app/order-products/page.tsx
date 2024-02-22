"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  function handleClick() {
    router.forward();
  }

  return (
    <>
      <h1>Order Product Page</h1>

      <button
        className="px-3 py-4 m-5 bg-blue-400 rounded-lg text-slate-50 font-semibold cursor-pointer shadow-lg"
        onClick={handleClick}
      >
        Place Your Order
      </button>
    </>
  );
}
