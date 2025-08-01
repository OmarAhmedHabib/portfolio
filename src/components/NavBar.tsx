'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRocket, FaUserAstronaut, FaMeteor, FaSatellite, FaGlobe, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '/', text: 'Home', icon: <FaRocket /> },
  { href: '/about', text: 'About', icon: <FaUserAstronaut /> },
  { href: '/portfolio', text: 'Projects', icon: <FaMeteor /> },
  { href: '/skills', text: 'Skills', icon: <FaSatellite /> },
  { href: '/demos', text: 'Demos', icon: <FaGlobe /> },
  { href: '/resume', text: 'Download Resume', icon: <FaFileAlt />, isButton: true },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.offcanvas-menu') && !target.closest('.menu-toggle')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className="fixed-top w-100 z-50 shadow-lg"
      role="navigation"
      style={{
        background: 'linear-gradient(to right, #0f0c29, #08014d, #7b7bacb4)',
        borderBottom: '1px solid rgba(0, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="container px-4 py-3 d-flex justify-content-between align-items-center">
        {/* ✅ Logo */}
        <Link href="/" className="text-decoration-none">
          <span
            className="fs-3 fw-bolder text-white"
            style={{
              background: 'linear-gradient(to right, #64ffda, #2979ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            OMAR
          </span>
          <span
            className="fs-3 fw-bolder"
            style={{
              background: 'linear-gradient(to right, #97afbb, #ca7cc0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Habib
          </span>
        </Link>

        {/* ✅ Toggle Button for Mobile */}
        <button
          className="d-md-none btn text-white fs-4 px-3 menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* ✅ Desktop Menu */}
        <ul className="d-none d-md-flex list-unstyled gap-4 mb-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`d-flex align-items-center gap-2 small fw-medium rounded-5 px-3 py-2 text-decoration-none ${
                  pathname === link.href ? 'bg-info text-dark' : 'text-white hover-bg-white-50'
                } ${link.isButton ? 'bg-primary text-dark hover-bg-primary rounded-5 px-4' : ''}`}
              >
                {link.icon}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Mobile Offcanvas Menu */}
      <div
        className={`position-fixed top-0 end-0 h-100 w-75 bg-dark z-50 transition-transform offcanvas-menu ${
          menuOpen ? 'translate-x-0' : 'translate-x-100'
        }`}
        style={{ backgroundColor: '#0f0c29' }}
      >
        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom border-info border-opacity-10">
          <h2 className="text-white fs-5 fw-semibold mb-0">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="btn text-white fs-4">
            <FaTimes />
          </button>
        </div>

        <ul className="d-flex flex-column align-items-start gap-2 px-3 py-4 list-unstyled mb-0">
          {navLinks.map((link) => (
            <li key={link.href} className="w-100">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`d-flex align-items-center w-100 px-4 py-2 rounded-5 gap-3 small fw-medium text-decoration-none ${
                  pathname === link.href ? 'bg-info text-dark' : 'text-white hover-bg-white-10 hover-text-info'
                } ${link.isButton ? 'bg-info text-dark rounded-pill px-4 my-2' : ''}`}
              >
                {link.icon}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Overlay */}
      {menuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 z-40 d-md-none"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
      )}

      {/* ✅ Custom CSS */}
      <style jsx>{`
        .rounded-5 {
          border-radius: 1rem;
        }
        .hover-bg-white-50:hover {
          background-color: rgba(255, 255, 255, 0.5) !important;
          color: #000 !important;
        }
        .hover-bg-white-10:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        .hover-text-info:hover {
          color: #0dcaf0 !important;
        }
        .hover-bg-primary:hover {
          background-color: #0b5ed7 !important;
        }
        .translate-x-100 {
          transform: translateX(100%);
        }
        .translate-x-0 {
          transform: translateX(0);
        }
        .transition-transform {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </nav>
  );
}
