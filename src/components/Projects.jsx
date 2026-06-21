import React, { useState } from "react";
import projects from "../ProjectData/ProjectData";
import { Link } from "react-router-dom";
import { FaRegListAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const FILTERS = ["All", "MERN", "JavaScript", "React"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "MERN") return p.title.includes("MERN");
    if (filter === "JavaScript") return !p.title.includes("MERN") && !p.title.includes("React");
    if (filter === "React") return p.title.includes("React") || p.title.includes("MERN");
    return true;
  });

  const displayProjects = filter === "All" ? projects : filtered;

  return (
    <section
      name="projects"
      className="relative py-20 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="mono text-yellow-400/60 text-sm tracking-widest mb-2">WHAT I'VE BUILT</div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text section-heading">Projects</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-yellow-400 text-black"
                  : "border border-yellow-400/20 text-gray-400 hover:border-yellow-400/40 hover:text-yellow-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((data, i) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glow-card rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <Link to={`/project/${data.id}`}>
                <div className="relative overflow-hidden h-48">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent opacity-80" />
                  
                  {/* Live badge */}
                  {data.demo && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                      </span>
                      <span className="text-xs text-green-400">Live</span>
                    </div>
                  )}
                </div>
              </Link>

              {/* Content */}
              <div className="p-5">
                <Link to={`/project/${data.id}`}>
                  <h3 className="text-lg font-semibold text-white mb-2 hover:text-yellow-400 transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
                    {data.description.split("\n")[0].trim()}
                  </p>
                </Link>

                {/* Actions */}
                <div className="flex gap-3 pt-3 border-t border-white/5">
                  {data.demo && (
                    <a
                      href={data.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/20 transition-all active:scale-95"
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  )}
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 rounded-lg hover:bg-yellow-400/20 transition-all active:scale-95"
                  >
                    <FaGithub size={12} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/verma-vivek-923"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-400/30 text-yellow-400 rounded-xl hover:bg-yellow-400/10 transition-all duration-200"
          >
            <FaGithub size={18} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
