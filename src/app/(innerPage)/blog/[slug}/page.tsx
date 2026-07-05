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
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Samsung Galaxy Watch Ultra Guide | Ornexa",
  description:
    "En komplett guide till Samsung Galaxy Watch Ultra med funktioner, fördelar, träningsanvändning och köpråd från Ornexa.",
};
export function generateStaticParams() {
  return blogData
    .filter((blog) => Boolean(blog.slug))
    .map((blog) => ({
      slug: blog.slug,
    }));
}


export const dynamicParams = true;

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
              src={"/images/blogs/ornexa-shop-her1.webp"}
              alt="img"
              className="max-h-[549px] w-full rounded-[15px]"
            />
          </div>
          <div className="[&_p]:text-lg [&_p]:text-light-dark [&_p]:leading-[160%] [&_p:not(:last-child)]:mb-5">
            <div className="max-w-[784px] mx-auto">
              <p>
                
             Samsung Galaxy Watch Ultra är Samsungs mest avancerade smartklocka, utvecklad
             för användare som vill kombinera träning, hälsa och vardag i en enda enhet.
             Med robust konstruktion, lång batteritid, exakt GPS och avancerade
             hälsofunktioner är den ett utmärkt val för både professionella idrottare och
             vanliga användare.

              </p>
              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Varför välja Samsung Galaxy Watch Ultra?</h3>
              </Title>
              <p>
                Galaxy Watch Ultra erbjuder en kombination av hög prestanda, slitstark
                design och intelligenta funktioner. Klockan passar både för intensiv träning,
               vandring, löpning och daglig användning samtidigt som den ger detaljerad
              hälsodata och smarta funktioner direkt på handleden.
              </p>
              <div>
                <h6 className="lg:text-2xl text-xl font-extrabold mb-4">   
                1. Robust design för extrema miljöer
                </h6>
                <p>
                  Galaxy Watch Ultra är byggd med slitstarka material och är utvecklad för att
                  klara tuffa miljöer, vandring, löpning, cykling och andra utomhusaktiviteter.
                  Den robusta konstruktionen gör klockan till ett pålitligt val för både
                  vardag och äventyr.
                </p>
              </div>
            </div>
          
            <div className="max-w-[784px] mx-auto space-y-11">
              <div>
                <h6 className="lg:text-2xl text-xl font-extrabold mb-4">
                  2. Lång batteritid för hela dagen
                </h6>
                <p>
                  Galaxy Watch Ultra har ett kraftfullt batteri som gör att du kan använda
                  klockan under långa träningspass, resor och arbetsdagar utan att behöva ladda
                  den ofta. Den är utvecklad för användare som vill kunna lita på sin
                  smartklocka hela dagen.
                </p>
              </div>
              <div>
                <h6 className="lg:text-2xl text-xl font-extrabold mb-4">
                  3. Exakt GPS och träningsspårning
                </h6>
                <p>
                  Med avancerad GPS och träningsspårning hjälper Galaxy Watch Ultra dig att
                  följa löpning, cykling, vandring och andra aktiviteter med hög precision.
                  Det gör klockan särskilt användbar för personer som vill mäta sin prestation
                  och följa sin utveckling över tid.
                </p>
                <div className="mt-20">
                  <Image
                    width={785}
                    height={471}
                    sizes="100vw"
                    src={"/images/blogs/ornexa-shop-her2.webp"}
                    alt="img"
                    className="rounded-[15px] w-full max-h-[471px]"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-[784px] mx-auto">
              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Tekniska specifikationer</h3>
              </Title>
              <p>
                Samsung Galaxy Watch Ultra kombinerar en robust konstruktion, AMOLED-skärm,
                snabb processor, avancerade sensorer och lång batteritid. Kombinationen gör
                den till ett av de mest kompletta alternativen för både träning och daglig
                användning.
              </p>
              <ol className="list-decimal list-inside mt-4 space-y-1">
                <li className="text-light-dark text-lg">
             Skärm: AMOLED med hög ljusstyrka
             </li>
             <li className="text-light-dark text-lg">
             GPS: avancerad positionering för träning och utomhusaktiviteter
            </li>
            <li className="text-light-dark text-lg">
             Batteri: lång batteritid för vardag och träning
             </li>
             <li className="text-light-dark text-lg">
             Hälsa: pulsmätning, sömnspårning och aktivitetsdata
            </li>
            <li className="text-light-dark text-lg">
            Design: robust konstruktion för tuffare användning
           </li>
           <li className="text-light-dark text-lg">
            Passar för: träning, arbete, resor och daglig användning
            </li>

              </ol>
            </div>
            <div className="max-w-[784px] mx-auto">
              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Sammanfattning</h3>
              </Title>
              <p>
                Samsung Galaxy Watch Ultra är ett komplett val för användare som söker en kraftfull smartklocka med lång batteritid
                ,avancerade hälsofunktioner och robust design. 
                Den passar både för träning, arbete och vardagsliv och är ett av Samsungs mest avancerade wearables.
              </p>
                       
<div className="max-w-[784px] mx-auto mt-12">
  <Link
    href="/product-details/18"
    className="inline-flex items-center justify-center rounded-lg bg-[#00AEEF] px-8 py-4 text-white font-semibold hover:opacity-90 transition"
  >
    Köp Samsung Galaxy Watch Ultra
  </Link>
</div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
