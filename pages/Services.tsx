import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { Box, MonitorPlay, Landmark, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  id?: string;
  className?: string;
}

const Services: React.FC<ServicesProps> = ({ id, className }) => {
  const services = [
    {
      id: "immersive-presentations",
      title: "Immersive Presentations",
      subtitle: "Interactive Real-time Experiences",
      description: "We create high-fidelity interactive environments for showrooms, events, and stakeholder engagement. From large-format touchscreen configurators to full VR architectural walkthroughs, we turn static concepts into explorable realities.",
      icon: <MonitorPlay size={32} />,
      image: "./images/immersivepresentation.jpg",
      uses: [
        "Real-time Touchscreen Apps",
        "VR Walkthroughs",
        "AR Product Configurators",
        "Event Activations"
      ]
    },
    {
      id: "vr-training",
      title: "Industrial VR Training",
      subtitle: "Zero-Risk Operational Readiness",
      description: "Replace passive learning with active muscle memory. Our VR simulations replicate hazardous scenarios and complex machinery operations with millimeter precision, ensuring workforce readiness before they step on site.",
      icon: <Box size={32} />,
      image: "./images/vrtraining.jpg",
      uses: [
        "HSE Safety Drills",
        "Heavy Machinery Operation",
        "Emergency Response",
        "Assembly Procedures"
      ]
    },
    {
      id: "heritage",
      title: "Heritage Digitization",
      subtitle: "Institutional-Grade Preservation",
      description: "We utilize laser scanning and photogrammetry to create archival-quality 3D records of historical sites and artifacts. These assets serve preservation efforts, academic research, and public virtual tourism.",
      icon: <Landmark size={32} />,
      image: "./images/heritage.jpg",
      uses: [
        "Digital Archiving",
        "Virtual Museums",
        "Restoration Planning",
        "Academic Research"
      ]
    }
  ];

  return (
    <div className={className}>
      <Section id={id}>
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-dilmun-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Core Competencies</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Impossible</span>
            </h1>
            <p className="text-xl text-dilmun-muted leading-relaxed">
              We bridge the gap between physical reality and digital potential. 
              Our solutions are built for critical environments where precision is paramount.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              
              {/* Text Content */}
              <div className="flex-1 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-dilmun-card border border-white/10 flex items-center justify-center text-dilmun-accent group-hover:bg-dilmun-accent group-hover:text-white transition-colors duration-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    {service.icon}
                  </div>
                  <span className="text-dilmun-muted font-mono text-xs uppercase tracking-widest">{service.subtitle}</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  {service.title}
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed border-l border-dilmun-accent/30 pl-6">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.uses.map((use, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-dilmun-accent/60" />
                      {use}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-white font-medium border-b border-dilmun-accent pb-1 hover:text-dilmun-accent hover:border-white transition-colors">
                  Technical Specifications <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full perspective-1000">
                <motion.div 
                  className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 bg-dilmun-card shadow-2xl group"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-dilmun-dark/80 via-transparent to-transparent z-10 opacity-60"></div>
                  
                  {/* Image */}
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                  
                  {/* Overlay UI Elements */}
                  <div className="absolute bottom-0 right-0 p-6 z-20">
                    <span className="text-xs font-mono text-white/50 tracking-widest bg-black/50 px-3 py-1 rounded backdrop-blur-md border border-white/5">
                      REF: {service.id.toUpperCase()}
                    </span>
                  </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;