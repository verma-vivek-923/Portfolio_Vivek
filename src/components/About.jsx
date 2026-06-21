import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import photo from "../../public/Photo.avif";

const FACTS = [
  { icon: <FaMapMarkerAlt className="text-yellow-400" />, label: "Location", value: "Indore, Madhya Pradesh, India" },
  { icon: <FaGraduationCap className="text-cyan-400" />, label: "Education", value: "B.Tech in Computer Science" },
  { icon: <MdEmail className="text-pink-400" />, label: "Email", value: "web.vivek.022003@gmail.com" },
  { icon: <FaCode className="text-purple-400" />, label: "Focus", value: "MERN Stack & System Design" },
];

const INTERESTS = ["Open Source", "System Design", "Problem Solving", "UI/UX Design", "Chess", "Anime"];

const About = () => {
  return (
    <section name="about" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mono text-yellow-400/60 text-sm tracking-widest mb-2">GET TO KNOW ME</div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text section-heading">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – image + floating card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-cyan-500/20 rounded-2xl blur-2xl" />
              <img
                src={photo}
                alt="About Vivek"
                className="w-full h-full object-cover object-center rounded-2xl border border-yellow-400/20 relative z-10"
              />
              {/* Floating badge */}
              <div className="absolute -right-6 -bottom-6 bg-[#0f2244] border border-yellow-400/20 rounded-xl p-4 shadow-xl z-20">
                <div className="text-yellow-400 text-2xl font-bold mono">2+</div>
                <div className="text-gray-400 text-xs">Years of coding</div>
              </div>
              <div className="absolute -left-6 top-8 bg-[#0f2244] border border-cyan-400/20 rounded-xl p-4 shadow-xl z-20">
                <div className="text-cyan-400 text-2xl font-bold mono">10+</div>
                <div className="text-gray-400 text-xs">Projects Done</div>
              </div>
            </div>
          </motion.div>

          {/* Right – text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <h3 className="text-2xl text-white font-semibold">
              Building the future, one commit at a time 🚀
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a Full Stack Developer passionate about creating impactful web applications.
              My journey started with curiosity about how websites work, and now I build them 
              professionally — from database design to polished UIs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in the <span className="text-yellow-400 font-medium">MERN Stack</span> (MongoDB, Express, React, Node.js),
              with a strong focus on clean code, real-time features, and seamless user experiences.
              When I'm not coding, I'm exploring system design concepts or contributing to open source.
            </p>

            {/* Facts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex items-start gap-3 glow-card rounded-xl p-3">
                  <div className="mt-0.5">{fact.icon}</div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{fact.label}</div>
                    <div className="text-sm text-gray-200">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaHeart className="text-red-400" size={13} />
                <span className="text-gray-400 text-sm">Interests</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((i) => (
                  <span key={i} className="tech-badge">{i}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
