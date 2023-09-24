import React from "react";

function Navbar() {
  return (
    <nav className="sticky p-7 top-0 justify-between items-center  flex bg-Brown2 border-b-2 border-amber-300 h-[85px]">
      <div className="bg-white border-2 border-amber-300 rounded-full">
        <img
          src="img/Logo.png"
          className=" w-[65px] h-[65px] border border-black rounded-full"
          alt="Olativity"
        />
      </div>

      <ul className="flex  items-center justify-between">
        <li className="mx-2">
          <a
            href="#"
            className="hover:border-b-2 text-amber-300 hover:border-amber-300 px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            FAQ
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className="hover:border-b-2 text-amber-300 hover:border-amber-300 px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            FAQ
          </a>
        </li>
        <li className="mx-2 border-2 w-[85px] h-[40px] bg-amber-300 border-amber-300 rounded-full px-[4px] py-[3px] ">
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
