// components/PageSEO.tsx
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface PageSEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  breadcrumbItems?: { name: string; url: string }[]
  noIndex?: boolean
}

export function PageSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  breadcrumbItems = [],
  noIndex = false,
}: PageSEOProps) {
  const pathname = usePathname()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.twipratechnology.com'
  const defaultTitle = 'Twipra Technology | Web Development & Digital Solutions'
  const defaultDescription = 'Professional web development, AI solutions, mobile apps, and digital marketing services for businesses in Bangladesh and India.'
  
  const finalTitle = title ? `${title} | Twipra Technology` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalCanonical = canonical || `${baseUrl}${pathname}`
  const finalOgImage = ogImage || '/og-default.jpg'
  
  // Update meta tags on the client
  useEffect(() => {
    // Update title
    document.title = finalTitle
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', finalDescription)
    
    // Update keywords
    if (keywords && keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]')
      if (metaKeywords) metaKeywords.setAttribute('content', keywords.join(', '))
    }
    
    // Update canonical
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) canonicalLink.setAttribute('href', finalCanonical)
    
    // Update robots
    const robots = document.querySelector('meta[name="robots"]')
    if (robots) {
      robots.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow')
    }
  }, [finalTitle, finalDescription, keywords, finalCanonical, noIndex])
  
  return (
    <>
      {/* Breadcrumb Schema */}
      {breadcrumbItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumbItems.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.url,
              })),
            }),
          }}
        />
      )}
    </>
  )
}