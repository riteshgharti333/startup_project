"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiX, FiMessageCircle } from "react-icons/fi";

const Float = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Hide on scroll down, show on scroll up
  const [lastScrollY, setLastScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Button - Bottom Left */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-6 z-50"
          >
            {/* Main Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-14 h-14 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group"
            >
              {/* Pulse Animation */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
              
              {/* Icon */}
              {isOpen ? (
                <FiX className="text-white w-6 h-6" />
              ) : (
                <FiMessageCircle className="text-white w-7 h-7" />
              )}
              
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center animate-pulse border-2 border-white">
                1
              </span>
            </motion.button>

            {/* Popup Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-20 left-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-3 w-64 border border-gray-100 dark:border-gray-700"
                >
                  <div className="space-y-2">
                    {/* Header */}
                    <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">
                        Get Free Consultation
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        We're here to help you!
                      </p>
                    </div>

                    {/* WhatsApp */}
                    <Link
                      href="https://wa.me/8801851072019"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all group"
                    >
                      <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                        <FaWhatsapp className="text-[#25D366] w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                          WhatsApp
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          +880 1851072019
                        </p>
                      </div>
                      <span className="text-xs text-green-500">Chat</span>
                    </Link>

                    {/* Call */}
                    <Link
                      href="tel:+8801851072019"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                    >
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <FiPhone className="text-blue-500 w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                          Call Now
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          +880 1851072019
                        </p>
                      </div>
                      <span className="text-xs text-blue-500">Call</span>
                    </Link>

                    {/* Close Hint */}
                    <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 pt-1">
                      Click outside or press ✕ to close
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Float;