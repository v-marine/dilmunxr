import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { Box, Workflow, AlertTriangle, Cpu, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Manufacturing: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Assembly Training",
      desc: "Train operators on complex assembly sequences in VR before production lines are even built. Reduce onboarding time by 40%.",
      icon: <Box size={32} />
    },
    {
      title: "Digital Twins",
      desc: "Real-time mirroring of physical factory floors. Monitor efficiency, detect bottlenecks, and simulate workflow changes risk-free.",
      icon: <Workflow size={32} />
    },
    {
      title: "Safety Simulations",
      desc: "Replicate hazardous environments (chemical spills, fire, machinery failure) to build muscle memory for emergency procedures.",
      icon: <AlertTriangle size={32} />
    },
    {
      title: "AR Maintenance",
      desc: "Heads-up displays for field technicians overlaying schematics, instructions, and IoT data directly onto physical machinery.",
      icon: <Cpu size={32} />
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/manufacturing.jpg" 
            alt="Advanced Manufacturing" 
            className="w-full h-full object-cover filter grayscale-[40%] opacity-40"
             onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop';
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
              INDUSTRIAL & MANUFACTURING
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Industry 4.0 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Realized</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Minimizing downtime and maximizing safety through high-fidelity simulation and augmented operational support.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Zero-Risk Optimization</h2>
            <p className="text-dilmun-muted text-lg leading-relaxed mb-6">
              In modern manufacturing, the cost of error is high. Downtime costs thousands per minute, and training accidents can be tragic. XR technology removes these risks.
            </p>
            <p className="text-dilmun-muted text-lg leading-relaxed">
              Dilmun XR provides the platform to prototype processes, train staff, and maintain equipment without interrupting active production lines. We turn your CAD data into interactive training modules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {benefits.map((item, idx) => (
               <div key={idx} className="bg-dilmun-card border border-white/5 p-6 hover:border-dilmun-accent/50 transition-colors group">
                 <div className="text-dilmun-accent mb-4 group-hover:scale-110 transition-transform origin-left">
                   {item.icon}
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

         <div className="mt-32 p-12 bg-dilmun-card border border-white/10 text-center rounded-sm relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Optimize your production line</h3>
            <p className="text-dilmun-muted mb-8 max-w-2xl mx-auto">Let's discuss how digital twins can improve your OEE (Overall Equipment Effectiveness).</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-dilmun-accent hover:bg-blue-600 text-white px-8 py-4 font-bold rounded-sm transition-all flex items-center gap-2 mx-auto"
            >
              Consult with our Engineers <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-red-500/10 pointer-events-none"></div>
        </div>
      </Section>
    </div>
  );
};

export default Manufacturing;