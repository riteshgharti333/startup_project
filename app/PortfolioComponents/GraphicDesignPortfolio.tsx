"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

// TypeScript Interfaces
interface GraphicProject {
  id: number;
  title: string;
  client: string;
  category: "Branding" | "Poster" | "Packaging" | "Illustration";
  image: string;
  color: string;
  year: string;
}

const GraphicDesign: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<GraphicProject | null>(
    null,
  );

  const graphicProjects: GraphicProject[] = [
    {
      id: 1,
      title: "EcoBrew Branding",
      client: "EcoBrew Coffee Co.",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      color: "#ea580c", // Burnt Orange
      year: "2024",
    },
    {
      id: 3,
      title: "Luxe Cosmetics",
      client: "Luxe Beauty",
      category: "Packaging",
      image:
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&q=80",
      color: "#eab308", // Mustard Yellow
      year: "2024",
    },
    {
      id: 4,
      title: "Wildlife Illustration",
      client: "National Geographic",
      category: "Illustration",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80",
      color: "#4f46e5", // Indigo
      year: "2023",
    },
    {
      id: 5,
      title: "Urban Eats Menu",
      client: "Urban Eats Restaurant",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      color: "#d946ef", // Pink
      year: "2024",
    },
    {
      id: 6,
      title: "Retro Waves",
      client: "Personal Project",
      category: "Poster",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      color: "#0ea5e9", // Sky Blue
      year: "2023",
    },
  ];

  return (
    <div
      className="min-h-screen py-20 px-2 bg-[#f8f5f0]" // Premium warm paper background
      style={{ color: "var(--text)" }}
    >
      {/* Header (Earthy, Serif Theme - Consistent with other headers) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 max-w-6xl m-auto"
      >
        <div className="flex items-center justify-end gap-3 mb-3 md:mb-4">
          <span className="text-xs font-medium tracking-widest uppercase text-orange-600">
            Graphic Design
          </span>
          <span className="w-2 h-2 rounded-full bg-orange-600" />
        </div>
        <h2 className="text-4xl md:text-6xl text-end font-bold tracking-tight text-gray-900">
          Visual
          <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            {""} Stories
          </span>
        </h2>
      </motion.div>

      {/* Masonry / Waterfall Grid (No Swiper, just a beautiful scroll) */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 md:columns-3 gap-4 sm:gap-5 max-w-6xl mx-auto space-y-4 sm:space-y-5"
      >
        <AnimatePresence mode="popLayout">
          {graphicProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.02, y: -4 }} // Gentle float on hover
              transition={{ duration: 0.3 }}
              className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300 relative group"
              onClick={() => setSelectedProject(project)}
            >
              {/* High-res Art Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover block"
              />

              {/* Minimal Hover Overlay - Just a gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Minimal Details on Hover */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium tracking-wide drop-shadow-md">
                  {project.category}
                </p>
                <h3 className="text-white text-lg font-bold drop-shadow-md">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ==================== FULL-SCREEN LIGHTBOX MODAL ==================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              {/* Close Button (Top Right) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/20 backdrop-blur-sm"
              >
                <IoClose size={28} />
              </button>

              {/* The Artwork (Centered, 80% of screen) */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative"
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GraphicDesign;
