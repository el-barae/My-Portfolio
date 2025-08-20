import { useState, useEffect} from 'react';
import { ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navigation from './Navigation';
import AboutSection from './About';
import ContactSection from './Contact';
import ExperienceSection from './Experiences';
import HeroSection from './Hero';
import ProjectsSection from './Projects';
import SkillsSection from './Skills';
import './animations.css'

// Background Effects Component
const BackgroundEffects = ({ mousePosition }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"
      style={{
        left: `${mousePosition.x / 50}px`,
        top: `${mousePosition.y / 50}px`,
        animation: 'float 6s ease-in-out infinite'
      }}
    ></div>
    <div 
      className="absolute w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
      style={{
        right: `${mousePosition.x / 100}px`,
        bottom: `${mousePosition.y / 100}px`,
        animation: 'float 8s ease-in-out infinite reverse'
      }}
    ></div>
  </div>
);

// Scroll to Top Button Component
const ScrollToTopButton = () => (
  <div className="fixed bottom-4 right-4 z-50">
    <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group"
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ChevronDown className="text-blue-500 transform rotate-180 group-hover:animate-bounce" size={20} />
    </div>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="py-8 px-4 border-t border-gray-200 bg-blue-100">
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
);

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }
  };

const handleContactSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Paramètres optimisés pour éviter les spams
    const templateParams = {
      from_name: contactForm.name,
      from_email: contactForm.email,
      message: contactForm.message,
      to_name: 'Elbarae Akachar', 
      reply_to: contactForm.email, 
      subject: `Portfolio Contact: Message de ${contactForm.name}`,
      // Ajout d'informations contextuelles
      timestamp: new Date().toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      source: 'Portfolio Website',
      user_agent: navigator.userAgent.substring(0, 100) // Info technique (optionnel)
    };

    await emailjs.send(
      'service_ivx8hcj',     
      'template_exwnxvq',    
      templateParams,
      '_WrWbm2NpOsEz7DRm'      
    );

    setFormStatus({ 
      type: 'success', 
      message: '✅ Message envoyé avec succès! Je vous répondrai dans les 24h.' 
    });
    setContactForm({ name: '', email: '', message: '' });
    
    
  } catch (error) {
    
    // Message d'erreur plus informatif
    let errorMsg = 'Échec de l\'envoi du message. ';
    if (error.status === 400) errorMsg += 'Données invalides.';
    else if (error.status === 402) errorMsg += 'Quota dépassé.';
    else if (error.status === 403) errorMsg += 'Service non autorisé.';
    else errorMsg += 'Veuillez réessayer ou me contacter directement.';
    
    setFormStatus({ 
      type: 'error', 
      message: `❌ ${errorMsg}` 
    });
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setFormStatus({ type: '', message: '' }), 7000);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 text-gray-800 overflow-x-hidden">
      <BackgroundEffects mousePosition={mousePosition} />
      
      <Navigation 
        activeSection={activeSection} 
        isScrolled={isScrolled} 
        scrollToSection={scrollToSection} 
      />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <AboutSection visibleSections={visibleSections} />
      
      <SkillsSection visibleSections={visibleSections} />
      
      <ProjectsSection visibleSections={visibleSections} />
      
      <ExperienceSection visibleSections={visibleSections} />
      
      <ContactSection 
        visibleSections={visibleSections}
        contactForm={contactForm}
        setContactForm={setContactForm}
        handleContactSubmit={handleContactSubmit}
        isSubmitting={isSubmitting}
        formStatus={formStatus}
      />
      
      <Footer />
      
      <ScrollToTopButton />
    </div>
  );
};

export default Portfolio;