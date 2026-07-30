"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { CompImage } from "../data/companyData";

const Company = () => {
  const duplicatedImages = [...CompImage, ...CompImage, ...CompImage, ...CompImage];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden pb-20 lg:pb-28">
      <div className="relative w-full  mx-auto ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 px-2 sm:px-6 lg:px-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-4 sm:mb-6">
            <FiStar size={14} className="text-(--primary)" />
            <span className="text-sm text-(--text-muted)">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4 tracking-tight">
            Companies That <span className="text-(--primary)">Trust Us</span>
          </h2>

          <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto">
            Join thousands of businesses that rely on our expertise to build,
            scale, and succeed in the digital world.
          </p>
        </motion.div>

        {/* Infinite Scrolling Company Logos with CSS */}
        <div className="relative overflow-hidden">
     
          
          <div className="flex overflow-hidden">
            <div className="flex gap-10 sm:gap-15 lg:gap-24 py-8 animate-scroll">
              {duplicatedImages.map((company, index) => (
                <div
                  key={`company-${index}`}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    minWidth: "160px",
                  }}
                >
                  <img
                    src={company.img}
                    alt="Partner company"
                    className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto object-contain transition-all duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-(--primary)/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Company;