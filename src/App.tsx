import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Technology from './pages/Technology';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import ParticlesBackground from './components/ParticlesBackground';

// Industry Pages
import Government from './pages/industries/Government';
import Manufacturing from './pages/industries/Manufacturing';
import OilGas from './pages/industries/OilGas';
import Heritage from './pages/industries/Heritage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-dilmun-dark text-dilmun-text font-sans selection:bg-dilmun-accent selection:text-white overflow-x-hidden">
        <ParticlesBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              
              {/* Industry Sub-pages */}
              <Route path="/industries/government" element={<Government />} />
              <Route path="/industries/manufacturing" element={<Manufacturing />} />
              <Route path="/industries/oil-gas" element={<OilGas />} />
              <Route path="/industries/heritage" element={<Heritage />} />

              <Route path="/technology" element={<Technology />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;