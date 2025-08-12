// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center px-4"
//     >
//       <img
//         src="/profile.jpg"
//         alt="Vedanta Keshri - Frontend Developer"
//         className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-white fade-in"
//       />

//       <h1 className="text-4xl md:text-5xl font-bold mb-4 typing">
//         Hi, I'm Vedanta Keshri 👋
//       </h1>

//       <p className="text-lg text-gray-600 max-w-xl fade-in delay-1">
//         Frontend Developer with 1 year of experience in React.js, Next.js, and Laravel.
//         I create fast, responsive, and beautiful web applications.
//       </p>

//       <div className="flex space-x-4 mt-6 fade-in delay-2">
//         <a
//           href="#projects"
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition"
//         >
//           View My Work
//         </a>
//         <a
//           href="/Vedanta_Keshri_Resume.pdf"
//           download
//           className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:shadow-xl transform hover:scale-105 transition"
//         >
//           Download Resume
//         </a>
//       </div>
//     </section>
//   );
// }















// "use client";

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Download } from "lucide-react";
// // import heroImage from "@/assets/hero-image.jpg";

// const Hero = () => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Background with overlay */}
//       <div className="absolute inset-0 z-0">
//         {/* <img
//           src={heroImage}
//           alt="Hero background"
//           className="w-full h-full object-cover"
//         /> */}
//         <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 z-10">
//         <div className="text-center max-w-4xl mx-auto">
//           <div className="animate-fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//               <span className="text-foreground">Hi, I'm </span>
//               <span className="bg-gradient-primary bg-clip-text text-transparent">
//                 Alex Chen
//               </span>
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-semibold text-foreground-muted mb-8">
//               Frontend Developer & Creative Content Writer
//             </h2>
//             <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
//               I craft beautiful, responsive web experiences with React.js and Next.js, 
//               while creating compelling content for books, toys, and fashion brands.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
//             <Button
             
//               onClick={() => scrollToSection("#contact")}
//               className="group"
//             >
//               Hire Me
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button
//               variant="outline"
              
//               onClick={() => scrollToSection("#portfolio")}
//             >
//               <Download className="mr-2 h-5 w-5" />
//               View Work
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-scale-in">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">1+</div>
//               <div className="text-foreground-muted">Years Experience</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">20+</div>
//               <div className="text-foreground-muted">Projects Completed</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">100%</div>
//               <div className="text-foreground-muted">Client Satisfaction</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


















// "use client"

// import Image from 'next/image';

// export default function Hero() {
//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="hero" className="hero">
//       {/* Background with overlay */}
//       <div className="hero-background">
//         <Image
//           src="/hero-image.jpg"
//           alt="Hero background - Modern workspace with laptop and design elements"
//           fill
//           className="hero-image"
//           priority
//           sizes="100vw"
//         />
//         <div className="hero-overlay" />
//       </div>

//       {/* Content */}
//       <div className="container">
//         <div className="hero-content">
//           <div className="animate-fade-in">
//             <h1 className="hero-title">
//               <span>Hi, I'm </span>
//               {/* <span className="text-gradient">Vedanta Keshri</span> */}
// <span className="animated-text">
//   {"Vedanta Keshri".split("").map((char, i) => (
//     <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
//       {char === " " ? "\u00A0" : char}
//     </span>
//   ))}
// </span>
//             </h1>
//             <h2 className="hero-subtitle">
//               Frontend Developer
//             </h2>
//             <p className="hero-description">
//               I craft beautiful, responsive web experiences with React.js and Next.js.
//             </p>
//           </div>

//           <div className="hero-buttons animate-slide-up">
//             <button
//               className="btn btn-primary btn-xl"
//               onClick={() => scrollToSection('#contact')}
//             >
//               Hire Me
//               <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <line x1="5" y1="12" x2="19" y2="12"></line>
//                 <polyline points="12,5 19,12 12,19"></polyline>
//               </svg>
//             </button>
//             <button
//               className="btn btn-outline btn-xl"
//               onClick={() => scrollToSection('#portfolio')}
//             >
//               <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                 <polyline points="7,10 12,15 17,10"></polyline>
//                 <line x1="12" y1="15" x2="12" y2="3"></line>
//               </svg>
//               View Work
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="hero-stats animate-scale-in">
//             <div className="hero-stat">
//               <div className="hero-stat-number">1+</div>
//               <div className="hero-stat-label">Years Experience</div>
//             </div>
//             <div className="hero-stat">
//               <div className="hero-stat-number">20+</div>
//               <div className="hero-stat-label">Projects Completed</div>
//             </div>
//             <div className="hero-stat">
//               <div className="hero-stat-number">100%</div>
//               <div className="hero-stat-label">Client Satisfaction</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="hero-scroll-indicator">
//         <div className="hero-scroll-mouse">
//           <div className="hero-scroll-dot"></div>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client"

// import Image from "next/image";


// export default function Hero() {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Initialize AOS


//   return (
//     <section id="hero" className="hero">
//       {/* Background with overlay */}
//       <div className="hero-background">
//         <Image
//           src="/hero-image.jpg"
//           alt="Hero background - Modern workspace with laptop and design elements"
//           fill
//           className="hero-image"
//           priority
//           sizes="100vw"
//         />
//         <div className="hero-overlay" />
//       </div>

//       {/* Content */}
//       <div className="container">
//         <div className="hero-content">
//           {/* Title */}
//           <div data-aos="fade-up">
//             <h1 className="hero-title">
//               <span>Hi, I&apos;m </span>
//               <span className="animated-text">
//                 {"Vedanta Keshri".split("").map((char, i) => (
//                   <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
//                     {char === " " ? "\u00A0" : char}
//                   </span>
//                 ))}
//               </span>
//             </h1>
//             <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
//               Frontend Developer
//             </h2>
//             <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
//               I craft beautiful, responsive web experiences with React.js and Next.js.
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="hero-buttons" data-aos="zoom-in" data-aos-delay="600">
//             <button
//               className="btn btn-primary btn-xl"
//               onClick={() => scrollToSection("#contact")}
//             >
//               Hire Me
//               <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <line x1="5" y1="12" x2="19" y2="12"></line>
//                 <polyline points="12,5 19,12 12,19"></polyline>
//               </svg>
//             </button>
//             {/* <button
//               className="btn btn-outline btn-xl"
//               onClick={() => scrollToSection("#portfolio")}
//             >
//               <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                 <polyline points="7,10 12,15 17,10"></polyline>
//                 <line x1="12" y1="15" x2="12" y2="3"></line>
//               </svg>
//               View Work
//             </button> */}

//             <button
//   className="btn btn-outline btn-xl"
//   onClick={() => {
//     const link = document.createElement("a");
//     link.href = "/resume.pdf"; // Path in public folder
//     link.download = "Vedanta_Keshri_Resume.pdf"; // File name for download
//     link.click();
//   }}
// >
//   <svg
//     className="mr-2"
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//     <polyline points="7,10 12,15 17,10"></polyline>
//     <line x1="12" y1="15" x2="12" y2="3"></line>
//   </svg>
//   Download CV
// </button>

//           </div>

//           {/* Stats */}
//           {/* <div className="hero-stats" data-aos="fade-up" data-aos-delay="800">
//             <div className="hero-stat">
//               <div className="hero-stat-number">1+</div>
//               <div className="hero-stat-label">Years Experience</div>
//             </div>
//             <div className="hero-stat">
//               <div className="hero-stat-number">20+</div>
//               <div className="hero-stat-label">Projects Completed</div>
//             </div>
//             <div className="hero-stat">
//               <div className="hero-stat-number">100%</div>
//               <div className="hero-stat-label">Client Satisfaction</div>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="hero-scroll-indicator" data-aos="fade-down" data-aos-delay="1000">
//         <div className="hero-scroll-mouse">
//           <div className="hero-scroll-dot"></div>
//         </div>
//       </div>
//     </section>
//   );
// }
















'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Frontend Developer', 'React.js', 'Next.js', 'web developer'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="hero-bg-element"></div>
        <div className="hero-bg-element"></div>
        <div className="hero-bg-element"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-blue-400 font-medium">Hello, I'm</p>
              <h1 className="hero-title">
                Vedanta Keshri
              </h1>
              <div className="hero-subtitle">
                <span>{currentText}</span>
                <span style={{ animation: 'pulse 1s infinite' }}>|</span>
              </div>
            </div>
            
            <p className="hero-description">
              Passionate frontend developer with 1 year of experience crafting modern, 
              responsive web applications using cutting-edge technologies.
            </p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary btn-lg">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline btn-lg">
                Get In Touch
              </a>
            </div>
            
            <div className="hero-social">
              <a 
                href="https://github.com/vedantakeshri" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="www.linkedin.com/in/vedanta-keshri-35b0a0212" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:vedantakeshri@gmail.com">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
