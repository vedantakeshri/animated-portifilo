// export default function Contact() {
//   return (
//     <section id="contact" className="max-w-xl mx-auto py-16 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
//       <p className="mb-6">Interested in working together? Feel free to reach out!</p>
//       <a href="mailto:your@email.com" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
//         Send Email
//       </a>
//     </section>
//   );
// }



import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section id="contact" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="mb-6">Interested in working together? Feel free to reach out!</p>
      <a href="mailto:vedantakeshri@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
        Send Email
      </a>
    </motion.section>
  );
}