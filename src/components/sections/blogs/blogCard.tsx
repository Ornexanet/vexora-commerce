import Title from "@/components/ui/title";
import { BlogType } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div>
      <div>
        <Image
          width={514}
          height={349}
          sizes="100vw"
          src={blog.thumbnail}
          alt={blog.title}
          className="rounded-[15px] w-full h-auto object-cover"
        />
      </div>
      <div className="mt-5">
        <Title
          asChild
          size="28"
          className="hover:text-blue transition-all duration-500 text-[clamp(1.125rem,0.9435rem+0.8065vw,1.75rem)] line-clamp-2"
        >
        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </Title>
        <div className="mt-3 flex items-center gap-2.5">
          <div className="flex items-center gap-2.5">
            <Image
              width={40}
              height={40}
              sizes="100vw"
              src={blog.author.image}
              alt={blog.author.name}
              className="rounded-full size-10"
            />
            <span className="text-light-dark leading-8 md:text-lg">by</span>
            <Link
              href={"#"}
              className="lg:text-lg lg:leading-normal text-black truncate hover:text-blue transition-all duration-500"
            >
              {blog.author.name}
            </Link>
          </div>
          <span className="block w-[7px] h-[7px] shrink-0 bg-[#B0B5BB] rounded-full "></span>
          <div>
            <p className="lg:text-lg lg:leading-7 truncate">
              {blog.date.day} {blog.date.month} {blog.date.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
