"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
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

interface BlogBannerProps {
  posts: BlogPost[];
}

const BlogBanner: React.FC<BlogBannerProps> = ({ posts }) => {
  // First post as featured in slider, rest as grid
  const featuredPosts = posts.slice(0, 3); // First 3 for slider
  const recentPosts = posts.slice(3, 6); // Remaining 3 for grid

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-3 sm:pt-4">
        {/* Featured Slider Section */}
        <div className="mb-4 sm:mb-5">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={800}
            loop={true}
            className="rounded-xl sm:rounded-(--radius-lg) overflow-hidden"
          >
            {featuredPosts.map((post: BlogPost) => (
              <SwiperSlide key={post.slug}>
                <div className="relative group cursor-pointer">
                  <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full overflow-hidden rounded-xl sm:rounded-(--radius-lg)">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-black/40 to-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-(--primary) text-white text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/50">
                          {post.category}
                        </span>
                        <span className="text-gray-200 text-[10px] sm:text-sm drop-shadow-lg">
                          {post.date}
                        </span>
                        <span className="text-gray-300 text-[10px] sm:text-sm drop-shadow-lg">
                          •
                        </span>
                        <span className="text-gray-200 text-[10px] sm:text-sm drop-shadow-lg">
                          {post.readTime}
                        </span>
                      </div>

                      <h2
                        className="text-lg sm:text-2xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 line-clamp-2 group-hover:text-(--primary) transition-colors duration-300 drop-shadow-2xl"
                        style={{
                          textShadow:
                            "0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)",
                        }}
                      >
                        {post.title}
                      </h2>

                      <p
                        className="text-gray-200 text-xs sm:text-sm lg:text-base line-clamp-2 mb-3 sm:mb-6 max-w-2xl drop-shadow-lg hidden sm:block"
                        style={{ textShadow: "0 1px 5px rgba(0,0,0,0.7)" }}
                      >
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-(--primary) flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shadow-lg shadow-blue-500/50">
                            {post.authorAvatar || post.author.charAt(0)}
                          </div>
                          <span className="text-gray-200 text-xs sm:text-sm drop-shadow-lg">
                            {post.author}
                          </span>
                        </div>

                        <Link
                          href={`/blogs/post/${post.slug}`}
                          className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-(--primary) text-white text-[10px] sm:text-sm font-medium rounded-lg sm:rounded-(--radius-sm) hover:bg-(--primary-hover) transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 shadow-lg shadow-blue-500/20 flex items-center gap-1 sm:gap-2"
                        >
                          Read More
                          <span className="text-sm sm:text-lg leading-none">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style>{`
            .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.4) !important;
              opacity: 1 !important;
              width: 6px !important;
              height: 6px !important;
              transition: all 0.3s ease !important;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5) !important;
            }
            .swiper-pagination-bullet-active {
              background: var(--primary) !important;
              width: 20px !important;
              border-radius: 3px !important;
              box-shadow: 0 2px 12px rgba(37, 99, 235, 0.6) !important;
            }
            .swiper-pagination {
              bottom: 12px !important;
            }
            @media (min-width: 640px) {
              .swiper-pagination-bullet {
                width: 8px !important;
                height: 8px !important;
              }
              .swiper-pagination-bullet-active {
                width: 24px !important;
                border-radius: 4px !important;
              }
              .swiper-pagination {
                bottom: 20px !important;
              }
            }
          `}</style>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {recentPosts.map((post: BlogPost) => (
              <article
                key={post.slug}
                className="group bg-(--surface) rounded-xl sm:rounded-(--radius-lg) overflow-hidden border border-(--border) hover:border-(--primary) transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="relative h-36 sm:h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-(--primary) text-white text-[9px] sm:text-xs font-semibold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-5 flex flex-col">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-(--text-muted) mb-2 sm:mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-(--text) group-hover:text-(--primary) transition-colors duration-300 line-clamp-2 mb-1.5 sm:mb-2">
                    {post.title}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-(--text-muted) line-clamp-2 mb-3 sm:mb-4 flex-grow">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-(--primary) flex items-center justify-center text-white text-[9px] sm:text-xs font-bold">
                        {post.authorAvatar || post.author.charAt(0)}
                      </div>
                      <span className="text-[10px] sm:text-sm text-(--text-muted)">
                        {post.author}
                      </span>
                    </div>

                    <Link
                      href={`/blogs/post/${post.slug}`}
                      className="text-[11px] sm:text-sm font-medium text-(--primary) hover:text-(--primary-hover) transition-colors flex items-center gap-1"
                    >
                      Read More
                      <span className="text-sm sm:text-base leading-none">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;