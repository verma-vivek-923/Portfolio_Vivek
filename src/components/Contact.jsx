import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {

  return (
    <>
      <div
        name="contact"
         data-aos="zoom-in-up" data-aos-duration="700"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl flex items-center gap-2 font-bold text-yellow-400 mb-4">
          <FaPhoneVolume size={20} /> <span>Contact me</span>
          </h1>
        <span>Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/bdrnrneb"
            method="POST"
            className="bg-slate-700 w-full md:w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold text-yellow-400 mb-4">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block bg-transparent text-white">
                FullName
              </label>
              <input
                className="shadow rounded-lg bg-transparent border appearance-none border-yellow-400  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-white">Email Address</label>
              <input
                className="shadow rounded-lg bg-transparent border appearance-none border-yellow-400  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-white">Message</label>
              <textarea
                className="shadow rounded-lg bg-transparent border appearance-none border-yellow-400  py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
            </div>
            <button
              type="submit"
              className="bg-green-800 text-lg mt-2 text-white py-2 rounded-md hover:bg-green-700  px-3 w-full duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
