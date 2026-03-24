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
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.link/a21az8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-2xl shadow-lg flex items-center justify-center group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2e1065]"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </motion.a>

        {/* AI Button */}
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              aria-label="Open AI Chat Advisor"
              className="w-14 h-14 bg-brand-600 text-white rounded-2xl shadow-lg flex items-center justify-center group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2e1065]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-700 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Sparkles size={24} className="relative z-10" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Kaushalayan AI Chat Advisor"
            className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-50 flex flex-col overflow-hidden"
          >
            {/* Premium Header */}
            <div className="p-5 bg-gradient-to-r from-brand-600 to-brand-700 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <Sparkles size={20} className="text-brand-200" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-yellow-400 border-2 border-brand-600 rounded-full"></span>
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight">Kaushalayan AI</p>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                    <p className="text-[10px] font-medium text-brand-100 uppercase tracking-wider">Always Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => setIsOpen(false)} 
                  aria-label="Minimize chat"
                  className="hover:bg-white/10 p-2 rounded-xl transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                >
                  <Minus size={18} className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  aria-label="Close chat"
                  className="hover:bg-white/10 p-2 rounded-xl transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
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
              aria-live="polite"
              aria-atomic="false"
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
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  aria-label="Chat message"
                  className="w-full bg-slate-800/50 border border-white/10 rounded-2xl pl-5 pr-14 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  aria-label="Send message"
                  className="absolute right-2 bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-500 transition-all disabled:opacity-50 disabled:hover:bg-brand-600 shadow-lg shadow-brand-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
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
