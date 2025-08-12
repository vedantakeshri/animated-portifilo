import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbr";
import Skills from "./components/skills";
import Projects from "./components/Projects";




export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
