import React from "react";

function about() {
  return (
    <section id="about" className="bg-Yellow h-[700px]">
      <div className="flex">
        <div className="pl-[50px] pt-[100px] lg:pl-[100px] lg:pt-[150px]">
          <h1 className="text-4xl mb-2 font-bold border-b-4 border-black w-[150px] ">
            About
          </h1>
          <div className="text-2xl h-10 mb-2 space-x-3">
            <button className="hover:border-b-[3px] hover:border-black">
              Ferdi
            </button>
            <button className="hover:border-b-[3px] hover:border-black">
              Ganteng
            </button>
            <button className="hover:border-b-[3px] hover:border-black">
              Banget
            </button>
          </div>
          <div className="flex ">
            <div className="border-2 bg-black  w-[15px] h-[15px]  border-black rounded-full"></div>
            <div className="my-auto h-[5px] bg-black w-[500px]"></div>
          </div>
          <p className="container text-2xl font-semibold w-[310px] lg:w-[800px] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iure
            obcaecati dolor ipsa dicta? Delectus at, accusantium vel optio
            incidunt ea quasi molestiae dolores sequi repellendus nihil quae?
            Voluptatum nisi velit ut numquam iure libero dolore excepturi alias
            sed deserunt.
          </p>
        </div>
        <div className="">
          <img
            className="w-[500px] h-[500px]"
            src="./img/SC.png"
            alt="Ferdi Guanteng"
          />
        </div>
      </div>
    </section>
  );
}

export default about;
