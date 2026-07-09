"use client";

import { motion } from "framer-motion";
import { FiFolder, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import WebPortfolio from "@/app/PortfolioComponents/WebPorfolio";
import DigitalMarketing from "@/app/PortfolioComponents/DigitalMarketing";
import AppPortfolio from "@/app/PortfolioComponents/AppPortfolio";
import AIPortfolio from "@/app/PortfolioComponents/AIPortfolio";
import VideoPortfolio from "@/app/PortfolioComponents/VideoPortfolio";
import GraphicDesign from "@/app/PortfolioComponents/GraphicDesignPortfolio";

const Portfolio = () => {
  return (
    <>
      <main className="relative">
        {/* Hero Banner - Matching your design pattern */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
          <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
                <FiFolder size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">
                  Our Portfolio
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4">
                Our{" "}
                <span className="relative inline-block">
                  <span className="text-(--primary)">Selected</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                  />
                </span>{" "}
                Works
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-(--text-muted) max-w-2xl mx-auto mb-8">
                Explore our latest projects across web development, mobile apps,
                digital marketing, and creative design — built to deliver real
                results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 cursor-pointer"
                  >
                    Start a Project
                    <FiArrowRight size={16} />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Content Area */}
        <section className="relative pb-20 lg:pb-28">
          <div className="">
            {/* Section Divider */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                Featured Projects
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            <WebPortfolio />
            <DigitalMarketing />
            <AppPortfolio />
            <GraphicDesign />
            <AIPortfolio />
            <VideoPortfolio />
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
