import BlogFooter from "../BlogComponents/BlogFooter";
import BlogNavbar from "../BlogComponents/BlogNavbar";
import "./blog.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-body">
      <BlogNavbar />
      <main>{children}</main>
      <BlogFooter />
    </div>
  );
}
