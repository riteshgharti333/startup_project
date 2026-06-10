export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Web Development",
        href: "/services/web-development",
      },
      {
        label: "AI Solutions",
        href: "/services/ai-solutions",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        label: "Graphic Design",
        href: "/services/graphic-design",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services/cloud-infrastructure",
      },
      {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        label: "Consulting & Training",
        href: "/services/consulting-training",
      },
    ],
  },
  //   {
  //     label: "Portfolio",
  //     href: "/portfolio",
  //   },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "About",
    href: "/about",
  },
  //   {
  //     label: "Blog",
  //     href: "/blog",
  //   },
  {
    label: "Contact",
    href: "/contact",
  },
];

import {
  FiCpu,
  FiCode,
  FiCloud,
  FiTrendingUp,
  FiUsers,
  FiSmartphone,
  FiPenTool,
} from "react-icons/fi";

export const mainServices = [
  {
    icon: FiCode,
    title: "Web Development",
    description: "Custom websites & web applications built for performance",
    startingPrice: "৳3,000",
    link: "/services/web-development",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500 to-cyan-500",
    stats: "500+ Projects",
  },
  {
    icon: FiCpu,
    title: "AI Solutions",
    description: "Intelligent automation & machine learning integration",
    startingPrice: "৳12,000",
    link: "/services/ai-solutions",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
    stats: "98% Accuracy",
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Native & cross-platform mobile applications",
    startingPrice: "৳5,000",
    link: "/services/mobile-app-development",
    gradient: "from-orange-500/20 to-red-500/20",
    borderGradient: "from-orange-500 to-red-500",
    stats: "50+ Apps",
  },
  {
    icon: FiCloud,
    title: "Cloud & Infrastructure",
    description: "Scalable cloud solutions & DevOps services",
    startingPrice: "৳2,000",
    link: "/services/cloud-infrastructure",
    gradient: "from-teal-500/20 to-green-500/20",
    borderGradient: "from-teal-500 to-green-500",
    stats: "99.9% Uptime",
  },
    {
    icon: FiPenTool,
    title: "Graphic Design",
    description: "Stunning visuals & brand identity design",
    startingPrice: "৳2,000",
    link: "/services/graphic-design",
    gradient: "from-pink-500/20 to-rose-500/20",
    borderGradient: "from-pink-500 to-rose-500",
    stats: "Unlimited Revisions",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies for growth",
    startingPrice: "৳5,000",
    link: "/services/digital-marketing",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderGradient: "from-yellow-500 to-orange-500",
    stats: "3x ROI",
  },
  {
    icon: FiUsers,
    title: "Consulting & Training",
    description: "Expert guidance & team development programs",
    startingPrice: "৳2,000/hr",
    link: "/services/consulting-training",
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderGradient: "from-indigo-500 to-blue-500",
    stats: "100+ Sessions",
  },

];
