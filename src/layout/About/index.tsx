"use client";

import React, { useState } from "react";
import { leagueSpartan } from "@/app/layout";

function About() {
  const [stateAbout, setStateAbout] = useState("ferdi");

  return (
    <section id="about" className="bg-Yellow py-10">
      {/* <div className="flex-row w-full lg:flex">
        <div className="pl-[50px] pt-[100px] lg:pl-[100px] lg:pt-[150px] w-full lg:w-1/2">
          <h1 className="text-4xl mb-2 font-bold border-b-4 border-black w-[150px] ">
            About
          </h1>
          <div className="text-2xl h-10 mb-2 space-x-3">
            <button
              className="hover:border-b-[3px] hover:border-black"
              onClick={() => setStateAbout("ferdi")}
            >
              Ferdi
            </button>
            <button
              className="hover:border-b-[3px] hover:border-black"
              onClick={() => setStateAbout("ganteng")}
            >
              Ganteng
            </button>
            <button
              className="hover:border-b-[3px] hover:border-black"
              onClick={() => setStateAbout("banget")}
            >
              Banget
            </button>
          </div>
          <div className="flex ">
            <div className="border-2 bg-black  w-[15px] h-[15px]  border-black rounded-full"></div>
            <div className="my-auto h-[5px] bg-black w-[500px]">
              <p className="container text-2xl font-semibold w-[310px] lg:w-[800px] ">
                {stateAbout === "ferdi"
                  ? ferdi()
                  : stateAbout === "ganteng"
                  ? ganteng()
                  : banget()}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            className=" w-[500px] h-[500px]"
            src="./img/SC.png"
            alt="Ferdi Guanteng"
          />
        </div>
      </div> */}
      <div className="flex-col-reverse flex w-full lg:flex-row">
        <div className="flex-col px-10 pt-12 w-full lg:w-1/2">
          <h1
            className={`${leagueSpartan.className} text-4xl mb-2 font-bold border-b-4 border-black`}
          >
            About
          </h1>
          <div className="text-2xl font-semibold h-10 mb-2 space-x-3">
            <button
              className="hover:border-b-[3px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-black"
              onClick={() => setStateAbout("ferdi")}
            >
              Ferdi
            </button>
            <button
              className="hover:border-b-[3px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-black"
              onClick={() => setStateAbout("ganteng")}
            >
              Ganteng
            </button>
            <button
              className="hover:border-b-[3px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-black"
              onClick={() => setStateAbout("banget")}
            >
              Banget
            </button>
          </div>
          <div className="flex">
            <div className="border-2 bg-black w-[15px] h-[15px] border-black rounded-full"></div>
            <div className="my-auto h-[5px] bg-black w-[600px]"></div>
          </div>
          <div className="flex h-[300px]">
            <p className="container text-2xl font-semibold mt-2 text-ellipsis overflow-hidden">
              {stateAbout === "ferdi"
                ? ferdi()
                : stateAbout === "ganteng"
                ? ganteng()
                : banget()}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            className=" w-[500px] h-[500px]"
            src="./img/SC.png"
            alt="Ferdi Guanteng"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

function ferdi() {
  return <>ferdi</>;
}

function ganteng() {
  return (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iure
      obcaecati dolor ipsa dicta? Delectus at, accusantium vel optio incidunt ea
      quasi molestiae dolores sequi repellendus nihil quae? Voluptatum nisi
      velit ut numquam iure libero dolore excepturi alias sed deserunt. Lorem,
      ipsum dolor sit amet consectetur adipisicing elit. Quae iure obcaecati
      dolor ipsa dicta? Delectus at, accusantium vel optio incidunt ea quasi
      molestiae dolores sequi repellendus nihil quae? Voluptatum nisi velit ut
      numquam iure libero dolore excepturi alias sed deserunt. Lorem, ipsum
      dolor sit amet consectetur adipisicing elit. Quae iure obcaecati dolor
      ipsa dicta? Delectus at, accusantium vel optio incidunt ea quasi molestiae
      dolores sequi repellendus nihil quae? Voluptatum nisi velit ut numquam
      iure libero dolore excepturi alias sed deserunt. Lorem, ipsum dolor sit
      amet consectetur adipisicing elit. Quae iure obcaecati dolor ipsa dicta?
      Delectus at, accusantium vel optio incidunt ea quasi molestiae dolores
      sequi repellendus nihil quae? Voluptatum nisi velit ut numquam iure libero
      dolore excepturi alias sed deserunt.
    </>
  );
}

function banget() {
  return <>hai</>;
}
