// app/layout.tsx

// What You Need to Do:
// Create OG image (1200x630) → save as /public/og-image.jpg

// Create Twitter image → save as /public/twitter-image.jpg

// Add verification codes to .env.local:

// env
// NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code-here

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Backgrounds from "../app/components/Backgrounds";
import { localBusinessSchema, organizationSchema } from "./lib/schema";
import { AnalyticsWrapper } from "./analytics";
import Float from "./components/Float";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

// ============ VIEWPORT CONFIGURATION (SEO) ============
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0f19" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

// ============ METADATA FOR TWIPRA TECHNOLOGY (SEO) ============
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com",
  ),

  // Basic metadata
  title: {
    default: "Twipra Technology | Web Development & Digital Agency",
    template: "%s | Twipra Technology",
  },
  description:
    "Professional web development, AI solutions, mobile apps, and digital marketing services for businesses in Bangladesh and India.",

  keywords: [
    "web development",
    "AI solutions",
    "mobile app development",
    "digital marketing",
    "graphic design",
    "cloud infrastructure",
    "IT consulting",
    "Bangladesh",
    "India",
  ],

  authors: [
    { name: "Twipra Technology", url: "https://www.twipratechnology.com" },
  ],
  creator: "Twipra Technology",
  publisher: "Twipra Technology",

  // Icons (keeping your existing)
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  // Robots (SEO crawling)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.twipratechnology.com",
    languages: {
      en: "https://www.twipratechnology.com/en",
      hi: "https://www.twipratechnology.com/hi",
      bn: "https://www.twipratechnology.com/bn",
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "bn_IN"],
    url: "https://www.twipratechnology.com",
    siteName: "Twipra Technology",
    title: "Twipra Technology | Web Development & Digital Agency",
    description:
      "Professional web development, AI solutions, mobile apps, and digital marketing services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Twipra Technology",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@twipratech",
    creator: "@twipratech",
    title: "Twipra Technology | Web Development & Digital Agency",
    description:
      "Professional web development, AI solutions, mobile apps, and digital marketing services.",
    images: ["/twitter-image.jpg"],
  },

  // Verification (add your codes when you get them)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    // bing: "your-bing-code",
  },

  // Category
  category: "technology",

  // Manifest
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Security headers as meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Geo targeting for Bangladesh & India */}
        <meta name="geo.region" content="BD" />
        <meta name="geo.region" content="IN" />

        {/* Language alternatives */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.twipratechnology.com/en"
        />
        <link
          rel="alternate"
          hrefLang="hi"
          href="https://www.twipratechnology.com/hi"
        />
        <link
          rel="alternate"
          hrefLang="bn"
          href="https://www.twipratechnology.com/bn"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.twipratechnology.com"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geist.className} min-h-full flex flex-col bg-[#0b0f19] antialiased`}
      >
        {/* Animated Background */}
        <Backgrounds />

        {/* Content */} 
        <div className="relative z-10 flex flex-col min-h-full">
          <Navbar />
          <main className="flex-1">{children}</main>
          <AnalyticsWrapper />
          <Footer />
          {/* <Float /> */}
        </div>
      </body>
    </html>
  );
}
