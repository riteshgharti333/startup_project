"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiPlay,
  FiCheck,
  FiZap,
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiCode,
  FiPenTool,
} from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-3 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-(--surface) border border-(--border) rounded-full shadow-lg mx-auto lg:mx-0"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-(--surface) bg-gradient-to-br from-(--primary) to-purple-500"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-(--text-muted)">
                Trusted by{" "}
                <span className="text-(--text) font-semibold">500+</span>{" "}
                businesses
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) leading-[1.15] tracking-tight"
              >
                We Create What
                <br />
                <span className="relative inline-block mt-1">
                  <span className="relative z-10 bg-gradient-to-r from-(--primary) to-purple-500 bg-clip-text text-transparent">
                    Businesses Need
                  </span>
                </span>
                <br />
                <span className="text-(--text)">to Grow</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-(--text-muted) max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                From branding and design to development, marketing, and
                automation, we help businesses build, launch, and scale with
                confidence.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-2 px-6 h-12 bg-(--primary) hover:bg-(--primary-hover) text-white font-medium text-sm rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/25 hover:shadow-(--primary)/40 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">
                    Book a Free Consultation
                  </span>
                  <FiArrowRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  />
                </motion.div>
              </Link>

              <Link href="/services" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-2.5 px-6 h-12 bg-(--surface) hover:bg-(--surface-hover) text-(--text) font-medium text-sm rounded-(--radius-md) transition-all border-2 border-(--border) hover:border-(--primary)/30 cursor-pointer"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="p-1.5 rounded-full bg-(--primary)/10 group-hover:bg-(--primary)/20 transition-colors"
                  >
                    <FiPlay size={12} className="text-(--primary) ml-0.5" />
                  </motion.div>
                  <span>View Services</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FiCheck key={i} size={14} className="text-green-500" />
                  ))}
                </div>
                <span className="text-xs text-(--text-muted)">5.0 Rating</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-(--border)" />
              <div className="flex items-center gap-1.5">
                <FiShield size={14} className="text-(--primary)" />
                <span className="text-xs text-(--text-muted)">
                  100% Client Satisfaction
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative lg:block flex justify-center"
          >
            {/* Main Visual Container */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Central Circle Design */}
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-(--primary)/20"
                />

                {/* Middle Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full border border-(--primary)/10"
                />

                {/* Central Content */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-(--primary) to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-(--surface) flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-(--primary) to-purple-500 bg-clip-text text-transparent"
                      >
                        500+
                      </motion.div>
                      <p className="text-xs text-(--text-muted) mt-1">
                        Happy Clients
                      </p>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[
                  {
                    icon: FiCode,
                    position: "top-0 left-1/2 -translate-x-1/2",
                    label: "Development",
                  },
                  {
                    icon: FiPenTool,
                    position: "top-1/4 right-0",
                    label: "Design",
                  },
                  {
                    icon: FiTrendingUp,
                    position: "bottom-1/4 right-0",
                    label: "Marketing",
                  },
                  {
                    icon: FiZap,
                    position: "bottom-0 left-1/2 -translate-x-1/2",
                    label: "Automation",
                  },
                  {
                    icon: FiUsers,
                    position: "bottom-1/4 left-0",
                    label: "Support",
                  },
                  {
                    icon: FiShield,
                    position: "top-1/4 left-0",
                    label: "Security",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className={`absolute ${item.position} w-12 h-12 lg:w-16 lg:h-16`}
                    >
                      <div className="w-full h-full bg-(--surface) border border-(--border) rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:border-(--primary)/30 transition-all cursor-pointer">
                        <Icon size={18} className="text-(--primary)" />
                      </div>
                    </motion.div>
                  );
                })}

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="absolute w-1.5 h-1.5 bg-(--primary) rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Glow Effects */}
              <div className="absolute inset-0 bg-(--primary)/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -inset-4 bg-purple-500/10 rounded-full blur-2xl -z-20" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
