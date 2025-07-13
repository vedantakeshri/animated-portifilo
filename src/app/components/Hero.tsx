// export default function Hero() {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center text-center px-6">
//       <h1 className="text-5xl font-bold">Hi, I’m Vedanta Keshri</h1>
//       <p className="text-xl mt-4">Frontend Developer | React.js | Next.js</p>
//       <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
//         View Projects
//       </a>
//     </section>
//   );
// }




import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
      className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">Hi, I’m Vedanta Keshri</h1>
      <p className="text-xl mt-4">Frontend Developer | React.js | Next.js</p>
      <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
        View Projects
      </a>
    </motion.section>
  );
}
