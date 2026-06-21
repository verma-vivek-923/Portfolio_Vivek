import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#060d1a]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Vivek Verma
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer building impactful web applications with the MERN stack.
              Open to collaboration and opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Quick Links</div>
            <ul className="space-y-2">
              {["home", "about", "skills", "experience", "projects", "contact"].map((s) => (
                <li key={s}>
                  <Link
                    to={s}
                    smooth
                    duration={500}
                    offset={-70}
                    className="text-gray-400 hover:text-yellow-400 text-sm capitalize transition-colors cursor-pointer"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">Connect</div>
            <div className="flex flex-col gap-3">
              {[
                { icon: <FaGithub size={16} />, label: "verma-vivek-923", href: "https://github.com/verma-vivek-923" },
                { icon: <FaLinkedin size={16} />, label: "vivek-verma-v022003", href: "https://www.linkedin.com/in/vivek-verma-v022003" },
                { icon: <FaInstagram size={16} />, label: "verma.vivek923", href: "https://instagram.com/verma.vivek923" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600">
          <span>© 2025 Vivek Verma. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500 mx-1" size={12} /> in Indore, India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
