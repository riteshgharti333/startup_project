// lib/schema.ts
// Only what you need - no extra bloated code

// Organization Schema (for Google Knowledge Panel)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Twipra Technology',
  legalName: 'Twipra Technology',
  url: 'https://www.twipratechnology.com',
  logo: 'https://www.twipratechnology.com/logo.svg',
  description: 'Professional web development, AI solutions, mobile apps, and digital marketing services for businesses in Bangladesh and India.',
  email: 'info@twipratechnology.com',
  telephone: '+880XXXXXXXXX', // Add your Bangladesh number
  sameAs: [
    // Add your social media links if you have
    // 'https://www.linkedin.com/company/twipra-technology',
    // 'https://github.com/twipratech',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD', // Bangladesh
    // Add your full address
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880XXXXXXXXX',
    contactType: 'customer service',
    email: 'info@twipratechnology.com',
    availableLanguage: ['English', 'Hindi', 'Bengali'],
  },
}

// Breadcrumb Schema (for search result hierarchy)
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// Local Business Schema (for local SEO in BD/India)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Twipra Technology',
  image: 'https://www.twipratechnology.com/logo.svg',
  priceRange: '$$',
  telephone: '+880XXXXXXXXX',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
  },
  openingHours: ['Mon-Fri 09:00-18:00'],
  areaServed: ['Bangladesh', 'India'],
}