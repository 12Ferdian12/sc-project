"use client";

import Link from "next/link";
import React from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
      <div>
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-black border-black hover:text-Yellow hover:border-Yellow"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {navbarOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 14H3V12H17V14ZM17 9H3V7H17V9ZM17 4H3V2H17V4Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 5C2 4.44772 2.44772 4 3 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H3C2.44772 6 2 5.55228 2 5ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H3ZM3 16C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16H3Z"
              />
            )}
          </svg>
        </button>
        <ul className={`hidden lg:flex items-center justify-between`}>
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
      </div>

      {/* create me menu with vertical when humberger menu open */}
      <ul
        className={`${
          navbarOpen ? "flex" : "hidden"
        } lg:hidden flex-col items-center justify-center w-full h-full bg-Brown2`}
      >
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
