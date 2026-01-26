import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { Droplet, Flame, Eye, HardHat, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OilGas: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "HSE Compliance",
      desc: "Standardize safety training across global sites. Ensure every employee experiences critical failure scenarios in VR before stepping on a rig.",
      icon: <HardHat size={32} />
    },
    {
      title: "Remote Inspection",
      desc: "Deploy autonomous robots or drones with VR interfaces to inspect offshore assets, reducing the need for human personnel in hazardous zones.",
      icon: <Eye size={32} />
    },
    {
      title: "Subsea Simulation",
      desc: "Visualize subsea infrastructure and reservoir data in 3D to plan drilling operations and maintenance with higher precision.",
      icon: <Droplet size={32} />
    },
    {
      title: "Emergency Response",
      desc: "Drill fire fighting, blowout containment, and evacuation procedures in hyper-realistic multi-user simulations.",
      icon: <Flame size={32} />
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/oilgas.jpg" 
            alt="Offshore Rig" 
            className="w-full h-full object-cover filter grayscale-[30%] opacity-40"
             onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516937941348-c09645f31e88?q=80&w=2670&auto=format&fit=crop';
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
              ENERGY & RESOURCES
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Upstream <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Precision</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Enhancing operational safety and efficiency in the world's most demanding environments through immersive technology.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Safety Through Simulation</h2>
            <p className="text-dilmun-muted text-lg leading-relaxed mb-6">
              The Oil & Gas sector faces unique challenges: remote locations, high-pressure environments, and zero margin for error. 
            </p>
            <p className="text-dilmun-muted text-lg leading-relaxed">
              Dilmun XR solutions focus on "Active Muscle Memory." By replicating rig environments and control rooms in VR, we allow operators to practice critical procedures until they are second nature, significantly reducing incident rates and improving operational uptime.
            </p>
          </div>
          
          <div className="space-y-6">
             {benefits.map((item, idx) => (
               <div key={idx} className="bg-dilmun-card border border-white/5 p-6 flex items-start gap-6 hover:border-yellow-500/50 transition-colors">
                 <div className="text-yellow-500/80 pt-1">
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
            <h3 className="text-3xl font-bold text-white mb-4">Protect your workforce & assets</h3>
            <p className="text-dilmun-muted mb-8 max-w-2xl mx-auto">Schedule a confidential consultation regarding our HSE training modules.</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-dilmun-accent hover:bg-blue-600 text-white px-8 py-4 font-bold rounded-sm transition-all flex items-center gap-2 mx-auto"
            >
              Contact Energy Division <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 pointer-events-none"></div>
        </div>
      </Section>
    </div>
  );
};

export default OilGas;