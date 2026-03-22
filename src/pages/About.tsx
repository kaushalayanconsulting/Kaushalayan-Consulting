import { motion } from 'motion/react';
import { Award, Target, Briefcase, GraduationCap, TrendingUp, Star } from 'lucide-react';
import { MeetOurExpert } from '../components/MeetOurExpert';

const About = () => {
  const testimonials = [
    {
      name: "OPERATIONS MANAGER",
      role: "KAYAKALP",
      content: "The consulting sessions provided invaluable insights that significantly improved our operational efficiency. The team's expertise and tailored approach were instrumental in driving our success. We now feel equipped to tackle future challenges with confidence and clarity.",
      avatar: "https://picsum.photos/seed/p1/100/100"
    },
    {
      name: "PROJECT MANAGER",
      role: "BHARAT IT SERVI",
      content: "Transformative Experience: Working with the consulting firm has been a gamechanger for our organization. Their guidance in strategic planning helped us identify new growth opportunities and enhance our team dynamics. We are now more aligned and focused than ever.",
      avatar: "https://picsum.photos/seed/p2/100/100"
    }
  ];

  return (
    <div className="pt-24 bg-[#2d0a1d]">
      {/* Header */}
      <section className="bg-pink-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About Kaushalayan Consulting
          </motion.h1>
          <p className="text-lg text-pink-100/70 max-w-3xl mx-auto">
            A premier training consultancy dedicated to bridging the gap between potential and performance through expert-led professional development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#1a0511]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-pink-100/60 mb-8 leading-relaxed">
                Our mission is to empower organizations by equipping their workforce with essential soft skills and technical business expertise. We believe that professional excellence is a journey of continuous learning and adaptation.
              </p>
              <div className="space-y-4">
                {[
                  "Deliver high-impact training modules",
                  "Foster a culture of professional excellence",
                  "Provide actionable feedback for growth",
                  "Enable measurable business outcomes"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-pink-900/50 rounded-full flex items-center justify-center text-pink-400">
                      <Award size={12} />
                    </div>
                    <span className="text-pink-100/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-pink-600 text-white p-8 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold mb-1 text-white">15+</p>
                <p className="text-sm font-medium opacity-80 text-white">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-pink-950/20">
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-pink-500 font-bold uppercase tracking-wider text-sm mb-4 block">Who We Are</span>
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
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-500 shrink-0">
                      <Target size={12} />
                    </div>
                    <p className="text-pink-100/70 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-pink-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Expertise</h2>
            <p className="text-pink-100/60">We specialize in two critical pillars of modern business success.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-pink-900/20 p-10 rounded-3xl shadow-sm border border-white/5"
            >
              <div className="w-14 h-14 bg-pink-800/30 rounded-2xl flex items-center justify-center text-pink-400 mb-8">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Development</h3>
              <p className="text-pink-100/60 leading-relaxed">
                Our trainers focus on the strategic side of growth, teaching professionals how to identify opportunities, build sustainable pipelines, and close deals with confidence. We translate complex business theories into practical, everyday actions.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-pink-900/20 p-10 rounded-3xl shadow-sm border border-white/5"
            >
              <div className="w-14 h-14 bg-pink-800/30 rounded-2xl flex items-center justify-center text-pink-400 mb-8">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Expertise</h3>
              <p className="text-pink-100/60 leading-relaxed">
                Beyond soft skills, we provide deep dives into technical process management, client-centric methodologies, and operational professionalism. Our training ensures that your team doesn't just work hard, but works smart.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience and Expertise Section */}
      <section className="section-padding bg-[#1a0511]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Experience and Expertise</h2>
            <p className="text-pink-500 font-bold uppercase tracking-wider text-sm">Proven Success in Training Professionals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 p-10 rounded-3xl border border-white/5"
            >
              <div className="w-14 h-14 bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-500 mb-8">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Industry Professionals</h3>
              <p className="text-pink-100/60 leading-relaxed">
                Our team is led by seasoned industry professionals with 15–18 years of hands-on experience across business development, customer-centric operations, sales, and technical domains—delivering expert guidance and actionable insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-pink-900/20 p-10 rounded-3xl border border-white/5"
            >
              <div className="w-14 h-14 bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-500 mb-8">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trained Professionals</h3>
              <p className="text-pink-100/60 leading-relaxed">
                We have successfully trained over 5,000 + professionals across various sectors, including sales and client handling, demonstrating our commitment to excellence and measurable performance improvements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven Success Section */}
      <section className="section-padding bg-pink-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3]">
                <img 
                  src="https://i.ibb.co/GQ7NSYpp/Whats-App-Image-2026-03-22-at-12-36-54.jpg" 
                  alt="Proven Success - Kaushalayan Consulting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-pink-500 font-bold uppercase tracking-wider text-sm mb-4 block">Proven Success</span>
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
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-500 shrink-0">
                      <Award size={12} />
                    </div>
                    <p className="text-pink-100/70 leading-relaxed text-sm md:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experienced Trainers Section */}
      <section className="section-padding bg-[#1a0511]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Images removed as requested */}
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Experienced Trainers</h2>
              <p className="text-pink-100/60 mb-8 leading-relaxed">
                Our strength lies in our people. Kaushalayan's trainers are industry veterans with over 15 years of experience in leading corporate environments. They bring a wealth of knowledge from sectors like IT, Finance, Manufacturing, and Services.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-900/20 rounded-lg flex items-center justify-center text-pink-500 shrink-0 border border-white/5">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Corporate Background</h4>
                    <p className="text-sm text-pink-100/40">Trainers with real-world leadership experience in Fortune 500 companies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-900/20 rounded-lg flex items-center justify-center text-pink-500 shrink-0 border border-white/5">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Certified Pedagogy</h4>
                    <p className="text-sm text-pink-100/40">Expertise in adult learning principles and interactive training methodologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MeetOurExpert />

      {/* Client Reviews */}
      <section className="section-padding bg-pink-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Client Reviews</h2>
              <p className="text-pink-100/60">Don't just take our word for it. Here's how we've helped organizations transform their workforce.</p>
            </div>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-pink-900/20 p-8 rounded-3xl relative border border-white/5"
              >
                <p className="text-pink-100/70 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-pink-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
