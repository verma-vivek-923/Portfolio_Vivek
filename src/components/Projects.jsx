import React from "react";
import projects from "../ProjectData/ProjectData";
import { Link } from "react-router-dom";

const Projects = () => {
  console.log(projects);

  return (
    <div className="max-w-screen-2xl shadow-sm py-2 container relative items-center justify-center mx-auto px-4 md:px-20">
      <div className="container mx-auto md:py-10" >
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">
          PROJECTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((data) => (
            <div
              key={data.id}
              className="bg-gray-900 text-white p-2  rounded-lg shadow-lg border  transform transition duration-500 hover:scale-105"
            >
              <Link  to={`/project/${data.id}`}>
                <div className="flex justify-center">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-64 h-40 object-cover rounded-lg border-2 border-yellow-400"
                  />
                </div>
                <div className="px-3 mt-2 ">
                  <h5 className="text-xl font-semibold">{data.title}</h5>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                    {data.description}
                  </p>
                </div>
              </Link>
              <div className="mt-4 mb-1 flex justify-end gap-4">
                <a
                  href={data.demo}
                  target="_blank"
                  className={`${data.demo ? "block" : "hidden" } bg-blue-500  cursor-pointer hover:bg-blue-600 text-white px-4 py-1 rounded-md`}
                >
                  Demo
                </a>
                <a
                  href={data.github}
                  target="_blank"
                  className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black px-4 py-1 rounded-md"
                >
                  Code
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
