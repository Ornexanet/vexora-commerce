import ProductDetailsVideo from "@/components/sections/productDetails/productDetailsVideo";
import ProductFeatures from "@/components/sections/productDetails/productFeatures";
import ProductPreviewSingleImage from "@/components/sections/productDetails/productPreviewSingleImage";
import ProductOverview from "@/components/sections/productDetails/productOverview";
import ProductSortInfo from "@/components/sections/productDetails/productSortInfo";
import ProductDetailsTable from "@/components/sections/productDetails/productDetailsTable";
import ReviewInput from "@/components/sections/productDetails/reviewInput";
import Testimonial from "@/components/sections/testimonial";
import HighlightedFeatures from "@/components/sections/productDetails/highlightedFeatures";
import Title from "@/components/ui/title";
import { products } from "@/mockData/products";
import Card from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Product Details",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};
type Props = {
  params: Promise<{
    id: string;
  }>;
};
const ProductDetails = async ({ params }: Props) => {
const { id } = await params;
const product = products.bestProductsData.find((item) => item.id === Number(id));
if (!product) {
  return <div>Product not found</div>;
}

  return (
    <main>
      <section className="lg:pt-25 md:pt-18 pt-12">
        <div className="container">
          <div className="grid xl:grid-cols-[921fr_649fr] lg:grid-cols-[800fr_770fr] gap-7.5">
            <div className="min-w-0">
              <ProductPreviewSingleImage product={product} />
              <HighlightedFeatures />
            </div>
            <ProductOverview product={product} />
          </div>
        </div>
      </section>
      <ProductDetailsVideo />
      <ProductFeatures />
      <ProductSortInfo />
      <ProductDetailsTable />
      <Testimonial />
      <ReviewInput />
      <section className="lg:mt-37.5 md:mt-25 mt-20">
        <div className="container">
          <Title size="52" className="font-extrabold text-center">
            Related Products
          </Title>
          <div className="mt-12.5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-17.5">
            {products.bestProductsData.slice(0, 4).map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
