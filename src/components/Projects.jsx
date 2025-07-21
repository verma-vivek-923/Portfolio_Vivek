import React from "react";
import projects from "../ProjectData/ProjectData";
import { Link } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";

const Projects = () => {
  console.log(projects);

  return (
    <div
      name="projects"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="max-w-screen-2xl mt-6 shadow-sm py-2 container relative items-center justify-center mx-auto px-4 md:px-24"
    >
      <div className="container mx-auto md:py-10">
        <h1 className="text-3xl ml-3 md:ml-8 flex items-center gap-2 font-bold text-center text-yellow-400 mb-6">
          <FaRegListAlt size={30} /> <span>Projects</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((data) => (
            <div
              key={data.id}
              className="bg-gray-900 text-white p-2  rounded-lg shadow-lg border  transform transition duration-300 hover:scale-105"
            >
              <Link to={`/project/${data.id}`}>
                <div className="relative px-1 flex justify-center">
                  <div className="relative w-auto h-40">
                    <img
                      src={data.image}
                      alt={data.title}
                      className=" object-cover w-full h-full rounded-lg border-2 border-yellow-400"
                    />
                    <label
                      className={`${
                        data.demo ? "flex" : "hidden"
                      } absolute  items-center text-xs    text-red-800 gap-1 top-2 left-4`}
                    >
                      <span class="relative flex size-2.5">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-800 opacity-75"></span>
                        <span class="relative inline-flex size-2.5 rounded-full bg-red-500"></span>
                      </span>
                      <span>Live</span>
                    </label>
                  </div>
                  {/* <span className="absolute left-4 animate-ping top-2 rounded-full w-2 h-2 bg-green-700"></span> */}
                </div>
                <div className="px-3 mt-2 ">
                  <h5 className="text-xl font-semibold">{data.title}</h5>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </Link>
              <div className="mt-4 mb-1 text-sm px-4 flex justify-end gap-4">
                <a
                  href={data.demo}
                  target="_blank"
                  className={`${
                    data.demo ? "block" : "hidden"
                  }  active:scale-95 bg-blue-500  cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded-md`}
                >
                  Live Demo
                </a>
                <a
                  href={data.github}
                  target="_blank"
                  className="active:scale-95 bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black px-2 py-1 rounded-md"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
