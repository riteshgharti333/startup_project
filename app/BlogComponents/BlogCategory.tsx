"use client";
import React from "react";
import Link from "next/link";
import {
  FiGlobe,
  FiCloud,
  FiTrendingUp,
  FiPenTool,
  FiSearch,
  FiCpu,
  FiBriefcase,
  FiFileText,
  FiRss,
} from "react-icons/fi";

interface Category {
  name: string;
  slug: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

const BlogCategory: React.FC = () => {
  const categories: Category[] = [
    {
      name: "Web Development",
      slug: "category/web-development",
      icon: <FiGlobe />,
      count: 24,
      color: "#3b82f6",
    },
    {
      name: "Cloud",
      slug: "category/cloud",
      icon: <FiCloud />,
      count: 18,
      color: "#8b5cf6",
    },
    {
      name: "Digital Marketing",
      slug: "category/digital-marketing",
      icon: <FiTrendingUp />,
      count: 15,
      color: "#f59e0b",
    },
    {
      name: "Graphic Design",
      slug: "category/graphic-design",
      icon: <FiPenTool />,
      count: 12,
      color: "#ec4899",
    },
    {
      name: "SEO",
      slug: "category/seo",
      icon: <FiSearch />,
      count: 20,
      color: "#10b981",
    },
    {
      name: "AI",
      slug: "#category",
      icon: <FiCpu />,
      count: 30,
      color: "#6366f1",
    },
    {
      name: "Business Tips",
      slug: "category/business-tips",
      icon: <FiBriefcase />,
      count: 10,
      color: "#14b8a6",
    },
    {
      name: "Case Studies",
      slug: "category/case-studies",
      icon: <FiFileText />,
      count: 8,
      color: "#f43f5e",
    },
    {
      name: "Company News",
      slug: "category/company-news",
      icon: <FiRss />,
      count: 6,
      color: "#0ea5e9",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12" id="category">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--text) mb-1 sm:mb-2">
            Browse Categories
          </h2>
          <p className="text-(--text-muted) text-xs sm:text-sm">
            Find content by topic
          </p>
        </div>

        {/* Categories Grid - Centered */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category: Category) => (
            <Link
              key={category.name}
              href={`blogs/${category.slug}`}
              className="group relative bg-(--surface) rounded-full border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 px-2.5 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2"
              style={{
                background: `linear-gradient(135deg, var(--surface) 0%, ${category.color}08 100%)`,
              }}
            >
              {/* Icon with colored background */}
              <div
                className="w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                style={{
                  backgroundColor: `${category.color}20`,
                  color: category.color,
                }}
              >
                <span className="text-xs sm:text-base">{category.icon}</span>
              </div>

              {/* Category Name */}
              <span className="text-[11px] sm:text-sm font-medium text-(--text) group-hover:text-(--primary) transition-colors duration-300 whitespace-nowrap">
                {category.name}
              </span>

              {/* Post Count */}
              <span className="text-[9px] sm:text-[10px] text-(--text-muted) bg-(--border)/30 px-1 sm:px-1.5 py-0.5 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
