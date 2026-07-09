"use client";
import React from "react";
import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiGithub,
  FiX,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../public/new-logo.png";
import Image from "next/image";

const BlogFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    {
      name: "Consulting & Training",
      href: "/services/consulting-training",
    },
    {
      name: "Cloud & Infrastructure",
      href: "/services/cloud-infrastructure",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Our Services", href: "/services" },
    { name: "Courses", href: "/courses" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FiFacebook />, href: "#" },
    { name: "Instagram", icon: <FiInstagram />, href: "#" },
    { name: "Twitter", icon: <FaXTwitter />, href: "#" },
  ];

  return (
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
                // width={40}
                // height={40}
              />
            </Link>
            <p className="text-sm text-(--text-muted) mb-4 leading-relaxed">
              Building digital solutions that help businesses grow online. From
              web apps to AI, we've got you covered.
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
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-(--background) border border-(--border) rounded-(--radius-sm) text-sm text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--primary) transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-(--primary) text-white text-sm font-medium rounded-(--radius-sm) hover:bg-(--primary-hover) transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
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
  );
};

export default BlogFooter;
