export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
  overview: string;
  features: string[];
  impact: string;
}

export const webProjects: ProjectDetail[] = [
  {
    id: 1,
    title: "MediCare",
    category: "Healthcare Platform",
    image: "/portfolio_image/web2.webp",
    description:
      "A scalable hospital management system with secure role-based access and real-time data management",
    color: "#059669",
    overview:
      "A comprehensive hospital management platform designed to streamline healthcare workflows. The system enables secure role-based access for doctors, nurses, and staff, with real-time data synchronization, advanced search, and interactive dashboards for tracking patient trends and department performance.",
    features: [
      "Centralized patient and appointment management with role-based access control",
      "Advanced search and filtering across medical records",
      "Real-time data synchronization with automatic updates",
      "Dynamic data tables for large datasets",
      "Interactive visualizations for analyzing patient trends and department metrics",
    ],
    impact:
      "Streamlined daily operations by centralizing patient records, appointments, and billing. Reduced manual data entry errors through validated inputs. Enabled faster decision-making with real-time analytics dashboards. Ensured data security with role-based permissions, giving staff appropriate access levels across departments.",
  },
  {
    id: 2,
    title: "International Academy of Design",
    category: "Educational Platform",
    image: "/portfolio_image/web1.webp",
    description:
      "A full-stack college website with dynamic content management and automated certificate generation",
    color: "#7c3aed",
    overview:
      "A full-stack college website enabling non-technical staff to manage over 90% of site content through a secure admin dashboard. Features automated certificate and marksheet generation, drag-and-drop content ordering, and image optimization — transforming the institution's digital presence into a modern, self-manageable platform.",
    features: [
      "Dynamic content management for banners, departments, and staff details without coding",
      "Automated certificate generation by student enrollment ID",
      "Marksheet creation with instant preview and download",
      "Drag-and-drop ordering for staff and gallery sections",
      "Automated form confirmations via email",
      "SEO-friendly dynamic routing and sitemaps",
    ],
    impact:
      "Scaled to handle 1000+ student records with certificates, marksheets, and form submissions. Empowered non-technical staff to independently manage 90% of website content. Improved student experience with instant online access to academic documents. Boosted online visibility with optimized SEO and clean URLs.",
  },
  {
    id: 3,
    title: "Star Marketing",
    category: "Digital Agency Platform",
    image: "/portfolio_image/web3.webp",
    description:
      "A full-stack digital agency platform offering marketing, development, and design services",
    color: "#0061f3",
    overview:
      "A full-stack digital agency platform offering professional services in marketing, web development, and UI/UX design. Includes a secure admin dashboard for managing dynamic content like services, reviews, and brand assets. Built with performance and clean design to elevate the agency's digital presence and client engagement.",
    features: [
      "Dynamic admin dashboard for managing services, reviews, and brand content in real-time",
      "Dedicated service pages for marketing, development, and design solutions",
      "Automated lead capture with email notifications",
      "Advanced content management with sorting and filtering",
      "Image optimization for fast loading",
      "SEO-optimized with 30+ sitemaps",
    ],
    impact:
      "Boosted organic traffic through advanced SEO strategy achieving top Lighthouse scores. Streamlined service discovery with dedicated pages converting traffic into leads. Enabled non-technical clients to manage all content independently. Enhanced brand credibility with a professional, secure, and fast-loading platform.",
  },
];

export interface AppProject {
  id: number;
  title: string;
  category: string;
  platform: string;
  image: string;
  gallery: string[];
  description: string;
  color: string;
  overview: string;
  features: string[];
  impact: string;
  downloadLink?: string;
}

export const appProjects: AppProject[] = [
  {
    id: 1,
    title: "NutriPlan",
    category: "Health & Nutrition",
    platform: "Cross-Platform",
    image: "/app_image/nutri2.webp",
    gallery: [
      "/app_image/nutri1.webp",
      "/app_image/nutri3.webp",
      "/app_image/nutri4.webp",
      "/app_image/nutri5.webp",
    ],
    description:
      "AI-powered meal planning app with personalized nutrition tracking and grocery integration",
    color: "#22c55e",
    overview:
      "A cross-platform mobile application that helps users plan meals, track nutrition, and manage grocery lists — all in one place. The app uses AI to generate personalized meal plans based on dietary preferences, health goals, and calorie targets. Integrated with local grocery delivery services for seamless shopping.",
    features: [
      "AI-powered meal recommendations based on dietary preferences and health goals",
      "Barcode scanner for instant nutrition facts and food logging",
      "Weekly meal planner with automatic grocery list generation",
      "Calorie and macro tracking with daily/weekly progress charts",
      "Integration with local grocery delivery partners for one-tap ordering",
      "Custom recipe creation with nutrition auto-calculation",
      "Water intake and supplement reminders",
      "Dark mode and accessibility support",
    ],
    impact:
      "Helped 500+ users achieve their health goals through personalized meal planning. Reduced meal prep time by 40% with automated grocery lists. Improved dietary adherence with smart reminders and progress tracking. 4.7 star rating on both App Store and Google Play.",
  },
  {
    id: 2,
    title: "RideMate",
    category: "Transportation",
    platform: "Cross-Platform",
    image: "/app_image/ride1.webp",
    gallery: [
      "/app_image/ride2.webp",
      "/app_image/ride3.webp",
      "/app_image/ride4.webp",
    ],
    description:
      "Carpooling and ride-sharing app connecting commuters on similar routes for cost-effective travel",
    color: "#f97316",
    overview:
      "A community-driven carpooling platform that connects commuters traveling on similar routes. Users can offer or book rides, split fuel costs, and reduce their carbon footprint. Features real-time GPS tracking, in-app messaging, and verified user profiles for safety.",
    features: [
      "Smart route matching connecting riders and drivers on similar daily commutes",
      "Real-time GPS tracking for live ride monitoring",
      "In-app messaging and calling without sharing personal numbers",
      "Verified user profiles with ID verification and ratings system",
      "Automated cost splitting based on distance and fuel prices",
      "Scheduled and recurring rides for daily office commuters",
      "Emergency SOS button with real-time location sharing",
      "Carbon footprint tracker showing environmental impact savings",
    ],
    impact:
      "Connected 2,000+ verified users across 3 cities. Reduced average daily commute costs by 60%. Saved an estimated 15 tons of CO2 emissions through shared rides. Maintained a 4.8 safety rating with zero security incidents.",
  },
  {
    id: 3,
    title: "StudySphere",
    category: "Education",
    platform: "iOS & Android",
    image: "/app_image/study5.webp",
    gallery: [
      "/app_image/study1.webp",
      "/app_image/study2.webp",
      "/app_image/study3.webp",
      "/app_image/study4.webp",
    ],
    description:
      "Collaborative learning platform with flashcards, quizzes, and study groups for students",
    color: "#8b5cf6",
    overview:
      "A collaborative learning app designed for students to create, share, and study with digital flashcards and interactive quizzes. Features AI-generated study plans, group study rooms, and progress analytics to help students prepare effectively for exams.",
    features: [
      "AI-generated flashcards from uploaded notes and textbooks",
      "Interactive quizzes with multiple formats (MCQ, true/false, matching)",
      "Virtual study rooms for real-time group learning sessions",
      "Personalized study plans based on exam dates and syllabus coverage",
      "Progress tracking with detailed analytics and weak area identification",
      "Offline mode for studying without internet connection",
      "Community-driven flashcard library with 50,000+ shared decks",
      "Pomodoro timer with focus statistics and break reminders",
    ],
    impact:
      "Used by 3,000+ students across 15 universities. Improved average test scores by 35%. Reduced study time by 25% with AI-optimized learning paths. Featured in top 10 educational apps during exam seasons.",
  },
];

export interface AIProject {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
  targetAudience: string;
  techPillars: string[];
  metric: string;
  overview: string;
  keyCapabilities: string[];
  results: string;
}

export const aiProjects: AIProject[] = [
  {
    id: 1,
    title: "DocuMind AI",
    category: "Document Intelligence",
    image: "/portfolio_image/ai1.webp",
    description:
      "AI-powered document analysis tool that extracts, summarizes, and organizes key information from contracts and reports",
    color: "#06b6d4",
    targetAudience: "Legal Firms & Corporate Teams",
    techPillars: ["GPT-4", "Vector Embeddings", "OCR Pipeline"],
    metric: "10,000+ Documents Processed",
    overview:
      "An intelligent document processing platform that helps legal and corporate teams extract key insights from complex documents. The AI analyzes contracts, reports, and agreements to identify critical clauses, deadlines, and obligations — reducing manual review time from hours to minutes.",
    keyCapabilities: [
      "Automated clause extraction and risk identification from legal documents",
      "Smart summarization generating executive briefs from lengthy reports",
      "Multi-format support for PDFs, scanned images, and Word documents",
      "Natural language search across entire document libraries",
      "Version comparison highlighting changes between revisions",
    ],
    results:
      "Reduced contract review time by 70% for legal teams. Processed 10,000+ documents with 98% accuracy. Saved an average of 15 hours per week per team member.",
  },
  {
    id: 2,
    title: "VoiceSense AI",
    category: "Voice Analytics",
    image: "/portfolio_image/ai3.webp",
    description:
      "Real-time voice analysis AI that transcribes, analyzes sentiment, and extracts actionable insights from customer calls",
    color: "#8b5cf6",
    targetAudience: "Call Centers & Support Teams",
    techPillars: ["Whisper API", "Sentiment Analysis", "Real-time Streaming"],
    metric: "50,000+ Calls Analyzed",
    overview:
      "A voice intelligence platform that transcribes customer calls in real-time while analyzing sentiment, detecting keywords, and flagging compliance risks. Helps support teams improve quality, coach agents, and identify customer churn signals early.",
    keyCapabilities: [
      "Real-time call transcription with speaker diarization",
      "Sentiment analysis tracking customer emotions throughout calls",
      "Automated compliance flagging for regulated industries",
      "Keyword detection and trend analysis across call volumes",
      "Agent performance scoring with actionable coaching insights",
    ],
    results:
      "Improved customer satisfaction scores by 25%. Reduced compliance violations by 40%. Identified churn risk in 85% of cases before cancellation. Decreased average handle time by 20%.",
  },
  {
    id: 3,
    title: "ContentForge AI",
    category: "Content Generation",
    image: "/portfolio_image/ai2.webp",
    description:
      "AI content engine that generates blog posts, social media content, and email campaigns tailored to brand voice",
    color: "#f59e0b",
    targetAudience: "Marketing Teams & Agencies",
    techPillars: ["Claude API", "Brand Voice Training", "Multi-channel Output"],
    metric: "5,000+ Pieces Generated",
    overview:
      "A brand-aware content generation platform that learns your company's voice, style, and guidelines to produce consistent content across all channels. From long-form blog posts to Twitter threads and email sequences — all maintaining a unified brand identity.",
    keyCapabilities: [
      "Brand voice training on existing content for consistent output",
      "Multi-format generation for blogs, social media, and emails",
      "SEO optimization with keyword integration and readability scoring",
      "Content calendar planning with AI-suggested topics",
      "Team collaboration with approval workflows and version history",
    ],
    results:
      "Generated 5,000+ pieces of content across 12 brands. Reduced content creation time by 60%. Improved organic traffic by 45% through SEO-optimized articles. Maintained 95% brand voice consistency score.",
  },
];
