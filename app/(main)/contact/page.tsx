"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import { PageSEO } from "../../components/PageSEO";
import { contactInfo, socialLinks } from "../../data/links";
import ContactForm from "@/app/components/ContactForm";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com";

  return (
    <>
      <PageSEO
        title="Contact Us | Get in Touch with Twipra Technology"
        description="Have a project in mind? Contact Twipra Technology for web development, AI solutions, mobile apps, and digital marketing services. We'll get back to you within 24 hours."
        keywords={[
          "contact Twipra Technology",
          "web development company Bangladesh",
          "get in touch",
          "hire developers Bangladesh",
          "AI services contact",
          "mobile app development quote",
        ]}
        canonical={`${baseUrl}/contact`}
        ogImage="/og-contact.jpg"
        breadcrumbItems={[
          { name: "Home", url: `${baseUrl}/` },
          { name: "Contact", url: `${baseUrl}/contact` },
        ]}
      />

      <main className="relative">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
                <FiMessageCircle size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
                Let's{" "}
                <span className="relative inline-block">
                  <span className="text-(--primary)">Talk</span>
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

              <p className="text-base sm:text-lg text-(--text-muted) max-w-2xl mx-auto">
                Have a project in mind? Fill out the form below and we'll get
                back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={sectionRef} className="relative pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left - Contact Info Cards */}
              <div className="lg:col-span-1 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl font-bold text-(--text) mb-4">
                    Contact Info
                  </h2>
                  <p className="text-sm text-(--text-muted) mb-6">
                    Prefer to reach out directly? Here's how you can contact us.
                  </p>
                </motion.div>

                <div className="space-y-3">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.1 + index * 0.08,
                          duration: 0.4,
                        }}
                        className="flex items-center gap-3 p-4 bg-(--surface) border border-(--border) rounded-(--radius-lg) hover:border-(--primary)/30 transition-all group"
                      >
                        <div className="w-10 h-10 bg-(--primary)/10 rounded-(--radius-md) flex items-center justify-center flex-shrink-0 group-hover:bg-(--primary)/20 transition-colors">
                          <Icon size={18} className="text-(--primary)" />
                        </div>
                        <div>
                          <p className="text-xs text-(--text-muted)">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-(--text) group-hover:text-(--primary) transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Media Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-6 p-4 bg-(--surface) border border-(--border) rounded-(--radius-lg)"
                >
                  <h3 className="text-sm font-semibold text-(--text) mb-3">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const SocialIcon = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.5 + index * 0.05,
                            duration: 0.3,
                          }}
                          className={`w-10 h-10 bg-(--background) border border-(--border) rounded-(--radius-md) flex items-center justify-center text-(--text-muted) transition-all duration-300 hover:scale-110 hover:border-transparent ${social.color}`}
                          aria-label={social.label}
                        >
                          <SocialIcon size={16} />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-4 sm:p-8 lg:p-10 shadow-xl">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
