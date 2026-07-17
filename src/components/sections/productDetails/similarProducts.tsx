"use client";

import Image from "next/image";
import Link from "next/link";

import Rating from "@/components/ui/rating";
import Title from "@/components/ui/title";
import { allProducts, ProductType } from "@/mockData/products";

type SimilarProductsProps = {
  product: ProductType;
};

const SimilarProducts = ({ product }: SimilarProductsProps) => {
  const currentCategories = product.categories ?? [];

  const similarProducts = allProducts
    .filter((item) => {
      const isDifferentProduct = item.id !== product.id;

      const hasSameCategory = item.categories?.some((category) =>
        currentCategories.includes(category)
      );

      return isDifferentProduct && hasSameCategory;
    })
    .slice(0, 4);

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <Title size="42">Liknande produkter</Title>

          <p className="mt-2 text-light-dark">
            Upptäck fler produkter i samma kategori.
          </p>
        </div>

        <Link
          href="/shop-with-sidebar"
          className="hidden font-semibold text-blue transition hover:underline sm:inline"
        >
          Se alla produkter
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {similarProducts.map((similarProduct) => (
          <article
            key={similarProduct.id}
            className="group overflow-hidden rounded-2xl border border-light-gray bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Link
              href={`/product-details/${similarProduct.id}`}
              aria-label={`Visa ${similarProduct.title}`}
              className="block"
            >
              <div
                className="relative aspect-square overflow-hidden"
                style={{
                  backgroundColor:
                    similarProduct.backgroundColor ?? "#F4F6F8",
                }}
              >
                {similarProduct.tag && (
                  <span className="absolute left-4 top-4 z-10 rounded-md bg-white px-3 py-1 text-sm font-semibold text-blue shadow-sm">
                    {similarProduct.tag}
                  </span>
                )}

                <Image
                  src={similarProduct.thumbnail}
                  alt={similarProduct.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-contain p-8 transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 text-sm font-medium text-light-dark">
                  {similarProduct.brand ??
                    similarProduct.categories?.[0] ??
                    "Ornexa"}
                </p>

                <h3 className="line-clamp-2 min-h-[56px] text-xl font-bold text-foreground transition group-hover:text-blue">
                  {similarProduct.title}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <Rating
                    star={5}
                    iconSize="text-[#FFBE0C] fill-[#FFBE0C]"
                    className="gap-1"
                  />

                  <span className="text-sm text-light-dark">5.0</span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-xl font-bold text-foreground">
                    {similarProduct.price.toLocaleString("sv-SE")} kr
                  </p>

                  {similarProduct.availability && (
                    <span className="text-sm font-medium text-green-700">
                      {similarProduct.availability}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <Link
        href="/shop-with-sidebar"
        className="mt-7 block text-center font-semibold text-blue hover:underline sm:hidden"
      >
        Se alla produkter
      </Link>
    </section>
  );
};

export default SimilarProducts;
