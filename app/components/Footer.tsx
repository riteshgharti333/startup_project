"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiCommand,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiCalendar,
  FiMapPin,
  FiPhoneCall,
  FiClock,
} from "react-icons/fi";

import {
  FiCpu,
  FiCode,
  FiCloud,
  FiTrendingUp,
  FiUsers,
  FiUsers as FiCommunity,
  FiMonitor,
  FiBriefcase,
  FiBook,
  FiChevronDown,
  FiCheck,
  FiStar,
} from "react-icons/fi";

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const socialLinks = [
    { icon: FiTwitter, href: "#" },
    { icon: FiLinkedin, href: "#" },
    { icon: FiInstagram, href: "#" },
    { icon: FiGithub, href: "#" },
  ];

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
    <footer
      ref={sectionRef}
      className="relative"
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--primary)/40 to-transparent" />

     

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        {/* Top Section - Logo + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 sm:mb-20"
        >
          {/* Logo + Description */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-(--primary) to-purple-600 rounded-(--radius-md) flex items-center justify-center shadow-lg shadow-(--primary)/25">
                <FiCommand size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-(--text)">
                NEXORA<span className="text-(--primary)">Studio</span>
              </span>
            </div>
            <p className="text-sm text-(--text-muted) max-w-md">
              Building high-converting websites and digital solutions for
              startups and businesses worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
            >
              <FiCalendar size={15} />
              <span>Schedule a Call</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all group"
            >
              <span>Contact Us</span>
              <FiArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-(--border) mb-12 sm:mb-16" />

        {/* Bottom Section - 3 Columns */}
        {/* Bottom Section - 4 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          {/* Column 1 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs text-(--text-muted) uppercase tracking-wider mb-5">
              Get in Touch
            </p>
            <div className="space-y-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-sm text-(--text-muted) hover:text-(--primary) transition-colors group"
              >
                <FiPhoneCall
                  size={15}
                  className="text-(--primary) flex-shrink-0"
                />
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:hello@nexora.studio"
                className="flex items-center gap-3 text-sm text-(--text-muted) hover:text-(--primary) transition-colors group"
              >
                <FiMail size={15} className="text-(--primary) flex-shrink-0" />
                <span>hello@nexora.studio</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                <FiMapPin
                  size={15}
                  className="text-(--primary) flex-shrink-0"
                />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                <FiClock size={15} className="text-(--primary) flex-shrink-0" />
                <span>Mon-Fri: 9AM - 6PM</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xs text-(--text-muted) uppercase tracking-wider mb-5">
              Quick Links
            </p>
            <div className="space-y-3">
              {["Services", "Work", "About", "Pricing", "Blog", "Contact"].map(
                (link, i) => (
                  <a
                    key={i}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-(--text-muted) hover:text-(--primary) transition-colors"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xs text-(--text-muted) uppercase tracking-wider mb-5">
              Services
            </p>
            <div className="space-y-3">
              {serviceCategories.map((category, i) => (
                <a
                  key={i}
                  href="#services"
                  className="block text-sm text-(--text-muted) hover:text-(--primary) transition-colors truncate"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 4 - Social + Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xs text-(--text-muted) uppercase tracking-wider mb-5">
              Follow Us
            </p>
            <div className="flex gap-2 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/40 transition-all"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>

            <p className="text-xs text-(--text-muted) leading-relaxed">
              Available for new projects.
              <br />
              Let's create something great together.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-2 mt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-(--primary) hover:bg-(--primary-hover) text-white text-xs font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                <FiCalendar size={13} />
                <span>Book a Call</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-(--border)">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-(--text-muted)">
              © {new Date().getFullYear()} NEXORA Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-(--text-muted)">
              <a href="#" className="hover:text-(--primary) transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-(--primary) transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
