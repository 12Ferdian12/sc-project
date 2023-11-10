"use client";

import { HyboxList } from "@/components/data/tutorialData";
import { leagueSpartan } from "@/app/layout";
import React from "react";
import Link from "next/link";
import tutorialPage from "@/app/Tutorial/page";

function TutorSection() {
  return (
    <section className="bg-Semen min-h-[750px] pb-10">
      <div className="lg:block px-10 pt-12">
        <h1
          className={`${leagueSpartan.className} text-4xl border-b-4 w-full border-black font-bold`}
        >
          {"Let's Start Planting"}
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-5">
          {HyboxList.map((Hybox, i) => {
            if (i < 2)
              return (
                <div
                  className="my-5 mx-auto p-4 border-2 w-full bg-Brown2 text-Yellow border-black shadow-xl rounded-2xl "
                  key={i}
                >
                  <div className="text-black justify-center items-center border-r border-b bg-Yellow border-Yellow max-w-[50px] rounded-2xl">
                    <h1 className="flex justify-center items-center text-4xl font-semibold ">
                      {i + 1}
                    </h1>
                  </div>
                  <div className="px-5 mt-2 space-y-3">
                    <h1 className="mx-auto text-4xl font-bold border-b-4 border-Yellow mb-2">
                      {Hybox.title}
                    </h1>
                    <div className="">
                      <div className=" flex justify-center items-center">
                        <img
                          className="rounded lg:h-[300px]"
                          src={Hybox.image}
                          alt=""
                        />
                      </div>
                      <div
                        className="text-2xl font-semibold"
                        dangerouslySetInnerHTML={{ __html: Hybox.description }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
        <button
          className="transition mx-auto z-10 ease-in-out delay-150 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-Yellow border-2 w-[95px] h-[50px] md:w-1/2 bg-Yellow border-black rounded-full flex items-center justify-center"
          type="button"
        >
          <Link href="/Tutorial" className="font-bold">
            Read more
          </Link>
        </button>
      </div>
    </section>
  );
}

export default TutorSection;
