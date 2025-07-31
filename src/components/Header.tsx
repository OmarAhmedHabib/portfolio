"use client";

import React, { useEffect, useRef } from "react";

const Header = () => {
  const rotatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const roles = [
      "Frontend Developer",
      "React Specialist",
      "UI/UX Designer",
      "JavaScript Engineer",
      "Developer",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      const element = rotatorRef.current;
      if (!element) return;

      if (isDeleting) {
        element.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        element.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
<header className="lg:h-[49rem] flex items-center py-5 px-20 relative overflow-hidden bg-gradient-to-br bg-[#0f0c29]">
      <div className="absolute inset-0 z-0 opacity-60 bg-[radial-gradient(circle_at_75%_30%,rgba(100,255,218,0.08)_0%,transparent_30%),url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\' opacity=\'0.03\'><path fill=\'%2364ffda\' d=\'M40-10h20v20H40zM80-10h20v20H80zM120-10h20v20h-20zM160-10h20v20h-20zM0 30h20v20H0zM40 30h20v20H40zM80 30h20v20H80zM120 30h20v20h-20zM160 30h20v20h-20zM0 70h20v20H0zM40 70h20v20H40zM80 70h20v20H80zM120 70h20v20h-20zM160 70h20v20h-20zM0 110h20v20H0zM40 110h20v20H40zM80 110h20v20H80zM120 110h20v20h-20zM160 110h20v20h-20z\'/></svg>')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:py-20">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <span className="inline-block text-[#64ffda] bg-[#64ffda1a] border border-[#64ffda4d] rounded-full px-4 py-2 text-sm font-medium mb-5 w-fit">
            Frontend Wizard
          </span>

          <h1 className="text-4xl md:text-5xl  font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-[#64ffda] to-[#2979ff] text-transparent bg-clip-text">
              Omar
            </span>{" "}
            Habib
          </h1>

          <div className="flex items-center min-h-[60px] mb-4">
            <span
              ref={rotatorRef}
              className="text-[#64ffda] text-2xl font-semibold mr-2"
            ></span>
            <span className="text-[#64ffda] text-2xl animate-pulse">|</span>
          </div>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            I transform ideas into <strong>interactive experiences</strong>.
            JavaScript architect specializing in <strong>React</strong>,{" "}
            <strong>Vue</strong>, and cutting-edge web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#64ffda] text-black px-5 py-3 rounded-full font-medium hover:opacity-90 transition flex items-center gap-2"
            >
              <i className="fas fa-code"></i> Explore My Work
            </a>
            <a
              href="#contact"
              className="border border-[#64ffda] text-[#64ffda] px-5 py-3 rounded-full font-medium hover:bg-[#64ffda1a] transition flex items-center gap-2"
            >
              <i className="fas fa-paper-plane"></i>[Let's Talk]
            </a>
          </div>
        </div>

        {/* Right */}
      <div className="flex flex-col items-center mb-50"> 
          <div className="w-full bg-[#0a192f] rounded-lg shadow-lg border border-[#64ffda1a] mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0a192f]/80 border-b border-[#64ffda1a]">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="p-4 text-sm text-green-300 font-mono whitespace-pre-wrap">
              {`import React from 'react';
import { creativity, precision } from 'my-skills';

const MyPortfolio = () => (
  <div className="awesome-website">
    <Header innovative />
    <InteractiveComponents />
    <SmoothAnimations />
    <Footer cleanDesign />
  </div>
);

export default MyPortfolio;`}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3  text-white text-sm font-medium">
            {[
              ["fab fa-html5", "HTML5"],
              ["fab fa-css3-alt", "CSS3"],
              ["fab fa-bootstrap", "Bootstrap"],
              ["fab fa-js", "JavaScript"],
              ["fab fa-react", "React"],
              ["fas fa-server", "Next.js"],
              ["fas fa-laravel", "Laravel"],
              ["fab fa-php", "PHP"],
              ["fas fa-database", "MySQL"],
            ].map(([icon, label], index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-white/10 px-4 py-3 mt-2 rounded-full bg-white/5 hover:-translate-y-1 transition"
              >
                <i className={icon}></i>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


