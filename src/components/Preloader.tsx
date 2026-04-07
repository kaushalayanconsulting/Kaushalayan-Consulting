import { motion, AnimatePresence } from 'motion/react';
import { Globe } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2e1065]"
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[500px] h-[500px] bg-brand-500/20 blur-[120px] rounded-full"
          />

          <div className="relative flex flex-col items-center">
            {/* Earth Icon Container */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 0.8, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-brand-400"
              >
                <Globe size={80} strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            {/* Company Logo with Popup Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.4, 0.7, 1.1, 1],
                opacity: 1 
              }}
              transition={{ 
                delay: 0.5,
                duration: 1.5,
                times: [0, 0.4, 0.6, 0.8, 1],
                ease: "easeOut"
              }}
              className="relative"
            >
              <div className="w-24 h-24 p-1 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <img 
                  src="https://i.ibb.co/7tLyYFYh/Whats-App-Image-2026-03-21-at-21-13-31.jpg" 
                  alt="Kaushalayan Logo" 
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Pulsing Ring around Logo */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 border-2 border-brand-500 rounded-2xl"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8 flex flex-col items-center"
            >
              <span className="text-white font-bold text-xl tracking-[0.3em] uppercase">
                Kaushalayan
              </span>
              <div className="mt-2 flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-1.5 h-1.5 bg-brand-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
