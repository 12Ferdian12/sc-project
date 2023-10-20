import LoadingModal from "@/components/loadingModal";
import React from "react";

function Hero() {
  return (
    <section className="flex bg-gradient-to-b from-slate-700/50 to-Yellow bg-opacity-50 bg-cover min-h-[1000px]">
      <img className="absolute -z-10 " src="./img/Hero.jpg" alt="" />
      <div className="md:pt-[250px] pt-[150px] pl-[50px] lg:pl-[100px] ">
        <h1 className=" text-white font-sans  font-extrabold  mb-5 text-3xl md:text-6xl">
          START <span className="text-Yellow">PLANTING?</span>START WITH
          <span className="text-Yellow"> OLATIVITY</span>
        </h1>
        <p className="container font-semibold w-[310px] md:w-[750px] text-white text-lg md:text-xl ">
          Lorem ipsum dolor sit ame consectetur adipisicing elit. Quas adipisci
          ullam quae voluptatum laboriosam! Molestias ut alias veniam delectus,
          quisquam similique, corrupti debitis officia, aperiam quasi culpa
          suscipit expedita tempore.
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
