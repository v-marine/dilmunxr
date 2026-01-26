import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { Scan, Globe, GraduationCap, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Heritage: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Digital Archiving",
      desc: "Create millimeter-accurate point cloud records of sites. Ensure that even if the physical structure degrades, the data remains forever.",
      icon: <Scan size={32} />
    },
    {
      title: "Virtual Tourism",
      desc: "Open fragile or inaccessible sites to the global public through web-based 3D tours and VR experiences, generating revenue without physical footfall.",
      icon: <Globe size={32} />
    },
    {
      title: "Academic Research",
      desc: "Allow archaeologists and historians to study artifacts remotely. Overlay spectral data and historical hypothesis layers onto 3D models.",
      icon: <GraduationCap size={32} />
    },
    {
      title: "Time-Lapse Restoration",
      desc: "Visualize what a ruin looked like centuries ago. AR overlays allow visitors to see the past superimposed onto the present.",
      icon: <Clock size={32} />
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./images/heritage.jpg"
            alt="Digital Heritage"
            className="w-full h-full object-cover filter grayscale-[20%] opacity-40"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599940824399-b87987ce0799?q=80&w=2670&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dilmun-dark via-dilmun-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest text-dilmun-accent border border-dilmun-accent/30 bg-dilmun-accent/10 rounded-sm">
              CULTURE & HERITAGE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-100">Immortality</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Preserving human history through state-of-the-art photogrammetry and laser scanning technologies.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Preservation meets Innovation</h2>
            <p className="text-dilmun-muted text-lg leading-relaxed mb-6">
              Heritage sites face constant threats from climate change, erosion, and human conflict. Once lost, they are gone forever.
            </p>
            <p className="text-dilmun-muted text-lg leading-relaxed">
              Dilmun XR partners with cultural authorities to create scientific-grade digital twins of monuments and artifacts. We don't just take photos; we capture geometry, texture, and light to create an enduring digital legacy that can be studied and enjoyed for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-dilmun-card border border-white/5 p-6 flex gap-6 hover:border-amber-200/30 transition-colors">
                <div className="text-amber-200/70 flex-shrink-0 pt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 p-12 bg-dilmun-card border border-white/10 text-center rounded-sm relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Preserve your history</h3>
            <p className="text-dilmun-muted mb-8 max-w-2xl mx-auto">Contact us to discuss photogrammetry and laser scanning projects.</p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-dilmun-accent hover:bg-blue-600 text-white px-8 py-4 font-bold rounded-sm transition-all flex items-center gap-2 mx-auto"
            >
              Start Archiving Project <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-900/10 to-yellow-900/10 pointer-events-none"></div>
        </div>
      </Section>
    </div>
  );
};

export default Heritage;