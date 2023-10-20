import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="sticky p-7 top-0 justify-between items-center z-50 flex bg-Brown2 border-b-2 border-Yellow h-[100px]">
      <div className="bg-white border-2 border-Yellow rounded-full">
        <Link href="/">
          <img
            src="img/Logo.png"
            className=" w-[65px] h-[65px] border border-black rounded-full"
            alt="Olativity"
          />
        </Link>
      </div>
      <ul className="flex  items-center justify-between">
        <li className="mx-2">
          <a
            href={"/#about"}
            className="hover:border-b-2 text-Yellow hover:border-Yellow px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            About
          </a>
        </li>
        <li className="mx-2">
          <a
            href="/#product"
            className="hover:border-b-2 text-Yellow hover:border-Yellow px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            Product
          </a>
        </li>
        <li className="mx-2 border-2 w-[85px] h-[40px] bg-Yellow border-black  rounded-full flex justify-center items-center ">
          <Link
            href="/Tutorial"
            className="hover:border-b-2 text-black hover:border-black font-bold text-base transition ease-in-out duration-500"
          >
            Tutorial
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
