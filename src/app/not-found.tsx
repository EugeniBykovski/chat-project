import React from "react";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="text-center flex flex-col justify-center h-[100vh] mt-8 md:mt-0 overflow-hidden">
      <h1 className="md:text-8xl text-yellow-300 font-bold text-2xl pb-10">
        Ops...
      </h1>
      <h2 className="text-white text-2xl">That page cannot be found :&#40;</h2>
      <p>
        <Link
          className="mt-5 ml-2 w-full flex justify-center items-center hover:opacity-70 transition"
          href="/"
        >
          Go Home <ArrowRightCircle className="w-5 h-5 ml-2" />
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
