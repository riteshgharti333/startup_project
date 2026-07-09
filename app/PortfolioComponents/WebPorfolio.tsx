"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// TypeScript Interfaces
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
}

const WebPortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const swiperRef = useRef<SwiperType | null>(null);

  const webProjects: Project[] = [
    {
      id: 1,
      title: "FinFlow",
      category: "Fintech Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      description: "Real-time analytics with AI-powered insights",
      color: "#0061f3",
    },
    {
      id: 2,
      title: "ShopStream",
      category: "E-Commerce Platform",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      description: "AR product previews with one-click checkout",
      color: "#7c3aed",
    },
    {
      id: 3,
      title: "MediConnect",
      category: "Healthcare Portal",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      description: "Secure telemedicine with video consultations",
      color: "#059669",
    },
  ];

  return (
    <div className=" pb-20 px-2" style={{ color: "var(--text)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 max-w-6xl m-auto"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="w-2 h-2 rounded-full bg-blue-500" />

          <span className="text-xs font-medium tracking-widest uppercase text-blue-500">
            Web Development
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Digital
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            {""} Solutions
          </span>
        </h2>
      </motion.div>

      {/* Coverflow Carousel */}
      <div className="w-full flex justify-center items-center overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={"auto"}
          spaceBetween={-200}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full py-20 px-4 md:px-12 lg:px-24"
        >
          {webProjects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[300px] sm:!w-[450px] md:!w-[550px] lg:!w-[600px] !h-[180px] sm:!h-[260px] md:!h-[320px] lg:!h-[350px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
              style={{ background: "var(--surface)" }}
            >
              <div
                className="relative w-full h-full group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content - Bottom Left */}
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 z-10">
                  <span
                    className="text-[9px] font-medium tracking-wider uppercase block rounded-full px-3 py-1 w-fit text-white shadow-sm mb-2"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-white line-clamp-1">
                    {project.description}
                  </p>
                </div>

                {/* Hover View Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm backdrop-blur-md"
                    style={{
                      background: project.color,
                      color: "white",
                      boxShadow: `0 10px 30px -10px ${project.color}80`,
                    }}
                  >
                    View Project →
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {webProjects.map((project, index) => (
          <button
            key={index}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(index);
              }
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: activeIndex === index ? "32px" : "8px",
              height: "8px",
              background:
                activeIndex === index ? project.color : "var(--border)",
            }}
          />
        ))}
      </div>

      {/* ==================== MODAL (EXACT DESIGN FROM DIGITAL MARKETING)       {/* ==================== MODAL ==================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay-bg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full rounded-2xl overflow-hidden modal-bg"
              style={{ border: `1px solid ${selectedProject.color}40` }}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt=""
                  className="w-full h-48 md:h-56 object-cover flex-shrink-0"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg modal-close-bg"
                >
                  ×
                </button>
              </div>

              {/* SCROLLABLE BODY - Added max-h-[50vh] and overflow-y-auto */}
              <div className="p-4 sm:p-6 max-h-[50vh] overflow-y-auto scrollbar-hide">
                {/* Category */}
                <span
                  className="text-xs tracking-wider uppercase mb-2 block"
                  style={{ color: selectedProject.color }}
                >
                  {selectedProject.category}
                </span>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <p className="text-sm mb-5 leading-relaxed modal-desc">
                  {selectedProject.description}
                </p>

                {/* Project Details Grid - 3 Columns with REAL INFO */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                  {/* Box 1: Built With */}
                  <div className="p-3 sm:p-4 rounded-xl text-center modal-stat-bg">
                    <div
                      className="text-sm sm:text-base font-bold mb-1"
                      style={{ color: selectedProject.color }}
                    >
                      React & Node
                    </div>
                    <div className="text-[10px] sm:text-xs modal-stat-label">
                      Built With
                    </div>
                  </div>

                  {/* Box 2: Timeline */}
                  <div className="p-3 sm:p-4 rounded-xl text-center modal-stat-bg">
                    <div
                      className="text-sm sm:text-base font-bold mb-1"
                      style={{ color: selectedProject.color }}
                    >
                      4 Weeks
                    </div>
                    <div className="text-[10px] sm:text-xs modal-stat-label">
                      Timeline
                    </div>
                  </div>

                  {/* Box 3: Status */}
                  <div className="p-3 sm:p-4 rounded-xl text-center modal-stat-bg">
                    <div
                      className="text-sm sm:text-base font-bold mb-1"
                      style={{ color: selectedProject.color }}
                    >
                      Live
                    </div>
                    <div className="text-[10px] sm:text-xs modal-stat-label">
                      Status
                    </div>
                  </div>
                </div>

                {/* Extra Info Section - Adds more content to trigger scroll */}
                <div className="p-3 sm:p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div
                    className="text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-1"
                    style={{ color: selectedProject.color }}
                  >
                    Key Features
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1 mt-1">
                    <li>Secure JWT Authentication</li>
                    <li>Real-time Data Synchronization</li>
                    <li>Fully Responsive Dashboard</li>
                    <li>Dark Mode & Accessibility Support</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WebPortfolio;
