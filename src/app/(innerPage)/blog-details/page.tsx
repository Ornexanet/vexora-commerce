import BlogAuthorInfo from "@/components/sections/blogs/blogAuthorInfo";
import BlogCard from "@/components/sections/blogs/blogCard";
import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import BlogShareIcon from "@/components/sections/blogs/blogShareIcon";
import BlogTags from "@/components/sections/blogs/blogTags";
import CommentDisplay from "@/components/sections/blogs/commentDisplay";
import CommentWrite from "@/components/sections/blogs/commentWrite";
import NextPrevPost from "@/components/sections/blogs/nextPrevPost";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { BlockQuotation } from "@/lib/icons";
import { blogData } from "@/mockData/blogData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vexora - Blog Details",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const BlogDetails = () => {
  const blog = blogData[0];
  return (
    <main>
      <PageHeader
        title="Blog"
        praentPageHref="/blog"
        currentPageName="Swap Your Style: The Best Bands for Your Vexora Watch"
        praentPageName="Blog"
      />
      <section className="container mt-25">
        <div className="max-w-[1054px] mx-auto">
          <div className="max-w-[784px] mx-auto">
            <h1 className="font-extrabold xl:text-[56px] lg:text-5xl text-4xl xl:leading-[120%]">
              Swap Your Style: The Best Bands for Your Vexora Watch
            </h1>
            <div className="mt-5 mb-10 flex items-center justify-between flex-wrap gap-3">
              <div className="[&_.by]:text-light-dark [&_.date]:text-foreground [&_.author-name]:text-foreground">
                <BlogCardAuthorInfo blog={blog} />
              </div>
              <p className="text-lg">5 min read</p>
            </div>
          </div>
          <div className="w-full mb-6">
            <Image
              width={1054}
              height={549}
              sizes="100vw"
              src={"/images/blogs/blog-details-img-1.png"}
              alt="img"
              className="max-h-[549px] w-full rounded-[15px]"
            />
          </div>
          <div className="[&_p]:text-lg [&_p]:text-light-dark [&_p]:leading-[160%] [&_p:not(:last-child)]:mb-5">
            <div className="max-w-[784px] mx-auto">
              <p>
                In the ever-evolving landscape of social media, platforms
                constantly vie for users` attention. Instagram, known for its
                innovation in visual content, recently introduced a new feature
                called Reels, aiming to compete with popular short-form video
                platforms like TikTok. A new study sheds light on how Instagram
                Reels stack up against TikTok and Facebook videos, revealing
                surprising insights into user engagement and content
                performance.
              </p>
              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Key Findings:</h3>
              </Title>
              <p>
                The study, conducted by Next Agency in collaboration with
                industry experts, analyzed thousands of videos across Instagram
                Reels, TikTok, and Facebook to understand user behavior and
                content trends. Here are the key findings:
              </p>
              <div>
                <h6 className="lg:text-2xl text-xl font-extrabold mb-4">
                  1. Higher Engagement on Instagram Reels:
                </h6>
                <p>
                  Contrary to expectations, the study found that Instagram Reels
                  outperformed both TikTok and Facebook videos in terms of user
                  engagement. Reels garnered higher average likes, comments, and
                  shares, indicating a strong preference among users for this
                  new format.
                </p>
              </div>
            </div>
            <blockquote className="bg-[#F5F5F7] rounded-[30px] py-12.5 my-12.5 px-3">
              <div className="max-w-[784px] mx-auto relative">
                <span className="absolute -top-9 -left-8">
                  <BlockQuotation />
                </span>
                <p>
                  Success in the digital age hinges on adaptation and
                  innovation. Our study sheds light on the transformative power
                  of Instagram Reels, paving of the way for brands to thrive in
                  the dynamic landscape of social media.
                </p>
                <b className="font-medium text-[22px] text-blue">- Elon Musk</b>
              </div>
            </blockquote>

            <div className="max-w-[784px] mx-auto space-y-11">
              <div>
                <h6 className="lg:text-2xl text-xl font-extrabold mb-4">
                  2. Quality Over Quantity
                </h6>
                <p>
                  While TikTok boasts a larger user base and a plethora of
                  content, Instagram Reels` success lies in its emphasis on
                  quality over quantity. The study revealed that Reels with
                  polished production value and compelling storytelling
                </p>
              </div>
              <div>
                <h6 className="lg:text-2xl text-xl font-extrabold mb-4">
                  3. Audience Demographics
                </h6>
                <p>
                  Interestingly, the study also uncovered differences in
                  audience demographics across the platforms. While TikTok
                  remains popular among Gen Z and younger audiences, Instagram
                  Reels attracted a broader demographic range, including
                  Millennials and older age groups. This suggests that
                </p>
                <div className="mt-20">
                  <Image
                    width={785}
                    height={471}
                    sizes="100vw"
                    src={"/images/blogs/blog-2.png"}
                    alt="img"
                    className="rounded-[15px] w-full max-h-[471px]"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[784px] mx-auto">
              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Implications for Marketers:</h3>
              </Title>
              <p>
                The study, conducted by Next Agency in collaboration with
                industry experts, analyzed thousands of videos across Instagram
                Reels, TikTok, and Facebook to understand user behavior and
                content trends. Here are the key findings:
              </p>
              <ol className="list-decimal list-inside mt-4 space-y-1">
                <li className="text-light-dark text-lg">
                  Diversify Your Content Strategy
                </li>
                <li className="text-light-dark text-lg">
                  Focus on Quality and Creativity
                </li>
                <li className="text-light-dark text-lg">Know Your Audience</li>
                <li className="text-light-dark text-lg">
                  Platform-Specific Content Strategies
                </li>
                <li className="text-light-dark text-lg">
                  Investment in Influencer Marketing
                </li>
                <li className="text-light-dark text-lg">
                  Adaptation of Advertising Strategies
                </li>
              </ol>
            </div>
            <div className="max-w-[784px] mx-auto">
              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Conclusion:</h3>
              </Title>
              <p>
                The emergence of Instagram Reels as a formidable competitor to
                TikTok and Facebook videos underscores the dynamic nature of
                social media. As brands and marketers navigate this rapidly
                evolving landscape, insights from studies like this provide
                valuable guidance for optimizing content strategy and driving
                engagement on social platforms. By embracing the power of
                short-form video content and leveraging platforms like Instagram
                Reels.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between items-center gap-4 mt-25 mb-12.5 max-w-[870px] mx-auto">
            <BlogTags />
            <BlogShareIcon />
          </div>
          <NextPrevPost />
          <hr className="my-12.5 border-[#B0C2E2] max-w-[870px] mx-auto" />
          <BlogAuthorInfo />
          <div className="mt-17.5">
            <div className="max-w-[870px] mx-auto">
              <Title asChild size="36">
                <h3>Recent Posts</h3>
              </Title>
            </div>
            <div className="grid lg:grid-cols-2 gap-7.5 mt-5.5">
              {blogData.slice(0, 2).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <CommentDisplay />
          <hr className="max-w-[870px] mx-auto border-light-gray mb-12.5 mt-15.5" />
          <CommentWrite />
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
