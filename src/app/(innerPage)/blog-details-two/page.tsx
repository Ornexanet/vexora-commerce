import BlogCard from "@/components/sections/blogs/blogCard";
import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vexora – Bloggartikel 2",
  description:
    "Vexora – Next.js-mall för e-handel med en produkt för elektronik- och teknikbutiker",
};

const BlogDetails = () => {
  const blog = blogData[0];
  return (
    <main>
      <PageHeader
        title="Blogg"
        praentPageHref="/blog"
        currentPageName="Byt stil: de bästa armbanden till din Vexora-klocka"
        praentPageName="Blogg"
      />
      <section className="container mt-25">
        <div className="max-w-[1054px] mx-auto">
          <div className="w-full">
            <Image
              width={1054}
              height={549}
              sizes="100vw"
              src={"/images-optimized/blogs/blog-details-img-1.webp"}
              alt="Bild"
              className="max-h-[549px] w-full rounded-[15px]"
            />
          </div>
          <div className="max-w-[784px] mx-auto mb-17.5 mt-10">
            <h1 className="font-extrabold xl:text-[56px] lg:text-5xl text-4xl xl:leading-[120%]">
              Byt stil: de bästa armbanden till din Vexora-klocka
            </h1>
            <div className="mt-5 mb-10 [&_.by]:text-light-dark [&_.date]:text-foreground [&_.author-name]:text-foreground">
              <BlogCardAuthorInfo blog={blog} />
            </div>
          </div>
          <div className="[&_p]:text-lg [&_p]:leading-[160%] [&_p:not(:last-child)]:mb-5 max-w-[784px] mx-auto">
            <p>
              En resa genom det fascinerande mötet mellan formgivning och teknik inom elektronik.
            </p>
            <p>
              Vi talar inte om den tillfälliga glädjen över en ny teknikpryl eller spänningen kring den senaste tekniktrenden. Vi utforskar i stället hur teknik kan bidra till ditt allmänna välbefinnande genom en vardag som förenar digital bekvämlighet med hälsofrämjande innovation. Detta synsätt spelar en viktig roll för att förbättra din livsstil och produktivitet.
            </p>
            <div className="mt-11">
              <Title asChild size="28" className="font-bold mb-4">
                <h5>Milanese Loop: där form möter funktion</h5>
              </Title>
              <p>
                Milanese Loop-armbandet förenar minimalism med modern konstruktion. Det smidiga nätarmbandet i rostfritt stål passar dig som uppskattar stilren elegans utan onödig volym – ren poesi för handleden.
              </p>
              <ul className="mt-5 list-disc list-inside ml-6 space-y-2">
                <li className="text-lg leading-normal">
                  Precisionsfräst magnetlås för steglös justering
                </li>
                <li className="text-lg leading-normal">
                  Lätt men slitstarkt stålnät
                </li>
                <li className="text-lg leading-normal">
                  Den tunna profilen glider enkelt in under ärmen
                </li>
                <li className="text-lg leading-normal">
                  Finns i polerat silver, mattsvart och roséguld
                </li>
              </ul>
            </div>
            <div className="mt-15">
              <Title asChild size="28" className="font-bold mb-4">
                <h5>Grunderna för digitalt välbefinnande</h5>
              </Title>
              <p>
                Dr Jordan Taylor, välkänd teknikentusiast och förespråkare för balanserad teknikanvändning, förklarar att digitalt välbefinnande är mycket mer än ett modeord eller en lyx. Det är en nödvändig del av det moderna livet. Det handlar om att stimulera sinnet med givande digitalt innehåll, hålla kroppen aktiv med innovativa teknikprylar, öva medveten närvaro med hjälp av appar och ta hand om hälsan med avancerade tekniska lösningar.
              </p>
              <p>
                Digitalt innehåll är mer än tidsfördriv. Det är en vana som hjälper dig att följa globala trender och fördjupa dina kunskaper. Från lärorika poddar till tankeväckande dokumentärer ger varje steg utrymme att fokusera på ditt välbefinnande och en stund att lära och utvecklas.
              </p>
              <p>
                En balanserad användning av hälso- och träningsappar är avgörande för den allmänna hälsan. De digitala verktyg du använder påverkar din livsstil, kondition och även din kroppsliga hälsa direkt. Genom att använda olika hälsoappar kan du ge kroppen den omsorg den behöver för att fungera som bäst.
              </p>

              <p>
                I vår hektiska värld är stunder av lugn och eftertanke viktiga. Digitala verktyg som guidad meditation och appar för medveten närvaro kan hjälpa dig att finna ro, minska stress och tänka klarare. Även enkla aktiviteter som digitalt dagboksskrivande eller virtuella naturpromenader kan ha stor betydelse för ditt psykiska välbefinnande.
              </p>
              <p>
                Nu när du känner till de olika delarna av digitalt välbefinnande är det dags att ta in dem i vardagen. Kom ihåg att målet inte är perfektion, utan små, regelbundna steg mot bättre hälsa och större välbefinnande. Börja där du är och ha tålamod med dig själv på vägen. Du tar inte bara hand om kroppen, utan även om själen. Njut av resan mot digitalt välbefinnande.
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
