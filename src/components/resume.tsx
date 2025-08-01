'use client';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const experience = [
  { title: 'Frontend Developer', place: 'TechNova', time: '2022 - Present', desc: 'Built modern dashboards using Next.js, Tailwind, and animations with Framer Motion.' },
  { title: 'UI/UX Designer Intern', place: 'DesignCraft', time: '2021 - 2022', desc: 'Assisted in user research and created hi-fi prototypes for SaaS products.' },
];

const education = [
  { degree: 'BSc Computer Science', place: 'Cairo University', time: '2014 - 2018' },
  { degree: 'Google UX Certificate', place: 'Coursera', time: '2022' },
];

const awards = [
  '🏆 Top 5 UI Developer – Behance 2023',
  '🚀 Hackathon Winner – DevFest Cairo 2022',
  '🥇 Udemy Instructor of the Month – 2024',
];

export default function ResumePage() {
  return (
    <section className="min-vh-100 px-4 py-5 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #020c1b 100%)' }}>
      
      {/* Animated Star Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 starfield" />

      <div className="position-relative z-1 container">
        
        {/* Page Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3"><span className="text-info">[//]</span> Resume</h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: '700px' }}>A journey through my professional growth and creative evolution.</p>
        </motion.div>

        {/* Experience Section */}
        <Section title="Experience" icon={<FaBriefcase className="text-info" />}>
          {experience.map((job, i) => (
            <TimelineItem key={i} title={job.title} subtitle={`${job.place} • ${job.time}`} desc={job.desc} index={i} />
          ))}
        </Section>

        {/* Education Section */}
        <Section title="Education" icon={<FaGraduationCap className="text-info" />}>
          {education.map((edu, i) => (
            <TimelineItem key={i} title={edu.degree} subtitle={edu.place} desc={edu.time} index={i} />
          ))}
        </Section>

        {/* Awards Section */}
        <Section title="Awards" icon={<FaAward className="text-info" />}>
          <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '600px' }}>
            {awards.map((award, i) => (
              <motion.li key={i} className="mb-2 d-flex align-items-start small" whileHover={{ scale: 1.05 }}>
                <span className="text-info me-2">•</span>{award}
              </motion.li>
            ))}
          </ul>
        </Section>
      </div>

      {/* CSS */}
      <style jsx>{`
        .min-vh-100 { min-height: 100vh; }
        .starfield {
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><circle cx='5' cy='5' r='0.5' fill='white' opacity='0.8'/></svg>");
          animation: moveStars 40s linear infinite;
          opacity: 0.3;
        }
        @keyframes moveStars {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
        .timeline-dot {
          width: 12px; height: 12px;
          background: #0dcaf0;
          border-radius: 50%;
          position: absolute;
          left: -6px; top: 10px;
        }
        .timeline-line {
          position: absolute;
          left: 0; top: 0;
          width: 2px; height: 100%;
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
}

/* ✅ Reusable Section Component */
function Section({ title, icon, children }: { title: string; icon: JSX.Element; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="h1 fw-semibold d-flex justify-content-center align-items-center gap-2 mb-4">{icon} {title}</h2>
      <div className="position-relative" style={{ paddingLeft: '25px' }}>
        <div className="timeline-line"></div>
        {children}
      </div>
    </div>
  );
}

/* ✅ Reusable TimelineItem Component */
function TimelineItem({ title, subtitle, desc, index }: { title: string; subtitle: string; desc: string; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="mb-4 ps-3 position-relative">
      <span className="timeline-dot"></span>
      <div className="bg-dark bg-opacity-50 rounded-3 p-4 shadow hover-border-info" style={{ backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 className="h4 fw-bold">{title}</h3>
        <p className="small text-secondary">{subtitle}</p>
        <p className="small text-light">{desc}</p>
      </div>
    </motion.div>
  );
}
