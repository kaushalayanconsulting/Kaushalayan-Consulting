import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { AIChat } from './AIChat';

interface LayoutProps {
  children: ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

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
        scrolled ? 'bg-gray-800/95 backdrop-blur-md shadow-lg py-3' : 'bg-gray-800/80 py-5'
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
    <footer className="bg-[#3d2b1f] text-slate-300 pt-20 pb-10 border-t border-white/5">
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
