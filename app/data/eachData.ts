// /app/data/webDevelopmentServices.ts

export interface ServiceData {
  slug: string;
  name: string;
  category: string;
  startingPrice: string;
  color: string;
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  overview: {
    title: string;
    content: string;
  };
  solutions: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  process: {
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  whyChooseUs: {
    title: string;
    items: string[];
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };

  relatedServices: Array<{
    name: string;
    slug: string;
  }>;
}

export const eachData: Record<string, ServiceData> = {
  "business-website-development": {
    slug: "business-website-development",
    name: "Business Website Development",
    category: "web-development",
    startingPrice: "৳15,000",
    color: "#3B82F6",
    hero: {
      title: "Professional Business Website Development",
      description:
        "Create a powerful online presence with custom-built websites designed for companies, startups, schools, and organizations.",
      cta: "Get Free Consultation",
    },
    overview: {
      title: "What Is Business Website Development?",
      content:
        "A business website is your digital storefront and brand hub. We build professional websites that represent your brand, engage visitors, and convert leads into customers. Our solutions include responsive design, SEO optimization, content management, and performance tracking.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Corporate Websites",
          description: "Professional company websites with brand identity.",
        },
        {
          title: "Startup Landing Pages",
          description: "Launch-ready websites for new businesses.",
        },
        {
          title: "School & Education Sites",
          description: "Information portals for educational institutions.",
        },
        {
          title: "Organization Portals",
          description: "Member management and communication platforms.",
        },
        {
          title: "Portfolio Websites",
          description: "Showcase your work and achievements professionally.",
        },
        {
          title: "Service Business Sites",
          description: "Lead generation and service showcasing platforms.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Discovery",
          description: "Understand your brand, goals, and audience.",
        },
        {
          title: "Design",
          description: "Create modern, brand-aligned designs.",
        },
        {
          title: "Development",
          description: "Build with clean, maintainable code.",
        },
        {
          title: "Content Integration",
          description: "Add your content and media assets.",
        },
        {
          title: "Testing",
          description: "Ensure quality across all devices.",
        },
        {
          title: "Launch",
          description: "Deploy and make your site live.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Responsive Design",
          description: "Perfect viewing on all devices.",
        },
        {
          title: "SEO Optimized",
          description: "Built for search engine visibility.",
        },
        {
          title: "Fast Loading",
          description: "Optimized for speed and performance.",
        },
        {
          title: "CMS Integration",
          description: "Easy content management system.",
        },
        {
          title: "Contact Forms",
          description: "Lead capture and inquiry management.",
        },
        {
          title: "Analytics Ready",
          description: "Track visitors and conversions.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Custom designs tailored to your brand",
        "Mobile-responsive layouts",
        "SEO-friendly structure",
        "Fast turnaround time",
        "Ongoing support available",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does it take to build a business website?",
          answer:
            "Typically 2-4 weeks depending on complexity and features required.",
        },
        {
          question: "Can I update the website myself?",
          answer:
            "Yes, we include a user-friendly CMS for easy content updates.",
        },
        {
          question: "Do you provide hosting?",
          answer: "Yes, we offer hosting setup and recommendations.",
        },
        {
          question: "Is the website mobile-friendly?",
          answer: "Yes, all our websites are fully responsive on all devices.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Landing Page Development",
        slug: "landing-page-development",
      },
      {
        name: "E-Commerce Development",
        slug: "e-commerce-development",
      },
      {
        name: "Website Maintenance & Support",
        slug: "website-maintenance-support",
      },
    ],
  },

  "landing-page-development": {
    slug: "landing-page-development",
    name: "Landing Page Development",
    category: "web-development",
    startingPrice: "৳8,000",
    color: "#10B981",
    hero: {
      title: "High-Converting Landing Page Development",
      description:
        "Convert visitors into customers with professionally designed landing pages for marketing campaigns and lead generation.",
      cta: "Start Your Campaign",
    },
    overview: {
      title: "What Is Landing Page Development?",
      content:
        "Landing pages are focused, single-purpose pages designed to convert visitors into leads or customers. We build high-converting landing pages optimized for specific marketing campaigns, product launches, and lead generation goals.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Product Launch Pages",
          description: "Generate buzz and captures leads for new products.",
        },
        {
          title: "Lead Generation Pages",
          description: "Capture visitor information for sales teams.",
        },
        {
          title: "Event Registration Pages",
          description: "Promote events and manage attendee registration.",
        },
        {
          title: "Sales Pages",
          description: "Drive direct sales for products and services.",
        },
        {
          title: "App Download Pages",
          description: "Promote mobile app downloads and installations.",
        },
        {
          title: "Promotional Campaign Pages",
          description: "Support marketing campaigns and special offers.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Strategy",
          description: "Define goals, audience, and conversion metrics.",
        },
        {
          title: "Design",
          description: "Create compelling, conversion-focused designs.",
        },
        {
          title: "Development",
          description: "Build fast, optimized landing pages.",
        },
        {
          title: "Integration",
          description: "Connect forms, analytics, and tracking tools.",
        },
        {
          title: "Testing",
          description: "A/B test elements for optimal conversion.",
        },
        {
          title: "Launch",
          description: "Deploy and monitor performance.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Conversion Optimized",
          description: "Designed for maximum conversion rates.",
        },
        {
          title: "Fast Loading",
          description: "Lightweight and performance-focused.",
        },
        {
          title: "Mobile Responsive",
          description: "Perfect on all devices.",
        },
        {
          title: "Form Integration",
          description: "Connect to your CRM or email service.",
        },
        {
          title: "Analytics Ready",
          description: "Track conversions and user behavior.",
        },
        {
          title: "A/B Testing Ready",
          description: "Easy to test different versions.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Conversion-focused design",
        "Fast deployment",
        "Mobile optimized",
        "Analytics integration",
        "Performance tracking",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How quickly can you build a landing page?",
          answer: "We can deliver a landing page in 3-7 business days.",
        },
        {
          question: "Can you integrate with my email marketing tool?",
          answer:
            "Yes, we integrate with Mailchimp, ConvertKit, and other popular tools.",
        },
        {
          question: "Do you provide A/B testing?",
          answer: "We can set up A/B testing to optimize conversion rates.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Business Website Development",
        slug: "business-website-development",
      },
      {
        name: "Full-Stack Web Application Development",
        slug: "full-stack-web-application-development",
      },
      {
        name: "API Development & Integration",
        slug: "api-development-integration",
      },
    ],
  },

  "full-stack-web-application-development": {
    slug: "full-stack-web-application-development",
    name: "Full-Stack Web Application Development",
    category: "web-development",
    startingPrice: "৳35,000",
    color: "#8B5CF6",
    hero: {
      title: "Full-Stack Web Application Development",
      description:
        "Build scalable, secure, and high-performance web applications tailored to your business needs.",
      cta: "Get Free Consultation",
    },
    overview: {
      title: "What Is Full-Stack Web Development?",
      content:
        "Full-stack web development involves building both the client-facing frontend and server-side backend of an application. A complete solution includes user interfaces, APIs, databases, authentication systems, and deployment infrastructure. Businesses use full-stack applications to automate operations, improve customer experiences, and streamline workflows.",
    },
    solutions: {
      title: "What Can We Build?",
      items: [
        {
          title: "CRM Systems",
          description:
            "Manage customers, leads, sales pipelines, and business relationships.",
        },
        {
          title: "Learning Management Systems",
          description:
            "Online courses, quizzes, certificates, and student management.",
        },
        {
          title: "E-Commerce Platforms",
          description:
            "Products, payments, inventory management, and order processing.",
        },
        {
          title: "Booking Platforms",
          description: "Appointments, reservations, and scheduling systems.",
        },
        {
          title: "SaaS Products",
          description:
            "Subscription-based software products and customer portals.",
        },
        {
          title: "Admin Portals",
          description:
            "Business dashboards, analytics, and operational management.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Discovery",
          description: "Understand requirements, goals, and business needs.",
        },
        {
          title: "Planning",
          description: "Create project architecture and development roadmap.",
        },
        {
          title: "Design",
          description: "Develop user-friendly interfaces and workflows.",
        },
        {
          title: "Development",
          description: "Build frontend, backend, database, and integrations.",
        },
        {
          title: "Testing",
          description: "Quality assurance, security checks, and optimization.",
        },
        {
          title: "Deployment",
          description: "Launch the application and ensure smooth operation.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Secure Authentication",
          description:
            "Protect users and business data with secure access controls.",
        },
        {
          title: "Scalable Architecture",
          description: "Built to support future growth and increased traffic.",
        },
        {
          title: "API Integration",
          description:
            "Connect with payment gateways, CRMs, and third-party services.",
        },
        {
          title: "Mobile Responsive",
          description: "Optimized for desktop, tablet, and mobile devices.",
        },
        {
          title: "Performance Optimized",
          description: "Fast loading times and smooth user experience.",
        },
        {
          title: "SEO Friendly",
          description: "Structured to support search engine visibility.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Business-focused solutions",
        "Scalable architecture",
        "Transparent communication",
        "Post-launch support",
        "Affordable pricing",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does development take?",
          answer:
            "Most projects take between 2 and 12 weeks depending on complexity and requirements.",
        },
        {
          question: "Can you redesign an existing application?",
          answer:
            "Yes, we can modernize existing applications and improve performance.",
        },
        {
          question: "Do you provide hosting?",
          answer: "Yes, deployment and hosting assistance are available.",
        },
        {
          question: "Do you provide maintenance?",
          answer: "Yes, ongoing support and maintenance plans are available.",
        },
      ],
    },
    relatedServices: [
      {
        name: "API Development & Integration",
        slug: "api-development-integration",
      },
      {
        name: "Admin Dashboard Development",
        slug: "admin-dashboard-development",
      },
      {
        name: "E-Commerce Development",
        slug: "e-commerce-development",
      },
      {
        name: "Website Maintenance & Support",
        slug: "website-maintenance-support",
      },
    ],
  },

  "e-commerce-development": {
    slug: "e-commerce-development",
    name: "E-Commerce Development",
    category: "web-development",
    startingPrice: "৳25,000",
    color: "#F59E0B",
    hero: {
      title: "E-Commerce Development",
      description:
        "Build powerful online stores with product management, secure payments, and order tracking systems.",
      cta: "Launch Your Store",
    },
    overview: {
      title: "What Is E-Commerce Development?",
      content:
        "E-commerce development creates online stores that allow businesses to sell products and services digitally. We build feature-rich stores with inventory management, payment gateways, shopping carts, and customer accounts.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Online Retail Stores",
          description: "Complete e-commerce solutions for physical products.",
        },
        {
          title: "Digital Product Stores",
          description: "Sell digital goods like software, ebooks, and courses.",
        },
        {
          title: "Subscription Stores",
          description: "Recurring billing and membership management.",
        },
        {
          title: "Multi-Vendor Marketplaces",
          description: "Platforms for multiple sellers and products.",
        },
        {
          title: "Dropshipping Stores",
          description: "Automated order fulfillment systems.",
        },
        {
          title: "Custom Checkout Pages",
          description: "Optimized checkout for higher conversion.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Product Strategy",
          description: "Define products, pricing, and business model.",
        },
        {
          title: "Design",
          description: "Create engaging product displays and store design.",
        },
        {
          title: "Development",
          description: "Build store with payment and inventory systems.",
        },
        {
          title: "Payment Integration",
          description: "Connect secure payment gateways.",
        },
        {
          title: "Testing",
          description: "Test payments, shipping, and user experience.",
        },
        {
          title: "Launch",
          description: "Go live with your online store.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Secure Payments",
          description: "Multiple payment gateway integration.",
        },
        {
          title: "Inventory Management",
          description: "Track stock levels and automated alerts.",
        },
        {
          title: "Order Tracking",
          description: "Real-time order status updates.",
        },
        {
          title: "Customer Accounts",
          description: "Order history and saved preferences.",
        },
        {
          title: "Shipping Integration",
          description: "Real-time shipping rates and tracking.",
        },
        {
          title: "Discount System",
          description: "Coupons, promotions, and loyalty programs.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Secure payment integration",
        "Mobile-optimized stores",
        "Inventory management",
        "SEO-friendly structure",
        "Ongoing support",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which payment gateways do you support?",
          answer:
            "We support Stripe, PayPal, SSL Commerz, bKash, Nagad, and others.",
        },
        {
          question: "Can I manage products myself?",
          answer: "Yes, we include an easy-to-use admin dashboard.",
        },
        {
          question: "Is the store mobile-friendly?",
          answer: "Yes, fully responsive for mobile shoppers.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Full-Stack Web Application Development",
        slug: "full-stack-web-application-development",
      },
      {
        name: "API Development & Integration",
        slug: "api-development-integration",
      },
      {
        name: "Website Maintenance & Support",
        slug: "website-maintenance-support",
      },
    ],
  },

  "admin-dashboard-development": {
    slug: "admin-dashboard-development",
    name: "Admin Dashboard Development",
    category: "web-development",
    startingPrice: "৳20,000",
    color: "#EF4444",
    hero: {
      title: "Admin Dashboard Development",
      description:
        "Custom dashboards, analytics panels, and management systems for business operations.",
      cta: "Build Your Dashboard",
    },
    overview: {
      title: "What Is Admin Dashboard Development?",
      content:
        "Admin dashboards provide centralized control panels for managing business operations, users, content, and analytics. We build intuitive dashboards that help teams monitor performance and make data-driven decisions.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Business Analytics Dashboards",
          description: "Visualize KPIs and business metrics.",
        },
        {
          title: "User Management Panels",
          description: "Manage customers, roles, and permissions.",
        },
        {
          title: "Content Management Systems",
          description: "Control website and app content.",
        },
        {
          title: "Sales Dashboards",
          description: "Track revenue, orders, and customer data.",
        },
        {
          title: "Inventory Management",
          description: "Monitor stock levels and supply chain.",
        },
        {
          title: "Support Ticket Systems",
          description: "Manage customer support requests.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Requirements",
          description: "Identify data sources and management needs.",
        },
        {
          title: "Design",
          description: "Create intuitive dashboard layouts.",
        },
        {
          title: "Development",
          description: "Build data visualization and management tools.",
        },
        {
          title: "Integration",
          description: "Connect databases and APIs.",
        },
        {
          title: "Testing",
          description: "Verify data accuracy and usability.",
        },
        {
          title: "Deployment",
          description: "Launch and train your team.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Real-time Data",
          description: "Live updates and instant insights.",
        },
        {
          title: "Custom Reports",
          description: "Generate and export custom reports.",
        },
        {
          title: "User Roles",
          description: "Granular permission controls.",
        },
        {
          title: "Data Visualization",
          description: "Charts, graphs, and analytics.",
        },
        {
          title: "Search & Filter",
          description: "Advanced data filtering options.",
        },
        {
          title: "Export Features",
          description: "Export data to CSV, PDF, or Excel.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Custom dashboard design",
        "Real-time data updates",
        "User-friendly interface",
        "Secure access control",
        "Scalable architecture",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Can you integrate with my existing database?",
          answer: "Yes, we can connect to your current data sources.",
        },
        {
          question: "Is the dashboard mobile-friendly?",
          answer: "Yes, responsive design for all devices.",
        },
        {
          question: "Can I customize reports?",
          answer: "Yes, we build flexible reporting tools.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Full-Stack Web Application Development",
        slug: "full-stack-web-application-development",
      },
      {
        name: "API Development & Integration",
        slug: "api-development-integration",
      },
    ],
  },

  "cms-blog-development": {
    slug: "cms-blog-development",
    name: "CMS & Blog Development",
    category: "web-development",
    startingPrice: "৳15,000",
    color: "#06B6D4",
    hero: {
      title: "CMS & Blog Development",
      description:
        "Content management systems and blog platforms for easy content publishing and management.",
      cta: "Start Blogging",
    },
    overview: {
      title: "What Is CMS Development?",
      content:
        "Content Management Systems (CMS) allow you to create, manage, and publish digital content without technical expertise. We build custom CMS solutions and blog platforms tailored to your content strategy.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Corporate Blogs",
          description: "Professional blogs for brand authority.",
        },
        {
          title: "News Portals",
          description: "Multi-author news and magazine sites.",
        },
        {
          title: "Personal Blogs",
          description: "Custom blogging platforms for individuals.",
        },
        {
          title: "Review Sites",
          description: "Product and service review platforms.",
        },
        {
          title: "Recipe Blogs",
          description: "Food and recipe sharing websites.",
        },
        {
          title: "Portfolio Blogs",
          description: "Creative professional portfolios.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Content Strategy",
          description: "Plan content types and publishing workflow.",
        },
        {
          title: "Design",
          description: "Create engaging, readable layouts.",
        },
        {
          title: "Development",
          description: "Build CMS with user-friendly editor.",
        },
        {
          title: "SEO Setup",
          description: "Configure SEO settings and metadata.",
        },
        {
          title: "Testing",
          description: "Test publishing and content display.",
        },
        {
          title: "Launch",
          description: "Deploy and start publishing.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Rich Text Editor",
          description: "Easy content formatting and media upload.",
        },
        {
          title: "Category Management",
          description: "Organize content by categories and tags.",
        },
        {
          title: "Author Profiles",
          description: "Multiple authors with bios and photos.",
        },
        {
          title: "Comment System",
          description: "Engage with readers and manage comments.",
        },
        {
          title: "SEO Tools",
          description: "Meta tags, sitemaps, and URL control.",
        },
        {
          title: "Search Functionality",
          description: "Powerful content search.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Easy-to-use interface",
        "SEO-optimized structure",
        "Fast loading times",
        "Mobile responsive",
        "Regular updates",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Can I add multiple authors?",
          answer: "Yes, we support multi-author blogs with roles.",
        },
        {
          question: "Is SEO included?",
          answer: "Yes, built with SEO best practices.",
        },
        {
          question: "Can I schedule posts?",
          answer: "Yes, schedule content for future publication.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Business Website Development",
        slug: "business-website-development",
      },
      {
        name: "Content Marketing",
        slug: "content-marketing",
      },
      {
        name: "Search Engine Optimization (SEO)",
        slug: "search-engine-optimization-seo",
      },
    ],
  },

  "website-maintenance-support": {
    slug: "website-maintenance-support",
    name: "Website Maintenance & Support",
    category: "web-development",
    startingPrice: "৳3,000",
    color: "#6B7280",
    hero: {
      title: "Website Maintenance & Support",
      description:
        "Keep your website secure, updated, and performing optimally with professional maintenance services.",
      cta: "Get Support Plan",
    },
    overview: {
      title: "What Is Website Maintenance?",
      content:
        "Website maintenance ensures your site remains secure, up-to-date, and performs at its best. We provide ongoing support including updates, backups, security monitoring, and technical fixes.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "Security Monitoring",
          description: "24/7 security scans and threat protection.",
        },
        {
          title: "Regular Updates",
          description: "Core, plugin, and framework updates.",
        },
        {
          title: "Backup Services",
          description: "Automated daily backups and restore options.",
        },
        {
          title: "Bug Fixes",
          description: "Prompt resolution of technical issues.",
        },
        {
          title: "Performance Optimization",
          description: "Speed tests and performance improvements.",
        },
        {
          title: "Uptime Monitoring",
          description: "Alert system for website downtime.",
        },
      ],
    },
    process: {
      title: "Our Maintenance Process",
      steps: [
        {
          title: "Initial Audit",
          description: "Comprehensive website health check.",
        },
        {
          title: "Setup",
          description: "Configure monitoring and backup systems.",
        },
        {
          title: "Regular Checks",
          description: "Weekly and monthly maintenance tasks.",
        },
        {
          title: "Security Updates",
          description: "Apply security patches promptly.",
        },
        {
          title: "Performance Review",
          description: "Monitor and optimize speed.",
        },
        {
          title: "Support Access",
          description: "24/7 technical support availability.",
        },
      ],
    },
    features: {
      title: "Features Included",
      items: [
        {
          title: "Security Updates",
          description: "Critical security patches.",
        },
        {
          title: "Daily Backups",
          description: "Automated backup system.",
        },
        {
          title: "Uptime Monitoring",
          description: "Real-time downtime alerts.",
        },
        {
          title: "Malware Removal",
          description: "Security threat cleanup.",
        },
        {
          title: "Technical Support",
          description: "Priority issue resolution.",
        },
        {
          title: "Monthly Reports",
          description: "Performance and security reports.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Proactive monitoring",
        "Quick response time",
        "Affordable plans",
        "Experienced team",
        "Peace of mind",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How often do you perform updates?",
          answer: "Weekly security updates and monthly major updates.",
        },
        {
          question: "What if my site gets hacked?",
          answer: "We provide immediate cleanup and security hardening.",
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, month-to-month plans with no contracts.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Website Redesign & Modernization",
        slug: "website-redesign-modernization",
      },
      {
        name: "Full-Stack Web Application Development",
        slug: "full-stack-web-application-development",
      },
    ],
  },

  "website-redesign-modernization": {
    slug: "website-redesign-modernization",
    name: "Website Redesign & Modernization",
    category: "web-development",
    startingPrice: "৳12,000",
    color: "#EC4899",
    hero: {
      title: "Website Redesign & Modernization",
      description:
        "Transform outdated websites into modern, responsive, and high-performing digital experiences.",
      cta: "Modernize Your Site",
    },
    overview: {
      title: "What Is Website Redesign?",
      content:
        "Website redesign transforms your existing site with modern design, improved functionality, and better user experience. We preserve your content and SEO value while giving your brand a fresh, professional look.",
    },
    solutions: {
      title: "What We Can Do",
      items: [
        {
          title: "Visual Redesign",
          description: "Fresh, modern design and branding.",
        },
        {
          title: "Performance Upgrade",
          description: "Speed optimization and better performance.",
        },
        {
          title: "Mobile Responsiveness",
          description: "Make existing sites mobile-friendly.",
        },
        {
          title: "CMS Migration",
          description: "Move to modern content management.",
        },
        {
          title: "UI/UX Improvement",
          description: "Better navigation and user experience.",
        },
        {
          title: "Technology Upgrade",
          description: "Modern frameworks and technologies.",
        },
      ],
    },
    process: {
      title: "Our Redesign Process",
      steps: [
        {
          title: "Audit",
          description: "Analyze current site performance and issues.",
        },
        {
          title: "Strategy",
          description: "Plan redesign goals and improvements.",
        },
        {
          title: "Design",
          description: "Create modern design mockups.",
        },
        {
          title: "Development",
          description: "Rebuild with clean, modern code.",
        },
        {
          title: "SEO Preservation",
          description: "Maintain search engine rankings.",
        },
        {
          title: "Launch",
          description: "Deploy redesigned website.",
        },
      ],
    },
    features: {
      title: "What You Get",
      items: [
        {
          title: "Modern Design",
          description: "Contemporary visual aesthetics.",
        },
        {
          title: "Faster Loading",
          description: "Optimized for speed.",
        },
        {
          title: "Mobile Responsive",
          description: "Perfect on all devices.",
        },
        {
          title: "Better UX",
          description: "Improved user experience.",
        },
        {
          title: "SEO Optimized",
          description: "Maintain or improve rankings.",
        },
        {
          title: "Future Ready",
          description: "Built with modern technology.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "SEO value preservation",
        "Modern technology stack",
        "User-focused design",
        "Performance optimized",
        "Smooth transition",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Will I lose my SEO rankings?",
          answer: "No, we preserve URLs and SEO settings to maintain rankings.",
        },
        {
          question: "How long does redesign take?",
          answer: "Typically 3-6 weeks depending on site size.",
        },
        {
          question: "Can I keep my content?",
          answer: "Yes, we preserve and migrate your existing content.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Website Maintenance & Support",
        slug: "website-maintenance-support",
      },
      {
        name: "Business Website Development",
        slug: "business-website-development",
      },
      {
        name: "Full-Stack Web Application Development",
        slug: "full-stack-web-application-development",
      },
    ],
  },

  "api-development-integration": {
    slug: "api-development-integration",
    name: "API Development & Integration",
    category: "web-development",
    startingPrice: "৳10,000",
    color: "#14B8A6",
    hero: {
      title: "API Development & Integration",
      description:
        "Connect your applications with payment gateways, CRMs, third-party services, and custom APIs.",
      cta: "Integrate Now",
    },
    overview: {
      title: "What Is API Integration?",
      content:
        "APIs allow different software systems to communicate and share data. We develop custom APIs and integrate third-party services to extend your application's functionality and automate workflows.",
    },
    solutions: {
      title: "What We Can Integrate",
      items: [
        {
          title: "Payment Gateways",
          description: "Stripe, PayPal, SSL Commerz, bKash, Nagad.",
        },
        {
          title: "CRMs",
          description: "Salesforce, HubSpot, Zoho CRM integration.",
        },
        {
          title: "Email Services",
          description: "Mailchimp, SendGrid, Brevo integration.",
        },
        {
          title: "Social Media APIs",
          description: "Facebook, Instagram, LinkedIn, Twitter.",
        },
        {
          title: "Maps & Location",
          description: "Google Maps, Mapbox integration.",
        },
        {
          title: "Custom APIs",
          description: "Build REST or GraphQL APIs.",
        },
      ],
    },
    process: {
      title: "Our Integration Process",
      steps: [
        {
          title: "Requirements",
          description: "Understand integration needs and data flow.",
        },
        {
          title: "API Selection",
          description: "Choose appropriate APIs and services.",
        },
        {
          title: "Development",
          description: "Build integration or custom API.",
        },
        {
          title: "Testing",
          description: "Test data flow and error handling.",
        },
        {
          title: "Security Check",
          description: "Implement authentication and encryption.",
        },
        {
          title: "Deployment",
          description: "Deploy and monitor integration.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Secure Authentication",
          description: "OAuth, JWT, API keys protection.",
        },
        {
          title: "Data Sync",
          description: "Real-time or scheduled synchronization.",
        },
        {
          title: "Error Handling",
          description: "Robust error management and logging.",
        },
        {
          title: "Rate Limiting",
          description: "Prevent API abuse.",
        },
        {
          title: "Documentation",
          description: "Complete API documentation.",
        },
        {
          title: "Webhooks",
          description: "Event-driven notifications.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Secure implementation",
        "Error handling",
        "Comprehensive testing",
        "Detailed documentation",
        "Ongoing support",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you work with any API?",
          answer: "Yes, we can integrate with any REST or GraphQL API.",
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we implement industry-standard security practices.",
        },
        {
          question: "Can you build a custom API?",
          answer: "Yes, we develop custom REST and GraphQL APIs.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Full-Stack Web Application Development",
        slug: "full-stack-web-application-development",
      },
      {
        name: "E-Commerce Development",
        slug: "e-commerce-development",
      },
    ],
  },

  "ai-chatbot-development": {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    category: "ai-solutions",
    startingPrice: "৳15,000",
    color: "#8B5CF6",
    hero: {
      title: "AI Chatbot Development",
      description:
        "GPT-powered customer support, sales, and FAQ chatbots that understand and respond like humans.",
      cta: "Build Your Chatbot",
    },
    overview: {
      title: "What Is AI Chatbot Development?",
      content:
        "AI chatbots use large language models to understand natural language and provide intelligent responses. We build custom chatbots for customer support, lead generation, sales, and internal knowledge management that can handle complex conversations and learn from interactions.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Customer Support Bots",
          description: "24/7 automated customer service and ticket resolution.",
        },
        {
          title: "Sales Chatbots",
          description:
            "Qualify leads, answer product questions, and drive conversions.",
        },
        {
          title: "FAQ Bots",
          description: "Instant answers to common customer questions.",
        },
        {
          title: "Internal Helpdesk Bots",
          description: "Employee support and IT assistance.",
        },
        {
          title: "WhatsApp Chatbots",
          description: "AI-powered conversations on WhatsApp business.",
        },
        {
          title: "Website Live Chat",
          description: "Real-time AI assistance on your website.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Discovery",
          description: "Understand use cases and conversation flows.",
        },
        {
          title: "Training",
          description: "Train AI on your data and knowledge base.",
        },
        {
          title: "Development",
          description: "Build chatbot with custom personality.",
        },
        {
          title: "Integration",
          description: "Connect to website, WhatsApp, or Slack.",
        },
        {
          title: "Testing",
          description: "Test conversations and edge cases.",
        },
        {
          title: "Deployment",
          description: "Launch and monitor performance.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Natural Language Understanding",
          description: "Understands human language naturally.",
        },
        {
          title: "24/7 Availability",
          description: "Always available for customer support.",
        },
        {
          title: "Multi-language Support",
          description: "Communicate in multiple languages.",
        },
        {
          title: "Context Awareness",
          description: "Remembers conversation context.",
        },
        {
          title: "Analytics Dashboard",
          description: "Track conversations and performance.",
        },
        {
          title: "Easy Integration",
          description: "Connect to websites and messaging apps.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "GPT-4 and Claude integration",
        "Custom personality training",
        "Multi-platform deployment",
        "Analytics and insights",
        "Ongoing optimization",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which AI models do you use?",
          answer: "We use OpenAI GPT-4, Google Gemini, and Anthropic Claude.",
        },
        {
          question: "Can I train the chatbot on my data?",
          answer:
            "Yes, we train chatbots on your documents and knowledge base.",
        },
        {
          question: "Where can I deploy the chatbot?",
          answer: "Website, WhatsApp, Facebook Messenger, Slack, and more.",
        },
      ],
    },
    relatedServices: [
      {
        name: "AI Knowledge Base Assistant",
        slug: "ai-knowledge-base-assistant",
      },
      {
        name: "AI Workflow Automation",
        slug: "ai-workflow-automation",
      },
      {
        name: "Custom AI Integration",
        slug: "custom-ai-integration",
      },
    ],
  },

  "ai-knowledge-base-assistant": {
    slug: "ai-knowledge-base-assistant",
    name: "AI Knowledge Base Assistant",
    category: "ai-solutions",
    startingPrice: "৳20,000",
    color: "#10B981",
    hero: {
      title: "AI Knowledge Base Assistant",
      description:
        "AI assistants trained on company documents, PDFs, and knowledge bases for instant internal and customer support.",
      cta: "Build Assistant",
    },
    overview: {
      title: "What Is AI Knowledge Base Assistant?",
      content:
        "AI knowledge base assistants are trained on your company's documents, policies, and procedures to provide instant, accurate answers. They help employees find information faster and customers get support without waiting for human agents.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Employee Helpdesk",
          description: "Instant answers to HR, IT, and policy questions.",
        },
        {
          title: "Customer Support Assistant",
          description: "Self-service support from your knowledge base.",
        },
        {
          title: "Document Q&A",
          description: "Ask questions about PDFs, Word docs, and more.",
        },
        {
          title: "Training Assistant",
          description: "Help new employees learn company processes.",
        },
        {
          title: "Compliance Assistant",
          description: "Quick access to compliance documents.",
        },
        {
          title: "Technical Documentation",
          description: "Search and query technical docs instantly.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Content Collection",
          description: "Gather all documents and knowledge sources.",
        },
        {
          title: "Data Processing",
          description: "Clean and prepare data for training.",
        },
        {
          title: "AI Training",
          description: "Train model on your knowledge base.",
        },
        {
          title: "Testing",
          description: "Verify accuracy of responses.",
        },
        {
          title: "Integration",
          description: "Connect to Slack, Teams, or website.",
        },
        {
          title: "Deployment",
          description: "Launch and monitor performance.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Document Upload",
          description: "Upload PDFs, Word, Excel, and text files.",
        },
        {
          title: "Instant Answers",
          description: "Get answers in seconds.",
        },
        {
          title: "Source Citation",
          description: "Shows which document provided the answer.",
        },
        {
          title: "Multi-format Support",
          description: "PDF, DOCX, TXT, HTML, and more.",
        },
        {
          title: "Slack & Teams Integration",
          description: "Use within your team communication tools.",
        },
        {
          title: "Regular Updates",
          description: "Easily update with new documents.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Train on unlimited documents",
        "Accurate RAG implementation",
        "Slack and Teams ready",
        "Customizable responses",
        "Easy document updates",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What file formats do you support?",
          answer: "PDF, DOCX, TXT, CSV, HTML, and markdown files.",
        },
        {
          question: "How accurate are the answers?",
          answer: "90-95% accuracy depending on document quality.",
        },
        {
          question: "Can I update the knowledge base?",
          answer: "Yes, add or remove documents anytime.",
        },
      ],
    },
    relatedServices: [
      {
        name: "AI Chatbot Development",
        slug: "ai-chatbot-development",
      },
      {
        name: "AI Workflow Automation",
        slug: "ai-workflow-automation",
      },
      {
        name: "Custom AI Integration",
        slug: "custom-ai-integration",
      },
    ],
  },

  "ai-workflow-automation": {
    slug: "ai-workflow-automation",
    name: "AI Workflow Automation",
    category: "ai-solutions",
    startingPrice: "৳18,000",
    color: "#F59E0B",
    hero: {
      title: "AI Workflow Automation",
      description:
        "Automate repetitive business tasks using AI-powered workflows that save time and reduce errors.",
      cta: "Automate Now",
    },
    overview: {
      title: "What Is AI Workflow Automation?",
      content:
        "AI workflow automation uses artificial intelligence to handle repetitive tasks, data entry, document processing, and decision-making. We build custom automation that connects your tools and eliminates manual work.",
    },
    solutions: {
      title: "What We Can Automate",
      items: [
        {
          title: "Data Entry Automation",
          description: "Extract and enter data between systems.",
        },
        {
          title: "Document Processing",
          description: "Auto-read invoices, receipts, and forms.",
        },
        {
          title: "Email Classification",
          description: "Sort and route emails automatically.",
        },
        {
          title: "Lead Processing",
          description: "Auto-qualify and assign leads to sales.",
        },
        {
          title: "Report Generation",
          description: "Auto-generate daily and weekly reports.",
        },
        {
          title: "Approval Workflows",
          description: "AI-powered document approval routing.",
        },
      ],
    },
    process: {
      title: "Our Automation Process",
      steps: [
        {
          title: "Audit",
          description: "Identify repetitive tasks and bottlenecks.",
        },
        {
          title: "Design",
          description: "Plan workflow and automation logic.",
        },
        {
          title: "Development",
          description: "Build custom automation scripts.",
        },
        {
          title: "Integration",
          description: "Connect to your existing tools.",
        },
        {
          title: "Testing",
          description: "Verify accuracy and error handling.",
        },
        {
          title: "Deployment",
          description: "Launch and monitor automation.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "No-code Interface",
          description: "Easy workflow configuration.",
        },
        {
          title: "API Integration",
          description: "Connect to any API or tool.",
        },
        {
          title: "Error Handling",
          description: "Automatic retry and alerts.",
        },
        {
          title: "Scheduling",
          description: "Run workflows on schedule.",
        },
        {
          title: "Logging",
          description: "Complete audit trail of all actions.",
        },
        {
          title: "Conditional Logic",
          description: "Smart decision-making workflows.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Save 20+ hours per week",
        "Reduce manual errors",
        "Connect any tools",
        "Custom workflows",
        "Ongoing support",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What tools can you integrate?",
          answer: "CRM, email, Slack, Google Sheets, databases, and more.",
        },
        {
          question: "How much time can I save?",
          answer: "Most clients save 10-40 hours per week on manual tasks.",
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use encryption and secure connections.",
        },
      ],
    },
    relatedServices: [
      {
        name: "AI Chatbot Development",
        slug: "ai-chatbot-development",
      },
      {
        name: "AI Knowledge Base Assistant",
        slug: "ai-knowledge-base-assistant",
      },
      {
        name: "Custom AI Integration",
        slug: "custom-ai-integration",
      },
    ],
  },

  "custom-ai-integration": {
    slug: "custom-ai-integration",
    name: "Custom AI Integration",
    category: "ai-solutions",
    startingPrice: "৳12,000",
    color: "#EF4444",
    hero: {
      title: "Custom AI Integration",
      description:
        "Integrate OpenAI, Gemini, Claude, and AI services into your existing applications and workflows.",
      cta: "Integrate AI",
    },
    overview: {
      title: "What Is Custom AI Integration?",
      content:
        "Custom AI integration adds artificial intelligence capabilities to your existing software. We integrate OpenAI, Google Gemini, Anthropic Claude, and other AI services into your applications for content generation, analysis, and intelligent features.",
    },
    solutions: {
      title: "What We Can Integrate",
      items: [
        {
          title: "Content Generation",
          description:
            "Auto-generate blog posts, product descriptions, and emails.",
        },
        {
          title: "Sentiment Analysis",
          description: "Analyze customer feedback and reviews.",
        },
        {
          title: "Data Classification",
          description: "Auto-categorize tickets, leads, and content.",
        },
        {
          title: "Text Summarization",
          description: "Summarize long documents and articles.",
        },
        {
          title: "Language Translation",
          description: "Auto-translate content to multiple languages.",
        },
        {
          title: "Image Recognition",
          description: "Identify objects and text in images.",
        },
      ],
    },
    process: {
      title: "Our Integration Process",
      steps: [
        {
          title: "Requirements",
          description: "Identify AI features needed.",
        },
        {
          title: "API Selection",
          description: "Choose best AI provider for your use case.",
        },
        {
          title: "Development",
          description: "Integrate AI API into your app.",
        },
        {
          title: "Testing",
          description: "Test accuracy and performance.",
        },
        {
          title: "Optimization",
          description: "Fine-tune prompts and parameters.",
        },
        {
          title: "Deployment",
          description: "Launch AI features to users.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Multiple AI Providers",
          description: "OpenAI, Gemini, Claude, or custom.",
        },
        {
          title: "REST API",
          description: "Easy-to-use API endpoints.",
        },
        {
          title: "Webhook Support",
          description: "Trigger AI actions via webhooks.",
        },
        {
          title: "Usage Analytics",
          description: "Track API usage and costs.",
        },
        {
          title: "Fallback Logic",
          description: "Handle API failures gracefully.",
        },
        {
          title: "Prompt Engineering",
          description: "Optimized prompts for best results.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Multiple AI providers",
        "Custom prompt engineering",
        "Cost optimization",
        "Scalable architecture",
        "Complete documentation",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which AI APIs do you support?",
          answer: "OpenAI GPT-4, Google Gemini, Anthropic Claude, and more.",
        },
        {
          question: "How much does API cost?",
          answer: "API costs vary by usage. We help optimize to reduce costs.",
        },
        {
          question: "Can you integrate into my existing app?",
          answer: "Yes, we work with any existing application.",
        },
      ],
    },
    relatedServices: [
      {
        name: "AI Chatbot Development",
        slug: "ai-chatbot-development",
      },
      {
        name: "AI Knowledge Base Assistant",
        slug: "ai-knowledge-base-assistant",
      },
      {
        name: "AI Workflow Automation",
        slug: "ai-workflow-automation",
      },
    ],
  },

  "android-app-development": {
    slug: "android-app-development",
    name: "Android App Development",
    category: "mobile-app-development",
    startingPrice: "৳30,000",
    color: "#3DDC84",
    hero: {
      title: "Android App Development",
      description:
        "Custom Android applications tailored to business needs with modern design, smooth performance, and scalable architecture.",
      cta: "Build Your App",
    },
    overview: {
      title: "What Is Android App Development?",
      content:
        "Android app development creates powerful mobile applications for the world's most popular mobile operating system. We build native Android apps using Kotlin and Java with Material Design guidelines, ensuring smooth performance and excellent user experience on all Android devices.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Business Apps",
          description: "Custom apps for companies and organizations.",
        },
        {
          title: "E-commerce Apps",
          description: "Mobile shopping with secure payments.",
        },
        {
          title: "Social Media Apps",
          description: "Connect users with feeds, messaging, and sharing.",
        },
        {
          title: "Educational Apps",
          description: "Learning platforms with quizzes and videos.",
        },
        {
          title: "Healthcare Apps",
          description: "Patient management and telemedicine.",
        },
        {
          title: "On-demand Apps",
          description: "Uber-like booking and service apps.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Discovery",
          description: "Understand requirements and user needs.",
        },
        {
          title: "Design",
          description: "Create Material Design interfaces.",
        },
        {
          title: "Development",
          description: "Build with Kotlin/Java and modern architecture.",
        },
        {
          title: "Testing",
          description: "Test on multiple Android devices.",
        },
        {
          title: "Deployment",
          description: "Publish to Google Play Store.",
        },
        {
          title: "Support",
          description: "Ongoing maintenance and updates.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Material Design",
          description: "Google's modern design guidelines.",
        },
        {
          title: "Offline Support",
          description: "Work without internet connection.",
        },
        {
          title: "Push Notifications",
          description: "Engage users with timely alerts.",
        },
        {
          title: "Firebase Integration",
          description: "Analytics, crash reporting, and more.",
        },
        {
          title: "Secure Authentication",
          description: "Biometric and OAuth login.",
        },
        {
          title: "In-app Payments",
          description: "Google Pay and other payment methods.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Native Android development",
        "Material Design compliance",
        "Play Store publishing assistance",
        "Post-launch support",
        "Affordable pricing",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does Android app development take?",
          answer: "Typically 6-12 weeks depending on features and complexity.",
        },
        {
          question: "Do you publish to Google Play?",
          answer: "Yes, we help with Play Store submission and approval.",
        },
        {
          question: "Can you update existing apps?",
          answer: "Yes, we provide maintenance and update services.",
        },
      ],
    },
    relatedServices: [
      {
        name: "iOS App Development",
        slug: "ios-app-development",
      },
      {
        name: "Mobile App Maintenance & Support",
        slug: "mobile-app-maintenance-support",
      },
    ],
  },

  "ios-app-development": {
    slug: "ios-app-development",
    name: "iOS App Development",
    category: "mobile-app-development",
    startingPrice: "৳40,000",
    color: "#000000",
    hero: {
      title: "iOS App Development",
      description:
        "Professional iPhone and iPad applications with native performance, elegant design, and seamless App Store integration.",
      cta: "Build Your iOS App",
    },
    overview: {
      title: "What Is iOS App Development?",
      content:
        "iOS app development creates high-quality applications for Apple's ecosystem including iPhone, iPad, and Apple Watch. We build native iOS apps using Swift and SwiftUI with Apple's Human Interface Guidelines for intuitive, beautiful user experiences.",
    },
    solutions: {
      title: "What We Can Build",
      items: [
        {
          title: "Business Apps",
          description: "Professional apps for enterprises and startups.",
        },
        {
          title: "Lifestyle Apps",
          description: "Health, fitness, and wellness applications.",
        },
        {
          title: "Finance Apps",
          description: "Banking, budgeting, and investment tools.",
        },
        {
          title: "Travel Apps",
          description: "Booking, navigation, and trip planning.",
        },
        {
          title: "Media Apps",
          description: "Music, video, and photo editing.",
        },
        {
          title: "Productivity Apps",
          description: "Task management and collaboration tools.",
        },
      ],
    },
    process: {
      title: "Our Development Process",
      steps: [
        {
          title: "Discovery",
          description: "Define app goals and target audience.",
        },
        {
          title: "Design",
          description: "Create iOS-native interface designs.",
        },
        {
          title: "Development",
          description: "Build with Swift and SwiftUI.",
        },
        {
          title: "Testing",
          description: "Test on real iOS devices.",
        },
        {
          title: "Deployment",
          description: "Submit to Apple App Store.",
        },
        {
          title: "Support",
          description: "Ongoing maintenance and updates.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "SwiftUI",
          description: "Modern declarative UI framework.",
        },
        {
          title: "Face ID & Touch ID",
          description: "Biometric authentication.",
        },
        {
          title: "Apple Pay",
          description: "Secure payment integration.",
        },
        {
          title: "iCloud Sync",
          description: "Sync data across Apple devices.",
        },
        {
          title: "Push Notifications",
          description: "Apple Push Notification Service.",
        },
        {
          title: "Widgets",
          description: "Home screen widgets for quick access.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Native iOS development",
        "Apple Human Interface Guidelines",
        "App Store optimization",
        "Fast approval process",
        "Ongoing support",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does iOS app development take?",
          answer: "Typically 8-14 weeks depending on features and complexity.",
        },
        {
          question: "Do you handle App Store submission?",
          answer: "Yes, we manage the entire App Store submission process.",
        },
        {
          question: "Can I update the app myself?",
          answer: "We provide ongoing maintenance and update services.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Android App Development",
        slug: "android-app-development",
      },
      {
        name: "Mobile App Maintenance & Support",
        slug: "mobile-app-maintenance-support",
      },
    ],
  },

  "mobile-app-maintenance-support": {
    slug: "mobile-app-maintenance-support",
    name: "Mobile App Maintenance & Support",
    category: "mobile-app-development",
    startingPrice: "৳5,000/month",
    color: "#6B7280",
    hero: {
      title: "Mobile App Maintenance & Support",
      description:
        "Keep your mobile apps updated, secure, and performing optimally with professional maintenance and support services.",
      cta: "Get Support Plan",
    },
    overview: {
      title: "What Is Mobile App Maintenance?",
      content:
        "Mobile app maintenance ensures your apps remain compatible with new OS versions, free of bugs, and performing at their best. We provide ongoing support including updates, bug fixes, performance monitoring, and feature enhancements.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "OS Updates",
          description:
            "Keep apps compatible with new iOS and Android versions.",
        },
        {
          title: "Bug Fixes",
          description: "Quick resolution of technical issues.",
        },
        {
          title: "Performance Optimization",
          description: "Improve speed and reduce crashes.",
        },
        {
          title: "Security Patches",
          description: "Fix vulnerabilities and security issues.",
        },
        {
          title: "Feature Updates",
          description: "Add new features and improvements.",
        },
        {
          title: "Analytics Monitoring",
          description: "Track crashes and user behavior.",
        },
      ],
    },
    process: {
      title: "Our Maintenance Process",
      steps: [
        {
          title: "Initial Audit",
          description: "Comprehensive app health check.",
        },
        {
          title: "Monitoring Setup",
          description: "Configure crash and performance monitoring.",
        },
        {
          title: "Regular Updates",
          description: "Monthly maintenance and updates.",
        },
        {
          title: "Emergency Fixes",
          description: "Priority bug fixes and critical issues.",
        },
        {
          title: "Performance Review",
          description: "Monthly performance reports.",
        },
        {
          title: "Support Access",
          description: "Priority technical support.",
        },
      ],
    },
    features: {
      title: "Features Included",
      items: [
        {
          title: "OS Compatibility",
          description: "Latest iOS and Android support.",
        },
        {
          title: "Crash Monitoring",
          description: "Real-time crash detection and fixes.",
        },
        {
          title: "Security Updates",
          description: "Regular security patches.",
        },
        {
          title: "Performance Reports",
          description: "Monthly app performance reports.",
        },
        {
          title: "Priority Support",
          description: "Quick response to issues.",
        },
        {
          title: "App Store Updates",
          description: "Submit updates to app stores.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Proactive monitoring",
        "Quick response time",
        "Affordable monthly plans",
        "Experienced team",
        "App store management",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What's included in monthly maintenance?",
          answer:
            "OS updates, bug fixes, security patches, and performance monitoring.",
        },
        {
          question: "How quickly do you fix critical bugs?",
          answer: "Critical bugs fixed within 24-48 hours.",
        },
        {
          question: "Can I cancel anytime?",
          answer: "Yes, month-to-month plans with no contracts.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Android App Development",
        slug: "android-app-development",
      },
      {
        name: "iOS App Development",
        slug: "ios-app-development",
      },
    ],
  },

  /////////////////////////

  "cloud-vps-setup": {
    slug: "cloud-vps-setup",
    name: "Cloud & VPS Setup",
    category: "cloud-infrastructure",
    startingPrice: "৳5,000",
    color: "#06B6D4",
    hero: {
      title: "Cloud & VPS Setup",
      description:
        "Configure cloud servers and VPS environments for optimal performance, security, and scalability.",
      cta: "Setup Your Server",
    },
    overview: {
      title: "What Is Cloud & VPS Setup?",
      content:
        "Cloud and VPS setup configures virtual private servers and cloud infrastructure for hosting applications, websites, and databases. We set up and optimize servers on AWS, DigitalOcean, Linode, Vultr, and other providers for maximum performance and security.",
    },
    solutions: {
      title: "What We Can Setup",
      items: [
        {
          title: "AWS EC2 Setup",
          description: "Configure Amazon Web Services cloud servers.",
        },
        {
          title: "DigitalOcean Droplets",
          description: "Setup and optimize DigitalOcean VPS.",
        },
        {
          title: "Linode Servers",
          description: "Configure Linode cloud instances.",
        },
        {
          title: "Vultr Cloud",
          description: "Setup Vultr cloud servers.",
        },
        {
          title: "Google Cloud VMs",
          description: "Configure Google Compute Engine.",
        },
        {
          title: "Azure VMs",
          description: "Setup Microsoft Azure virtual machines.",
        },
      ],
    },
    process: {
      title: "Our Setup Process",
      steps: [
        {
          title: "Provider Selection",
          description: "Choose best cloud provider for your needs.",
        },
        {
          title: "Server Provisioning",
          description: "Create and configure virtual server.",
        },
        {
          title: "Security Hardening",
          description: "Configure firewalls and security settings.",
        },
        {
          title: "Software Installation",
          description: "Install required software and dependencies.",
        },
        {
          title: "Performance Tuning",
          description: "Optimize server for performance.",
        },
        {
          title: "Monitoring Setup",
          description: "Configure monitoring and alerts.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Multiple Providers",
          description: "AWS, DigitalOcean, Linode, Vultr, GCP, Azure.",
        },
        {
          title: "Security Hardening",
          description: "Firewall, fail2ban, and SSH security.",
        },
        {
          title: "Auto-scaling",
          description: "Scale resources based on demand.",
        },
        {
          title: "Load Balancing",
          description: "Distribute traffic across servers.",
        },
        {
          title: "Backup Configuration",
          description: "Automated backup schedules.",
        },
        {
          title: "Monitoring",
          description: "Server health and performance monitoring.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Expert cloud configuration",
        "Security best practices",
        "Performance optimized",
        "24/7 monitoring",
        "Cost optimization",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which cloud provider do you recommend?",
          answer:
            "Depends on your needs. DigitalOcean for simplicity, AWS for enterprise features.",
        },
        {
          question: "Do you manage the server after setup?",
          answer: "Yes, we offer ongoing management and maintenance plans.",
        },
        {
          question: "Can you migrate from shared hosting?",
          answer: "Yes, we can migrate your site from shared hosting to VPS.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Server Deployment & Configuration",
        slug: "server-deployment-configuration",
      },
      {
        name: "Deployment Automation (CI/CD)",
        slug: "deployment-automation-cicd",
      },
      {
        name: "Website & Application Hosting",
        slug: "website-application-hosting",
      },
      {
        name: "Domain, DNS & SSL Configuration",
        slug: "domain-dns-ssl-configuration",
      },
    ],
  },

  "server-deployment-configuration": {
    slug: "server-deployment-configuration",
    name: "Server Deployment & Configuration",
    category: "cloud-infrastructure",
    startingPrice: "৳8,000",
    color: "#8B5CF6",
    hero: {
      title: "Server Deployment & Configuration",
      description:
        "Deploy and configure applications on production servers with proper setup, security, and optimization.",
      cta: "Deploy Your App",
    },
    overview: {
      title: "What Is Server Deployment?",
      content:
        "Server deployment involves configuring production servers and deploying applications for public access. We handle everything from web server setup (Nginx/Apache) to database configuration and application deployment with proper security and performance optimization.",
    },
    solutions: {
      title: "What We Can Deploy",
      items: [
        {
          title: "Web Applications",
          description: "Deploy React, Next.js, Vue, Angular apps.",
        },
        {
          title: "Backend APIs",
          description: "Deploy Node.js, Python, PHP, Ruby APIs.",
        },
        {
          title: "Databases",
          description: "Setup MySQL, PostgreSQL, MongoDB, Redis.",
        },
        {
          title: "Static Sites",
          description: "Deploy static HTML/CSS sites.",
        },
        {
          title: "WordPress",
          description: "Optimized WordPress deployment.",
        },
        {
          title: "Docker Containers",
          description: "Deploy containerized applications.",
        },
      ],
    },
    process: {
      title: "Our Deployment Process",
      steps: [
        {
          title: "Server Access",
          description: "Configure SSH access and security.",
        },
        {
          title: "Environment Setup",
          description: "Install Node.js, Python, PHP, or Ruby.",
        },
        {
          title: "Web Server Config",
          description: "Configure Nginx or Apache.",
        },
        {
          title: "Database Setup",
          description: "Install and configure database.",
        },
        {
          title: "Application Deployment",
          description: "Deploy application code.",
        },
        {
          title: "Testing",
          description: "Verify deployment and functionality.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Nginx/Apache",
          description: "Optimized web server configuration.",
        },
        {
          title: "Process Management",
          description: "PM2, Supervisor, or systemd setup.",
        },
        {
          title: "Environment Variables",
          description: "Secure environment configuration.",
        },
        {
          title: "Log Management",
          description: "Configure logging and rotation.",
        },
        {
          title: "SSL Setup",
          description: "HTTPS with Let's Encrypt.",
        },
        {
          title: "Firewall Configuration",
          description: "UFW or iptables setup.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Production-ready deployment",
        "Security best practices",
        "Performance optimization",
        "Zero-downtime deployment",
        "Complete documentation",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you support Docker deployment?",
          answer: "Yes, we deploy Docker containers and Docker Compose setups.",
        },
        {
          question: "Can you deploy my existing code?",
          answer: "Yes, we can deploy code from GitHub, GitLab, or Bitbucket.",
        },
        {
          question: "Do you provide deployment scripts?",
          answer: "Yes, we provide automation scripts for future deployments.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Cloud & VPS Setup",
        slug: "cloud-vps-setup",
      },
      {
        name: "Deployment Automation (CI/CD)",
        slug: "deployment-automation-cicd",
      },
      {
        name: "Website & Application Hosting",
        slug: "website-application-hosting",
      },
      {
        name: "Domain, DNS & SSL Configuration",
        slug: "domain-dns-ssl-configuration",
      },
    ],
  },

  "deployment-automation-ci-cd": {
    slug: "deployment-automation-ci-cd",
    name: "Deployment Automation (CI/CD)",
    category: "cloud-infrastructure",
    startingPrice: "৳12,000",
    color: "#10B981",
    hero: {
      title: "Deployment Automation (CI/CD)",
      description:
        "Automated deployments using GitHub Actions, GitLab CI, and modern CI/CD workflows for faster, reliable releases.",
      cta: "Setup CI/CD",
    },
    overview: {
      title: "What Is CI/CD?",
      content:
        "CI/CD (Continuous Integration/Continuous Deployment) automates the process of testing and deploying code changes. We setup automated pipelines that build, test, and deploy your applications whenever you push code, eliminating manual work and reducing errors.",
    },
    solutions: {
      title: "What We Can Automate",
      items: [
        {
          title: "GitHub Actions",
          description: "Automated workflows with GitHub Actions.",
        },
        {
          title: "GitLab CI/CD",
          description: "Complete CI/CD pipelines in GitLab.",
        },
        {
          title: "Jenkins",
          description: "Custom Jenkins pipeline setup.",
        },
        {
          title: "Bitbucket Pipelines",
          description: "CI/CD for Bitbucket repositories.",
        },
        {
          title: "CircleCI",
          description: "Fast and scalable CI/CD.",
        },
        {
          title: "Deployer",
          description: "PHP deployment automation.",
        },
      ],
    },
    process: {
      title: "Our CI/CD Setup Process",
      steps: [
        {
          title: "Analysis",
          description: "Review deployment workflow.",
        },
        {
          title: "Pipeline Design",
          description: "Design build and test stages.",
        },
        {
          title: "Configuration",
          description: "Write CI/CD configuration files.",
        },
        {
          title: "Testing",
          description: "Test pipeline with sample commits.",
        },
        {
          title: "Deployment",
          description: "Configure auto-deployment.",
        },
        {
          title: "Monitoring",
          description: "Monitor pipeline runs and failures.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Auto Testing",
          description: "Run tests automatically on each push.",
        },
        {
          title: "Auto Deployment",
          description: "Deploy on successful tests.",
        },
        {
          title: "Rollback Support",
          description: "Easy rollback to previous versions.",
        },
        {
          title: "Multiple Environments",
          description: "Dev, staging, production workflows.",
        },
        {
          title: "Email Notifications",
          description: "Alert on pipeline failures.",
        },
        {
          title: "Cache Optimization",
          description: "Faster builds with dependency caching.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Faster deployments",
        "Reduce human error",
        "Automated testing",
        "Easy rollback",
        "Complete setup",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which CI/CD tools do you support?",
          answer:
            "GitHub Actions, GitLab CI, Jenkins, CircleCI, Bitbucket Pipelines.",
        },
        {
          question: "Can you setup auto-deployment?",
          answer: "Yes, automatic deployment on git push to specific branches.",
        },
        {
          question: "Do you provide deployment scripts?",
          answer:
            "Yes, we provide YAML configuration files for your CI/CD platform.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Cloud & VPS Setup",
        slug: "cloud-vps-setup",
      },
      {
        name: "Server Deployment & Configuration",
        slug: "server-deployment-configuration",
      },
      {
        name: "Website & Application Hosting",
        slug: "website-application-hosting",
      },
    ],
  },

  "website-application-hosting": {
    slug: "website-application-hosting",
    name: "Website & Application Hosting",
    category: "cloud-infrastructure",
    startingPrice: "৳3,000/month",
    color: "#F59E0B",
    hero: {
      title: "Website & Application Hosting",
      description:
        "Managed hosting setup for websites and applications with guaranteed uptime, security, and performance.",
      cta: "Start Hosting",
    },
    overview: {
      title: "What Is Managed Hosting?",
      content:
        "Managed hosting provides fully configured and maintained servers for your websites and applications. We handle server management, security updates, backups, and monitoring so you can focus on your business.",
    },
    solutions: {
      title: "Hosting Plans",
      items: [
        {
          title: "Shared Hosting",
          description: "Budget-friendly for small websites.",
        },
        {
          title: "VPS Hosting",
          description: "Dedicated resources for growing sites.",
        },
        {
          title: "Cloud Hosting",
          description: "Scalable hosting on AWS, GCP, or Azure.",
        },
        {
          title: "WordPress Hosting",
          description: "Optimized hosting for WordPress sites.",
        },
        {
          title: "Node.js Hosting",
          description: "Hosting for Node.js applications.",
        },
        {
          title: "Static Site Hosting",
          description: "Fast CDN hosting for static sites.",
        },
      ],
    },
    process: {
      title: "Our Hosting Setup",
      steps: [
        {
          title: "Requirements",
          description: "Understand traffic and resource needs.",
        },
        {
          title: "Server Selection",
          description: "Choose appropriate hosting provider.",
        },
        {
          title: "Setup",
          description: "Configure server and security.",
        },
        {
          title: "Migration",
          description: "Migrate existing website or app.",
        },
        {
          title: "Monitoring",
          description: "Setup uptime and performance monitoring.",
        },
        {
          title: "Launch",
          description: "Go live with managed hosting.",
        },
      ],
    },
    features: {
      title: "Features Included",
      items: [
        {
          title: "99.9% Uptime",
          description: "Guaranteed server availability.",
        },
        {
          title: "Daily Backups",
          description: "Automated backup and restore.",
        },
        {
          title: "Security Monitoring",
          description: "24/7 security scanning.",
        },
        {
          title: "SSL Certificate",
          description: "Free SSL with auto-renewal.",
        },
        {
          title: "CDN Integration",
          description: "Global content delivery.",
        },
        {
          title: "Email Support",
          description: "Priority technical support.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Managed hosting service",
        "24/7 monitoring",
        "Free migration",
        "Daily backups",
        "Expert support",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Can you migrate my existing site?",
          answer: "Yes, we provide free migration from your current host.",
        },
        {
          question: "What happens if my site goes down?",
          answer: "We monitor 24/7 and fix issues immediately.",
        },
        {
          question: "Is there a contract?",
          answer: "No, month-to-month billing with no long-term contracts.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Cloud & VPS Setup",
        slug: "cloud-vps-setup",
      },
      {
        name: "Server Deployment & Configuration",
        slug: "server-deployment-configuration",
      },
      {
        name: "Domain, DNS & SSL Configuration",
        slug: "domain-dns-ssl-configuration",
      },
    ],
  },

  "domain-dns-ssl-configuration": {
    slug: "domain-dns-ssl-configuration",
    name: "Domain, DNS & SSL Configuration",
    category: "cloud-infrastructure",
    startingPrice: "৳2,000",
    color: "#EF4444",
    hero: {
      title: "Domain, DNS & SSL Configuration",
      description:
        "Professional domain setup, DNS management, and SSL security for your websites and applications.",
      cta: "Configure Now",
    },
    overview: {
      title: "What Is Domain & SSL Setup?",
      content:
        "Domain and SSL configuration connects your custom domain to your website and secures it with HTTPS encryption. We handle domain registration, DNS records, email configuration, and SSL certificates for complete security.",
    },
    solutions: {
      title: "What We Configure",
      items: [
        {
          title: "Domain Registration",
          description: "Register new domains or transfer existing.",
        },
        {
          title: "DNS Management",
          description: "Configure A, CNAME, MX, and TXT records.",
        },
        {
          title: "SSL Certificates",
          description: "Install and configure SSL/TLS certificates.",
        },
        {
          title: "Email Configuration",
          description: "Setup email hosting and MX records.",
        },
        {
          title: "Subdomain Setup",
          description: "Configure blog, shop, or app subdomains.",
        },
        {
          title: "Cloudflare Setup",
          description: "CDN, DDoS protection, and DNS.",
        },
      ],
    },
    process: {
      title: "Our Configuration Process",
      steps: [
        {
          title: "Domain Check",
          description: "Verify domain availability.",
        },
        {
          title: "DNS Planning",
          description: "Plan DNS record requirements.",
        },
        {
          title: "Configuration",
          description: "Setup domain and DNS records.",
        },
        {
          title: "SSL Installation",
          description: "Install and configure SSL.",
        },
        {
          title: "Testing",
          description: "Verify domain and SSL working.",
        },
        {
          title: "Documentation",
          description: "Provide DNS and SSL documentation.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Free SSL",
          description: "Let's Encrypt SSL certificates.",
        },
        {
          title: "Auto-renewal",
          description: "Domain and SSL auto-renewal.",
        },
        {
          title: "DNS Management",
          description: "Easy DNS record management.",
        },
        {
          title: "Email Forwarding",
          description: "Custom email address forwarding.",
        },
        {
          title: "Cloudflare CDN",
          description: "Fast global content delivery.",
        },
        {
          title: "DDoS Protection",
          description: "Cloudflare security protection.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Expert DNS configuration",
        "Free SSL certificates",
        "Cloudflare optimization",
        "Email setup included",
        "Complete documentation",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does DNS propagation take?",
          answer: "Usually 24-48 hours for full global propagation.",
        },
        {
          question: "Do I need to buy a domain?",
          answer: "We can help you register a new domain or use your existing.",
        },
        {
          question: "Is SSL included?",
          answer: "Yes, we provide free Let's Encrypt SSL certificates.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Cloud & VPS Setup",
        slug: "cloud-vps-setup",
      },
      {
        name: "Server Deployment & Configuration",
        slug: "server-deployment-configuration",
      },
      {
        name: "Website & Application Hosting",
        slug: "website-application-hosting",
      },
    ],
  },

  ////////////////////////

  "search-engine-optimization-seo": {
    slug: "search-engine-optimization-seo",
    name: "Search Engine Optimization (SEO)",
    category: "digital-marketing",
    startingPrice: "৳8,000",
    color: "#10B981",
    hero: {
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve search rankings, organic traffic, and online visibility with technical and content SEO strategies.",
      cta: "Boost Your Rankings",
    },
    overview: {
      title: "What Is SEO?",
      content:
        "Search Engine Optimization (SEO) improves your website's visibility in search engine results. We optimize technical elements, content, and backlinks to help your business rank higher on Google, Bing, and other search engines for relevant keywords.",
    },
    solutions: {
      title: "What We Optimize",
      items: [
        {
          title: "Technical SEO",
          description: "Site speed, mobile optimization, and crawlability.",
        },
        {
          title: "On-Page SEO",
          description: "Meta tags, headers, content, and keywords.",
        },
        {
          title: "Off-Page SEO",
          description: "Backlinks, citations, and authority building.",
        },
        {
          title: "Local SEO",
          description: "Google Business Profile and local rankings.",
        },
        {
          title: "E-commerce SEO",
          description: "Product pages, categories, and reviews.",
        },
        {
          title: "Content SEO",
          description: "Keyword research and content optimization.",
        },
      ],
    },
    process: {
      title: "Our SEO Process",
      steps: [
        {
          title: "Audit",
          description: "Analyze current SEO performance.",
        },
        {
          title: "Keyword Research",
          description: "Find high-value keywords for your business.",
        },
        {
          title: "Optimization",
          description: "Optimize technical and on-page elements.",
        },
        {
          title: "Content Creation",
          description: "Create SEO-optimized content.",
        },
        {
          title: "Link Building",
          description: "Build quality backlinks.",
        },
        {
          title: "Reporting",
          description: "Monthly ranking and traffic reports.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Keyword Tracking",
          description: "Monitor ranking for target keywords.",
        },
        {
          title: "Competitor Analysis",
          description: "Track competitor SEO strategies.",
        },
        {
          title: "Technical Audits",
          description: "Monthly technical SEO checks.",
        },
        {
          title: "Content Strategy",
          description: "Data-driven content planning.",
        },
        {
          title: "Backlink Monitoring",
          description: "Track and analyze backlinks.",
        },
        {
          title: "Performance Reports",
          description: "Detailed monthly SEO reports.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "White-hat SEO techniques",
        "Data-driven strategies",
        "Monthly reporting",
        "Transparent communication",
        "Proven results",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does SEO take to show results?",
          answer:
            "Typically 3-6 months to see significant ranking improvements.",
        },
        {
          question: "Do you guarantee #1 rankings?",
          answer:
            "No one can guarantee #1 rankings, but we guarantee SEO best practices.",
        },
        {
          question: "What's included in monthly SEO?",
          answer:
            "Technical SEO, content optimization, link building, and reporting.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Content Marketing",
        slug: "content-marketing",
      },
      {
        name: "Pay-Per-Click (PPC) Advertising",
        slug: "pay-per-click-ppc-advertising",
      },
      {
        name: "Social Media Marketing",
        slug: "social-media-marketing",
      },
    ],
  },

  "content-marketing": {
    slug: "content-marketing",
    name: "Content Marketing",
    category: "digital-marketing",
    startingPrice: "৳6,000",
    color: "#8B5CF6",
    hero: {
      title: "Content Marketing",
      description:
        "Blog posts, articles, and content strategies to attract customers and drive organic traffic.",
      cta: "Start Content Marketing",
    },
    overview: {
      title: "What Is Content Marketing?",
      content:
        "Content marketing creates valuable, relevant content to attract and retain customers. We produce blog posts, articles, guides, and other content that educates your audience and drives organic traffic.",
    },
    solutions: {
      title: "What We Create",
      items: [
        {
          title: "Blog Posts",
          description: "SEO-optimized blog articles.",
        },
        {
          title: "Case Studies",
          description: "Success stories and customer results.",
        },
        {
          title: "Whitepapers",
          description: "In-depth industry guides and reports.",
        },
        {
          title: "Email Newsletters",
          description: "Engaging email content for subscribers.",
        },
        {
          title: "Social Media Content",
          description: "Platform-specific engaging posts.",
        },
        {
          title: "Video Scripts",
          description: "Scripts for YouTube and social videos.",
        },
      ],
    },
    process: {
      title: "Our Content Process",
      steps: [
        {
          title: "Strategy",
          description: "Define content goals and topics.",
        },
        {
          title: "Research",
          description: "Keyword and topic research.",
        },
        {
          title: "Creation",
          description: "Write and design content.",
        },
        {
          title: "SEO Optimization",
          description: "Optimize for search engines.",
        },
        {
          title: "Publishing",
          description: "Publish on website and social.",
        },
        {
          title: "Promotion",
          description: "Promote through email and social.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "SEO-Optimized",
          description: "Content designed for search visibility.",
        },
        {
          title: "Keyword Research",
          description: "Target high-value keywords.",
        },
        {
          title: "Editorial Calendar",
          description: "30-day content planning.",
        },
        {
          title: "Expert Writers",
          description: "Industry-specific content writers.",
        },
        {
          title: "Content Repurposing",
          description: "Turn blogs into social posts.",
        },
        {
          title: "Performance Tracking",
          description: "Track traffic and engagement.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "SEO-focused content",
        "Expert writers",
        "Consistent publishing",
        "Performance tracking",
        "Affordable packages",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How many blog posts per month?",
          answer: "Typically 4-8 blog posts depending on package.",
        },
        {
          question: "Do you optimize for SEO?",
          answer: "Yes, all content is SEO-optimized for target keywords.",
        },
        {
          question: "Can you write for any industry?",
          answer: "Yes, we have writers specializing in various industries.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Search Engine Optimization (SEO)",
        slug: "search-engine-optimization-seo",
      },
      {
        name: "Social Media Marketing",
        slug: "social-media-marketing",
      },
      {
        name: "Email Marketing",
        slug: "email-marketing",
      },
    ],
  },

  "social-media-marketing": {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "digital-marketing",
    startingPrice: "৳8,000",
    color: "#3B82F6",
    hero: {
      title: "Social Media Marketing",
      description:
        "Grow your brand presence on Facebook, Instagram, LinkedIn, and more with engaging content and community management.",
      cta: "Grow Your Social Media",
    },
    overview: {
      title: "What Is Social Media Marketing?",
      content:
        "Social media marketing handles your brand's presence across social platforms. We create engaging content, manage posts, interact with followers, and grow your audience to build brand loyalty and drive traffic.",
    },
    solutions: {
      title: "What We Manage",
      items: [
        {
          title: "Facebook Marketing",
          description: "Page management, posts, and engagement.",
        },
        {
          title: "Instagram Marketing",
          description: "Posts, stories, reels, and engagement.",
        },
        {
          title: "LinkedIn Marketing",
          description: "Company page and professional content.",
        },
        {
          title: "Twitter Marketing",
          description: "Tweets, engagement, and trends.",
        },
        {
          title: "Content Calendar",
          description: "Strategic content planning and scheduling.",
        },
        {
          title: "Community Management",
          description: "Respond to comments and messages.",
        },
      ],
    },
    process: {
      title: "Our Marketing Process",
      steps: [
        {
          title: "Strategy",
          description: "Define goals and target audience.",
        },
        {
          title: "Content Planning",
          description: "Create monthly content calendar.",
        },
        {
          title: "Content Creation",
          description: "Design graphics and write captions.",
        },
        {
          title: "Scheduling",
          description: "Schedule posts for optimal times.",
        },
        {
          title: "Engagement",
          description: "Respond to comments and messages.",
        },
        {
          title: "Reporting",
          description: "Monthly performance and growth reports.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Content Calendar",
          description: "30-day content planning schedule.",
        },
        {
          title: "Graphic Design",
          description: "Custom social media graphics.",
        },
        {
          title: "Caption Writing",
          description: "Engaging, brand-aligned captions.",
        },
        {
          title: "Hashtag Strategy",
          description: "Optimized hashtag research.",
        },
        {
          title: "Community Engagement",
          description: "Daily engagement with followers.",
        },
        {
          title: "Analytics",
          description: "Monthly growth and engagement reports.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Consistent content posting",
        "Brand voice alignment",
        "Engagement focus",
        "Monthly reporting",
        "Affordable plans",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How many posts per week?",
          answer: "Typically 5-7 posts per week across platforms.",
        },
        {
          question: "Do you create content?",
          answer: "Yes, we create graphics, write captions, and plan content.",
        },
        {
          question: "Can you manage multiple platforms?",
          answer: "Yes, we manage Facebook, Instagram, LinkedIn, and Twitter.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Search Engine Optimization (SEO)",
        slug: "search-engine-optimization-seo",
      },
      {
        name: "Content Marketing",
        slug: "content-marketing",
      },
      {
        name: "Social Media Advertising",
        slug: "social-media-advertising",
      },
    ],
  },

  "pay-per-click-ppc-advertising": {
    slug: "pay-per-click-ppc-advertising",
    name: "Pay-Per-Click (PPC) Advertising",
    category: "digital-marketing",
    startingPrice: "৳10,000",
    color: "#EA4335",
    hero: {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Targeted Google Ads campaigns focused on leads, sales, and maximum return on ad spend.",
      cta: "Start PPC Campaign",
    },
    overview: {
      title: "What Is PPC Advertising?",
      content:
        "PPC (Pay-Per-Click) advertising creates paid search campaigns that appear on Google search results. We handle keyword research, ad creation, bid management, and conversion tracking to generate qualified leads and sales.",
    },
    solutions: {
      title: "What We Manage",
      items: [
        {
          title: "Search Ads",
          description: "Text ads on Google search results.",
        },
        {
          title: "Display Ads",
          description: "Banner ads on partner websites.",
        },
        {
          title: "Shopping Ads",
          description: "Product ads for e-commerce stores.",
        },
        {
          title: "YouTube Ads",
          description: "Video ads on YouTube.",
        },
        {
          title: "Remarketing",
          description: "Target previous website visitors.",
        },
        {
          title: "Local Service Ads",
          description: "Ads for local businesses.",
        },
      ],
    },
    process: {
      title: "Our PPC Process",
      steps: [
        {
          title: "Research",
          description: "Keyword research and competitor analysis.",
        },
        {
          title: "Campaign Setup",
          description: "Create campaigns, ad groups, and ads.",
        },
        {
          title: "Tracking Setup",
          description: "Install conversion tracking and analytics.",
        },
        {
          title: "Launch",
          description: "Launch and monitor campaigns.",
        },
        {
          title: "Optimization",
          description: "Optimize bids, keywords, and ads.",
        },
        {
          title: "Reporting",
          description: "Monthly performance and ROI reports.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Keyword Research",
          description: "High-intent keyword targeting.",
        },
        {
          title: "Ad Copy Creation",
          description: "Compelling, click-worthy ads.",
        },
        {
          title: "Bid Management",
          description: "Budget and bid optimization.",
        },
        {
          title: "A/B Testing",
          description: "Test ad variations for performance.",
        },
        {
          title: "Negative Keywords",
          description: "Exclude irrelevant searches.",
        },
        {
          title: "Conversion Tracking",
          description: "Track leads, calls, and purchases.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Google Ads expertise",
        "ROI-focused strategies",
        "Transparent reporting",
        "Monthly optimization",
        "No long-term contracts",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What's your management fee?",
          answer: "Management fee is 10-15% of ad spend or fixed monthly fee.",
        },
        {
          question: "Do I need a minimum budget?",
          answer: "Recommended minimum ad spend is ৳20,000/month.",
        },
        {
          question: "How soon will I see results?",
          answer:
            "Initial results within 1-2 weeks, optimized results in 1-2 months.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Search Engine Optimization (SEO)",
        slug: "search-engine-optimization-seo",
      },
      {
        name: "Social Media Advertising",
        slug: "social-media-advertising",
      },
      {
        name: "E-commerce Marketing",
        slug: "e-commerce-marketing",
      },
    ],
  },

  "email-marketing": {
    slug: "email-marketing",
    name: "Email Marketing",
    category: "digital-marketing",
    startingPrice: "৳5,000",
    color: "#EF4444",
    hero: {
      title: "Email Marketing",
      description:
        "Email campaigns, newsletters, and customer retention strategies to nurture leads and drive repeat business.",
      cta: "Start Email Marketing",
    },
    overview: {
      title: "What Is Email Marketing?",
      content:
        "Email marketing builds relationships with customers through targeted email campaigns. We create newsletters, promotional emails, and automated sequences that nurture leads and drive conversions.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "Newsletters",
          description: "Regular updates and company news.",
        },
        {
          title: "Welcome Sequences",
          description: "Automated welcome emails for new subscribers.",
        },
        {
          title: "Abandoned Cart Emails",
          description: "Recover lost sales with cart reminders.",
        },
        {
          title: "Promotional Campaigns",
          description: "Product launch and sale announcements.",
        },
        {
          title: "Customer Retention",
          description: "Loyalty programs and re-engagement emails.",
        },
        {
          title: "Transactional Emails",
          description: "Order confirmations and shipping updates.",
        },
      ],
    },
    process: {
      title: "Our Email Process",
      steps: [
        {
          title: "Strategy",
          description: "Define goals and audience segments.",
        },
        {
          title: "List Building",
          description: "Setup signup forms and lead magnets.",
        },
        {
          title: "Content Creation",
          description: "Write engaging email copy.",
        },
        {
          title: "Design",
          description: "Create responsive email templates.",
        },
        {
          title: "Automation Setup",
          description: "Setup drip sequences and workflows.",
        },
        {
          title: "Analytics",
          description: "Track opens, clicks, and conversions.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Email Templates",
          description: "Custom designed responsive templates.",
        },
        {
          title: "Automation",
          description: "Automated drip campaigns.",
        },
        {
          title: "Segmentation",
          description: "Target specific customer groups.",
        },
        {
          title: "A/B Testing",
          description: "Test subject lines and content.",
        },
        {
          title: "Analytics",
          description: "Open rates, click rates, and conversions.",
        },
        {
          title: "GDPR Compliant",
          description: "Compliant data handling.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "High deliverability rates",
        "Engaging email design",
        "Automation expertise",
        "Segmentation strategy",
        "ROI tracking",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which email platform do you use?",
          answer: "Mailchimp, Klaviyo, SendGrid, or your preferred platform.",
        },
        {
          question: "How often should I send emails?",
          answer: "Typically 2-4 emails per month for newsletters.",
        },
        {
          question: "Can you build my email list?",
          answer: "Yes, we create signup forms and lead magnets.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Content Marketing",
        slug: "content-marketing",
      },
      {
        name: "Social Media Marketing",
        slug: "social-media-marketing",
      },
      {
        name: "E-commerce Marketing",
        slug: "e-commerce-marketing",
      },
    ],
  },

  "influencer-marketing": {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    category: "digital-marketing",
    startingPrice: "৳15,000",
    color: "#EC4899",
    hero: {
      title: "Influencer Marketing",
      description:
        "Collaborate with influencers to increase brand awareness, reach new audiences, and drive authentic engagement.",
      cta: "Start Influencer Campaign",
    },
    overview: {
      title: "What Is Influencer Marketing?",
      content:
        "Influencer marketing partners with social media influencers to promote your brand to their followers. We identify relevant influencers, manage collaborations, and track campaign performance.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "Influencer Discovery",
          description: "Find relevant influencers in your niche.",
        },
        {
          title: "Campaign Management",
          description: "End-to-end campaign coordination.",
        },
        {
          title: "Content Collaboration",
          description: "Sponsored posts, reviews, and unboxings.",
        },
        {
          title: "Affiliate Programs",
          description: "Performance-based influencer partnerships.",
        },
        {
          title: "Brand Ambassadors",
          description: "Long-term brand representative programs.",
        },
        {
          title: "Performance Tracking",
          description: "Track reach, engagement, and ROI.",
        },
      ],
    },
    process: {
      title: "Our Influencer Process",
      steps: [
        {
          title: "Strategy",
          description: "Define goals and influencer tiers.",
        },
        {
          title: "Research",
          description: "Find authentic, relevant influencers.",
        },
        {
          title: "Outreach",
          description: "Contact and negotiate partnerships.",
        },
        {
          title: "Campaign Setup",
          description: "Brief influencers and provide guidelines.",
        },
        {
          title: "Content Review",
          description: "Review and approve content.",
        },
        {
          title: "Analysis",
          description: "Track and report campaign results.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Influencer Vetting",
          description: "Authenticity and engagement verification.",
        },
        {
          title: "Campaign Briefs",
          description: "Clear guidelines and requirements.",
        },
        {
          title: "Content Rights",
          description: "Permission to repurpose content.",
        },
        {
          title: "Performance Tracking",
          description: "Track reach, engagement, and conversions.",
        },
        {
          title: "Compliance",
          description: "FTC disclosure requirements.",
        },
        {
          title: "ROI Analysis",
          description: "Campaign effectiveness reporting.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Authentic influencer matching",
        "Campaign management",
        "Performance tracking",
        "Budget optimization",
        "Compliance assurance",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How do you find influencers?",
          answer: "We use influencer databases and manual research.",
        },
        {
          question: "What's the minimum budget?",
          answer: "Recommended minimum ৳15,000/month for micro-influencers.",
        },
        {
          question: "Do you work with micro-influencers?",
          answer: "Yes, we work with nano to macro influencers.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Social Media Marketing",
        slug: "social-media-marketing",
      },
      {
        name: "Social Media Advertising",
        slug: "social-media-advertising",
      },
      {
        name: "Affiliate Marketing",
        slug: "affiliate-marketing",
      },
    ],
  },

  "affiliate-marketing": {
    slug: "affiliate-marketing",
    name: "Affiliate Marketing",
    category: "digital-marketing",
    startingPrice: "৳12,000",
    color: "#F59E0B",
    hero: {
      title: "Affiliate Marketing",
      description:
        "Build affiliate programs that generate performance-based sales and expand your reach through partners.",
      cta: "Launch Affiliate Program",
    },
    overview: {
      title: "What Is Affiliate Marketing?",
      content:
        "Affiliate marketing creates partnerships where affiliates promote your products for a commission on sales. We set up and manage affiliate programs that drive cost-effective customer acquisition.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "Program Setup",
          description: "Create affiliate program structure.",
        },
        {
          title: "Affiliate Recruitment",
          description: "Find and recruit quality affiliates.",
        },
        {
          title: "Commission Management",
          description: "Track and pay affiliate commissions.",
        },
        {
          title: "Affiliate Portal",
          description: "Dashboard for affiliate partners.",
        },
        {
          title: "Promotional Materials",
          description: "Banners, links, and content for affiliates.",
        },
        {
          title: "Performance Tracking",
          description: "Track clicks, sales, and commissions.",
        },
      ],
    },
    process: {
      title: "Our Affiliate Process",
      steps: [
        {
          title: "Strategy",
          description: "Define commission structure and rules.",
        },
        {
          title: "Platform Setup",
          description: "Setup affiliate tracking system.",
        },
        {
          title: "Recruitment",
          description: "Find and invite potential affiliates.",
        },
        {
          title: "Onboarding",
          description: "Train affiliates on your products.",
        },
        {
          title: "Management",
          description: "Ongoing affiliate support and optimization.",
        },
        {
          title: "Payouts",
          description: "Process commission payments.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Tracking System",
          description: "Accurate click and sale tracking.",
        },
        {
          title: "Commission Rules",
          description: "Custom commission structures.",
        },
        {
          title: "Affiliate Dashboard",
          description: "Real-time performance data.",
        },
        {
          title: "Fraud Protection",
          description: "Detect and prevent fraudulent activity.",
        },
        {
          title: "Automated Payouts",
          description: "Automatic commission payments.",
        },
        {
          title: "Performance Reports",
          description: "Detailed affiliate analytics.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Performance-based model",
        "Quality affiliate recruitment",
        "Fraud protection",
        "Automated tracking",
        "Scalable programs",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What commission rates should I offer?",
          answer: "Typically 10-30% depending on product margins.",
        },
        {
          question: "How do you track affiliate sales?",
          answer: "Using affiliate tracking software with unique links.",
        },
        {
          question: "Can I recruit my own affiliates?",
          answer: "Yes, we manage your existing affiliates too.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Influencer Marketing",
        slug: "influencer-marketing",
      },
      {
        name: "E-commerce Marketing",
        slug: "e-commerce-marketing",
      },
      {
        name: "Email Marketing",
        slug: "email-marketing",
      },
    ],
  },

  "social-media-advertising": {
    slug: "social-media-advertising",
    name: "Social Media Advertising",
    category: "digital-marketing",
    startingPrice: "৳10,000",
    color: "#06B6D4",
    hero: {
      title: "Social Media Advertising",
      description:
        "Paid advertising campaigns on Facebook, Instagram, LinkedIn, and TikTok to reach your target audience.",
      cta: "Start Advertising",
    },
    overview: {
      title: "What Is Social Media Advertising?",
      content:
        "Social media advertising creates paid campaigns across multiple platforms to reach specific audiences. We manage ads on Facebook, Instagram, LinkedIn, and TikTok for brand awareness, leads, and sales.",
    },
    solutions: {
      title: "Platforms We Manage",
      items: [
        {
          title: "Facebook Ads",
          description: "Feed, stories, and video ads.",
        },
        {
          title: "Instagram Ads",
          description: "Feed, stories, and reels ads.",
        },
        {
          title: "LinkedIn Ads",
          description: "B2B audience targeting.",
        },
        {
          title: "TikTok Ads",
          description: "Short-form video advertising.",
        },
        {
          title: "Twitter Ads",
          description: "Promoted tweets and accounts.",
        },
        {
          title: "Pinterest Ads",
          description: "Visual discovery advertising.",
        },
      ],
    },
    process: {
      title: "Our Advertising Process",
      steps: [
        {
          title: "Audience Research",
          description: "Define target audience parameters.",
        },
        {
          title: "Platform Selection",
          description: "Choose best platforms for your goals.",
        },
        {
          title: "Ad Creation",
          description: "Create engaging ad creatives.",
        },
        {
          title: "Campaign Setup",
          description: "Setup targeting and budgets.",
        },
        {
          title: "Launch",
          description: "Launch and monitor campaigns.",
        },
        {
          title: "Optimization",
          description: "Optimize for best performance.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Cross-Platform Management",
          description: "Manage multiple platforms from one dashboard.",
        },
        {
          title: "Audience Targeting",
          description: "Demographic, interest, and behavior targeting.",
        },
        {
          title: "Retargeting",
          description: "Target website and engagement audiences.",
        },
        {
          title: "Ad Creative",
          description: "Images, videos, and carousels.",
        },
        {
          title: "Budget Management",
          description: "Daily and lifetime budget optimization.",
        },
        {
          title: "Performance Reporting",
          description: "Unified cross-platform analytics.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Multi-platform expertise",
        "Creative ad design",
        "Precise targeting",
        "Budget optimization",
        "ROI tracking",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which platforms should I advertise on?",
          answer: "Depends on your audience. We recommend based on research.",
        },
        {
          question: "What's the minimum ad budget?",
          answer: "Recommended minimum ৳10,000/month per platform.",
        },
        {
          question: "Can you manage multiple platforms?",
          answer: "Yes, we manage all major social platforms.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Social Media Marketing",
        slug: "social-media-marketing",
      },
      {
        name: "Pay-Per-Click (PPC) Advertising",
        slug: "pay-per-click-ppc-advertising",
      },
      {
        name: "Influencer Marketing",
        slug: "influencer-marketing",
      },
    ],
  },

  "e-commerce-marketing": {
    slug: "e-commerce-marketing",
    name: "E-commerce Marketing",
    category: "digital-marketing",
    startingPrice: "৳12,000",
    color: "#8B5CF6",
    hero: {
      title: "E-commerce Marketing",
      description:
        "Marketing strategies designed specifically for online stores to increase sales, reduce cart abandonment, and grow revenue.",
      cta: "Grow Your Store",
    },
    overview: {
      title: "What Is E-commerce Marketing?",
      content:
        "E-commerce marketing uses specialized strategies for online stores including product feed optimization, abandoned cart recovery, and conversion rate optimization to drive sales and customer lifetime value.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "Product Feed Optimization",
          description: "Optimize products for Google Shopping.",
        },
        {
          title: "Abandoned Cart Recovery",
          description: "Email and SMS cart reminders.",
        },
        {
          title: "Upsell & Cross-sell",
          description: "Product recommendation strategies.",
        },
        {
          title: "Customer Reviews",
          description: "Collect and display product reviews.",
        },
        {
          title: "Loyalty Programs",
          description: "Rewards and points systems.",
        },
        {
          title: "CRO",
          description: "Checkout and product page optimization.",
        },
      ],
    },
    process: {
      title: "Our E-commerce Process",
      steps: [
        {
          title: "Audit",
          description: "Analyze store performance and metrics.",
        },
        {
          title: "Strategy",
          description: "Develop channel-specific strategies.",
        },
        {
          title: "Implementation",
          description: "Setup tracking and optimization tools.",
        },
        {
          title: "Campaign Launch",
          description: "Launch marketing campaigns.",
        },
        {
          title: "Optimization",
          description: "Continuous performance improvement.",
        },
        {
          title: "Reporting",
          description: "Track sales, ROAS, and metrics.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Shopping Feed Optimization",
          description: "Optimize for Google Shopping and marketplaces.",
        },
        {
          title: "Cart Recovery",
          description: "Automated abandoned cart campaigns.",
        },
        {
          title: "Product Recommendations",
          description: "AI-powered upsell suggestions.",
        },
        {
          title: "Customer Segmentation",
          description: "Target based on purchase behavior.",
        },
        {
          title: "Review Management",
          description: "Collect and showcase reviews.",
        },
        {
          title: "ROAS Tracking",
          description: "Track return on ad spend.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "E-commerce expertise",
        "Platform knowledge",
        "CRO focus",
        "ROAS optimization",
        "Data-driven strategies",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which platforms do you support?",
          answer: "Shopify, WooCommerce, Magento, and custom stores.",
        },
        {
          question: "How do you track ROAS?",
          answer: "Using platform analytics and Google Analytics.",
        },
        {
          question: "Can you help with product feeds?",
          answer:
            "Yes, we optimize feeds for Google Shopping and marketplaces.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Pay-Per-Click (PPC) Advertising",
        slug: "pay-per-click-ppc-advertising",
      },
      {
        name: "Email Marketing",
        slug: "email-marketing",
      },
      {
        name: "Affiliate Marketing",
        slug: "affiliate-marketing",
      },
    ],
  },

  "mobile-marketing": {
    slug: "mobile-marketing",
    name: "Mobile Marketing",
    category: "digital-marketing",
    startingPrice: "৳7,000",
    color: "#10B981",
    hero: {
      title: "Mobile Marketing",
      description:
        "SMS campaigns, app promotions, and mobile-focused advertising to reach customers on their smartphones.",
      cta: "Start Mobile Marketing",
    },
    overview: {
      title: "What Is Mobile Marketing?",
      content:
        "Mobile marketing reaches customers through SMS, mobile apps, and mobile-optimized ads. We create campaigns that engage users on their smartphones for higher open rates and conversions.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "SMS Marketing",
          description: "Text message promotions and alerts.",
        },
        {
          title: "WhatsApp Marketing",
          description: "Broadcast and chat campaigns.",
        },
        {
          title: "App Install Campaigns",
          description: "Drive app downloads and installs.",
        },
        {
          title: "Push Notifications",
          description: "Mobile app engagement campaigns.",
        },
        {
          title: "Mobile Wallet Passes",
          description: "Loyalty cards and offers.",
        },
        {
          title: "QR Code Campaigns",
          description: "Scan-to-landing page campaigns.",
        },
      ],
    },
    process: {
      title: "Our Mobile Process",
      steps: [
        {
          title: "Strategy",
          description: "Define mobile marketing goals.",
        },
        {
          title: "Opt-in Setup",
          description: "Setup compliant opt-in methods.",
        },
        {
          title: "Campaign Creation",
          description: "Create mobile-optimized content.",
        },
        {
          title: "Segmentation",
          description: "Target based on mobile behavior.",
        },
        {
          title: "Launch",
          description: "Launch SMS and mobile campaigns.",
        },
        {
          title: "Analytics",
          description: "Track open rates and conversions.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "SMS Campaigns",
          description: "Bulk text message sending.",
        },
        {
          title: "Two-way Messaging",
          description: "Receive customer replies.",
        },
        {
          title: "Auto-responders",
          description: "Automated SMS sequences.",
        },
        {
          title: "Link Tracking",
          description: "Track SMS link clicks.",
        },
        {
          title: "Compliance",
          description: "TCPA and GDPR compliant.",
        },
        {
          title: "Delivery Reports",
          description: "SMS delivery status tracking.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "High open rates (98%)",
        "Instant delivery",
        "Compliant practices",
        "Personalized messaging",
        "Integration ready",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What's the open rate for SMS?",
          answer: "SMS has 98% open rates compared to 20% for email.",
        },
        {
          question: "Do you support MMS?",
          answer: "Yes, we support picture and video messaging.",
        },
        {
          question: "Is SMS marketing legal?",
          answer: "Yes, with proper opt-in and opt-out compliance.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Email Marketing",
        slug: "email-marketing",
      },
      {
        name: "Social Media Advertising",
        slug: "social-media-advertising",
      },
      {
        name: "E-commerce Marketing",
        slug: "e-commerce-marketing",
      },
    ],
  },

  "local-search-marketing": {
    slug: "local-search-marketing",
    name: "Local Search Marketing",
    category: "digital-marketing",
    startingPrice: "৳5,000",
    color: "#EF4444",
    hero: {
      title: "Local Search Marketing",
      description:
        "Google Business Profile optimization and local search visibility to attract nearby customers and drive foot traffic.",
      cta: "Boost Local Visibility",
    },
    overview: {
      title: "What Is Local Search Marketing?",
      content:
        "Local search marketing optimizes your online presence for local customers. We manage Google Business Profile, local citations, and reviews to help your business appear in local search results and maps.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "Google Business Profile",
          description: "Complete GBP optimization and management.",
        },
        {
          title: "Local Citations",
          description: "Directory listings and NAP consistency.",
        },
        {
          title: "Review Management",
          description: "Collect and respond to customer reviews.",
        },
        {
          title: "Local Keywords",
          description: "Target city and neighborhood searches.",
        },
        {
          title: "Map Pack Optimization",
          description: "Rank higher in Google Maps.",
        },
        {
          title: "Local Landing Pages",
          description: "Location-specific service pages.",
        },
      ],
    },
    process: {
      title: "Our Local SEO Process",
      steps: [
        {
          title: "Audit",
          description: "Analyze current local presence.",
        },
        {
          title: "GBP Setup",
          description: "Optimize Google Business Profile.",
        },
        {
          title: "Citation Building",
          description: "List business on directories.",
        },
        {
          title: "Review Generation",
          description: "Systematic review collection.",
        },
        {
          title: "Content Creation",
          description: "Local-focused content.",
        },
        {
          title: "Monitoring",
          description: "Track local rankings and calls.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "GBP Optimization",
          description: "Complete Google Business Profile setup.",
        },
        {
          title: "Citation Management",
          description: "100+ local directory listings.",
        },
        {
          title: "Review Monitoring",
          description: "Track and respond to reviews.",
        },
        {
          title: "Local Keyword Tracking",
          description: "Monitor local search rankings.",
        },
        {
          title: "Call Tracking",
          description: "Track phone call conversions.",
        },
        {
          title: "Competitor Analysis",
          description: "Local competitor monitoring.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Google Maps expertise",
        "Local citation building",
        "Review management",
        "Call tracking",
        "Monthly reporting",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long does local SEO take?",
          answer: "Typically 1-3 months to see local ranking improvements.",
        },
        {
          question: "Do I need a physical address?",
          answer:
            "Service area businesses can hide address and show service areas.",
        },
        {
          question: "Can you help with negative reviews?",
          answer: "Yes, we help manage and respond to all reviews.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Search Engine Optimization (SEO)",
        slug: "search-engine-optimization-seo",
      },
      {
        name: "Pay-Per-Click (PPC) Advertising",
        slug: "pay-per-click-ppc-advertising",
      },
    ],
  },
  /////////

  "technology-consulting": {
    slug: "technology-consulting",
    name: "Technology Consulting",
    category: "consulting-training",
    startingPrice: "৳2,000/hour",
    color: "#8B5CF6",
    hero: {
      title: "Technology Consulting",
      description:
        "Expert advice on technology choices, architecture, and digital transformation to help your business grow.",
      cta: "Get Consultation",
    },
    overview: {
      title: "What Is Technology Consulting?",
      content:
        "Technology consulting provides expert guidance on making the right technology decisions for your business. We help with tech stack selection, system architecture, digital transformation strategies, and technology roadmap planning to ensure your business stays competitive.",
    },
    solutions: {
      title: "What We Offer",
      items: [
        {
          title: "Tech Stack Selection",
          description: "Choose the right technologies for your project.",
        },
        {
          title: "Architecture Review",
          description: "Evaluate and improve system architecture.",
        },
        {
          title: "Digital Transformation",
          description: "Modernize business processes with technology.",
        },
        {
          title: "Technology Roadmap",
          description: "Plan your technology strategy and timeline.",
        },
        {
          title: "Code Review",
          description: "Expert review of your existing codebase.",
        },
        {
          title: "Security Assessment",
          description: "Identify vulnerabilities and security gaps.",
        },
      ],
    },
    process: {
      title: "Our Consulting Process",
      steps: [
        {
          title: "Discovery",
          description: "Understand your business goals and challenges.",
        },
        {
          title: "Analysis",
          description: "Analyze current systems and processes.",
        },
        {
          title: "Recommendations",
          description: "Provide actionable recommendations.",
        },
        {
          title: "Roadmap",
          description: "Create implementation roadmap.",
        },
        {
          title: "Support",
          description: "Ongoing guidance and support.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Expert Guidance",
          description: "Advice from experienced technologists.",
        },
        {
          title: "Unbiased Recommendations",
          description: "Honest, vendor-neutral advice.",
        },
        {
          title: "Cost Optimization",
          description: "Reduce unnecessary technology costs.",
        },
        {
          title: "Risk Assessment",
          description: "Identify and mitigate technical risks.",
        },
        {
          title: "Future Planning",
          description: "Scalable solutions for future growth.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "10+ years experience",
        "Unbiased advice",
        "Practical solutions",
        "Cost-effective",
        "Results-driven",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How does consulting work?",
          answer:
            "We start with a discovery session, then provide recommendations and roadmap.",
        },
        {
          question: "Can you consult remotely?",
          answer: "Yes, we offer remote consulting via video calls.",
        },
        {
          question: "What's your hourly rate?",
          answer: "৳2,000/hour with flexible packages available.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Technical Training & Workshops",
        slug: "technical-training-workshops",
      },
    ],
  },

  "technical-training-workshops": {
    slug: "technical-training-workshops",
    name: "Technical Training & Workshops",
    category: "consulting-training",
    startingPrice: "৳10,000",
    color: "#10B981",
    hero: {
      title: "Technical Training & Workshops",
      description:
        "Hands-on workshops for web development, AI, cloud, and software engineering to upskill your team.",
      cta: "Book Training",
    },
    overview: {
      title: "What Is Technical Training?",
      content:
        "Technical training provides hands-on learning experiences for your team. We conduct workshops on web development, AI, cloud computing, and software engineering best practices to help your team stay current with modern technologies.",
    },
    solutions: {
      title: "Training Topics",
      items: [
        {
          title: "Web Development",
          description: "React, Next.js, Node.js, and modern frameworks.",
        },
        {
          title: "AI & Machine Learning",
          description: "OpenAI integration, prompt engineering, and AI apps.",
        },
        {
          title: "Cloud Computing",
          description: "AWS, DigitalOcean, deployment, and DevOps.",
        },
        {
          title: "Mobile Development",
          description: "React Native, Flutter, iOS, and Android.",
        },
        {
          title: "Database Design",
          description: "SQL, NoSQL, optimization, and best practices.",
        },
        {
          title: "Software Architecture",
          description: "Design patterns, scalability, and system design.",
        },
      ],
    },
    process: {
      title: "Our Training Process",
      steps: [
        {
          title: "Needs Assessment",
          description: "Identify skill gaps and training goals.",
        },
        {
          title: "Curriculum Design",
          description: "Create custom training materials.",
        },
        {
          title: "Hands-on Workshop",
          description: "Interactive, practical learning sessions.",
        },
        {
          title: "Projects",
          description: "Real-world projects and exercises.",
        },
        {
          title: "Assessment",
          description: "Evaluate learning outcomes.",
        },
        {
          title: "Certification",
          description: "Provide completion certificates.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Custom Curriculum",
          description: "Tailored to your team's needs.",
        },
        {
          title: "Hands-on Learning",
          description: "Practical exercises and projects.",
        },
        {
          title: "Expert Trainers",
          description: "Industry professionals as instructors.",
        },
        {
          title: "Small Batches",
          description: "Personal attention to each participant.",
        },
        {
          title: "Post-training Support",
          description: "Follow-up Q&A and support.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Industry expert trainers",
        "Hands-on approach",
        "Custom curriculum",
        "Practical projects",
        "Certification provided",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How long is a workshop?",
          answer: "Typically 1-5 days depending on the topic and depth.",
        },
        {
          question: "Can you train at our office?",
          answer: "Yes, we offer on-site, online, and hybrid training.",
        },
        {
          question: "What's the team size?",
          answer: "Ideal size is 5-15 participants per workshop.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Technology Consulting",
        slug: "technology-consulting",
      },
    ],
  },

  //////////

  "logo-design": {
    slug: "logo-design",
    name: "Logo Design",
    category: "graphic-design",
    startingPrice: "৳3,000",
    color: "#8B5CF6",
    hero: {
      title: "Logo Design",
      description:
        "Unique and memorable logos that represent your brand identity and make a lasting impression.",
      cta: "Get Your Logo",
    },
    overview: {
      title: "What Is Logo Design?",
      content:
        "Logo design creates a unique visual symbol that represents your brand. We design memorable, scalable logos that work across all mediums - from websites to business cards, signage to social media.",
    },
    solutions: {
      title: "What We Create",
      items: [
        {
          title: "Wordmark Logos",
          description: "Text-based logos using custom typography.",
        },
        {
          title: "Symbol Logos",
          description: "Iconic symbols representing your brand.",
        },
        {
          title: "Combination Marks",
          description: "Text and symbol combined logos.",
        },
        {
          title: "Abstract Logos",
          description: "Unique abstract shapes and designs.",
        },
        {
          title: "Mascot Logos",
          description: "Character and mascot-based logos.",
        },
        {
          title: "Emblem Logos",
          description: "Classic badge and seal designs.",
        },
      ],
    },
    process: {
      title: "Our Logo Design Process",
      steps: [
        {
          title: "Brief",
          description: "Understand your brand and vision.",
        },
        {
          title: "Research",
          description: "Research industry and competitors.",
        },
        {
          title: "Sketching",
          description: "Create multiple concept sketches.",
        },
        {
          title: "Design",
          description: "Digitize selected concepts.",
        },
        {
          title: "Refinement",
          description: "Refine based on feedback.",
        },
        {
          title: "Delivery",
          description: "Deliver files in all formats.",
        },
      ],
    },
    features: {
      title: "What You Get",
      items: [
        {
          title: "Multiple Concepts",
          description: "3-5 unique logo concepts to choose from.",
        },
        {
          title: "Vector Files",
          description: "AI, EPS, SVG formats for scalability.",
        },
        {
          title: "PNG Files",
          description: "Transparent background images.",
        },
        {
          title: "Color Variations",
          description: "Full color, black, and white versions.",
        },
        {
          title: "Brand Guidelines",
          description: "Usage rules and color codes.",
        },
        {
          title: "Ownership Rights",
          description: "Full copyright transfer.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Custom designs, no templates",
        "Unlimited revisions",
        "Fast turnaround",
        "High-resolution files",
        "100% ownership",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "How many concepts do you provide?",
          answer: "We provide 3-5 unique logo concepts initially.",
        },
        {
          question: "What files will I receive?",
          answer: "AI, EPS, SVG, PNG, JPG, and PDF formats.",
        },
        {
          question: "How long does it take?",
          answer: "Typically 3-7 business days for complete logo design.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Brand Identity Design",
        slug: "brand-identity-design",
      },
      {
        name: "Social Media Design",
        slug: "social-media-design",
      },
      {
        name: "UI/UX Design",
        slug: "ui-ux-design",
      },
    ],
  },

  "brand-identity-design": {
    slug: "brand-identity-design",
    name: "Brand Identity Design",
    category: "graphic-design",
    startingPrice: "৳10,000",
    color: "#10B981",
    hero: {
      title: "Brand Identity Design",
      description:
        "Complete brand identity including colors, typography, guidelines, and visual assets for consistent branding.",
      cta: "Build Your Brand",
    },
    overview: {
      title: "What Is Brand Identity Design?",
      content:
        "Brand identity design creates a complete visual system for your business. We develop color palettes, typography, brand guidelines, and visual assets that ensure consistent brand representation across all channels.",
    },
    solutions: {
      title: "What We Create",
      items: [
        {
          title: "Color Palette",
          description: "Primary, secondary, and accent colors.",
        },
        {
          title: "Typography System",
          description: "Font families and hierarchy rules.",
        },
        {
          title: "Brand Guidelines",
          description: "Complete brand usage documentation.",
        },
        {
          title: "Business Cards",
          description: "Professional business card designs.",
        },
        {
          title: "Letterheads",
          description: "Company letterhead and envelopes.",
        },
        {
          title: "Brand Assets",
          description: "Patterns, icons, and graphic elements.",
        },
      ],
    },
    process: {
      title: "Our Brand Identity Process",
      steps: [
        {
          title: "Discovery",
          description: "Understand brand values and audience.",
        },
        {
          title: "Mood Board",
          description: "Create visual direction concepts.",
        },
        {
          title: "Color Development",
          description: "Develop brand color palette.",
        },
        {
          title: "Typography",
          description: "Select brand fonts.",
        },
        {
          title: "Guidelines",
          description: "Create brand usage rules.",
        },
        {
          title: "Assets",
          description: "Deliver complete brand kit.",
        },
      ],
    },
    features: {
      title: "What You Get",
      items: [
        {
          title: "Color Palette",
          description: "Complete color system with codes.",
        },
        {
          title: "Font Selection",
          description: "Primary and secondary fonts.",
        },
        {
          title: "Brand Guidelines",
          description: "PDF brand usage document.",
        },
        {
          title: "Logo Variations",
          description: "Multiple logo formats.",
        },
        {
          title: "Patterns & Icons",
          description: "Custom brand elements.",
        },
        {
          title: "Stationery Design",
          description: "Cards, letterheads, envelopes.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Complete brand system",
        "Professional guidelines",
        "Consistent identity",
        "Scalable assets",
        "Long-term support",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What's included in brand identity?",
          answer: "Logo, colors, fonts, guidelines, and stationery.",
        },
        {
          question: "How long does it take?",
          answer: "Typically 2-4 weeks for complete brand identity.",
        },
        {
          question: "Do you redesign existing brands?",
          answer: "Yes, we help with brand refresh and modernization.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Logo Design",
        slug: "logo-design",
      },
      {
        name: "Marketing Materials Design",
        slug: "marketing-materials-design",
      },
      {
        name: "UI/UX Design",
        slug: "ui-ux-design",
      },
    ],
  },

  "social-media-design": {
    slug: "social-media-design",
    name: "Social Media Design",
    category: "graphic-design",
    startingPrice: "৳5,000",
    color: "#3B82F6",
    hero: {
      title: "Social Media Design",
      description:
        "Professional posts, ads, and social media creatives that stop the scroll and drive engagement.",
      cta: "Get Social Designs",
    },
    overview: {
      title: "What Is Social Media Design?",
      content:
        "Social media design creates engaging visual content for your social channels. We design posts, stories, ads, and cover images optimized for each platform to increase engagement and brand awareness.",
    },
    solutions: {
      title: "What We Create",
      items: [
        {
          title: "Instagram Posts",
          description: "Square and portrait feed posts.",
        },
        {
          title: "Instagram Stories",
          description: "Full-screen vertical stories.",
        },
        {
          title: "Facebook Posts",
          description: "Engaging feed graphics.",
        },
        {
          title: "LinkedIn Graphics",
          description: "Professional corporate posts.",
        },
        {
          title: "Social Media Ads",
          description: "Conversion-optimized ad creatives.",
        },
        {
          title: "Cover Images",
          description: "Banners for Facebook, LinkedIn, Twitter.",
        },
      ],
    },
    process: {
      title: "Our Design Process",
      steps: [
        {
          title: "Strategy",
          description: "Define social media goals.",
        },
        {
          title: "Template Creation",
          description: "Create brand-aligned templates.",
        },
        {
          title: "Design",
          description: "Design engaging social graphics.",
        },
        {
          title: "Optimization",
          description: "Optimize for each platform.",
        },
        {
          title: "Delivery",
          description: "Deliver ready-to-post files.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "Platform Optimized",
          description: "Correct sizes for each platform.",
        },
        {
          title: "Brand Consistency",
          description: "Colors and fonts aligned.",
        },
        {
          title: "Editable Templates",
          description: "Canva or Photoshop files.",
        },
        {
          title: "Bulk Packages",
          description: "10, 20, or 30 posts per month.",
        },
        {
          title: "Quick Turnaround",
          description: "48-hour delivery.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Trend-aware designs",
        "Platform optimization",
        "Brand consistency",
        "Fast delivery",
        "Affordable packages",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What sizes do you design for?",
          answer: "All standard social media sizes included.",
        },
        {
          question: "Can you match my brand colors?",
          answer: "Yes, all designs follow your brand guidelines.",
        },
        {
          question: "How many designs per package?",
          answer: "Packages start at 10 designs per month.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Logo Design",
        slug: "logo-design",
      },
      {
        name: "Brand Identity Design",
        slug: "brand-identity-design",
      },
      {
        name: "Marketing Materials Design",
        slug: "marketing-materials-design",
      },
    ],
  },

  "marketing-materials-design": {
    slug: "marketing-materials-design",
    name: "Marketing Materials Design",
    category: "graphic-design",
    startingPrice: "৳2,000",
    color: "#F59E0B",
    hero: {
      title: "Marketing Materials Design",
      description:
        "Flyers, brochures, posters, banners, and promotional graphics that capture attention and drive action.",
      cta: "Get Marketing Materials",
    },
    overview: {
      title: "What Are Marketing Materials?",
      content:
        "Marketing materials are print and digital assets used to promote your business. We design flyers, brochures, posters, banners, and other promotional graphics that communicate your message effectively.",
    },
    solutions: {
      title: "What We Create",
      items: [
        {
          title: "Flyers",
          description: "Single-page promotional designs.",
        },
        {
          title: "Brochures",
          description: "Tri-fold or bi-fold information booklets.",
        },
        {
          title: "Posters",
          description: "Large format promotional prints.",
        },
        {
          title: "Banners",
          description: "Roll-up and web banners.",
        },
        {
          title: "Business Cards",
          description: "Professional business cards.",
        },
        {
          title: "Menus",
          description: "Restaurant and cafe menus.",
        },
      ],
    },
    process: {
      title: "Our Design Process",
      steps: [
        {
          title: "Brief",
          description: "Understand marketing goals.",
        },
        {
          title: "Concept",
          description: "Create design concepts.",
        },
        {
          title: "Design",
          description: "Develop chosen concept.",
        },
        {
          title: "Review",
          description: "Feedback and revisions.",
        },
        {
          title: "Finalize",
          description: "Prepare print-ready files.",
        },
      ],
    },
    features: {
      title: "What You Get",
      items: [
        {
          title: "Print-Ready Files",
          description: "CMYK, high-resolution PDFs.",
        },
        {
          title: "Digital Versions",
          description: "RGB versions for web use.",
        },
        {
          title: "Multiple Sizes",
          description: "Various size options.",
        },
        {
          title: "Editable Files",
          description: "Source files included.",
        },
        {
          title: "Bleed & Crop Marks",
          description: "Professional print setup.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "Print-ready output",
        "Professional designs",
        "Fast turnaround",
        "Competitive pricing",
        "Bulk discounts",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you provide print services?",
          answer: "We provide design files; you can print locally.",
        },
        {
          question: "What file formats do you deliver?",
          answer: "PDF, AI, PSD, PNG, and JPG formats.",
        },
        {
          question: "Can you redesign existing materials?",
          answer: "Yes, we can refresh your current marketing materials.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Logo Design",
        slug: "logo-design",
      },
      {
        name: "Brand Identity Design",
        slug: "brand-identity-design",
      },
      {
        name: "Social Media Design",
        slug: "social-media-design",
      },
    ],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "graphic-design",
    startingPrice: "৳8,000",
    color: "#EF4444",
    hero: {
      title: "UI/UX Design",
      description:
        "Modern website and mobile app interface designs focused on user experience and conversion.",
      cta: "Start UI/UX Design",
    },
    overview: {
      title: "What Is UI/UX Design?",
      content:
        "UI/UX design creates intuitive, beautiful digital interfaces for websites and mobile apps. We focus on user research, wireframing, prototyping, and visual design to deliver exceptional user experiences.",
    },
    solutions: {
      title: "What We Design",
      items: [
        {
          title: "Website UI",
          description: "Modern, responsive website designs.",
        },
        {
          title: "Mobile App UI",
          description: "iOS and Android app interfaces.",
        },
        {
          title: "Web App Dashboards",
          description: "Admin and analytics dashboards.",
        },
        {
          title: "Wireframes",
          description: "Low and high-fidelity wireframes.",
        },
        {
          title: "Prototypes",
          description: "Clickable interactive prototypes.",
        },
        {
          title: "Design Systems",
          description: "Reusable component libraries.",
        },
      ],
    },
    process: {
      title: "Our UI/UX Process",
      steps: [
        {
          title: "Research",
          description: "User research and competitor analysis.",
        },
        {
          title: "Wireframing",
          description: "Create layout and structure.",
        },
        {
          title: "Prototyping",
          description: "Build interactive prototype.",
        },
        {
          title: "Visual Design",
          description: "Apply brand and visual elements.",
        },
        {
          title: "User Testing",
          description: "Test with real users.",
        },
        {
          title: "Delivery",
          description: "Deliver design files and specs.",
        },
      ],
    },
    features: {
      title: "Key Features",
      items: [
        {
          title: "User Research",
          description: "Data-driven design decisions.",
        },
        {
          title: "Wireframes",
          description: "Clear layout and structure.",
        },
        {
          title: "Prototypes",
          description: "Interactive clickable demos.",
        },
        {
          title: "Responsive Design",
          description: "Mobile, tablet, desktop layouts.",
        },
        {
          title: "Design Specs",
          description: "Developer-ready specifications.",
        },
        {
          title: "Figma Files",
          description: "Editable source files.",
        },
      ],
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      items: [
        "User-centered approach",
        "Modern designs",
        "Interactive prototypes",
        "Developer handoff",
        "Usability testing",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you design for mobile apps?",
          answer: "Yes, both iOS and Android app interfaces.",
        },
        {
          question: "What tools do you use?",
          answer: "Figma, Adobe XD, and Sketch.",
        },
        {
          question: "Do you provide developer handoff?",
          answer: "Yes, with specs, assets, and style guides.",
        },
      ],
    },
    relatedServices: [
      {
        name: "Logo Design",
        slug: "logo-design",
      },
      {
        name: "Brand Identity Design",
        slug: "brand-identity-design",
      },
      {
        name: "Social Media Design",
        slug: "social-media-design",
      },
    ],
  },
};
