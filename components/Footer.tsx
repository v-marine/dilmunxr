import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dilmun-card border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4 group" onClick={() => window.scrollTo(0, 0)}>
              <img 
                src="./images/logo.png" 
                alt="Dilmun XR" 
                className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-dilmun-muted text-sm max-w-xs leading-relaxed">
              Developing custom immersive software solutions for enterprise, government, and industrial sectors.
              <br />
              <br />
              Bahrain-based. Globally capable.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Sitemap</h3>
            <ul className="space-y-2 text-sm text-dilmun-muted">
              <li><button onClick={() => handleScroll('services')} className="hover:text-dilmun-accent text-left transition-colors">Services</button></li>
              <li><button onClick={() => handleScroll('industries')} className="hover:text-dilmun-accent text-left transition-colors">Industries</button></li>
              <li><button onClick={() => handleScroll('technology')} className="hover:text-dilmun-accent text-left transition-colors">Technology</button></li>
              <li><button onClick={() => handleScroll('projects')} className="hover:text-dilmun-accent text-left transition-colors">Projects</button></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
             <ul className="space-y-2 text-sm text-dilmun-muted">
               <li>inquiries@dilmunxr.com</li>
               <li>Manama, Bahrain</li>
               <li className="pt-2">
                 <button onClick={() => handleScroll('contact')} className="text-dilmun-accent hover:underline text-left">
                   Schedule Consultation &rarr;
                 </button>
               </li>
             </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Dilmun XR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;