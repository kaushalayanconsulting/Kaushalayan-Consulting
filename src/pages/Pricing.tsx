import { motion, AnimatePresence } from 'motion/react';
import { Info, Users, Monitor, Building2, Send, MessageSquare, X, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Pricing = () => {
  const plans = [
    {
      name: "Virtual Training",
      price: "2500",
      unit: "hour",
      icon: Monitor,
      desc: "Interactive online sessions delivered via high-quality video conferencing platforms.",
      color: "border-white/5 bg-slate-900",
      btnClass: "bg-slate-800 text-white hover:bg-slate-700 border border-white/5"
    },
    {
      name: "Classroom Training",
      price: "3000",
      unit: "hour",
      icon: Building2,
      desc: "High-impact, in-person training delivered at your premises or a chosen venue.",
      popular: true,
      color: "border-brand-500 bg-slate-900 ring-2 ring-brand-500/20",
      btnClass: "bg-brand-600 text-white hover:bg-brand-700"
    }
  ];

  return (
    <div className="bg-[#2d0a1c] min-h-screen">
      {/* Header */}
      <section className="bg-[#3d0e26] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Invest in your team's future with our competitive hourly rates. No hidden costs, just expert training.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-[#2d0a1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-[2.5rem] border ${plan.color} relative flex flex-col shadow-sm`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-10 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                
                <div className="mb-8">
                  <div className="w-12 h-12 bg-brand-900/30 rounded-xl flex items-center justify-center text-brand-400 mb-6 border border-white/5">
                    <plan.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.desc}</p>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                    <span className="text-slate-500 ml-2">/ {plan.unit}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">*Exclusive of taxes and travel expenses</p>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.btnClass}`}
                >
                  Book a Session
                </a>
              </motion.div>
            ))}
          </div>

          {/* Enquiry Form */}
          <div className="mt-20 max-w-3xl mx-auto bg-slate-900/80 p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Send an Enquiry</h3>
              <p className="text-slate-400">Tell us about your training requirements and we'll get back to you with a tailored plan.</p>
            </div>
            
            <form action="https://formspree.io/f/mgonbdrv" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@company.com"
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Requirement</label>
                <textarea 
                  name="requirement" 
                  required 
                  rows={4}
                  placeholder="Describe your training needs, batch size, and preferred dates..."
                  className="w-full bg-slate-800 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-900/20"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          <div className="mt-20 bg-slate-900/50 p-8 md:p-12 rounded-[2rem] max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 border border-white/5">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-brand-400 shadow-sm shrink-0 border border-white/5">
              <Users size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Large Batch Training?</h4>
              <p className="text-slate-400 text-sm">
                Our standard pricing covers batches up to 50 participants. For larger groups or multi-day corporate retreats, please contact us for a custom quote.
              </p>
            </div>
            <a href="/contact" className="text-brand-400 font-bold whitespace-nowrap hover:underline">
              Contact for Bulk Pricing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#3d0e26] max-md:bg-[#FF00FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "Is there a minimum booking duration?", a: "Yes, we recommend a minimum of 4 hours for any training module to ensure effective learning and practical simulations." },
              { q: "Do you provide training materials?", a: "Yes, we provide comprehensive digital or physical training kits for all participants included in the hourly rate." },
              { q: "Can we mix virtual and classroom training?", a: "Absolutely. We offer hybrid models where some sessions are virtual and others are in-person for maximum flexibility." },
              { q: "What is your cancellation policy?", a: "Cancellations made 7 days prior to the session are fully refundable. Later cancellations may incur a 20% service fee." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-white/5">
                <h4 className="font-bold text-white mb-3 flex items-start">
                  <Info size={18} className="text-brand-500 mr-2 mt-1 shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
