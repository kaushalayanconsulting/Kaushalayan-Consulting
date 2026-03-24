import { motion } from 'motion/react';
import { 
  Handshake, 
  Users2, 
  UserCheck, 
  ShieldCheck, 
  MessageSquare, 
  Briefcase,
  Clock,
  Monitor,
  Building2
} from 'lucide-react';

const Services = () => {
  const modules = [
    {
      title: "Relationship Management",
      desc: "Building strong postsale relationships through structured check-ins.",
      img: "https://i.ibb.co/9mjvYs2X/Whats-App-Image-2026-03-22-at-16-03-59-1.jpg",
      duration: "12 Hours",
      icon: Handshake,
      color: "bg-white/10 text-yellow-400"
    },
    {
      title: "Negotiation Skills",
      desc: "Master essential techniques for effective business negotiations.",
      img: "https://i.ibb.co/Z6hKYWkH/Whats-App-Image-2026-03-22-at-16-04-00.jpg",
      duration: "16 Hours",
      icon: MessageSquare,
      color: "bg-white/10 text-yellow-400"
    },
    {
      title: "Team Collaboration",
      desc: "Foster collaboration for improved client service outcomes.",
      img: "https://i.ibb.co/Q3LKqgpQ/Whats-App-Image-2026-03-22-at-16-04-05.jpg",
      duration: "8 Hours",
      icon: Users2,
      color: "bg-white/10 text-yellow-400"
    },
    {
      title: "Client-Centric",
      desc: "Focus on understanding client pain points effectively.",
      img: "https://i.ibb.co/27xrKr4M/Whats-App-Image-2026-03-22-at-16-03-59.jpg",
      duration: "10 Hours",
      icon: UserCheck,
      color: "bg-white/10 text-yellow-400"
    },
    {
      title: "Professionalism",
      desc: "Enhance first impressions and professional etiquette consistently.",
      img: "https://i.ibb.co/S4x260qy/Whats-App-Image-2026-03-22-at-16-04-00-1.jpg",
      duration: "6 Hours",
      icon: ShieldCheck,
      color: "bg-white/10 text-yellow-400"
    },
    {
      title: "Client Handling",
      desc: "Adapt strategies for managing diverse client needs effectively.",
      img: "https://i.ibb.co/bRHvMxNP/Whats-App-Image-2026-03-22-at-16-04-00-2.jpg",
      duration: "14 Hours",
      icon: Briefcase,
      color: "bg-white/10 text-yellow-400"
    }
  ];

  return (
    <div className="bg-[#2e1065] min-h-screen">
      {/* Header */}
      <section className="bg-white/5 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center gap-4"
          >
            Expert Training Consultancy
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-600 shadow-[0_0_10px_rgba(var(--brand-600),0.8)]"></span>
            </span>
          </motion.h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Comprehensive training programs designed to address the most critical skill gaps in modern business environments.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="section-padding bg-[#2e1065]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Training Modules Overview</h2>
            <p className="text-slate-400">Specialized modules designed for impactful learning outcomes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={module.img} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10 text-brand-400`}>
                    <module.icon size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                    {module.desc}
                  </p>
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm font-medium">
                      <Clock size={16} className="mr-2" />
                      {module.duration}
                    </div>
                    <a href="/about" className="text-brand-400 font-bold text-sm hover:underline">
                      Visit
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Delivery Features */}
      <section className="section-padding bg-[#2e1065] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Training Program Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Our delivery excellence is backed by structured frameworks and high-impact tools.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Virtual Training Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-400 border border-white/5">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Virtual Training Features</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Up to 50 participants",
                  "Interactive digital whiteboards",
                  "Breakout room activities",
                  "Recording of sessions",
                  "Digital training materials",
                  "Post-training assessment"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Classroom Training Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-400 border border-white/5">
                  <Building2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Classroom Training Features</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Up to 50 participants",
                  "Hands-on physical workshops",
                  "Face-to-face role plays",
                  "Physical training kits",
                  "On-site expert feedback",
                  "Post-training assessment",
                  "Group activities & games"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Training Section */}
      <section className="section-padding bg-[#2e1065]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-[2.5rem] p-12 shadow-sm border border-white/5 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Training Program?</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We understand that every organization has unique challenges. Our experts can work with you to design a bespoke training curriculum that aligns perfectly with your business objectives and team requirements.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Industry-specific case studies",
                  "Flexible scheduling (Full-day or Modular)",
                  "On-site and Virtual delivery options",
                  "Integrated assessment frameworks"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-300 font-medium">
                    <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="inline-block bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 transition-all">
                Request Custom Module
              </a>
            </div>
            <div className="lg:w-1/2">
              {/* Image removed as requested */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
