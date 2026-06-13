import BlogCard from "@/components/sections/blogs/blogCard";
import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vexora - Blog Details Two",
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
          <div className="w-full">
            <Image
              width={1054}
              height={549}
              sizes="100vw"
              src={"/images/blogs/blog-details-img-1.png"}
              alt="img"
              className="max-h-[549px] w-full rounded-[15px]"
            />
          </div>
          <div className="max-w-[784px] mx-auto mb-17.5 mt-10">
            <h1 className="font-extrabold xl:text-[56px] lg:text-5xl text-4xl xl:leading-[120%]">
              Swap Your Style: The Best Bands for Your Vexora Watch
            </h1>
            <div className="mt-5 mb-10 [&_.by]:text-light-dark [&_.date]:text-foreground [&_.author-name]:text-foreground">
              <BlogCardAuthorInfo blog={blog} />
            </div>
          </div>
          <div className="[&_p]:text-lg [&_p]:leading-[160%] [&_p:not(:last-child)]:mb-5 max-w-[784px] mx-auto">
            <p>
              A journey into the captivating blend of artistry and technology in
              electronics.
            </p>
            <p>
              We`re not discussing the temporary enjoyment of a new gadget or
              the fleeting thrill of the latest tech trend — we`re delving into
              the type of tech engagement that uplifts your overall well-being:
              a routine that incorporates both digital convenience and
              health-enhancing innovation. This approach plays a pivotal role in
              enhancing your lifestyle and productivity.
            </p>
            <div className="mt-11">
              <Title asChild size="28" className="font-bold mb-4">
                <h5>Milanese Loop: Where Form Meets Function</h5>
              </Title>
              <p>
                Minimalism meets modern engineering with the Milanese Loop Band.
                Built for those who prefer sleek elegance without the bulk, this
                stainless-steel mesh band is pure wrist poetry.
              </p>
              <ul className="mt-5 list-disc list-inside ml-6 space-y-2">
                <li className="text-lg leading-normal">
                  Precision-milled magnetic clasp for infinite adjustability
                </li>
                <li className="text-lg leading-normal">
                  Lightweight but durable steel mesh
                </li>
                <li className="text-lg leading-normal">
                  Ultra-slim profile fits under sleeves effortlessly
                </li>
                <li className="text-lg leading-normal">
                  Available in: Polished Silver, Matte Black, Rose Gold
                </li>
              </ul>
            </div>
            <div className="mt-15">
              <Title asChild size="28" className="font-bold mb-4">
                <h5>The Essential Components of Tech Wellness</h5>
              </Title>
              <p>
                Dr. Jordan Taylor, a renowned tech enthusiast and advocate for
                balanced tech usage, clarifies that tech wellness is much more
                than a buzzword or a luxury; it`s a necessary component of
                modern living. It`s about nourishing your mind with enriching
                digital content, maintaining physical fitness with innovative
                gadgets, practicing mindfulness with the help of apps, and
                taking care of your health with advanced tech solutions.
              </p>
              <p>
                Digital content consumption is more than just a pastime; it`s a
                ritual that enables you to connect with global trends and
                enhance your knowledge. From listening to educational podcasts
                to watching insightful documentaries, each step allows you to
                focus on your well-being and gives you a moment to learn and
                grow.
              </p>
              <p>
                A balanced use of health and fitness apps is crucial for
                maintaining overall health. The digital tools you utilize
                directly affect your lifestyle, fitness levels, and even the
                health of your body. By using a variety of health-focused apps,
                you can provide your body with the care it needs to function at
                its best.
              </p>

              <p>
                In our fast-paced world, moments of quiet and reflection are
                essential. Digital practices like guided meditation and
                mindfulness apps can help you cultivate tranquility, reducing
                stress and improving mental clarity. Even simple activities like
                digital journaling or virtual walks in nature can have powerful
                effects on your mental well-being.
              </p>
              <p>
                Now that you`ve understood the various elements of tech
                wellness, it`s time to incorporate them into your routine.
                Remember, it`s not about perfection; it`s about making small,
                consistent efforts towards a healthier, happier you. Start where
                you are, and remember to be patient with yourself on this
                journey. You`re not just taking care of your body; you`re
                nurturing your soul. Enjoy the journey towards digital wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-25">
        <div className="container">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
            {blogData.slice(1, 4).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
