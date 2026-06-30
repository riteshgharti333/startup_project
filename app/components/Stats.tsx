"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiTrendingUp,
  FiUsers,
  FiPieChart,
  FiZap,
  FiStar,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface Stat {
  icon: IconType;
  number: string;
  label: string;
  color: string;
  bg: string;
}

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const stats: Stat[] = [
    {
      icon: FiTrendingUp,
      number: "30+",
      label: "Successful Campaigns",
      color: "text-(--primary)",
      bg: "bg-(--primary)/10",
    },
    {
      icon: FiUsers,
      number: "20+",
      label: "Business Partners",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: FiPieChart,
      number: "95%",
      label: "Client Retention Rate",
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: FiZap,
      number: "2x",
      label: "Average Growth Delivered",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <section ref={sectionRef} className="relative pb-16 sm:pb-20 lg:pb-24">
      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
            <FiStar size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">Our Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
            Numbers That{" "}
            <span className="relative inline-block">
              <span className="text-(--primary)">Speak</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
              />
            </span>
          </h2>

          <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
            Our track record of delivering exceptional results for our clients.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon: IconType = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative"
              >
                <div className="h-full bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-8 text-center hover:border-(--primary)/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 ${stat.bg} rounded-(--radius-lg) flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={26} className={stat.color} />
                  </motion.div>

                  {/* Number with Counter Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--text) mb-2 group-hover:text-(--primary) transition-colors duration-300"
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="text-xs sm:text-sm text-(--text-muted) group-hover:text-(--text) transition-colors duration-300"
                  >
                    {stat.label}
                  </motion.p>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--primary) rounded-full group-hover:w-1/2 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Stats;
