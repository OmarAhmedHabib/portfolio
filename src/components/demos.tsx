"use client";

import { motion } from 'framer-motion';
import { FaMousePointer, FaCogs, FaPalette } from 'react-icons/fa';

export default function DemosPage() {
  const demos = [
    {
      icon: <FaMousePointer className="text-info fs-1 mb-3" />,
      title: 'Interactive Buttons',
      desc: 'Explore hover effects, ripple animations, and morphing shapes with Bootstrap + Framer Motion.',
      link: '#',
    },
    {
      icon: <FaCogs className="text-warning fs-1 mb-3" />,
      title: 'Component Playground',
      desc: 'Live components built using Sandpack, Headless UI, and advanced logic handling.',
      link: '#',
    },
    {
      icon: <FaPalette className="text-danger fs-1 mb-3" />,
      title: 'UI Design Experiments',
      desc: 'Glassmorphism, Neumorphism, Dark Mode Switchers and more creative UI elements.',
      link: '#',
    },
  ];

  return (
    <section 
      className="min-vh-100 px-3 py-5 text-white position-relative overflow-hidden"
      style={{ backgroundColor: '#0f0c29' }}
    >
      {/* Background Stars */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='stars' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='5' cy='5' r='0.5' fill='white' opacity='0.8'/><circle cx='25' cy='35' r='0.3' fill='white' opacity='0.6'/><circle cx='75' cy='25' r='0.4' fill='white' opacity='0.7'/><circle cx='90' cy='10' r='0.2' fill='white' opacity='0.5'/><circle cx='50' cy='70' r='0.3' fill='white' opacity='0.6'/></pattern></defs><rect width='100%' height='100%' fill='url(%23stars)'/></svg>")`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Content */}
      <div className="position-relative z-1 container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-4">
            <span className="text-info">[//]</span> Live Demos
          </h2>
          <p className="lead text-light mx-auto" style={{ maxWidth: '700px' }}>
            Explore hands-on experiments and UI demos pushing the limits of frontend creativity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="row g-4">
          {demos.map((demo, i) => (
            <div key={i} className="col-md-4">
              <motion.a
                href={demo.link}
                whileHover={{ scale: 1.05 }}
                className="d-block bg-dark bg-opacity-50 p-4 rounded-3 border border-light border-opacity-10 text-decoration-none h-100 demo-card"
                style={{
                  backdropFilter: 'blur(10px)',
                  height: '250px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
                  {demo.icon}
                  <h3 className="text-white fw-bold mb-3">{demo.title}</h3>
                  <p className="text-light">{demo.desc}</p>
                </div>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
