"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiStar,
  FiPhone,
  FiGlobe,
  FiCpu,
  FiSmartphone,
  FiCloud,
  FiTrendingUp,
  FiUsers,
  FiCode,
} from "react-icons/fi";

interface ServiceItem {
  name: string;
  description: string;
  startingPrice: string;
  featured?: boolean;
}

interface ServiceCategory {
  title: string;
  description: string;
  services: ServiceItem[];
}

const Service: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const serviceCategories: ServiceCategory[] = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built for performance and scalability.",
      services: [
        {
          name: "Business Website Development",
          description:
            "Professional websites for companies, startups, schools, and organizations.",
          startingPrice: "৳15,000",
        },
        {
          name: "Landing Page Development",
          description:
            "High-converting landing pages for marketing campaigns and lead generation.",
          startingPrice: "৳8,000",
        },
        {
          name: "Full-Stack Web Application Development",
          description:
            "Custom web applications with frontend, backend, database, and APIs.",
          startingPrice: "৳35,000",
          featured: true,
        },
        {
          name: "E-Commerce Development",
          description:
            "Online stores with product management, payments, and order tracking.",
          startingPrice: "৳25,000",
        },
        {
          name: "Admin Dashboard Development",
          description:
            "Custom dashboards, analytics panels, and management systems.",
          startingPrice: "৳20,000",
        },
        {
          name: "CMS & Blog Development",
          description: "Content management systems and blog platforms.",
          startingPrice: "৳15,000",
        },
        {
          name: "Website Maintenance & Support",
          description: "Bug fixes, updates, monitoring, and technical support.",
          startingPrice: "৳3,000/month",
        },
        {
          name: "Website Redesign & Modernization",
          description:
            "Transform outdated websites into modern, responsive experiences.",
          startingPrice: "৳12,000",
        },
        {
          name: "API Development & Integration",
          description:
            "Payment gateways, third-party APIs, and custom backend integrations.",
          startingPrice: "৳10,000",
        },
      ],
    },
    {
      title: "AI Solutions",
      description:
        "Practical AI-powered solutions for business automation and productivity.",
      services: [
        {
          name: "AI Chatbot Development",
          description: "GPT-powered customer support, sales, and FAQ chatbots.",
          startingPrice: "৳15,000",
          featured: true,
        },
        {
          name: "AI Knowledge Base Assistant",
          description:
            "AI assistants trained on company documents, PDFs, and knowledge bases.",
          startingPrice: "৳20,000",
        },
        {
          name: "AI Workflow Automation",
          description: "Automate repetitive business tasks using AI.",
          startingPrice: "৳18,000",
        },
        {
          name: "Custom AI Integration",
          description:
            "Integrate OpenAI, Gemini, or Claude into existing applications.",
          startingPrice: "৳12,000",
        },
      ],
    },
    {
      title: "Mobile App Development",
      description: "Modern mobile applications for Android and iOS platforms.",
      services: [
        {
          name: "Android App Development",
          description:
            "Custom Android applications tailored to business needs.",
          startingPrice: "৳30,000",
        },
        {
          name: "iOS App Development",
          description: "Professional iPhone and iPad applications.",
          startingPrice: "৳40,000",
        },
        {
          name: "Mobile App Maintenance & Support",
          description: "Updates, bug fixes, and performance improvements.",
          startingPrice: "৳5,000/month",
        },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Reliable hosting, deployment, and server management solutions.",
      services: [
        {
          name: "Cloud & VPS Setup",
          description: "Configure cloud servers and VPS environments.",
          startingPrice: "৳5,000",
        },
        {
          name: "Server Deployment & Configuration",
          description:
            "Deploy and configure applications on production servers.",
          startingPrice: "৳8,000",
        },
        {
          name: "Deployment Automation (CI/CD)",
          description:
            "Automated deployments using GitHub Actions and modern workflows.",
          startingPrice: "৳12,000",
        },
        {
          name: "Website & Application Hosting",
          description: "Managed hosting setup for websites and applications.",
          startingPrice: "৳3,000/month",
        },
        {
          name: "Domain, DNS & SSL Configuration",
          description: "Domain setup, DNS management, and SSL security.",
          startingPrice: "৳2,000",
        },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Strategies to increase visibility, traffic, and conversions.",
      services: [
        {
          name: "Search Engine Optimization (SEO)",
          description: "Technical and content SEO to improve search rankings.",
          startingPrice: "৳8,000/month",
          featured: true,
        },
        {
          name: "Social Media Management",
          description: "Content planning, publishing, and audience engagement.",
          startingPrice: "৳8,000/month",
        },
        {
          name: "Google Ads Management",
          description: "Google Ads campaign setup and optimization.",
          startingPrice: "৳10,000/month",
        },
        {
          name: "Meta Ads Management",
          description: "Facebook and Instagram advertising campaigns.",
          startingPrice: "৳10,000/month",
        },
        {
          name: "Content Marketing",
          description: "Content creation focused on traffic and conversions.",
          startingPrice: "৳6,000/month",
        },
      ],
    },
    {
      title: "Consulting & Training",
      description: "Professional guidance and technical learning programs.",
      services: [
        {
          name: "Technology Consulting",
          description:
            "Advice on technology choices, architecture, and digital transformation.",
          startingPrice: "৳2,000/hour",
        },
        {
          name: "Technical Training & Workshops",
          description:
            "Hands-on workshops for web development, AI, cloud, and software engineering.",
          startingPrice: "৳10,000/session",
        },
      ],
    },
  ];

  const getCategoryIcon = (title: string) => {
    const icons: Record<
      string,
      React.ComponentType<{ size?: number; className?: string }>
    > = {
      "Web Development": FiGlobe,
      "AI Solutions": FiCpu,
      "Mobile App Development": FiSmartphone,
      "Cloud & Infrastructure": FiCloud,
      "Digital Marketing": FiTrendingUp,
      "Consulting & Training": FiUsers,
    };
    return icons[title] || FiCode;
  };

  return (
    <main className="relative">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
      

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
              <FiStar size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
              Solutions That{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">Drive Growth</span>
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
              From custom websites to AI-powered solutions — we deliver
              everything you need to succeed online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                View All Services
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

      {/* Services List - Card Layout */}
      <section
        id="services-list"
        ref={sectionRef}
        className="relative pb-20 lg:pb-28"
      >
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center gap-3 my-14">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              What We Offer
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          {/* Categories */}
          <div className="space-y-16 sm:space-y-20">
            {serviceCategories.map((category, catIndex) => {
              const CategoryIcon = getCategoryIcon(category.title);
              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-(--primary)/10 rounded-(--radius-lg) flex items-center justify-center flex-shrink-0">
                      <CategoryIcon size={22} className="text-(--primary)" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-(--text)">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-(--text-muted) mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

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
                          <h3 className="text-sm sm:text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors mb-2 pr-6">
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
                            href="#contact"
                            className="inline-flex items-center gap-1 text-xs font-medium text-(--primary) hover:text-(--primary-hover) transition-colors group/link"
                          >
                            <span>Get Started</span>
                            <FiArrowRight
                              size={12}
                              className="group-hover/link:translate-x-0.5 transition-transform"
                            />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-8 sm:p-10 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-2">
              Need a Custom Solution?
            </h2>
            <p className="text-sm text-(--text-muted) mb-6 max-w-md mx-auto">
              Let's discuss your project requirements and create a tailored plan
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                <FiPhone size={14} />
                Schedule a Call
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--background) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
              >
                Contact Us
                <FiArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Service;
