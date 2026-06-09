"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiStar, FiZap } from "react-icons/fi";
import { mainServices } from "../data/data";

const Service = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative pb-20 lg:pb-32">
      <div className="relative w-full max-w-7xl mx-auto px-3 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
            <FiStar size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">
              32+ Services Available
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
            Services to{" "}
            <span className="relative inline-block">
              <span className="text-(--primary)">Elevate</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary) origin-left rounded-full"
              />
            </span>{" "}
            You
          </h2>

          <p className="text-lg text-(--text-muted) max-w-2xl mx-auto">
            From AI automation to stunning mobile apps — we cover every
            technology need with transparent pricing and dedicated support.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;

            return (
              <Link href={service.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -6 }}
                  className="group relative bg-(--surface) border border-(--border) rounded-(--radius-2xl) p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full overflow-hidden"
                >
                  {/* Animated Gradient Border */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-(--radius-2xl)`}
                    style={{ padding: "1px" }}
                  >
                    <div className="w-full h-full bg-(--surface) rounded-(--radius-2xl)" />
                  </div>

                  {/* Background Glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-(--radius-2xl) opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10`}
                  />

                  <div className="relative z-10">
                    {/* Top Section - Icon & Stats */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        animate={{
                          rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-(--radius-xl) bg-gradient-to-br ${service.borderGradient} p-0.5`}
                      >
                        <div className="w-full h-full rounded-(--radius-lg) bg-(--surface) flex items-center justify-center">
                          <Icon size={26} className="text-(--primary)" />
                        </div>
                      </motion.div>

                      {/* Animated Stats Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : 20,
                        }}
                        className="flex items-center gap-1 px-2.5 py-1 bg-(--surface) border border-(--border) rounded-full"
                      >
                        <FiZap size={12} className="text-(--primary)" />
                        <span className="text-[10px] font-medium text-(--text-muted)">
                          {service.stats}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-(--text) mb-2 group-hover:text-(--primary) transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bottom Section - Price & CTA */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-(--text-muted) mb-0.5">
                          Starting from
                        </p>
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.05 : 1,
                          }}
                          className="text-xl font-bold bg-gradient-to-r from-(--primary) to-purple-500 bg-clip-text text-transparent"
                        >
                          {service.startingPrice}/
                          <span className="text-sm">Only</span>
                        </motion.div>
                      </div>

                      <motion.div
                        animate={{
                          x: isHovered ? 0 : -10,
                          opacity: isHovered ? 1 : 0.5,
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-(--primary)"
                      >
                        <span className="hidden group-hover:inline">
                          Explore
                        </span>
                        <div className="w-8 h-8 rounded-full bg-(--primary)/10 group-hover:bg-(--primary) flex items-center justify-center transition-all duration-300">
                          <FiArrowRight
                            size={14}
                            className="group-hover:text-white transition-colors"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div
                      className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br ${service.borderGradient}`}
                    />
                    <div
                      className={`absolute top-6 right-6 w-4 h-4 rounded-full bg-gradient-to-br ${service.borderGradient}`}
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-white font-medium rounded-(--radius-xl) transition-all shadow-lg shadow-(--primary)/25 hover:shadow-(--primary)/40 flex items-center gap-3 mx-auto overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <FiArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </span>

              <span className="relative z-10 text-base">See All Services</span>

              <span className="relative z-10 flex gap-1 ml-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
