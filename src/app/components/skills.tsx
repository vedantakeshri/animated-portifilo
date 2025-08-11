export default function Skills() {
  const skills = ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git", "Figma"];

  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 fade-in">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className={`px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow text-gray-800 hover:shadow-lg transition fade-in delay-${(index % 3) + 1}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
