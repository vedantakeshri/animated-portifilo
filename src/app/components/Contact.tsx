'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto py-24 px-6 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Let's Connect
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Whether you have a project in mind or just want to say hello, my inbox is always open. Let&apos;s build something great together!
      </p>

      <a
        href="mailto:vedantakeshri@gmail.com"
        className="inline-block px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
      >
        📩 Send Email
      </a>
    </motion.section>
  );
}
