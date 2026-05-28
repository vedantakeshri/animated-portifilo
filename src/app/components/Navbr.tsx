'use client';

import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Download,
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-black/70 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
              VK
            </div>

            <div className="hidden sm:block">
              <h2 className="text-lg font-bold text-white">
                Vedanta Keshri
              </h2>

              <p className="text-xs text-gray-400">
                Frontend Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Social */}
            <a
              href="https://github.com/vedantakeshri"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-white"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/vedanta-keshri-35b0a0212/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-white"
            >
              <Linkedin size={18} />
            </a>

            {/* Resume Button */}
            <a
              href="/Vedanta_Keshri_Resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm border-l border-white/10 bg-[#0b0b0b] p-6 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top */}
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                Vedanta
              </h2>

              <p className="text-sm text-gray-400">
                Frontend Developer
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl border border-white/10 p-2 text-white"
            >
              <X size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-5 py-4 text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-10 space-y-5">
            {/* Resume */}
            <a
              href="/Vedanta_Keshri_Frontend_Laravel_Developer_Resume.pdf"
              download
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-600"
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/vedantakeshri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 text-gray-300 transition-all duration-300 hover:border-blue-400 hover:text-white"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/vedanta-keshri-35b0a0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-white/5 py-4 text-gray-300 transition-all duration-300 hover:border-blue-400 hover:text-white"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;