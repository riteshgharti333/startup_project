// app/page.tsx
import { PageSEO } from "../app/components/PageSEO"
import Banner from "./components/Banner";
import Choose from "./components/Choose";
import FAQ from "./components/FAQ";
import Review from "./components/Review";
import Service from "./components/Service";
import Stats from "./components/Stats";
import Team from "./components/Team";

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.twipratechnology.com'
  
  return (
    <>
      <PageSEO
        title="Home"
        description="Professional web development, AI solutions, mobile apps, and digital marketing services for businesses in Bangladesh and India."
        keywords={[
          'web development Bangladesh',
          'AI solutions India',
          'mobile app development',
          'digital marketing agency',
        ]}
        canonical="https://www.twipratechnology.com"
        ogImage="/og-home.jpg"
        breadcrumbItems={[
          { name: 'Home', url: `${baseUrl}/` },
        ]}
      />
      
      <div>
        <Banner />
        <Service />
        <Choose />
        <Review />
        <Stats />
        <Team />
        <FAQ />
      </div>
    </>
  )
}