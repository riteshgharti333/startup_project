"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  FiShield,
  FiArrowRight,
  FiPhone,
  FiExternalLink,
  FiSettings,
  FiInfo,
} from "react-icons/fi";
import { PageSEO } from "../components/PageSEO";

interface CookieSection {
  id: string;
  title: string;
  content: string;
}

const cookieSections: CookieSection[] = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    content: `Cookies are small text files stored on your device when you visit a website. They help websites function properly and improve user experience.`,
  },
  {
    id: "types-of-cookies",
    title: "2. Types of Cookies We Use",
    content: `Essential Cookies

These cookies are necessary for website functionality, security, and navigation.

Examples:
• Session management
• Security protection
• Form submission handling

Analytics Cookies

These cookies help us understand how visitors use our website.

Examples:
• Page views
• Traffic sources
• User interactions

Performance Cookies

These cookies improve website speed, functionality, and user experience.

Marketing Cookies

If enabled, these cookies help measure advertising performance and personalize marketing campaigns.`,
  },
  {
    id: "third-party-cookies",
    title: "3. Third-Party Cookies",
    content: `We may use trusted third-party services such as:

• Google Analytics
• Google Tag Manager
• Meta Pixel
• Microsoft Clarity
• Other analytics or advertising providers

These providers may place cookies according to their own privacy policies.`,
  },
  {
    id: "managing-cookies",
    title: "4. Managing Cookies",
    content: `You can control or disable cookies through your browser settings.

Please note that disabling certain cookies may affect website functionality.`,
  },
  {
    id: "cookie-consent",
    title: "5. Cookie Consent",
    content: `Where required by law, we will request your consent before placing non-essential cookies on your device.`,
  },
  {
    id: "updates",
    title: "6. Updates to This Policy",
    content: `We may update this Cookie Policy periodically. Any changes will be posted on this page.`,
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content: `Twipra Technologies

Email: contact@twipra.com
Phone: +880 1851072019
Address: Dhaka, Bangladesh`,
  },
];

const Cookie = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com";

  return (
    <>
      <PageSEO
        title="Cookie Policy | Twipra Technology"
        description="Learn how Twipra Technology uses cookies to enhance your browsing experience. Understand our cookie practices and how you can control your cookie preferences."
        keywords={[
          "cookie policy",
          "cookies",
          "privacy",
          "data protection",
          "GDPR",
          "cookie consent",
          "Twipra Technology cookies",
          "browser cookies",
        ]}
        canonical={`${baseUrl}/cookie-policy`}
        ogImage="/og-cookie.jpg"
        breadcrumbItems={[
          { name: "Home", url: `${baseUrl}/` },
          { name: "Cookie Policy", url: `${baseUrl}/cookie-policy` },
        ]}
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
                <FiInfo size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">Privacy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
                Cookie{" "}
                <span className="relative inline-block">
                  <span className="text-(--primary)">Policy</span>
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
                Effective Date: June 2024 · Learn how we use cookies to enhance
                your experience.
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
                {cookieSections.map((section, index) => (
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

        {/* Cookie Content */}
        <section ref={sectionRef} className="relative pb-20 lg:pb-28">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Introduction Section */}
              <motion.div
                id="introduction"
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
                  Cookie Policy
                </h2>
                <div className="text-sm sm:text-base text-(--text-muted) leading-relaxed space-y-3 whitespace-pre-line">
                  {`This Cookie Policy explains how Twipra Technologies uses cookies and similar technologies on our website.`}
                </div>
              </motion.div>

              {/* Cookie Sections */}
              {cookieSections.map((section, index) => (
                <motion.div
                  key={index}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (index + 1) * 0.03, duration: 0.4 }}
                  className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-5 sm:p-6 lg:p-8"
                >
                  <h2 className="text-lg sm:text-xl font-bold text-(--text) mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center text-sm font-bold text-(--primary) flex-shrink-0">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    {section.title}
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
                Have Questions About Cookies?
              </h2>
              <p className="text-sm text-(--text-muted) mb-6 max-w-md mx-auto">
                If you have any questions about our Cookie Policy or how we use
                cookies, please don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="mailto:contact@twipra.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20"
                >
                  <FiSettings size={14} />
                  Privacy Team
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
    </>
  );
};

export default Cookie;