import React from "react";

function Navbar() {
  return (
    <nav className="sticky p-7 top-0 justify-between items-center flex bg-Brown border-b-2 border-amber-300 h-[70px]">
      <h1 className="font-bold text-lg">Olatifity</h1>
      <ul className="flex  items-center justify-between">
        <li className="mx-2">
          <a
            href="#"
            className="hover:border-b-2 text-amber-300 hover:border-amber-300 px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-150"
          >
            FAQ
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className="hover:border-b-2 text-amber-300 hover:border-amber-300 px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-150"
          >
            FAQ
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#"
            className="hover:border-b-2 text-amber-300 hover:border-amber-300 px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-150"
          >
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
