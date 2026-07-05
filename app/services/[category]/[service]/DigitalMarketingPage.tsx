"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiPhone, FiCheck, FiStar } from "react-icons/fi";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PageSEO } from "@/app/components/PageSEO";
import {
  digitalMarketingPackages,
  adManagementOnly,
  importantNote,
  allInPackages,
  PackageData,
  AllInPackageItem,
} from "../../../data/digitalData";

const DigitalMarketingPage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const params = useParams();
  const serviceSlug = params.service as string;

  // Type-safe access
  const packageData: PackageData | undefined =
    digitalMarketingPackages[serviceSlug];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.twipratechnology.com";

  if (!packageData) {
    return (
      <>
        <PageSEO
          title="Service Not Found | Twipra Technology"
          description="The requested digital marketing package could not be found."
          keywords={["digital marketing", "Twipra Technology"]}
          canonical={`${baseUrl}/services/digital-marketing`}
          breadcrumbItems={[
            { name: "Home", url: `${baseUrl}/` },
            { name: "Services", url: `${baseUrl}/services` },
            {
              name: "Digital Marketing",
              url: `${baseUrl}/services/digital-marketing`,
            },
          ]}
        />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-(--text)">
            Package not found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <PageSEO
        title={`${packageData.name} | Professional Digital Marketing Services in Bangladesh | Twipra Technology`}
        description={packageData.description}
        keywords={[
          packageData.name,
          "digital marketing",
          "social media marketing",
          "SEO",
          "Google Ads",
          "Facebook Ads",
          "digital marketing Bangladesh",
        ]}
        canonical={`${baseUrl}/services/digital-marketing/${serviceSlug}`}
        breadcrumbItems={[
          { name: "Home", url: `${baseUrl}/` },
          { name: "Services", url: `${baseUrl}/services` },
          {
            name: "Digital Marketing",
            url: `${baseUrl}/services/digital-marketing`,
          },
          {
            name: packageData.name,
            url: `${baseUrl}/services/digital-marketing/${serviceSlug}`,
          },
        ]}
      />

      <main className="relative">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20">
          <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-(--text-muted) mb-6">
                <a
                  href="/services"
                  className="hover:text-(--primary) transition-colors"
                >
                  Services
                </a>
                <span>/</span>
                <a
                  href="/services/digital-marketing"
                  className="hover:text-(--primary) transition-colors"
                >
                  Digital Marketing
                </a>
                <span>/</span>
                <span className="text-(--text) truncate">
                  {packageData.name}
                </span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-(--surface) border border-(--border) rounded-(--radius-xl) mb-6">
                <FiStar size={14} className="text-(--primary)" />
                <span className="text-sm text-(--text-muted)">
                  {packageData.idealFor}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--text) mb-4 leading-tight">
                {packageData.hero.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-(--text-muted) mb-6 leading-relaxed">
                {packageData.hero.description}
              </p>

              {/* Price + CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-(--primary) to-purple-500 bg-clip-text text-transparent">
                    {packageData.startingPrice}
                  </div>
                  <p className="text-xs text-(--text-muted) mt-1">
                    Service fee — paid to Twipra Technologies
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--primary) hover:bg-(--primary-hover) text-white text-sm font-medium rounded-(--radius-md) transition-all shadow-lg shadow-(--primary)/20 cursor-pointer"
                    >
                      <FiPhone size={14} />
                      {packageData.hero.cta}
                    </motion.div>
                  </Link>

                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-(--surface) border border-(--border) hover:border-(--primary)/30 text-(--text) text-sm font-medium rounded-(--radius-md) transition-all cursor-pointer"
                    >
                      Book a Call
                      <FiArrowRight size={14} />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="relative pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-(--text) mb-4">
                {packageData.overview.title}
              </h2>
              <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                {packageData.overview.content}
              </p>
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section ref={sectionRef} className="relative pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                What's Included
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {packageData.includes.map((item: string, index: number) => {
                const isHighlight =
                  item.startsWith("Everything in") ||
                  item.startsWith("Service Fee");
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                    className={`bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 sm:p-5 hover:border-(--primary)/30 transition-all duration-300 ${
                      isHighlight
                        ? "border-(--primary)/30 bg-(--primary)/5"
                        : ""
                    }`}
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-(--text) mb-2">
                      {item}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Paid Marketing Section */}
        <section className="relative pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                {packageData.paidMarketing.title}
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                {packageData.paidMarketing.platforms.map(
                  (platform: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-(--primary) flex-shrink-0" />
                      <span className="text-sm text-(--text-muted)">
                        {platform}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <span className="text-sm text-(--text-muted)">
                  Active Campaigns
                </span>
                <span className="text-sm font-semibold text-(--text)">
                  {packageData.paidMarketing.campaigns}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <span className="text-sm text-(--text-muted)">
                  Recommended Monthly Ad Budget
                </span>
                <span className="text-sm font-semibold text-(--primary)">
                  {packageData.paidMarketing.recommendedBudget}
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Total Monthly Cost Section */}
        <section className="relative pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                {packageData.totalCost.title}
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            <div className="bg-(--surface) border border-(--border) rounded-(--radius-lg) overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-4 sm:p-6 border-b border-(--border) bg-(--primary)/5">
                <span className="text-sm font-medium text-(--text-muted)">
                  Item
                </span>
                <span className="text-sm font-medium text-(--text-muted) text-right">
                  Amount
                </span>
              </div>
              {packageData.totalCost.items.map(
                (item: { label: string; amount: string }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`grid grid-cols-2 gap-4 p-4 sm:p-6 ${
                      index !== packageData.totalCost.items.length - 1
                        ? "border-b border-(--border)"
                        : ""
                    } ${
                      index === packageData.totalCost.items.length - 1
                        ? "bg-(--primary)/5 font-semibold"
                        : ""
                    }`}
                  >
                    <span className="text-xs sm:text-sm  text-(--text)">
                      {item.label}
                    </span>
                    <span
                      className={`text-xs sm:text-sm text-right ${
                        index === packageData.totalCost.items.length - 1
                          ? "text-(--primary) font-bold"
                          : "text-(--text)"
                      }`}
                    >
                      {item.amount}
                    </span>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Advertising Management Only Section */}
        <section className="relative pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                {adManagementOnly.title}
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            <p className="text-sm text-(--text-muted) mb-4">
              {adManagementOnly.description}
            </p>

            <div className="bg-(--surface) border border-(--border) rounded-(--radius-lg) overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-4 sm:p-6 border-b border-(--border) bg-(--primary)/5">
                <span className="text-sm font-medium text-(--text-muted)">
                  Monthly Ad Budget
                </span>
                <span className="text-sm font-medium text-(--text-muted) text-right">
                  Twipra Management Fee
                </span>
              </div>
              {adManagementOnly.table.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={`grid grid-cols-2 gap-4 p-4 sm:p-6 ${
                    index !== adManagementOnly.table.length - 1
                      ? "border-b border-(--border)"
                      : ""
                  } ${
                    item.managementFee === "Custom Quote"
                      ? "text-(--primary) font-semibold"
                      : ""
                  }`}
                >
                  <span className="text-xs sm:text-sm text-(--text)">
                    {item.adBudget}
                  </span>
                  <span
                    className={`text-xs sm:text-sm text-right ${
                      item.managementFee === "Custom Quote"
                        ? "text-(--primary) font-bold"
                        : "text-(--text)"
                    }`}
                  >
                    {item.managementFee}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All-In Packages Section */}
        <section className="relative pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                {allInPackages.title}
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            <p className="text-sm text-(--text-muted) mb-4">
              {allInPackages.description}
            </p>

            <div className="bg-(--surface) border border-(--border) rounded-(--radius-lg) overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-(--border) bg-(--primary)/5">
                    <th className="text-left text-xs sm:text-sm font-medium text-(--text-muted) p-4 sm:p-6">
                      Package
                    </th>
                    <th className="text-center text-xs sm:text-sm font-medium text-(--text-muted) p-4 sm:p-6">
                      Service Fee
                    </th>
                    <th className="text-center text-xs sm:text-sm font-medium text-(--text-muted) p-4 sm:p-6">
                      Ad Budget
                    </th>
                    <th className="text-right text-xs sm:text-sm font-medium text-(--text-muted) p-4 sm:p-6">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allInPackages.table.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`border-b border-(--border) hover:bg-(--primary)/5 transition-colors duration-200 ${
                        index === allInPackages.table.length - 1
                          ? "border-b-0"
                          : ""
                      }`}
                    >
                      <td className="text-sm font-semibold text-(--text) p-4 sm:p-6">
                        {item["Package"]}
                      </td>
                      <td className="text-sm text-(--text-muted) text-center p-4 sm:p-6">
                        {item["Twipra Service Fee"]}
                      </td>
                      <td className="text-sm text-(--text-muted) text-center p-4 sm:p-6">
                        {item["Suggested Ad Budget"]}
                      </td>
                      <td className="text-sm font-bold text-(--primary) text-center p-4 sm:p-6">
                        {item["Total Monthly Budget"]}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Important Note Section */}
        <section className="relative pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-muted) font-medium uppercase tracking-wider whitespace-nowrap">
                {importantNote.title}
              </span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-(--surface) border border-(--border) rounded-(--radius-lg) p-6 sm:p-8"
            >
              <p className="text-sm text-(--text-muted) leading-relaxed">
                {importantNote.content}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DigitalMarketingPage;
