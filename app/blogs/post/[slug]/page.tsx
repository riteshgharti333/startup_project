import SingleBlog from "../../../BlogComponents/SingleBlog";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper to find MDX files recursively
function findMdxFile(dir: string, slug: string): string | null {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      const found = findMdxFile(itemPath, slug);
      if (found) return found;
    } else if (item.endsWith(".mdx") && path.basename(item, ".mdx") === slug) {
      return itemPath;
    }
  }
  
  return null;
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content", "blogs");
  const slugs: { slug: string }[] = [];
  
  function findSlugs(dir: string) {
    const items = fs.readdirSync(dir);
    items.forEach((item) => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory()) {
        findSlugs(itemPath);
      } else if (item.endsWith(".mdx")) {
        slugs.push({ slug: path.basename(item, ".mdx") });
      }
    });
  }
  
  findSlugs(postsDir);
  return slugs;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const blogsDir = path.join(process.cwd(), "content", "blogs");
    const filePath = findMdxFile(blogsDir, slug);
    
    if (!filePath) {
      notFound();
    }
    
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const post = {
      id: data.id || 0,
      slug: slug,
      title: data.title || "Untitled",
      description: data.description || "",
      content: content,
      category: data.category || "Uncategorized",
      date: data.date || new Date().toLocaleDateString(),
      readTime: data.readTime || "5 min read",
      image: data.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      author: data.author || "Unknown",
      authorAvatar: data.authorAvatar || "U",
      authorBio: data.authorBio || "",
      tags: data.tags || [],
      featured: data.featured || false,
      popular: data.popular || false,
    };

    return <SingleBlog slug={slug} post={post} />;
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}