// export default function About() {
//   return (
//     <section id="about" className="max-w-4xl mx-auto py-16 px-6">
//       <h2 className="text-3xl font-bold mb-4">About Me</h2>
//       <p>
//         I’m a frontend developer based in Jaipur with 1 year of experience building responsive, modern web applications using React and Next.js. I love turning ideas into real-world applications that help people.
//       </p>
//     </section>
//   );
// }



import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section id="about" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I’m a frontend developer based in Jaipur with 1 year of experience building responsive, modern web applications using React and Next.js.
        I love turning ideas into real-world applications that help people.
      </p>
    </motion.section>
  );
}