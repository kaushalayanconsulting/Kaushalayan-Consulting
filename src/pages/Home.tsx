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
    <div className="overflow-hidden bg-violet-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-violet-950">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-800 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center py-1 px-3 rounded-full bg-brand-900/30 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-800/50 gap-2">
                Expert Training Consultancy
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                Transform Your Workforce with <span className="text-brand-500">Expert Training</span>
              </h1>
              <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
                Empowering professionals with the skills they need to excel in today's competitive business landscape. From negotiation to team collaboration, we build excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-900/20 flex items-center justify-center group"
                >
                  Get in Touch
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="bg-slate-900 text-white border border-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.2 },
                scale: { duration: 0.6, delay: 0.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                <img 
                  src="https://i.ibb.co/bRJnPPYJ/Whats-App-Image-2026-03-22-at-12-22-41.jpg" 
                  alt="Training Session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-white/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-900/50 rounded-full flex items-center justify-center text-brand-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Certified Trainers</p>
                    <p className="text-xs text-slate-400">Industry recognized experts</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-violet-950 border-y border-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-6 p-6"
              >
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  className="w-16 h-16 bg-violet-900 rounded-2xl flex items-center justify-center text-brand-500 border border-white/5"
                >
                  <stat.icon size={32} />
                </motion.div>
                <div>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-violet-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3]">
                <img 
                  src="https://i.ibb.co/0pVXn751/Whats-App-Image-2026-03-22-at-12-17-06.jpg" 
                  alt="Who We Are - Kaushalayan Consulting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-500 font-bold uppercase tracking-wider text-sm mb-4 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Experienced professionals dedicated to transforming business training and development
              </h2>
              <div className="space-y-6">
                {[
                  "Led by seasoned industry professionals with 17–18 years of experience",
                  "Expertise spans business development, customer operations, and sales",
                  "Focused on delivering actionable insights and measurable performance improvements",
                  "Proven track record of delivery excellence through structured methodologies and outcome-driven execution",
                  "Committed to enabling sustainable business growth by improving productivity, customer experience, and revenue outcomes"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500 shrink-0">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-slate-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience and Expertise Section */}
      <section className="section-padding bg-violet-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Experience and Expertise</h2>
            <p className="text-brand-500 font-bold uppercase tracking-wider text-sm">Proven Success in Training Professionals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-violet-900 rounded-3xl overflow-hidden border border-white/5 shadow-xl group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/1tGV9KV0/Whats-App-Image-2026-03-22-at-16-15-42.jpg" 
                  alt="Industry Professionals" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-500 backdrop-blur-md border border-white/10">
                  <Award size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Industry Professionals</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  Our team is led by seasoned industry professionals with 15–18 years of hands-on experience across business development, customer-centric operations, sales, and technical domains—delivering expert guidance and actionable insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-violet-900 rounded-3xl overflow-hidden border border-white/5 shadow-xl group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/FqzLttRj/Whats-App-Image-2026-03-22-at-16-15-42-1.jpg" 
                  alt="Trained Professionals" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-500 backdrop-blur-md border border-white/10">
                  <Users size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Trained Professionals</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  We have successfully trained over 5,000 + professionals across various sectors, including sales and client handling, demonstrating our commitment to excellence and measurable performance improvements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven Success Section */}
      <section className="section-padding bg-violet-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="text-brand-500 font-bold uppercase tracking-wider text-sm mb-4 block">Proven Success</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Demonstrating our impact through extensive training achievements and results
              </h2>
              <div className="space-y-5">
                {[
                  "Trained 5,000+ professionals across diverse industries, driving capability enhancement at scale",
                  "Specialized in sales excellence, client handling, and end-to-end customer experience transformation",
                  "Demonstrated strong delivery excellence through structured, high-impact training frameworks and execution rigor",
                  "Enabled sustainable business growth by improving conversion rates, customer satisfaction, and operational efficiency",
                  "Consistently delivered measurable performance improvements aligned with business KPIs"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500 shrink-0">
                      <CheckCircle2 size={12} />
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3]">
                <img 
                  src="https://i.ibb.co/GQ7NSYpp/Whats-App-Image-2026-03-22-at-12-36-54.jpg" 
                  alt="Proven Success - Kaushalayan Consulting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-600/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Planner Section */}
      <AIPlanner />

      {/* Why Choose Us */}
      <section className="section-padding bg-violet-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Kaushalayan Consulting?</h2>
            <p className="text-slate-400">We don't just provide training; we deliver measurable results through a blend of technical expertise and business development acumen.</p>
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
                whileHover={{ y: -5 }}
                className="bg-violet-900 p-8 rounded-3xl shadow-sm border border-white/5"
              >
                <div className="w-10 h-10 bg-brand-900/30 rounded-lg flex items-center justify-center text-brand-500 mb-6">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-900/20">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Elevate Your Team's Performance?</h2>
              <p className="text-brand-100 text-lg mb-12 max-w-2xl mx-auto">
                Join 5000+ professionals who have transformed their careers through our expert-led training programs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-brand-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-50 transition-all shadow-lg"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
