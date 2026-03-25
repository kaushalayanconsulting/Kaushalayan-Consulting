import { motion } from 'motion/react';
import { ClipboardList, PlayCircle, Settings, MessageSquareQuote } from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      title: "Pre-assessment",
      desc: "We begin by understanding the current skill levels and identifying specific gaps through diagnostic tests and interviews.",
      icon: ClipboardList,
      color: "bg-white/10"
    },
    {
      title: "Customized Content",
      desc: "Based on the assessment, we tailor our modules to use your industry's terminology and real-world challenges.",
      icon: Settings,
      color: "bg-white/10"
    },
    {
      title: "Real-life Simulations",
      desc: "Our training is 70% practical. We use role-plays and simulations to ensure participants can apply skills immediately.",
      icon: PlayCircle,
      color: "bg-white/10"
    },
    {
      title: "Post-training Feedback",
      desc: "We provide detailed reports on participant progress and offer follow-up support to ensure long-term retention.",
      icon: MessageSquareQuote,
      color: "bg-white/10"
    }
  ];

  return (
    <div className="bg-[#2d0606] min-h-screen relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#991b1b_0%,transparent_50%)] blur-[120px]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.02, 0.06, 0.02],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,#7f1d1d_0%,transparent_50%)] blur-[120px]"
        />
      </div>
      {/* Header */}
      <section className="bg-white/5 py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our Training Approach
          </motion.h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A scientific and practical methodology designed to ensure that learning translates into measurable performance improvement.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-[#2d0606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden lg:block"></div>

            <div className="space-y-20 lg:space-y-32">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-lg`}>
                      <step.icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">{step.title}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  <div className="lg:w-1/2 relative">
                    {/* Images removed as requested */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Training Pillars Section */}
      <section className="section-padding bg-[#2d0606] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Training Pillars</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The foundation of our excellence in professional development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Customized Content", 
                desc: "Every training module is tailored to your specific industry and organizational needs." 
              },
              { 
                title: "Real-life Simulations", 
                desc: "We use practical scenarios that professionals face daily to ensure learning sticks." 
              },
              { 
                title: "Expert Facilitators", 
                desc: "Our trainers bring 15+ years of corporate experience to the classroom." 
              },
              { 
                title: "Post-training Support", 
                desc: "We provide follow-up sessions and resources to ensure implementation of skills." 
              },
              { 
                title: "Measurable Impact", 
                desc: "Our pre and post-assessments help you track the ROI of your training investment." 
              },
              { 
                title: "Global Standards", 
                desc: "Training methodologies aligned with the latest international business practices." 
              },
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-yellow-500/10 p-8 rounded-3xl border border-yellow-500/30 shadow-xl group hover:bg-yellow-500/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-yellow-500 mb-4 group-hover:text-yellow-400 transition-colors">{pillar.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Program Features Section */}
      <section className="section-padding bg-[#2d0606] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Training Program Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Tailored solutions ensuring effective learning and impactful outcomes for participants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Pre-Assessment", 
                desc: "Initial evaluation to tailor the training", 
                img: "https://i.ibb.co/h1Zxw0K3/Whats-App-Image-2026-03-22-at-15-42-43.jpg" 
              },
              { 
                title: "Customized Content", 
                desc: "Tailored training aligned to enterprise needs", 
                img: "https://i.ibb.co/W4kG4B7Z/Whats-App-Image-2026-03-22-at-15-42-43-1.jpg" 
              },
              { 
                title: "Real-Life Simulations", 
                desc: "Hands-on scenarios for practical learning", 
                img: "https://i.ibb.co/xt26htPn/Whats-App-Image-2026-03-22-at-15-42-43-2.jpg" 
              },
              { 
                title: "Post-Training Feedback", 
                desc: "Assessing impact and participant satisfaction", 
                img: "https://i.ibb.co/99LSWV3m/Whats-App-Image-2026-03-22-at-15-42-44.jpg" 
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 shadow-xl group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.img} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Training Programs Section */}
      <section className="section-padding bg-[#2d0606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Training Programs</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Explore our specialized modules designed for modern business challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://i.ibb.co/dwWXyh08/Whats-App-Image-2026-03-22-at-12-06-55.jpg", title: "Advanced Negotiation" },
              { img: "https://i.ibb.co/ynfKP9NK/Whats-App-Image-2026-03-22-at-12-06-56.jpg", title: "Strategic Sales" },
              { img: "https://i.ibb.co/vxPxK0Fq/Whats-App-Image-2026-03-22-at-12-06-56-1.jpg", title: "Client Relationship Management" },
              { img: "https://i.ibb.co/5xzXNm6p/Whats-App-Image-2026-03-22-at-12-06-56-2.jpg", title: "Master the Art of Time Management" },
              { img: "https://i.ibb.co/F4G0PbpH/Whats-App-Image-2026-03-22-at-12-06-56-3.jpg", title: "Develop Your Leadership Skills Effectively" },
              { img: "https://i.ibb.co/F43GVQXh/Whats-App-Image-2026-03-22-at-12-06-57.jpg", title: "Operational Excellence" },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={program.img} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-brand-400 transition-colors">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-[#2d0606]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">The 70-20-10 Learning Model</h2>
            <p className="text-slate-400">Our approach is grounded in proven adult learning principles.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { percentage: "70%", title: "Experiential", desc: "Learning through real-life simulations, role-plays, and hands-on exercises." },
              { percentage: "20%", title: "Social", desc: "Learning from peers, group discussions, and expert feedback sessions." },
              { percentage: "10%", title: "Formal", desc: "Structured theoretical knowledge, frameworks, and conceptual models." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 p-10 rounded-3xl text-center border border-white/5">
                <p className="text-5xl font-bold text-brand-500 mb-4">{item.percentage}</p>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
