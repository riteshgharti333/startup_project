"use client"
import React from "react"
import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BlogHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  breadcrumb: BreadcrumbItem[];
}

const BlogHero: React.FC<BlogHeroProps> = ({
  title,
  subtitle,
  badge,
  breadcrumb,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-3 sm:pt-4">
      <div className="relative bg-(--surface) rounded-xl sm:rounded-(--radius-lg) border border-(--border) overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, var(--primary) 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-(--primary)/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-36 sm:w-72 h-36 sm:h-72 bg-blue-500/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

        <div className="relative px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-(--text-muted) mb-4 sm:mb-6">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-(--border)">/</span>}

                {item.href ? (
                  item.href.includes("#") ? (
                    <Link
                      href={item.href}
                      className="hover:text-(--primary) transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-(--primary) transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <span className="text-(--primary) font-medium text-xs sm:text-sm">
                    {item.name}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Hero Content */}
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-(--primary)/10 rounded-full mb-3 sm:mb-4">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-(--primary) rounded-full" />
              <span className="text-[10px] sm:text-xs font-medium text-(--primary) uppercase tracking-wider">
                {badge}
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-(--text) mb-2 sm:mb-3">
              {title}
            </h1>

            <p className="text-(--text-muted) text-xs sm:text-sm lg:text-base max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
