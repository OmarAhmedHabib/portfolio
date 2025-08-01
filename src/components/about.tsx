"use client";  // ✅ هذا السطر ضروري ليعمل Framer Motion داخل Next.js 15

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section 
      className="min-vh-100 d-flex align-items-center justify-content-center px-4 py-5 bg-dark position-relative overflow-hidden text-white"
      style={{ backgroundColor: '#0f0c29' }}
    >
      {/* Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='stars' patternUnits='userSpaceOnUse' width='100' height='100'><circle cx='5' cy='5' r='0.5' fill='white' opacity='0.8'/><circle cx='25' cy='35' r='0.3' fill='white' opacity='0.6'/><circle cx='75' cy='25' r='0.4' fill='white' opacity='0.7'/><circle cx='90' cy='10' r='0.2' fill='white' opacity='0.5'/><circle cx='50' cy='70' r='0.3' fill='white' opacity='0.6'/></pattern></defs><rect width='100%' height='100%' fill='url(%23stars)'/></svg>")`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Content */}
      <div className="position-relative z-1 container-fluid">
        <div className="row align-items-center gx-5">
          {/* Profile Image */}
          <div className="col-lg-6 d-flex justify-content-center mb-5 mb-lg-0">
            <motion.div 
              className="position-relative"
              style={{ width: '320px', height: '320px' }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/img/omar.jpg"
                alt="Omar Habib"
                className="w-100 h-100 object-fit-cover rounded-4 border border-4 border-info shadow-lg"
                style={{ objectPosition: 'center' }}
              />
              {/* Icons */}
              <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-info text-white d-flex align-items-center justify-content-center shadow"
                   style={{ width: '40px', height: '40px' }}>
                <i className="fab fa-react fs-5"></i>
              </div>
              <div className="position-absolute bottom-0 end-0 translate-middle rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center shadow"
                   style={{ width: '44px', height: '44px' }}>
                <i className="fab fa-js fs-5"></i>
              </div>
              <div className="position-absolute top-50 end-0 translate-middle-y rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow"
                   style={{ width: '40px', height: '40px' }}>
                <i className="fab fa-css3-alt fs-5"></i>
              </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="col-lg-6 px-2 px-sm-3">
            <h2 className="display-4 fw-bold mb-4">
              <span className="text-info me-2">[//]</span>About Me
            </h2>
            <p className="lead text-light mb-4">
              I'm a <strong className="text-white">creative frontend architect</strong> with a passion for crafting immersive digital experiences. With over 5 years in the web development arena, I've mastered the art of blending aesthetics with functionality.
            </p>
            <p className="lead text-light mb-5">
              My philosophy centers on <strong className="text-white">clean code</strong>, <strong className="text-white">intuitive interfaces</strong>, and <strong className="text-white">performance optimization</strong>. I don't just build websites — I create digital environments that users love to interact with.
            </p>

            {/* Skills */}
            <div className="row g-3">
              {[
                { icon: 'react', text: 'React Ecosystem', color: 'text-info' },
                { icon: 'js', text: 'JavaScript ES6+', color: 'text-warning' },
                { icon: 'css3-alt', text: 'CSS3/Sass', color: 'text-primary' },
                { icon: 'paint-brush', text: 'UI/UX Design', color: 'text-danger' },
                { icon: 'mobile-alt', text: 'Responsive Design', color: 'text-success' },
                { icon: 'film', text: 'Web Animation', color: 'text-purple' },
              ].map(({ icon, text, color }) => (
                <div key={text} className="col-6 col-md-4">
                  <motion.div
                    className="d-flex flex-column align-items-center p-3 rounded-3 bg-dark bg-opacity-75"
                    whileHover={{ y: -5 }}
                  >
                    <i className={`fas fa-${icon} ${color} fs-3 mb-2`}></i>
                    <span className="text-center small">{text}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
