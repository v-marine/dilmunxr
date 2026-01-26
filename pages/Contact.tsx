import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  id?: string;
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ id, className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // REPLACE 'YOUR_FORM_ID' WITH YOUR ACTUAL FORMSPREE ID
      // Example: https://formspree.io/f/xvazzpnq
      const response = await fetch("https://formspree.io/f/xpqqpjvn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={className}>
      <Section id={id}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-dilmun-muted mb-12">
              Discuss your project requirements with our technical team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-dilmun-card p-4 border border-white/10 mr-6">
                  <Mail className="text-dilmun-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <p className="text-dilmun-muted">inquiries@dilmunxr.com</p>
                  <p className="text-xs text-gray-600 mt-1">Typical response time: 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dilmun-card p-4 border border-white/10 mr-6">
                  <MapPin className="text-dilmun-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                  <p className="text-dilmun-muted">Manama, Bahrain</p>
                  <p className="text-xs text-gray-600 mt-1">Available for global deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="bg-dilmun-card border border-white/5 p-8 md:p-10 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Inquiry Received</h2>
                  <p className="text-dilmun-muted mb-8">
                    Thank you for contacting Dilmun XR. Our technical team will review your requirements and respond within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-dilmun-accent hover:text-white transition-colors font-medium border-b border-dilmun-accent hover:border-white pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Schedule a Technical Consultation</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-dilmun-accent transition-colors disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-dilmun-accent transition-colors disabled:opacity-50"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company / Organization</label>
                    <input 
                      type="text" 
                      name="company"
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-dilmun-accent transition-colors disabled:opacity-50"
                      placeholder="Organization Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Brief</label>
                    <textarea 
                      required
                      name="message"
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full bg-black/50 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-dilmun-accent transition-colors disabled:opacity-50"
                      placeholder="Describe your technical requirements..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 border border-red-400/20 rounded-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-dilmun-accent hover:bg-blue-600 text-white font-bold py-4 transition-all text-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" /> Sending...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;