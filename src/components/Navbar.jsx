import React, { useState } from "react";
import photo from "../../public/photo.avif";
import resume from "../../public/Vivek_resume.pdf";
import { ImBlogger } from "react-icons/im";
import {
  IoIosCloseCircleOutline,
  IoMdInformationCircle,
  IoMdPhotos,
} from "react-icons/io";
import { IoMenuOutline, IoHome } from "react-icons/io5";
import { FaPhoneVolume, FaUsersLine } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaRegListAlt } from "react-icons/fa";
import { motion } from "motion/react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <nav data-aos="fade-down"
      data-aos-duration="500"
      className="sticky top-0 left-0   max-w-screen-2xl  shadow-lg py-2 container z-50  mx-auto px-4 md:px-20">
        <div className="flex w-full items-center z-40 relative justify-between">
          <div className="flex  items-center">
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
                <Link to={"home"}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/"
                >
                  HOME
                </Link >
                <Link to={"projects"}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/blogs"
                >
                  PROJECTS
                </Link >

                <Link to={"about"}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/about"
                >
                  ABOUT
                </Link >
                <Link to={"contact"}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  href="#"
                  className=" hover:text-blue-600 hover:tracking-wider hover:font-semibold transition-all duration-300 px-2 py-1 text-1.5xl md:text-base rounded"
                  //"/contact"
                >
                  CONTACT US
                </Link >
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
            <div
              className={`absolute  shadow-lg bg-slate-800 rounded-b-lg w-full z-[-1] left-0  `}
            >
              <motion.ul
              // initial={{height:"0px"}}
              // animate={{height:"max-content"}}
              initial={{y:"10px"}}
              animate={{y:"0"}}
              transition={{duration:0.3}}
              className="z-10 flex flex-col px-4 pb-4 my-2  justify-center items-right md:hidden rounded-b-lg  text-xl space-y-1.5">
                <Link
                  to="home"
                  smooth={"true"}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setShow(!show)}
                  className="hover:text-blue-600 flex  items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline  px-2 py- text-base md:text-sm  rounded"
                >
                  <IoHome size={13} /> <span>HOME</span>
                </Link>
                <Link
                  to={"projects"}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setShow(!show)}
                  className="hover:text-blue-600 flex  items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline px-2 py- text-base md:text-sm  rounded"
                >
                  <FaRegListAlt size={14} /> <span> PROJECTS</span>
                </Link>
                <a  href={resume} download
                  onClick={() => setShow(!show)}
                  className="hover:text-blue-600 flex items-center  gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline px-2 py- text-base md:text-sm  rounded"
                >
                  <FaUsersLine size={14} />
                  <span>RESUME</span>
                </a >
                <Link
                  to={"about"}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setShow(!show)}
                  className="hover:text-blue-600 flex items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline  px-2 py- text-base md:text-sm  rounded"
                >
                  <IoMdInformationCircle size={14} />
                  <span>ABOUT</span>
                </Link>
                <Link
                  to={"contact"}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setShow(!show)}
                  className="hover:text-blue-600 flex items-center gap-2 duration-200 hover:font-semibold hover:tracking-wider hover:underline px-2 py- text-base md:text-sm  rounded"
                >
                  <FaPhoneVolume size={13} />
                  <span>CONTACT US</span>
                </Link>
              </motion.ul>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
