



// "use client";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Services", href: "#services" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-custom-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="text-xl font-bold text-primary">
//             Portfolio
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className="text-foreground hover:text-primary transition-colors duration-300"
//               >
//                 {item.name}
//               </button>
//             ))}
//             <Button
             
//               size="sm"
//               onClick={() => scrollToSection("#contact")}
//             >
//               Hire Me
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-foreground"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
//             <div className="px-4 py-4 space-y-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <Button
               
//                 size="sm"
//                 className="w-full"
//                 onClick={() => scrollToSection("#contact")}
//               >
//                 Hire Me
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;















// components/Navbar.js - Next.js Navbar Component
"use client"
import { useState, useEffect } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    // { name: 'Portfolio', href: '#portfolio' },
    // { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="navbar-link"
              >
                {item.name}
              </a>
            ))}
            <button
              className="btn btn-hero"
              onClick={() => scrollToSection('#contact')}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navbar-mobile-menu">
            <div className="navbar-mobile-nav">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="navbar-link"
                >
                  {item.name}
                </button>
              ))}
              <button
                className="btn btn-hero"
                onClick={() => scrollToSection('#contact')}
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
