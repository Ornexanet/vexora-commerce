import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        title="Blog"
        praentPageHref="/blog"
        currentPageName={blog.title}
        praentPageName="Blog"
      />

      <section className="container mt-25">
        <div className="max-w-[1054px] mx-auto">
          <div className="max-w-[784px] mx-auto">
            <h1 className="font-extrabold xl:text-[56px] lg:text-5xl text-4xl xl:leading-[120%]">
              {blog.title}
            </h1>

            <div className="mt-5 mb-10 flex items-center justify-between flex-wrap gap-3">
              <BlogCardAuthorInfo blog={blog} />
              <p className="text-lg">5 min läs</p>
            </div>
          </div>

          <Image
            width={1054}
            height={549}
            sizes="100vw"
            src={blog.thumbnail}
            alt={blog.title}
            className="max-h-[549px] w-full rounded-[15px] mb-10 object-cover"
          />

          <article className="max-w-[784px] mx-auto">
            <p className="text-lg text-light-dark leading-[160%]">
              {blog.description}
            </p>

            <Title asChild size="36" className="mb-4 mt-20">
              <h2>Varför välja {blog.title.split("–")[0].trim()}?</h2>
            </Title>

            <p className="text-lg text-light-dark leading-[160%]">
              Den här guiden hjälper dig att förstå produktens viktigaste
              fördelar, vem den passar för och vad du bör tänka på innan köp.
            </p>

            <Title asChild size="36" className="mb-4 mt-20">
              <h2>Viktiga fördelar</h2>
            </Title>

            <ul className="list-disc pl-6 space-y-3 text-lg text-light-dark leading-[160%]">
              <li>Hög prestanda för arbete, foto, video och vardagsanvändning.</li>
              <li>Modern design med premiumkänsla.</li>
              <li>Stark användarupplevelse för både privat och professionellt bruk.</li>
              <li>Bra val för användare som vill ha en långsiktig produkt.</li>
            </ul>

            <Title asChild size="36" className="mb-4 mt-20">
              <h2>Vem passar den för?</h2>
            </Title>

            <p className="text-lg text-light-dark leading-[160%]">
              Produkten passar dig som vill ha en pålitlig, modern och kraftfull
              enhet för vardag, arbete, kommunikation och digital produktivitet.
            </p>

            <Title asChild size="36" className="mb-4 mt-20">
              <h2>Vanliga frågor</h2>
            </Title>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">Är produkten ett bra val?</h3>
                <p className="text-lg text-light-dark leading-[160%]">
                  Ja, den är ett starkt val för användare som vill kombinera
                  prestanda, design och långsiktig användning.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">Passar den för arbete?</h3>
                <p className="text-lg text-light-dark leading-[160%]">
                  Ja, den passar bra för arbete, kommunikation, foto, video och
                  dagliga digitala uppgifter.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/product-details/18"
                className="inline-flex items-center justify-center rounded-lg bg-[#00AEEF] px-8 py-4 text-white font-semibold hover:opacity-90 transition"
              >
                Köp produkten nu
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
