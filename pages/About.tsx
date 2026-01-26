import React from 'react';
import Section from '../components/Section';

interface AboutProps {
  id?: string;
  className?: string;
}

const About: React.FC<AboutProps> = ({ id, className }) => {
  return (
    <div className={className}>
      <Section id={id}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-8">About Dilmun XR</h1>
            <div className="prose prose-invert prose-lg text-dilmun-muted">
              <p className="mb-6">
                Dilmun XR is a specialized software engineering firm dedicated to building high-fidelity immersive solutions. We operate at the intersection of spatial computing and heavy industry.
              </p>
              <p className="mb-6">
                Based in <strong>Bahrain</strong>, we serve a global clientele of enterprise organizations, government bodies, and industrial leaders who require accuracy, not approximation.
              </p>
              <p>
                Our team consists of senior developers, technical artists, and solution architects focused on delivering robust software that integrates seamlessly with existing operational workflows.
              </p>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] border border-white/10 bg-dilmun-card/30 rounded-sm overflow-hidden group">
            <img
              src="/images/about.jpg"
              alt="Dilmun XR Offices"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dilmun-dark/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="text-6xl font-bold text-white/10 mb-2 leading-none">BH</div>
              <div className="text-xs font-mono text-dilmun-accent uppercase tracking-widest bg-black/60 backdrop-blur-md inline-block px-3 py-1 rounded-sm border border-white/10">
                Operating from Bahrain
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;