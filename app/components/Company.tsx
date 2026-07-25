"use client";

import { motion } from "framer-motion";
import { FiStar, FiArrowUpRight } from "react-icons/fi";
import { CompImage } from "../data/companyData";

const Company = () => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden pb-20 lg:pb-28">
      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-4 sm:mb-6">
            <FiStar size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4 tracking-tight">
            Companies That <span className="text-(--primary)">Trust Us</span>
          </h2>

          <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
            Join thousands of businesses that rely on our expertise to build,
            scale, and succeed in the digital world.
          </p>
        </motion.div>

        {/* Company Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-10"
        >
          {CompImage.map((company, index) => (
            <motion.div
              key={`company-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center justify-center "
            >
              <img
                src={company.img}
                alt="Partner company"
                className="h-22 sm:h-24 md:h-28 w-auto object-contain  transition-all duration-500 ease-out  group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-(--primary)/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Company;
