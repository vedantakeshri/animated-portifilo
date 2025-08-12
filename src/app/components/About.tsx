import { Code, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Lightbulb className="text-emerald-400" size={24} />,
      title: 'Problem Solving',
      description: 'Creative solutions to complex development challenges'
    },
    {
      icon: <Users className="text-orange-400" size={24} />,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About Me
          </h2>
          <p className="section-description">
            Discover my journey as a frontend developer and what drives my passion for creating exceptional web experiences.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
              <p className="text-gray-300">
                With <span className="text-blue-400 font-semibold">1 year of dedicated experience</span> in frontend development, 
                I&apos;ve immersed myself in the world of modern web technologies. My journey began with a fascination for 
                creating beautiful, functional user interfaces that solve real-world problems.
              </p>
              <p className="text-gray-300">
                I specialize in <span className="text-emerald-400 font-semibold">React.js and Next.js</span>, 
                building responsive, performant applications that prioritize user experience and accessibility. 
                My focus on <span className="text-orange-400 font-semibold">website optimization</span> ensures 
                that every project I work on loads fast and performs exceptionally.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What I Bring</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div style={{ width: '8px', height: '8px', background: '#60a5fa', borderRadius: '50%' }}></div>
                  <span>Modern JavaScript (ES6+) and TypeScript expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div style={{ width: '8px', height: '8px', background: '#34d399', borderRadius: '50%' }}></div>
                  <span>Responsive design with Tailwind CSS and custom styling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div style={{ width: '8px', height: '8px', background: '#fb923c', borderRadius: '50%' }}></div>
                  <span>Performance optimization and SEO best practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div style={{ width: '8px', height: '8px', background: '#a78bfa', borderRadius: '50%' }}></div>
                  <span>Cross-browser compatibility and accessibility standards</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-content">
                  <div className="highlight-icon">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;