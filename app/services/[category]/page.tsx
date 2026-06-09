"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiStar,
  FiPhone,
  FiArrowLeft,
  FiCheck,
  FiZap,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";
import { serviceCategories, getCategoryBySlug, getServiceBySlug } from "../../data/serviceData";

interface ServiceItem {
  slug: string;
  name: string;
  description: string;
  startingPrice: string;
  featured?: boolean;
}

interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

const Category: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Get category from URL slug - example: /services/web-development
  // You can get this from useParams() or props
  const slug = "web-development"; // Replace with actual slug from URL
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-(--text)">Category not found</h1>
      </div>
    );
  }

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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
              <FiStar size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">
                {category.title} Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
              {category.title.split(" ").slice(0, -1).join(" ") || category.title}{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">
                  {category.title.includes(" ")
                    ? category.title.split(" ").slice(-1)[0]
                    : category.title}
                </span>
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

            {/* Description */}
            <p className="text-base sm:text-lg text-(--text-muted) max-w-2xl mx-auto mb-8">
              {category.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                Explore Services
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

      {/* Services Grid */}
      <section
        id="services-list"
        ref={sectionRef}
        className="relative pb-20 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              What We Offer
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          {/* Back Button */}
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--primary) transition-colors mb-6"
          >
            <FiArrowLeft size={16} />
            <span>Back to All Services</span>
          </a>

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
                  <h3 className="text-sm sm:text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="pt-3 border-t border-(--border) flex items-center justify-between">
                  <div>
                    <span className="text-sm sm:text-base font-bold text-(--primary)">
                      {service.startingPrice}
                    </span>
                    <span className="text-[10px] text-(--text-muted) ml-1">
                      starting
                    </span>
                  </div>
                  <a
                    href={`/services/${category.slug}/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-(--primary) hover:text-(--primary-hover) transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <FiArrowRight
                      size={12}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Category;