import BlogBanner from "../BlogComponents/BlogBanner";
import BlogCategory from "../BlogComponents/BlogCategory";
import BlogCTA from "../BlogComponents/BlogCTA";
import FeaturedPosts from "../BlogComponents/FeaturedPosts";
import PopularPosts from "../BlogComponents/PopularPosts";
import RecentPost from "../BlogComponents/RecentPost";
import { getBannerPosts, getFeaturedPosts, getPopularPosts, getRecentPosts } from "../lib/blogs";

const page = () => {
  const bannerPosts = getBannerPosts();
  const featurePosts = getFeaturedPosts().slice(0, 5);
  const recentPosts = getRecentPosts().slice(0,4)
  const popularPosts = getPopularPosts().slice(0, 6);

  return (
    <div>
      <BlogBanner posts={bannerPosts} />
      <FeaturedPosts posts={featurePosts} />
      <BlogCategory />
      <RecentPost posts={recentPosts} />
      <PopularPosts posts={popularPosts} />
      <BlogCTA />
    </div>
  );
};

export default page;
