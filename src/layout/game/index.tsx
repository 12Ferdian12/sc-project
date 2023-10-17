"use client";

import React from "react";
import { useMediaQuery } from "@/hooks";

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
          <h1 className="text-4xl font-bold border-b-[4px] border-black">
            #Challenge
          </h1>
          <div className="py-5 grid lg:grid-cols-2 grid-cols-1 gap-5">
            <p className="font-semibold text-xl w-[320px] md:w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              at ab corrupti, tempore dolore libero cupiditate nisi a,
              consectetur accusamus, omnis labore perferendis natus! Consectetur
              excepturi distinctio numquam ab ea!
            </p>
            <div className="w-full border rounded border-black text-Yellow bg-Brown2">
              <div className=" px-5 py-5 font-semibold text-xl flex justify-center items-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd1qkXC-ydevKoolt4w_MdAl12xmnBrGf-UNwVdXifgnTKd-A/viewform?embedded=true"
                  width={mediaQueryMd[0] ? "600" : "280"}
                  height="555"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Game;
