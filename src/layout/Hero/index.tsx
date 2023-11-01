"use client";

import LoadingModal from "@/components/loadingModal";
import React, { useEffect } from "react";
import { useMediaQuery } from "@/hooks";

function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    console.log("isMobile", isMobile);
  }, [isMobile]);

  return (
    <section className="flex bg-gradient-to-b from-slate-700/50 to-Yellow bg-opacity-50 bg-cover min-h-[100vh]">
      <div
        className="absolute -z-10 sm:bg-center bg-[-500px] "
        style={{
          backgroundImage: `url("./img/Hero-min.jpg")`,
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
        <h1 className=" text-white font-sans font-outline-1 font-extrabold  mb-5 w-[200px] sm:w-full text-3xl lg:text-6xl">
          START <span className="text-Green ">PLANTING?</span>
          START WITH
          <span className="text-Brown2 "> OLATIVITY</span>
        </h1>
        <p className="container font-semibold w-[200px] md:w-[750px] text-white text-lg md:text-xl ">
          Masa dutahun yang akan datang akan terjadi berbakai krisis, oleh
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
