"use client";

import LoadingModal from "@/components/loadingModal";
import React, { useEffect } from "react";
import { useMediaQuery } from "@/hooks";
import { poppins } from "@/app/layout";

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    console.log("isMobile", isMobile);
  }, [isMobile]);

  return (
    <section className="flex bg-gradient-to-b from-slate-700/50 to-Coklat min-h-[100vh]  md:min-h-[60vh] bg-opacity-50 bg-cover lg:min-h-[100vh]">
      <div
        className="absolute -z-10 sm:bg-center bg-[-500px] "
        style={{
          backgroundImage: `url("./img/FotoKerenFerdi-min.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          zIndex: -10,
          opacity: 0.5,
        }}
      ></div>
      <div
        data-aos="fade-right"
        className="md:pt-[250px] pt-[150px] pl-[50px] lg:pl-[100px] "
      >
        <h1
          className={`text-white ${poppins}  font-outline-2 font-extrabold  mb-5 w-[200px] sm:w-full md:text-6xl text-3xl lg:text-6xl`}
        >
          START <span className="text-Green ">PLANTING?</span>
          START WITH
          <span className="text-Brown2 "> OLATIVITY</span>
        </h1>
        <p className="container px-4 border-2 border-black bg-Brown2 rounded-3xl font-semibold w-[250px] md:w-[750px] text-Yellow text-lg md:text-lg ">
          Masa dua tahun yang akan datang akan terjadi berbakai krisis, oleh
          karena itu dengan cara melestarikan tanaman dan tumbuhan maka akan
          mencegah hal tersebut terjadi. Maka Ayo Bersama kami melakukan
          perubahan dunia dengan cara menanam pohon.
        </p>
        <div className="pt-[25px] w-4  ">
          <button className="transition z-10 ease-in-out delay-150 shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-Yellow mx-2 border-2 w-[95px] h-[50px] bg-Yellow border-black rounded-full flex items-center justify-center">
            <a href={"#about"} className="font-bold ">
              Continue
            </a>
          </button>
        </div>
      </div>
      <div className=" lg:py-10   lg:w-full lg:h-full  ">
        {/* <img
          className="hidden md:block border-l rounded-full w-[800px] h-[500px]"
          src="./img/testing.jpeg"
          alt=""
        /> */}
      </div>
    </section>
  );
}

export default Hero;
