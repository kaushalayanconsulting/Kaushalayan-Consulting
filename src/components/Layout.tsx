import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

import { AIChat } from './AIChat';

interface LayoutProps {
  children: ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Handle pathname updates (if any)
    const handlePathChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    setIsSearching(true);
    setShowSuggestions(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const prompt = `
        You are a navigation assistant for Kaushalayan Consulting website.
        The available pages are:
        - Home: /
        - About Us: /about
        - Services (Training, Quality, Six Sigma): /services
        - Our Approach (Methodology): /approach
        - Pricing (Plans, Corporate): /pricing
        - Contact Us (Support, Inquiry): /contact

        User search query: "${query}"

        Based on the query, determine the most relevant page path. 
        If it's a general query about training or what we do, suggest /services.
        If it's about cost or plans, suggest /pricing.
        If it's about the company or team, suggest /about.
        If it's about getting in touch, suggest /contact.
        If it's about how we work, suggest /approach.
        
        Return ONLY the path (e.g., /services). If no clear match, return /.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      const bestPath = response.text?.trim() || '/';
      
      // Normal search fallback: if query contains specific keywords, override AI if it's more direct
      const lowerQuery = query.toLowerCase();
      let finalPath = bestPath;

      if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('plan')) finalPath = '/pricing';
      else if (lowerQuery.includes('contact') || lowerQuery.includes('call') || lowerQuery.includes('email')) finalPath = '/contact';
      else if (lowerQuery.includes('service') || lowerQuery.includes('train') || lowerQuery.includes('sigma')) finalPath = '/services';
      else if (lowerQuery.includes('about') || lowerQuery.includes('who') || lowerQuery.includes('expert')) finalPath = '/about';
      else if (lowerQuery.includes('approach') || lowerQuery.includes('how') || lowerQuery.includes('method')) finalPath = '/approach';

      window.location.href = finalPath;
    } catch (error) {
      console.error("AI Search Error:", error);
      // Fallback to home if error
      window.location.href = '/';
    } finally {
      setIsSearching(false);
    }
  };

  const fetchSuggestions = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    setIsSearching(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Based on a training consultancy website (Kaushalayan Consulting), suggest 3-4 short search terms or topics starting with or related to: "${query}". Return ONLY a comma-separated list.`,
      });
      const text = response.text || '';
      const suggestedList = text.split(',').map(s => s.trim()).filter(s => s.length > 0);
      setSuggestions(suggestedList);
      setShowSuggestions(true);
    } catch (error) {
      console.error("Search Suggestion Error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) fetchSuggestions(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Approach', path: '/approach' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    if (pathname === '/' || pathname === '/index.html') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && (pathname === '/' || pathname === '/index.html')) return true;
    return pathname === path || pathname === `${path}.html`;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg py-3' : 'bg-[#0a192f]/80 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" onClick={scrollToTop} className="flex items-center space-x-3 group">
            <img 
              src="https://i.ibb.co/7tLyYFYh/Whats-App-Image-2026-03-21-at-21-13-31.jpg" 
              alt="Kaushalayan Logo" 
              className="w-10 h-10 rounded-lg object-cover group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Kaushalayan Consulting<span className="text-brand-500">.</span>
            </span>
          </a>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block relative group ml-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch(searchQuery);
                }}
                placeholder="AI Search..."
                className="w-48 bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:w-64 transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-white/40" size={16} />
              {isSearching && (
                <div className="absolute right-3 top-2.5">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-brand-500 border-t-transparent"></div>
                </div>
              )}
            </div>

            <AnimatePresence>
              {showSuggestions && suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-full mt-2 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                >
                  {suggestions.map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        handleSearch(suggestion);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-brand-400 transition-colors border-b border-white/5 last:border-0"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-400 ${
                  isActive(link.path) ? 'text-brand-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-900/20"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-brand-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Marquee - Enhanced Premium Decoration */}
      <div className="w-full bg-[#0a051a] overflow-hidden border-y border-white/10 relative">
        {/* Decorative Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a051a] to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a051a] to-transparent z-20"></div>
        
        {/* Subtle Glow Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>

        <div className="animate-marquee py-4 text-brand-400/80 font-medium text-[10px] md:text-xs tracking-[0.4em] uppercase flex items-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-16 whitespace-nowrap">
                Bridging the gap between potential and performance
              </span>
              <div className="flex space-x-2 items-center mx-4">
                <div className="w-1.5 h-1.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(var(--brand-500),0.8)]"></div>
                <div className="w-1 h-1 bg-brand-500/40 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(var(--brand-500),0.8)]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {/* Mobile Search Bar */}
              <div className="px-3 py-4 border-b border-slate-800">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSearch(searchQuery);
                    }}
                    placeholder="AI Search..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-base text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all"
                  />
                  <Search className="absolute left-4 top-3.5 text-white/40" size={20} />
                  {isSearching && (
                    <div className="absolute right-4 top-3.5">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-brand-500 border-t-transparent"></div>
                    </div>
                  )}
                </div>
                
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 bg-slate-900/50 rounded-2xl overflow-hidden"
                    >
                      {suggestions.map((suggestion, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSearchQuery(suggestion);
                            handleSearch(suggestion);
                          }}
                          className="w-full text-left px-4 py-4 text-base text-white/70 hover:bg-white/5 hover:text-brand-400 transition-colors border-b border-white/5 last:border-0"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-slate-800 ${
                    isActive(link.path) ? 'text-brand-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/7tLyYFYh/Whats-App-Image-2026-03-21-at-21-13-31.jpg" 
                alt="Kaushalayan Logo" 
                className="w-8 h-8 rounded object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Kaushalayan Consulting<span className="text-brand-500">.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              Transforming workforces through expert training and business development consultancy. 15+ years of excellence in professional growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/approach" className="hover:text-white transition-colors">Training Approach</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/services" className="hover:text-white transition-colors">Negotiation Skills</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Team Collaboration</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Client Handling</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Professionalism</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span>consultingkaushalayan@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <span>+91 9958430718</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-500 shrink-0" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-400">
          <div className="space-y-2">
            <p>© 2026 Kaushalayan Consulting. All rights reserved.</p>
            <p>
              Design by <a href="https://www.waltdesignsstudio.in" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline">Walt Designs & Studio</a>
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  const pathname = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="h-[110px] md:h-[140px]" />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};
