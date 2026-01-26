import React from 'react';
import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { Map, Users, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Government: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "Virtual Urban Planning",
      desc: "Visualize infrastructure projects in 1:1 scale before ground is broken. Test zoning changes, traffic flows, and skyline impacts in real-time.",
      icon: <Map size={32} />
    },
    {
      title: "Stakeholder Engagement",
      desc: "Bridge the gap between technical data and public understanding. Use immersive presentations to gain buy-in from citizens and investors.",
      icon: <Users size={32} />
    },
    {
      title: "Smart City Integration",
      desc: "Connect IoT data feeds to 3D city twins for real-time monitoring of utilities, energy consumption, and emergency services deployment.",
      icon: <BarChart3 size={32} />
    },
    {
      title: "Defense & Security",
      desc: "Tactical mission planning and scenario simulation for defense forces and emergency response teams in safe, controlled environments.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/government.jpg"
            alt="Smart City Visualization"
            className="w-full h-full object-cover filter grayscale-[50%] opacity-40"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop';
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
              GOVERNMENT & PUBLIC SECTOR
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Civic Intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Enhanced</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Empowering decision-makers with spatial data. We transform abstract statistics into explorable, evidence-based digital twins.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">The Spatial Advantage</h2>
            <p className="text-dilmun-muted text-lg leading-relaxed mb-6">
              Modern governance requires managing unprecedented complexity. Traditional 2D maps and spreadsheets fail to convey the systemic impact of major infrastructure decisions.
            </p>
            <p className="text-dilmun-muted text-lg leading-relaxed">
              Dilmun XR builds tools that allow officials to "step inside" their data. By visualizing accurate geospatial information in real-time 3D, we reduce planning errors, accelerate approval cycles, and drastically improve public communication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-dilmun-card border border-white/5 p-6 flex gap-6 hover:border-dilmun-accent/50 transition-colors">
                <div className="text-dilmun-accent flex-shrink-0 pt-1">
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
            <h3 className="text-3xl font-bold text-white mb-4">Ready to upgrade your infrastructure planning?</h3>
            <p className="text-dilmun-muted mb-8 max-w-2xl mx-auto">Schedule a demo of our large-scale urban visualization capabilities.</p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-dilmun-accent hover:bg-blue-600 text-white px-8 py-4 font-bold rounded-sm transition-all flex items-center gap-2 mx-auto"
            >
              Contact Our GovTech Team <ArrowRight size={20} />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 pointer-events-none"></div>
        </div>
      </Section>
    </div>
  );
};

export default Government;