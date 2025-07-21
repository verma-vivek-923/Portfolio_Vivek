import React from "react";
import { ReactTyped } from "react-typed";
import photo from "../../public/Photo.avif";
import resume from "../../public/Vivek_resume.pdf";

const HomeSection = () => {
  return (
    <div name="home" className="max-w-screen-2xl flex-col-reverse shadow-sm py-2 container relative items-center justify-center mx-auto px-4 md:px-20">
      <div className="flex flex-col md:flex-row">
        <div data-aos="fade-up-right" data-aos-duration="1000" className="flex flex-col justify-center order-2 md:order-1 md:ml-12 md:mt-16 w-full md:w-1/2 -translate-y-6 md:translate-y-0">
          <div className="flex flex-col text-xl">
            <span className="text-2xl md:text-3xl">Hello, It's Me</span>
            <h1 className="text-5xl md:text-7xl mb-2">Vivek Verma</h1>
            <div className="text-4xl">
              <span className="text-3xl md:text-4xl">And I am a </span>
              <span className="text-red-600 text-3xl md:text-5xl">
                <ReactTyped
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </div>
          </div>
          <a href={resume} download>
            <button className="bg-red-600 rounded-lg mt-4 w-max py-1 px-4">
              Download Resume
            </button>
          </a>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="1000" className="flex justify-end md:justify-center order-1 items-center md:mt-16 w-ful md:w-1/2">
          <div className=" h-56 w-56 md:h-72 md:w-72 flex justify-center items-center   rounded-full  ">
            {/* <img src={photo} alt="" className="object-cover object-center"/> */}
            <img
              src={photo}
              alt="hero"
              className="h-[200px] w-[200px] md:h-[270px] md:w-[270px] border-2 object-center object-cover border-yellow-400 rounded-full animate-superman"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
