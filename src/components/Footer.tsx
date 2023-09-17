import React from "react";

function Footer() {
  return (
    <footer className="flex bottom-0 h-[60px] border-t-2 border-black items-center ">
      <div className="">Social</div>
      <div className="flex mx-auto">
        © {new Date().getFullYear()} By Ferdian
      </div>
    </footer>
  );
}

export default Footer;
