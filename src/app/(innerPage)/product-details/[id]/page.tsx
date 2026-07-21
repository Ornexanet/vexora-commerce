import type { Metadata } from "next";

import ProductPreviewSingleImage from "@/components/sections/productDetails/productPreviewSingleImage";
import ProductOverview from "@/components/sections/productDetails/productOverview";
import HighlightedFeatures from "@/components/sections/productDetails/highlightedFeatures";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";
import { allProducts } from "@/mockData/products";
import ProductTabs from "@/components/sections/productDetails/productTabs";
import { generateProductMetadata } from "@/seo/metadata/productMetadata";
import { generateProductSchema } from "@/seo/schemas/productSchema";
import { generateBreadcrumbSchema } from "@/seo/schemas/breadcrumbSchema";
import { getRelatedProducts } from "@/seo/internalLinks/productLinks";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  return generateProductMetadata(product);
}


const ProductDetails = async ({ params }: Props) => {
  const { id } = await params;

  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="container py-20">
        <h1 className="text-4xl font-bold">
          Produkten hittades inte
        </h1>

        <p className="mt-4 text-light-dark">
          Produkten du söker finns inte eller har tagits bort.
        </p>
      </main>
    );
  }

const relatedProducts = getRelatedProducts(product);
 const productSchema = generateProductSchema(product);
 const breadcrumbSchema = generateBreadcrumbSchema(product);


  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <section className="pt-12 md:pt-18 lg:pt-25">
        <div className="container">
          <div className="grid gap-7.5 lg:grid-cols-[800fr_770fr] xl:grid-cols-[921fr_649fr]">
            <div className="min-w-0">
              <ProductPreviewSingleImage product={product} />

              <HighlightedFeatures product={product} />
            </div>

            <ProductOverview product={product} />
          </div>
        </div>
      </section>
      <ProductTabs product={product} />



      {relatedProducts.length > 0 && (
        <section className="mt-20 border-t border-light-gray bg-[#F8FAFC] py-16 md:mt-25 md:py-20 lg:mt-37.5">
          <div className="container">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Title size="52" className="font-extrabold">
                  Liknande produkter
                </Title>

                <p className="mt-3 max-w-2xl text-lg text-light-dark">
                  Upptäck fler produkter med liknande funktioner
                  och från samma kategori.
                </p>
              </div>

              <a
                href="/shop-with-sidebar"
                className="font-semibold text-blue transition hover:underline"
              >
                Se alla produkter
              </a>
            </div>

            <div className="grid grid-cols-1 gap-x-7.5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  product={relatedProduct}
                  
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetails;
