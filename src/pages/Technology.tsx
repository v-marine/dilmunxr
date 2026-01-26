import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { 
  Box, Layers, Network, // Engines
  Headset, Glasses, Smartphone, // Hardware
  Scan, Building, Globe, // Data
} from 'lucide-react';

interface TechnologyProps {
  id?: string;
  className?: string;
}

const Technology: React.FC<TechnologyProps> = ({ id, className }) => {
  const techCategories = [
    { 
      title: "Simulation Engines", 
      description: "We build on the world's most advanced real-time 3D platforms.",
      items: [
        { name: "Unreal Engine 5", icon: <Box size={24} /> }, 
        { name: "NVIDIA Omniverse", icon: <Network size={24} /> },
        { name: "Unity Enterprise", icon: <Layers size={24} /> }
      ]
    },
    { 
      title: "Hardware Ecosystem", 
      description: "Deployable across the entire spectrum of immersive devices.",
      items: [
        { name: "Enterprise VR", icon: <Headset size={24} /> },
        { name: "Mixed Reality", icon: <Glasses size={24} /> },
        { name: "Mobile AR", icon: <Smartphone size={24} /> }
      ]
    },
    { 
      title: "Data Intelligence", 
      description: "Seamless ingestion of complex industrial and geospatial data.",
      items: [
        { name: "LiDAR & Point Clouds", icon: <Scan size={24} /> },
        { name: "BIM & CAD Integration", icon: <Building size={24} /> },
        { name: "GIS Geospatial Data", icon: <Globe size={24} /> }
      ]
    }
  ];

  return (
    <div className={className}>
      <Section id={id}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology Stack</h1>
            <p className="text-xl text-dilmun-muted max-w-3xl leading-relaxed">
              We leverage industry-standard ecosystems to ensure your digital assets are future-proof, interoperable, and capable of handling massive industrial datasets without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-dilmun-card/40 backdrop-blur-sm border border-white/5 rounded-sm p-8 hover:border-dilmun-accent/30 transition-all duration-300 group flex flex-col"
              >
                <div className="mb-8 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-dilmun-accent transition-colors">{category.title}</h3>
                  <p className="text-sm text-dilmun-muted leading-relaxed">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="flex items-center p-4 bg-white/5 rounded-sm border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                    >
                      <div className="mr-4 text-dilmun-accent opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-200 tracking-wide">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Technology;