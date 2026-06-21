import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const SOCIALS = [
  { icon: <FaGithub size={20} />, label: "GitHub", href: "https://github.com/verma-vivek-923", color: "hover:bg-white/10 hover:text-white" },
  { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/vivek-verma-v022003", color: "hover:bg-blue-500/10 hover:text-blue-400" },
  { icon: <FaInstagram size={20} />, label: "Instagram", href: "https://instagram.com/verma.vivek923", color: "hover:bg-pink-500/10 hover:text-pink-400" },
];

const Contact = () => {
  return (
    <section name="contact" className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mono text-yellow-400/60 text-sm tracking-widest mb-2">GET IN TOUCH</div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text section-heading">Contact Me</h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Let's Build Together 🚀</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently open to freelance work and full-time opportunities. 
                Whether it's a MERN project, API design, or something entirely new — let's talk!
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:web.vivek.022003@gmail.com"
                className="flex items-center gap-4 glow-card rounded-xl p-4 hover:border-yellow-400/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400/20 transition-all">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                  <div className="text-sm text-gray-200">web.vivek.022003@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 glow-card rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm text-gray-200">Indore, Madhya Pradesh, India</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-3 uppercase tracking-widest">Find me on</div>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 border border-white/10 rounded-xl text-gray-400 text-sm transition-all duration-200 ${s.color}`}
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://getform.io/f/bdrnrneb"
              method="POST"
              className="glow-card rounded-2xl p-7 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project discussion / Hire me"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl transition-all duration-200 active:scale-95"
              >
                <MdSend size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
