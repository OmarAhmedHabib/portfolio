'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPaintBrush, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiLaravel, SiAdobexd } from 'react-icons/si';

const skills = [
  {
    title: 'Frontend Development',
    icon: <FaCode className="fs-3 text-info" />,
    list: [
      { name: 'React.js', level: 95, icon: <FaReact className="text-info" /> },
      { name: 'Next.js', level: 90, icon: <SiNextdotjs className="text-white" /> },
      { name: 'JavaScript', level: 92, icon: <SiJavascript className="text-warning" /> },
      { name: 'HTML & CSS', level: 98, icon: <span className="text-danger fw-bold">{'</>'}</span> },
    ],
  },
  {
    title: 'Backend Development',
    icon: <FaServer className="fs-3 text-success" />,
    list: [
      { name: 'Node.js', level: 85, icon: <FaNodeJs className="text-success" /> },
      { name: 'Laravel', level: 80, icon: <SiLaravel className="text-danger" /> },
      { name: 'PHP', level: 75, icon: <span className="text-primary fw-bold">PHP</span> },
      { name: 'MySQL', level: 78, icon: <span className="text-info fw-bold">SQL</span> },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: <FaPaintBrush className="fs-3 text-purple" />,
    list: [
      { name: 'Figma', level: 88, icon: <FaFigma className="text-purple" /> },
      { name: 'Adobe XD', level: 82, icon: <SiAdobexd className="text-pink" /> },
      { name: 'Responsive Design', level: 95, icon: <span className="text-success">📱</span> },
      { name: 'Web Animation', level: 90, icon: <span className="text-warning">🎬</span> },
    ],
  },
];

export default function SkillsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setInView(true);
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-vh-100 py-5 px-3 px-md-5 text-white" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
      <div className="container text-center mb-5">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="display-4 fw-bold mb-4 position-relative d-inline-block">
          Technical Skills
          <span className="line"></span>
        </motion.h2>
        <p className="lead text-light mx-auto" style={{ maxWidth: '700px' }}>A curated stack of tools and technologies I use to build efficient and elegant digital products.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {skills.map((category, idx) => (
          <motion.div key={idx} className="col-md-6 col-lg-4" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: idx * 0.2, duration: 0.5 }}>
            <div className="skill-card">
              <div className="skill-header">
                {category.icon}
                <h3 className="h3 fw-bold text-white mb-0">{category.title}</h3>
              </div>
              <ul className="list-unstyled">
                {category.list.map((skill, i) => (
                  <SkillBar key={i} skill={skill} delay={i * 0.2} inView={inView} />
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .skill-card {
          background: rgba(30, 41, 59, 0.3);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: transform 0.3s;
        }
        .skill-card:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,255,255,0.2); }
        .skill-header { display:flex; align-items:center; gap:10px; background:rgba(0,0,0,0.3); padding:10px; border-radius:8px; margin-bottom:15px; }
        .line { display:block; width:100%; height:3px; background:linear-gradient(to right,#0dcaf0,#9d4edd,#198754); margin-top:5px; border-radius:2px; }
      `}</style>
    </section>
  );
}

/* ✅ Progress Bar Component مع Counter Animation */
function SkillBar({ skill, delay, inView }: { skill: any; delay: number; inView: boolean }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { if (inView) setTimeout(() => setWidth(skill.level), delay * 1000); }, [inView]);

  return (
    <li className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span>{skill.icon} {skill.name}</span>
        <span className="small text-secondary">{width}%</span>
      </div>
      <div className="progress-bar-container">
        <motion.div className="progress-bar" initial={{ width: '0%' }} animate={{ width: `${width}%` }} transition={{ duration: 1.2, ease: 'easeOut' }} />
      </div>
      <style jsx>{`
        .progress-bar-container { width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:10px; overflow:hidden; }
        .progress-bar { height:100%; background:linear-gradient(to right,#0dcaf0,#9d4edd); border-radius:10px; }
      `}</style>
    </li>
  );
}
