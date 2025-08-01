"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const rotatorRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isHoveringCode, setIsHoveringCode] = useState(false);
  const controls = useAnimation();

  // ✅ Typing Effect
  useEffect(() => {
    const roles = [
      "Frontend Developer 💻",
      "React Specialist ⚛️",
      "UI/UX Designer 🎨",
      "JavaScript Engineer 🛠️",
      "Creative Coder ✨",
    ];

    let i = 0,
      j = 0,
      isDeleting = false,
      speed = 100;

    const type = () => {
      if (!rotatorRef.current) return;
      const word = roles[i];
      rotatorRef.current.textContent = isDeleting
        ? word.substring(0, j--)
        : word.substring(0, j++);

      if (!isDeleting && j === word.length) {
        isDeleting = true;
        speed = 1500;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
        speed = 500;
      } else {
        speed = isDeleting ? 30 : Math.random() * 50 + 70;
      }
      timeoutRef.current = setTimeout(type, speed);
    };

    type();
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  // ✅ Interactive Code Box Animation
  const handleCodeHover = async (hovering: boolean) => {
    setIsHoveringCode(hovering);
    await controls.start({
      boxShadow: hovering
        ? "0 0 30px rgba(100, 255, 218, 0.5)"
        : "0 0 20px rgba(100, 255, 218, 0.15)",
      y: hovering ? -5 : 0,
      transition: { duration: 0.3 },
    });
  };

  // ✅ Particles Effect Canvas
  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray: { x: number; y: number; dx: number; dy: number; size: number }[] = [];
    for (let i = 0; i < 70; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#64ffda";
      particlesArray.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        // Bounce from edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <header className="position-relative text-white overflow-hidden">
      {/* ✅ Background */}
      <div className="bg-animated"></div>
      <canvas id="particles" className="position-absolute w-100 h-100"></canvas>

      <div className="container py-5 min-vh-100 d-flex flex-column justify-content-center">
        <div className="row align-items-center text-center text-lg-start">
          {/* 🔥 Left Section */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="badge-glass mb-4"
            >
              🚀 Frontend Engineer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="display-3 fw-bold mb-3"
            >
              <span className="text-gradient">Omar</span> Habib
            </motion.h1>

            <div className="fs-3 fw-semibold text-info mb-3 min-height-60">
              <span ref={rotatorRef}></span>
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="blinking-cursor"
              >
                |
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lead text-light mb-4"
            >
              Crafting <strong>high-performance</strong>, <strong>accessible</strong>, and <strong>visually stunning</strong> web experiences with cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3"
            >
              <a href="#projects" className="btn btn-neon px-4 py-2 rounded-pill d-flex align-items-center gap-2">
                <i className="fas fa-code"></i> <span>View Portfolio</span>
              </a>
              <a href="#contact" className="btn btn-outline-neon px-4 py-2 rounded-pill d-flex align-items-center gap-2">
                <i className="fas fa-paper-plane"></i> <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* 🔥 Right Section */}
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              animate={controls}
              onHoverStart={() => handleCodeHover(true)}
              onHoverEnd={() => handleCodeHover(false)}
              className="code-box-pro w-100 mb-4"
            >
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="ms-auto text-muted small">
                  {isHoveringCode ? "// Check out my work!" : "// OmarHabib.js"}
                </span>
              </div>
              <pre className="p-3 m-0 text-success small">
                {`const DeveloperProfile = {\n  name: "Omar Habib",\n  role: "Senior Frontend Engineer",\n  skills: ["React", "TypeScript", "Next.js"],\n  focus: "Building exceptional UIs",\n  availableForWork: true\n};`}
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="skills-pro d-flex flex-wrap justify-content-center gap-2"
            >
              {[
                { name: "TypeScript", icon: "⚡" },
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "🚀" },
                { name: "Tailwind", icon: "🎨" },
                { name: "Node.js", icon: "🛠️" },
                { name: "GraphQL", icon: "🔮" },
                { name: "Framer Motion", icon: "✨" },
                { name: "Jest", icon: "🧪" },
                { name: "Webpack", icon: "📦" },
              ].map((s, i) => (
                <motion.span key={i} whileHover={{ scale: 1.1, rotate: [0, 3, -3, 0] }} className="badge-skill-pro d-flex align-items-center gap-1">
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Global CSS */}
      <style jsx global>{`
          header .container {
              position: relative;
              z-index: 3; /* النص فوق الخلفية والـ particles */
         }
        .min-height-60 { min-height: 60px; }
        .text-gradient {
          background: linear-gradient(135deg, #64ffda 0%, #00c6ff 50%, #9d4edd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: gradientText 5s ease infinite;
        }
          header h1, header p, header span, header .lead, header .fs-3 {
          color: #ffffff !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6); /* ظل قوي يبرز النص */
        }
        @keyframes gradientText {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .bg-animated {
          position: absolute;
          width: 100%; height: 100%;
         background: linear-gradient(-45deg, #0a0a0f, #0d1b2a, #0f2027, #0a0a0f);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          z-index: 0;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        #particles {  position: absolute;  top: 0; left: 0;  width: 100%; height: 100%;  z-index: 1;   opacity: 0.4;  pointer-events: none; }
        .badge-glass {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 24px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.8rem;
        }
        .btn-neon {
          background: #64ffda; color: #000; font-weight: 600;
          box-shadow: 0 4px 15px #64ffda80;
          transition: all 0.3s ease;
        }
        .btn-neon:hover {
          background: #00ffd5; transform: translateY(-3px);
          box-shadow: 0 6px 20px #64ffda;
        }
        .btn-outline-neon {
          border: 1px solid #64ffda; color: #64ffda; transition: all 0.3s ease;
        }
        .btn-outline-neon:hover {
          background: #64ffda; color: #000; transform: translateY(-3px);
          box-shadow: 0 6px 20px #64ffda40;
        }
        .code-box-pro {
          background: rgba(15,23,42,0.8);
          border: 1px solid rgba(100,255,218,0.5);
          border-radius: 12px;
          backdrop-filter: blur(12px);
          overflow: hidden;
        }
        .code-header {
          padding: 8px 12px;
          display: flex; gap: 8px;
          background: rgba(0,0,0,0.4);
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        .badge-skill-pro {
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          color: #ffffff;
          padding: 8px 14px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 24px;
          font-size: 0.85rem;
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
        }
        .code-box-pro pre {
            color: #a8ffeb; /* لون فاتح وواضح */
            text-shadow: 0 1px 3px rgba(0,0,0,0.6);
          }
        .badge-skill-pro:hover {
          background: #64ffda; color: #000;
          box-shadow: 0 0 15px #64ffda50;
          border-color: transparent;
        }
      `}</style>
    </header>
  );
};

export default Header;
