import React from "react";
import { IoHome } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import projects from "../ProjectData/ProjectData";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const data = projects.find((e) => e.id === parseInt(id));

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-gray-400">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6">
          <FaArrowLeft size={14} /> Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glow-card rounded-2xl overflow-hidden"
        >
          {/* Video */}
          {data.video && (
            <video controls autoPlay muted className="w-full max-h-96 object-cover bg-black">
              <source src={data.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{data.title}</h1>
                <div className="flex items-center gap-2">
                  {data.demo && (
                    <span className="flex items-center gap-1.5 text-xs text-green-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                      </span>
                      Live
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                {data.demo && (
                  <a
                    href={data.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-all text-sm"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-xl hover:bg-yellow-400/20 transition-all text-sm"
                >
                  <FaGithub size={14} /> Source Code
                </a>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6">
              <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-3">About This Project</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{data.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
