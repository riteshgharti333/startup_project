"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiGlobe,
  FiStar,
  FiUsers,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { teamMembers } from "../data/teamData"; // Adjust this import path

const TeamMember: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
            Meet Our{" "}
            <span className="relative inline-block">
              <span className="text-(--primary)">Team</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
              />
            </span>
          </h2>

          <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
            A passionate team of engineers, designers, and strategists committed
            to building technology that creates real value.
          </p>
        </motion.div>

        {/* Team Members Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1.5}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".team-nav-next",
              prevEl: ".team-nav-prev",
            }}
            loop={true}
            speed={600}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name} className="h-auto">
                <div className="group relative bg-(--surface) rounded-2xl overflow-hidden border border-(--border) hover:border-(--primary)/30 transition-all duration-500 hover:shadow-2xl hover:shadow-(--primary)/5 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[5/6] overflow-hidden bg-(--primary)/5 flex-shrink-0">
                    {member.img ? (
                      <>
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{
                            objectPosition:
                              member.objectPosition || "center 20%",
                          }}
                          loading="lazy"
                        />
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-(--primary)/10 to-purple-500/10">
                        <span className="text-4xl sm:text-5xl font-bold text-(--primary)/20">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex text-center flex-col flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-(--text) group-hover:text-(--primary) transition-colors duration-300 truncate">
                      {member.name}
                    </h4>

                    <p className="text-xs sm:text-sm text-(--text-muted) mt-1 line-clamp-2 flex-1">
                      {member.role}
                    </p>

                    {/* Static links (always visible) */}
                    {member.links.length > 0 && (
                      <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-(--border)">
                        {member.links.map((link, linkIndex) => {
                          const IconComponent = link.icon;
                          return (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-(--background) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 hover:bg-(--primary)/5 transition-all"
                              title={link.label}
                            >
                              <IconComponent size={14} />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button className="team-nav-prev w-10 h-10 rounded-(--radius-md) border border-(--border) bg-(--surface) hover:bg-(--surface-hover) text-(--text-muted) hover:text-(--text) transition-all flex items-center justify-center">
              <FiChevronLeft size={18} />
            </button>
            <button className="team-nav-next w-10 h-10 rounded-(--radius-md) bg-(--primary) hover:bg-(--primary-hover) text-white transition-all flex items-center justify-center shadow-lg shadow-(--primary)/20">
              <FiChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Global Presence Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm text-(--text-muted)">
            <FiStar size={14} className="text-(--primary)" />
            <span>
              <strong className="text-(--text)">20+ years</strong> combined
              experience
            </span>
          </div>
          <span className="text-(--border) hidden sm:block">|</span>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-(--text-muted)">
            <FiUsers size={14} className="text-(--primary)" />
            <span>
              <strong className="text-(--text)">14+</strong> team members
            </span>
          </div>
          <span className="text-(--border) hidden sm:block">|</span>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-(--text-muted)">
            <FiGlobe size={14} className="text-(--primary)" />
            <span>Global remote team</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .team-swiper .swiper-pagination,
        .team-swiper .swiper-button-next,
        .team-swiper .swiper-button-prev {
          display: none !important;
        }
        
        .team-swiper .swiper-slide {
          height: auto !important;
        }
      `}</style>
    </section>
  );
};

export default TeamMember;
