import BlogsPage from "../../BlogComponents/BlogsPage";
import {
  getFeaturedPosts,
  getPopularPosts,
  getRecentPosts,
} from "../../lib/blogs";
import type { BlogPost } from "../../lib/blogs";

interface PageProps {
  params: Promise<{
    type: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { type } = await params;

  let posts: BlogPost[];

  switch (type) {
    case "featured-blog":
      posts = getFeaturedPosts();
      break;
    case "popular-blog":
      posts = getPopularPosts();
      break;
    case "recent-blog":
      posts = getRecentPosts();
      break;
    default:
      posts = [];
  }

  return <BlogsPage posts={posts} />;
}
