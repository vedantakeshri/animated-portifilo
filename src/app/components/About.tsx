'use client';
import {
  Briefcase,
  Building2,
  Code2,
  Globe,
  LayoutDashboard,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-blue-400" size={26} />,
      title: 'Scalable Frontend Architecture',
      description:
        'Building reusable, maintainable, and scalable frontend systems using React.js and Next.js.',
    },

    {
      icon: <Rocket className="text-cyan-400" size={26} />,
      title: 'Performance Focused',
      description:
        'Optimizing applications for faster load times, responsiveness, SEO, and smooth user experience.',
    },

    {
      icon: <Users className="text-emerald-400" size={26} />,
      title: 'Team Collaboration',
      description:
        'Collaborating with designers and backend developers to deliver production-ready applications.',
    },

    {
      icon: <Zap className="text-yellow-400" size={26} />,
      title: 'Modern UI Development',
      description:
        'Creating clean, modern, and visually engaging interfaces with responsive layouts and smooth interactions.',
    },
  ];

  const stats = [
    {
      value: '1+',
      label: 'Years Experience',
    },

    {
      value: '10+',
      label: 'Projects Built',
    },

    {
      value: '100%',
      label: 'Responsive UI',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400 backdrop-blur-xl">
            <Sparkles size={16} />
            About Me
          </div>

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Crafting Modern &
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {' '}
              High-Performance
            </span>{' '}
            Web Applications
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Frontend Developer focused on building scalable SaaS
            dashboards, CRM systems, trading platforms, and modern
            business applications with exceptional user experience.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Top */}
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Globe className="text-blue-400" size={30} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    My Journey
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Frontend Developer • React.js • Next.js
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 leading-8 text-gray-300">
                <p>
                  I’m a frontend developer with{' '}
                  <span className="font-semibold text-blue-400">
                    1 year of experience
                  </span>{' '}
                  building responsive, scalable, and modern web
                  applications focused on performance and user
                  experience.
                </p>

                <p>
                  I specialize in{' '}
                  <span className="font-semibold text-cyan-400">
                    React.js
                  </span>{' '}
                  and{' '}
                  <span className="font-semibold text-cyan-400">
                    Next.js
                  </span>
                  , developing clean frontend architecture, reusable
                  components, responsive dashboards, and business
                  applications.
                </p>

                <p>
                  My work primarily focuses on{' '}
                  <span className="font-semibold text-emerald-400">
                    SaaS dashboards
                  </span>
                  , CRM systems, trading platforms, admin panels,
                  and modern business websites that solve real-world
                  problems.
                </p>
              </div>

              {/* Bottom Skills */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  'React.js & Next.js',
                  'Tailwind CSS',
                  'Responsive Design',
                  'REST API Integration',
                  'Performance Optimization',
                  'Reusable Components',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-gray-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-400" />

                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-black text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* Featured Box */}
            <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-8 backdrop-blur-2xl">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20">
                  <LayoutDashboard
                    className="text-blue-400"
                    size={30}
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    What I Build
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Modern frontend solutions
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'SaaS Dashboards',
                  'CRM Systems',
                  'Trading Platforms',
                  'Business Websites',
                  'Admin Panels',
                  'Modern UI Systems',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-center text-gray-200 transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid gap-5">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/5"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 transition-all duration-300 group-hover:border-blue-400">
                      {highlight.icon}
                    </div>

                    <div className="flex-1">
                      <h4 className="mb-3 text-xl font-semibold text-white">
                        {highlight.title}
                      </h4>

                      <p className="leading-7 text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Card */}
            <div className="rounded-[32px] border border-emerald-500/20 bg-emerald-500/10 p-8 backdrop-blur-xl">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20">
                  <Building2
                    className="text-emerald-400"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Professional Experience
                  </h3>

                  <p className="mt-2 text-emerald-400">
                    Frontend Developer • Logicspice
                  </p>

                  <p className="mt-4 leading-7 text-gray-300">
                    Worked on production-level business platforms,
                    responsive dashboard interfaces, reusable
                    frontend components, and API integrations while
                    collaborating with backend developers and teams.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-black/20 px-5 py-2 text-sm text-emerald-400">
                    <Briefcase size={16} />
                    Production-Level Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;