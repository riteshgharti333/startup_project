"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import {
  FiAward,
  FiZap,
  FiShield,
  FiHeadphones,
  FiTrendingUp,
  FiStar,
  FiLayers,
  FiCheck,
} from "react-icons/fi"
import type { IconType } from "react-icons"

interface Feature {
  icon: IconType
  title: string
  description: string
  color: string
  bg: string
}

const Choose: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-80px",
    amount: 0.1 
  })

  const features: Feature[] = [
    {
      icon: FiAward,
      title: "Experience",
      description:
        "Over 5+ years of industry expertise delivering cutting-edge solutions across multiple domains.",
      color: "text-(--primary)",
      bg: "bg-(--primary)/10",
    },
    {
      icon: FiZap,
      title: "Fast Delivery",
      description:
        "Agile workflows and streamlined processes ensure your projects are delivered on time, every time.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: FiShield,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality checks guarantee bug-free, high-performance solutions.",
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      icon: FiHeadphones,
      title: "Dedicated Support",
      description:
        "24/7 dedicated support team ready to assist you at every stage of your project journey.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: FiTrendingUp,
      title: "Proven Results",
      description:
        "Track record of 150+ successful projects with measurable ROI and client satisfaction.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      icon: FiLayers,
      title: "Innovation & Strategy",
      description:
        "We combine creative thinking with data-driven strategies to build future-ready digital solutions.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
  ]

  const leftFeatures: Feature[] = features.slice(0, 3)
  const rightFeatures: Feature[] = features.slice(3)

  const fadeInUp: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
  }

  const fadeInLeft: Variants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
  }

  const fadeInRight: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
  }

  const dotVariants: Variants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.3
      }
    },
  }

  const underlineVariants: Variants = {
    hidden: { 
      scaleX: 0,
      opacity: 0
    },
    visible: { 
      scaleX: 1,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
  }

  const iconHover = {
    scale: 1.15,
    rotate: [0, -5, 5, 0] as [number, number, number, number],
    transition: { 
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1] as [number, number, number, number]
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-(--background) overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-(--border)/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-(--border)/50 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="lg:pr-12 lg:border-r border-(--border)">
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6"
            >
              <FiStar size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">Why Choose Us</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mb-10 lg:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) leading-[1.15] mb-4">
                Why Partner
                <br />
                <span className="relative inline-block">
                  <span className="text-(--primary)">With Us?</span>
                  <motion.span
                    variants={underlineVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                  />
                </span>
              </h2>
              <p className="text-sm sm:text-base text-(--text-muted) max-w-lg leading-relaxed">
                We combine technical expertise with creative innovation to
                deliver solutions that drive real business growth.
              </p>
            </motion.div>

            {/* Feature Cards - Left Side */}
            <div className="space-y-6">
              {leftFeatures.map((feature, index) => {
                const Icon: IconType = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="group relative pl-6 border-l-2 border-(--border) hover:border-(--primary) transition-all duration-500"
                  >
                    {/* Dot on timeline */}
                    <motion.div
                      variants={dotVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-(--surface) border-2 border-(--border) group-hover:border-(--primary) group-hover:bg-(--primary) transition-all duration-500"
                    />

                    <motion.div
                      whileHover={{ 
                        y: -2,
                        boxShadow: "0 8px 25px rgba(59,130,246,0.1)",
                        borderColor: "rgba(59,130,246,0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-5 transition-all duration-300 ml-4"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={iconHover}
                          className={`w-10 h-10 ${feature.bg} rounded-(--radius-md) flex items-center justify-center flex-shrink-0 transition-colors duration-300`}
                        >
                          <Icon size={20} className={feature.color} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-(--text) group-hover:text-(--primary) transition-colors duration-300 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-(--text-muted) leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="hidden sm:block self-start mt-1"
                        >
                          <FiCheck size={14} className="text-(--primary)" />
                        </motion.span>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:pl-12 mt-8 lg:mt-0">
            <div className="space-y-6 lg:mt-32">
              {rightFeatures.map((feature, index) => {
                const Icon: IconType = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInRight}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="group relative pr-6 border-r-2 border-(--border) hover:border-(--primary) transition-all duration-500"
                  >
                    {/* Dot on timeline */}
                    <motion.div
                      variants={dotVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      className="absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-(--surface) border-2 border-(--border) group-hover:border-(--primary) group-hover:bg-(--primary) transition-all duration-500"
                    />

                    <motion.div
                      whileHover={{ 
                        y: -2,
                        boxShadow: "0 8px 25px rgba(59,130,246,0.1)",
                        borderColor: "rgba(59,130,246,0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-5 transition-all duration-300 mr-4"
                    >
                      <div className="flex gap-4">
                        <motion.div
                          whileHover={iconHover}
                          className={`w-10 h-10 ${feature.bg} rounded-(--radius-md) flex items-center justify-center flex-shrink-0 transition-colors duration-300`}
                        >
                          <Icon size={20} className={feature.color} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-(--text) group-hover:text-(--primary) transition-colors duration-300 mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-(--text-muted) leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose