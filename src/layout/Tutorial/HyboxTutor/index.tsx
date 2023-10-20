import React from "react";
import { HyboxList } from "@/components/data/tutorialData";

function Hybox() {
  return (
    <>
      <section className="min-h-[80vh] bg-Yellow">
        <div className="px-5  py-5 space-y-5">
          {HyboxList.map((Hybox, i) => {
            return (
              <div
                className="my-5 mx-auto p-4 border-2 w-[1200px] bg-Brown2 text-Yellow border-black shadow-xl rounded-2xl "
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
                        className="w-[600px] rounded h-[300px]"
                        src={Hybox.image}
                        alt=""
                      />
                    </div>
                    <div className="text-2xl font-semibold">
                      {Hybox.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Hybox;
