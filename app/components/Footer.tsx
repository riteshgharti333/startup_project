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

import { FiCreditCard } from "react-icons/fi";

import Link from "next/link";
import { mainServices, footerLinks } from "../data/data";
import { FiShield, FiThumbsUp, FiRotateCcw } from "react-icons/fi";
import { paymentIconList } from "@/public/payment-icon/payment";
import logo from "../../public/new-logo.png";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { socialData, socialLinks } from "../data/links";

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <footer ref={sectionRef} className="relative">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--primary)/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        {/* Top Section - Logo + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-20"
        >
          {/* Logo */}
          <Link href="/" className="inline-block group">
            <motion.div
              className="relative inline-flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-(--primary) to-purple-600 rounded-(--radius-xl) blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

              <div className="relative w-full h-20  rounded-(--radius-xl) flex items-center justify-center  overflow-hidden mb-4 mx-auto">
                <img
                  src={logo.src}
                  alt="TWIPRA TECHNOLOGY"
                  className="w-full h-12 object-contain"
                />
              </div>
            </motion.div>
          </Link>

          {/* Company Name */}
          {/* <Link href="/" className="block group">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-(--text) to-(--text)/80 bg-clip-text text-transparent">
                TWIPRA
              </span>
              <span className="bg-gradient-to-r from-(--primary) to-purple-500 bg-clip-text text-transparent">
                {" "}
                TECHNOLOGY
              </span>
            </h1>
          </Link> */}

          {/* Tagline with Icon */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-(--primary)" />
            <p className="text-sm sm:text-base text-(--text-muted) tracking-wide">
              Digital Innovation & Excellence
            </p>
            <div className="w-1.5 h-1.5 rounded-full bg-(--primary)" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-(--text-muted) max-w-xl mx-auto mb-8 leading-relaxed">
            Building high-converting websites, AI solutions, and digital
            experiences that help businesses grow and succeed in the modern
            world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-(--primary) to-purple-600 hover:from-(--primary-hover) hover:to-purple-700 text-white text-sm font-semibold rounded-(--radius-md) transition-all duration-300 shadow-lg shadow-(--primary)/30 overflow-hidden cursor-pointer min-w-[180px]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <FiCalendar size={16} className="relative z-10" />
                <span className="relative z-10">Schedule a Call</span>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-(--surface) border-2 border-(--border) hover:border-(--primary)/50 hover:bg-(--primary)/5 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all duration-300 cursor-pointer min-w-[180px]"
              >
                <span>Contact Us</span>
                <FiArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-col items-center justify-center gap-5">
            {/* Secure Payment Badge */}
            <div className="flex items-center gap-2">
              <FiShield size={16} className="text-(--primary)" />
              <span className="text-sm text-(--text-muted) uppercase tracking-wider font-semibold">
                Secure Payments
              </span>
              <FiCreditCard size={16} className="text-(--primary)" />
            </div>

            {/* Payment Icons - Using your SVG icons */}
            <div className=" flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {paymentIconList.map((payment, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-14 h-10 sm:w-16 sm:h-11 bg-(--surface) rounded-(--radius-md) flex items-center justify-center border border-(--border) hover:border-(--primary)/40 hover:shadow-lg transition-all"
                  >
                    {payment.image}
                  </motion.div>
                  <span className="text-[10px] text-(--text-muted) capitalize">
                    {payment.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badge Text */}
            <p className="text-xs text-(--text-muted) text-center mt-3 flex items-center justify-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <FiShield size={12} className="text-(--primary)" />
                <span>256-bit SSL Secure</span>
              </span>
              <span className="text-(--border)">|</span>
              <span className="inline-flex items-center gap-1.5">
                <FiThumbsUp size={12} className="text-(--primary)" />
                <span>100% Safe Transactions</span>
              </span>
              <span className="text-(--border)">|</span>
              <span className="inline-flex items-center gap-1.5">
                <FiRotateCcw size={12} className="text-(--primary)" />
                <span>Money-Back Guarantee</span>
              </span>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-(--border) mb-12 sm:mb-16" />

        {/* Bottom Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          {/* Column 1 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs  text-(--primary) uppercase tracking-wider mb-5">
              Get in Touch
            </p>
            <div className="space-y-4">
              <a
                href="tel:8801851072019"
                className="flex items-center gap-3 text-sm text-(--text-muted) hover:text-(--primary) transition-colors group"
              >
                <FiPhoneCall
                  size={15}
                  className="text-(--primary) flex-shrink-0"
                />
                <span>{socialData.contact1}</span>
              </a>
              <a
                href="https://wa.me/8801310889153?text=Hello%20TWIPRA%20Team!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-(--text-muted) hover:text-(--primary) transition-colors group"
              >
                <FaWhatsapp
                  size={16}
                  className="text-(--primary) flex-shrink-0"
                />
                <span>+880 1310889153</span>
              </a>
              <a
                href="mailto:hello@nexora.studio"
                className="flex items-center gap-3 text-sm text-(--text-muted) hover:text-(--primary) transition-colors group"
              >
                <FiMail size={15} className="text-(--primary) flex-shrink-0" />
                <span>{socialData.email}</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-(--text-muted)">
                <FiMapPin
                  size={15}
                  className="text-(--primary) flex-shrink-0"
                />
                <span>{socialData.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xs text-(--primary)  uppercase tracking-wider mb-5">
              Quick Links
            </p>
            <div className="space-y-3">
              {footerLinks.map((link, i) => (
                <Link
                  key={i}
                  href={`${link.href}`}
                  className="block text-sm text-(--text-muted) hover:text-(--primary) transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xs text-(--primary)    uppercase tracking-wider mb-5">
              Services
            </p>
            <div className="space-y-3">
              {mainServices.map((category, i) => (
                <Link
                  key={i}
                  href={`${category.link}`}
                  className="block text-sm text-(--text-muted) hover:text-(--primary) transition-colors truncate"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 4 - Social + Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xs text-(--primary)  uppercase tracking-wider mb-5">
              Follow Us
            </p>
            <div className="flex gap-2 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-full bg-(--surface) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) `${social.color}` transition-all"
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
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-(--primary) hover:bg-(--primary-hover) text-white text-xs font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 cursor-pointer"
                >
                  <FiCalendar size={13} />
                  <span>Book a Call</span>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-(--border)">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-(--text-muted)">
              © {new Date().getFullYear()} TWIPRA TECHNOLOGY. All rights
              reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-(--text-muted)">
              <Link
                href="/privacy-policy"
                className="hover:text-(--primary) transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-(--primary) transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-(--primary) transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
