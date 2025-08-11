import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbr";
import Projects from "./components/Projects";
import Skills from "./components/skills";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      {/* <Projects /> */}
      <Contact />
    </>
  );
}
