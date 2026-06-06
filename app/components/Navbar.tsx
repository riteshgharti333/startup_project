"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiPhone,
  FiArrowRight,
  FiX,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiCommand,
  FiStar,
} from "react-icons/fi";
import { SiDribbble } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: FiTwitter, href: "#" },
    { name: "Instagram", icon: FiInstagram, href: "#" },
    { name: "LinkedIn", icon: FiLinkedin, href: "#" },
    { name: "Dribbble", icon: SiDribbble, href: "#" },
  ];

  return (
    <>
      {/* Main Navbar - Unique Bento Grid Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full px-10"
      >
        <motion.div
          className="relative flex items-center gap-2 p-1.5"
          animate={{
            backgroundColor: scrolled ? "var(--background)" : "transparent",
          }}
        >
          {/* Logo Block */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative flex items-center gap-2 px-4 py-3 bg-(--surface) rounded-(--radius-xl) border border-(--border) shadow-lg min-w-fit"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-(--primary) rounded-(--radius-md) flex items-center justify-center">
                <FiCommand className="text-white" size={18} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-(--primary) rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="text-sm font-bold text-(--text) tracking-wide">
                NEXORA
              </div>
              <div className="text-[10px] text-(--text-muted) tracking-wider">
                STUDIO
              </div>
            </div>
          </motion.div>

          {/* Navigation Blocks */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            <div className="flex items-center gap-1 bg-(--surface) rounded-(--radius-xl) p-1 border border-(--border)">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setActiveIndex(index)}
                    className="relative px-4 py-2.5 text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    {/* Active Background */}
                    {activeIndex === index && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-1 bg-(--primary) rounded-(--radius-md)"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    {/* Active Dot */}
                    <motion.div
                      animate={{
                        scale: activeIndex === index ? 1 : 0.5,
                        opacity: activeIndex === index ? 1 : 0.3,
                      }}
                      className={`w-1.5 h-1.5 rounded-full relative z-10 ${
                        activeIndex === index ? "bg-white" : "bg-(--text-muted)"
                      }`}
                    />

                    {/* Link Text */}
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-(--text-muted) hover:text-(--text)"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Actions Block */}
          <div className="flex items-center gap-2">
            {/* Book a Call */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:flex items-center gap-2 px-5 py-3 bg-(--primary) text-white text-sm font-medium rounded-(--radius-xl) hover:bg-(--primary-hover) transition-colors shadow-lg"
            >
              <FiPhone size={14} />
              <span className="hidden lg:inline">Book a Call</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
