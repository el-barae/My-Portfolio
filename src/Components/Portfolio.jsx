import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Code, Database, Globe, Award, Calendar, ChevronDown, Menu, X, Zap, Star, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Intersection Observer for animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.observe(element);
      });

      return () => observer.disconnect();
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
    }
  };

  const skills = {
    'Frontend': ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Angular'],
    'Backend': ['Java', 'Spring Boot', 'Express.js', 'FastAPI', 'Python', 'PHP'],
    'Database': ['PostgreSQL', 'MySQL', 'SQL'],
    'Tools & Others': ['Git', 'GitHub', 'JWT', 'Blockchain', 'Solidity', 'Linux/Windows']
  };

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
      title: 'OLAS Library Management System',
      description: 'Desktop application for library inventory management with intuitive user interface',
      tech: ['Java Swing', 'MySQL'],
      type: 'Desktop Application'
    },
    {
      title: 'EXNOV Company Website',
      description: 'Professional company profile website with modern design and responsive layout',
      tech: ['HTML/CSS', 'JavaScript'],
      type: 'Web Development',
      link: 'https://exnov.ma/'
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
      title: 'Web3 E-commerce DApp',
      description: 'Decentralized e-commerce application with blockchain integration and cryptocurrency payments',
      tech: ['React', 'Hardhat', 'Solidity', 'Ethers.js', 'IPFS', 'MetaMask'],
      type: 'Blockchain',
      featured: true
    },
    {
      title: 'Civil Engineering Training Platform',
      description: 'Educational web application with payment integration for civil engineering courses',
      tech: ['React', 'Express', 'PostgreSQL', 'Stripe.js', 'Tailwind'],
      type: 'E-learning'
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 text-gray-800 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 50}px`,
            top: `${mousePosition.y / 50}px`,
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x / 100}px`,
            bottom: `${mousePosition.y / 100}px`,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-xl border-b border-gray-200/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse cursor-pointer"
                 onClick={() => scrollToSection('home')}>
              El Barae
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-600 transition-all duration-300 hover:scale-110 relative ${
                    activeSection === item ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 animate-expand"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mb-4 p-4 shadow-lg border border-gray-200/50 animate-slide-down">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 capitalize hover:text-blue-600 transition-colors hover:translate-x-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 mt-16 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold mb-6 text-white shadow-2xl animate-bounce-slow">
              <img className='rounded-full' src="/elbarae.jpeg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
            
            {/* Floating icons */}
            <Code className="absolute top-0 left-0 text-blue-400 animate-float" size={24} />
            <Database className="absolute top-10 right-0 text-cyan-400 animate-float-delayed" size={24} />
            <Zap className="absolute bottom-0 left-10 text-blue-500 animate-float-reverse" size={24} />
            <Star className="absolute bottom-10 right-10 text-cyan-500 animate-float" size={24} />
        </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent animate-slide-up">
            El Barae AKACHAR
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 animate-slide-up-delayed">
            Full Stack Web Developer & Software Engineer
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Passionate developer ready to launch my career in IT. Experienced in Java, JavaScript, Python, and modern web technologies. 
            Fast learner focused on creating innovative and user-friendly applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-slow">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-1 group"
            >
              <span className="group-hover:mr-2 transition-all duration-300">View My Work</span>
              <ExternalLink className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500 hover:scale-105 hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-16 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ChevronDown className="mx-auto text-gray-400 hover:text-blue-500 transition-colors" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 bg-white/50 transition-all duration-1000 ${visibleSections.has('about') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate developer from Tétouan, Morocco, currently pursuing my Master's in Computer Engineering. 
                My journey in technology has been driven by curiosity and a desire to create solutions that make a difference.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With experience in full-stack development, I specialize in building scalable web applications using modern 
                technologies like React, Spring Boot, and various databases. I'm particularly interested in AI integration 
                and blockchain technology.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <Code className="text-blue-500 mb-3 group-hover:animate-bounce" size={28} />
                  <h3 className="font-semibold text-gray-800 mb-1">Frontend</h3>
                  <p className="text-sm text-gray-600">React, Next.js, JavaScript</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <Database className="text-cyan-500 mb-3 group-hover:animate-bounce" size={28} />
                  <h3 className="font-semibold text-gray-800 mb-1">Backend</h3>
                  <p className="text-sm text-gray-600">Java, Spring, Python</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600">6+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-cyan-600">9</div>
                  <div className="text-sm text-gray-600">Months Experience</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-green-600">10+</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Education</h3>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center mb-3">
                  <Calendar className="text-blue-500 mr-2 group-hover:animate-pulse" size={18} />
                  <span className="text-blue-600 font-semibold">2025</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Master's in Computer Engineering</h4>
                <p className="text-gray-600">Faculty of Sciences - Tétouan</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center mb-3">
                  <Calendar className="text-cyan-500 mr-2 group-hover:animate-pulse" size={18} />
                  <span className="text-cyan-600 font-semibold">2024</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Bachelor's in Mathematical and Computer Sciences</h4>
                <p className="text-gray-600">Faculty of Sciences - Tétouan</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center mb-3">
                  <Award className="text-green-500 mr-2 group-hover:animate-pulse" size={18} />
                  <span className="text-green-600 font-semibold">Certificate</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Introduction to Cybersecurity</h4>
                <div className='flex place-content-between'>
                    <p className="text-gray-600">CISCO</p>
                    <a
                    href="/ElBaraeAKACHAR_CertificateCybersecurity.pdf"
                    download 
                    className="px-2 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center hover:scale-105 hover:-translate-y-1 group"
                    >
                    <Download className=" group-hover:animate-bounce" size={20} /></a>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 transition-all duration-1000 ${visibleSections.has('skills') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={category} 
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
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Languages</h3>
            <div className="flex justify-center space-x-12">
              <div className="text-center animate-bounce-slow group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-pulse">
                  <Globe size={28} className="text-white" />
                </div>
                <p className="font-semibold text-gray-800">Arabic</p>
                <p className="text-sm text-gray-600">Native</p>
              </div>
              <div className="text-center animate-bounce-slow group" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-pulse">
                  <Globe size={28} className="text-white" />
                </div>
                <p className="font-semibold text-gray-800">French</p>
                <p className="text-sm text-gray-600">Fluent</p>
              </div>
              <div className="text-center animate-bounce-slow group" style={{ animationDelay: '0.4s' }}>
                <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:animate-pulse">
                  <Globe size={28} className="text-white" />
                </div>
                <p className="font-semibold text-gray-800">English</p>
                <p className="text-sm text-gray-600">Proficient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 bg-white/50 transition-all duration-1000 ${visibleSections.has('projects') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
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
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-1000 ${visibleSections.has('contact') ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 text-center animate-fade-in">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-500 group-hover:animate-bounce" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600 break-all">elbarae.akachar@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                    <Phone className="text-cyan-500 group-hover:animate-bounce" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+212 6 51 58 79 22</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MapPin className="text-green-500 group-hover:animate-bounce" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Tétouan, Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin" size={20} />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Form Status Messages */}
              {formStatus.message && (
                <div className={`mt-4 p-4 rounded-lg flex items-center space-x-2 ${
                  formStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {formStatus.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center space-x-6 animate-fade-in-slow">
              <a 
                href="https://github.com/el-barae" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200 group"
              >
                <Github size={28} className="text-gray-700 group-hover:text-black transition-colors" />
              </a>

                              <a
                    href="https://www.linkedin.com/in/el-barae-akachar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-200 group"
                >
                    <Linkedin size={28} className="text-gray-700 group-hover:text-blue-700 transition-colors" />
                </a>

              <a
                href="/ElBaraeAKACHAR-CV.pdf"
                download 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center hover:scale-105 hover:-translate-y-1 group"
                >
                <Download className="mr-2 group-hover:animate-bounce" size={20} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-600">
                © 2025 El Barae Akachar. Built with React and Tailwind CSS.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Crafted with passion in Tétouan, Morocco 🇲🇦
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Progress Indicator */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group"
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ChevronDown className="text-blue-500 transform rotate-180 group-hover:animate-bounce" size={20} />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-up-delayed {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-delayed {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slide-down {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes expand {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: #3B82F6; }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 5s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-up-delayed { animation: slide-up-delayed 1s ease-out 0.2s both; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1.2s ease-out 0.4s both; }
        .animate-fade-in-slow { animation: fade-in-slow 1.5s ease-out 0.6s both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .animate-expand { animation: expand 0.3s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-rotate { animation: rotate 20s linear infinite; }
        .animate-scale-pulse { animation: scale-pulse 2s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #3B82F6;
          animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
        }
        
        /* Scroll-triggered animations */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .scroll-animate.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom gradient text */
        .gradient-text {
          background: linear-gradient(45deg, #3B82F6, #06B6D4, #3B82F6);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Hover effects */
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        /* Particle effects */
        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: particle-float 15s infinite linear;
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
        
        /* Loading animations */
        .loading-dots {
          display: inline-flex;
          gap: 4px;
        }
        
        .loading-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3B82F6;
          animation: loading-bounce 1.4s infinite ease-in-out;
        }
        
        .loading-dot:nth-child(1) { animation-delay: -0.32s; }
        .loading-dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes loading-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3B82F6, #06B6D4);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563EB, #0891B2);
        }

        /* Form input focus states */
        input:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Button hover effects */
        button:hover {
          transform: translateY(-2px);
        }

        /* Glass morphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* Ripple effect */
        .ripple {
          position: relative;
          overflow: hidden;
        }

        .ripple::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .ripple:hover::before {
          width: 300px;
          height: 300px;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;