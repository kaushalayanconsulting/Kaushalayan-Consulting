import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Target, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const AIPlanner = () => {
  const [goal, setGoal] = useState('');
  const [isPlanning, setIsPlanning] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);

  const generatePlan = async () => {
    if (!goal.trim()) return;
    setIsPlanning(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are a professional training consultant at Kaushalayan Consulting. Create a 4-week high-level training plan for a client with this goal: "${goal}". Focus on professional skills like negotiation, collaboration, and client handling. Format the output as a structured plan with weekly focus points. Keep it professional and concise.`,
      });
      setPlan(response.text || 'Unable to generate plan at this time.');
    } catch (error) {
      console.error("AI Planner Error:", error);
      setPlan("Sorry, I encountered an error while creating your plan. Please try again later.");
    } finally {
      setIsPlanning(false);
    }
  };

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#eab308_0%,transparent_50%)] blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-bold mb-6"
          >
            <Sparkles size={16} />
            <span>AI-Powered Growth</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Personal <span className="text-yellow-500">AI Training Planner</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tell us your professional goals, and our AI will craft a specialized training roadmap tailored to your success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              <div className="relative">
                <textarea
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g., I want to improve my team's negotiation skills for high-stakes corporate deals..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-3xl p-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all min-h-[150px] text-lg"
                />
                <div className="absolute bottom-4 right-4">
                  <Target className="text-yellow-500/30" size={32} />
                </div>
              </div>

              <button
                onClick={generatePlan}
                disabled={isPlanning || !goal.trim()}
                className="w-full bg-yellow-500 text-[#0a192f] py-5 rounded-2xl font-bold text-xl hover:bg-yellow-400 transition-all flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-yellow-500/10"
              >
                {isPlanning ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span>Crafting Your Roadmap...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={24} />
                    <span>Generate My 4-Week Plan</span>
                    <ArrowRight size={24} />
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {plan && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-12 pt-12 border-t border-white/10"
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Your Specialized Roadmap</h3>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5 text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {plan}
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <a 
                      href="/contact"
                      className="text-yellow-500 font-bold flex items-center space-x-2 hover:underline"
                    >
                      <span>Discuss this plan with an expert</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
