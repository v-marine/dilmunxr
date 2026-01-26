import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Services from './Services';
import Industries from './Industries';
import Technology from './Technology';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Background Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dilmun-dark/50 to-dilmun-dark z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
              Your immersive <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                solutions partner
              </span>
            </h1>
            <p className="text-lg md:text-xl text-dilmun-muted max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Dilmun XR delivers enterprise-grade virtual reality, augmented reality, and immersive simulation technologies for critical industries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => handleScroll('contact')}
                className="bg-dilmun-accent hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Schedule a Technical Consultation <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => handleScroll('services')} 
                className="px-8 py-4 text-lg font-medium text-white border border-white/20 hover:bg-white/5 rounded-sm transition-all"
              >
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <Services id="services" className="border-t border-white/5" />
      <Industries id="industries" className="border-t border-white/5 bg-white/5" />
      <Technology id="technology" className="border-t border-white/5" />
      <Projects id="projects" className="border-t border-white/5 bg-white/5" />
      <About id="about" className="border-t border-white/5" />
      <Contact id="contact" className="border-t border-white/5 bg-gradient-to-b from-dilmun-card to-dilmun-dark" />

    </div>
  );
};

export default Home;