"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { IoClose, IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { appProjects, type AppProject } from "../data/portfolioData";

const AppPortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<AppProject | null>(
    null,
  );
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="min-h-screen pb-20 px-2" style={{ color: "var(--text)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 max-w-6xl m-auto"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-medium tracking-widest uppercase text-cyan-400">
            App Development
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Mobile
          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            {""} Experiences
          </span>
        </h2>
      </motion.div>

      {/* Phone Mockup Carousel */}
      <div className="w-full flex justify-center items-center overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={"auto"}
          spaceBetween={-80}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full py-20 px-4"
        >
          {appProjects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[220px] sm:!w-[260px] md:!w-[300px] !h-[420px] sm:!h-[480px] md:!h-[540px] cursor-pointer transition-all duration-300"
            >
              <div
                className="relative w-full h-full rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-gray-900 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group"
                style={{ background: project.color + "20" }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-700" />
                </div>
                <div className="absolute bottom-0 left-0 p-5 w-full z-10">
                  <span
                    className="text-[10px] font-bold tracking-wider block mb-1 drop-shadow-md"
                    style={{ color: project.color }}
                  >
                    {project.platform}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-white/80 line-clamp-1 drop-shadow-md">
                    {project.category}
                  </p>
                </div>
                <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3 mt-6">
        {appProjects.map((project, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className="rounded-full transition-all duration-300"
            style={{
              width: activeIndex === index ? "32px" : "8px",
              height: "8px",
              background: activeIndex === index ? project.color : "#374151",
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full rounded-2xl overflow-hidden bg-[#12121a] border border-gray-800"
              style={{ borderColor: `${selectedProject.color}40` }}
            >
              <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto scrollbar-hide relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 z-20 p-1 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 border border-gray-700"
                >
                  <IoClose size={22} />
                </button>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 mt-2">
                  <div>
                    <span
                      className="text-xs font-bold tracking-wider uppercase block mb-2"
                      style={{ color: selectedProject.color }}
                    >
                      {selectedProject.platform} • {selectedProject.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                      {selectedProject.overview}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-300 mb-3">
                    Key Features
                  </h4>
                  <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-300 mb-2">
                    Impact
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>

                {/* App Screenshot Gallery */}
                <div>
                  <h4 className="text-sm font-bold text-gray-300 mb-3">
                    App Screenshots
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {selectedProject.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-sm overflow-hidden max-h-[280px]"
                      >
                        <img
                          src={img}
                          alt={`Screenshot ${i + 1}`}
                          className="w-full h-full max-h-[280px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppPortfolio;
