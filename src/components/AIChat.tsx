import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageCircleMore, X, Loader2, Sparkles, Minus } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Welcome to Kaushalayan Consulting. I am your specialized AI advisor. How may I assist you with our professional training solutions today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are an elite AI advisor for Kaushalayan Consulting. You represent a consultancy with 15-18 years of industry excellence. Your tone is professional, sophisticated, and highly helpful. Services: Negotiation Skills, Team Collaboration, Client Handling, Professionalism. Pricing: Virtual (₹2500/hr), Classroom (₹3000/hr). Focus on value delivery and professional growth."
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text || 'I apologize, I could not process that request.' }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'I am currently experiencing a connection issue. Please feel free to reach out to us at consultingkaushalayan@gmail.com for immediate assistance.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-brand-600 text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center z-50 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-700 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageCircleMore size={24} className="relative z-10" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50 flex flex-col overflow-hidden"
          >
            {/* Premium Header */}
            <div className="p-5 bg-gradient-to-r from-brand-600 to-brand-700 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <Sparkles size={20} className="text-brand-200" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-brand-600 rounded-full"></span>
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight">Kaushalayan AI</p>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <p className="text-[10px] font-medium text-brand-100 uppercase tracking-wider">Always Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hover:bg-white/10 p-2 rounded-xl transition-colors group"
                >
                  <Minus size={18} className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hover:bg-white/10 p-2 rounded-xl transition-colors group"
                >
                  <X size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef} 
              className="flex-grow overflow-y-auto p-6 space-y-6 scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none shadow-lg shadow-brand-900/20' 
                      : 'bg-slate-800/50 text-slate-200 rounded-tl-none border border-white/5 backdrop-blur-sm'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center space-x-1.5">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Input Area */}
            <div className="p-5 bg-slate-900/50 border-t border-white/5 backdrop-blur-md shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-5 pr-14 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-500 transition-all disabled:opacity-50 disabled:hover:bg-brand-600 shadow-lg shadow-brand-900/20"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </div>
              <p className="text-[9px] text-center text-slate-500 mt-3 uppercase tracking-widest font-medium">
                Kaushalayan Consulting Excellence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
