"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiPhone,
  FiArrowRight,
  FiX,
  FiChevronDown,
  FiCalendar,
  FiMessageCircle,
} from "react-icons/fi";
import { navLinks } from "../data/data";
import logo from "../../public/logo.svg";

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
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const lastScrollY = useRef<number>(0);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Set active index based on current pathname
  useEffect(() => {
    const findActiveIndex = () => {
      for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];

        // Check if it's a direct link (no children)
        if (link.href && link.href === pathname) {
          setActiveIndex(i);
          return;
        }

        // Check if any child matches the current path
        if (link.children) {
          for (const child of link.children) {
            if (child.href === pathname) {
              setActiveIndex(i);
              return;
            }
          }
        }
      }
      // If no match found, set to 0 (home)
      setActiveIndex(0);
    };

    findActiveIndex();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
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
      setMobileExpanded(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleDropdownEnter = (index: number): void => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveIndex(index);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = (): void => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
      // Reset to route-based active index, not the hovered one
      const findActiveIndex = () => {
        for (let i = 0; i < navLinks.length; i++) {
          const link = navLinks[i];
          if (link.href && link.href === pathname) {
            setActiveIndex(i);
            return;
          }
          if (link.children) {
            for (const child of link.children) {
              if (child.href === pathname) {
                setActiveIndex(i);
                return;
              }
            }
          }
        }
        setActiveIndex(0);
      };
      findActiveIndex();
    }, 150);
  };

  const handleNavHover = (index: number): void => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveIndex(index);
  };

  const handleNavLeave = (): void => {
    hoverTimeout.current = setTimeout(() => {
      // Reset to route-based active index
      const findActiveIndex = () => {
        for (let i = 0; i < navLinks.length; i++) {
          const link = navLinks[i];
          if (link.href && link.href === pathname) {
            setActiveIndex(i);
            return;
          }
          if (link.children) {
            for (const child of link.children) {
              if (child.href === pathname) {
                setActiveIndex(i);
                return;
              }
            }
          }
        }
        setActiveIndex(0);
      };
      findActiveIndex();
    }, 100);
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-2 sm:px-10"
      >
        <motion.div className="relative flex items-center gap-2">
          {/* Logo Block */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative flex items-center gap-2 p-3 bg-(--surface) rounded-(--radius-xl) border border-(--border) shadow-lg min-w-fit h-[45px]"
          >
            <Link href="/" className="relative flex items-center gap-2">
              <div className="relative flex-shrink-0">
                <Image
                  src={logo}
                  alt="TWIPRA Technology"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-(--radius-sm)"
                />
              </div>
              <div className="sm:block leading-none">
                <div className="text-sm font-bold text-(--text) tracking-wide">
                  TWIPRA
                </div>
                <div className="text-[10px] text-(--text-muted) tracking-wider">
                  TECHNOLOGY
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            <div className="flex items-center gap-1 bg-(--surface) rounded-(--radius-xl) p-1 border border-(--border) h-[45px]">
              {navLinks.map((link: NavLink, index: number) => (
                <motion.div
                  key={link.label}
                  className="relative h-full"
                  onMouseEnter={() => {
                    if (link.children) {
                      handleDropdownEnter(index);
                    } else {
                      handleNavHover(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (link.children) {
                      handleDropdownLeave();
                    } else {
                      handleNavLeave();
                    }
                  }}
                >
                  {link.children ? (
                    <div className="relative h-full">
                      <Link
                        href={link.href || "#"}
                        className="relative px-4 py-2.5 text-sm font-medium transition-colors duration-200 flex items-center gap-2 h-full"
                      >
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
                        <motion.div
                          animate={{
                            scale: activeIndex === index ? 1 : 0.5,
                            opacity: activeIndex === index ? 1 : 0.3,
                          }}
                          className={`w-1.5 h-1.5 rounded-full relative z-10 ${activeIndex === index ? "bg-white" : "bg-(--text-muted)"}`}
                        />
                        <span
                          className={`relative z-10 transition-colors duration-200 ${activeIndex === index ? "text-white" : "text-(--text-muted) hover:text-(--text)"}`}
                        >
                          {link.label}
                        </span>
                        <FiChevronDown
                          className={`relative z-10 transition-transform duration-200 ${activeIndex === index ? "text-white" : "text-(--text-muted)"} ${isDropdownOpen && activeIndex === index ? "rotate-180" : ""}`}
                          size={14}
                        />
                      </Link>

                      <AnimatePresence>
                        {isDropdownOpen &&
                          activeIndex === index &&
                          link.children && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute top-full left-0 mt-2 w-64 bg-(--surface) rounded-(--radius-xl) border border-(--border) shadow-2xl overflow-hidden"
                              onMouseEnter={() => handleDropdownEnter(index)}
                              onMouseLeave={handleDropdownLeave}
                            >
                              <div className="p-2 space-y-1">
                                <Link
                                  href={link.href || "#"}
                                  className="flex items-center gap-3 px-4 py-3 rounded-(--radius-md) bg-(--primary)/5 hover:bg-(--primary)/10 transition-all duration-200 group"
                                  onClick={() => {
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-(--primary)" />
                                  <span className="text-sm font-semibold text-(--primary)">
                                    All {link.label}
                                  </span>
                                  <FiArrowRight
                                    className="ml-auto text-(--primary) group-hover:translate-x-1 transition-transform"
                                    size={14}
                                  />
                                </Link>
                                <div className="h-px bg-(--border) my-1" />
                                {link.children.map((child: NavChild) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-(--radius-md) hover:bg-(--primary)/10 transition-all duration-200 group"
                                    onClick={() => {
                                      setIsDropdownOpen(false);
                                    }}
                                  >
                                    <div className="w-2 h-2 rounded-full bg-(--primary) opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="text-sm font-medium text-(--text-muted) group-hover:text-(--text) transition-colors">
                                      {child.label}
                                    </span>
                                    <FiArrowRight
                                      className="ml-auto text-(--text-muted) opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
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
                      className="relative px-4 py-2.5 text-sm font-medium transition-colors duration-200 flex items-center gap-2 h-full"
                    >
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
                      <motion.div
                        animate={{
                          scale: activeIndex === index ? 1 : 0.5,
                          opacity: activeIndex === index ? 1 : 0.3,
                        }}
                        className={`w-1.5 h-1.5 rounded-full relative z-10 ${activeIndex === index ? "bg-white" : "bg-(--text-muted)"}`}
                      />
                      <span
                        className={`relative z-10 transition-colors duration-200 ${activeIndex === index ? "text-white" : "text-(--text-muted) hover:text-(--text)"}`}
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
          <div className="flex items-center gap-2 ml-auto">
            {/* Book a Call */}
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 p-3 bg-(--primary) text-white text-xs font-medium rounded-(--radius-xl) hover:bg-(--primary-hover) transition-colors shadow-lg h-[45px] cursor-pointer"
              >
                <FiPhone size={14} />
                <span className="sm:inline">Book a Call</span>
              </motion.div>
            </Link>

            {/* Hamburger */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-[52px] h-[45px] bg-(--surface) rounded-(--radius-xl) border border-(--border) hover:bg-(--surface-hover) transition-colors shadow-lg lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                  }
                  className="w-5 h-0.5 bg-(--text) rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={
                    isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
                  }
                  className="w-4 h-0.5 bg-(--text) rounded-full ml-auto"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                  }
                  className="w-5 h-0.5 bg-(--text) rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Card */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative w-full max-w-md bg-(--surface) border border-(--border) rounded-(--radius-xl) shadow-2xl overflow-hidden mt-20 m-auto"
            >
              {/* Navigation */}
              <div className="p-4 space-y-1 max-h-[50vh] overflow-y-auto">
                {navLinks.map((link: NavLink, index: number) => (
                  <div key={link.label}>
                    {link.children ? (
                      <div>
                        <div className="flex items-center">
                          <Link
                            href={link.href || "#"}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex-1 flex items-center gap-3 p-3.5 rounded-(--radius-md) hover:bg-(--surface-hover) transition-colors group"
                          >
                            <div className="w-2 h-2 rounded-full bg-(--primary) group-hover:scale-125 transition-transform" />
                            <span className="text-sm font-semibold text-(--text)">
                              {link.label}
                            </span>
                          </Link>

                          <button
                            onClick={() =>
                              setMobileExpanded(
                                mobileExpanded === index ? null : index,
                              )
                            }
                            className="p-3.5 rounded-(--radius-md) hover:bg-(--surface-hover) transition-colors"
                          >
                            <motion.div
                              animate={{
                                rotate: mobileExpanded === index ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                              className="w-6 h-6 rounded-full bg-(--background) border border-(--border) flex items-center justify-center"
                            >
                              <FiChevronDown
                                size={12}
                                className="text-(--text-muted)"
                              />
                            </motion.div>
                          </button>
                        </div>

                        <AnimatePresence>
                          {mobileExpanded === index && link.children && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden ml-6 border-l-2 border-(--border) pl-3 mt-1 space-y-1"
                            >
                              {link.children.map((child: NavChild) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="flex items-center gap-2 p-2.5 rounded-(--radius-md) text-sm text-(--text-muted) hover:text-(--text) hover:bg-(--surface-hover) transition-colors"
                                >
                                  <div className="w-1 h-1 rounded-full bg-(--text-muted)" />
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href!}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 p-3.5 rounded-(--radius-md) hover:bg-(--surface-hover) transition-colors group"
                      >
                        <div className="w-2 h-2 rounded-full bg-(--primary) group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-semibold text-(--text)">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
