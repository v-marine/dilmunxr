import React from 'react';
import Section from '../components/Section';
import { Building2, Factory, Landmark, Fuel, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface IndustriesProps {
  id?: string;
  className?: string;
}

const Industries: React.FC<IndustriesProps> = ({ id, className }) => {
  const industries = [
    {
      name: "Government & Public Authorities",
      path: "/industries/government",
      icon: <Building2 className="w-12 h-12 text-white" />,
      desc: "Urban planning visualization, infrastructure monitoring, and stakeholder communication for large-scale public projects."
    },
    {
      name: "Industrial & Manufacturing",
      path: "/industries/manufacturing",
      icon: <Factory className="w-12 h-12 text-white" />,
      desc: "Process simulation, safety training, and assembly line digital twinning to optimize efficiency and reduce error rates."
    },
    {
      name: "Oil & Gas",
      path: "/industries/oil-gas",
      icon: <Fuel className="w-12 h-12 text-white" />,
      desc: "High-risk scenario training and remote asset inspection solutions for upstream and downstream operations."
    },
    {
      name: "Culture & Heritage",
      path: "/industries/heritage",
      icon: <Landmark className="w-12 h-12 text-white" />,
      desc: "Digital archiving and preservation of historical sites with millimeter-accurate laser scanning and photogrammetry."
    }
  ];

  return (
    <div className={className}>
      <Section id={id}>
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries Served</h1>
          <p className="text-dilmun-muted max-w-2xl mx-auto">
            Our solutions are tailored for sectors where precision, safety, and reliability are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <Link to={ind.path} key={i} className="block group">
              <motion.div 
                className="h-full bg-dilmun-card border border-white/5 p-8 hover:border-dilmun-accent transition-all duration-300 relative overflow-hidden group-hover:bg-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  {ind.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-dilmun-accent/10 rounded-sm flex items-center justify-center mb-6 text-dilmun-accent group-hover:bg-dilmun-accent group-hover:text-white transition-colors">
                    {React.cloneElement(ind.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-dilmun-accent transition-colors">{ind.name}</h3>
                  <p className="text-dilmun-muted leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Solutions <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Industries;