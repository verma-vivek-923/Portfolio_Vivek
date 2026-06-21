import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiSocketdotio, SiRedux, SiPostman, SiVercel } from "react-icons/si";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", level: 88, icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", level: 85, icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", level: 92, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "Redux", level: 72, icon: <SiRedux className="text-purple-400" /> },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 83, icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express.js", level: 85, icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-500" /> },
      { name: "Socket.io", level: 75, icon: <SiSocketdotio className="text-white" /> },
      { name: "Python", level: 65, icon: <FaPython className="text-yellow-300" /> },
      { name: "REST APIs", level: 88, icon: <SiPostman className="text-orange-400" /> },
    ],
  },
  {
    label: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 88, icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Docker", level: 55, icon: <FaDocker className="text-blue-400" /> },
      { name: "Vercel", level: 82, icon: <SiVercel className="text-white" /> },
      { name: "TypeScript", level: 60, icon: <SiTypescript className="text-blue-400" /> },
    ],
  },
];

const TECH_STACK = [
  { icon: <FaReact size={28} className="text-cyan-400" />, name: "React" },
  { icon: <FaNodeJs size={28} className="text-green-400" />, name: "Node.js" },
  { icon: <SiMongodb size={28} className="text-green-500" />, name: "MongoDB" },
  { icon: <SiExpress size={28} className="text-gray-300" />, name: "Express" },
  { icon: <SiJavascript size={28} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTailwindcss size={28} className="text-cyan-300" />, name: "Tailwind" },
  { icon: <FaGitAlt size={28} className="text-orange-500" />, name: "Git" },
  { icon: <SiSocketdotio size={28} className="text-white" />, name: "Socket.io" },
];

const Skills = () => {
  const [active, setActive] = useState("Frontend");

  return (
    <section name="skills" className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mono text-yellow-400/60 text-sm tracking-widest mb-2">WHAT I WORK WITH</div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text section-heading">Skills & Technologies</h2>
        </motion.div>

        {/* Scrolling tech icons */}
        <div className="overflow-hidden mb-12">
          <div className="flex gap-8 animate-[scroll_20s_linear_infinite]" style={{ width: 'max-content' }}>
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-2 glow-card px-6 py-4 rounded-xl">
                {tech.icon}
                <span className="text-xs text-gray-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat.label
                  ? "bg-yellow-400 text-black"
                  : "border border-yellow-400/20 text-gray-400 hover:border-yellow-400/40 hover:text-yellow-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          {SKILL_CATEGORIES.find((c) => c.label === active)?.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="glow-card rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span>{skill.icon}</span>
                  <span className="text-sm text-gray-200">{skill.name}</span>
                </div>
                <span className="mono text-xs text-yellow-400">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
