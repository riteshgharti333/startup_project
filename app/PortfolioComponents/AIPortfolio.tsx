"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoRocket } from "react-icons/io5";

// TypeScript Interfaces
interface AIProduct {
  id: number;
  title: string;
  category:
    | "AI Chatbot"
    | "Knowledge Assistant"
    | "Workflow Automation"
    | "AI Integration";
  image: string;
  description: string;
  color: string;
  targetAudience: string;
  techPillars: string[];
  liveLink: string;
  metric: string;
}

const AIPortfolio: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<AIProduct | null>(
    null,
  );

  const aiProducts: AIProduct[] = [
    {
      id: 1,
      title: "SmartChat AI",
      category: "AI Chatbot",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80", // Chat UI
      description:
        "An intelligent chatbot built with GPT-4 that handles customer support, lead generation, and appointment scheduling 24/7.",
      color: "#06b6d4", // Cyan
      targetAudience: "E-commerce & SaaS Businesses",
      techPillars: ["OpenAI GPT-4", "LangChain", "WebSocket Real-time"],
      liveLink: "#",
      metric: "10k+ Conversations/mo",
    },
    {
      id: 2,
      title: "KnowledgeBase AI",
      category: "Knowledge Assistant",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
      description:
        "A document search assistant that uses RAG to instantly answer questions from your internal PDFs and knowledge bases.",
      color: "#8b5cf6", // Violet
      targetAudience: "Legal, Medical & Research Teams",
      techPillars: [
        "Pinecone Vector DB",
        "OpenAI Embeddings",
        "RAG Architecture",
      ],
      liveLink: "#",
      metric: "99.2% Accuracy",
    },
    {
      id: 3,
      title: "AutoFlow AI",
      category: "Workflow Automation",
      image:
        "https://images.unsplash.com/photo-1512316609839-ce403d3aa8ad?w=800&auto=format&fit=crop",
      description:
        "A visual AI workflow builder that automates lead scoring, email outreach, and data entry. Connects to HubSpot and Slack.",
      color: "#f59e0b", // Amber
      targetAudience: "Sales & Marketing Ops",
      techPillars: ["n8n Integration", "Custom AI Agents", "API Webhooks"],
      liveLink: "#",
      metric: "40 hrs Saved/week",
    },
    {
      id: 4,
      title: "Neuron API",
      category: "AI Integration",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80", // Server/API UI
      description:
        "A fully managed custom AI integration service. We build and deploy private AI models and REST APIs tailored to your enterprise.",
      color: "#ec4899", // Pink
      targetAudience: "Enterprise & Startups",
      techPillars: ["FastAPI", "PyTorch", "Docker & Kubernetes"],
      liveLink: "#",
      metric: "100% Uptime SLA",
    },
    {
      id: 5,
      title: "VisionAI",
      category: "AI Chatbot",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", // Camera/Detection UI
      description:
        "An AI chatbot that analyzes images, reads QR codes, and identifies objects in real-time for retail and security use cases.",
      color: "#10b981", // Emerald
      targetAudience: "Retail & Security",
      techPillars: ["OpenAI Vision", "PyTorch", "Real-time Streaming"],
      liveLink: "#",
      metric: "98.5% Accuracy",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-2" style={{ color: "var(--text)" }}>
      {/* Header (Neon Tech Theme) */}
      {/* Header (Cyber-Red Theme) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 max-w-6xl m-auto"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500" />

          <span className="text-xs font-medium tracking-widest uppercase text-red-500 ">
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

      {/* RESPONSIVE GRID CARDS (NO SWIPER) */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {aiProducts.map((product) => (
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
                {/* Dark Gradient Overlay for Text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />

                {/* Category Badge (Top Left) */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white border border-white/10">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Title & Metric */}
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

                {/* Short Description */}
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                  {product.description}
                </p>

                {/* Target Audience Chip */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                    For:
                  </span>
                  <span className="text-[10px] text-gray-300 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                    {product.targetAudience}
                  </span>
                </div>

                {/* Hover "Explore" Button (Appears on Hover) */}
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

      {/* ==================== AI PRODUCT MODAL (SAME DESIGN) ==================== */}
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
              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-56 w-full">
                <img
                  src={selectedProduct.image}
                  alt=""
                  className="w-full h-full object-cover"
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
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                      {selectedProduct.description}
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      <span className="font-medium text-gray-300">Target:</span>{" "}
                      {selectedProduct.targetAudience}
                    </div>
                  </div>
                </div>

                {/* Tech Pillars Grid */}
                <div>
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIPortfolio;
