import React from "react";

function Footer() {
  return (
    <footer className="flex bg-Brown2 bottom-0 h-[60px] border-t-2 border-amber-300 items-center ">
      <div className="text-amber-300 ">Social</div>
      <div className="flex text-amber-300 mx-auto">
        © {new Date().getFullYear()} By Ferdian
      </div>
    </footer>
  );
}

export default Footer;
