"use client"
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

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      href={`/blogs/post/${post.slug}`}
      className="group bg-(--surface) rounded-(--radius-md) border border-(--border) hover:border-(--primary) transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 block h-full"
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-(--surface) to-transparent" />
        <div className="absolute top-2 left-2">
          <span className="px-2 py-0.5 bg-(--primary) text-white text-[9px] font-semibold rounded-full uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-3.5">
        <div className="flex items-center gap-1.5 text-[10px] text-(--text-muted) mb-2">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-(--primary)/20 flex items-center justify-center text-(--primary) text-[9px] font-bold">
              {post.authorAvatar}
            </div>
            <span className="font-medium text-(--text) text-[11px]">{post.author}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-sm font-bold text-(--text) group-hover:text-(--primary) transition-colors duration-300 line-clamp-2 mb-1.5">
          {post.title}
        </h3>

        <p className="text-xs text-(--text-muted) line-clamp-2 mb-3">
          {post.description}
        </p>

        <div className="flex items-center gap-1 text-(--primary) font-medium text-xs group-hover:gap-1.5 transition-all duration-300 pt-2 border-t border-(--border)">
          Read Article
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;