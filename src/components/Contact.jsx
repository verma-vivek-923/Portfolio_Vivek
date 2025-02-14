import React from "react";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="container mx-auto py-10 text-center" id="contact">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">CONTACT ME</h1>
      
      <div
        className="flex justify-center gap-6"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a
          href="https://instagram.com/verma.vivek923"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-pink-500 hover:text-pink-600 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-blue-600 hover:text-blue-700 transition duration-300"
        >
          <CiFacebook />
        </a>
        <a
          href="https://https://www.linkedin.com/in/vivek-verma-v022003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-blue-500 hover:text-blue-600 transition duration-300"
        >
          <CiLinkedin />
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
          className="text-4xl text-gray-700 hover:text-black transition duration-300"
        >
          <FaGithubSquare />
        </a>
        <a
          href="mailto:web.vivek.022003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-red-500 hover:text-red-600 transition duration-300"
        >
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
