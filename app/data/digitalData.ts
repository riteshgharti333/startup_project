// app/data/digitalMarketingData.ts

// ============================================
// INTERFACES / TYPES
// ============================================

export interface PackageData {
  name: string;
  slug: string;
  startingPrice: string;
  idealFor: string;
  description: string;
  hero: {
    title: string;
    description: string;
    cta: string;
  };
  overview: {
    title: string;
    content: string;
  };
  includes: string[];
  paidMarketing: {
    title: string;
    platforms: string[];
    campaigns: string;
    recommendedBudget: string;
  };
  totalCost: {
    title: string;
    items: {
      label: string;
      amount: string;
    }[];
  };
}

export interface AdManagementItem {
  adBudget: string;
  managementFee: string;
}

export interface AdManagementOnly {
  title: string;
  description: string;
  table: AdManagementItem[];
}

export interface ImportantNote {
  title: string;
  content: string;
}

export interface AllInPackageItem {
  Package: string;
  "Twipra Service Fee": number;
  "Suggested Ad Budget": number;
  "Total Monthly Budget": number;
}

export interface AllInPackages {
  title: string;
  description: string;
  table: AllInPackageItem[];
}

export interface DigitalMarketingPackages {
  [key: string]: PackageData;
}

// ============================================
// DATA
// ============================================

export const digitalMarketingPackages: DigitalMarketingPackages = {
  "launch-package": {
    name: "Launch Package",
    slug: "launch-package",
    startingPrice: "৳15,000",
    idealFor: "Startups & Small Businesses",
    description: "Perfect for startups and small businesses looking to establish their online presence with professional social media management and targeted advertising.",
    hero: {
      title: "Launch Package",
      description: "Perfect for startups and small businesses looking to establish their online presence with professional social media management and targeted advertising.",
      cta: "Get Started"
    },
    overview: {
      title: "Overview",
      content: "The Launch Package is designed to help startups and small businesses build a strong digital foundation. We handle your social media presence, create engaging content, and manage your Meta advertising campaigns so you can focus on growing your business."
    },
    includes: [
      "Digital Marketing Strategy",
      "Facebook Page Management",
      "Instagram Management",
      "12 Custom Social Media Posts",
      "Professional Graphic Design",
      "Caption Writing",
      "Hashtag Research",
      "Monthly Content Calendar",
      "Basic Community Management",
      "Monthly Performance Report",
      "1 Strategy Meeting"
    ],
    paidMarketing: {
      title: "Paid Marketing",
      platforms: ["Meta (Facebook & Instagram) Ads Setup & Management"],
      campaigns: "Up to 1 advertising campaign/month",
      recommendedBudget: "৳10,000–৳30,000"
    },
    totalCost: {
      title: "Total Monthly Cost",
      items: [
        { label: "Twipra Service Fee", amount: "৳15,000" },
        { label: "Recommended Ad Budget (Paid to Meta)", amount: "৳10,000–30,000" },
        { label: "Estimated Total Client Budget", amount: "৳25,000–45,000" }
      ]
    }
  },

  "growth-package": {
    name: "Growth Package",
    slug: "growth-package",
    startingPrice: "৳30,000",
    idealFor: "Growing Businesses",
    description: "Advanced marketing solution for growing businesses that need multi-platform management, SEO, and comprehensive ad campaigns.",
    hero: {
      title: "Growth Package",
      description: "Advanced marketing solution for growing businesses that need multi-platform management, SEO, and comprehensive ad campaigns.",
      cta: "Get Started"
    },
    overview: {
      title: "Overview",
      content: "The Growth Package is built for businesses ready to scale. We expand your reach across LinkedIn and Google, optimize your content with SEO, and manage advanced ad campaigns across multiple platforms to drive measurable growth."
    },
    includes: [
      "Everything in Launch plus:",
      "20 Social Media Posts",
      "4 Professional Reels",
      "Advanced Marketing Strategy",
      "LinkedIn Management",
      "Google Business Profile Management",
      "Competitor Analysis",
      "Copywriting",
      "Basic SEO Optimization",
      "Community Management",
      "Detailed Analytics Report",
      "Two Strategy Meetings"
    ],
    paidMarketing: {
      title: "Paid Marketing",
      platforms: [
        "Management of:",
        "Facebook Ads",
        "Instagram Ads",
        "Google Search Ads",
        "Google Display Ads"
      ],
      campaigns: "Up to 3 active campaigns/month",
      recommendedBudget: "৳30,000–৳80,000"
    },
    totalCost: {
      title: "Total Monthly Cost",
      items: [
        { label: "Twipra Service Fee", amount: "৳30,000" },
        { label: "Recommended Ad Budget (Paid to Platforms)", amount: "৳30,000–80,000" },
        { label: "Estimated Total Client Budget", amount: "৳60,000–110,000" }
      ]
    }
  },

  "scale-package": {
    name: "Scale Package",
    slug: "scale-package",
    startingPrice: "৳60,000",
    idealFor: "Established Companies",
    description: "Full-scale marketing for established companies with video production, multi-channel ads, and advanced analytics.",
    hero: {
      title: "Scale Package",
      description: "Full-scale marketing for established companies with video production, multi-channel ads, and advanced analytics.",
      cta: "Get Started"
    },
    overview: {
      title: "Overview",
      content: "The Scale Package delivers enterprise-level marketing. We create premium video content, manage campaigns across all major platforms, implement advanced tracking, and provide detailed analytics to maximize your ROI."
    },
    includes: [
      "Everything in Growth plus:",
      "30 Social Media Posts",
      "8 Premium Reels",
      "Professional Video Editing",
      "Motion Graphics",
      "Marketing Campaign Planning",
      "Brand Positioning",
      "Email Marketing",
      "LinkedIn Marketing",
      "TikTok Marketing",
      "Conversion Tracking",
      "Meta Pixel Setup",
      "Google Analytics",
      "Advanced Reporting Dashboard",
      "Weekly Strategy Meetings"
    ],
    paidMarketing: {
      title: "Paid Marketing",
      platforms: [
        "Management of:",
        "Meta Ads",
        "Google Ads",
        "LinkedIn Ads",
        "TikTok Ads"
      ],
      campaigns: "Up to 6 active campaigns/month",
      recommendedBudget: "৳80,000–300,000+"
    },
    totalCost: {
      title: "Total Monthly Cost",
      items: [
        { label: "Twipra Service Fee", amount: "৳60,000" },
        { label: "Recommended Ad Budget (Paid to Advertising Platforms)", amount: "৳80,000–300,000+" },
        { label: "Estimated Total Client Budget", amount: "৳140,000–360,000+" }
      ]
    }
  },

  "enterprise-package": {
    name: "Enterprise Package",
    slug: "enterprise-package",
    startingPrice: "৳100,000+",
    idealFor: "Large Organizations",
    description: "Custom enterprise solution with dedicated team, automation, CRM integration, and multi-country campaigns.",
    hero: {
      title: "Enterprise Package",
      description: "Custom enterprise solution with dedicated team, automation, CRM integration, and multi-country campaigns.",
      cta: "Contact Sales"
    },
    overview: {
      title: "Overview",
      content: "The Enterprise Package is a fully customized marketing solution for large organizations. You get a dedicated marketing team, advanced automation, CRM integration, and the ability to run campaigns across multiple countries with unlimited strategy meetings."
    },
    includes: [
      "Dedicated Marketing Team",
      "Dedicated Account Manager",
      "Unlimited Campaign Management",
      "Marketing Automation",
      "CRM Integration",
      "Full Funnel Marketing",
      "Lead Generation",
      "Multi-country Campaigns",
      "Unlimited Strategy Meetings",
      "Monthly Executive Reports"
    ],
    paidMarketing: {
      title: "Paid Marketing",
      platforms: ["Custom advertising across all platforms"],
      campaigns: "Unlimited campaigns",
      recommendedBudget: "Custom (paid separately by the client)"
    },
    totalCost: {
      title: "Total Monthly Cost",
      items: [
        { label: "Twipra Service Fee", amount: "Starting from ৳100,000" },
        { label: "Recommended Ad Budget", amount: "Custom" },
        { label: "Estimated Total Client Budget", amount: "Custom" }
      ]
    }
  }
};

// ============================================
// ADVERTISING MANAGEMENT ONLY
// ============================================
export const adManagementOnly: AdManagementOnly = {
  title: "Advertising Management Only",
  description: "If a client only wants ad management:",
  table: [
    { adBudget: "Up to ৳20,000", managementFee: "৳8,000" },
    { adBudget: "৳20,001–50,000", managementFee: "৳12,000" },
    { adBudget: "৳50,001–100,000", managementFee: "৳18,000" },
    { adBudget: "৳100,001–300,000", managementFee: "৳25,000" },
    { adBudget: "Above ৳300,000", managementFee: "Custom Quote" }
  ]
};

// ============================================
// IMPORTANT NOTE FOR ALL PACKAGES
// ============================================
export const importantNote: ImportantNote = {
  title: "Important Note for All Packages",
  content: "Advertising Spend: All advertising costs are paid directly by the client to the respective advertising platforms (e.g., Meta, Google, LinkedIn, TikTok). Twipra Technologies does not include the advertising budget in its service fee unless otherwise agreed in writing."
};

// ============================================
// OPTIONAL: "ALL-IN" MANAGED MARKETING PACKAGES
// ============================================
export const allInPackages: AllInPackages = {
  title: 'Optional: "All-In" Managed Marketing Packages',
  description: "Some clients prefer one invoice that includes both your service fee and the ad budget (which you then manage on their behalf, subject to agreement).",
  table: [
    {
      "Package": "Launch",
      "Twipra Service Fee": 15000,
      "Suggested Ad Budget": 15000,
      "Total Monthly Budget": 30000
    },
    {
      "Package": "Growth",
      "Twipra Service Fee": 30000,
      "Suggested Ad Budget": 50000,
      "Total Monthly Budget": 80000
    },
    {
      "Package": "Scale",
      "Twipra Service Fee": 60000,
      "Suggested Ad Budget": 100000,
      "Total Monthly Budget": 160000
    }
  ]
};