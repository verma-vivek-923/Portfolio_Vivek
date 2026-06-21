import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TESTIMONIALS = [
  {
    name: "Aryan Sharma",
    role: "Project Partner – QuickTalk",
    avatar: "AS",
    color: "bg-cyan-500",
    rating: 5,
    text: "Vivek built our real-time chat system from scratch in record time. His understanding of Socket.io and the MERN stack is exceptional. The code was clean, well-documented, and deployment was seamless.",
  },
  {
    name: "Priya Patel",
    role: "Team Lead – Library App",
    avatar: "PP",
    color: "bg-purple-500",
    rating: 5,
    text: "Working with Vivek was a great experience. He delivered the full-stack bookstore app with all features including auth, dark mode, and responsive UI — exactly as planned, ahead of schedule.",
  },
  {
    name: "Rahul Gupta",
    role: "Client – CoolBlog Platform",
    avatar: "RG",
    color: "bg-yellow-500",
    rating: 5,
    text: "The blogging platform Vivek built exceeded our expectations. He implemented admin controls, responsive design, and an intuitive editor. His attention to UX details was remarkable.",
  },
  {
    name: "Sneha Verma",
    role: "Classmate & Collaborator",
    avatar: "SV",
    color: "bg-pink-500",
    rating: 5,
    text: "Vivek has an incredible ability to break down complex problems. Whether it's debugging or system design, his approach is always methodical and collaborative. A fantastic developer to work with.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1a33]/30 to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mono text-yellow-400/60 text-sm tracking-widest mb-2">KIND WORDS</div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text section-heading">Testimonials</h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="glow-card rounded-2xl p-8 text-center"
            >
              <FaQuoteLeft className="text-yellow-400/30 mx-auto mb-4" size={36} />

              <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
                "{TESTIMONIALS[current].text}"
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={14} />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className={`w-12 h-12 rounded-full ${TESTIMONIALS[current].color} flex items-center justify-center text-white font-bold text-sm`}>
                  {TESTIMONIALS[current].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{TESTIMONIALS[current].name}</div>
                  <div className="text-gray-500 text-xs">{TESTIMONIALS[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-yellow-400/20 flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition-all"
            >
              <FaChevronLeft size={14} />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-yellow-400" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-yellow-400/20 flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition-all"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
