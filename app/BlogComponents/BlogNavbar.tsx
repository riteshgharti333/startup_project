"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SubscribeModal from "./SubscribeModal";
import logo from "../../public/new-logo.png";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

const BlogNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);
  // use number for browser timeout ID to avoid NodeJS Timeout type mismatch
  const scrollTimeout = useRef<number | null>(null);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setIsScrolled(currentScrollY > 50);
        lastScrollY.current = currentScrollY;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const mainLinks: NavLink[] = [
    { name: "Our Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50 pt-3 sm:pt-4">
      <motion.div
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`mx-auto px-2 sm:px-4 lg:px-8 transition-all duration-500 ${
          isScrolled ? "max-w-4xl" : "max-w-7xl"
        }`}
      >
        <div
          className={`bg-(--surface)/90 backdrop-blur-xl border border-(--border) rounded-2xl sm:rounded-3xl transition-all duration-300 ${
            isScrolled
              ? "px-3 sm:px-5 py-2 sm:py-2.5 shadow-2xl shadow-black/30"
              : "px-3 sm:px-6 py-2.5 sm:py-3 shadow-xl shadow-black/10"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link href="/blogs" className="flex-shrink-0 group min-w-0">
              <div className="">
                <Image
                  src={logo}
                  alt="twipra-technologies"
                  className="w-full h-6"
                  // width={50}
                  // height={40}
                />
              </div>
              {!isScrolled && (
                <p className="text-[8px] sm:text-[10px] text-(--primary) mt-0.5 font-medium tracking-widest uppercase hidden sm:block">
                  Blog & Insights
                </p>
              )}
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-0.5">
              {mainLinks.map((link: NavLink) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-(--text-muted) hover:text-(--primary) hover:bg-(--surface-hover) rounded-full transition-all duration-200 font-medium ${
                    isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <button
                onClick={() => setIsSubscribeOpen(true)}
                className={`bg-(--primary) text-white font-medium rounded-full hover:bg-(--primary-hover) transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 ${
                  isScrolled
                    ? "px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs"
                    : "px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm"
                }`}
              >
                Subscribe
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 text-(--text) hover:text-(--primary) transition-colors rounded-full hover:bg-(--surface-hover)"
              >
                <motion.span
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-base sm:text-lg font-light block"
                >
                  {isMenuOpen ? "✕" : "☰"}
                </motion.span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu - Absolute Position */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden absolute top-full left-3 right-3 mt-2 z-50"
            >
              <div className="bg-(--surface)/98 backdrop-blur-xl border border-(--border) rounded-2xl shadow-2xl overflow-hidden">
                <div className="py-2 px-1 space-y-0.5">
                  {mainLinks.map((link: NavLink, index: number) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-(--text) hover:bg-(--surface-hover) hover:text-(--primary) rounded-xl transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-(--primary)/50" />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="px-3 pt-2 pb-1"
                  >
                    <button
                      onClick={() => {
                        setIsSubscribeOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full py-3 bg-(--primary) text-white text-sm font-medium rounded-xl hover:bg-(--primary-hover) transition-all"
                    >
                      Subscribe to Newsletter
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />
    </div>
  );
};

export default BlogNavbar;
