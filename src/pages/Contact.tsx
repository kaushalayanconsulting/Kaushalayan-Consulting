import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 bg-[#2d240a]">
      {/* Header */}
      <section className="bg-amber-950/20 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-lg text-amber-100/60 max-w-3xl mx-auto">
            Have questions about our training modules or need a custom consultation? We're here to help you transform your workforce.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#1a1506]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-amber-950/30 p-10 rounded-[2.5rem] shadow-sm border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-400 shrink-0 border border-white/5">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Email Us</p>
                      <p className="text-amber-100/50 text-sm">consultingkaushalayan@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-400 shrink-0 border border-white/5">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Call Us</p>
                      <p className="text-amber-100/50 text-sm">+91 9958430718</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-400 shrink-0 border border-white/5">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Visit Us</p>
                      <p className="text-amber-100/50 text-sm">Delhi, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <p className="text-sm font-bold text-white mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    {['LinkedIn', 'Twitter', 'Facebook'].map(social => (
                      <a key={social} href="#" className="text-xs font-bold text-amber-400 hover:text-amber-500 uppercase tracking-widest">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                className="w-full text-left bg-amber-600 p-10 rounded-[2.5rem] text-white hover:bg-amber-700 transition-all group"
              >
                <MessageSquare size={40} className="mb-6 opacity-50 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-4">Quick Support (AI Chat)</h4>
                <p className="text-amber-100 text-sm leading-relaxed">
                  Need immediate answers? Chat with our AI assistant for instant information about our programs and pricing.
                </p>
              </button>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-amber-950/30 p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-white/5">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-emerald-900/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/20">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-amber-100/50 mb-10">Thank you for reaching out. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-amber-400 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-white uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full px-6 py-4 bg-amber-900/20 border border-white/5 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-white uppercase tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 bg-amber-900/20 border border-white/5 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white uppercase tracking-wider">Subject</label>
                      <input 
                        required
                        type="text" 
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        placeholder="Inquiry about Corporate Training"
                        className="w-full px-6 py-4 bg-amber-900/20 border border-white/5 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white uppercase tracking-wider">Message</label>
                      <textarea 
                        required
                        rows={6}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Tell us about your training needs..."
                        className="w-full px-6 py-4 bg-amber-900/20 border border-white/5 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-amber-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-500/10 flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="ml-3" size={20} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Expert Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-amber-950/30 rounded-[3rem] overflow-hidden border border-white/5"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="h-[400px] md:h-full">
                <img 
                  src="https://i.ibb.co/B5Zc1yx9/Whats-App-Image-2026-03-22-at-16-31-25.jpg" 
                  alt="Vinayak Jha - Kaushalayan Expert" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 md:p-16">
                <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Meet Our Expert</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vinayak Jha</h2>
                <p className="text-amber-100/60 text-lg leading-relaxed mb-8">
                  Our expert talk. Connect with Vinayak Jha for specialized insights into Quality, Training, and Process Optimization. With 15+ years of experience, he helps organizations achieve operational excellence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-amber-900/30 rounded-full border border-white/5 text-amber-400 text-sm font-medium">
                    Quality & Training
                  </div>
                  <div className="px-4 py-2 bg-amber-900/30 rounded-full border border-white/5 text-amber-400 text-sm font-medium">
                    Six Sigma
                  </div>
                  <div className="px-4 py-2 bg-amber-900/30 rounded-full border border-white/5 text-amber-400 text-sm font-medium">
                    Process Optimization
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
