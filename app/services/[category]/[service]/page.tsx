"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiPhone,
  FiCheck,
  FiStar,
  FiClock,
  FiArrowLeft,
} from "react-icons/fi";

interface ServiceData {
  slug: string;
  name: string;
  category: string;
  startingPrice: string;
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  overview: {
    title: string;
    content: string;
  };
  solutions: {
    title: string;
    items: { title: string; description: string }[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  features: {
    title: string;
    items: { title: string; description: string }[];
  };
  whyChooseUs: {
    title: string;
    items: string[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  relatedServices: string[];
}

const OneService: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Example data - replace with actual data fetching
  const service: ServiceData = {
    slug: "full-stack-web-application-development",
    name: "Full-Stack Web Application Development",
    category: "web-development",
    startingPrice: "৳35,000",
    hero: {
      title: "Full-Stack Web Application Development",
      description:
        "Build scalable, secure, and high-performance web applications tailored to your business needs.",
      cta: "Get Free Consultation",
    },
    overview: {
      title: "What Is Full-Stack Web Development?",
      content:
        "Full-stack web development involves building both the client-facing frontend and server-side backend of an application. A complete solution includes user interfaces, APIs, databases, authentication systems, and deployment infrastructure. Businesses use full-stack applications to automate operations, improve customer experiences, and streamline workflows.",
    },
    solutions: {
      title: "What Can We Build?",
      items: [
        {
          title: "CRM Systems",
          description:
            "Manage customers, leads, sales pipelines, and business relationships.",
        },
        {
          title: "Learning Management Systems",
          description:
            "Online courses, quizzes, certificates, and student management.",
        },
        {
          title: "E-Commerce Platforms",
          description:
            "Products, payments, inventory management, and order processing.",
        },
        {
          title: "Booking Platforms",
          description: "Appointments, reservations, and scheduling systems.",
        },
        {
          title: "SaaS Products",
          description:
            "Subscription-based software products and customer portals.",
        },
        {
          title: "Admin Portals",
          description:
            "Business dashboards, analytics, and operational management.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Discovery",
          description: "Understand requirements, goals, and business needs.",
        },
        {
          title: "Planning",
          description: "Create project architecture and development roadmap.",
        },
        {
          title: "Design",
          description: "Develop user-friendly interfaces and workflows.",
        },
        {
          title: "Development",
          description: "Build frontend, backend, database, and integrations.",
        },
        {
          title: "Testing",
          description: "Quality assurance, security checks, and optimization.",
        },
        {
          title: "Deployment",
          description: "Launch the application and ensure smooth operation.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Secure Authentication",
          description:
            "Protect users and business data with secure access controls.",
        },
        {
          title: "Scalable Architecture",
          description: "Built to support future growth and increased traffic.",
        },
        {
          title: "API Integration",
          description:
            "Connect with payment gateways, CRMs, and third-party services.",
        },
        {
          title: "Mobile Responsive",
          description: "Optimized for desktop, tablet, and mobile devices.",
        },
        {
          title: "Performance Optimized",
          description: "Fast loading times and smooth user experience.",
        },
        {
          title: "SEO Friendly",
          description: "Structured to support search engine visibility.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Business-focused solutions",
        "Scalable architecture",
        "Transparent communication",
        "Post-launch support",
        "Affordable pricing",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does development take?",
          answer:
            "Most projects take between 2 and 12 weeks depending on complexity and requirements.",
        },
        {
          question: "Can you redesign an existing application?",
          answer:
            "Yes, we can modernize existing applications and improve performance.",
        },
        {
          question: "Do you provide hosting?",
          answer: "Yes, deployment and hosting assistance are available.",
        },
        {
          question: "Do you provide maintenance?",
          answer: "Yes, ongoing support and maintenance plans are available.",
        },
      ],
    },
    relatedServices: [
      "API Development & Integration",
      "Admin Dashboard Development",
      "E-Commerce Development",
      "Website Maintenance & Support",
    ],
  };

  const getCategoryName = (slug: string): string => {
    const names: Record<string, string> = {
      "web-development": "Web Development",
      "ai-solutions": "AI Solutions",
      "mobile-app-development": "Mobile App Development",
      "cloud-infrastructure": "Cloud & Infrastructure",
      "digital-marketing": "Digital Marketing",
      "consulting-training": "Consulting & Training",
    };
    return names[slug] || slug;
  };

  return (
    <main className="relative">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20 ">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-(--text-muted) mb-6">
              <a
                href="/services"
                className="hover:text-(--primary) transition-colors"
              >
                Services
              </a>
              <span>/</span>
              <a
                href={`/services/${service.category}`}
                className="hover:text-(--primary) transition-colors"
              >
                {getCategoryName(service.category)}
              </a>
              <span>/</span>
              <span className="text-(--text) truncate">{service.name}</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
              <FiStar size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">
                {getCategoryName(service.category)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4 leading-tight">
              {service.hero.title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-(--text-muted) mb-6 leading-relaxed">
              {service.hero.description}
            </p>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-(--primary)">
                  {service.startingPrice}
                </div>
                <p className="text-xs text-(--text-muted) mt-1">
                  Starting price — varies based on complexity
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
                >
                  <FiPhone size={14} />
                  {service.hero.cta}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
                >
                  Book a Call
                  <FiArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-(--text) mb-4">
              {service.overview.title}
            </h2>
            <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
              {service.overview.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={sectionRef} className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              {service.solutions.title}
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {service.solutions.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5 hover:border-(--primary)/30 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-base font-semibold text-(--text) mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              {service.process.title}
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          <div className="space-y-4">
            {service.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex gap-4 p-4 bg-(--surface) border border-(--border) rounded-(--radius-lg) hover:border-(--primary)/20 transition-all group"
              >
                <div className="w-10 h-10 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center flex-shrink-0 text-sm font-bold text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition-all">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-(--text) mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-(--text-muted)">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Why Choose Us */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-(--text) mb-4">
                {service.features.title}
              </h2>
              <div className="space-y-3">
                {service.features.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck size={10} className="text-green-400" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-(--text)">
                        {item.title}
                      </span>
                      <p className="text-xs text-(--text-muted) mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-(--text) mb-4">
                {service.whyChooseUs.title}
              </h2>
              <div className="space-y-2">
                {service.whyChooseUs.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 bg-(--surface) border border-(--border) rounded-(--radius-md)"
                  >
                    <FiCheck
                      size={14}
                      className="text-(--primary) flex-shrink-0"
                    />
                    <span className="text-sm text-(--text-muted)">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              Related Services
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          <div className="flex flex-wrap gap-2">
            {service.relatedServices.map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-lg) text-sm text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
              {service.faq.title}
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          <div className="space-y-3">
            {service.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5"
              >
                <h3 className="text-sm sm:text-base font-semibold text-(--text) mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-(--text-muted) leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-sm text-(--text-muted) mb-6 max-w-md mx-auto">
              Let's discuss your requirements and build a solution that fits
              your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                <FiPhone size={14} />
                {service.hero.cta}
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

export default OneService;
