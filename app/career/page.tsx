"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import {
  FiUsers,
  FiTarget,
  FiAward,
  FiHeart,
  FiTrendingUp,
  FiArrowRight,
  FiMail,
  FiSend,
  FiClock,
  FiBriefcase,
} from "react-icons/fi";
import { PageSEO } from "../components/PageSEO";
import CareerForm from "../components/CareerForm";

const Career: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  // Benefits data
  const benefits = [
    {
      icon: <FiTrendingUp size={20} />,
      title: "Growth & Learning",
      description:
        "Continuous learning opportunities, workshops, and a ₹50,000 annual learning budget.",
    },
    {
      icon: <FiHeart size={20} />,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance for you and your family, plus mental wellness support.",
    },
    {
      icon: <FiClock size={20} />,
      title: "Flexible Hours",
      description:
        "Work when you're most productive with flexible timing and remote-first culture.",
    },
    {
      icon: <FiAward size={20} />,
      title: "Performance Bonuses",
      description: "Quarterly performance bonuses and annual profit sharing.",
    },
    {
      icon: <FiUsers size={20} />,
      title: "Team Retreats",
      description: "Annual company retreats and quarterly team offsites.",
    },
    {
      icon: <FiBriefcase size={20} />,
      title: "Equipment Budget",
      description: "₹75,000 equipment budget for your ideal setup.",
    },
  ];

  // Values data
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we deliver.",
    },
    {
      title: "Ownership",
      description: "Take initiative and responsibility for outcomes.",
    },
    {
      title: "Collaboration",
      description: "Great things happen when we work together.",
    },
    {
      title: "Integrity",
      description: "Honest, transparent, and ethical in all we do.",
    },
  ];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com";

  // Handle form success
  const handleFormSuccess = () => {
    // Scroll to top of form section
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageSEO
        title="Career | Join Our Team - Twipra Technology"
        description="Build your career with Twipra Technology. We're hiring developers, designers, project managers, and more. Join a team of innovators building cutting-edge digital solutions."
        keywords={[
          "career at Twipra Technology",
          "tech jobs Bangladesh",
          "web developer job",
          "AI engineer job",
          "frontend developer hiring",
          "backend developer career",
          "UI UX designer job",
          "IT company careers",
          "software development jobs",
        ]}
        canonical={`${baseUrl}/career`}
        ogImage="/og-career.jpg"
        breadcrumbItems={[
          { name: "Home", url: `${baseUrl}/` },
          { name: "Career", url: `${baseUrl}/career` },
        ]}
      />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1e1e2e",
            color: "#fff",
            border: "1px solid #313244",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <main className="relative">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
                <FiUsers size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">
                  Join Our Team
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
                Build Your{" "}
                <span className="relative inline-block">
                  <span className="text-(--primary)">Career</span>
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
                </span>{" "}
                With Us
              </h1>

              <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
                Join a team of passionate innovators building cutting-edge
                digital solutions. We're looking for talented individuals who
                want to make an impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="relative pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-3">
                Why Join Twipra Technology?
              </h2>
              <p className="text-(--text-muted) max-w-2xl mx-auto">
                We believe in creating an environment where you can thrive both
                personally and professionally.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 hover:border-(--primary)/30 transition-all"
                >
                  <div className="w-10 h-10 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center text-(--primary) mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-(--text) mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-(--text-muted) leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 sm:p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-3">
                  Our Core Values
                </h2>
                <p className="text-(--text-muted) max-w-2xl mx-auto">
                  The principles that guide everything we do.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-(--primary)/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FiTarget size={20} className="text-(--primary)" />
                    </div>
                    <h3 className="text-base font-semibold text-(--text) mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs text-(--text-muted)">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hiring Form Section - Using the new CareerForm component */}
        <section ref={formRef} className="relative pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <CareerForm onSuccess={handleFormSuccess} />
          </div>
        </section>

        {/* Bottom CTA - Contact Section */}
        <section className="relative pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-8 sm:p-10 text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-2">
                Don't See the Right Role?
              </h2>
              <p className="text-sm text-(--text-muted) mb-6 max-w-md mx-auto">
                We're always looking for talented people. Send us your resume
                and we'll reach out when something matches.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="mailto:careers@twipra.tech"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
                >
                  <FiMail size={14} />
                  careers@twipra.tech
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--background) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
                >
                  <FiUsers size={14} className="text-(--primary)" />
                  Contact HR Team
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Career;