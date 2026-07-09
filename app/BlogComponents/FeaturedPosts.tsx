"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className="w-full py-12 overflow-hidden" id="featured">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--text) mb-1 sm:mb-2">
              Featured Posts
            </h2>
            <p className="text-(--text-muted) text-xs sm:text-sm">
              Hand-picked articles worth your time
            </p>
          </div>
          <Link
            href="/blogs/featured-blog"
            className="self-start sm:self-auto px-3 sm:px-5 py-2 sm:py-2.5 border border-(--border) text-(--text) text-xs sm:text-sm font-medium rounded-lg sm:rounded-(--radius-sm) hover:border-(--primary) hover:text-(--primary) transition-all duration-200 whitespace-nowrap"
          >
            View All →
          </Link>
        </div>

        {/* Swiper Container with Arrows */}
        <div className="relative group featured-scrollbar">
          {/* Left Arrow */}
          <button
            className="featured-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-(--surface) border border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) hover:bg-(--surface-hover) transition-all shadow-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 disabled:opacity-0 disabled:cursor-not-allowed"
            style={{ transition: "all 0.3s ease" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            className="featured-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-(--surface) border border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) hover:bg-(--surface-hover) transition-all shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 disabled:opacity-0 disabled:cursor-not-allowed"
            style={{ transition: "all 0.3s ease" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView="auto"
            centeredSlides={false}
            loop={posts.length > 3}
            speed={600}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".featured-prev",
              nextEl: ".featured-next",
            }}
            pagination={{
              el: ".featured-pagination",
              clickable: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 12 },
              640: { slidesPerView: 1.5, spaceBetween: 16 },
              768: { slidesPerView: 2.2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3.5, spaceBetween: 20 },
            }}
            className="!overflow-visible"
          >
            {posts.map((post: BlogPost) => (
              <SwiperSlide key={post.slug} className="!h-auto">
                <Link
                  href={`/blogs/post/${post.slug}`}
                  className="group/card block h-full"
                >
                  <div className="bg-(--surface) rounded-(--radius-lg) border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 h-full">
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-(--surface) to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-(--primary) text-white text-[10px] font-semibold rounded-full uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[10px] text-(--text-muted) mb-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-(--primary)/20 flex items-center justify-center text-(--primary) text-[9px] font-bold">
                            {post.authorAvatar}
                          </div>
                          <span className="font-medium text-(--text) text-[11px]">
                            {post.author}
                          </span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                        <span>{post.date}</span>
                      </div>

                      <h3 className="text-sm font-bold text-(--text) group-hover/card:text-(--primary) transition-colors duration-300 line-clamp-2 mb-1.5">
                        {post.title}
                      </h3>

                      <p className="text-xs text-(--text-muted) line-clamp-2 mb-3">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-(--primary) font-medium text-xs group-hover/card:gap-2 transition-all duration-300 pt-2 border-t border-(--border)">
                        Read Article
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination Dots */}
        <div className="featured-pagination flex items-center justify-center gap-2 mt-6"></div>

        {/* Custom Styles */}
        <style>{`
          .swiper-pagination-bullet {
            background: var(--border) !important;
            opacity: 1 !important;
            width: 8px !important;
            height: 8px !important;
          }
          .swiper-pagination-bullet-active {
            background: var(--primary) !important;
            width: 24px !important;
            border-radius: 4px !important;
          }
          .featured-prev.swiper-button-disabled,
          .featured-next.swiper-button-disabled {
            opacity: 0 !important;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </section>
  );
};

export default FeaturedPosts;