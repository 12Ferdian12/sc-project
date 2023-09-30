import React from "react";

function Hero() {
  return (
    <section className="bg-Green mb-10 h-[700px]">
      {/* <div className="absolute md:p-18 lg:p-36 w-[200px] h-[200px] lg:w-full lg:h-full blur-2xl -z-10">
        <img src="./img./bg1.png" alt="" />
      </div> */}
      <div className="md:pt-[250px] pt-[150px] pl-[50px] lg:pl-[100px] ">
        <h1 className="text-white mb-5 text-3xl md:text-6xl">Ferdi Guanteng</h1>
        <p className="container w-[310px] md:w-[750px] text-white text-lg md:text-xl ">
          Lorem ipsum dolor sit ame consectetur adipisicing elit. Quas adipisci
          ullam quae voluptatum laboriosam! Molestias ut alias veniam delectus,
          quisquam similique, corrupti debitis officia, aperiam quasi culpa
          suscipit expedita tempore.
        </p>
      </div>
      <div className="pt-[25px] md:pl-[100px] pl-[50px]">
        <button className="border shadow-xl h-[50px] w-[100px] bg-Yellow border-black rounded-xl">
          <a href={"#about"} className="font-semibold">
            Continue
          </a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
