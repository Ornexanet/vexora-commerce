
import type { Metadata } from "next";
import Link from "next/link";
import { allProducts } from "@/mockData/products";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Google Pixel 11 Pro | Ornexa",
  description:
    "Upptäck Google Pixel 11 Pro hos Ornexa.",
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
      <main className="container py-20">
        <h1>Produkten hittades inte</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#F5F6F8]">
      <section className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:py-24">
        <div className="order-2 md:order-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Google Pixel
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            {product.title}
          </h1>

          <p className="mb-8 max-w-lg text-xl leading-relaxed text-slate-600">
            Smart teknik. Elegant design.
          </p>

          <p className="mb-8 text-3xl font-bold text-slate-900">
            {product.price.toLocaleString("sv-SE")} kr
          </p>

          <Link
            href={`/product-details/${product.id}`}
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Köp nu
          </Link>

          <p className="mt-5 text-sm text-slate-500">
            Upptäck mer om produkten hos Ornexa.
          </p>
        </div>

        <div className="order-1 flex items-center justify-center md:order-2">
  <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white p-8 shadow-sm md:min-h-[520px]">
    <Image
      src={product.thumbnail}
      alt={product.title}
      width={500}
      height={600}
      priority
      className="max-h-[480px] w-auto max-w-full object-contain"
    />
  </div>
</div>

      </section>
    </main>
  );
}

