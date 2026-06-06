"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCpu,
  FiCode,
  FiCloud,
  FiTrendingUp,
  FiUsers,
  FiUsers as FiCommunity,
  FiCalendar,
  FiMonitor,
  FiBriefcase,
  FiBook,
  FiChevronDown,
  FiCheck,
  FiStar,
} from "react-icons/fi";

const Service = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const serviceCategories = [
    {
      icon: FiCpu,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI",
      services: [
        {
          name: "AI Chatbot Development",
          desc: "Smart chatbots powered by GPT & custom NLP for customer support, sales, and automation.",
          price: "৳15,000+",
          featured: true,
        },
        {
          name: "Machine Learning Solutions",
          desc: "Custom ML models for prediction, classification, recommendation, and anomaly detection.",
          price: "৳30,000+",
        },
        {
          name: "Computer Vision",
          desc: "Object detection, face recognition, OCR, and quality control systems for your industry.",
          price: "৳35,000+",
        },
        {
          name: "Natural Language Processing",
          desc: "Text analysis, sentiment detection, language translation, and document intelligence.",
          price: "৳25,000+",
        },
      ],
    },
    {
      icon: FiCode,
      title: "Software Development",
      description: "Custom software built for performance",
      services: [
        {
          name: "Web Application Development",
          desc: "Scalable, high-performance web apps built with modern frameworks and clean architecture.",
          price: "৳25,000+",
          featured: true,
        },
        {
          name: "Mobile App Development",
          desc: "Native and cross-platform Android & iOS apps with smooth UX that users love.",
          price: "৳40,000+",
        },
        {
          name: "SaaS Platform Development",
          desc: "End-to-end SaaS products with multi-tenancy, billing integration, and admin dashboards.",
          price: "৳80,000+",
        },
        {
          name: "E-Commerce Development",
          desc: "Full-featured online stores with payment gateways, inventory, and analytics.",
          price: "৳35,000+",
        },
      ],
    },
    {
      icon: FiCloud,
      title: "Cloud & Infrastructure",
      description: "Reliable and scalable cloud solutions",
      services: [
        {
          name: "Cloud & VPS Management",
          desc: "AWS, Google Cloud, and VPS setup, security hardening, and 24/7 monitoring.",
          price: "৳8,000/mo",
          featured: true,
        },
        {
          name: "DevOps & CI/CD",
          desc: "Automated pipelines, containerization with Docker/Kubernetes, and release management.",
          price: "৳20,000+",
        },
        {
          name: "Cloud Migration",
          desc: "Seamlessly migrate your existing systems to the cloud with zero downtime.",
          price: "৳50,000+",
        },
      ],
    },
    {
      icon: FiTrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies",
      services: [
        {
          name: "SEO Optimization",
          desc: "Technical and content SEO strategies to rank higher and drive organic traffic.",
          price: "৳10,000/mo",
          featured: true,
        },
        {
          name: "Social Media Management",
          desc: "Content creation, scheduling, engagement, and performance analytics.",
          price: "৳12,000/mo",
        },
        {
          name: "Performance Marketing",
          desc: "Data-driven Google and Meta ad campaigns optimized for maximum ROI.",
          price: "৳15,000/mo",
        },
      ],
    },
    {
      icon: FiUsers,
      title: "IT Consulting & Training",
      description: "Expert guidance and skill development",
      services: [
        {
          name: "IT Strategy Consulting",
          desc: "Technology roadmapping, vendor selection, and digital transformation advisory.",
          price: "৳5,000/hr",
          featured: true,
        },
        {
          name: "Team Training & Workshops",
          desc: "Hands-on training in AI, cloud, DevOps, or web technologies for your team.",
          price: "৳20,000+",
        },
      ],
    },
    {
      icon: FiCommunity,
      title: "Online Community Building",
      description: "Engage and grow your community",
      services: [
        {
          name: "Online Competition",
          desc: "Technical skill based online event",
          price: "৳500/hr",
        },
        {
          name: "Online Webinar",
          desc: "Technical skill/career based online Webinar",
          price: "৳500/hr",
        },
        {
          name: "Online Monthly Quiz",
          desc: "Trending topic Quiz and prize money + certificate",
          price: "৳500/hr",
        },
        {
          name: "Talent Showcase",
          desc: "To show what he is best to win the gadget",
          price: "৳500/hr",
        },
        {
          name: "Research Article",
          desc: "Published article post and get reward",
          price: "৳500/hr",
        },
        {
          name: "Sale Products",
          desc: "Sale product to our community",
          price: "৳500/hr",
        },
      ],
    },
    {
      icon: FiCalendar,
      title: "Offline Events",
      description: "Real-world engagement and activities",
      services: [
        {
          name: "All Online Activities (Offline)",
          desc: "All online activities will applied offline",
          price: "৳500/hr",
        },
        {
          name: "Physical Counseling",
          desc: "One-on-one guidance and support",
          price: "৳500/hr",
        },
        {
          name: "Printing & Creativity",
          desc: "Creative printing solutions and workshops",
          price: "৳500/hr",
        },
        {
          name: "Tournament Sports",
          desc: "Organize and participate in sports events",
          price: "৳500/hr",
        },
        {
          name: "Visiting Schools for Workshop",
          desc: "Educational workshops at schools",
          price: "৳500/hr",
        },
        {
          name: "Visiting Footpath for Workshop",
          desc: "Community outreach workshops",
          price: "৳500/hr",
        },
      ],
    },
    {
      icon: FiMonitor,
      title: "Platform",
      description: "Comprehensive platform services",
      services: [
        {
          name: "Tutor Finding Place",
          desc: "Connect with qualified tutors",
          price: "৳500/hr",
        },
        {
          name: "Assignments Hiring",
          desc: "Get help with your assignments",
          price: "৳500/hr",
        },
        {
          name: "Gadgets Selling",
          desc: "Buy and sell tech gadgets",
          price: "৳500/hr",
        },
        {
          name: "Hiring Part Timer",
          desc: "Find part-time opportunities",
          price: "৳500/hr",
        },
        {
          name: "Posting Paid Task",
          desc: "Post and complete paid tasks",
          price: "৳500/hr",
        },
      ],
    },
    {
      icon: FiBriefcase,
      title: "Job Support",
      description: "Career advancement services",
      services: [
        {
          name: "Professional CV/Resume",
          desc: "Stand out with a professional resume",
          price: "৳500/hr",
          featured: true,
        },
        {
          name: "Interview Prep",
          desc: "Ace your next interview",
          price: "৳500/hr",
        },
        {
          name: "Applying Job (Auto)",
          desc: "Automated job application process",
          price: "৳500/hr",
        },
        {
          name: "Portfolio",
          desc: "Build an impressive portfolio",
          price: "৳500/hr",
        },
      ],
    },
    {
      icon: FiBook,
      title: "Courses",
      description: "Learn and grow with our courses",
      services: [
        {
          name: "Professional Certificates",
          desc: "Industry-recognized certifications",
          price: "৳500/hr",
          featured: true,
        },
        {
          name: "University Degrees",
          desc: "Accredited degree programs",
          price: "৳500/hr",
        },
        {
          name: "MOOCs",
          desc: "Massive Open Online Courses",
          price: "৳500/hr",
        },
        {
          name: "Skill-Based & Vocational Training",
          desc: "Practical skills for the workforce",
          price: "৳500/hr",
        },
        {
          name: "Self-Improvement",
          desc: "Personal development courses",
          price: "৳500/hr",
        },
      ],
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-(--background) overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 -right-40 w-[400px] h-[400px] bg-(--primary)/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
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

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative mb-8 lg:mb-10"
        >
          {/* Mobile - 2 Row Grid with Horizontal Scroll */}
          <div className="sm:hidden  overflow-x-auto scrollbar-hide">
            <div className="grid grid-flow-col grid-rows-2 gap-2 w-max min-w-max">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                const isActive = activeTab === index;
                return (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setExpandedCard(null);
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-1.5 px-2 py-2.5 rounded-(--radius-lg) text-xs font-medium transition-all border flex-shrink-0 whitespace-nowrap ${
                      isActive
                        ? "bg-(--primary) text-white border-(--primary) shadow-lg shadow-(--primary)/20"
                        : "bg-(--surface) text-(--text-muted) border-(--border)"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{category.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Desktop layout - wrap */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeTab === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setExpandedCard(null);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-(--radius-lg) text-sm font-medium transition-all border ${
                    isActive
                      ? "bg-(--primary) text-white border-(--primary) shadow-lg shadow-(--primary)/20"
                      : "bg-(--surface) text-(--text-muted) border-(--border) hover:text-(--text) hover:border-(--primary)/30"
                  }`}
                >
                  <Icon size={16} />
                  <span>{category.title}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-(--primary)/10 rounded-(--radius-lg) flex items-center justify-center">
                {(() => {
                  const Icon = serviceCategories[activeTab].icon;
                  return <Icon size={24} className="text-(--primary)" />;
                })()}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-(--text)">
                  {serviceCategories[activeTab].title}
                </h3>
                <p className="text-sm text-(--text-muted)">
                  {serviceCategories[activeTab].description}
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceCategories[activeTab].services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="group relative"
                >
                  <div className="h-full bg-(--surface) border border-(--border) rounded-(--radius-lg) p-5 hover:border-(--primary)/30 transition-all">
                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute -top-2 -right-2 px-2.5 py-0.5 bg-(--primary) text-white text-[10px] font-medium rounded-full">
                        Popular
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors pr-4">
                        {service.name}
                      </h4>
                      <button
                        onClick={() =>
                          setExpandedCard(
                            expandedCard === `${activeTab}-${index}`
                              ? null
                              : `${activeTab}-${index}`,
                          )
                        }
                        className="mt-1 p-1 rounded-(--radius-sm) hover:bg-(--surface-hover) transition-colors flex-shrink-0"
                      >
                        <motion.div
                          animate={{
                            rotate:
                              expandedCard === `${activeTab}-${index}`
                                ? 180
                                : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown
                            size={16}
                            className="text-(--text-muted)"
                          />
                        </motion.div>
                      </button>
                    </div>

                    <AnimatePresence>
                      {expandedCard === `${activeTab}-${index}` && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-(--text-muted) mb-3 leading-relaxed"
                        >
                          {service.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between pt-3 border-t border-(--border)">
                      <div>
                        <span className="text-lg font-bold text-(--primary)">
                          {service.price}
                        </span>
                        {service.price.includes("mo") && (
                          <span className="text-xs text-(--text-muted)">
                            /month
                          </span>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-xs font-medium text-(--primary) hover:text-(--primary-hover) transition-colors"
                      >
                        <span>Learn More</span>
                        <FiArrowRight size={12} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {serviceCategories[activeTab].services.length === 0 && (
              <div className="text-center py-16">
                <p className="text-(--text-muted)">
                  No services available in this category yet.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setActiveTab(0);
              setExpandedCard(null);
            }}
            className="group relative px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-white font-medium rounded-(--radius-xl) transition-all shadow-lg shadow-(--primary)/25 hover:shadow-(--primary)/40 flex items-center gap-3 mx-auto overflow-hidden"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Icon container */}
            <span className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <FiArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>

            {/* Text */}
            <span className="relative z-10 text-base">See All Services</span>

            {/* Decorative dots */}
            <span className="relative z-10 flex gap-1 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-white transition-colors" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
