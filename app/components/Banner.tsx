"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiPlay,
  FiCheck,
  FiZap,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const Banner = () => {
  const stats = [
    { icon: FiTrendingUp, value: "150+", label: "Projects Delivered" },
    { icon: FiUsers, value: "98%", label: "Client Satisfaction" },
    { icon: FiZap, value: "2x", label: "Faster Growth" },
  ];

  const floatingCards = [
    {
      title: "SEO Score",
      value: "95%",
      change: "+12%",
      color: "bg-(--primary)/10",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      color: "bg-green-500/10",
    },
    {
      title: "Page Speed",
      value: "98",
      change: "A+",
      color: "bg-purple-500/10",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-(--background)">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -right-40 w-[500px] h-[500px] bg-(--primary)/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-(--primary)/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) text-sm text-(--text-muted)"
            >
              <span className="w-2 h-2 bg-(--primary) rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) leading-[1.1]"
              >
                We Build{" "}
                <span className="relative">
                  <span className="relative z-10 text-(--primary)">
                    High-Converting
                  </span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M1 11C50 3 150 3 199 11"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </motion.svg>
                </span>
                <br />
                Websites That Grow Your Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-(--text-muted) max-w-xl leading-relaxed"
              >
                Web Design, Development, SEO and Branding for startups and local
                businesses looking to scale their online presence.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 px-6 py-3.5 bg-(--primary) hover:bg-(--primary-hover) text-white font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/25 hover:shadow-(--primary)/40"
              >
                <span>Get Free Quote</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiArrowRight size={18} />
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 px-6 py-3.5 bg-(--surface) hover:bg-(--surface-hover) text-(--text) font-medium rounded-(--radius-md) transition-all border border-(--border)"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-full bg-(--primary)/20 flex items-center justify-center"
                >
                  <FiPlay size={14} className="text-(--primary) ml-0.5" />
                </motion.span>
                <span>View Portfolio</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Mockup & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Mockup Container */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* 3D Website Mockup */}
              <div className="relative mx-auto max-w-md">
                {/* Browser Frame */}
                <div className="rounded-(--radius-lg) overflow-hidden border border-(--border) bg-(--surface) shadow-2xl shadow-(--primary)/10">
                  {/* Browser Top Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-(--surface-hover) border-b border-(--border)">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-2 bg-(--border) rounded-full w-3/4" />
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-4 space-y-3">
                    {/* Hero Section Mockup */}
                    <div className="space-y-2">
                      <div className="h-6 bg-(--primary) rounded-md w-3/4" />
                      <div className="h-3 bg-(--border) rounded-md w-full" />
                      <div className="h-3 bg-(--border) rounded-md w-2/3" />
                    </div>

                    {/* CTA Button */}
                    <div className="h-10 bg-(--primary) rounded-(--radius-md) w-1/3" />

                    {/* Grid Sections */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="aspect-video bg-(--surface-hover) rounded-md border border-(--border)" />
                          <div className="h-2 bg-(--border) rounded-md w-3/4" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-(--primary)/5 rounded-(--radius-xl) blur-2xl -z-10" />
              </div>
            </motion.div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5 - index * 3, 0] }}
                transition={{
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  y: {
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  },
                }}
                className={`absolute ${
                  index === 0
                    ? "-top-6 -right-6"
                    : index === 1
                      ? "bottom-20 -left-20"
                      : "bottom-1/3 -right-8"
                } p-3 rounded-(--radius-md) bg-(--surface) border border-(--border) shadow-xl backdrop-blur-sm`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-(--radius-sm) ${card.color}`}>
                    {index === 0 ? (
                      <FiTrendingUp size={16} className="text-(--primary)" />
                    ) : index === 1 ? (
                      <FiZap size={16} className="text-green-500" />
                    ) : (
                      <FiZap size={16} className="text-purple-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-(--text-muted)">{card.title}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-(--text)">
                        {card.value}
                      </span>
                      <span className="text-xs text-green-500">
                        {card.change}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 shadow-xl"
            >
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <Icon
                        size={16}
                        className="text-(--primary) mx-auto mb-1"
                      />
                      <div className="text-sm font-bold text-(--text)">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-(--text-muted)">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
