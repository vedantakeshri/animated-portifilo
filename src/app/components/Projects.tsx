// const projects = [
//   { title: "Portfolio Website", link: "#", desc: "Personal portfolio using Next.js and Tailwind." },
//   { title: "E-commerce UI", link: "#", desc: "A modern frontend UI for shopping app." },
//   { title: "Restaurant Website", link: "#", desc: "Responsive site with QR-based payments." },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
//       <h2 className="text-3xl font-bold mb-8">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {projects.map((p, i) => (
//           <div key={i} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-xl font-semibold">{p.title}</h3>
//             <p className="mt-2 text-gray-600">{p.desc}</p>
//             <a href={p.link} className="text-blue-500 mt-2 inline-block">View Project →</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




import { motion } from 'framer-motion';

const projects = [
  { title: "Portfolio Website", link: "#", desc: "Personal portfolio using Next.js and Tailwind." },
  { title: "E-commerce UI", link: "#", desc: "A modern frontend UI for shopping app." },
  { title: "Restaurant Website", link: "#", desc: "Responsive site with QR-based payments." },
];

export default function Projects() {
  return (
    <motion.section id="projects" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
      viewport={{ once: true }} className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>
            <a href={p.link} className="text-blue-500 mt-2 inline-block">View Project →</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
