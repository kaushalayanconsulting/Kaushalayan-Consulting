import { motion } from 'motion/react';
import { ChevronRight, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

import { AIPlanner } from '../components/AIPlanner';

const Home = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Professionals Trained', value: '5000+', icon: Users },
    { label: 'Corporate Clients', value: '200+', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-[#0a051a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-32 lg:pt-16 lg:pb-48 bg-[#0a051a]">
        {/* World Map Background Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/world-map.png')`,
            backgroundSize: '1000px',
            backgroundRepeat: 'repeat',
            filter: 'invert(1)'
          }}
        ></div>

        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand-600/20 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-brand-800/10 rounded-full blur-[160px] translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-brand-500/10 text-brand-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-brand-500/20 backdrop-blur-sm">
                Global Training Excellence
              </span>
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tight">
                Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500 italic serif font-light">Performance</span> Through Insight
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-light">
                We empower organizations with world-class training solutions that bridge the gap between human potential and corporate success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="/contact"
                  className="bg-brand-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-500 transition-all shadow-2xl shadow-brand-600/20 flex items-center justify-center group"
                >
                  Start Your Journey
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center"
                >
                  Our Expertise
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
              }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a051a] via-transparent to-transparent opacity-40 z-10"></div>
                <img 
                  src="https://i.ibb.co/bRJnPPYJ/Whats-App-Image-2026-03-22-at-12-22-41.jpg" 
                  alt="Training Session" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-800/20 rounded-full blur-3xl -z-10"></div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-[#1a1a2e]/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl z-20 hidden sm:block border border-white/10"
              >
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Elite Trainers</p>
                    <p className="text-sm text-slate-400 tracking-wide uppercase">Certified Global Experts</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a051a] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-brand-400 border border-white/10 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 transition-all duration-500 shadow-xl">
                  <stat.icon size={36} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-xs text-brand-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-[#0a051a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
                <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                <img 
                  src="https://i.ibb.co/0pVXn751/Whats-App-Image-2026-03-22-at-12-17-06.jpg" 
                  alt="Who We Are - Kaushalayan Consulting" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-600/10 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-800/10 rounded-full blur-[100px] -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                Our Identity
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Crafting Excellence through <span className="text-brand-500 italic serif font-light">Experience</span>
              </h2>
              <div className="space-y-8">
                {[
                  "Led by seasoned industry professionals with 17–18 years of experience",
                  "Expertise spans business development, customer operations, and sales",
                  "Focused on delivering actionable insights and measurable performance improvements",
                  "Proven track record of delivery excellence through structured methodologies",
                  "Committed to enabling sustainable business growth and revenue outcomes"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-5 group">
                    <div className="mt-1 w-6 h-6 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 shrink-0 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience and Expertise Section */}
      <section className="section-padding bg-[#0f0a24] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Our Legacy
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Experience & Expertise</h2>
            <p className="text-slate-400 font-light text-lg">A proven track record of empowering professionals across the globe.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group backdrop-blur-sm"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/1tGV9KV0/Whats-App-Image-2026-03-22-at-16-15-42.jpg" 
                  alt="Industry Professionals" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a24] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 left-6 w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-500/20 border border-white/10">
                  <Award size={28} />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-4">Industry Professionals</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  Our team is led by seasoned industry professionals with 15–18 years of hands-on experience across business development, customer-centric operations, and sales—delivering expert guidance and actionable insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.02] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group backdrop-blur-sm"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/FqzLttRj/Whats-App-Image-2026-03-22-at-16-15-42-1.jpg" 
                  alt="Trained Professionals" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a24] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 left-6 w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-500/20 border border-white/10">
                  <Users size={28} />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-4">Trained Professionals</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  We have successfully trained over 5,000+ professionals across various sectors, including sales and client handling, demonstrating our commitment to excellence and measurable performance improvements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven Success Section */}
      <section className="section-padding bg-[#0a051a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                Impact & Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Measurable Impact, <span className="text-brand-500 italic serif font-light">Proven</span> Results
              </h2>
              <div className="space-y-6">
                {[
                  "Trained 5,000+ professionals across diverse industries",
                  "Specialized in sales excellence and customer experience transformation",
                  "Demonstrated strong delivery excellence through structured frameworks",
                  "Enabled sustainable business growth by improving conversion rates",
                  "Consistently delivered measurable performance improvements"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-5 group">
                    <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-slate-400 font-light group-hover:text-slate-200 transition-colors duration-300">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
                <img 
                  src="https://i.ibb.co/GQ7NSYpp/Whats-App-Image-2026-03-22-at-12-36-54.jpg" 
                  alt="Proven Success - Kaushalayan Consulting" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-600/10 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Planner Section */}
      <AIPlanner />

      {/* Why Choose Us */}
      <section className="section-padding bg-[#0f0a24] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              Our Advantage
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why Choose Kaushalayan?</h2>
            <p className="text-slate-400 font-light">We deliver measurable results through a blend of technical expertise and business development acumen.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Customized Content", desc: "Every training module is tailored to your specific industry and organizational needs." },
              { title: "Real-life Simulations", desc: "We use practical scenarios that professionals face daily to ensure learning sticks." },
              { title: "Expert Facilitators", desc: "Our trainers bring 15+ years of corporate experience to the classroom." },
              { title: "Post-training Support", desc: "We provide follow-up sessions and resources to ensure implementation of skills." },
              { title: "Measurable Impact", desc: "Our pre and post-assessments help you track the ROI of your training investment." },
              { title: "Global Standards", desc: "Training methodologies aligned with the latest international business practices." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/[0.02] p-10 rounded-[2rem] shadow-2xl border border-white/5 hover:border-brand-500/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-500 mb-8 border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0a051a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-600 to-brand-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-[0_0_80px_rgba(var(--brand-600),0.3)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Ready to Elevate Your Team?</h2>
              <p className="text-brand-100 text-xl mb-12 max-w-2xl mx-auto font-light">
                Join 5,000+ professionals who have transformed their careers through our expert-led programs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="/contact"
                  className="inline-block bg-white text-brand-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/services"
                  className="inline-block bg-transparent text-white border border-white/30 px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
