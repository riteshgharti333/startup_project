import BlogsPage from "../../../BlogComponents/BlogsPage";
import { getAllPosts } from "../../../lib/blogs";

interface PageProps {
  params: Promise<{
    categoryName: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { categoryName } = await params;
  
  // Get all posts and filter by category
  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === categoryName.toLowerCase()
  );
  
  return <BlogsPage posts={categoryPosts} categoryName={categoryName} />;
}