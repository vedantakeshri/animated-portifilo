// export default function Projects() {
//   const projects = [
//     {
//       title: "Real Estate CRM",
//       img: "/project1.png",
//       link: "https://real-estate-crm-azure.vercel.app/",
//       desc: "A modular CRM system for real estate brokers. Built with Next.js & Laravel."
//     },
//     {
//       title: "LMS Platform",
//       img: "/project2.png",
//       link: "https://lms-demo.vercel.app",
//       desc: "Learning management system for offline coaching institutes."
//     },
//     {
//       title: "E-commerce Website",
//       img: "/project3.png",
//       link: "https://toystore-demo.vercel.app",
//       desc: "An e-commerce store for books & toys using React.js & Firebase."
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-gray-50 text-center">
//       <h2 className="text-3xl font-bold mb-8 fade-in">Projects</h2>
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//         {projects.map((p, i) => (
//           <div
//             key={i}
//             className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition fade-in delay-${(i % 3) + 1}`}
//           >
//             <img src={p.img} alt={`${p.title} Project`} className="w-full h-56 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">{p.title}</h3>
//               <p className="text-gray-600 mb-4">{p.desc}</p>
//               <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                 View Project →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






// "use client";
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// const Portfolio = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "Modern e-commerce solution built with Next.js, featuring dynamic product catalogs, secure payments, and responsive design.",
//       tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
//       category: "Web Development",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       liveUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       title: "Fashion Blog Content",
//       description: "Comprehensive content strategy and 50+ articles for luxury fashion brand, increasing organic traffic by 200%.",
//       tech: ["SEO", "Content Strategy", "Fashion Writing"],
//       category: "Content Writing",
//       image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       liveUrl: "#",
//       githubUrl: null
//     },
//     {
//       title: "Task Management App",
//       description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
//       tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
//       category: "Web Development",
//       image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       liveUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       title: "Toy Industry Guide",
//       description: "Complete content creation for toy manufacturer including product descriptions, buying guides, and safety content.",
//       tech: ["Product Writing", "Technical Writing", "Safety Compliance"],
//       category: "Content Writing",
//       image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       liveUrl: "#",
//       githubUrl: null
//     },
//     {
//       title: "Portfolio Website",
//       description: "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
//       tech: ["React.js", "Tailwind CSS", "Framer Motion"],
//       category: "Web Development",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       liveUrl: "#",
//       githubUrl: "#"
//     },
//     {
//       title: "Children's Book Series",
//       description: "Creative writing for 10-book children's series focusing on environmental awareness and adventure stories.",
//       tech: ["Creative Writing", "Children's Literature", "Storytelling"],
//       category: "Content Writing",
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       liveUrl: "#",
//       githubUrl: null
//     }
//   ];

//   const categories = ["All", "Web Development", "Content Writing"];
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <section id="portfolio" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//             My Work
//           </h2>
//           <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
//           <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
//             A showcase of my recent projects spanning web development and content creation
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "hero" : "ghost"}
//               onClick={() => setActiveCategory(category)}
//               className="rounded-full"
//             >
//               {category}
//             </Button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <Card key={index} className="group overflow-hidden card-hover bg-gradient-card border-card-border">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   <div className="flex gap-2">
//                     <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
//                       <ExternalLink className="h-4 w-4" />
//                     </Button>
//                     {project.githubUrl && (
//                       <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
//                         <Github className="h-4 w-4" />
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
//                     {project.category}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-card-foreground">
//                   {project.title}
//                 </h3>
//                 <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
















"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution built with Next.js, featuring dynamic product catalogs, secure payments, and responsive design.",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fashion Blog Content",
      description: "Comprehensive content strategy and 50+ articles for luxury fashion brand, increasing organic traffic by 200%.",
      tech: ["SEO", "Content Strategy", "Fashion Writing"],
      category: "Content Writing",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: null
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Toy Industry Guide",
      description: "Complete content creation for toy manufacturer including product descriptions, buying guides, and safety content.",
      tech: ["Product Writing", "Technical Writing", "Safety Compliance"],
      category: "Content Writing",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: null
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, smooth animations, and optimized performance.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Children's Book Series",
      description: "Creative writing for 10-book children's series focusing on environmental awareness and adventure stories.",
      tech: ["Creative Writing", "Children's Literature", "Storytelling"],
      category: "Content Writing",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      githubUrl: null
    }
  ];

  const categories = ["All", "Web Development", "Content Writing"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Work</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A showcase of my recent projects spanning web development and content creation
          </p>
        </div>

        {/* Category Filter */}
        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'filter-btn-active' : 'filter-btn-inactive'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image-container">
                <img
                  src={project.image}
                  alt={project.title}
              
                  className="portfolio-image"
                />
                <div className="portfolio-overlay" />
                <div className="portfolio-actions">
                  <button className="btn btn-outline" style={{ background: 'rgba(255, 255, 255, 0.9)', color: 'black' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                  {project.githubUrl && (
                    <button className="btn btn-outline" style={{ background: 'rgba(255, 255, 255, 0.9)', color: 'black' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <div className="portfolio-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="portfolio-category">
                    {project.category}
                  </span>
                </div>
                <h3 className="portfolio-title">
                  {project.title}
                </h3>
                <p className="portfolio-description">
                  {project.description}
                </p>
                <div className="portfolio-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
