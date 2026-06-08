"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiStar,
  FiMessageCircle,
  FiCheck,
  FiUser,
  FiBriefcase,
  FiDollarSign,
  FiFileText,
  FiPhoneCall,
} from "react-icons/fi";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FiPhoneCall,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: FiMail,
      label: "Email Us",
      value: "hello@nexora.studio",
      href: "mailto:hello@nexora.studio",
    },
    {
      icon: FiMapPin,
      label: "Visit Us",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
    {
      icon: FiClock,
      label: "Working Hours",
      value: "Mon-Fri: 9AM - 6PM",
      href: "#",
    },
  ];

  const services = [
    "Web Development",
    "AI Solutions",
    "Mobile App Development",
    "Cloud & Infrastructure",
    "Digital Marketing",
    "Consulting & Training",
  ];

  const budgets = [
    "Under ৳10,000",
    "৳10,000 - ৳25,000",
    "৳25,000 - ৳50,000",
    "৳50,000 - ৳1,00,000",
    "৳1,00,000+",
    "Not Sure Yet",
  ];

  return (
    <main className="relative">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
              <FiMessageCircle size={14} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted)">Get in Touch</span>
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
              Have a project in mind? Fill out the form below and we'll get back
              to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRef} className="relative pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
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

              {/* Quick Response Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-(--radius-lg) text-center"
              >
                <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                  <FiCheck size={14} />
                  <span className="font-medium">We reply within 24 hours</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 sm:p-8 lg:p-10 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-(--text) mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-(--text-muted) mb-6">
                  Fill out the form and we'll get back to you as soon as
                  possible.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheck size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-(--text) mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-(--text-muted)">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Full Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-(--text-muted) mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FiUser
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                          />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-(--text-muted) mb-1.5">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FiMail
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-(--text-muted) mb-1.5">
                          Phone Number
                        </label>
                        <div className="relative">
                          <FiPhone
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                          />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-(--text-muted) mb-1.5">
                          Company Name
                        </label>
                        <div className="relative">
                          <FiBriefcase
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                          />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Service + Budget */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-(--text-muted) mb-1.5">
                          Service Interested In{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FiStar
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                          />
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) focus:outline-none focus:border-(--primary)/50 transition-colors appearance-none cursor-pointer"
                            required
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            {services.map((service, i) => (
                              <option key={i} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                            >
                              <path
                                d="M1 1.5L6 6.5L11 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                className="text-(--text-muted)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-(--text-muted) mb-1.5">
                          Project Budget
                        </label>
                        <div className="relative">
                          <FiDollarSign
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                          />
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) focus:outline-none focus:border-(--primary)/50 transition-colors appearance-none cursor-pointer"
                          >
                            <option value="" disabled>
                              Select budget range
                            </option>
                            {budgets.map((budget, i) => (
                              <option key={i} value={budget}>
                                {budget}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                            >
                              <path
                                d="M1 1.5L6 6.5L11 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                className="text-(--text-muted)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Project Details */}
                    <div>
                      <label className="block text-xs text-(--text-muted) mb-1.5">
                        Project Details
                      </label>
                      <div className="relative">
                        <FiFileText
                          size={14}
                          className="absolute left-3 top-3 text-(--text-muted)"
                        />
                        <textarea
                          name="details"
                          value={formData.details}
                          onChange={handleChange}
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          rows={5}
                          className="w-full pl-10 pr-4 py-2.5 bg-(--background) border border-(--border) rounded-(--radius-md) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary)/50 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 hover:shadow-(--primary)/40 flex items-center justify-center gap-2 group"
                    >
                      <span>Send Message</span>
                      <FiSend
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
