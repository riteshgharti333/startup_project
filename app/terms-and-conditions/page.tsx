"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  FiFileText,
  FiShield,
  FiArrowRight,
  FiPhone,
  FiExternalLink,
} from "react-icons/fi";
import { sections, serviceLinks } from "../data/data";

const Terms: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
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
              <FiShield size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">Legal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
              Terms &{" "}
              <span className="relative inline-block">
                <span className="text-(--primary)">Conditions</span>
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

            <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
              Last updated: June 2024 · Please read these terms carefully before
              using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="relative pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-6"
          >
            <h3 className="text-sm font-semibold text-(--text) mb-3">
              Quick Navigation
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {[
                { id: "services", title: "2. Services Offered" },
                ...sections.slice(1),
              ].map((section, index) => (
                <Link
                  key={index}
                  href={`#${section.id}`}
                  className="text-xs text-(--text-muted) hover:text-(--primary) transition-colors truncate"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section ref={sectionRef} className="relative pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Section 1 */}
            <motion.div
              id="acceptance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-6 lg:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-(--text) mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center text-sm font-bold text-(--primary) flex-shrink-0">
                  01
                </span>
                1. Acceptance of Terms
              </h2>
              <div className="text-sm sm:text-base text-(--text-muted) leading-relaxed space-y-3 whitespace-pre-line">
                {`By accessing or using any services provided by Twipra Technology ("Company," "we," "us," or "our"), you ("Client," "you," or "your") agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must not use our services.

These Terms constitute a legally binding agreement between you and Twipra Technology. By engaging our services, making a payment, or signing a proposal, you acknowledge that you have read, understood, and agree to be bound by these Terms.`}
              </div>
            </motion.div>

            {/* Section 2 - Services Offered with Links */}
            <motion.div
              id="services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.03, duration: 0.4 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-6 lg:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-(--text) mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center text-sm font-bold text-(--primary) flex-shrink-0">
                  02
                </span>
                2. Services Offered
              </h2>
              <div className="text-sm sm:text-base text-(--text-muted) leading-relaxed space-y-4">
                <p>
                  Twipra Technology provides professional digital services
                  including but not limited to:
                </p>

                {/* Services Grid with Links */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {serviceLinks.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex items-center gap-2 p-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) hover:border-(--primary)/30 transition-all group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-(--primary) group-hover:scale-125 transition-transform flex-shrink-0" />
                      <span className="text-sm text-(--text-muted) group-hover:text-(--primary) transition-colors flex-1">
                        {service.label}
                      </span>
                      <FiExternalLink
                        size={12}
                        className="text-(--text-muted) group-hover:text-(--primary) transition-colors flex-shrink-0"
                      />
                    </Link>
                  ))}
                </div>

                <p>
                  All services are provided according to the scope defined in
                  individual project proposals, agreements, or statements of
                  work signed by both parties.
                </p>
              </div>
            </motion.div>

            {/* Remaining Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (index + 2) * 0.03, duration: 0.4 }}
                className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-6 lg:p-8"
              >
                <h2 className="text-lg sm:text-xl font-bold text-(--text) mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center text-sm font-bold text-(--primary) flex-shrink-0">
                    {String(index + 3).padStart(2, "0")}
                  </span>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </h2>
                <div className="text-sm sm:text-base text-(--text-muted) leading-relaxed space-y-3 whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
              Have Questions?
            </h2>
            <p className="text-sm text-(--text-muted) mb-6 max-w-md mx-auto">
              If you have any questions about these Terms & Conditions, please
              reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="mailto:legal@twipra.tech"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
              >
                <FiFileText size={14} />
                Contact Legal Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--background) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all"
              >
                <FiPhone size={14} className="text-(--primary)" />
                Contact Us
                <FiArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
