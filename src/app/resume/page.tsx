'use client';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa';

const experience = [
  {
    title: 'Frontend Developer',
    place: 'TechNova',
    time: '2022 - Present',
    desc: 'Built modern dashboards using Next.js, Tailwind, and animations with Framer Motion.',
  },
  {
    title: 'UI/UX Designer Intern',
    place: 'DesignCraft',
    time: '2021 - 2022',
    desc: 'Assisted in user research and created hi-fi prototypes for SaaS products.',
  },
];

const education = [
  {
    degree: 'BSc Computer Science',
    place: 'Cairo University',
    time: '2014 - 2018',
  },
  {
    degree: 'Google UX Certificate',
    place: 'Coursera',
    time: '2022',
  },
];

const awards = [
  'Top 5 UI Developer – Behance 2023',
  'Hackathon Winner – DevFest Cairo 2022',
  'Udemy Instructor of the Month – 2024',
];

export default function ResumePage() {
  return (
    <section className="min-h-screen px-4 py-16 bg-[#0f0c29] text-white relative overflow-hidden">
      {/* الخلفية النجوم */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='stars' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='5' cy='5' r='0.5' fill='white' opacity='0.8'/><circle cx='25' cy='35' r='0.3' fill='white' opacity='0.6'/><circle cx='75' cy='25' r='0.4' fill='white' opacity='0.7'/><circle cx='90' cy='10' r='0.2' fill='white' opacity='0.5'/><circle cx='50' cy='70' r='0.3' fill='white' opacity='0.6'/></pattern></defs><rect width='100%' height='100%' fill='url(%23stars)'/></svg>")`,
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">[//]</span> Resume
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            A journey through my professional growth and creative evolution.
          </p>
        </motion.div>

        {/* قسم الخبرة */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-semibold flex justify-center items-center gap-2">
            <FaBriefcase className="text-cyan-400" />
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:border-cyan-400 transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-sm text-gray-400">
                  {job.place} • {job.time}
                </p>
                <p className="text-gray-300 mt-3 text-sm">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* قسم التعليم */}
        <div className="text-center space-y-10">
          <h2 className="text-3xl font-semibold flex justify-center items-center gap-2">
            <FaGraduationCap className="text-cyan-400" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-sm text-gray-400">{edu.place}</p>
                <span className="text-xs text-gray-500">{edu.time}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* قسم الجوائز */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold flex justify-center items-center gap-2">
            <FaAward className="text-cyan-400" />
            Awards
          </h2>
          <ul className="text-gray-300 text-sm space-y-3 max-w-xl mx-auto text-left list-disc list-inside">
            {awards.map((award, i) => (
              <motion.li key={i} whileHover={{ scale: 1.02 }}>
                {award}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
