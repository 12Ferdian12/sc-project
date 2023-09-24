import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className="flex bg-Brown2 bottom-0 h-[80px] border-t-2 border-amber-300 items-center ">
      <div className="text-amber-300 ">
        <div className="pl-3">
          <a className="" href="https://www.instagram.com/f_rdi_n/">
            <AiFillInstagram size={35} />
          </a>
        </div>
      </div>
      <div className="flex text-amber-300 mx-auto">
        © {new Date().getFullYear()} By Ferdian
      </div>
    </footer>
  );
}

export default Footer;
