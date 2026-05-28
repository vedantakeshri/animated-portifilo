'use client';

import { useEffect, useState } from 'react';

import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

const Hero = () => {
  const roles = [
    'Frontend Developer',
    'React.js Developer',
    'Next.js Developer',
    'UI Engineer',
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.substring(0, text.length + 1));

          if (text === current) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setText(current.substring(0, text.length - 1));

          if (text === '') {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 90
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:45px_45px]" />

        {/* Blur */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          {/* Tag */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400 backdrop-blur-xl">
            <Sparkles size={16} />
            Open to Frontend Developer Opportunities
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-lg text-gray-400">
                Hello, I&apos;m
              </p>

              <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Vedanta
                <br />

                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Keshri
                </span>
              </h1>
            </div>

            {/* Typing */}
            <div className="flex h-12 items-center">
              <h2 className="text-2xl font-semibold text-gray-200 sm:text-3xl">
                {text}
                <span className="animate-pulse text-blue-400">
                  |
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Frontend Developer with experience building modern SaaS
            dashboards, CRM systems, trading platforms, and scalable
            web applications using React.js, Next.js, Tailwind CSS,
            and TypeScript.
          </p>

          {/* Info Pills */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-md">
              <MapPin size={16} />
              Jaipur, India
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-md">
              <Briefcase size={16} />
              1 Year Experience
            </div>

            <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3 text-sm text-emerald-400">
              Available Immediately
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Vedanta_Keshri_Frontend_Laravel_Developer_Resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social */}
          <div className="mt-10 flex items-center gap-5">
            {[
              {
                icon: <Github size={22} />,
                href: 'https://github.com/vedantakeshri',
              },

              {
                icon: <Linkedin size={22} />,
                href: 'https://www.linkedin.com/in/vedanta-keshri-35b0a0212/',
              },

              {
                icon: <Mail size={22} />,
                href: 'mailto:vedantakeshri@gmail.com',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-5">
            {[
              {
                value: '10+',
                label: 'Projects Built',
              },

              {
                value: '1+',
                label: 'Years Experience',
              },

              {
                value: '100%',
                label: 'Responsive UI',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <h3 className="text-3xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-lg rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Frontend Stack
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  Technologies I work with
                </p>
              </div>

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Tech */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'React.js',
                'Next.js',
                'Tailwind CSS',
                'TypeScript',
                'JavaScript',
                'Laravel',
                'REST APIs',
                'Git & GitHub',
              ].map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center text-sm font-medium text-gray-200 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Bottom Card */}
            <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
              <h4 className="text-lg font-semibold text-white">
                Current Focus
              </h4>

              <p className="mt-3 leading-7 text-gray-300">
                Building scalable SaaS dashboards, Trading platforms,
                CRM systems, and high-performance frontend
                applications with modern UI architecture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={30} className="text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
