// import React from 'react'
// import Contact from '../components/Contact'
// import HomeSection from '../components/HomeSection'
// import Projects from '../components/Projects'

// const Home = () => {
//   return (
//     <div>
//       <nav className='w-full h-12 bg-red-800/40 fixed  z-10'>

//       </nav>
//         <HomeSection/>
//         <Projects/>
//         <Contact/>
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useRef, useState } from "react";
import Contact from "../components/Contact";
import HomeSection from "../components/HomeSection";
import Projects from "../components/Projects";
// import { motion } from "motion/react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("Home");

  const sectionRefs = {
    Home: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            console.log(sectionId);

            setCurrentSection(sectionId);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Sticky Title (hidden when current section is Home) */}
      {currentSection !== "Home" && (
        <AnimatePresence>
          <motion.div
            // initial={{ y: "-100%" }}
            // animate={{ y: 0 }}
            // exit={{ y: "-100%" }}
            // transition={{ duration: 0.3 }}
            key={currentSection}
            initial={{ y: 20, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -20, opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}

           
            className={`sticky md:px-4 lg:px-20 text-yellow-400 px-2 top-14 z-10 bg-slate-800 shadow-lg px-4 py-2 text-xl md:text-2xl font-semibold rounded-b-sm transition-opacity duration-300 ${
              currentSection === "Home"
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <motion.h1
              // key={currentSection}
              // initial={{ y: 20, opacity: 0, rotateX: -90 }}
              // animate={{ y: 0, opacity: 1, rotateX: 0 }}
              // exit={{ y: -20, opacity: 0, rotateX: 90 }}
              // transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {currentSection}
            </motion.h1>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Sections */}
      <div
        ref={sectionRefs.Home}
        data-section="Home"
        //  className="min-h-screen"
      >
        <HomeSection />
      </div>

      <div
        ref={sectionRefs.Projects}
        data-section="Projects"
        className="min-h-screen"
      >
        <Projects />
      </div>

      <div
        ref={sectionRefs.Contact}
        data-section="Contact Me"
        // className="min-h-screen"
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
