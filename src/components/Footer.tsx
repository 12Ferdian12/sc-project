import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-Brown2 bottom-0 px-3 pb-3 pt-5 text-Yellow border-t-2 border-Yellow">
      {/* <div className="flex space-x-96">
        <div className="pt-5 pl-3">
          <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow">
            Social
          </h1>
          <div className="########">
            <a href="">....@gmail.com</a>
            <a href="">+62</a>
          </div>
        </div>
        <div className="pt-5 pl-3">
          <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow">
            Buy Our Product
          </h1>
          <div className="########">
            <a href="">....@gmail.com</a>
            <a href="">+62</a>
          </div>
        </div>
        <div className="pt-5 pl-3">
          <h1 className="border-b-2 mb-2 w-[150px] font-semibold border-Yellow">
            Follow Us
          </h1>
          <div className="########">
            <a
              className=""
              href="https://www.instagram.com/olativity.sc/?igshid=MmU2YjMzNjRlOQ%3D%3D"
            >
              <AiFillInstagram size={35} />
            </a>
          </div>
        </div>
      </div> */}
      {/* <div className="flex">
        <div className="pt-[50px] pl-3 w-[400px]">
          <p className="font-">
            Jl.Wijaya Kusuma No.48, Kec.Genteng, Suarabaya, Jawa Timur 60272
          </p>
        </div>
        <div className="flex pt-[50px] mx-[180px] text-Yellow ">
          © {new Date().getFullYear()} By Ferdian
        </div>
      </div> */}
      <div className="flex lg:flex-col space-y-0 lg:space-y-6 ">
        <div className="flex-row space-y-5 lg:space-y-0 justify-around lg:flex">
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
              Social
            </h1>
            <div className="########">
              <a href="#">....@gmail.com</a>
              <a href="">+62</a>
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
            ...gmail.com
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
