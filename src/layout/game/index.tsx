"use client";

import React from "react";
import { useMediaQuery } from "@/hooks";
import { leagueSpartan } from "@/app/layout";
function Game() {
  const mediaQueryMd = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <section className="bg-Yellow min-h-[750px]">
        <img
          className="mx-auto w-[1200px] h-[300px]"
          src="./img/testing.jpeg"
          alt=""
        />
        <div className=" px-10 py-10">
          <h1
            className={`${leagueSpartan.className} text-4xl font-bold border-b-[4px] border-black`}
          >
            #Challenge
          </h1>
          <div className="py-5 grid lg:grid-cols-2 grid-cols-1 gap-5">
            <p className="font-semibold text-xl w-[320px] md:w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              at ab corrupti, tempore dolore libero cupiditate nisi a,
              consectetur accusamus, omnis labore perferendis natus! Consectetur
              excepturi distinctio numquam ab ea!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Game;
