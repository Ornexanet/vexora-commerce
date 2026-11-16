
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allProducts } from "@/mockData/products";
import PixelLandingTracking from "@/components/growth/PixelLandingTracking";
import TrackedPurchaseLink from "@/components/growth/TrackedPurchaseLink";


export const metadata: Metadata = {
  title: "Google Pixel 11 Pro – Upptäck mobilen | Ornexa",
  description:
    "Upptäck Google Pixel 11 Pro hos Ornexa. Utforska kameran, skärmen, prestandan och tekniska specifikationer.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PixelLandingPage() {
  const product = allProducts.find(
    (item) => item.id === 24
  );

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-3xl font-bold">
          Produkten hittades inte
        </h1>
      </main>
    );
  }

  const productUrl = `/product-details/${product.id}`;

  const canyonImage =
    product.colorOptions?.find(
      (color) => color.name === "Canyon"
    )?.thumbnail ?? product.thumbnail;

  const obsidianImage =
    product.colorOptions?.find(
      (color) => color.name === "Obsidian"
    )?.thumbnail ?? product.thumbnail;

  const oliveImage =
    product.colorOptions?.find(
      (color) => color.name === "Olive"
    )?.thumbnail ?? product.thumbnail;

  return (
    <main className="overflow-hidden bg-white text-slate-900">
    <PixelLandingTracking />
      {/* HERO SECTION */}
      <section className="bg-[#F5F6F8]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:min-h-[680px] md:grid-cols-2 md:px-12 lg:gap-16 lg:py-24">

          <div className="order-2 md:order-1">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Google Pixel
            </p>

            <h1 className="max-w-xl text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              {product.title}
            </h1>

            <p className="mt-7 max-w-lg text-xl leading-relaxed text-slate-600">
              Smart teknik. Elegant design.
              Upptäck en smartphone skapad för
              kreativitet, produktivitet och vardagen.
            </p>

            <div className="mt-9">
              <p className="text-sm text-slate-500">
                Pris hos Ornexa
              </p>

              <p className="mt-1 text-4xl font-bold">
                {product.price.toLocaleString("sv-SE")} kr
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <TrackedPurchaseLink
                href={productUrl}
                className="inline-flex min-h-14 items-center justify-center rounded-xl bg-blue-600 px-10 text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Köp nu
              </TrackedPurchaseLink>

              <a
                href="#funktioner"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-slate-300 px-8 font-semibold text-slate-800 transition hover:bg-white"
              >
                Utforska funktioner
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              256 GB lagring · 12 GB RAM
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex min-h-[380px] items-center justify-center rounded-[2rem] bg-white p-8 shadow-sm md:min-h-[540px]">
              <Image
                src={canyonImage}
                alt={`${product.title} i färgen Canyon`}
                width={560}
                height={650}
                priority
                className="max-h-[500px] w-auto max-w-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* KEY BENEFITS */}
      <section
        id="funktioner"
        className="scroll-mt-24 bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Upptäck möjligheterna
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Teknik som gör skillnad
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Utforska funktionerna som gör Pixel 11 Pro
              till en mångsidig premiumtelefon.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
         {(product.features ?? []).map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {feature.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CAMERA STORY */}
      <section className="bg-[#F5F6F8] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12 lg:gap-20">

          <div className="flex min-h-[400px] items-center justify-center rounded-[2rem] bg-white p-8">
            <Image
              src={
                product.colorOptions?.[0]?.gallery?.[1] ??
                canyonImage
              }
              alt={`${product.title} – produktvy`}
              width={540}
              height={600}
              className="max-h-[470px] w-auto max-w-full object-contain"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Fotografering
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Fånga varje ögonblick
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-slate-600">
              {product.camera}
            </p>

            <p className="mt-5 leading-relaxed text-slate-600">
              Utforska möjligheterna med ett
              avancerat kamerasystem för både
              fotografering och video.
            </p>

            <Link
              href={productUrl}
              className="mt-8 inline-flex font-semibold text-blue-600 hover:underline"
            >
              Se produktdetaljer
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* DESIGN & COLORS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Design
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Hitta din stil
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Upptäck Pixel 11 Pro i tre olika färger.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">

            {[
              {
                name: "Canyon",
                image: canyonImage,
                background: "#F8EBE7",
              },
              {
                name: "Obsidian",
                image: obsidianImage,
                background: "#EDF0F1",
              },
              {
                name: "Olive",
                image: oliveImage,
                background: "#EFF1EB",
              },
            ].map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-3xl"
                style={{
                  backgroundColor: color.background,
                }}
              >
                <div className="flex h-[320px] items-center justify-center p-8">
                  <Image
                    src={color.image}
                    alt={`${product.title} ${color.name}`}
                    width={280}
                    height={320}
                    className="max-h-[280px] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="pb-8 text-center">
                  <h3 className="text-xl font-semibold">
                    {color.name}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">

          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Tekniska detaljer
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Kraftfull teknik
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {(product.specifications ?? [])
            .filter((spec) =>

                [
                  "Lagring",
                  "RAM",
                  "Skärm",
                  "Processor",
                  "Kamera",
                  "Batteri",
                  "Operativsystem",
                  "Garanti",
                ].includes(spec.label)
              )
              .map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-2 border-b border-slate-100 px-6 py-5 last:border-b-0 sm:grid-cols-[180px_1fr] md:px-10"
                >
                  <dt className="font-semibold text-slate-900">
                    {spec.label}
                  </dt>

                  <dd className="leading-relaxed text-slate-600">
                    {spec.value}
                  </dd>
                </div>
              ))}
          </div>

        </div>
      </section>

      {/* PURCHASE INFORMATION */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-center md:grid-cols-3 md:px-12">

          <div className="rounded-2xl border border-slate-100 p-7">
            <h3 className="mb-3 text-lg font-semibold">
              Lagerstatus
            </h3>
            <p className="text-slate-600">
              {product.availability}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 p-7">
            <h3 className="mb-3 text-lg font-semibold">
              Garanti
            </h3>
            <p className="text-slate-600">
              {product.warranty}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 p-7">
            <h3 className="mb-3 text-lg font-semibold">
              Lagring
            </h3>
            <p className="text-slate-600">
              {product.storage}
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#10243A] py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Google Pixel 11 Pro
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Redo att upptäcka mer?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
            Utforska Google Pixel 11 Pro och
            hitta rätt alternativ för dig hos Ornexa.
          </p>

          <p className="mt-9 text-3xl font-bold">
            {product.price.toLocaleString("sv-SE")} kr
          </p>

          <Link
            href={productUrl}
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-xl bg-blue-500 px-12 text-lg font-semibold text-white transition hover:bg-blue-400"
          >
            Köp nu
          </Link>

        </div>
      </section>

    </main>
  );
}

