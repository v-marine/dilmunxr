import React from 'react';
import Section from '../components/Section';

interface ProjectsProps {
  id?: string;
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id, className }) => {
  return (
    <div className={className}>
      <Section id={id}>
        <div className="max-w-3xl mx-auto text-center border border-white/10 bg-dilmun-card/50 p-12 backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Selected Work</h1>
          <div className="w-16 h-1 bg-dilmun-accent mx-auto mb-8"></div>
          <p className="text-dilmun-muted text-lg mb-10">
            Due to the sensitive nature of our work with government and industrial clients, detailed case studies are available upon request during consultation.
          </p>
          <p className="text-dilmun-muted mb-10 text-sm">
            Detailed public case studies will be added as projects are cleared for release.
          </p>
          
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors"
          >
            Request Portfolio Access
          </button>
        </div>
      </Section>
    </div>
  );
};

export default Projects;