import { ExternalLink} from 'lucide-react';

const ProjectCard = ({ project, index }) => (
  <div 
    className={`bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl group animate-fade-in-up relative overflow-hidden ${project.featured ? 'ring-2 ring-blue-200' : ''}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Hover overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="p-6 relative">
      {project.featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-cyan-500 text-white px-3 py-1 text-xs rounded-bl-lg animate-pulse">
          Featured
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs rounded-full font-medium group-hover:animate-pulse">
          {project.type}
        </span>
          {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110 cursor-pointer" size={20} />
        </a>
         )}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      
      {project.duration && (
        <p className="text-xs text-blue-600 mb-4 font-medium">{project.duration}</p>
      )}
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span 
            key={techIndex} 
            className="px-3 py-1 bg-gray-100 hover:bg-blue-50 text-xs rounded-full text-gray-700 hover:text-blue-700 transition-colors duration-300 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Projects Section Component
const ProjectsSection = ({ visibleSections }) => {
  const projects = [
  {
    title: 'AI Recruitment Web Application',
    description: 'Full-stack recruitment platform with AI recommendation system built for Diaaland company',
    tech: ['Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'FastAPI'],
    type: 'Internship Project',
    duration: '9 months (2023-2024)',
    featured: true
  },
  {
    title: 'DimaRun Sports Platform',
    description: 'Web application for running sports services with user authentication and VPS deployment',
    tech: ['React', 'Express', 'PostgreSQL', 'JWT', 'Tailwind'],
    type: 'Full Stack',
    link: 'https://dimarun.com/en',
    featured: true
  },
    {
    title: 'CarbonTrack - Blockchain Carbon Credit DApp',
    description: 'Blockchain-based platform for carbon credit tokenization and tracking, developed during internship at Mchain',
    tech: ['React', 'Next.js', 'Solidity', 'Ethers.js', 'Hardhat', 'IPFS', 'MetaMask'],
    type: 'Blockchain',
    duration: '1.5 months (Aug - Sep 2025)',
    featured: true
  },
  {
    title: 'Web3 E-commerce DApp',
    description: 'Decentralized e-commerce application with blockchain integration and cryptocurrency payments',
    tech: ['React', 'Hardhat', 'Solidity', 'Ethers.js', 'IPFS', 'MetaMask'],
    type: 'Blockchain',
    link: 'https://blockchain-store.netlify.app/',
    featured: true
  },
    {
    title: 'EXNOV Company Website',
    description: 'Professional company profile website with modern design and responsive layout',
    tech: ['HTML/CSS', 'JavaScript'],
    type: 'Web Development',
    link: 'https://exnov.ma/'
  },
  {
    title: 'Civil Engineering Training Platform',
    description: 'Educational web application with payment integration for civil engineering courses',
    tech: ['React', 'Express', 'PostgreSQL', 'Stripe.js', 'Tailwind'],
    type: 'E-learning'
  },
  // {
  //   title: 'OLAS Library Management System',
  //   description: 'Desktop application for library inventory management with intuitive user interface',
  //   tech: ['Java Swing', 'MySQL'],
  //   type: 'Desktop Application'
  // }
]

  return (
    <section id="projects" className={`py-20 px-4 bg-white/50 transition-all duration-1000 ${visibleSections.has('projects') ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;