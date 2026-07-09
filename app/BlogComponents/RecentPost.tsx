"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
}

interface RecentPostProps {
  posts: BlogPost[];
}

const RecentPost: React.FC<RecentPostProps> = ({ posts }) => {
  // Handle empty posts
  if (!posts || posts.length === 0) {
    return null;
  }

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 4);

  return (
    <section className="w-full py-12" id="recent">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--text) mb-1 sm:mb-2">
              Recent Posts
            </h2>
            <p className="text-(--text-muted) text-xs sm:text-sm">
              Latest insights from our team
            </p>
          </div>
          <Link
            href="/blogs/recent-blog"
            className="self-start sm:self-auto px-3 sm:px-5 py-2 sm:py-2.5 border border-(--border) text-(--text) text-xs sm:text-sm font-medium rounded-lg sm:rounded-(--radius-sm) hover:border-(--primary) hover:text-(--primary) transition-all duration-200 whitespace-nowrap"
          >
            View All Posts →
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5">
          {/* Large Card - Left Side */}
          <div className="lg:w-[66%] lg:flex-shrink-0">
            <Link
              href={`/blogs/post/${mainPost.slug}`}
              className="group block h-full bg-(--surface) rounded-(--radius-lg) border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col h-full">
                {/* Large Image */}
                <div className="relative h-64 sm:h-80 lg:h-[500px] overflow-hidden">
                  <Image
                    src={mainPost.image}
                    alt={mainPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-(--surface) via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-(--primary) text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/30">
                      {mainPost.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full">
                      {mainPost.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-sm text-(--text-muted) mb-4">
                      <div className="w-8 h-8 rounded-full bg-(--primary)/20 flex items-center justify-center text-(--primary) text-xs font-bold">
                        {mainPost.authorAvatar}
                      </div>
                      <span className="font-medium text-(--text)">
                        {mainPost.author}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                      <span>{mainPost.date}</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-(--text) group-hover:text-(--primary) transition-colors duration-300 mb-3">
                      {mainPost.title}
                    </h3>

                    <p className="text-(--text-muted) text-sm lg:text-base leading-relaxed line-clamp-3">
                      {mainPost.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-(--primary) font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Read Full Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - 3 Cards Stacked */}
          <div className="lg:w-[34%] flex flex-col gap-4 md:gap-5">
            {sidePosts.map((post: BlogPost) => (
              <Link
                key={post.slug}
                href={`/blogs/post/${post.slug}`}
                className="group block bg-(--surface) rounded-(--radius-lg) border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 flex-1"
              >
                <div className="flex flex-col sm:flex-row lg:flex-col h-full">
                  {/* Image */}
                  <div className="relative sm:w-36 lg:w-full h-32 sm:h-auto lg:h-30 overflow-hidden flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-(--surface) to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-(--primary) text-white text-[10px] font-semibold rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-3 py-2 flex-1 flex flex-col gap-2">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] lg:text-xs text-(--text-muted) mb-1 lg:mb-2">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-bold text-(--text) group-hover:text-(--primary) transition-colors duration-300 line-clamp-2 text-sm lg:text-base">
                        {post.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-2 lg:pt-3 border-t border-(--border)">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-(--primary)/20 flex items-center justify-center text-(--primary) text-[9px] lg:text-[10px] font-bold">
                          {post.authorAvatar}
                        </div>
                        <span className="text-[10px] lg:text-xs text-(--text-muted)">
                          {post.author}
                        </span>
                      </div>

                      <span className="text-(--primary) text-[10px] lg:text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                        Read
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;