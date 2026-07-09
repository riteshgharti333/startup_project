"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoPlay } from "react-icons/io5";

// TypeScript Interfaces
interface VideoProject {
  id: number;
  title: string;
  client: string;
  duration: string;
  thumbnail: string; // Static image (Instant load)
  videoPreview: string; // Looping MP4 (Loaded on hover)
  videoFull: string; // Full MP4 with sound (Loaded on click)
  tools: string[];
  category: string;
  color: string;
  aspect: "tall" | "wide" | "square"; // New property for different shapes
}

const VideoPortfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const videoProjects: VideoProject[] = [
    // 1. TALL (9:16) - TikTok / Instagram Reel style
    {
      id: 1,
      title: "Neon Dreams",
      client: "CyberPunk 2077 Promo",
      duration: "0:45",
      thumbnail:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["Premiere Pro", "After Effects"],
      category: "Commercial",
      color: "#fbbf24",
      aspect: "tall",
    },
    // 2. WIDE (16:9) - Cinematic Movie Trailer style
    {
      id: 2,
      title: "Soul of the City",
      client: "National Geographic",
      duration: "3:20",
      thumbnail:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["DaVinci Resolve", "Fusion"],
      category: "Documentary",
      color: "#d97706",
      aspect: "wide",
    },
    // 3. SQUARE (1:1) - YouTube Shorts / Album Art style
    {
      id: 3,
      title: "Motion Magic",
      client: "Adobe Creative Cloud",
      duration: "0:55",
      thumbnail:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["After Effects", "Cinema 4D"],
      category: "Motion Graphics",
      color: "#fbbf24",
      aspect: "square",
    },
    // 4. WIDE (16:9) - Promo Video
    {
      id: 4,
      title: "Oceanic Wonders",
      client: "WWF",
      duration: "5:00",
      thumbnail:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["Premiere Pro", "After Effects"],
      category: "Documentary",
      color: "#d97706",
      aspect: "wide",
    },
    // 5. TALL (9:16) - Fashion Reel
    {
      id: 5,
      title: "City Lights",
      client: "Travel Agency",
      duration: "1:15",
      thumbnail:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["Premiere Pro", "After Effects"],
      category: "Promo",
      color: "#fbbf24",
      aspect: "tall",
    },
    // 6. SQUARE (1:1) - Abstract Art
    {
      id: 6,
      title: "Abstract Motion",
      client: "Art Gallery",
      duration: "1:30",
      thumbnail:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["After Effects", "Cinema 4D"],
      category: "Motion Graphics",
      color: "#d97706",
      aspect: "square",
    },
    // 7. TALL (9:16) - Tutorial Reel
    {
      id: 7,
      title: "Editing Secrets",
      client: "YouTube Channel",
      duration: "0:30",
      thumbnail:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["Premiere Pro", "After Effects"],
      category: "Tutorial",
      color: "#fbbf24",
      aspect: "tall",
    },
    {
      id: 5,
      title: "City Lights",
      client: "Travel Agency",
      duration: "1:15",
      thumbnail:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
      videoPreview: "https://www.w3schools.com/html/mov_bbb.mp4",
      videoFull: "https://www.w3schools.com/html/mov_bbb.mp4",
      tools: ["Premiere Pro", "After Effects"],
      category: "Promo",
      color: "#fbbf24",
      aspect: "tall",
    },
  ];

  // Helper to determine aspect ratio classes based on the property
  const getAspectClass = (aspect: "tall" | "wide" | "square") => {
    switch (aspect) {
      case "tall":
        return "aspect-[9/16]"; // Tall TikTok style
      case "wide":
        return "aspect-[16/9]"; // Wide Cinema style
      case "square":
        return "aspect-[1/1]"; // Perfect Square
      default:
        return "aspect-[9/16]";
    }
  };

  return (
    <div className="min-h-screen pb-20 px-2">
      {/* Header (Cinematic Gold Theme) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 max-w-6xl m-auto"
      >
        <div className="flex items-center justify-end gap-3 mb-3 md:mb-4">
          <span className="text-xs font-medium tracking-widest uppercase">
            Video Editing
          </span>
          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
        </div>
        <h2 className="text-4xl text-end md:text-6xl font-bold tracking-tight text-white">
          Cinematic
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            {""} Editing
          </span>
        </h2>
      </motion.div>

      {/* PINTEREST / WATERFALL GRID (Mixed Aspect Ratios) */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto space-y-4"
      >
        <AnimatePresence mode="popLayout">
          {videoProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer relative group bg-gray-800 shadow-lg"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedVideo(project)}
            >
              {/* 
                 HYBRID STRATEGY:
                 1. Show Static Image (Instant Load)
                 2. On Hover, swap Image for Looping Video (Preview)
              */}
              <div
                className={`relative w-full ${getAspectClass(project.aspect)} overflow-hidden`}
              >
                {/* STATIC THUMBNAIL (Shown by default) */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* LOOPING VIDEO PREVIEW (Shown on hover) */}
                {hoveredId === project.id && (
                  <video
                    src={project.videoPreview}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Minimal Play Icon (Subtle, hints it's a video) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <IoPlay className="text-white ml-1" size={20} />
                  </div>
                </div>

                {/* Text Overlay (Bottom Left) */}
                <div className="absolute bottom-0 left-0 p-4 w-full z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[10px] font-medium tracking-wider uppercase"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[10px] text-gray-400">•</span>
                    <span className="text-[10px] text-gray-400">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300">{project.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ==================== FULL CINEMA MODAL ==================== */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[95vw] max-w-6xl rounded-2xl overflow-hidden  shadow-2xl"
              style={{ borderColor: `${selectedVideo.color}40` }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-1 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 border border-white/10"
              >
                <IoClose size={24} />
              </button>
              {/* FULL VIDEO PLAYER (With Sound) */}
              <div className="relative w-full max-w-5xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <video
                  src={selectedVideo.videoFull}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoPortfolio;
