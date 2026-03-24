import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

export const MeetOurExpert = () => {
  return (
    <section className="section-padding bg-[#2e1065]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet Our Expert</h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-square">
              <img 
                src="https://i.ibb.co/B5Zc1yx9/Whats-App-Image-2026-03-22-at-16-31-25.jpg" 
                alt="Vinayak Jha" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-1">Vinayak Jha</h3>
                <p className="text-brand-400 font-medium">Quality & Training Professional</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px] -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-brand-500" size={32} />
                Expertise & Background
              </h4>
              <p className="text-slate-200 leading-relaxed text-lg mb-8">
                Seasoned Quality & Training professional with 15+ years of experience across Customer Experience, Sales, and Operations. Expertise in quality frameworks and process optimization.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                Strong expertise in Six Sigma, stakeholder management, and performance improvement. Specializing in Lean Six Sigma, COPC, QMS (ISO 9001:2015), RCA, and audit frameworks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-brand-500" size={18} />
                  Specializations
                </h5>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>Lean Six Sigma</li>
                  <li>COPC & QMS</li>
                  <li>ISO 9001:2015</li>
                  <li>RCA & Audit Frameworks</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h5 className="font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-brand-500" size={18} />
                  Experience
                </h5>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>Customer Experience</li>
                  <li>Sales Operations</li>
                  <li>Process Optimization</li>
                  <li>Performance Improvement</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-4">Worked with leading organizations</p>
              <div className="flex flex-wrap gap-4 text-slate-400 font-medium">
                {['Concentrix', 'Realme India', 'Pristyn Care', 'Snapdeal', 'Tech Mahindra'].map((org) => (
                  <span key={org} className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-xs">
                    {org}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-400 italic">
                Managing diverse processes across telecom, e-commerce, healthcare, and mobility domains.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
