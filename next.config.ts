// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ============ IMAGE OPTIMIZATION (Enterprise Level) ============
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.twipratechnology.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
  },
  
  // ============ EXPERIMENTAL FEATURES ============
  // experimental: {
  //   optimizePackageImports: ['framer-motion', 'react-icons'],
  //   // Better TTFB for SEO
  //   staleTimes: {
  //     dynamic: 30,
  //     static: 180,
  //   },
  //   // Optimize server components
  //   optimizeServerReact: true,
  // },
  
  // ============ SEO HEADERS (Critical for ranking) ============
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/:path*.{jpg,jpeg,png,gif,webp,avif}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.{css,js}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // ============ SEO REDIRECTS (301 for link juice) ============
  async redirects() {
    return [
      // Force WWW (avoid duplicate content)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'twipratechnology.com',
          },
        ],
        destination: 'https://www.twipratechnology.com/:path*',
        permanent: true,
      },
      // Remove trailing slash for SEO
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
  
  // ============ COMPRESSION ============
  compress: true,
  
  // ============ OUTPUT ============
  output: 'standalone',
  
  // ============ I18N (Multi-language SEO) ============
  // i18n: {
  //   locales: ['en', 'hi', 'bn'],
  //   defaultLocale: 'en',
  //   localeDetection: false, // Must be false (removed true option)
  // },
  
  // ============ SEO OPTIMIZATIONS ============
  poweredByHeader: false,
  reactStrictMode: true,
  
  // ============ TRAILING SLASH ============
  trailingSlash: false,
  
  // ============ LOGGING ============
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  
  // ============ CDN SUPPORT (Optional) ============
  // assetPrefix: process.env.NEXT_PUBLIC_CDN_URL,
  
  // ============ WEBPACK OPTIMIZATIONS ============
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.optimization.splitChunks = {
  //       chunks: 'all',
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name: 'vendors',
  //           chunks: 'all',
  //         },
  //       },
  //     };
  //   }
  //   return config;
  // },
}

export default nextConfig