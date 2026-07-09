import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  tags: string[];
  featured?: boolean;
  popular?: boolean;
}

interface SingleBlogProps {
  slug: string;
  post: BlogPost;
}

// Custom MDX components with smaller fonts and better table styling
const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="text-xl sm:text-2xl font-bold mt-6 mb-3 text-(--text)"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-lg sm:text-xl font-bold mt-6 mb-3 text-(--text) pb-2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-base sm:text-lg font-semibold mt-4 mb-2 text-(--text)"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="mb-3 text-sm sm:text-base leading-relaxed text-(--text)"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc list-inside mb-3 space-y-1 text-sm sm:text-base text-(--text)"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside mb-3 space-y-1 text-sm sm:text-base text-(--text)"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="text-sm sm:text-base text-(--text)" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-(--primary) hover:underline text-sm sm:text-base"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-(--primary) pl-4 my-3 italic text-sm sm:text-base text-(--text-muted) bg-(--surface) py-2 rounded-r-lg"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-(--surface) px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono text-(--primary)"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto mb-3 text-xs sm:text-sm border border-(--border)"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-4 rounded-lg border border-(--border)">
      <table
        className="min-w-full divide-y divide-(--border) text-xs sm:text-sm"
        {...props}
      />
    </div>
  ),
  thead: (props: any) => <thead className="bg-(--surface)" {...props} />,
  tbody: (props: any) => (
    <tbody
      className="divide-y divide-(--border) bg-white dark:bg-gray-800"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="px-3 py-2 text-left text-xs font-semibold text-(--text) uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-3 py-2 whitespace-nowrap text-xs sm:text-sm text-(--text)"
      {...props}
    />
  ),
  tr: (props: any) => (
    <tr className="hover:bg-(--surface) transition-colors" {...props} />
  ),
  // hr: (props: any) => <hr className="my-6 border-(--border)" {...props} />,
  strong: (props: any) => (
    <strong className="font-semibold text-(--text)" {...props} />
  ),
  em: (props: any) => <em className="italic text-(--text-muted)" {...props} />,
};

export default function SingleBlog({ slug, post }: SingleBlogProps) {
  if (!post) {
    notFound();
  }

  const categorySlug = post.category.toLowerCase().replace(/\s+/g, "-");

  // Clean MDX content
  // Only remove heading IDs which cause parsing issues
  const cleanContent = post.content.replace(/\{#[\w-]+\}/g, "").trim();

  return (
    <article className="w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-(--text-muted) mb-4 sm:mb-6"
        >
          <Link href="/blogs" className="hover:text-(--primary) transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/blogs/category/${categorySlug}`}
            className="hover:text-(--primary) transition-colors"
          >
            {post.category}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-(--text) line-clamp-1">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-(--primary) text-white text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <time
              dateTime={post.date}
              className="text-(--text-muted) text-[10px] sm:text-xs"
            >
              {post.date}
            </time>
            <span className="text-(--text-muted) text-[10px] sm:text-xs">
              •
            </span>
            <span className="text-(--text-muted) text-[10px] sm:text-xs">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--text) mb-3 sm:mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-(--primary) flex items-center justify-center text-white font-bold text-[10px] sm:text-xs">
              {post.authorAvatar}
            </div>
            <div>
              <p className="text-(--text) font-medium text-[11px] sm:text-sm">
                {post.author}
              </p>
              <p className="text-(--text-muted) text-[10px] sm:text-xs">
                {post.authorBio}
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-lg sm:rounded-xl overflow-hidden mb-6 sm:mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-50 sm:h-70 lg:h-96 object-cover"
            priority
          />
        </div>

        {/* Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div
              className="prose prose-sm sm:prose-base dark:prose-invert max-w-none 
              prose-headings:text-(--text) 
              prose-p:text-(--text) prose-p:text-sm sm:prose-p:text-base
              prose-a:text-(--primary) prose-a:text-sm sm:prose-a:text-base
              prose-strong:text-(--text)
              prose-code:text-(--primary) prose-code:text-xs sm:prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-table:text-xs sm:prose-table:text-sm
              prose-th:text-xs prose-th:font-semibold
              prose-td:text-xs sm:prose-td:text-sm
              [&_table]:border-collapse [&_table]:w-full
              [&_th]:border [&_th]:border-(--border) [&_th]:px-3 [&_th]:py-2 [&_th]:bg-(--surface)
              [&_td]:border [&_td]:border-(--border) [&_td]:px-3 [&_td]:py-2
              [&_tr:nth-child(even)]:bg-(--surface)/50
            "
            >
              <MDXRemote source={cleanContent} components={mdxComponents} />
              {/* Article Bottom Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 items-center mt-8 pt-6 border-t border-(--border)">
                  <span className="text-xs font-semibold text-(--text) uppercase tracking-wider">
                    Tags:
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-(--surface) text-(--text-muted) text-xs font-medium rounded-full border border-(--border) hover:bg-(--primary) hover:text-white hover:border-(--primary) transition-all duration-200 cursor-pointer"
                      >
                        <span className="text-(--primary)">#</span>
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-(--surface) rounded-lg sm:rounded-xl border border-(--border) p-3 sm:p-4 lg:sticky lg:top-24">
              <h3 className="text-[10px] sm:text-xs font-semibold text-(--text) uppercase tracking-wider mb-3">
                Categories
              </h3>
              <div className="space-y-0.5">
                {[
                  "Web Development",
                  "Cloud",
                  "AI",
                  "Digital Marketing",
                  "SEO",
                  "Graphic Design",
                  "Business Tips",
                  "Case Studies",
                  "Company News",
                ].map((cat) => {
                  const catSlug = cat.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <Link
                      key={cat}
                      href={`/blogs/category/${catSlug}`}
                      className={`block px-2 py-1.5 text-[11px] sm:text-xs rounded-md transition-colors ${
                        post.category === cat
                          ? "bg-(--primary)/10 text-(--primary) font-medium"
                          : "text-(--text-muted) hover:bg-(--surface-hover) hover:text-(--text)"
                      }`}
                    >
                      {cat}
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
