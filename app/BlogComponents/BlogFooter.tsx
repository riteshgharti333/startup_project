"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiFacebook, FiInstagram, FiCheck } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../public/new-logo.png";
import Image from "next/image";
import { socialData } from "../data/links";
import SubscribeModal from "./SubscribeModal";
import SubscribeButton from "./SubscribeButton";

const BlogFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscribed = localStorage.getItem("twipraTech-newsletter") === "true";
    setIsSubscribed(subscribed);
  }, []);

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    {
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Video Editing", href: "/services/video-editing" },
    { name: "Consulting & Training", href: "/services/consulting-training" },
    { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Our Services", href: "/services" },
    { name: "Courses", href: "/courses" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FiFacebook />, href: socialData.facebook },
    { name: "Instagram", icon: <FiInstagram />, href: socialData.insta },
    { name: "Twitter", icon: <FaXTwitter />, href: socialData.x },
  ];

  const handleSubscribeClick = () => {
    setIsSubscribeOpen(true);
  };

  return (
    <>
      <footer className="w-full bg-(--surface) border-t border-(--border)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-2">
                <Image
                  src={logo}
                  alt="twipra-technologies"
                  className="w-full h-10"
                />
              </Link>
              <p className="text-sm text-(--text-muted) mb-4 leading-relaxed">
                Building digital solutions that help businesses grow online.
                From web apps to AI, we've got you covered.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-(--border) text-(--text-muted) hover:text-(--primary) hover:border-(--primary) hover:bg-(--surface-hover) transition-all duration-200"
                    title={social.name}
                  >
                    <span className="text-base">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-sm font-semibold text-(--text) uppercase tracking-wider mb-4">
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-sm text-(--text-muted) hover:text-(--primary) transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-(--text) uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-(--text-muted) hover:text-(--primary) transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-(--text) uppercase tracking-wider mb-4">
                Subscribe
              </h3>
              <p className="text-sm text-(--text-muted) mb-3">
                Get the latest posts and updates delivered to your inbox.
              </p>

              <SubscribeButton
                isSubscribed={isSubscribed}
                onClick={handleSubscribeClick}
                variant="footer"
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-(--border) py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-(--text-muted)">
              © {currentYear} Twipra Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-(--text-muted) hover:text-(--primary) transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-(--border)">|</span>
              <Link
                href="/terms"
                className="text-xs text-(--text-muted) hover:text-(--primary) transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-(--border)">|</span>
              <Link
                href="/cookie-policy"
                className="text-xs text-(--text-muted) hover:text-(--primary) transition-colors"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
        onSuccess={() => setIsSubscribed(true)}
      />
    </>
  );
};

export default BlogFooter;
