'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-20 px-6 md:px-10"
    >
      <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        I'm a <span className="font-semibold text-blue-700">Frontend Developer</span> based in <span className="font-semibold">Jaipur</span> with
        <span className="font-semibold"> 1 year</span> of experience crafting responsive, modern web applications using 
        <span className="font-semibold text-blue-700"> React.js</span> and <span className="font-semibold text-blue-700">Next.js</span>. <br /><br />
        I’m passionate about turning creative ideas into meaningful digital experiences. I focus on performance, user experience, and clean design.
      </p>

      {/* Optional: Skills List */}
      <div className="mt-6 flex flex-wrap gap-3">
        {['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Git'].map(skill => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
