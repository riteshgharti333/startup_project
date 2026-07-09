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

interface PopularPostsProps {
  posts: BlogPost[];
}

const PopularPosts: React.FC<PopularPostsProps> = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const mainPost = posts[0];
  const gridPosts = posts.slice(1, 5);
  const bottomPost = posts[5];

  return (
    <section className="w-full py-12" id="popular">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--text) mb-1 sm:mb-2">
              Popular Posts
            </h2>
            <p className="text-(--text-muted) text-xs sm:text-sm">
              Most read articles this week
            </p>
          </div>
          <Link
            href="/blogs/popular-blog"
            className="self-start sm:self-auto px-3 sm:px-5 py-2 sm:py-2.5 border border-(--border) text-(--text) text-xs sm:text-sm font-medium rounded-lg sm:rounded-(--radius-sm) hover:border-(--primary) hover:text-(--primary) transition-all duration-200 whitespace-nowrap"
          >
            View All →
          </Link>
        </div>

        {/* Magazine Layout */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Large Card - Left Side */}
          <div className="lg:w-[40%] lg:flex-shrink-0">
            <Link
              href={`/blogs/post/${mainPost.slug}`}
              className="group block h-full bg-(--surface) rounded-xl sm:rounded-(--radius-lg) border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col h-full">
                <div className="relative h-52 sm:h-72 lg:h-[500px] overflow-hidden">
                  <Image
                    src={mainPost.image}
                    alt={mainPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-(--surface) via-transparent to-transparent" />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-(--primary) text-white text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/30">
                      {mainPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-sm text-(--text-muted) mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-(--primary)/20 flex items-center justify-center text-(--primary) text-[9px] sm:text-xs font-bold">
                        {mainPost.authorAvatar}
                      </div>
                      <span className="font-medium text-(--text) text-xs sm:text-base">
                        {mainPost.author}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                      <span className="text-[10px] sm:text-sm">{mainPost.date}</span>
                      <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                      <span className="text-[10px] sm:text-sm">{mainPost.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-xl lg:text-2xl font-bold text-(--text) group-hover:text-(--primary) transition-colors duration-300 mb-2 sm:mb-3">
                      {mainPost.title}
                    </h3>

                    <p className="text-(--text-muted) text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3">
                      {mainPost.description}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 flex items-center gap-1 sm:gap-2 text-(--primary) font-medium text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
                    Read Full Article
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full">
              {gridPosts.map((post: BlogPost) => (
                <Link
                  key={post.slug}
                  href={`/blogs/post/${post.slug}`}
                  className="group block bg-(--surface) rounded-(--radius-lg) border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-(--surface) to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-(--primary) text-white text-[10px] font-semibold rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[10px] text-(--text-muted) mb-2">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-(--text) group-hover:text-(--primary) transition-colors duration-300 line-clamp-2 text-sm mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1.5 pt-2 border-t border-(--border)">
                      <div className="w-5 h-5 rounded-full bg-(--primary)/20 flex items-center justify-center text-(--primary) text-[9px] font-bold">
                        {post.authorAvatar}
                      </div>
                      <span className="text-[10px] text-(--text-muted)">{post.author}</span>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Bottom Card - Full Width (only if 6 posts) */}
              {bottomPost && (
                <div className="hidden sm:block sm:col-span-2">
                  <Link
                    href={`/blogs/post/${bottomPost.slug}`}
                    className="group block bg-(--surface) rounded-(--radius-lg) border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10"
                  >
                    <div className="flex flex-col sm:flex-row h-full">
                      <div className="relative sm:w-56 h-40 sm:h-auto overflow-hidden flex-shrink-0">
                        <Image
                          src={bottomPost.image}
                          alt={bottomPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-(--surface) to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-(--primary) text-white text-[10px] font-semibold rounded-full uppercase tracking-wider">
                            {bottomPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-(--text-muted) mb-2">
                            <div className="w-6 h-6 rounded-full bg-(--primary)/20 flex items-center justify-center text-(--primary) text-[10px] font-bold">
                              {bottomPost.authorAvatar}
                            </div>
                            <span className="font-medium text-(--text)">{bottomPost.author}</span>
                            <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                            <span>{bottomPost.date}</span>
                            <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                            <span>{bottomPost.readTime}</span>
                          </div>
                          <h3 className="font-bold text-(--text) group-hover:text-(--primary) transition-colors duration-300 text-base mb-2">
                            {bottomPost.title}
                          </h3>
                          <p className="text-sm text-(--text-muted) line-clamp-2">
                            {bottomPost.description}
                          </p>
                        </div>
                        <span className="text-(--primary) text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300 mt-3">
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;