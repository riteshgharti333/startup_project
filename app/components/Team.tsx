"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FiLinkedin,
  FiTwitter,
  FiGlobe,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";

import {
  IN,
  BD,
  NP,
  NG,
  GH,
  CM,
  MW,
  LK,
  TH,
  SL,
} from "country-flag-icons/react/3x2";

// Flag mapping
const flagMap: Record<string, React.ComponentType<any>> = {
  India: IN,
  Bangladesh: BD,
  Nepal: NP,
  Nigeria: NG,
  Ghana: GH,
  Cameroon: CM,
  Malawi: MW,
  "Sri Lanka": LK,
  Thailand: TH,
  "Sierra Leone": SL,
};

// Reusable CountryFlag component
const CountryFlag = ({ country }: { country: string }) => {
  const Flag = flagMap[country];

  return (
    <div className="inline-flex items-center gap-1.5">
      {Flag ? (
        <Flag className="w-4 h-3  flex-shrink-0" />
      ) : (
        <span className="text-xs">{getFlagEmoji(country)}</span>
      )}
      <span className="text-xs text-(--text-muted)">{country}</span>
    </div>
  );
};

// Fallback emoji flags for countries not in the package (like Tibet)
const getFlagEmoji = (country: string): string => {
  const flags: Record<string, string> = {
    Tibet: "🏔️",
  };
  return flags[country] || "🌍";
};

interface TeamMember {
  name: string;
  role: string;
  country: string;
  image?: string;
  isLead?: boolean;
  color: string;
  bg: string;
}

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const leaders = [
    {
      name: "Richard Tripura",
      role: "Founder & CEO",
      country: "Bangladesh",
      color: "text-(--primary)",
      bg: "bg-(--primary)/10",
      desc: "Leads company vision, client relationships, and business strategy with 6+ years in tech.",
    },
    {
      name: "Ritesh Gharti",
      role: "CTO",
      country: "India",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      desc: "Oversees all technical architecture, AI research, and engineering best practices.",
    },
    {
      name: "Clinton Tripura",
      role: "Head of Design",
      country: "Bangladesh",
      color: "text-green-400",
      bg: "bg-green-500/10",
      desc: "Creates beautiful, intuitive user experiences for web and mobile products.",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Priya Sharma",
      role: "Academic Lead",
      country: "India",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      name: "Kitress Monyozo",
      role: "Marketing",
      country: "Malawi",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      name: "Arnold Chisisito",
      role: "R&D",
      country: "Malawi",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      name: "Steven Ansumana",
      role: "Country Head",
      country: "Sierra Leone",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      name: "Abhishek",
      role: "Developer",
      country: "Nepal",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      name: "Stiphan",
      role: "Engineer",
      country: "Cameroon",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      name: "Dimaji",
      role: "Developer",
      country: "Nigeria",
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      name: "Sinepolo",
      role: "Designer",
      country: "Ghana",
      color: "text-teal-400",
      bg: "bg-teal-500/10",
    },
    {
      name: "Malvi",
      role: "Developer",
      country: "Thailand",
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      name: "Priyanka",
      role: "Researcher",
      country: "Tibet",
      color: "text-red-400",
      bg: "bg-red-500/10",
    },
    {
      name: "Zairam",
      role: "Engineer",
      country: "Sri Lanka",
      color: "text-lime-400",
      bg: "bg-lime-500/10",
    },
  ];

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

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

        {/* Leadership Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative"
            >
              <div className="relative bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 sm:p-8 text-center hover:border-(--primary)/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Avatar with ring */}
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 rounded-full border-2 border-(--primary)/20 scale-110 group-hover:scale-125 group-hover:border-(--primary)/40 transition-all duration-500" />
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-(--primary) to-purple-600 flex items-center justify-center shadow-xl group-hover:shadow-(--primary)/30 transition-all duration-300">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {getInitials(leader.name)}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg sm:text-xl font-bold text-(--text) group-hover:text-(--primary) transition-colors mb-1">
                  {leader.name}
                </h3>
                <p className="text-xs sm:text-sm text-(--text-muted) mb-3">
                  {leader.role}
                </p>

                {/* Country Badge with Flag */}
                <div className="inline-flex items-center px-3 py-1 bg-(--primary)/5 rounded-(--radius-md) mb-4">
                  <CountryFlag country={leader.country} />
                </div>

                {/* Description */}
                <p className="text-xs text-(--text-muted) leading-relaxed mb-4">
                  {leader.desc}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-2 pt-3 border-t border-(--border)">
                  <span className="w-8 h-8 rounded-(--radius-sm) bg-(--background) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 transition-all cursor-pointer">
                    <FiLinkedin size={13} />
                  </span>
                  <span className="w-8 h-8 rounded-(--radius-sm) bg-(--background) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 transition-all cursor-pointer">
                    <FiTwitter size={13} />
                  </span>
                  <span className="w-8 h-8 rounded-(--radius-sm) bg-(--background) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 transition-all cursor-pointer">
                    <FiGlobe size={13} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members - Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-(--border)" />
            <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider">
              Team Members
            </span>
            <div className="h-px flex-1 bg-(--border)" />
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={12}
            slidesPerView={2}
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
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 6, spaceBetween: 24 },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name}>
                <div className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 mt-2 text-center hover:border-(--primary)/30 transition-all duration-200 ease-out cursor-pointer group hover:-translate-y-1 hover:shadow-lg">
                  {/* Avatar */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-(--primary)/10 flex items-center justify-center mx-auto mb-3 transition-transform duration-200 ease-out group-hover:scale-110">
                    <span className="text-lg sm:text-xl font-bold text-(--primary)">
                      {getInitials(member.name)}
                    </span>
                  </div>

                  {/* Info */}
                  <h4 className="text-xs sm:text-sm font-semibold text-(--text) transition-colors duration-200 ease-out group-hover:text-(--primary) truncate">
                    {member.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-(--text-muted) mt-0.5 truncate">
                    {member.role}
                  </p>

                  {/* Country with Flag */}
                  <div className="flex items-center justify-center mt-2 text-[10px] text-(--text-muted)">
                    <CountryFlag country={member.country} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button className="team-nav-prev w-8 h-8 sm:w-9 sm:h-9 rounded-(--radius-md) border border-(--border) bg-(--surface) hover:bg-(--surface-hover) text-(--text-muted) hover:text-(--text) transition-all flex items-center justify-center">
              <FiChevronLeft size={14} />
            </button>
            <button className="team-nav-next w-8 h-8 sm:w-9 sm:h-9 rounded-(--radius-md) bg-(--primary) hover:bg-(--primary-hover) text-white transition-all flex items-center justify-center shadow-lg shadow-(--primary)/20">
              <FiChevronRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Global Presence Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm text-(--text-muted)">
            <FiGlobe size={14} className="text-(--primary)" />
            <span>
              Team across{" "}
              <strong className="text-(--text)">11+ countries</strong>
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
            <FiStar size={14} className="text-(--primary)" />
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
      `}</style>
    </section>
  );
};

export default Team;