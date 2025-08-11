// import { Card } from "@/components/ui/card";
// import { Code, PenTool, Server, Zap } from "lucide-react";

// const About = () => {
//   const skills = [
//     {
//       icon: <Code className="h-8 w-8" />,
//       title: "Frontend Development",
//       description: "React.js, Next.js, TypeScript, Tailwind CSS",
//       color: "text-accent-purple",
//     },
//     {
//       icon: <Server className="h-8 w-8" />,
//       title: "Backend Skills",
//       description: "Node.js, Express, Database design, API development",
//       color: "text-primary",
//     },
//     {
//       icon: <PenTool className="h-8 w-8" />,
//       title: "Content Writing",
//       description: "Books, Fashion, Toys, SEO optimization",
//       color: "text-accent-pink",
//     },
//     {
//       icon: <Zap className="h-8 w-8" />,
//       title: "UI/UX Design",
//       description: "User-centered design, Figma, Responsive layouts",
//       color: "text-accent-orange",
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-background-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
//           <p className="text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
//             I'm a passionate frontend developer with 1+ year of hands-on experience 
//             in React.js and Next.js, combined with strong backend knowledge. I also bring 
//             a creative edge through content writing for diverse industries including 
//             books, toys, and fashion.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {skills.map((skill, index) => (
//             <Card
//               key={index}
//               className="p-6 text-center bg-gradient-card border-card-border card-hover"
//             >
//               <div className={`${skill.color} mb-4 flex justify-center`}>
//                 {skill.icon}
//               </div>
//               <h3 className="text-lg font-semibold mb-2 text-card-foreground">
//                 {skill.title}
//               </h3>
//               <p className="text-sm text-foreground-muted">
//                 {skill.description}
//               </p>
//             </Card>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-bold mb-6 text-foreground">
//               My Journey
//             </h3>
//             <div className="space-y-4 text-foreground-muted">
//               <p>
//                 Started my journey as a frontend developer, quickly mastering React.js 
//                 and Next.js to build modern, responsive web applications. My background 
//                 in backend technologies allows me to understand the full development cycle.
//               </p>
//               <p>
//                 Simultaneously, I've developed expertise in content writing across 
//                 diverse niches including literature, toy industry, and fashion. This 
//                 unique combination allows me to create both technically sound and 
//                 compelling user experiences.
//               </p>
//               <p>
//                 I'm passionate about creating solutions that not only work flawlessly 
//                 but also engage users through thoughtful design and compelling content.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-gradient-card p-6 rounded-lg text-center shadow-custom-md">
//               <div className="text-2xl font-bold text-primary mb-2">React.js</div>
//               <div className="text-sm text-foreground-muted">Advanced</div>
//             </div>
//             <div className="bg-gradient-card p-6 rounded-lg text-center shadow-custom-md">
//               <div className="text-2xl font-bold text-primary mb-2">Next.js</div>
//               <div className="text-sm text-foreground-muted">Advanced</div>
//             </div>
//             <div className="bg-gradient-card p-6 rounded-lg text-center shadow-custom-md">
//               <div className="text-2xl font-bold text-primary mb-2">TypeScript</div>
//               <div className="text-sm text-foreground-muted">Intermediate</div>
//             </div>
//             <div className="bg-gradient-card p-6 rounded-lg text-center shadow-custom-md">
//               <div className="text-2xl font-bold text-primary mb-2">Content</div>
//               <div className="text-sm text-foreground-muted">Expert</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

















// components/About.js - Next.js About Component
// export default function About() {
//   const skills = [
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <polyline points="16,18 22,12 16,6"></polyline>
//           <polyline points="8,6 2,12 8,18"></polyline>
//         </svg>
//       ),
//       title: "Frontend Development",
//       description: "React.js, Next.js, TypeScript, Tailwind CSS",
//       iconClass: "skill-icon-purple",
//     },
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//           <line x1="8" y1="21" x2="16" y2="21"></line>
//           <line x1="12" y1="17" x2="12" y2="21"></line>
//         </svg>
//       ),
//       title: "Backend Skills",
//       description: "Node.js, Express, Database design, API development",
//       iconClass: "skill-icon-primary",
//     },
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
//           <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
//           <path d="M2 2l7.586 7.586"></path>
//           <circle cx="11" cy="11" r="2"></circle>
//         </svg>
//       ),
//       title: "Content Writing",
//       description: "Books, Fashion, Toys, SEO optimization",
//       iconClass: "skill-icon-pink",
//     },
//     {
//       icon: (
//         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
//         </svg>
//       ),
//       title: "UI/UX Design",
//       description: "User-centered design, Figma, Responsive layouts",
//       iconClass: "skill-icon-orange",
//     },
//   ];

//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">About Me</h2>
//           <div className="section-divider"></div>
//           <p className="section-description">
//             I'm a passionate frontend developer with 1+ year of hands-on experience 
//             in React.js and Next.js, combined with strong backend knowledge. I also bring 
//             a creative edge through content writing for diverse industries including 
//             books, toys, and fashion.
//           </p>
//         </div>

//         <div className="skills-grid">
//           {skills.map((skill, index) => (
//             <div key={index} className="skill-card">
//               <div className={`skill-icon ${skill.iconClass}`}>
//                 {skill.icon}
//               </div>
//               <h3 className="skill-title">{skill.title}</h3>
//               <p className="skill-description">{skill.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
//           <div>
//             <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'hsl(var(--color-foreground))' }}>
//               My Journey
//             </h3>
//             <div className="space-y-4" style={{ color: 'hsl(var(--color-foreground-muted))' }}>
//               <p>
//                 Started my journey as a frontend developer, quickly mastering React.js 
//                 and Next.js to build modern, responsive web applications. My background 
//                 in backend technologies allows me to understand the full development cycle.
//               </p>
//               <p>
//                 Simultaneously, I've developed expertise in content writing across 
//                 diverse niches including literature, toy industry, and fashion. This 
//                 unique combination allows me to create both technically sound and 
//                 compelling user experiences.
//               </p>
//               <p>
//                 I'm passionate about creating solutions that not only work flawlessly 
//                 but also engage users through thoughtful design and compelling content.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
//             <div style={{ background: 'var(--gradient-card)', padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: 'var(--shadow-custom-md)' }}>
//               <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'hsl(var(--color-primary))', marginBottom: '0.5rem' }}>React.js</div>
//               <div style={{ fontSize: '0.875rem', color: 'hsl(var(--color-foreground-muted))' }}>Advanced</div>
//             </div>
//             <div style={{ background: 'var(--gradient-card)', padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: 'var(--shadow-custom-md)' }}>
//               <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'hsl(var(--color-primary))', marginBottom: '0.5rem' }}>Next.js</div>
//               <div style={{ fontSize: '0.875rem', color: 'hsl(var(--color-foreground-muted))' }}>Advanced</div>
//             </div>
//             <div style={{ background: 'var(--gradient-card)', padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: 'var(--shadow-custom-md)' }}>
//               <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'hsl(var(--color-primary))', marginBottom: '0.5rem' }}>TypeScript</div>
//               <div style={{ fontSize: '0.875rem', color: 'hsl(var(--color-foreground-muted))' }}>Intermediate</div>
//             </div>
//             <div style={{ background: 'var(--gradient-card)', padding: '1.5rem', borderRadius: '0.5rem', textAlign: 'center', boxShadow: 'var(--shadow-custom-md)' }}>
//               <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'hsl(var(--color-primary))', marginBottom: '0.5rem' }}>Content</div>
//               <div style={{ fontSize: '0.875rem', color: 'hsl(var(--color-foreground-muted))' }}>Expert</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true,    // Run only once
    });
  }, []);

  // const skills = [
  //   {
  //     icon: (
  //       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //         <polyline points="16,18 22,12 16,6"></polyline>
  //         <polyline points="8,6 2,12 8,18"></polyline>
  //       </svg>
  //     ),
  //     title: "Frontend Development",
  //     description: "React.js, Next.js, TypeScript, Tailwind CSS",
  //     iconClass: "skill-icon-purple",
  //   },
  //   {
  //     icon: (
  //       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //         <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
  //         <line x1="8" y1="21" x2="16" y2="21"></line>
  //         <line x1="12" y1="17" x2="12" y2="21"></line>
  //       </svg>
  //     ),
  //     title: "Backend Skills",
  //     description: "Node.js, Express, Database design, API development",
  //     iconClass: "skill-icon-primary",
  //   },
  //   {
  //     icon: (
  //       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //         <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
  //         <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
  //         <path d="M2 2l7.586 7.586"></path>
  //         <circle cx="11" cy="11" r="2"></circle>
  //       </svg>
  //     ),
  //     title: "Content Writing",
  //     description: "Books, Fashion, Toys, SEO optimization",
  //     iconClass: "skill-icon-pink",
  //   },
  //   {
  //     icon: (
  //       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //         <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
  //       </svg>
  //     ),
  //     title: "UI/UX Design",
  //     description: "User-centered design, Figma, Responsive layouts",
  //     iconClass: "skill-icon-orange",
  //   },
  // ];



  const skills = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16,18 22,12 16,6"></polyline>
        <polyline points="8,6 2,12 8,18"></polyline>
      </svg>
    ),
    title: "Frontend Development",
    description: "React.js, Next.js, TypeScript, Tailwind CSS",
    iconClass: "skill-icon-purple",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18"></path>
      </svg>
    ),
    title: "Website Performance Optimization",
    description: "Core Web Vitals, Lighthouse, Code Splitting, Lazy Loading",
    iconClass: "skill-icon-green",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 12h8M12 8v8"></path>
      </svg>
    ),
    title: "UI/UX Design",
    description: "User-focused interfaces, wireframing, and responsive layouts",
    iconClass: "skill-icon-pink",
  },
];


  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          {/* <p className="section-description">
            I'm a passionate frontend developer with 1+ year of hands-on experience 
            in React.js and Next.js, combined with strong backend knowledge. I also bring 
            a creative edge through content writing for diverse industries including 
            books, toys, and fashion.
          </p> */}
<p className="section-description">
  I'm a frontend developer with a strong foundation in React.js and Next.js, 
  passionate about creating responsive, modern websites that are optimized for 
  speed, accessibility, and SEO. While I'm early in my professional journey, 
  I’m constantly building personal projects to refine my skills and stay updated 
  with the latest web technologies.
</p>

        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={`skill-icon ${skill.iconClass}`}>
                {skill.icon}
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2" 
          style={{ gap: '3rem', alignItems: 'center' }}
        >
          <div data-aos="fade-right">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'hsl(var(--color-foreground))' }}>
              My Journey
            </h3>
            <div className="space-y-4" style={{ color: 'hsl(var(--color-foreground-muted))' }}>
              <p>
                Started my journey as a frontend developer, quickly mastering React.js 
                and Next.js to build modern, responsive web applications. My background 
                in backend technologies allows me to understand the full development cycle.
              </p>
              <p>
                Simultaneously, I've developed expertise in content writing across 
                diverse niches including literature, toy industry, and fashion. This 
                unique combination allows me to create both technically sound and 
                compelling user experiences.
              </p>
              <p>
                I'm passionate about creating solutions that not only work flawlessly 
                but also engage users through thoughtful design and compelling content.
              </p>
            </div>
          </div>

          <div 
            className="grid grid-cols-4" 
            style={{ gap: '1rem' }}
            data-aos="fade-left"
          >
            {[
              { name: "React.js", level: "Advanced" },
              { name: "Next.js", level: "Advanced" },
              { name: "Javascript", level: "Basic" },
              { name: "CSS", level: "Intermediate" },

            ].map((item, i) => (
              <div 
                key={i}
                style={{ 
                  background: 'linear-gradient(90deg, #ff007f, #f69, #fc9) 0 0 / 200%', 
                  padding: '1.5rem', 
                  borderRadius: '0.5rem', 
                  textAlign: 'center', 
                  boxShadow: 'var(--shadow-custom-md)' 
                }}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'hsl(var(--color-primary))', marginBottom: '0.5rem' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#fff' }}>
                  {item.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
