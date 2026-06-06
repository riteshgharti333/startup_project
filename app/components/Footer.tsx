"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  FiArrowRight, 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiCommand,
  FiChevronRight,
  FiClock,
  FiCheck,
  FiLinkedin, 
  FiTwitter, 
  FiInstagram, 
  FiGithub,
  FiCalendar,
  FiArrowUpRight,
  FiGlobe
} from "react-icons/fi"

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ]

  const services = [
    { label: "Web Development", href: "#" },
    { label: "Mobile Apps", href: "#" },
    { label: "AI Solutions", href: "#" },
    { label: "Cloud Services", href: "#" },
    { label: "SEO Optimization", href: "#" },
    { label: "UI/UX Design", href: "#" },
  ]

  const socialLinks = [
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiGithub, href: "#", label: "GitHub" },
  ]

  return (
    <footer
      ref={sectionRef}
      className="relative bg-(--background) overflow-hidden"
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--primary)/40 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-(--primary)/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        
        {/* Top Row - CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 sm:mb-20 p-6 sm:p-8 bg-(--surface) border border-(--border) rounded-(--radius-xl)"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-(--text) mb-1">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm text-(--text-muted)">
              Let's discuss your ideas and bring them to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 hover:shadow-(--primary)/40 group"
            >
              <FiPhone size={14} />
              <span>Schedule a Call</span>
              <FiCalendar size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface-hover) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all group"
            >
              <span>Contact Us</span>
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Middle - Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Column - 4 cols */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-(--primary) to-purple-600 rounded-(--radius-md) flex items-center justify-center shadow-lg shadow-(--primary)/25">
                    <FiCommand size={20} className="text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-(--background)" />
                </div>
                <div>
                  <span className="text-xl font-bold text-(--text)">NEXORA</span>
                  <span className="text-(--primary) text-xl font-bold ml-1">Studio</span>
                </div>
              </div>

              <p className="text-sm text-(--text-muted) leading-relaxed mb-6 max-w-sm">
                Building high-converting websites and digital solutions for startups and businesses worldwide.
              </p>

              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:hello@nexora.studio" className="flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--primary) transition-colors group">
                  <FiMail size={14} className="group-hover:text-(--primary) transition-colors" />
                  <span>hello@nexora.studio</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--primary) transition-colors group">
                  <FiPhone size={14} className="group-hover:text-(--primary) transition-colors" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-(--text-muted)">
                  <FiMapPin size={14} />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-9 h-9 rounded-(--radius-md) bg-(--surface) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 hover:bg-(--primary)/5 transition-all"
                    >
                      <Icon size={15} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold text-(--text) mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-(--primary) rounded-full" />
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--primary) transition-all group"
                    >
                      <FiChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services - 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-sm font-semibold text-(--text) mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-(--primary) rounded-full" />
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--primary) transition-all group"
                    >
                      <FiChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform">{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Trust Factors - 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-sm font-semibold text-(--text) mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-(--primary) rounded-full" />
                Why Choose Us
              </h4>
              <ul className="space-y-2.5">
                {[
                  "5+ Years Experience",
                  "150+ Projects Done",
                  "98% Client Satisfaction",
                  "24/7 Dedicated Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-(--text-muted)">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <FiCheck size={10} className="text-green-400" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Mini Globe Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-md)">
                <FiGlobe size={14} className="text-(--primary)" />
                <span className="text-xs text-(--text-muted)">Serving clients worldwide</span>
                <FiArrowUpRight size={12} className="text-(--primary)" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-(--border)">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-(--text-muted)">
            <p>© {new Date().getFullYear()} NEXORA Studio. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-(--primary) transition-colors">Privacy Policy</a>
              <span className="text-(--border)">•</span>
              <a href="#" className="hover:text-(--primary) transition-colors">Terms of Service</a>
              <span className="text-(--border)">•</span>
              <a href="#" className="hover:text-(--primary) transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer