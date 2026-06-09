"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiStar,
  FiPhone,
  FiGlobe,
  FiCpu,
  FiSmartphone,
  FiCloud,
  FiTrendingUp,
  FiUsers,
  FiCode,
  FiPenTool,
} from "react-icons/fi";
import { serviceCategories } from "../data/serviceData";

interface ServiceItem {
  name: string;
  description: string;
  startingPrice: string;
  featured?: boolean;
}

interface ServiceCategory {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  services: ServiceItem[];
}

const Service: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const getCategoryIcon = (category: ServiceCategory) => {
    if (category.icon) return category.icon;

    const icons: Record<
      string,
      React.ComponentType<{ size?: number; className?: string }>
    > = {
      "Web Development": FiGlobe,
      "AI Solutions": FiCpu,
      "Mobile App Development": FiSmartphone,
      "Cloud & Infrastructure": FiCloud,
      "Digital Marketing": FiTrendingUp,
      "Consulting & Training": FiUsers,
      "Graphic Design": FiPenTool,
    };
    return icons[category.title] || FiCode;
  };

  return (
    <main className="relative">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
              <FiStar size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
              Solutions That{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">Drive Growth</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                />
              </span>
            </h1>
            <p className="text-base sm:text-lg text-(--text-muted) max-w-2xl mx-auto mb-8">
              From custom websites to AI-powered solutions — we deliver
              everything you need to succeed online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                View All Services
                <FiArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
              >
                <FiPhone size={14} className="text-(--primary)" />
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List - Card Layout */}
      <section
        id="services-list"
        ref={sectionRef}
        className="relative pb-20 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center gap-3 my-14">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              What We Offer
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          {/* Categories */}
          <div className="space-y-16 sm:space-y-20">
            {serviceCategories.map((category, catIndex) => {
              const CategoryIcon = getCategoryIcon(category);
              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-(--primary)/10 rounded-(--radius-lg) flex items-center justify-center flex-shrink-0">
                      <CategoryIcon size={22} className="text-(--primary)" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-(--text) ">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-(--text-muted) mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        whileHover={{ y: -2 }}
                        className="group relative bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5 hover:border-(--primary)/30 transition-all duration-300 flex flex-col"
                      >
                        {/* Featured Badge */}
                        {service.featured && (
                          <div className="absolute -top-2 -right-2 px-2.5 py-0.5 bg-(--primary) text-white text-[10px] font-medium rounded-full z-10">
                            Popular
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors mb-2 pr-6 cursor-pointer">
                            {service.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>

                        {/* Bottom */}
                        {/* Bottom */}
                        <div className="pt-3 border-t border-(--border) flex items-center justify-between">
                          <div>
                            <motion.div
                              animate={{
                                scale: 1,
                              }}
                              whileHover={{
                                scale: 1.05,
                              }}
                              className="text-sm sm:text-base font-bold bg-gradient-to-r from-(--primary) to-purple-500 bg-clip-text text-transparent"
                            >
                              {service.startingPrice}/
                              <span className="text-xs">Only</span>
                            </motion.div>
                          </div>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1 text-xs font-medium text-(--primary) hover:text-(--primary-hover) transition-colors group/link"
                          >
                            <span>Get Started</span>
                            <FiArrowRight
                              size={12}
                              className="group-hover/link:translate-x-0.5 transition-transform"
                            />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Service;
