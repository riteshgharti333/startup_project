"use client";

import React, { useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import BlogHero from "../BlogComponents/BlogHero";
import BlogFilter from "../BlogComponents/BlogFilter";
import BlogCard from "../BlogComponents/BlogCard";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorAvatar: string;
  featured?: boolean;
  popular?: boolean;
}

interface BlogsPageProps {
  posts: BlogPost[];
  type?: string;
  categoryName?: string;
}

const BlogsPage: React.FC<BlogsPageProps> = ({ posts, type, categoryName }) => {
  const pathname = usePathname();

  const [sortBy, setSortBy] = useState<string>("latest");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "Web Development",
    "Cloud",
    "Digital Marketing",
    "Graphic Design",
    "SEO",
    "AI",
    "Business Tips",
    "Case Studies",
    "Company News",
  ];

  const formatCategoryName = (slug: string): string => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const displayCategory = categoryName ? formatCategoryName(categoryName) : "";

  const pageType = useMemo(() => {
    if (pathname?.includes("/category/")) return "category";
    if (type === "recent-blog") return "recent-blog";
    if (type === "featured-blog") return "featured-blog";
    if (type === "popular-blog") return "popular-blog";
    return "recent-blog";
  }, [pathname, type]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category filter
      if (pageType === "category" && categoryName) {
        const decoded = decodeURIComponent(categoryName);
        if (
          post.category.toLowerCase() !==
          formatCategoryName(decoded).toLowerCase()
        )
          return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [posts, pageType, categoryName, searchQuery]);

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      if (sortBy === "latest")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "oldest")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      return 0;
    });
  }, [filteredPosts, sortBy]);

  const breadcrumb = useMemo(() => {
    if (pageType === "category") {
      return [
        { name: "Home", href: "/blogs" },
        { name: "Category", href: "/blogs/#category" },
        { name: displayCategory, href: "" },
      ];
    }
    if (pageType === "recent-blog") {
      return [
        { name: "Home", href: "/blogs/#recent" },
        { name: "Recent Blog", href: "" },
      ];
    }
    if (pageType === "featured-blog") {
      return [
        { name: "Home", href: "/blogs/#featured" },
        { name: "Featured Blog", href: "" },
      ];
    }
    if (pageType === "popular-blog") {
      return [
        { name: "Home", href: "/blogs/#popular" },
        { name: "Popular Blog", href: "" },
      ];
    }
    return [
      { name: "Home", href: "/blogs" },
      { name: "Recent Blog", href: "" },
    ];
  }, [pageType, displayCategory]);

  const pageConfig = useMemo(() => {
    if (pageType === "category") {
      return {
        title: `${displayCategory} Articles`,
        badge: displayCategory,
        subtitle: `Browse all articles in ${displayCategory}.`,
      };
    }
    if (pageType === "featured-blog") {
      return {
        title: "Featured Articles",
        badge: "Featured Blog",
        subtitle: "Hand-picked articles worth your time.",
      };
    }
    if (pageType === "popular-blog") {
      return {
        title: "Popular Articles",
        badge: "Popular Blog",
        subtitle: "Most read articles by our community.",
      };
    }
    return {
      title: "Latest Articles",
      badge: "Recent Blog",
      subtitle:
        "Stay updated with our most recent insights, tutorials, and tech articles.",
    };
  }, [pageType, displayCategory]);

  return (
    <section className="w-full">
      <BlogHero
        title={pageConfig.title}
        subtitle={pageConfig.subtitle}
        badge={pageConfig.badge}
        breadcrumb={breadcrumb}
      />

      <BlogFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        categories={categories}
        totalPosts={filteredPosts.length}
        filteredCount={sortedPosts.length}
      />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        {sortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-(--text-muted) text-lg mb-2">
              No articles found
            </p>
            <p className="text-(--text-muted) text-sm">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {sortedPosts.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-2.5 border border-(--border) text-(--text) text-sm font-medium rounded-full hover:border-(--primary) hover:text-(--primary) transition-all duration-200">
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;