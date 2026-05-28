'use client';

import Image from 'next/image';

import {
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ExternalLink,
  Github,
  Sparkles,
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Intraday Trading SaaS',

      category: 'FinTech SaaS',

      description:
        'A modern trading dashboard platform designed for intraday traders with responsive UI, analytics cards, reusable dashboard components, and performance-focused frontend architecture.',

      image:
        'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg',

      technologies: [
        'Next.js',
        'React.js',
        'Tailwind CSS',
        'TypeScript',
      ],

      liveUrl:
        'https://intraday-trading-saas.vercel.app/',

      githubUrl: '#',

      highlights: [
        'Modern SaaS dashboard design',
        'Responsive mobile-first UI',
        'Reusable dashboard components',
        'Trading analytics cards',
        'Performance optimized frontend',
        'Dark modern UI system',
      ],
    },

    {
      title: 'Real Estate CRM',

      category: 'CRM Dashboard',

      description:
        'A scalable CRM platform for real estate businesses to manage properties, customer workflows, and lead management with a modern dashboard experience.',

      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',

      technologies: [
        'Next.js',
        'React.js',
        'Tailwind CSS',
        'Laravel',
      ],

      liveUrl:
        'https://real-estate-crm-azure.vercel.app/',

      githubUrl: '#',

      highlights: [
        'Lead management dashboard',
        'Property listing management',
        'Responsive admin panel',
        'Advanced property filtering',
        'Reusable UI architecture',
        'Business workflow management',
      ],
    },
  ];

  const companyProjects = [
    {
      company: 'Logicspice',

      role: 'Frontend Developer',

      project: 'Job Board Platform',

      description:
        'Worked on a production-level job board platform focused on responsive frontend development, reusable UI components, dashboard interfaces, and API integration.',

      technologies: [
        'React.js',
        'Next.js',
        'JavaScript',
        'Tailwind CSS',
        'REST APIs',
      ],

      contributions: [
        'Built responsive frontend components',
        'Integrated APIs and dynamic data',
        'Improved dashboard responsiveness',
        'Worked on reusable UI architecture',
        'Collaborated with backend developers',
        'Optimized frontend performance',
      ],

      website:
        'https://www.logicspice.com/',

      demo:
        'https://job-board-software.logicspice.com/',
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-400 backdrop-blur-md">
            <Sparkles size={16} />
            Featured Work
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Projects &
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Professional Experience
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            A collection of modern SaaS applications, CRM systems,
            and production-level frontend projects built using
            React.js, Next.js, and scalable UI architecture.
          </p>
        </div>

        {/* Personal Projects */}
        <div className="mb-24">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              <Github size={16} />
              Personal Projects
            </div>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-blue-400 hover:bg-blue-500/5"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <div className="relative h-[320px] w-full lg:h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute left-6 top-6">
                      <div className="rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
                        {project.category}
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-300">
                          Built with scalable frontend architecture.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-8 lg:p-10">
                    <div>
                      {/* Top */}
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-3xl font-bold text-white">
                            {project.title}
                          </h3>

                          <p className="mt-5 leading-8 text-gray-400">
                            {project.description}
                          </p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
                          >
                            <ExternalLink
                              size={18}
                              className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                            />
                          </a>

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/10 hover:text-white"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8 flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="mb-5 text-xl font-semibold text-white">
                          Key Features
                        </h4>

                        <div className="grid gap-4 sm:grid-cols-2">
                          {project.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/5"
                            >
                              <div className="mt-1">
                                <CheckCircle2
                                  size={18}
                                  className="text-blue-400"
                                />
                              </div>

                              <span className="text-sm leading-7 text-gray-300">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 border-t border-white/10 pt-8">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-3 rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
                      >
                        View Live Project

                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-400">
              <Briefcase size={16} />
              Professional Experience
            </div>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-10">
            {companyProjects.map((project, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-8 flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
                        <Building2
                          className="text-emerald-400"
                          size={22}
                        />
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {project.project}
                        </h3>

                        <p className="text-emerald-400">
                          {project.role} • {project.company}
                        </p>
                      </div>
                    </div>

                    <p className="max-w-4xl leading-8 text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-emerald-400 hover:text-white"
                    >
                      Company Website
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-emerald-400 hover:text-white"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="mb-8 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="mb-5 text-xl font-semibold text-white">
                    Key Contributions
                  </h4>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.contributions.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-5"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-emerald-400"
                        />

                        <span className="text-sm leading-7 text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-20 text-center">
          <a
            href="https://github.com/vedantakeshri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;