"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiStar, FiAward } from "react-icons/fi";
import {
  SiGoogle,
  SiNetflix,
  SiSpotify,
  SiTesla,
  SiShopify,
  SiStripe,
  SiSlack,
  SiDropbox,
  SiNotion,
  SiVercel,
} from "react-icons/si";
import "swiper/css";

const Company = () => {
  const companies = [
    { icon: SiGoogle, name: "Google" },
    { icon: SiNetflix, name: "Netflix" },
    { icon: SiSpotify, name: "Spotify" },
    { icon: SiTesla, name: "Tesla" },
    { icon: SiShopify, name: "Shopify" },
    { icon: SiStripe, name: "Stripe" },
    { icon: SiSlack, name: "Slack" },
    { icon: SiDropbox, name: "Dropbox" },
    { icon: SiNotion, name: "Notion" },
    { icon: SiVercel, name: "Vercel" },
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden pb-20 lg:pb-28">
      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
            <FiStar size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">
              Trusted by Leading Businesses
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
            Companies That{" "}
            <span className="relative inline-block">
              <span className="text-(--primary)">Trust Us</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
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
            Join thousands of businesses that rely on our expertise to build,
            scale, and succeed in the digital world.
          </p>
        </motion.div>

        {/* Company Logo Slider - First Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={2}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: false,
            }}
            speed={3000}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 40 },
              640: { slidesPerView: 4, spaceBetween: 48 },
              768: { slidesPerView: 5, spaceBetween: 56 },
              1024: { slidesPerView: 6, spaceBetween: 64 },
            }}
            className="company-swiper"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={`company-${index}`}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    borderColor: "rgba(59,130,246,0.3)",
                  }}
                  className="group relative bg-(--surface) border border-(--border) rounded-(--radius-xl) p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:bg-(--primary)/5"
                >
                  {/* Company Icon */}
                  <div className="w-14 h-14 rounded-(--radius-lg) bg-(--primary)/10 flex items-center justify-center group-hover:bg-(--primary)/20 transition-colors duration-300">
                    <company.icon
                      size={28}
                      className="text-(--text-muted) group-hover:text-(--primary) transition-colors duration-300"
                    />
                  </div>

                  {/* Company Name */}
                  <span className="text-xs font-medium text-(--text-muted) group-hover:text-(--text) transition-colors duration-300">
                    {company.name}
                  </span>

                  {/* Verified Badge */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiAward size={12} className="text-(--primary)" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-(--border)" />
            <div className="flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-full">
              <span className="w-2 h-2 rounded-full bg-(--primary) animate-pulse" />
              <span className="text-xs text-(--text-muted)">
                More companies joining daily
              </span>
            </div>
            <div className="h-px flex-1 bg-(--border)" />
          </div>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-(--primary)/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <style>{`
        .company-swiper .swiper-pagination,
        .company-swiper .swiper-button-next,
        .company-swiper .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Company;
