'use client';
import { motion } from 'framer-motion';
import { FaMousePointer, FaCogs, FaPalette } from 'react-icons/fa';

export default function DemosPage() {
  const demos = [
    {
      icon: <FaMousePointer className="text-cyan-400 text-3xl mb-2  " />,
      title: 'Interactive Buttons',
      desc: 'Explore hover effects, ripple animations, and morphing shapes with Tailwind + Framer Motion.',
      link: '#',
    },
    {
      icon: <FaCogs className="text-yellow-400 text-3xl mb-3" />,
      title: 'Component Playground',
      desc: 'Live components built using Sandpack, Headless UI, and advanced logic handling.',
      link: '#',
    },
    {
      icon: <FaPalette className="text-pink-400 text-3xl mb-3" />,
      title: 'UI Design Experiments',
      desc: 'Glassmorphism, Neumorphism, Dark Mode Switchers and more creative UI elements.',
      link: '#',
    },
  ];

  return (
    <section className="min-h-screen px-3 py-5 bg-[#0f0c29] text-white relative overflow-hidden">
      {/* خلفية النجوم */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='stars' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='5' cy='5' r='0.5' fill='white' opacity='0.8'/><circle cx='25' cy='35' r='0.3' fill='white' opacity='0.6'/><circle cx='75' cy='25' r='0.4' fill='white' opacity='0.7'/><circle cx='90' cy='10' r='0.2' fill='white' opacity='0.5'/><circle cx='50' cy='70' r='0.3' fill='white' opacity='0.6'/></pattern></defs><rect width='100%' height='100%' fill='url(%23stars)'/></svg>")`,
          backgroundSize: 'cover',
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-cyan-400">[//]</span> Live Demos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore hands-on experiments and UI demos pushing the limits of frontend creativity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 ">
          {demos.map((demo, i) => (
      <motion.a
  href={demo.link}
  key={i}
  whileHover={{ scale: 1.05 }}
  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-cyan-400 backdrop-blur-md shadow-lg transition duration-300 flex flex-col items-center justify-center text-center h-64"
>
  {demo.icon}
  <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
  <p className="text-gray-300 text-sm">{demo.desc}</p>
</motion.a>

          ))}
        </div>
      </div>
    </section>
  );
}
