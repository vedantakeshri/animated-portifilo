'use client';

import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    'Frontend': [
      { name: 'React.js', level: 85, color: 'text-blue-400' },
      { name: 'Next.js', level: 80, color: 'text-gray-400' },
      { name: 'TypeScript', level: 50, color: 'text-blue-600' },
      { name: 'JavaScript (ES6+)', level: 90, color: 'text-yellow-400' },
      { name: 'HTML5', level: 95, color: 'text-orange-500' },
      { name: 'CSS3', level: 90, color: 'text-blue-500' },
    ],
    'Styling': [
      { name: 'Tailwind CSS', level: 85, color: 'text-cyan-400' },
      { name: 'Styled Components', level: 70, color: 'text-pink-400' },
      { name: 'Sass/SCSS', level: 55, color: 'text-pink-500' },
      { name: 'CSS Modules', level: 70, color: 'text-blue-400' },
      { name: 'Responsive Design', level: 90, color: 'text-green-400' },
      { name: 'CSS Grid & Flexbox', level: 85, color: 'text-purple-400' },
    ],
    'Tools': [
      { name: 'Git & GitHub', level: 80, color: 'text-orange-600' },
      { name: 'VS Code', level: 90, color: 'text-blue-600' },
      { name: 'NPM/Yarn', level: 75, color: 'text-red-500' },
      // { name: 'Webpack/Vite', level: 65, color: 'text-green-500' },
      { name: 'Chrome DevTools', level: 85, color: 'text-green-600' },
      { name: 'Figma', level: 70, color: 'text-purple-500' },
    ],
    'Performance': [
      { name: 'Website Optimization', level: 80, color: 'text-emerald-400' },
      { name: 'Core Web Vitals', level: 75, color: 'text-blue-400' },
      { name: 'SEO Optimization', level: 70, color: 'text-yellow-500' },
      { name: 'Image Optimization', level: 75, color: 'text-green-500' },
      { name: 'Code Splitting', level: 70, color: 'text-purple-400' },
      { name: 'Performance Monitoring', level: 65, color: 'text-orange-400' },
    ],
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          <p className="section-description">
            A comprehensive overview of my technical skills and the tools I use to create exceptional web experiences.
          </p>
        </div>

        <div className="skills-categories">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              className={`skill-category ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="card-header">
                <h3 className={`card-title ${skill.color}`}>{skill.name}</h3>
              </div>
              <div className="card-content">
                <div className="skill-progress">
                  <div className="skill-progress-info">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-white font-medium">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;