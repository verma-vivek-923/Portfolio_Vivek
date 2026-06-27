import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import photo from "../../public/Photo.avif";
import resume from "../../public/Vivek_resume.pdf";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdDownload, MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

const SOCIALS = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/verma-vivek-923",
    label: "GitHub",
    color: "hover:text-white",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/vivek-verma-v022003",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "https://instagram.com/verma.vivek.022003",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  {
    icon: <SiGmail size={18} />,
    href: "mailto:verma022003@gmail.com",
    label: "Gmail",
    color: "hover:text-red-400",
  },
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "GitHub Repos", value: "20+" },
  { label: "Years Learning", value: "2+" },
];

const mobileStats = [...stats, ...stats];

const HomeSection = () => {
  return (
    <section
      name="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-10 w-full py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <div className="mono text-yellow-400/70 text-sm tracking-widest mb-3 flex items-center gap-2">
              <span className="inline-block w-8 h-[1px] bg-yellow-400/40" />
              FULL STACK DEVELOPER
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
              style={{ fontFamily: "Fredoka, sans-serif" }}
            >
              <span className="text-white">Hi, I'm</span>{" "}
              <span className="gradient-text">Vivek</span>
            </h1>

            <div className="text-2xl md:text-3xl mb-6 text-gray-300 flex items-center gap-2 flex-wrap">
              <span>I build</span>
              <span className="text-yellow-400 font-semibold">
                <ReactTyped
                  strings={[
                    "Web Applications",
                    "REST APIs",
                    "Chat Apps",
                    "Full Stack Projects",
                  ]}
                  typeSpeed={50}
                  backSpeed={35}
                  loop={true}
                />
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 text-base max-w-lg">
              A passionate Full Stack Developer from Indore, India, crafting
              scalable web experiences with the MERN stack. I love turning
              complex problems into clean, elegant solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="projects" smooth duration={500} offset={-70}>
                <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 active:scale-95 transition-all duration-200">
                  View Projects <MdArrowForward size={18} />
                </button>
              </Link>
              <a href={resume} download>
                <button className="flex items-center gap-2 px-6 py-3 border border-yellow-400/40 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400/10 active:scale-95 transition-all duration-200">
                  <MdDownload size={18} /> Resume
                </button>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-gray-500 ${s.color} transition-all duration-200 hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ x: 60, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 via-cyan-500/20 to-purple-500/20 blur-xl scale-110" />
              <img
                src={photo}
                alt="Vivek Verma"
                className="h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 border-4 object-cover object-center border-yellow-400 rounded-full animate-superman relative z-10"
              />
              {/* Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0b1a33] border border-yellow-400/30 px-4 py-1.5 rounded-full z-20 whitespace-nowrap">
                <span className="text-xs text-yellow-400 mono tracking-wider">
                  Available for hire ✓
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glow-card rounded-2xl p-5 text-center"
              >
                <div className="stat-number">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden overflow-hidden">
            <motion.div
              className="flex gap-4 w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {mobileStats.map((stat, index) => (
                <div
                  key={index}
                  className="glow-card w-36 flex-shrink-0 rounded-2xl p-4 text-center"
                >
                  <div className="stat-number text-2xl">{stat.value}</div>

                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
