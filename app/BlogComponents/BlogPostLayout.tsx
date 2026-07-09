"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  post: {
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
    authorAvatar: string;
    authorBio: string;
    tags: string[];
  };
  tableOfContents?: { id: string; title: string; level: number }[];
  relatedPosts?: { slug: string; title: string }[];
  backlinks?: { url: string; title: string; description?: string }[];
}

export default function BlogPostLayout({
  children,
  post,
  tableOfContents,
  relatedPosts,
  backlinks,
}: BlogPostLayoutProps) {
  const categorySlug = post.category.toLowerCase().replace(/\s+/g, "-");

  return (
    <article className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          Home
        </Link>
        <span className="text-gray-600">/</span>
        <Link
          href={`/blogs/category/${categorySlug}`}
          className="hover:text-blue-400 transition-colors"
        >
          {post.category}
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-white line-clamp-1">{post.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <header className="mb-8">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm">{post.date}</span>
              <span className="text-gray-600 text-sm">•</span>
              <span className="text-gray-400 text-sm">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {post.authorAvatar}
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-gray-400 text-sm">{post.authorBio}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Table of Contents (Mobile) */}
          {tableOfContents && tableOfContents.length > 0 && (
            <div className="lg:hidden bg-gray-800/50 rounded-xl p-4 mb-8">
              <h3 className="text-white font-semibold mb-3">Table of Contents</h3>
              <ul className="space-y-2 text-sm">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`text-gray-300 hover:text-blue-400 transition-colors ${
                        item.level === 3 ? "pl-4 text-gray-400" : ""
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-800">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Related Posts
              </h3>
              <ul className="space-y-2">
                {relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blogs/post/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      → {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar (Desktop) */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Table of Contents (Desktop) */}
            {tableOfContents && tableOfContents.length > 0 && (
              <div className="bg-gray-800/50 rounded-xl p-5 hidden lg:block">
                <h3 className="text-white font-semibold mb-3">
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-sm">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`text-gray-300 hover:text-blue-400 transition-colors ${
                          item.level === 3 ? "pl-4 text-gray-400" : ""
                        }`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Backlinks */}
            {backlinks && backlinks.length > 0 && (
              <div className="bg-gray-800/50 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-3">
                  Resources & References
                </h3>
                <ul className="space-y-2">
                  {backlinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
                      >
                        {link.title}
                      </a>
                      {link.description && (
                        <p className="text-gray-400 text-xs mt-0.5">
                          {link.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}