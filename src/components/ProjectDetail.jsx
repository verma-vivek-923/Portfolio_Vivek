import React from "react";
import { IoHome } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import projects from "../ProjectData/ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();

  const data = projects.find((e) => e.id === parseInt(id));
  console.log(data);

  if (!data) {
    return <h2 className="text-center text-2xl">Project not found</h2>;
  }

  return (
    <div>
      <div className="min-h-screen flex relative justify-center pt-8 items-start">
        <Link
          to={"/"}
          className=" absolute  top-4  left-4 px-2 md:px-10 flex  items-center space-x-1"
        >
          <IoHome />
          <span>Home</span>
        </Link>
        <div className="group w-full mt-2 bg-gray-900 max-w-3xl p-4 shadow-2xl rounded-md  mx-auto">
          {data ? (
            <div>
              <div className="relative ">
                {/* <img
                  className="w-full h-80 object-cover rounded-lg mb-2 transition-all  border border-yellow-400 ease-in-out"
                  src={data?.image}
                  alt="blog image"
                /> */}
                <video controls autoPlay muted className="w-full rounded-lg mt-4">
                  <source src={data.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* <div className="absolute w-full h-full rounded-md inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20  transition-transform duration-300 "></div> */}
              </div>

              <div>
                <div className="flex justify-between mt-2 px-4">
                  <h1 className="text-xl md:text-2xl lg:text-3xl capitalize font-semibold text-yellow-500">
                    {data?.title}
                  </h1>
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
                <div className="mt-3 border-t border-gray-300" />
              </div>
              <div className="mt-6 mb-12 text-gray-400">
                {data?.description}
              </div>
            </div>
          ) : (
            <div className="h-96 flex px-2 py-4 justify-center">
              {/* <span className="loading loading-spinner loading-lg"></span> */}
              <div className="flex w-full justify-center flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="skeleton h-36 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                  </div>
                </div>

                <div className="flex flex-col pr-8 gap-4 items-start">
                  <div className="skeleton h-4  w-full"></div>
                  <div className="skeleton h-4  w-full"></div>
                  <div className="skeleton h-4  w-full"></div>
                  <div className="skeleton h-4  w-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
