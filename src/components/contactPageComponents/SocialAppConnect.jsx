import React from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TfiLocationPin } from "react-icons/tfi";
import { CgMail } from "react-icons/cg";

const SocialAppConnect = () => {
  return (
    <div className="space-y-4 mt-12  ">
      <div className="space-y-1 ">
        <h1 className="text-4xl">Let's Build Together </h1>
        <div className="px-4 ">
          <span className="flex items-center gap-1">
            <TfiLocationPin />
            <span>Indore,India</span>
          </span>
          <a
            href="mailto:web.vivek.022003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 hover:text-red-500 hover:text-red-600 transition duration-300"
          >
            <CgMail />
            <span>web.vivek.022003@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="flex lg:ml-16 text-xl lg:flex-col gap-4 lg:gap-0 my-4 justify-center">
        <a
          href="https://instagram.com/verma.vivek923"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center gap-2 hover:text-pink-500 hover:text-pink-600 transition duration-300"
        >
          <FaInstagram />
          <span className="hidden lg:block">Instagram</span>
        </a>
        {/* <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl text-blue-600 hover:text-blue-700 transition duration-300"
      >
        <CiFacebook />
      </a> */}
        <a
          href="https://https://www.linkedin.com/in/vivek-verma-v022003"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center gap-2 hover:text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <CiLinkedin />
          <span className="hidden lg:block">LinkedIn</span>
        </a>
        {/* <a
                         href="https://www.google.com"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-4xl text-black hover:text-gray-800 transition duration-300"
                       >
                         <FaSquareXTwitter />
                       </a> */}
        <a
          href="https://https://github.com/verma-vivek-923"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center gap-2 hover:text-gray-700 hover:text-black transition duration-300"
        >
          <FaGithubSquare />
          <span className="hidden lg:block">GitHub</span>
        </a>
        <a
          href="mailto:web.vivek.022003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center gap-2 hover:text-red-500 hover:text-red-600 transition duration-300"
        >
          <CgMail />
          <span className="hidden lg:block">web.vivek.022003@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default SocialAppConnect;
