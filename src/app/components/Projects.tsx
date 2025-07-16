'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    link: '#',
    desc: 'Personal portfolio using Next.js and Tailwind CSS. Clean UI with Framer Motion animations and mobile-first design.',
  },
  {
    title: 'E-commerce UI',
    link: '#',
    desc: 'A modern shopping app frontend using React. Includes product cards, filters, and responsive layouts.',
  },
  {
    title: 'Restaurant Website',
    link: '#',
    desc: 'A full-responsive food website with QR-based payments and clean visual hierarchy.',
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto py-20 px-6 md:px-10"
    >
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            <a
              href={p.link}
              className="mt-4 inline-block text-blue-600 font-medium hover:underline transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
