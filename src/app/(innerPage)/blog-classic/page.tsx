import BlogCard from "@/components/sections/blogs/blogCard";
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import Pagination from "@/components/ui/pagination";
import { blogData } from "@/mockData/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Blog Classic",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const BlogArchive = () => {
  return (
    <main>
      <PageHeaderWithImg title="Vexora Voice" />
      <div className="mt-25">
        <div className="container">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-7.5 gap-y-15">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="mt-17.5 flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogArchive;
