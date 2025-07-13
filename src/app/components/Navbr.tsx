// export default function Navbar() {
//   return (
//     <nav className="p-4 shadow-md sticky top-0 bg-white z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         <h1 className="font-bold text-xl">Vedanta Keshri</h1>
//         <div className="space-x-4">
//           <a href="#about" className="hover:text-blue-500">About</a>
//           <a href="#projects" className="hover:text-blue-500">Projects</a>
//           <a href="#contact" className="hover:text-blue-500">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// }






import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className="p-4 shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Vedanta Keshri</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
