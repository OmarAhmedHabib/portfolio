'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', text: 'Home', icon: 'rocket' },
  { href: '/about', text: 'About', icon: 'user-astronaut' },
  { href: '/portfolio', text: 'Projects', icon: 'meteor' },
  { href: '/skills', text: 'Skills', icon: 'satellite' },
  { href: '/demos', text: 'Demos', icon: 'globe' },
  { href: '/resume', text: 'Download Resume', icon: 'file-alt', isButton: true },
];

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest('.offcanvas-menu') === null) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f0c29] via-[#08014d] to-[#7b7bacb4] shadow-lg border-b border-cyan-500/20 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-white tracking-wide">
          <span className="bg-gradient-to-r from-[#64ffda] to-[#2979ff] text-transparent bg-clip-text">
            OMAR
          </span>
          <span className="bg-gradient-to-r to-[#9e0289] from-[#f33303d2] text-transparent bg-clip-text ">
            Habib
          </span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-white text-2xl px-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center gap-2 text-sm font-medium transition rounded px-4 py-2 ${
                  pathname === link.href
                    ? 'bg-[#09a79f] text-cyan-400'
                    : 'text-white hover:text-cyan-400 hover:bg-white/10'
                } ${link.isButton ? 'bg-cyan-400 text-black rounded-full px-5' : ''}`}
              >
                <i className={`fas fa-${link.icon}`}></i>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0f0c29] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } offcanvas-menu`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-cyan-400/10">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <ul className="flex flex-col items-start gap-2 px-4 py-6 bg-[#1f183fe3]">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded text-sm font-medium transition ${
                  pathname === link.href
                    ? 'bg-cyan-400 text-black'
                    : 'text-white hover:text-cyan-400 hover:bg-white/10'
                } ${link.isButton ? 'bg-cyan-400 text-black rounded-full px-5' : ''}`}
              >
                <i className={`fas fa-${link.icon}`}></i>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden"></div>
      )}
    </nav>
  );
};

export default NavBar;
