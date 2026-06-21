import React, { useState, useEffect } from "react";
import photo from "../../public/Photo.avif";
import resume from "../../public/Vivek_resume.pdf";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMenuOutline, IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaRegListAlt, FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdDownload } from "react-icons/md";

const NAV_LINKS = [
  { to: "home", label: "HOME", icon: <IoHome size={13} /> },
  { to: "about", label: "ABOUT", icon: <FaUser size={12} /> },
  { to: "skills", label: "SKILLS", icon: <FaCode size={12} /> },
  { to: "experience", label: "EXPERIENCE", icon: <FaBriefcase size={12} /> },
  { to: "projects", label: "PROJECTS", icon: <FaRegListAlt size={13} /> },
  { to: "contact", label: "CONTACT", icon: <FaPhoneVolume size={12} /> },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#060d1aee] backdrop-blur-md border-b border-yellow-400/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={photo}
              alt="Vivek"
              className="h-10 w-10 border-2 object-cover object-center border-yellow-400 rounded-full animate-superman"
            />
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Vivek Verma
            </p>
            <p className="text-[10px] text-yellow-400/80 tracking-widest uppercase mono">
              Full Stack Dev
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-yellow-400"
                className="px-3 py-1.5 text-[13px] tracking-widest text-gray-300 hover:text-yellow-400 transition-all duration-200 cursor-pointer rounded-md hover:bg-yellow-400/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={resume}
            download
            className="flex items-center gap-2 px-4 py-1.5 text-sm text-black bg-yellow-400 hover:bg-yellow-300 rounded-lg font-semibold transition-all duration-200 active:scale-95"
          >
            <MdDownload size={16} />
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setShow(!show)}
          aria-label="Toggle menu"
        >
          {show ? <IoIosCloseCircleOutline size={28} /> : <IoMenuOutline size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0b1a33] border-t border-yellow-400/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setShow(false)}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-yellow-400 transition-colors py-1 cursor-pointer"
                  >
                    <span className="text-yellow-400/60">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-yellow-400/10">
                <a
                  href={resume}
                  download
                  onClick={() => setShow(false)}
                  className="flex items-center gap-2 text-sm font-semibold text-black bg-yellow-400 px-4 py-2 rounded-lg w-max"
                >
                  <MdDownload size={15} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
