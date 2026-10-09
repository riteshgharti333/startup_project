import type { Metadata, Viewport } from "next";
import "./globals.css";
import { localBusinessSchema, organizationSchema } from "./lib/schema";
import { AnalyticsWrapper } from "./analytics";
import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratech.com",
  ),

  // Basic metadata
  title: {
    default: "Twipra Technologies | AI Software & Digital Innovation",
    template: "%s | Twipra Technology",
  },
  description:
    "Twipra Technologies is an AI-powered technology company delivering custom software, AI solutions, web development, automation, and digital transformation to help businesses innovate, scale, and succeed globally.",
  keywords: [
    "web development company in Bangladesh",
    "web design company in Bangladesh",
    "software development company in Bangladesh",
    "AI development company Bangladesh",
    "AI solutions company Bangladesh",
    "mobile app development company Bangladesh",
    "digital marketing agency Bangladesh",
    "graphic design company Bangladesh",
    "video editing services Bangladesh",
    "cloud solutions Bangladesh",
    "IT consulting company Bangladesh",
  ],
  authors: [{ name: "Twipra Technology", url: "https://www.twipratech.com" }],
  creator: "Twipra Technology",
  publisher: "Twipra Technology",

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
    canonical: "https://www.twipratech.com",
    languages: {
      en: "https://www.twipratech.com/en",
      hi: "https://www.twipratech.com/hi",
      bn: "https://www.twipratech.com/bn",
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["hi_IN", "bn_IN"],
    url: "https://www.twipratech.com",
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
    title:
      "Twipra Technology | Top Software, AI & Digital Marketing Company in Bangladesh",
    description:
      "Twipra Technology offers professional web development, AI-powered solutions, mobile app development, digital marketing, and branding services in Bangladesh. We build websites, automate workflows, and drive results for startups and enterprises.",
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Security headers as meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Geo targeting for Bangladesh & India */}
        <meta name="geo.region" content="BD" />

        {/* Language alternatives */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.twipratech.com/en"
        />
        <link
          rel="alternate"
          hrefLang="hi"
          href="https://www.twipratech.com/hi"
        />
        <link
          rel="alternate"
          hrefLang="bn"
          href="https://www.twipratech.com/bn"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.twipratech.com"
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
        suppressHydrationWarning
      >
        {/* Content */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1e1e2e",
              color: "#fff",
              border: "1px solid #313244",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
        <div className="relative z-10 flex flex-col min-h-full">
          <main className="flex-1">{children}</main>
          <AnalyticsWrapper />
        </div>
        <GoogleAnalytics gaId="G-6MB4X6E3RH" />
      </body>
    </html>
  );
}
