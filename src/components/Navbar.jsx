import React, { useState } from "react";
import photo from "../../public/photo.avif";

import { IoIosCloseCircleOutline, IoMdPhotos } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <nav className="sticky top-0 left-0   max-w-screen-2xl  shadow-lg py-2 container z-50  mx-auto px-4 md:px-20">
        <div className="flex w-full items-center relative justify-between">
          <div className="flex items-center">
            <div>
              <div className=" flex justify-center  mr-2">
                {/* <div
                  className={`flex border-2 border-orange-700 overflow-hidden  bg-blue-600 h-11 w-11 text-sm text-white font-semibold hover:bg-blue-800 duration-300 rounded-full`}
                >
                  <img
                    src={photo}
                    className="object-cover object-center animate-superman rounded-full"
                  />
                </div> */}
                <div className=" h-11 w-11  flex justify-center items-center  rounded-full  ">
                  {/* <img src={photo} alt="" className="object-cover object-center"/> */}
                  <img
                    src={photo}
                    alt="hero"
                    className="h-11 w-11 border-2 object-center object-cover border-yellow-400 rounded-full "
                  />
                </div>
              </div>
            </div>
            <div className="  flex flex-col justify-center font-semibold  text-left ">
              <h1 className="text-xl leading-4 ">Vivek Verma</h1>
              <h1 className="text-[10px]">Full Stack Developer</h1>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center ">
              <ul className="hidden md:flex space-x-4">
                <a
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/blogs"
                >
                  BLOGS
                </a>
                <a
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/creators"
                >
                  CREATORS
                </a>
                <a
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/about"
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/contact"
                >
                  CONTACT US
                </a>
              </ul>
            </div>
          </div>

          <div className={` block  md:hidden`}>
            <label className="btn btn-circle swap bg-transparent border-none text-white swap-rotate">
              <input type="checkbox" checked={show} />

              <IoMenuOutline
                className="swap-off"
                size={32}
                onClick={() => {
                  setShow(!show);
                }}
              />

              <IoIosCloseCircleOutline
                className="swap-on"
                size={32}
                onClick={() => {
                  setShow(!show);
                }}
              />
            </label>
          </div>

          {/* Mobile */}
        </div>
        {show && (
          <>
            <div className={`absolute shadow-lg mt-4 w-full left-0 z-50 `}>
              <ul className="z-50 flex flex-col px-4 pb-4 justify-center items-right md:hidden rounded-b-lg  text-xl space-y-1">
                <a
                  href="#"
                  className="hover:text-blue-600 flex  items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline  px-2 py- text-base md:text-sm  rounded"
                  // "/"
                >
                  <span>HOME</span>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 flex  items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline px-2 py- text-base md:text-sm  rounded"
                  // "/blogs"
                >
                  <span> BLOGS</span>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 flex items-center  gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline px-2 py- text-base md:text-sm  rounded"
                  // "/creators"
                >
                  <span>CREATORS</span>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 flex items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline  px-2 py- text-base md:text-sm  rounded"
                  // "/about"
                >
                  <span>ABOUT</span>
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 flex items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline px-2 py- text-base md:text-sm  rounded"
                  // "/contact"
                >
                  <span>CONTACT US</span>
                </a>
              </ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
