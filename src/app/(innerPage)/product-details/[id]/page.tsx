import ProductPreviewSingleImage from "@/components/sections/productDetails/productPreviewSingleImage";
import ProductOverview from "@/components/sections/productDetails/productOverview";
import HighlightedFeatures from "@/components/sections/productDetails/highlightedFeatures";
import Title from "@/components/ui/title";
import { allProducts } from "@/mockData/products";
import Card from "@/components/ui/card";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return {
      title: "Product not found | Ornexa Shop",
      description: "Produkten kunde inte hittas i Ornexa Shop.",
    };
  }

  const productUrl = `https://shop.ornexa.net/product-details/${product.id}`;
  const productImage = `https://shop.ornexa.net${product.thumbnail}`;

  return {
    title: `${product.title} | Ornexa Shop`,
    description: product.description,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: `${product.title} | Ornexa Shop`,
      description: product.description,
      url: productUrl,
      siteName: "Ornexa Shop",
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Ornexa Shop`,
      description: product.description,
      images: [productImage],
    },
  };
}


type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ProductDetails = async ({ params }: Props) => {
  const { id } = await params;

  const product = allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = allProducts
    .filter(
      (item) =>
        item.id !== product.id &&
        item.categories.some((category) =>
          product.categories.includes(category)
        )
    )
    .slice(0, 4);

    const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.title,
  image: [`https://shop.ornexa.net${product.thumbnail}`],
  description: product.description,
  sku: String(product.id),
  brand: {
    "@type": "Brand",
    name: product.brand || "Ornexa",
  },
  category: product.categories?.join(", "),
  offers: {
    "@type": "Offer",
    url: `https://shop.ornexa.net/product-details/${product.id}`,
    priceCurrency: "SEK",
    price: product.price,
    availability:
      product.availability === "Finns i lager"
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "Ornexa Shop",
    },
  },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hem",
      item: "https://shop.ornexa.net",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: product.categories?.[0] || "Produkter",
      item: `https://shop.ornexa.net/${product.categories?.[0] || "shop"}`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: product.title,
      item: `https://shop.ornexa.net/product-details/${product.id}`,
    },
  ],
};





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


      <section className="lg:pt-25 md:pt-18 pt-12">
        <div className="container">
          <div className="grid xl:grid-cols-[921fr_649fr] lg:grid-cols-[800fr_770fr] gap-7.5">
            <div className="min-w-0">
              <ProductPreviewSingleImage product={product} />
              <HighlightedFeatures product={product} />
            </div>

            <ProductOverview product={product} />
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="lg:mt-37.5 md:mt-25 mt-20">
          <div className="container">
            <Title size="52" className="font-extrabold text-center">
              Related Products
            </Title>

            <div className="mt-12.5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-17.5">
              {relatedProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetails;
