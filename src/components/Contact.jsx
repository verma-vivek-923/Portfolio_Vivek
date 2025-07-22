import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram, FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import SocialAppConnect from "./contactPageComponents/SocialAppConnect";
import Form from "./contactPageComponents/Form";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        data-aos="zoom-in-up"
        data-aos-duration="700"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 "
      >
        <h1 className="text-3xl flex items-center gap-2 font-bold text-yellow-400 mb-4">
          <FaPhoneVolume size={20} /> <span>Contact me</span>
        </h1>
        {/* <span>Please fill out the form below to contact me</span> */}
        <div className=" flex flex-col md:flex-row  gap-2  md:items-start justify-evenly">
          <div>
             <SocialAppConnect/>
          </div>
         
          <Form/>
        </div>
      </div>
    </>
  );
};

export default Contact;
