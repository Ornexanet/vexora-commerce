
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Premiumhörlurar | Ornexa",
  description:
    "Upptäck Sony WH-1000XM6 med avancerad brusreducering, premiumljud och upp till 30 timmars batteritid.",
  robots: {
    index: false,
    follow: true,
  },
};

const productUrl = "/product-details/101";

const features = [
  {
    number: "01",
    title: "Avancerad brusreducering",
    description:
      "Stäng ute störande ljud och fokusera på det som verkligen betyder något.",
  },
  {
    number: "02",
    title: "Upp till 30 timmars batteritid",
    description:
      "Njut av långa lyssningssessioner utan att behöva ladda hela tiden.",
  },
  {
    number: "03",
    title: "Ljud med imponerande detaljrikedom",
    description:
      "Upptäck fler detaljer i din favoritmusik med en omslutande ljudupplevelse.",
  },
];

export default function SonyLandingPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="bg-[#101b2c] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-10">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Premium ljudupplevelse
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Stäng ute bruset.
              <span className="block text-blue-300">
                Upplev musiken.
              </span>
            </h1>

            <p className="mb-4 text-xl font-semibold text-white">
              Sony WH-1000XM6
            </p>

            <p className="mb-8 max-w-lg text-base leading-8 text-slate-300">
              Upptäck en ny nivå av ljudupplevelse med
              avancerad brusreducering, bekväm design
              och upp till 30 timmars batteritid.
            </p>

            <Link
              href={productUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition-colors hover:bg-blue-100"
            >
              Utforska hörlurarna
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </Link>

            <p className="mt-5 text-sm text-slate-400">
              Upptäck funktioner och produktspecifikationer.
            </p>
          </div>

          {/* HERO IMAGE PLACEHOLDER */}
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl md:min-h-[480px]">
  <Image
    src="/images/sony-landing/sony-hero.png"
    alt="Sony WH-1000XM6 hörlurar"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
</div>


        </div>
      </section>

      {/* PRODUCT BENEFITS */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
              Varför Sony WH-1000XM6?
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Skapade för din ljudupplevelse
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
              >
                <p className="mb-6 text-sm font-bold text-blue-700">
                  {feature.number}
                </p>

                <h3 className="mb-4 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section className="bg-slate-50 px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LIFESTYLE IMAGE PLACEHOLDER */}
         <div className="relative min-h-[320px] overflow-hidden rounded-3xl md:min-h-[430px]">
  <Image
    src="/images/sony-landing/sony-lifestyle.png"
    alt="Kvinna med Sony WH-1000XM6 hörlurar i Stockholm"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />
</div>


          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700">
              Ljud för varje ögonblick
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
              Din musik. Ditt fokus. Din värld.
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Oavsett om du arbetar, reser eller kopplar av
              hjälper Sony WH-1000XM6 dig att njuta av
              musiken med färre störningar.
            </p>

            <Link
              href={productUrl}
              className="inline-flex items-center font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
            >
              Läs mer om produkten →
            </Link>
          </div>

        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="bg-[#101b2c] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-300">
            Sony WH-1000XM6
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Redo för en bättre ljudupplevelse?
          </h2>

          <p className="mx-auto mb-9 max-w-xl leading-8 text-slate-300">
            Utforska Sony WH-1000XM6 och upptäck
            funktionerna som gör skillnad i vardagen.
          </p>

          <Link
            href={productUrl}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-9 py-4 font-semibold text-slate-900 transition-colors hover:bg-blue-100"
          >
            Se produktdetaljer
            <span aria-hidden="true" className="ml-3">
              →
            </span>
          </Link>

        </div>
      </section>

    </main>
  );
}

