"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { FiStar, FiBriefcase, FiCalendar, FiChevronLeft, FiChevronRight, FiMessageSquare } from "react-icons/fi"
import { useState } from "react"
import "swiper/css"
import "swiper/css/navigation"

interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  text: string
  project: string
  year: string
  result: string
  resultLabel: string
}

const Review: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})
  const maxLength: number = 100

  const toggleReadMore = (id: number): void => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5,
      text: "Working with NEXORA transformed our entire digital presence. Our conversion rate increased by 200% within the first month. The team's attention to detail and technical expertise is truly unmatched in the industry.",
      project: "E-Commerce Platform",
      year: "2024",
      result: "200%",
      resultLabel: "More Conversions",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      rating: 5,
      text: "The AI chatbot they developed for us handles 80% of customer queries automatically. Support tickets dropped by 60%. Absolutely game-changing technology that saved us thousands.",
      project: "AI Development",
      year: "2024",
      result: "60%",
      resultLabel: "Fewer Tickets",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandVibe",
      rating: 5,
      text: "Our SEO rankings improved dramatically within 3 months. Organic traffic up 150%. The team really understands modern search algorithms and content strategy.",
      project: "SEO Optimization",
      year: "2023",
      result: "150%",
      resultLabel: "More Traffic",
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO, CloudScale",
      rating: 5,
      text: "Migrating our infrastructure to the cloud was seamless. Zero downtime, cost reduced by 40%. Their DevOps expertise is world-class and saved our team months of work.",
      project: "Cloud Migration",
      year: "2024",
      result: "40%",
      resultLabel: "Cost Reduction",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-(--background) overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] border-[30px] border-(--primary)/5 rounded-full" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-(--primary)/5 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-purple-500/5 rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute top-20 right-1/4 w-32 h-px bg-(--primary)/10 rotate-45" />
        <div className="absolute bottom-40 left-10 w-20 h-px bg-(--primary)/10 -rotate-12" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-(--primary)/20 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 border border-(--primary)/10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-(--primary)/20 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-4 sm:mb-6">
            <FiMessageSquare size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">Client Reviews</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-3 sm:mb-4">
            What Our{" "}
            <span className="relative inline-block">
              <span className="text-(--primary)">Clients</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
              />
            </span>{" "}
            Say
          </h2>
          
          <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform and grow.
          </p>
        </motion.div>

        {/* Main Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".review-nav-next",
              prevEl: ".review-nav-prev",
            }}
            loop={true}
            speed={800}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="review-main-swiper"
          >
            {testimonials.map((testimonial) => {
              const isExpanded = expandedCards[testimonial.id]
              const isLong = testimonial.text.length > maxLength

              return (
                <SwiperSlide key={testimonial.id}>
                  <div className="flex flex-col md:flex-row rounded-(--radius-xl) overflow-hidden border border-(--border) shadow-2xl shadow-(--primary)/5">
                    
                    {/* Left - Gradient Card */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="aspect-[4/3] md:aspect-[3/4] relative bg-gradient-to-br from-(--primary) via-(--primary-hover) to-purple-600 flex items-center justify-center p-6">
                        
                        {/* Decorative corners */}
                        <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-white/20 z-10" />
                        <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-white/20 z-10" />
                        
                        {/* Center content */}
                        <div className="text-center text-white">
                          {/* Avatar */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-(--radius-lg) bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20"
                          >
                            <span className="text-3xl sm:text-4xl font-bold">
                              {testimonial.name.split(" ").map(n => n[0]).join("")}
                            </span>
                          </motion.div>
                          
                          {/* Stars */}
                          <div className="flex gap-1 justify-center mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                              >
                                <FiStar size={16} className="text-amber-400 fill-amber-400" />
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Result */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.9 }}
                          >
                            <div className="text-2xl sm:text-3xl font-bold mb-1">
                              {testimonial.result}
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm">
                              {testimonial.resultLabel}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="md:w-3/5 bg-(--surface) p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      
                      {/* Name - Desktop */}
                      <div className="hidden md:block mb-6">
                        <h3 className="text-xl lg:text-2xl font-bold text-(--text)">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="w-6 h-px bg-(--primary)"></span>
                          <span className="text-sm text-(--text-muted)">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>

                      {/* Name - Mobile */}
                      <div className="md:hidden mb-4">
                        <h3 className="text-lg font-bold text-(--text)">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-(--text-muted) mt-1">
                          {testimonial.role}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-(--primary)/10 text-(--primary) text-xs rounded-(--radius-sm)">
                          <FiBriefcase size={11} />
                          {testimonial.project}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-(--background) text-(--text-muted) text-xs rounded-(--radius-sm) border border-(--border)">
                          <FiCalendar size={11} />
                          {testimonial.year}
                        </span>
                      </div>

                      {/* Quote with smooth expand/collapse */}
                      <div className="mb-4 p-4 bg-(--primary)/5 rounded-(--radius-md) border-l-2 border-(--primary)">
                        <p className="text-xs text-(--text-muted) uppercase tracking-wider mb-1">
                          Feedback
                        </p>
                        
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={isExpanded ? "expanded" : "collapsed"}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-sm md:text-base text-(--text) leading-relaxed"
                          >
                            {isLong && !isExpanded
                              ? `${testimonial.text.substring(0, maxLength)}...`
                              : `"${testimonial.text}"`}
                          </motion.p>
                        </AnimatePresence>
                        
                        {isLong && (
                          <motion.button
                            onClick={() => toggleReadMore(testimonial.id)}
                            className="mt-2 text-xs font-medium text-(--primary) hover:text-(--primary-hover) transition-colors flex items-center gap-1"
                            whileTap={{ scale: 0.95 }}
                          >
                            {isExpanded ? "Show Less" : "Read Full Review"}
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                              className="text-[10px] inline-block"
                            >
                              ▼
                            </motion.span>
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Navigation Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-between mt-4"
          >
            {/* Progress Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const swiper = (document.querySelector(".review-main-swiper") as any)?.swiper
                    swiper?.slideToLoop(index)
                  }}
                  className={`transition-all duration-500 ease-in-out rounded-full ${
                    index === activeIndex
                      ? "w-6 sm:w-8 h-[3px] bg-(--primary)"
                      : "w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-(--border) hover:bg-(--text-muted)"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button className="review-nav-prev w-9 h-9 sm:w-10 sm:h-10 rounded-(--radius-md) border border-(--border) bg-(--surface) hover:bg-(--surface-hover) text-(--text-muted) hover:text-(--text) transition-all duration-300 flex items-center justify-center group">
                <FiChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
              </button>
              <button className="review-nav-next w-9 h-9 sm:w-10 sm:h-10 rounded-(--radius-md) bg-(--primary) hover:bg-(--primary-hover) text-white transition-all duration-300 flex items-center justify-center shadow-lg shadow-(--primary)/20 group">
                <FiChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .review-main-swiper .swiper-pagination,
        .review-main-swiper .swiper-button-next,
        .review-main-swiper .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  )
}

export default Review