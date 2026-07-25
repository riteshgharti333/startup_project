"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiStar, FiUsers, FiGlobe } from "react-icons/fi";
import LeaderCard from "./LeaderCard";
import { leader } from "../data/teamData";
import TeamMember from "./TeamMember";

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="relative pb-20 lg:pb-28">
      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
            <FiUsers size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">
              The People Behind TWIPRA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
            Meet Our{" "}
            <span className="relative inline-block">
              <span className="text-(--primary)">Experts</span>
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

        {/* Leadership Zigzag Section */}
        <div className="mb-16 sm:mb-24">
          {leader.map((leader, index) => (
            <motion.div
              key={leader.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <LeaderCard
                leader={leader as Parameters<typeof LeaderCard>[0]["leader"]}
                index={index}
                isInView={isInView}
              />
            </motion.div>
          ))}
        </div>

        {/* Team Members - Using the new component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <TeamMember />
        </motion.div>
      </div>

      <style>{`
        .team-swiper .swiper-pagination,
        .team-swiper .swiper-button-next,
        .team-swiper .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Team;
