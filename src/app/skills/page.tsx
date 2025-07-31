"use client";

import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaServer,
  FaPaintBrush,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiLaravel,
  SiAdobexd,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-3xl text-[#00d8ff]" />,
    list: [
      { name: "React.js", level: 95, icon: <FaReact className="text-[#00d8ff]" /> },
      { name: "Next.js", level: 90, icon: <SiNextdotjs className="text-white" /> },
      { name: "JavaScript", level: 92, icon: <SiJavascript className="text-[#f0db4f]" /> },
      {
        name: "HTML & CSS",
        level: 98,
        icon: <span className="text-[#e34f26] font-bold">{"</>"}</span>,
      },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-3xl text-[#68a063]" />,
    list: [
      { name: "Node.js", level: 85, icon: <FaNodeJs className="text-[#68a063]" /> },
      { name: "Laravel", level: 80, icon: <SiLaravel className="text-[#ff2d20]" /> },
      {
        name: "PHP",
        level: 75,
        icon: <span className="text-[#777bb3] font-bold">PHP</span>,
      },
      {
        name: "MySQL",
        level: 78,
        icon: <span className="text-[#00758f] font-bold">SQL</span>,
      },
    ],
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-3xl text-[#a259ff]" />,
    list: [
      { name: "Figma", level: 88, icon: <FaFigma className="text-[#a259ff]" /> },
      { name: "Adobe XD", level: 82, icon: <SiAdobexd className="text-[#ff61f6]" /> },
      {
        name: "Responsive Design",
        level: 95,
        icon: <span className="text-[#3ddc84]">📱</span>,
      },
      {
        name: "Web Animation",
        level: 90,
        icon: <span className="text-[#ffde16]">🎬</span>,
      },
    ],
  },
];

const SkillsSection = () => {
  const progressRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const animateBars = () => {
      progressRefs.current.forEach((bar, i) => {
        if (bar) {
          const level = bar.getAttribute("data-level");
          if (level) {
            setTimeout(() => {
              bar.style.width = level;
            }, 300 + i * 150);
          }
        }
      });
    };

    animateBars();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-28 px-6 md:px-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold mb-6 relative inline-block">
          <span className="relative">
            Technical Skills
            <span className="absolute bottom-[-10px] left-0 w-full h-1 rounded-full bg-gradient-to-r from-[#00d8ff] via-[#a259ff] to-[#68a063]"></span>
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          A curated stack of tools and technologies I use to build efficient and elegant digital products.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 px-2 max-w-6xl mx-auto">
        {skills.map((category, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-[#1e293b]/70 to-[#1e293b]/30 rounded-2xl p-8 border border-[#334155] shadow-2xl hover:shadow-[0_10px_30px_-5px_rgba(0,216,255,0.3)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6 p-4 bg-[#1e293b]/50 rounded-xl border border-[#334155]">
              <div className="p-3 rounded-lg bg-[#334155]/50 group-hover:bg-[#334155] transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>

            <ul className="space-y-6">
              {category.list.map((skill, i) => (
                <li key={i} className="group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-md bg-[#334155] text-xl">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#334155] rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#00d8ff] to-[#a259ff] transition-all duration-1000"
                          data-level={`${skill.level}%`}
                          ref={(el) => progressRefs.current.push(el)}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;