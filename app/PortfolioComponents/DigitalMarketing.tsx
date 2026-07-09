"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./portfolio.css";

interface Stat {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  size: "tall" | "wide" | "normal";
  stats: Stat[];
  color: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "StyleVibe",
    category: "social",
    categoryLabel: "Social Media",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80",
    size: "tall",
    stats: [
      { label: "ROI", value: "420%" },
      { label: "Impressions", value: "2.4M" },
      { label: "Engagement", value: "8.2%" },
    ],
    color: "#e11d48",
    description:
      "Instagram & TikTok campaign for fashion brand launch with influencer partnerships.",
  },
  {
    id: 2,
    title: "TechFlow SEO",
    category: "seo",
    categoryLabel: "SEO",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    size: "wide",
    stats: [
      { label: "Traffic", value: "+340%" },
      { label: "Keywords", value: "150+" },
      { label: "Leads", value: "+180%" },
    ],
    color: "#2563eb",
    description:
      "Comprehensive SEO strategy that transformed organic visibility for B2B SaaS.",
  },
  {
    id: 3,
    title: "FitGenius Ads",
    category: "ads",
    categoryLabel: "Paid Ads",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    size: "normal",
    stats: [
      { label: "ROAS", value: "5.2x" },
      { label: "Installs", value: "250K+" },
      { label: "CTR", value: "3.8%" },
    ],
    color: "#7c3aed",
    description:
      "Multi-channel paid campaign with lookalike audiences and retargeting.",
  },
  {
    id: 4,
    title: "CloudServe",
    category: "email",
    categoryLabel: "Email",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
    size: "tall",
    stats: [
      { label: "Open Rate", value: "42%" },
      { label: "Revenue", value: "+$1.2M" },
      { label: "Click Rate", value: "12.5%" },
    ],
    color: "#059669",
    description:
      "Rebrand email sequence re-engaging dormant users with behavioral triggers.",
  },
  {
    id: 5,
    title: "GreenEats Social",
    category: "social",
    categoryLabel: "Social Media",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    size: "normal",
    stats: [
      { label: "Reach", value: "5.1M" },
      { label: "Shares", value: "120K" },
      { label: "Sales", value: "+320%" },
    ],
    color: "#f59e0b",
    description:
      "Viral food brand campaign with recipe content and community building.",
  },
  {
    id: 6,
    title: "DataViz PPC",
    category: "ads",
    categoryLabel: "Paid Ads",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    size: "normal",
    stats: [
      { label: "CPC", value: "-60%" },
      { label: "Conv Rate", value: "6.2%" },
      { label: "Revenue", value: "+$850K" },
    ],
    color: "#8b5cf6",
    description:
      "Google Ads campaign with smart bidding and conversion optimization.",
  },
];

const SIZE_CLASSES = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  normal: "md:row-span-1",
};

// ==================== TYPES ====================
interface ProjectStats {
  label: string;
  value: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// ==================== COMPONENTS ====================
const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-right mb-8 md:mb-12"
  >
    <div className="flex items-center justify-end gap-3 mb-3 md:mb-4">
      <span className="text-xs font-medium tracking-widest uppercase header-label">
        Digital Marketing
      </span>
      <span className="w-2 h-2 rounded-full header-dot" />
    </div>
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
      Campaign
      <span className="header-gradient"> Portfolio</span>
    </h2>
  </motion.div>
);

const ProjectCard = ({
  project,
  isHovered,
  onHover,
  onLeave,
  onClick,
}: {
  project: Project;
  isHovered: boolean;
  onHover: (id: number) => void;
  onLeave: () => void;
  onClick: (project: Project) => void;
}) => {
  const isWide = project.size === "wide";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group card-base ${SIZE_CLASSES[project.size]}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
      onClick={() => onClick(project)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        className="absolute inset-0 transition-opacity duration-300 card-overlay-bg"
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        <div className="absolute bottom-0 left-0 right-0 card-overlay-padding">
          <span
            className="font-semibold tracking-wider uppercase mb-1 block card-category-text"
            style={{ color: project.color }}
          >
            {project.categoryLabel}
          </span>
          <h3 className="font-bold text-white card-title-text">
            {project.title}
          </h3>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 flex items-center justify-center text-center hover-padding"
        style={{
          background: `${project.color}E6`,
          flexDirection: isWide ? "row" : "column",
        }}
      >
        <div
          style={{
            flex: isWide ? 1 : "none",
            textAlign: isWide ? "left" : "center",
            paddingRight: isWide ? "clamp(16px, 3vw, 36px)" : "0",
          }}
        >
          <span className="font-semibold tracking-wider uppercase text-white/80 block hover-category-text">
            {project.categoryLabel}
          </span>
          <h3 className="font-bold text-white hover-title-text">
            {project.title}
          </h3>
          {project.size !== "normal" && (
            <p
              className="text-white/80 leading-relaxed hover-desc-text"
              style={{ maxWidth: isWide ? "340px" : "260px" }}
            >
              {project.description}
            </p>
          )}
        </div>

        <div
          style={{
            flex: isWide ? "0 0 auto" : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isWide ? "clamp(8px,1.5vw,14px)" : "0",
          }}
        >
          <div
            className={`grid grid-cols-3 w-full stats-gap ${isWide ? "" : "stats-margin"}`}
          >
            {project.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-lg bg-white/10 backdrop-blur-sm stat-box-padding"
              >
                <div className="font-bold text-white stat-value-text">
                  {stat.value}
                </div>
                <div className="text-white/70 mt-0.5 stat-label-text">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <button className="rounded-full font-semibold bg-white text-gray-900 whitespace-nowrap view-btn-padding view-btn-text">
            View Case Study →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay-bg"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="max-w-lg w-full rounded-2xl overflow-hidden modal-bg"
      style={{ border: `1px solid ${project.color}40` }}
    >
      <div className="relative">
        <img
          src={project.image}
          alt=""
          className="w-full h-48 md:h-56 object-cover"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg modal-close-bg"
        >
          ×
        </button>
      </div>
      <div className="p-4 sm:p-6">
        <span
          className="text-xs tracking-wider uppercase mb-2 block"
          style={{ color: project.color }}
        >
          {project.categoryLabel}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm mb-5 modal-desc">{project.description}</p>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
          {project.stats.map((stat, i) => (
            <div
              key={i}
              className="p-2 sm:p-3 rounded-xl text-center modal-stat-bg"
            >
              <div
                className="text-lg sm:text-xl font-bold"
                style={{ color: project.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs modal-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          className="w-full py-3 rounded-full font-semibold text-white text-sm"
          style={{ background: project.color }}
        >
          View Full Case Study →
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

// ==================== MAIN ====================
const DigitalMarketing = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-6xl mx-auto  min-h-screen pb-20 px-2 md:px-6 page-bg">
      <Header />

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[minmax(200px,auto)]"
      >
        <AnimatePresence mode="popLayout">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHover={(id) => setHoveredId(id)}
              onLeave={() => setHoveredId(null)}
              onClick={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalMarketing;
