import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-Brown2 bottom-0 px-3 pb-3 pt-5 text-Yellow border-t-2 border-Yellow">
      <div className="hidden md:flex md:flex-col space-y-0 md:space-y-6 ">
        <div className="flex-row space-y-5 md:space-y-0 justify-around md:flex">
          <div className="">
            <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center">
              Follow Us
            </h1>
            <div className="flex justify-center items-center">
              <a
                className=""
                href="https://www.instagram.com/olativity.sc/?igshid=MmU2YjMzNjRlOQ%3D%3D"
              >
                <AiFillInstagram size={35} />
              </a>
              <a
                className=""
                href="https://www.instagram.com/olativity.sc/?igshid=MmU2YjMzNjRlOQ%3D%3D"
              >
                <FaTiktok size={33} />
              </a>
            </div>
          </div>
          <div className="">
            <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center">
              Buy Our Product
            </h1>
            <div className="########">
              <a href="">....@gmail.com</a>
              <a href="">+62</a>
            </div>
          </div>
        </div>
        <div className=" p-2">
          <p className="font-">
            Jl.Wijaya Kusuma No.48, Kec.Genteng, Suarabaya, Jawa Timur 60272
          </p>
          <a className="font-bold" href="mailto:olativity@gmail.com">
            olativity@gmail.com
          </a>
        </div>
      </div>

      <div className="flex-col md:hidden space-y-0 md:space-y-6 text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center ">
            Follow Us
          </h1>
          <div className="flex">
            <a
              className=""
              href="https://www.instagram.com/olativity.sc/?igshid=MmU2YjMzNjRlOQ%3D%3D"
            >
              <AiFillInstagram size={35} />
            </a>
            <a
              className=""
              href="https://www.instagram.com/olativity.sc/?igshid=MmU2YjMzNjRlOQ%3D%3D"
            >
              <FaTiktok size={33} />
            </a>
          </div>

          <div className="">
            <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow text-center">
              Buy Our Product
            </h1>
            <div className="########">
              <a href="">....@gmail.com</a>
              <a href="">+62</a>
            </div>
          </div>
        </div>

        <div className=" p-2">
          <p className="font-">
            Jl.Wijaya Kusuma No.48, Kec.Genteng, Suarabaya, Jawa Timur 60272
          </p>
          <a className="font-bold" href="mailto:olativity@gmail.com">
            olativity@gmail.com
          </a>
        </div>
      </div>
      <div className="flex justify-center text-Yellow">
        © {new Date().getFullYear()} By Ferdian
      </div>
    </footer>
  );
}

export default Footer;
