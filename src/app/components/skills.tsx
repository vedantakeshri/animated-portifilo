'use client';

import { useState } from 'react';

import {
  Code2,
  Palette,
  Wrench,
  Gauge,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState('Frontend');

  const skillCategories = {
    Frontend: {
      icon: <Code2 size={18} />,
      description:
        'Building scalable and modern frontend applications.',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
      ],
    },

    Styling: {
      icon: <Palette size={18} />,
      description:
        'Creating responsive and visually engaging interfaces.',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'CSS Grid & Flexbox', level: 90 },
        { name: 'Styled Components', level: 75 },
        { name: 'Sass / SCSS', level: 65 },
        { name: 'CSS Modules', level: 75 },
      ],
    },

    Tools: {
      icon: <Wrench size={18} />,
      description:
        'Modern development workflow and collaboration tools.',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
        { name: 'NPM / Yarn', level: 80 },
        { name: 'Chrome DevTools', level: 88 },
        { name: 'REST APIs', level: 82 },
      ],
    },

    Performance: {
      icon: <Gauge size={18} />,
      description:
        'Optimizing speed, SEO, and overall user experience.',
      skills: [
        { name: 'Website Optimization', level: 85 },
        { name: 'Core Web Vitals', level: 78 },
        { name: 'SEO Optimization', level: 75 },
        { name: 'Code Splitting', level: 72 },
        { name: 'Image Optimization', level: 80 },
        { name: 'Lazy Loading', level: 78 },
      ],
    },
  };

  const currentCategory =
    skillCategories[
      activeCategory as keyof typeof skillCategories
    ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 backdrop-blur-md">
            <Sparkles size={16} />
            Skills & Expertise
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Technologies I Use To Build
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Modern Web Apps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A combination of frontend technologies, UI expertise,
            performance optimization, and development tools that help
            me create fast, scalable, and responsive applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-4">
          {Object.keys(skillCategories).map((category) => {
            const item =
              skillCategories[
                category as keyof typeof skillCategories
              ];

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex items-center gap-3 rounded-2xl border px-6 py-4 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white'
                }`}
              >
                {item.icon}

                {category}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Left Info Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
              {currentCategory.icon}
            </div>

            <h3 className="text-3xl font-bold text-white">
              {activeCategory}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {currentCategory.description}
            </p>

            <div className="mt-10 space-y-4">
              {currentCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/5"
              >
                {/* Top */}
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h4>

                  <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                    style={{
                      width: `${skill.level}%`,
                    }}
                  />
                </div>

                {/* Skill Label */}
                <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
                  <span>Proficiency</span>

                  <span>
                    {skill.level >= 85
                      ? 'Advanced'
                      : skill.level >= 70
                      ? 'Intermediate'
                      : 'Basic'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">
            Always Learning & Improving
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            I continuously explore modern frontend technologies,
            scalable UI architecture, performance optimization, and
            real-world SaaS development to improve my development
            workflow and deliver better user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;