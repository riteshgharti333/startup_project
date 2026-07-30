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
import { getAllPosts } from "../lib/blogs"; 

interface Category {
  name: string;
  slug: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

// Icon mapping based on category name
const getCategoryIcon = (categoryName: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    "Web Development": <FiGlobe />,
    "Cloud": <FiCloud />,
    "Digital Marketing": <FiTrendingUp />,
    "Graphic Design": <FiPenTool />,
    "SEO": <FiSearch />,
    "AI": <FiCpu />,
    "Business Tips": <FiBriefcase />,
    "Case Studies": <FiFileText />,
    "Company News": <FiRss />,
  };
  return iconMap[categoryName] || <FiFileText />;
};

// Color mapping based on category name
const getCategoryColor = (categoryName: string) => {
  const colorMap: { [key: string]: string } = {
    "Web Development": "#3b82f6",
    "Cloud": "#8b5cf6",
    "Digital Marketing": "#f59e0b",
    "Graphic Design": "#ec4899",
    "SEO": "#10b981",
    "AI": "#6366f1",
    "Business Tips": "#14b8a6",
    "Case Studies": "#f43f5e",
    "Company News": "#0ea5e9",
  };
  return colorMap[categoryName] || "#6b7280";
};

const BlogCategory: React.FC = () => {
  // Get all posts from MDX files
  const allPosts = getAllPosts();
  
  // Get unique categories with counts
  const categoryMap = new Map<string, number>();
  
  allPosts.forEach(post => {
    const category = post.category;
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
  });

  // Convert to array and create category objects
  const categories: Category[] = Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      slug: `category/${name.toLowerCase().replace(/\s+/g, '-')}`,
      icon: getCategoryIcon(name),
      count,
      color: getCategoryColor(name),
    }))
    .sort((a, b) => b.count - a.count); // Sort by count (most popular first)

  // If no categories, show empty state
  if (categories.length === 0) {
    return (
      <section className="w-full py-8 sm:py-12" id="category">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--text) mb-1 sm:mb-2">
              Browse Categories
            </h2>
            <p className="text-(--text-muted) text-xs sm:text-sm">
              No categories found
            </p>
          </div>
        </div>
      </section>
    );
  }

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
              href={`/blogs/${category.slug}`}
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

              {/* Post Count - NOW USING REAL DATA */}
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