"use client";

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
    <footer 
      className="position-relative overflow-hidden py-5 text-light"
      style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #020c1b 100%)',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Background Shapes */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px'
          }}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '15px 15px'
          }}
        />
      </div>

      <div className="position-relative z-1 container px-4 px-md-3">
        {/* Top Section */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-4 pb-4 border-bottom border-secondary border-opacity-10">
          <div>
            <h2 className="fs-2 fw-bold text-light mb-1">
              Omar<span className="text-info">Habib</span>
            </h2>
            <p className="small text-secondary">Frontend Architect & UI Specialist</p>
          </div>

          <div className="text-end">
            <h3 className="fs-5 fw-medium text-light mb-2">Ready to start your project?</h3>
            <a
              href="#contact"
              className="d-inline-flex align-items-center gap-2 bg-gradient px-4 py-2 rounded-pill fw-semibold shadow hover-top"
              style={{
                background: 'linear-gradient(to right, #64ffda, #6e45e2)',
                color: '#0a192f',
                textDecoration: 'none'
              }}
            >
              <FaPaperPlane /> Get In Touch
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="row py-4 g-4">
          {/* Navigation */}
          <div className="col-md-3 col-6">
            <h4 className="text-info fw-semibold small mb-3 pb-2 border-bottom border-info border-2 border-opacity-25">
              Navigation
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#home" className="text-decoration-none text-light hover-text-info">Home</a></li>
              <li><a href="#portfolio" className="text-decoration-none text-light hover-text-info">Projects</a></li>
              <li><a href="#skills" className="text-decoration-none text-light hover-text-info">Skills</a></li>
              <li><a href="#experience" className="text-decoration-none text-light hover-text-info">Experience</a></li>
              <li><a href="#contact" className="text-decoration-none text-light hover-text-info">Contact</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="col-md-3 col-6">
            <h4 className="text-info fw-semibold small mb-3 pb-2 border-bottom border-info border-2 border-opacity-25">
              Technologies
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-light">
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>UI/UX Design</li>
              <li>Web Animation</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 col-6">
            <h4 className="text-info fw-semibold small mb-3 pb-2 border-bottom border-info border-2 border-opacity-25">
              Connect
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-3 small text-light">
              <li className="d-flex align-items-center gap-2"><FaEnvelope className="text-info" /> omarahmedhabib6@gmail.com</li>
              <li className="d-flex align-items-center gap-2"><FaPhone className="text-info" /> +20 1144629507</li>
              <li className="d-flex align-items-center gap-2"><FaMapMarkerAlt className="text-info" /> Cairo, Egypt</li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="col-md-3 col-6">
            <h4 className="text-info fw-semibold small mb-3 pb-2 border-bottom border-info border-2 border-opacity-25">
              Follow Me
            </h4>
            <div className="d-flex gap-2 mb-3">
              <a href="https://www.linkedin.com/in/omar-ahmed-124987171/" target="_blank" rel="noopener noreferrer" className="social-icon d-flex align-items-center justify-content-center rounded-circle text-white bg-primary">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/OmarAhmedHabib" target="_blank" rel="noopener noreferrer" className="social-icon d-flex align-items-center justify-content-center rounded-circle text-white bg-dark">
                <FaGithub />
              </a>
              <a href="https://wa.me/20144629507" target="_blank" rel="noopener noreferrer" className="social-icon d-flex align-items-center justify-content-center rounded-circle text-white bg-success">
                <FaWhatsapp />
              </a>
              <a href="mailto:omarahmedhabib6@gmail.com" className="social-icon d-flex align-items-center justify-content-center rounded-circle text-white bg-danger">
                <FaEnvelope />
              </a>
            </div>

            <h4 className="small fw-semibold mb-2">Newsletter</h4>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your email"
                className="form-control rounded-0 rounded-start bg-dark bg-opacity-50 text-white border-0"
                style={{ minWidth: '120px' }}
              />
              <button 
                type="submit" 
                className="btn btn-info rounded-0 rounded-end text-dark px-3"
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center border-top border-secondary border-opacity-10 pt-3 small text-secondary">
          <div>&copy; {new Date().getFullYear()} Omar Habib. All rights reserved.</div>
          <div className="d-flex gap-3 mt-2 mt-sm-0">
            <a href="#" className="text-decoration-none text-secondary hover-text-info">Privacy Policy</a>
            <a href="#" className="text-decoration-none text-secondary hover-text-info">Terms of Service</a>
            <a href="#" className="text-decoration-none text-secondary hover-text-info">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .hover-text-info:hover {
          color: #64ffda !important;
        }
        .hover-top:hover {
          transform: translateY(-3px);
          transition: transform 0.2s ease;
        }
        .social-icon {
          width: 32px;
          height: 32px;
          transition: transform 0.2s ease;
        }
        .social-icon:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
