"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiPlus,
  FiMinus,
  FiHelpCircle,
  FiMessageCircle,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How much does a website cost?",
      answer:
        "Project pricing depends on the scope, features, and complexity of your requirements. We provide transparent custom quotes tailored to your business goals and budget.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Most projects are completed within 2–8 weeks, depending on the size and requirements. A detailed timeline is shared before development begins.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes. We offer post-launch support, maintenance, and technical assistance to ensure your website or application runs smoothly.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can modernize your existing website, improve performance, enhance user experience, and optimize it for better conversions.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and mobile devices.",
    },
    {
      question: "Do you offer SEO services?",
      answer:
        "Yes. We implement technical SEO best practices and offer SEO optimization services to help improve your online visibility and search rankings.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We work with modern technologies such as React, Next.js, Node.js, MongoDB, WordPress, and cloud-based solutions depending on project requirements.",
    },
    {
      question: "How do we get started?",
      answer:
        "Simply contact us through our website or schedule a consultation. We'll discuss your goals, requirements, timeline, and provide a tailored proposal.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative pb-20 lg:pb-28">
      <div className="relative w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
            <FiHelpCircle size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
            Frequently Asked{" "}
            <span className="relative inline-block">
              <span className="text-(--primary)">Questions</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
              />
            </span>
          </h2>

          <p className="text-sm sm:text-base text-(--text-muted) max-w-xl mx-auto">
            Everything you need to know about our services and process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.06,
                ease: "easeOut",
              }}
              className={`bg-(--surface) border rounded-(--radius-xl) transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-(--primary)/30 shadow-lg"
                  : "border-(--border) hover:border-(--primary)/20"
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  {/* Question Number */}
                  <span
                    className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-(--radius-md) text-xs font-bold flex-shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? "bg-(--primary) text-white"
                        : "bg-(--background) text-(--text-muted) group-hover:bg-(--primary)/10 group-hover:text-(--primary)"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question Text */}
                  <span
                    className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                      openIndex === index
                        ? "text-(--primary)"
                        : "text-(--text) group-hover:text-(--text)"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* Toggle Icon */}
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-(--radius-md) flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? "bg-(--primary) text-white rotate-45"
                      : "bg-(--background) text-(--text-muted) group-hover:bg-(--primary)/10 group-hover:text-(--primary)"
                  }`}
                >
                  <FiPlus size={16} />
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      {/* Divider */}
                      <div className="h-px bg-(--border) mb-4" />

                      {/* Answer Text */}
                      <div className="flex gap-3 sm:gap-4">
                        {/* Answer indicator line */}
                        <div className="w-1 bg-(--primary)/20 rounded-full flex-shrink-0" />
                        <p className="text-sm text-(--text-muted) leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="mt-10 sm:mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-(--surface) border border-(--border) rounded-(--radius-xl)">
            <div className="flex items-center gap-2">
              <FiMessageCircle size={16} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">
                Still have questions?
              </span>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 flex items-center gap-2"
            >
              Contact Us <FiArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
