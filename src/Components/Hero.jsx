import { ExternalLink, Code, Database, ChevronDown, Zap, Star } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
           <div className="mb-8 mt-16 relative">
             <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full flex items-center justify-center text-4xl font-bold mb-6 text-white shadow-2xl animate-bounce-slow">
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
  );
};

export default HeroSection;