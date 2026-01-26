import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'Technology', id: 'technology' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Pre-calculate the orbit path for perfect smoothness and performance
  const orbitAnimation = useMemo(() => {
    const steps = 100; // High resolution for smoothness
    const x = [];
    const y = [];
    const zIndex = [];
    const scale = [];
    const opacity = [];

    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * 2 * Math.PI;

      // Parametric Equations for a Figure-8 (Lemniscate-like path)
      // x = A * sin(t)
      // y = B * sin(2t)
      const xPos = 85 * Math.sin(t);
      const yPos = 20 * Math.sin(2 * t);

      // Calculate Depth (z) using cos(t)
      // t=0 (Center, moving right): z=1 (Front)
      // t=PI (Center, moving left): z=-1 (Back)
      const zVal = Math.cos(t);

      x.push(xPos);
      y.push(yPos);

      // Simulate 3D depth
      // When zVal > 0 (front), scale is larger, zIndex is higher
      scale.push(0.5 + 0.5 * (zVal + 1.2) / 2.2); // Range approx 0.5 to 1.0
      zIndex.push(zVal > 0 ? 20 : 0); // Switch stacking context relative to Logo (z-10)
      opacity.push(zVal > 0 ? 1 : 0.4); // Fade out slightly when behind
    }

    return { x, y, zIndex, scale, opacity };
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${theme === 'dark'
        ? 'glass-nav'
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="relative flex-shrink-0 cursor-pointer group flex items-center justify-center w-[160px] h-full" onClick={scrollToTop}>

            {/* The Falling Star Orbit System */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none perspective-500">
              {/* Generate Trail Particles */}
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <motion.div
                  key={index}
                  className={`absolute rounded-full ${index === 0
                    ? 'bg-white w-1.5 h-1.5 shadow-[0_0_15px_3px_rgba(255,255,255,0.8)]' // Head
                    : 'bg-white/80 w-1 h-1' // Tail
                    }`}
                  animate={{
                    x: orbitAnimation.x,
                    y: orbitAnimation.y,
                    zIndex: orbitAnimation.zIndex,
                    scale: index === 0 ? orbitAnimation.scale : orbitAnimation.scale.map(s => s * (1 - index * 0.15)),
                    opacity: index === 0 ? orbitAnimation.opacity : orbitAnimation.opacity.map(o => o * (1 - index * 0.15))
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.08, // Stagger delays to create the trail effect
                  }}
                />
              ))}
            </div>

            <img
              src="./images/logo.png"
              alt="Dilmun XR"
              className="relative z-10 h-8 md:h-10 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-dilmun-muted hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark'
                  ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center gap-2 bg-dilmun-accent hover:bg-blue-600 text-white px-5 py-2 rounded-sm text-sm font-semibold transition-colors"
            >
              Consultation <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden border-b transition-colors duration-300 ${theme === 'dark'
            ? 'bg-dilmun-card border-gray-800'
            : 'bg-white border-gray-200'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${theme === 'dark'
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center gap-3 px-3 pt-4">
              <button
                onClick={toggleTheme}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-sm transition-colors ${theme === 'dark'
                    ? 'bg-white/10 text-yellow-400'
                    : 'bg-gray-100 text-gray-700'
                  }`}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <button
              onClick={() => handleScroll('contact')}
              className="block w-full text-left px-3 py-4 mt-4 text-center bg-dilmun-accent text-white font-bold rounded-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;