import BatteryInfo from "@/components/sections/productDetailsTwo/batteryInfo";
import ProductFeaturesSlider from "@/components/sections/productDetailsTwo/productFeaturesSlider";
import ProductImageGallery from "@/components/sections/productDetailsTwo/productImageGallery";
import WatchModes from "@/components/sections/productDetailsTwo/watchModes";
import ProductOverview from "@/components/sections/productDetailsTwo/productOverview";
import ProductPreviewImages from "@/components/sections/productDetailsTwo/productPreviewImages";
import Title from "@/components/ui/title";
import { products } from "@/mockData/products";
import Card from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Product Details Two",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const ProductDetailsTwo = () => {
  return (
    <main>
      <section className="mt-25">
        <div className="container">
          <div className="grid xl:grid-cols-[1053fr_514fr] lg:grid-cols-[953fr_614fr] items-start gap-8">
            <ProductPreviewImages />
            <ProductOverview />
          </div>
        </div>
      </section>
      <ProductFeaturesSlider />
      <ProductImageGallery />
      <WatchModes />
      <BatteryInfo />
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

export default ProductDetailsTwo;
