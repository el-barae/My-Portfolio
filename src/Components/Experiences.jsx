import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => (
  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
    <div>
      <p className="font-semibold text-gray-800">{testimonial.name}</p>
      <p className="text-sm text-blue-600">{testimonial.role}</p>
    </div>
  </div>
);

// Experience Section Component
const ExperienceSection = ({ visibleSections }) => {
  const experience = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Diaaland IT',
      period: 'Sep 2023 - Jul 2024',
      description: 'Developed a comprehensive recruitment web application with AI-powered recommendation system. Worked with modern technologies including Spring Boot, React/Next.js, and PostgreSQL.',
      achievements: [
        'Built AI recommendation system for job matching',
        'Implemented secure authentication with JWT',
        'Designed responsive UI with React and Next.js',
        'Integrated email services with SpringMail'
      ]
    }
  ];

  const testimonials = [
    {
      name: "Diaa Alhak El Fallous",
      role: "Diaaland IT",
      content: "El Barae demonstrated exceptional technical skills and dedication during his internship.",
      rating: 5
    }
  ];

  return (
    <section id="experience" className={`py-20 px-4 transition-all duration-1000 ${visibleSections.has('experience') ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 mb-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-in-up group relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-2 hover:text-cyan-600 transition-colors duration-300">{exp.role}</h3>
                    <p className="text-xl text-gray-800 mb-2 font-medium">{exp.company}</p>
                    <p className="text-blue-500 font-medium">{exp.period}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm rounded-full font-medium">
                      9 Months
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-4 text-blue-600">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start hover:translate-x-2 transition-transform duration-300 group/item">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:animate-pulse"></div>
                        <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors duration-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">What People Say</h3>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;