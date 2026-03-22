import { motion, AnimatePresence } from 'motion/react';
import { Send, MessageCircleMore, X, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hello! I am your Kaushalayan AI assistant. How can I help you with our training programs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
          systemInstruction: "You are an AI assistant for Kaushalayan Consulting, an expert training consultancy. You help potential clients understand our services (Negotiation Skills, Team Collaboration, Client Handling, Professionalism), our experience (15-18 years), and our pricing (Virtual: ₹2500/hr, Classroom: ₹3000/hr). Be professional, helpful, and concise."
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
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I am having trouble connecting right now. Please try again later or contact us directly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-700 transition-all z-50 group"
      >
        <MessageCircleMore size={28} className="group-hover:scale-110 transition-transform" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">AI</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-[350px] sm:w-[400px] h-[500px] bg-slate-900 border border-white/10 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-brand-600 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <MessageCircleMore size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm">Quick Support</p>
                  <p className="text-[10px] opacity-80">Powered by Kaushalayan AI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our training..."
                  className="flex-grow bg-slate-800 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-brand-600 text-white p-2 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
