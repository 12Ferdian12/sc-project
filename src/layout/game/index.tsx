"use client";

import React from "react";
import { useMediaQuery } from "@/hooks";
import { leagueSpartan } from "@/app/layout";
function Game() {
  const mediaQueryMd = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <section className="bg-Green border-t-2 border-black text-white min-h-[750px]">
        {/* <img
          className="mx-auto w-[1200px] h-[300px]"
          src="./img/testing.jpeg"
          alt=""
        /> */}
        <div className=" px-10 py-10">
          <h1
            className={`${leagueSpartan.className} text-4xl font-bold border-b-[4px] border-white`}
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
            <div className="font-semibold px-5 py-2 text-Yellow border-2 border-black rounded-lg bg-Brown2">
              <h1 className="text-3xl font-bold border-b-4 border-Yellow">
                Form:
              </h1>
              <div className="px-auto flex flex-col my-4 w-full items-center justify-center">
                <img
                  className="lg:max-w-[350px]"
                  src="./img/QrForm.png"
                  alt="Link Submit"
                />
                <div className="mx-2 mt-4 border-2 w-[85px] h-[40px] bg-Yellow border-black  rounded-full flex justify-center items-center ">
                  <a
                    href="https://bit.ly/olativity"
                    className="hover:border-b-2 text-black hover:border-black font-bold text-base transition ease-in-out duration-500"
                  >
                    Click Me!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Game;
