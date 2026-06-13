"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiStar, FiPhone, FiArrowLeft } from "react-icons/fi";
import { getCategoryBySlug } from "../../data/serviceData";
import { useParams } from "next/navigation";
import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";
import { PageSEO } from "@/app/components/PageSEO";

interface ServiceItem {
  slug: string;
  name: string;
  description: string;
  startingPrice: string;
  featured?: boolean;
}

const Category: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const params = useParams();
  const slug = params.category as string;
  const category = getCategoryBySlug(slug);

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com";

  if (!category) {
    return (
      <>
        <PageSEO
          title="Service Category Not Found | Twipra Technology"
          description="The requested service category could not be found. Explore our available web development, AI, mobile app, and digital marketing services."
          keywords={["service not found", "Twipra Technology services"]}
          canonical={`${baseUrl}/services`}
          breadcrumbItems={[
            { name: "Home", url: `${baseUrl}/` },
            { name: "Services", url: `${baseUrl}/services` },
          ]}
        />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-(--text)">
            Category not found
          </h1>
        </div>
      </>
    );
  }

  // Handle Get Started button click - scroll to contact section
  const handleGetStarted = (serviceName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    console.log(`Get started with ${serviceName}`);
  };

  // Generate category-specific keywords
  const getCategoryKeywords = () => {
    const baseKeywords = [
      `${category.title} services`,
      `${category.title} Bangladesh`,
      `${category.title} company`,
    ];

    if (category.slug === "web-development") {
      baseKeywords.push(
        "custom website development",
        "e-commerce development",
        "web application",
        "full stack development",
      );
    } else if (category.slug === "ai-solutions") {
      baseKeywords.push(
        "AI chatbot",
        "AI automation",
        "custom AI integration",
        "GPT solutions",
      );
    } else if (category.slug === "mobile-app-development") {
      baseKeywords.push(
        "Android app development",
        "iOS app development",
        "cross platform apps",
      );
    } else if (category.slug === "cloud-infrastructure") {
      baseKeywords.push(
        "cloud hosting",
        "VPS setup",
        "server deployment",
        "CI/CD",
      );
    } else if (category.slug === "digital-marketing") {
      baseKeywords.push(
        "SEO services",
        "social media marketing",
        "Google Ads",
        "content marketing",
      );
    }

    return baseKeywords;
  };

  return (
    <>
      <PageSEO
        title={`${category.title} Services | Professional ${category.title} in Bangladesh | Twipra Technology`}
        description={category.description}
        keywords={getCategoryKeywords()}
        canonical={`${baseUrl}/services/${category.slug}`}
        ogImage={`/og-${category.slug}.jpg`}
        breadcrumbItems={[
          { name: "Home", url: `${baseUrl}/` },
          { name: "Services", url: `${baseUrl}/services` },
          { name: category.title, url: `${baseUrl}/services/${category.slug}` },
        ]}
      />

      <main className="relative">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
          <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
                <FiStar size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">
                  {category.title} Services
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-(--text) mb-4">
                {category.title.split(" ").slice(0, -1).join(" ") ||
                  category.title}{" "}
                <span className="relative inline-block">
                  <span className="text-(--primary)">
                    {category.title.includes(" ")
                      ? category.title.split(" ").slice(-1)[0]
                      : category.title}
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-(--primary)/30 rounded-full origin-left"
                  />
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-(--text-muted) max-w-2xl mx-auto mb-8">
                {category.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/services">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 cursor-pointer"
                  >
                    Explore Services
                    <FiArrowRight size={16} />
                  </motion.div>
                </Link>

                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all cursor-pointer"
                  >
                    <FiPhone size={14} className="text-(--primary)" />
                    Book a Call
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section
          id="services-list"
          ref={sectionRef}
          className="relative pb-20 lg:pb-28"
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-(--text-muted) hover:text-(--primary) transition-colors mb-6"
            >
              <FiArrowLeft size={16} />
              <span>Back to All Services</span>
            </Link>

            {/* Section Divider */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                What We Offer
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            {/* Service Cards Grid - Using reusable ServiceCard component */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {category.services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  description={service.description}
                  startingPrice={service.startingPrice}
                  slug={service.slug}
                  categorySlug={category.slug}
                  featured={service.featured}
                  index={index}
                  onGetStarted={() => handleGetStarted(service.name)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Category;
