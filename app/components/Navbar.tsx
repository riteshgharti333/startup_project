"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiPhone,
  FiArrowRight,
  FiX,
  FiCommand,
  FiChevronDown,
} from "react-icons/fi";
import { navLinks } from "../data/data";

// Types
interface NavChild {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href?: string;
  children?: NavChild[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      // Update scrolled state for background
      setScrolled(currentScrollY > 20);

      lastScrollY.current = currentScrollY;
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

  const handleDropdownEnter = (): void => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = (): void => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      {/* Main Navbar - Unique Bento Grid Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full px-10"
      >
        <motion.div
          className="relative flex items-center gap-2 p-1.5"
         
        >
          {/* Logo Block */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative flex items-center gap-2 px-4 py-3 bg-(--surface) rounded-(--radius-xl) border border-(--border) shadow-lg min-w-fit"
          >
            <Link href="/" className="relative flex items-center gap-2">
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
            </Link>
          </motion.div>

          {/* Navigation Blocks */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            <div className="flex items-center gap-1 bg-(--surface) rounded-(--radius-xl) p-1 border border-(--border)">
              {navLinks.map((link: NavLink, index: number) => (
                <motion.div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    if (link.children) handleDropdownEnter();
                  }}
                  onMouseLeave={() => {
                    if (link.children) handleDropdownLeave();
                  }}
                >
                  {link.children ? (
                    <div className="relative">
                      <Link
                        href={link.href || "#"}
                        onClick={(e) => {
                          if (link.children) {
                            e.preventDefault();
                            setIsDropdownOpen(!isDropdownOpen);
                          }
                          setActiveIndex(index);
                        }}
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
                            activeIndex === index
                              ? "bg-white"
                              : "bg-(--text-muted)"
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
                          {link.label}
                        </span>

                        {/* Dropdown Arrow */}
                        <FiChevronDown
                          className={`relative z-10 transition-transform duration-200 ${
                            activeIndex === index
                              ? "text-white"
                              : "text-(--text-muted)"
                          } ${isDropdownOpen ? "rotate-180" : ""}`}
                          size={14}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isDropdownOpen && link.children && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-64 bg-(--surface) rounded-(--radius-xl) border border-(--border) shadow-2xl overflow-hidden"
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <div className="p-2 space-y-1">
                              {/* Main Services link */}
                              <Link
                                href={link.href || "#"}
                                className="flex items-center gap-3 px-4 py-3 rounded-(--radius-md) bg-(--primary)/5 hover:bg-(--primary)/10 transition-all duration-200 group"
                              >
                                <div className="w-2 h-2 rounded-full bg-(--primary)" />
                                <span className="text-sm font-semibold text-(--primary)">
                                  All Services
                                </span>
                                <FiArrowRight
                                  className="ml-auto text-(--primary) transition-all duration-200 transform group-hover:translate-x-1"
                                  size={14}
                                />
                              </Link>

                              {/* Divider */}
                              <div className="h-px bg-(--border) my-1" />

                              {/* Children links */}
                              {link.children.map((child: NavChild) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-(--radius-md) hover:bg-(--primary)/10 transition-all duration-200 group"
                                >
                                  <div className="w-2 h-2 rounded-full bg-(--primary) opacity-0 group-hover:opacity-100 transition-opacity" />
                                  <span className="text-sm font-medium text-(--text-muted) group-hover:text-(--text) transition-colors">
                                    {child.label}
                                  </span>
                                  <FiArrowRight
                                    className="ml-auto text-(--text-muted) opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1"
                                    size={14}
                                  />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
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
                          activeIndex === index
                            ? "bg-white"
                            : "bg-(--text-muted)"
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
                        {link.label}
                      </span>
                    </Link>
                  )}
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

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-(--surface) rounded-(--radius-xl) border border-(--border) shadow-lg"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiCommand size={20} />}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
