"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./portfolio.css";

interface Stat {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  categoryLabel: string;
  image: string;
  gradient: string;
  size: "tall" | "wide" | "normal";
  stats: Stat[];
  color: string;
  description: string;
  duration: string;
  region: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
  caseStats: Stat[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Eid Festive",
    client: "Rongdhonu Textiles",
    category: "social",
    categoryLabel: "Social Media",
    image: "/digital-marketing-portfolio/eid.webp",
    gradient: "linear-gradient(135deg, #e11d48 0%, #7f1d1d 100%)",
    size: "tall",
    stats: [
      { label: "ROI", value: "385%" },
      { label: "Reach", value: "1.8M" },
      { label: "Engagement", value: "7.4%" },
    ],
    color: "#e11d48",
    description:
      "Eid-ul-Fitr campaign for a Dhaka-based fashion label featuring local artisans and heritage jamdani weaves.",
    duration: "6 weeks",
    region: "Dhaka · Nationwide",
    services: ["Content", "Creator Ops", "Paid Social"],
    challenge:
      "Rongdhonu had spent 40 years building a reputation for authentic jamdani weaving, but their audience skewed 45+. Walk into any Dhanmondi boutique during Eid season and you'd find the same story: heritage labels treated as 'your mother's brand.' They needed to reach Gen-Z buyers without abandoning the craft story that made them who they are.",
    approach:
      "We built the campaign around the weavers themselves — not the clothes. Five-part Reels series filmed inside their Narayanganj workshop showing the 15-day loom process. Paired each reel with a Gen-Z creator styling the same saree three ways: office, wedding, casual. Ran paid amplification only on the top 20% performing organic reels, layered with Ramadan-time-daypart bidding.",
    outcome:
      "The workshop series crossed 1.8M reach in 6 weeks. Jamdani saree sell-through hit 94% before Eid week even started. More importantly, 62% of buyers were under 30 — a segment Rongdhonu had never cracked before. They've since made the creator-collab format a permanent part of their seasonal calendar.",
    caseStats: [
      { label: "Revenue", value: "৳4.2Cr" },
      { label: "ROAS", value: "385%" },
      { label: "New buyers <30", value: "62%" },
      { label: "Reels produced", value: "12" },
      { label: "Creator collabs", value: "8" },
      { label: "Sell-through", value: "94%" },
    ],
  },
  {
    id: 2,
    title: "Bangla Keywords",
    client: "Shohoj Pay",
    category: "seo",
    categoryLabel: "SEO",
    image: "/digital-marketing-portfolio/keyword.webp",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
    size: "wide",
    stats: [
      { label: "Traffic", value: "+312%" },
      { label: "Keywords", value: "145+" },
      { label: "Signups", value: "+228%" },
    ],
    color: "#2563eb",
    description:
      "Localized SEO strategy targeting Bangla search intent for a fintech startup across 8 divisions.",
    duration: "5 months",
    region: "8 Divisions",
    services: ["Technical SEO", "Content", "Localisation"],
    challenge:
      "Every fintech competitor in Bangladesh was fighting for the same 30 English keywords. Shohoj Pay had burned 8 months of content budget ranking #11–15 for terms like 'best mobile wallet BD' and getting nowhere. Meanwhile, their actual merchant signups were coming from shopkeepers searching in Bangla — and nobody was targeting them.",
    approach:
      "We killed the English content and rebuilt around 145 Bangla keyword clusters pulled from Google Keyword Planner, Ahrefs Bangla index, and — critically — real search queries from their existing merchant base. Mapped each cluster to a divisional landing page (Chattogram shopkeepers search differently than Sylhet ones). Fixed 240 technical issues: hreflang, canonical tags, Bangla URL slugs, page speed on 3G.",
    outcome:
      "Bangla organic traffic grew 312% over 5 months. 145 keywords now rank top-3, up from 4. Merchant signups from organic search grew 228% — and stayed there. Cost per acquisition from SEO dropped from ৳1,240 to ৳340, making it their cheapest channel by far. The Bangla-first playbook is now their default for every new product launch.",
    caseStats: [
      { label: "Organic traffic", value: "+312%" },
      { label: "Top-3 keywords", value: "145" },
      { label: "New signups", value: "+228%" },
      { label: "CPA drop", value: "-72%" },
      { label: "Pages rebuilt", value: "48" },
      { label: "Divisions covered", value: "8" },
    ],
  },
  {
    id: 3,
    title: "11.11 Blitz",
    client: "BazarBondhu",
    category: "ads",
    categoryLabel: "Paid Ads",
    image: "/digital-marketing-portfolio/bitz.webp",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
    size: "normal",
    stats: [
      { label: "ROAS", value: "6.2x" },
      { label: "Orders", value: "512K" },
      { label: "CTR", value: "4.3%" },
    ],
    color: "#7c3aed",
    description:
      "Multi-channel paid campaign with Facebook & Google Ads targeting Dhaka, Chattogram & Sylhet.",
    duration: "3 weeks",
    region: "Dhaka · CTG · Sylhet",
    services: ["Paid Search", "Paid Social", "CRO"],
    challenge:
      "11.11 is the Super Bowl of Bangladeshi e-commerce. BazarBondhu had 3 weeks and a fixed budget to compete against two platforms spending 10x more. Last year they'd blown 60% of budget in the first 48 hours on broad targeting and had nothing left for the actual sale day.",
    approach:
      "We front-loaded with lookalike seeding from last year's buyers — Meta Custom Audiences from CRM, plus Google Customer Match. Built three budget pools: 40% for pre-sale awareness, 45% for sale-day capture, 15% held back for real-time ROAS-based reallocation every 6 hours. City-level bid adjustments based on historical AOV (Dhaka 1.4x, Chattogram 1.1x, Sylhet 0.9x). Swapped all landing pages to a single-page PDP with 3-tap checkout.",
    outcome:
      "6.2x blended ROAS — nearly 2x their previous best. 512K orders shipped in the sale window. Real-time reallocation moved ৳38L from underperforming to top-performing campaigns mid-sale, which alone added an estimated 0.8x ROAS. CTR jumped to 4.3% on the back of tighter creative-audience matching. They ran the exact same playbook for 12.12 and hit 5.8x.",
    caseStats: [
      { label: "Blended ROAS", value: "6.2x" },
      { label: "Total orders", value: "512K" },
      { label: "Reallocated", value: "৳38L" },
      { label: "Best CTR", value: "4.3%" },
      { label: "Cities targeted", value: "3" },
      { label: "Sale-day uptime", value: "100%" },
    ],
  },
  {
    id: 4,
    title: "Donor Flow",
    client: "Alor Pathshala",
    category: "email",
    categoryLabel: "Email",
    image: "/digital-marketing-portfolio/doner-flow.webp",
    gradient: "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
    size: "tall",
    stats: [
      { label: "Open Rate", value: "41%" },
      { label: "Donations", value: "৳2.6Cr" },
      { label: "Click Rate", value: "11.8%" },
    ],
    color: "#059669",
    description:
      "Donor re-engagement automation for an education nonprofit reaching expat Bangladeshis worldwide.",
    duration: "4 months",
    region: "BD · Diaspora",
    services: ["Lifecycle", "Copy", "Automation"],
    challenge:
      "Alor Pathshala sponsors 12,000 students across rural Bangladesh, but 68% of monthly donors dropped off after their first gift. The diaspora market — Bangladeshis in NY, London, Toronto — gave 4x larger amounts than local donors but disengaged 3x faster because every email was written for a Dhaka audience: wrong currency, wrong timezone, wrong stories.",
    approach:
      "Split every donor into two tracks based on location signal. For BD donors: Bangla copy, ৳ amounts, local student stories, send times around prayer schedule. For diaspora: English copy, $ amounts, student-impact stories with named children and photos, send times aligned to US/UK morning. Built a 9-touch automation: thank-you → impact story → student update → soft ask → tax-receipt reminder → year-end recap. Every email tested subject line in both languages.",
    outcome:
      "Open rate climbed from 22% to 41% — diaspora opened at 54%. Donations raised in the 4-month window: ৳2.6Cr, with 71% coming from diaspora segment (previously 38%). Click rate hit 11.8%, and more importantly, donor churn dropped from 68% to 19%. The email automation now runs unattended and contributes ৳40L+ monthly in recurring gifts.",
    caseStats: [
      { label: "Open rate", value: "41%" },
      { label: "Raised", value: "৳2.6Cr" },
      { label: "Diaspora share", value: "71%" },
      { label: "Churn drop", value: "-49pts" },
      { label: "Emails automated", value: "9" },
      { label: "Languages", value: "2" },
    ],
  },
  {
    id: 5,
    title: "Iftar Reels",
    client: "Ranna Ghor",
    category: "social",
    categoryLabel: "Social Media",
    image: "/digital-marketing-portfolio/iftar-reels.webp",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #92400e 100%)",
    size: "normal",
    stats: [
      { label: "Reach", value: "4.4M" },
      { label: "Shares", value: "98K" },
      { label: "Orders", value: "+285%" },
    ],
    color: "#f59e0b",
    description:
      "Ramadan iftar content series with viral recipe reels and hyper-local Dhaka foodie targeting.",
    duration: "5 weeks",
    region: "Dhaka Metro",
    services: ["Content", "Community", "Paid Social"],
    challenge:
      "Ranna Ghor sells spice blends and ready-to-cook kits, but the founder had no studio, no videographer, no budget for either. Ramadan was 5 weeks away — the single most important month for a food brand in Bangladesh — and they were about to sit it out because 'we can't compete with the big recipe channels.'",
    approach:
      "We shot the entire series on the founder's phone, in his actual kitchen, in under 3 days. 28 recipe reels, 45 seconds each, all filmed against the same window light. Every reel ended with the 6pm iftar countdown as a hook. Posted daily at 3pm (peak scroll before iftar). The paid strategy was surgical: ৳15K total, spent only on reels that hit 100K organic views in first 6 hours, targeting Dhaka Metro food-interest audiences only.",
    outcome:
      "4.4M total reach across the series. Three reels crossed 500K views organically. 98K shares — the highest of any Bangladeshi food brand that Ramadan. Orders jumped 285% during the month, and Ranna Ghor sold out their entire ready-to-cook inventory twice. Total production cost: under ৳8K. They now produce weekly reels in the same format and hire zero production crew.",
    caseStats: [
      { label: "Total reach", value: "4.4M" },
      { label: "Shares", value: "98K" },
      { label: "Order lift", value: "+285%" },
      { label: "Reels produced", value: "28" },
      { label: "Ad spend", value: "৳15K" },
      { label: "Production cost", value: "৳8K" },
    ],
  },
  {
    id: 6,
    title: "Broadband PPC",
    client: "Shobdo Net",
    category: "ads",
    categoryLabel: "Paid Ads",
    image: "/digital-marketing-portfolio/ppc.webp",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)",
    size: "normal",
    stats: [
      { label: "CPC", value: "-58%" },
      { label: "Conv Rate", value: "6.1%" },
      { label: "Revenue", value: "৳8.7Cr" },
    ],
    color: "#8b5cf6",
    description:
      "Google Ads campaign for broadband packages with Bangla ad copy and CRO-driven landing pages.",
    duration: "3 months",
    region: "Chattogram",
    services: ["Paid Search", "Landing", "CRO"],
    challenge:
      "Shobdo Net is a regional ISP in Chattogram — good product, loyal customer base, but they were losing every new signup battle to national telcos. Their Google Ads were bidding on English keywords like 'broadband packages Chattogram' at ৳42 CPC with 1.2% conversion. Total CAC was ৳3,400 against a first-year customer value of ৳2,800. They were losing money on every acquisition.",
    approach:
      "We scrapped the English keywords entirely and rebuilt around Bangla intent queries — 'ইন্টারনেট সংযোগ চিটাগুঙ', 'ব্রডব্যান্ড প্যাকেজ', the phrases actual Chattogram residents type into Google. Rewrote every ad in Bangla, showing price in ৳ with no asterisks. Then we killed their 6-page brochure site and replaced it with a single landing page: one field for phone number, instant coverage check, price revealed on response. No forms, no dropdowns, no friction.",
    outcome:
      "CPC dropped from ৳42 to ৳17.60 — a 58% reduction. Conversion rate jumped from 1.2% to 6.1% on the strength of the Bangla copy and single-field landing page. ৳8.7Cr in new subscriber revenue over 3 months. CAC fell to ৳890, comfortably below first-year value. Shobdo Net now runs the same playbook across three other divisions and has become the fastest-growing regional ISP in Chattogram.",
    caseStats: [
      { label: "CPC reduction", value: "-58%" },
      { label: "Conv rate", value: "6.1%" },
      { label: "Revenue added", value: "৳8.7Cr" },
      { label: "New CAC", value: "৳890" },
      { label: "Landing pages", value: "1" },
      { label: "Bangla keywords", value: "84" },
    ],
  },
];

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-right mb-8 md:mb-12 pt-10 md:pt-16"
  >
    <div className="flex items-center justify-end gap-3 mb-3 md:mb-4">
      <span className="text-xs font-medium tracking-widest uppercase header-label">
        Digital Marketing
      </span>
      <span className="w-2 h-2 rounded-full header-dot" />
    </div>
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
      Campaign
      <span className="header-gradient"> Portfolio</span>
    </h2>
  </motion.div>
);

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      onClick={() => onOpen(project)}
      className="group relative text-left w-full rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
      style={{
        background: "#0d0d0d",
        border: "1px solid #1c1c1c",
      }}
    >
      <div className="relative h-40 sm:h-44 shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)`,
          }}
        />

        <span className="absolute top-3 left-3 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20">
          {project.categoryLabel}
        </span>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-[10px] tracking-[0.18em] uppercase text-white/70 mb-1">
            {project.client}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <p className="text-[12.5px] sm:text-[13px] text-neutral-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.stats.map((m, i) => (
            <div
              key={i}
              className="rounded-lg px-2 py-2 text-center"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}25`,
              }}
            >
              <div
                className="text-sm sm:text-base font-bold tabular-nums leading-tight"
                style={{ color: project.color }}
              >
                {m.value}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-neutral-500 mt-0.5 truncate">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-3 border-t border-neutral-900 flex items-center justify-center">
          <span
            className="text-[11px] font-semibold flex items-center gap-1 transition-transform group-hover:translate-x-0.5"
            style={{ color: project.color }}
          >
            Read case study
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6H10M10 6L6 2M10 6L6 10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 0 1.5px ${project.color}66` }}
      />
    </motion.button>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className=" fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ background: "rgba(4,4,4,0.85)", backdropFilter: "blur(10px)" }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-2xl max-h-[94vh] sm:max-h-[92vh] overflow-y-auto no-scrollbar rounded-t-3xl sm:rounded-3xl"
        style={{ background: "#0b0b0b", border: "1px solid #1f1f1f" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl bg-black/50 hover:bg-black/75 border border-white/20 backdrop-blur-md transition"
        >
          ×
        </button>

        <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)`,
            }}
          />
          <div className="absolute bottom-5 left-5 right-5">
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/80 mb-1.5">
              {project.categoryLabel}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {project.title}
            </h2>
            <div className="text-sm text-white/85 mt-1">{project.client}</div>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <div className="grid grid-cols-2 gap-3 pb-5 mb-5 border-b border-neutral-900">
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500 mb-1">
                Duration
              </div>
              <div className="text-sm text-white font-semibold">
                {project.duration}
              </div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-500 mb-1">
                Region
              </div>
              <div className="text-sm text-white font-semibold">
                {project.region}
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-7">
            {project.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-3 text-center"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                <div
                  className="text-lg sm:text-xl font-bold tabular-nums"
                  style={{ color: project.color }}
                >
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-5 mb-7">
            {[
              { title: "The Challenge", body: project.challenge },
              { title: "Our Approach", body: project.approach },
              { title: "The Outcome", body: project.outcome },
            ].map((sec) => (
              <div
                key={sec.title}
                className="rounded-xl p-4"
                style={{
                  background: "#101010",
                  borderLeft: `3px solid ${project.color}`,
                }}
              >
                <div
                  className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2"
                  style={{ color: project.color }}
                >
                  {sec.title}
                </div>
                <p className="text-[13.5px] text-neutral-300 leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-7">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-3">
              Scope of Work
            </div>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="text-[11px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-neutral-800 text-neutral-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500 mb-3">
              Full Numbers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {project.caseStats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3 border"
                  style={{
                    borderColor: `${project.color}25`,
                    background: `${project.color}08`,
                  }}
                >
                  <div
                    className="text-base sm:text-lg font-bold tabular-nums"
                    style={{ color: project.color }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function DigitalMarketing() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen pb-20 px-2 text-white">
      <div className="relative max-w-6xl mx-auto">
        <Header />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </div>
  );
}
