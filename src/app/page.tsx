







'use client';

import Head from 'next/head';
import { motion } from 'framer-motion'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbr';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Head>
        <title>Vedanta Keshri | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of a Frontend Developer skilled in React & Next.js"
        />
      </Head>

      <main className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen text-gray-900">
        <Navbar />

        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="px-6 md:px-12 lg:px-24 py-12"
        >
          <Hero />
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-6 md:px-12 lg:px-24 py-12"
        >
          <About />
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-6 md:px-12 lg:px-24 py-12"
        >
          <Projects />
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-6 md:px-12 lg:px-24 py-12"
        >
          <Contact />
        </motion.section>
      </main>
    </>
  );
}


