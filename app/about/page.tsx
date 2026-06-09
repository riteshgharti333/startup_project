"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiPhone,
  FiStar,
  FiGlobe,
  FiCpu,
  FiSmartphone,
  FiCloud,
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiEye,
  FiHeart,
  FiCode,
  FiCheck,
} from "react-icons/fi";
import Choose from "../components/Choose";
import Stats from "../components/Stats";
import Team from "../components/Team";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const coreServices = [
    {
      icon: FiGlobe,
      title: "Web Development",
      desc: "Custom websites and web applications built for performance and scalability.",
    },
    {
      icon: FiCpu,
      title: "AI Solutions",
      desc: "AI-powered chatbots, automation, and intelligent business solutions.",
    },
    {
      icon: FiSmartphone,
      title: "Mobile App Development",
      desc: "Native and cross-platform apps for Android and iOS.",
    },
    {
      icon: FiCloud,
      title: "Cloud & Infrastructure",
      desc: "Reliable hosting, deployment, and server management.",
    },
    {
      icon: FiTrendingUp,
      title: "Digital Marketing",
      desc: "SEO, social media, and paid advertising strategies.",
    },
    {
      icon: FiUsers,
      title: "Consulting & Training",
      desc: "Expert technology guidance and hands-on workshops.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "We learn about your business, goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Planning",
      desc: "We create a detailed roadmap, architecture plan, and project timeline.",
    },
    {
      step: "03",
      title: "Design",
      desc: "Our designers create beautiful, intuitive interfaces and user experiences.",
    },
    {
      step: "04",
      title: "Development",
      desc: "We build your solution using modern technologies and best practices.",
    },
    {
      step: "05",
      title: "Testing",
      desc: "Rigorous quality assurance, security checks, and performance optimization.",
    },
    {
      step: "06",
      title: "Launch",
      desc: "Smooth deployment to production with monitoring and backup systems.",
    },
    {
      step: "07",
      title: "Support",
      desc: "Ongoing maintenance, updates, and technical support for your peace of mind.",
    },
  ];

  return (
    <main className="relative">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 ">
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
              <FiStar size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">About Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
              We Build{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">Digital Excellence</span>
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
              A passionate team of engineers, designers, and strategists
              committed to building technology that creates real value for
              businesses worldwide.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                Get in Touch
                <FiArrowRight size={16} />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
              >
                <FiPhone size={14} className="text-(--primary)" />
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story + Our Vision */}
      <section className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center">
                  <FiHeart size={20} className="text-(--primary)" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-(--text)">
                  Our Story
                </h2>
              </div>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed mb-4">
                NEXORA Studio was founded with a simple mission: to help
                businesses succeed online through exceptional digital solutions.
                What started as a small team of passionate developers has grown
                into a full-service digital agency serving clients across 11+
                countries.
              </p>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                We believe that every business deserves access to world-class
                technology. Whether you're a startup launching your first
                product or an established company modernizing your digital
                presence, we're here to help you every step of the way.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/10 rounded-(--radius-md) flex items-center justify-center">
                  <FiEye size={20} className="text-purple-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-(--text)">
                  Our Vision
                </h2>
              </div>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed mb-4">
                We envision a world where technology empowers every business to
                reach its full potential. Our goal is to bridge the gap between
                ambitious ideas and technical execution.
              </p>
              <div className="space-y-3 mt-4">
                {[
                  "Deliver measurable results for every client",
                  "Stay at the forefront of technology innovation",
                  "Build long-term partnerships based on trust",
                  "Make premium digital solutions accessible",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck size={10} className="text-green-400" />
                    </div>
                    <span className="text-sm text-(--text-muted)">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Core Services */}
      <section ref={sectionRef} className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                What We Do
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
              Core{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">Services</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                />
              </span>
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="group relative bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5 hover:border-(--primary)/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-(--primary)" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Import Component */}
      <Choose />

      {/* Stats - Import Component */}
      <Stats />

      {/* Our Process */}
      <section className="relative pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                Our Process
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
              How We{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">Work</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                />
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-(--border)" />

            <div className="space-y-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="relative pl-14 sm:pl-16"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-(--surface) border-2 border-(--border) flex items-center justify-center text-sm font-bold text-(--text-muted) group-hover:border-(--primary) group-hover:text-(--primary) transition-all z-10">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5 hover:border-(--primary)/20 transition-all">
                    <h3 className="text-sm sm:text-base font-semibold text-(--text) mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-(--text-muted)">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow Down (except last) */}
                  {index < process.length - 1 && (
                    <div className="flex justify-center mt-2">
                      <span className="text-(--border) text-lg">↓</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team - Import Component */}
      <Team />
    </main>
  );
};

export default About;
