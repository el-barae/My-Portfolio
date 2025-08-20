import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const ContactForm = ({ contactForm, setContactForm, handleContactSubmit, isSubmitting, formStatus }) => (
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
);

// Contact Info Component
const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "elbarae.akachar@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+212 6 51 58 79 22",
      color: "cyan"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tétouan, Morocco",
      color: "green"
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h3>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center group-hover:bg-${item.color}-200 transition-colors`}>
                <Icon className={`text-${item.color}-500 group-hover:animate-bounce`} size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 break-all">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Contact Section Component
const ContactSection = ({ visibleSections, contactForm, setContactForm, handleContactSubmit, isSubmitting, formStatus }) => {
  return (
    <section id="contact" className={`py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-1000 ${visibleSections.has('contact') ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 text-center animate-fade-in">
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm 
            contactForm={contactForm}
            setContactForm={setContactForm}
            handleContactSubmit={handleContactSubmit}
            isSubmitting={isSubmitting}
            formStatus={formStatus}
          />
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
  );
};

export default ContactSection;