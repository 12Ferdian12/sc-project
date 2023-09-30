import React from "react";

function Navbar() {
  return (
    <nav className="sticky p-7 top-0 justify-between items-center  flex bg-Brown2 border-b-2 border-Yellow h-[85px]">
      <div className="bg-white border-2 border-Yellow rounded-full">
        <img
          src="img/Logo.png"
          className=" w-[65px] h-[65px] border border-black rounded-full"
          alt="Olativity"
        />
      </div>

      <ul className="flex  items-center justify-between">
        <li className="mx-2">
          <a
            href={"#about"}
            className="hover:border-b-2 text-Yellow hover:border-Yellow px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            about
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className="hover:border-b-2 text-Yellow hover:border-Yellow px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            Product
          </a>
        </li>
        <li className="mx-2 border-2 w-[85px] h-[40px] bg-Yellow border-Yellow rounded-full px-[4px] py-[3px] ">
          <a
            href=""
            className=" pt-[4px] text-black   font-bold text-base transition ease-in-out duration-500"
          >
            <p className="pt-[3px] px-[9px] w-[50px] hover:border-b-2 hover:border-black">
              Tutorial
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
