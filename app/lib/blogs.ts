import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
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
  featured: boolean;
  popular: boolean;
  banner: boolean;
}

export function getAllPosts(): BlogPost[] {
  const blogsDir = path.join(process.cwd(), "content", "blogs");

  if (!fs.existsSync(blogsDir)) {
    return [];
  }

  let allFiles: string[] = [];

  // Get all items in blogs directory
  const items = fs.readdirSync(blogsDir);

  items.forEach((item) => {
    const itemPath = path.join(blogsDir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      // If it's a folder (like bannerblogs), read MDX files from it
      const subFiles = fs
        .readdirSync(itemPath)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => path.join(item, file)); // Include folder name in path
      allFiles = [...allFiles, ...subFiles];
    } else if (item.endsWith(".mdx")) {
      // If it's an MDX file in root blogs folder
      allFiles.push(item);
    }
  });

  const posts = allFiles.map((file) => {
    const filePath = path.join(blogsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const slug = path.basename(file, ".mdx");

    return {
      slug: slug,
      title: data.title || "Untitled",
      description: data.description || "",
      content: content,
      category: data.category || "Uncategorized",
      date: data.date || new Date().toLocaleDateString(),
      readTime: data.readTime || "5 min read",
      image: data.image || "...",
      author: data.author || "Unknown",
      authorAvatar: data.authorAvatar || "U",
      authorBio: data.authorBio || "",
      tags: data.tags || [],
      featured: data.featured || false,
      popular: data.popular || false,
      banner: data.banner || false,
    };
  });

  return posts;
}

export function getBannerPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.banner === true);
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured === true);
}

export function getPopularPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.popular === true);
}

export function getRecentPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return [...new Set(categories)]; // Remove duplicates
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase(),
  );
}
