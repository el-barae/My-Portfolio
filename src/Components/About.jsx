import { Code, Database, Award, Calendar, Download} from 'lucide-react';

const AboutSection = ({ visibleSections }) => {
  return (
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
  );
};

export default AboutSection;