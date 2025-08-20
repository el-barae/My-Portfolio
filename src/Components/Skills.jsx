import {  Globe } from 'lucide-react';


const SkillCard = ({ category, items, index }) => (
  <div 
    className="bg-white/70 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up group"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <h3 className="text-xl font-semibold mb-4 text-blue-600 group-hover:text-cyan-600 transition-colors">{category}</h3>
    <div className="space-y-3">
      {items.map((skill, skillIndex) => (
        <div 
          key={skillIndex} 
          className="flex items-center hover:translate-x-2 transition-transform duration-300 group/skill"
        >
          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover/skill:animate-pulse"></div>
          <span className="text-gray-700 group-hover/skill:text-blue-600 transition-colors">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

const LanguageCard = ({ color, language, level, delay = 0 }) => (
  <div className="text-center animate-bounce-slow group" style={{ animationDelay: `${delay}s` }}>
    <div className={`w-20 h-20 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-pulse`}>
      <Globe size={28} className="text-white" />
    </div>
    <p className="font-semibold text-gray-800">{language}</p>
    <p className="text-sm text-gray-600">{level}</p>
  </div>
);

const SkillsSection = ({ visibleSections }) => {
  const skills = {
    'Frontend': ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Angular'],
    'Backend': ['Java', 'Spring Boot', 'Express.js', 'FastAPI', 'Python', 'PHP'],
    'Database': ['PostgreSQL', 'MySQL', 'SQL'],
    'Tools & Others': ['Git', 'GitHub', 'JWT', 'Blockchain', 'Solidity', 'Linux/Windows']
  };

  const languages = [
    { color: 'from-green-400 to-green-500', language: 'Arabic', level: 'Native', delay: 0 },
    { color: 'from-blue-400 to-blue-500', language: 'French', level: 'Fluent', delay: 0.2 },
    { color: 'from-red-400 to-red-500', language: 'English', level: 'Proficient', delay: 0.4 }
  ];

  return (
    <section id="skills" className={`py-20 px-4 bg-blue-100 transition-all duration-1000 ${visibleSections.has('skills') ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard key={category} category={category} items={items} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">Languages</h3>
          <div className="flex justify-center space-x-12">
            {languages.map((lang, index) => (
              <LanguageCard key={index} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;