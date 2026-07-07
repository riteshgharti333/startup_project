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
        label: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        label: "Graphic Design",
        href: "/services/graphic-design",
      },

      { label: "Video Editing", href: "/services/video-editing" },
      {
        label: "Consulting & Training",
        href: "/services/consulting-training",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services/cloud-infrastructure",
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

export const footerLinks = [
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
        label: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        label: "Graphic Design",
        href: "/services/graphic-design",
      },
      {
        label: "Consulting & Training",
        href: "/services/consulting-training",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services/cloud-infrastructure",
      },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Career",
    href: "/career",
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
  FiVideo,
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
    icon: FiTrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies for growth",
    startingPrice: "৳8,000",
    link: "/services/digital-marketing",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderGradient: "from-yellow-500 to-orange-500",
    stats: "3x ROI",
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
    icon: FiVideo,
    title: "Video Editing",
    description:
      "Professional video editing for social media, YouTube & brands",
    startingPrice: "৳2,500",
    link: "/services/video-editing",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    borderGradient: "from-violet-500 to-fuchsia-500",
    stats: "Fast Delivery",
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
];

/////////////

export const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Consulting & Training", href: "/services/consulting-training" },
  { label: "Video Editing", href: "/services/video-editing" },
];

export const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using any services provided by Twipra Technology ("Company," "we," "us," or "our"), you ("Client," "you," or "your") agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must not use our services.

These Terms constitute a legally binding agreement between you and Twipra Technology. By engaging our services, making a payment, or signing a proposal, you acknowledge that you have read, understood, and agree to be bound by these Terms.`,
  },
  {
    id: "responsibilities",
    title: "3. Client Responsibilities",
    content: `To ensure successful project delivery, you agree to:
- Provide accurate and complete information necessary for project execution
- Deliver required content, materials, and assets within agreed timelines
- Review deliverables and provide timely feedback
- Maintain open communication throughout the project duration
- Ensure you have necessary rights for any materials provided to us
- Designate a point of contact for project communications

Delays caused by late client responses or missing materials may result in adjusted project timelines. We are not responsible for delays resulting from client inaction.`,
  },
  {
    id: "scope",
    title: "4. Project Scope and Changes",
    content: `The project scope is defined in the initial proposal, agreement, or statement of work. Any changes or additions to the agreed scope will be treated as change requests.

Change requests are subject to:
- Review and approval by both parties
- Revised timeline estimates
- Additional costs where applicable
- Written confirmation before implementation

Minor revisions within the original scope are typically included. Significant feature additions or redesigns constitute a change request and may require a separate agreement or amendment to the original contract.`,
  },
  {
    id: "payments",
    title: "5. Payments and Billing",
    content: `Payment terms are specified in individual project agreements. Standard terms include:

Project-Based Work:
- A deposit of 40-50% is required before work begins
- Milestone payments as defined in the project proposal
- Final payment upon project completion and before delivery of final files

Retainer/Subscription Services:
- Billed monthly in advance
- Payments due within 7-15 days of invoice date

Late payments may result in project suspension. All prices are quoted in Bangladeshi Taka (BDT) unless otherwise specified. We reserve the right to charge late fees on overdue invoices.

Refund policies are specified in individual agreements. Deposits are generally non-refundable once work has commenced.`,
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property Rights",
    content: `Upon full payment, you receive ownership of the final deliverables created specifically for your project. However:

We retain:
- Rights to any pre-existing materials, code libraries, frameworks, and tools used in development
- Rights to reject the use of our name or work in ways we deem inappropriate
- Portfolio rights to display completed work (unless otherwise agreed in writing)

You retain:
- Ownership of your content, branding, and materials provided to us
- Ownership of final deliverables upon full payment

We grant you a perpetual, non-exclusive license for any proprietary tools or components used in your project. You may not resell, redistribute, or sublicense our proprietary tools, frameworks, or code libraries.`,
  },
  {
    id: "confidentiality",
    title: "7. Confidentiality",
    content: `Both parties agree to protect confidential information shared during the project engagement. Confidential information includes but is not limited to:

- Business strategies and plans
- Customer and supplier information
- Technical specifications and trade secrets
- Financial information
- Proprietary software and code

We will not disclose your confidential information to third parties without your written consent, except as required by law. This obligation survives the termination of our agreement.

We may use trusted third-party tools and services to execute your project. Such third parties are bound by confidentiality obligations consistent with these terms.`,
  },
  {
    id: "third-party",
    title: "8. Third-Party Services",
    content: `Our services may involve the use or integration of third-party services, tools, APIs, or platforms (such as hosting providers, payment gateways, email services, etc.).

- We are not responsible for the availability, performance, or terms of third-party services
- You agree to comply with the terms and conditions of any third-party services used in your project
- Third-party service costs (such as hosting, domain registration, premium plugins) are typically your responsibility unless otherwise agreed
- We will recommend suitable third-party services but the final selection and associated risks are yours`,
  },
  {
    id: "website-usage",
    title: "9. Website Usage Rules",
    content: `When using our website (twipra.tech or any affiliated domains), you agree to:
- Use the website for lawful purposes only
- Not attempt to gain unauthorized access to our systems
- Not engage in any activity that disrupts or interferes with our services
- Not copy, reproduce, or distribute our website content without permission
- Not use our website for spam, fraud, or malicious activities

We reserve the right to restrict or terminate access to our website for violations of these rules.`,
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law:

- Twipra Technology's total liability for any claims arising from our services is limited to the total amount paid by you for the specific service giving rise to the claim
- We are not liable for indirect, consequential, incidental, or special damages including lost profits, business interruption, or data loss
- We are not liable for damages resulting from third-party services, client delays, or force majeure events

This limitation applies regardless of whether the claim is based on contract, tort, negligence, or any other legal theory.`,
  },
  {
    id: "warranties",
    title: "11. Disclaimer of Warranties",
    content: `Our services are provided on an "as is" and "as available" basis. We make no warranties or representations, express or implied, regarding:

- The uninterrupted or error-free operation of delivered solutions
- The suitability of our services for your specific business needs
- The accuracy or reliability of information provided
- Compatibility with all platforms, devices, or third-party services

We strive to deliver high-quality solutions, but technology environments are complex and subject to change. Post-launch support and maintenance agreements can address ongoing needs.`,
  },
  {
    id: "termination",
    title: "12. Termination of Services",
    content: `Either party may terminate services under the following conditions:

By Client:
- Written notice as specified in the project agreement
- Payment for all work completed up to the termination date
- Any non-refundable deposits are retained

By Twipra Technology:
- Written notice for breach of terms
- Immediate termination for non-payment or illegal activities
- Client failure to fulfill responsibilities after reasonable notice

Upon termination, we will deliver all completed work for which payment has been received. Any work in progress may be delivered at our discretion.`,
  },
  {
    id: "indemnification",
    title: "13. Indemnification",
    content: `You agree to indemnify and hold harmless Twipra Technology, its employees, contractors, and affiliates from any claims, damages, losses, or expenses arising from:

- Your use of our services
- Your violation of these Terms
- Content or materials you provide that infringe third-party rights
- Your business operations conducted using our solutions

This indemnification obligation survives the termination of our agreement.`,
  },
  {
    id: "governing-law",
    title: "14. Governing Law",
    content: `These Terms & Conditions are governed by and construed in accordance with the laws of the People's Republic of Bangladesh.

Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh.

We make no representation that our services are appropriate or available for use in locations outside Bangladesh. Clients accessing our services from other jurisdictions do so at their own risk and are responsible for compliance with local laws.`,
  },
  {
    id: "changes",
    title: "15. Changes to Terms",
    content: `We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Changes will be effective immediately upon posting to our website.

For ongoing client relationships, significant changes will be communicated via email or through our project management channels. Continued use of our services after changes constitutes acceptance of the updated Terms.

We encourage you to review these Terms periodically for any updates.`,
  },
  {
    id: "contact",
    title: "16. Contact Information",
    content: `For questions, concerns, or legal inquiries regarding these Terms & Conditions, please contact us:

Twipra Technology
Dhaka, Bangladesh

Email: twipratechnologies@gmail.com
Phone: +880 1851072019
WhatsApp: +880 1310889153
Website: twipra.tech

We aim to respond to all inquiries within 2-3 business days.

Last Updated: June 2024`,
  },
];

import { FiGlobe, FiMonitor, FiAward, FiPlay } from "react-icons/fi";

interface Course {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  modules: number;
  comingSoon?: boolean;
  color: string;
  bg: string;
}

export const courses: Course[] = [
  {
    icon: FiGlobe,
    title: "Full-Stack Web Development",
    category: "Web Development",
    description:
      "Master modern web development with React, Next.js, Node.js, and databases. Build real-world projects from scratch.",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    modules: 12,
    color: "text-(--primary)",
    bg: "bg-(--primary)/10",
    comingSoon: true,
  },
  {
    icon: FiCpu,
    title: "AI & Machine Learning",
    category: "Artificial Intelligence",
    description:
      "Learn AI fundamentals, neural networks, NLP, and build intelligent applications with Python and TensorFlow.",
    duration: "10 Weeks",
    level: "Intermediate",
    modules: 10,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    comingSoon: true,
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    category: "App Development",
    description:
      "Build cross-platform mobile apps with React Native and Flutter. Deploy to both iOS and Android.",
    duration: "8 Weeks",
    level: "Intermediate",
    comingSoon: true,
    modules: 8,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: FiCloud,
    title: "Cloud & DevOps Engineering",
    category: "Cloud Computing",
    description:
      "Master AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code for modern deployments.",
    duration: "10 Weeks",
    level: "Advanced",
    modules: 10,
    comingSoon: true,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: FiCode,
    title: "Python & Data Science",
    category: "Data Science",
    description:
      "Learn Python programming, data analysis, visualization, and machine learning for data-driven decisions.",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
    modules: 8,
    comingSoon: true,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: FiMonitor,
    title: "UI/UX Design Mastery",
    category: "Design",
    description:
      "Master user interface and experience design with Figma, design systems, prototyping, and user research.",
    duration: "6 Weeks",
    level: "Beginner to Advanced",
    modules: 6,
    comingSoon: true,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing & SEO",
    category: "Marketing",
    description:
      "Learn SEO, Google Ads, social media marketing, content strategy, and analytics to grow businesses online.",
    duration: "6 Weeks",
    level: "Beginner",
    modules: 6,
    comingSoon: true,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: FiAward,
    title: "Cybersecurity Fundamentals",
    category: "Security",
    description:
      "Learn network security, ethical hacking, penetration testing, and how to protect systems from threats.",
    duration: "8 Weeks",
    level: "Intermediate",
    modules: 8,
    comingSoon: true,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
];
