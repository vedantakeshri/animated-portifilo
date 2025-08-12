// import { ExternalLink, Github } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'E-Commerce Platform',
//       description: 'A modern e-commerce platform built with Next.js featuring dynamic product catalogs, shopping cart functionality, and optimized performance with 95+ Lighthouse scores.',
//       image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
//       technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
//       liveUrl: '#',
//       githubUrl: '#',
//       highlights: ['Server-side rendering', 'Image optimization', 'SEO optimized']
//     },
//     {
//       title: 'Task Management Dashboard',
//       description: 'An intuitive task management application with drag-and-drop functionality, real-time updates, and responsive design across all devices.',
//       image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
//       technologies: ['React.js', 'JavaScript', 'CSS Modules', 'HTML5'],
//       liveUrl: '#',
//       githubUrl: '#',
//       highlights: ['Drag & drop interface', 'Local storage', 'Mobile responsive']
//     },
//     {
//       title: 'Weather Forecast App',
//       description: 'A beautiful weather application providing real-time weather data with location-based forecasts, animated weather icons, and performance optimization.',
//       image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
//       technologies: ['React.js', 'API Integration', 'Tailwind CSS', 'JavaScript'],
//       liveUrl: '#',
//       githubUrl: '#',
//       highlights: ['API integration', 'Geolocation', 'Animated UI']
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'A responsive portfolio website showcasing modern web development practices, optimized for performance and accessibility with smooth animations.',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
//       technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//       liveUrl: '#',
//       githubUrl: '#',
//       highlights: ['Performance optimized', 'Accessible design', 'Smooth animations']
//     },
//   ];

//   return (
//     <section id="projects" className="projects">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">
//             Featured Projects
//           </h2>
//           <p className="section-description">
//             A showcase of my recent work demonstrating technical skills, creativity, and attention to detail in frontend development.
//           </p>
//         </div>

//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div key={index} className="project-card">
//               <div className="project-image">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                 />
//                 <div className="project-image-overlay"></div>
//               </div>
              
//               <div className="project-header">
//                 <div className="project-title-row">
//                   <h3 className="project-title">
//                     {project.title}
//                   </h3>
//                   <div className="project-links">
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
//                       <ExternalLink size={16} />
//                     </a>
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
//                       <Github size={16} />
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="project-tech">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="tech-badge">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="card-content">
//                 <p className="project-description">
//                   {project.description}
//                 </p>
                
//                 <div className="project-highlights">
//                   <h4>Key Features:</h4>
//                   <ul>
//                     {project.highlights.map((highlight, highlightIndex) => (
//                       <li key={highlightIndex}>
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center" style={{ marginTop: '3rem' }}>
//           <a 
//             href="https://github.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="btn btn-outline btn-lg"
//           >
//             View All Projects on GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;














import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Real Estate CRM',
      description:
        'A full-featured customer relationship management platform tailored for real estate agencies, enabling agents to manage leads, track properties, and automate follow-ups. Built with Next.js and Laravel for performance, scalability, and ease of use.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      technologies: ['Next.js', 'Tailwind CSS' ],
      liveUrl: 'https://real-estate-crm-azure.vercel.app/', // Replace with your real demo link
      githubUrl: '#', // Replace with your repo link
   highlights: [
  'Homepage with featured properties',
  'Advanced property search functionality',
  'Comprehensive property listings with details',
  'Responsive & mobile-friendly design'
]

    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive and performance-optimized portfolio website showcasing skills, projects, and services, designed to highlight web development expertise and attract potential clients.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#', // Replace with your portfolio URL
      githubUrl: '#', // Replace with your repo link
      highlights: [
        'Performance optimized with 95+ Lighthouse score',
        'Clean and accessible UI/UX design',
        'Smooth scroll animations',
        'Mobile-first responsive layout',
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A showcase of my recent work demonstrating technical skills,
            creativity, and attention to detail in frontend development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg"
                />
                <div className="project-image-overlay"></div>
              </div>

              <div className="project-header">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-content">
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a
            href="https://github.com" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
