"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FiLinkedin,
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
        <Flag className="w-4 h-3 flex-shrink-0" />
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

interface Leader {
  name: string;
  role: string;
  country: string;
  image?: string;
  color: string;
  bg: string;
  desc: string;
  linkedin?: string;
  website?: string;
}

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const leaders: Leader[] = [
    {
      name: "Richard Tripura",
      role: "Founder & CEO",
      country: "Bangladesh",
      image: "/rechard.jpeg",
      color: "text-(--primary)",
      bg: "bg-(--primary)/10",
      desc: "Leads company vision, client relationships, AI Solution and business strategy with 6+ years in tech.",
      linkedin: "https://www.linkedin.com/in/luis-king-richard-tripura/",
      website: "https://sites.google.com/view/richardtripura",
    },
    {
      name: "Ritesh Gharti",
      role: "CTO",
      country: "India",
      color: "text-purple-400",
      image: "/profile.png",
      bg: "bg-purple-500/10",
      desc: "Oversees all technical architecture, AI research, and engineering best practices.",
      linkedin: "https://www.linkedin.com/in/riteshgharti333",
      website: "https://rgdev-portfolio-six.vercel.app/",
    },
    {
      name: "Clinton Tripura",
      role: "Head of Design",
      country: "Bangladesh",
      image: "/profile.png",
      color: "text-green-400",
      bg: "bg-green-500/10",
      desc: "Creates beautiful, intuitive user experiences for web and mobile products.",
      linkedin: "https://linkedin.com/in/clinton-tripura",
      website: "https://clintontripura.com",
    },
    {
      name: "Payel Paul Mrong",
      role: "Branding & Marketing Lead",
      country: "Bangladesh",
      image: "/profile.png",
      color: "text-green-400",
      bg: "bg-green-500/10",
      desc: "Builds strong brands through creative marketing and audience engagement.",
      linkedin: "https://linkedin.com/in/payel-paul-mrong",
      website: "https://richardtripura.com",
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
        <div className="leaders-grid mb-16 sm:mb-24">
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
              className="group relative h-full"
            >
              <div className="relative h-full bg-(--surface) border border-(--border) rounded-(--radius-md) overflow-hidden hover:border-(--primary)/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 will-change-transform flex flex-col">
                {/* Large Image Section */}
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden flex-shrink-0">
                  {leader.image ? (
                    <div className="relative w-full h-full">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out"
                        style={{ objectPosition: "center 15%" }}
                        loading="lazy"
                      />
                      {/* Gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-(--surface) via-(--surface)/20 to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-(--primary) to-purple-600 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3">
                        {/* User Icon */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <FiUsers
                            size={40}
                            className="text-white/90 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Name & Role overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-white/90 drop-shadow-md">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {/* Country Badge with Flag */}
                  <div className="inline-flex items-center px-3 py-1.5 bg-(--primary)/5 rounded-(--radius-md) mb-4 w-fit">
                    <CountryFlag country={leader.country} />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-(--text-muted) leading-relaxed mb-5 flex-1">
                    {leader.desc}
                  </p>

                  {/* Social Icons with Links */}
                  <div className="flex justify-center gap-2 pt-4 border-t border-(--border) mt-auto">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-(--radius-md) bg-(--background) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 transition-all cursor-pointer"
                      >
                        <FiLinkedin size={15} />
                      </a>
                    )}
                    {leader.website && (
                      <a
                        href={leader.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-(--radius-md) bg-(--background) border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--primary) hover:border-(--primary)/30 transition-all cursor-pointer"
                      >
                        <FiGlobe size={15} />
                      </a>
                    )}
                  </div>
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
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-(--primary)/10 flex items-center justify-center mx-auto mb-3 transition-transform duration-200 ease-out group-hover:scale-110">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-lg sm:text-xl font-bold text-(--primary)">
                        {getInitials(member.name)}
                      </span>
                    )}
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
        .leaders-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        
        @media (min-width: 640px) {
          .leaders-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        
        @media (min-width: 768px) {
          .leaders-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .leaders-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .leaders-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
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
