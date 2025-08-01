// /app/portfolio/page.tsx
'use client';

import projects from '@/data/projects.json';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <section className="min-vh-100 py-5 px-4 bg-dark text-white">
      <div className="container">
        {/* ✅ Title with animation */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="display-4 fw-bold mb-5 text-center"
        >
          <span className="text-info">My Creative</span> Works
        </motion.h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="position-relative bg-secondary bg-opacity-10 rounded-3 overflow-hidden shadow-lg h-100 hover-scale">
                {/* ✅ Project Image with overlay */}
                <div 
                  className="portfolio-image position-relative"
                  style={{ 
                    backgroundImage: `url(${project.image || '/placeholder.jpg'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '250px'
                  }}
                >
                  <div className="portfolio-overlay d-flex flex-column justify-content-end p-4">
                    {project.badge && (
                      <span className="badge bg-info text-dark mb-2 align-self-start">
                        {project.badge}
                      </span>
                    )}
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="badge bg-dark bg-opacity-50 text-white border border-white border-opacity-20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ✅ Project Info */}
                <div className="p-4">
                  <h3 className="h4 fw-semibold mb-2">{project.title}</h3>
                  <p className="text-light text-opacity-75 mb-3">{project.description}</p>
                  <div className="d-flex gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="btn btn-info text-dark fw-semibold px-3 py-1 rounded-pill shadow-sm"
                    >
                      🚀 Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="btn btn-outline-info fw-semibold px-3 py-1 rounded-pill"
                    >
                      💻 View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Custom CSS */}
      <style jsx>{`
        .min-vh-100 { min-height: 100vh; }
        .portfolio-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }
        .hover-scale:hover .portfolio-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .hover-scale:hover {
          transform: translateY(-5px) scale(1.03);
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}
