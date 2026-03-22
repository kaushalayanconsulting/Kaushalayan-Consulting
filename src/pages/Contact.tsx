import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check } from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

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
    <div className="bg-[#7c2d12] min-h-screen text-white">
      {/* Header */}
      <section className="bg-[#7c2d12] py-12 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto font-medium px-2">
            Have questions about our training modules or need a custom consultation? We're here to help you transform your workforce.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-[#7c2d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              <div className="bg-[#0a192f] p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/5">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Contact Information</h3>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-800/30 rounded-xl flex items-center justify-center text-orange-400 shrink-0 border border-white/5">
                      <Mail size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-grow overflow-hidden">
                      <p className="text-xs md:text-sm font-bold text-white mb-1">Email Us</p>
                      <div className="flex items-center justify-between group">
                        <p className="text-blue-100/50 text-xs md:text-sm truncate">consultingkaushalayan@gmail.com</p>
                        <button 
                          onClick={() => copyToClipboard('consultingkaushalayan@gmail.com', 'email')}
                          className="p-1.5 md:p-2 text-orange-400 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                          title="Copy to clipboard"
                        >
                          {copiedEmail ? <Check size={14} className="md:w-4 md:h-4" /> : <Copy size={14} className="md:w-4 md:h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-800/30 rounded-xl flex items-center justify-center text-orange-400 shrink-0 border border-white/5">
                      <Phone size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-xs md:text-sm font-bold text-white mb-1">Call Us</p>
                      <div className="flex items-center justify-between group">
                        <p className="text-blue-100/50 text-xs md:text-sm">+91 9958430718</p>
                        <button 
                          onClick={() => copyToClipboard('+91 9958430718', 'phone')}
                          className="p-1.5 md:p-2 text-orange-400 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                          title="Copy to clipboard"
                        >
                          {copiedPhone ? <Check size={14} className="md:w-4 md:h-4" /> : <Copy size={14} className="md:w-4 md:h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-800/30 rounded-xl flex items-center justify-center text-orange-400 shrink-0 border border-white/5">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-1">Visit Us</p>
                      <p className="text-blue-100/50 text-sm">Delhi, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <p className="text-sm font-bold text-white mb-4">Follow Us</p>
                  <div className="flex space-x-4">
                    {['LinkedIn', 'Twitter', 'Facebook'].map(social => (
                      <a key={social} href="#" className="text-xs font-bold text-orange-400 hover:text-orange-500 uppercase tracking-widest">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.link/a21az8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left bg-orange-700 p-10 rounded-[2.5rem] text-white hover:bg-orange-800 transition-all group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Quick Support (WhatsApp)</h4>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Need immediate answers? Connect with us on WhatsApp for instant information about our programs and pricing.
                </p>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#0a192f] p-6 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/5">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 md:py-20"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-900/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-emerald-500/20">
                      <Send size={32} className="md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-blue-100/50 mb-8 md:mb-10 text-sm md:text-base px-4">Thank you for reaching out. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-orange-400 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          placeholder="John Doe"
                          className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all text-sm md:text-base"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Subject</label>
                      <input 
                        required
                        type="text" 
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        placeholder="Inquiry about Corporate Training"
                        className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all text-sm md:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">Message</label>
                      <textarea 
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Tell us about your training needs..."
                        className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none text-sm md:text-base"
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-orange-600 text-white py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:bg-orange-500 transition-all shadow-xl shadow-orange-600/10 flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="ml-3 md:w-5 md:h-5" size={18} />}
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
            className="mt-12 md:mt-20 bg-[#0a192f] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="h-[300px] md:h-full">
                <img 
                  src="https://i.ibb.co/B5Zc1yx9/Whats-App-Image-2026-03-22-at-16-31-25.jpg" 
                  alt="Vinayak Jha - Kaushalayan Expert" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-16">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Meet Our Expert</span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Vinayak Jha</h2>
                <p className="text-blue-100/60 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  Our expert talk. Connect with Vinayak Jha for specialized insights into Quality, Training, and Process Optimization. With 15+ years of experience, he helps organizations achieve operational excellence.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-800/30 rounded-full border border-white/5 text-orange-400 text-xs md:text-sm font-medium">
                    Quality & Training
                  </div>
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-800/30 rounded-full border border-white/5 text-orange-400 text-xs md:text-sm font-medium">
                    Six Sigma
                  </div>
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-800/30 rounded-full border border-white/5 text-orange-400 text-xs md:text-sm font-medium">
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
