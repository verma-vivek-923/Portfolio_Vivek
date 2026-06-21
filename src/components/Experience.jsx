import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const EXPERIENCE = [
  {
    type: "work",
    title: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    period: "Jan 2024 – Present",
    location: "Indore, India (Remote)",
    desc: "Built and deployed multiple full-stack web applications for clients using the MERN stack. Developed real-time chat features with Socket.io, REST APIs, and JWT authentication.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    type: "work",
    title: "Open Source Contributor",
    company: "GitHub",
    period: "Aug 2023 – Present",
    location: "Remote",
    desc: "Actively maintaining personal open-source projects including a MERN chat app, blogging platform, and bookstore app. Solved issues and improved documentation for community projects.",
    tags: ["React", "Express", "GitHub", "REST APIs"],
  },
];

const EDUCATION = [
  {
    type: "edu",
    title: "B.Tech – Computer Science & Engineering",
    company: "Institute of Engineering & Technology, DAVV",
    period: "2021 – 2025",
    location: "Indore, MP, India",
    desc: "Studied core CS fundamentals: Data Structures, Algorithms, DBMS, OS, CN, and Software Engineering. Developed multiple full-stack projects as part of curriculum and personal interest.",
    tags: ["DSA", "DBMS", "OS", "Networking"],
  },
  {
    type: "edu",
    title: "Higher Secondary (12th) – PCM",
    company: "Sanjay Gandhi Higher Secondary School",
    period: "2019 – 2021",
    location: "Indore, MP, India",
    desc: "Completed with distinction. Developed an early interest in computers and programming during this phase.",
    tags: ["Mathematics", "Physics", "Chemistry"],
  },
];

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: item.type === "work" ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-4"
  >
    {/* Icon column */}
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 ${
        item.type === "work"
          ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-400"
          : "border-cyan-400/40 bg-cyan-400/10 text-cyan-400"
      }`}>
        {item.type === "work" ? <FaBriefcase size={16} /> : <FaGraduationCap size={16} />}
      </div>
      {index < (item.type === "work" ? EXPERIENCE.length : EDUCATION.length) - 1 && (
        <div className="timeline-line mt-1" />
      )}
    </div>

    {/* Content */}
    <div className="glow-card rounded-xl p-5 mb-5 flex-1">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div>
          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
          <div className={`text-sm font-medium ${item.type === "work" ? "text-yellow-400" : "text-cyan-400"}`}>
            {item.company}
          </div>
        </div>
        <div className="text-right">
          <div className="mono text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">{item.period}</div>
          <div className="text-xs text-gray-500 mt-1">{item.location}</div>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section name="experience" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/4 rounded-full blur-3xl" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mono text-yellow-400/60 text-sm tracking-widest mb-2">MY JOURNEY</div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text section-heading">Experience & Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-yellow-400 mb-6">
              <FaBriefcase size={18} /> Work Experience
            </h3>
            <div>
              {EXPERIENCE.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-cyan-400 mb-6">
              <FaGraduationCap size={18} /> Education
            </h3>
            <div>
              {EDUCATION.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
