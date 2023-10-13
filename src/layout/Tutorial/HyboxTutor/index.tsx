import React from "react";
import { HyboxList } from "@/components/data/tutorialData";

function Hybox() {
  return (
    <>
      <section className="min-h-[80vh] bg-Yellow">
        <div className="px-5 py-5 space-y-5">
          {HyboxList.map((Hybox, i) => {
            return (
              <div key={i}>
                <h1 className=" text-4xl font-bold border-b-4 border-black mb-2">
                  {Hybox.title}
                </h1>
                <div className="grid grid-cols-2">
                  <div className="text-2xl font-semibold">
                    {Hybox.description}
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-[600px] h-[600px]"
                      src={Hybox.image}
                      alt=""
                    />
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
