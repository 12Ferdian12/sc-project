import React from "react";

function game() {
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
          <div className=" py-5 grid grid-cols-2 ">
            <p className="font-semibold text-xl w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              at ab corrupti, tempore dolore libero cupiditate nisi a,
              consectetur accusamus, omnis labore perferendis natus! Consectetur
              excepturi distinctio numquam ab ea!
            </p>
            <div className="w-[500px] border rounded border-black text-Yellow bg-Brown2">
              <div className=" px-5 py-5 font-semibold text-xl">
                <h1>Link:</h1>
                <a href="">nama link gform ygy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default game;
