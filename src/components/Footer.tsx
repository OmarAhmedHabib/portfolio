'use client';

import React from 'react';
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a192f] to-[#020c1b] text-[#e6f1ff] relative overflow-hidden py-20 font-sans">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(100,255,218,0.05)_0%,_transparent_70%)] top-[-100px] right-[-100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[15px_15px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Top */}
        <div className="flex flex-wrap justify-between items-center gap-6 pb-12 border-b border-[#64ffda1a]">
          <div>
            <h2 className="text-3xl font-bold text-[#e6f1ff]">
              Omar<span className="text-[#64ffda]">Habib</span>
            </h2>
            <p className="text-sm text-[#8892b0]">Frontend Architect & UI Specialist</p>
          </div>

          <div className="text-right">
            <h3 className="text-lg font-medium text-[#e6f1ff] mb-2">Ready to start your project?</h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#64ffda] to-[#6e45e2] text-[#0a192f] px-6 py-3 rounded-full font-semibold shadow-lg hover:translate-y-[-3px] transition"
            >
              <FaPaperPlane /> Get In Touch
            </a>
          </div>
        </div>

        {/* Middle */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 py-12">
          {/* Navigation */}
          <div>
            <h4 className="text-[#64ffda] font-semibold text-base mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#64ffda]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#ccd6f6]">
              <li><a href="#home" className="hover:text-[#64ffda] transition">Home</a></li>
              <li><a href="#portfiolo" className="hover:text-[#64ffda] transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-[#64ffda] transition">Skills</a></li>
              <li><a href="#experience" className="hover:text-[#64ffda] transition">Experience</a></li>
              <li><a href="#contact" className="hover:text-[#64ffda] transition">Contact</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-[#64ffda] font-semibold text-base mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#64ffda]">
              Technologies
            </h4>
            <ul className="space-y-2 text-sm text-[#ccd6f6]">
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>UI/UX Design</li>
              <li>Web Animation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#64ffda] font-semibold text-base mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#64ffda]">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-[#ccd6f6]">
              <li className="flex items-center gap-2"><FaEnvelope className="text-[#64ffda]" /> omarahmedhabib6@gmail.com</li>
              <li className="flex items-center gap-2"><FaPhone className="text-[#64ffda]" /> +20 1144629507</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#64ffda]" /> Cairo, Egypt</li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-[#64ffda] font-semibold text-base mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#64ffda]">
              Follow Me
            </h4>
            <div className="flex gap-3 mb-4">
              <a href="https://www.linkedin.com/in/omar-ahmed-124987171/" target="_blank" className="social-link bg-[#0077b5] hover:-translate-y-1 transition p-2 rounded-full text-white">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/OmarAhmedHabib" target="_blank" className="social-link bg-[#333] hover:-translate-y-1 transition p-2 rounded-full text-white">
                <FaGithub />
              </a>
              <a href="https://wa.me/20144629507" target="_blank" className="social-link bg-[#1da1f2] hover:-translate-y-1 transition p-2 rounded-full text-white">
                <FaWhatsapp />
              </a>
              <a href="mailto:omarahmedhabib6@gmail.com" className="social-link bg-[#ea4c89] hover:-translate-y-1 transition p-2 rounded-full text-white">
                <FaEnvelope />
              </a>
            </div>

            <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l bg-white/10 text-white placeholder:text-white/60 outline-none"
              />
              <button type="submit" className="bg-[#64ffda] text-[#0a192f] px-4 rounded-r hover:bg-[#6e45e2] hover:text-white transition">
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-[#64ffda1a] pt-6 text-sm text-[#8892b0]">
          <div>&copy; {new Date().getFullYear()} Omar Habib. All rights reserved.</div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-[#64ffda]">Privacy Policy</a>
            <a href="#" className="hover:text-[#64ffda]">Terms of Service</a>
            <a href="#" className="hover:text-[#64ffda]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
