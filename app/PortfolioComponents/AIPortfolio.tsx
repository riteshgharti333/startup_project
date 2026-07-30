"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoRocket } from "react-icons/io5";
import { aiProjects, type AIProject } from "../data/portfolioData";

const AIPortfolio: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<AIProject | null>(
    null,
  );

  return (
    <div className="min-h-screen py-20 px-2" style={{ color: "var(--text)" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 max-w-6xl m-auto"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-xs font-medium tracking-widest uppercase text-red-500">
            AI Products
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Intelligent
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
            {""} Solutions
          </span>
        </h2>
      </motion.div>

      {/* Grid Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {aiProjects.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden bg-[#0a0a1a] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] group cursor-pointer"
              style={{ boxShadow: `0 10px 40px -5px ${product.color}20` }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Top Neon Glow Line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
                }}
              />

              {/* Image Section */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-bold text-white line-clamp-1">
                    {product.title}
                  </h3>
                  <span
                    className="text-xs font-semibold whitespace-nowrap shrink-0"
                    style={{ color: product.color }}
                  >
                    {product.metric}
                  </span>
                </div>

                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                    For:
                  </span>
                  <span className="text-[10px] text-gray-300 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                    {product.targetAudience}
                  </span>
                </div>

                <motion.div className="absolute inset-x-4 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-full py-2 rounded-lg font-semibold text-xs text-white flex items-center justify-center gap-2 backdrop-blur-sm"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}, ${product.color}cc)`,
                      boxShadow: `0 0 20px -5px ${product.color}`,
                    }}
                  >
                    <IoRocket size={14} />
                    View Details
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-2xl overflow-hidden bg-[#12121a] border border-white/10"
              style={{ borderColor: `${selectedProduct.color}40` }}
            >
              <div className="relative h-48 sm:h-56 w-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "top" }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${selectedProduct.color}, transparent)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] to-transparent" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 border border-white/10"
                >
                  <IoClose size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto scrollbar-hide">
                <div className="flex flex-col sm:flex-row justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{ color: selectedProduct.color }}
                      >
                        {selectedProduct.category}
                      </span>
                      <span className="w-px h-4 bg-white/20" />
                      <span className="text-xs text-gray-400">
                        {selectedProduct.metric}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {selectedProduct.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-1">
                      For:{" "}
                      <span className="text-gray-300">
                        {selectedProduct.targetAudience}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Overview */}
                <h4
                  className="text-xs font-bold tracking-wider uppercase mb-2"
                  style={{ color: selectedProduct.color }}
                >
                  Overview
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {selectedProduct.overview}
                </p>

                {/* Key Capabilities */}
                <h4
                  className="text-xs font-bold tracking-wider uppercase mb-3"
                  style={{ color: selectedProduct.color }}
                >
                  Key Capabilities
                </h4>
                <ul className="text-sm text-gray-400 list-disc pl-4 space-y-1 mb-6">
                  {selectedProduct.keyCapabilities.map((cap, i) => (
                    <li key={i}>{cap}</li>
                  ))}
                </ul>

                {/* Results */}
                <h4
                  className="text-xs font-bold tracking-wider uppercase mb-2"
                  style={{ color: selectedProduct.color }}
                >
                  Results
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {selectedProduct.results}
                </p>

                {/* Tech Pillars */}
                <h4 className="text-xs font-bold tracking-wider text-gray-400 mb-3 uppercase">
                  Powered By
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.techPillars.map((tech, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIPortfolio;
