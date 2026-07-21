import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import ProductPagination from "@/components/sections/shop/productPagination";
import ProductsFilterSidebar from "@/components/sections/shop/productsFilterSidebar";
import ProductsFilterSidebarOffacnvise from "@/components/sections/shop/productsFilterSidebarOffacnvise";
import ProductsSortHeader from "@/components/sections/shop/productsSortHeader";
import ShopGridViewProvider from "@/contextApi/shopGridViewProvider";
import ProductsContainer from "./productsContainer";

import { generatePageMetadata } from "@/seo/metadata/pageMetadata";


export const metadata = generatePageMetadata({
  title: "Hörlurar | Ornexa Shop",
  description:
    "Upptäck trådlösa hörlurar, over-ear och in-ear modeller från ledande varumärken hos Ornexa Shop.",
  path: "/horlurar",
  keywords: [
    "Hörlurar",
    "Trådlösa hörlurar",
    "Bluetooth hörlurar",
    "Sony",
    "Apple AirPods",
    "Samsung Galaxy Buds",
    "Ornexa Shop",
  ],
});


const ShopWithSidebar = () => {
  return (
    <main>
      <ShopGridViewProvider>
        <section className="pt-[100px]">
          <div className="container">
            <div className="flex xl:flex-row flex-col justify-between gap-x-[30px]">
              <div className="xl:block hidden shrink-0">
                <ProductsFilterSidebar />
              </div>
              <div className="shrink-1">
                <div className="mb-4 xl:hidden">
                  <ProductsFilterSidebarOffacnvise />
                </div>
                <ProductsSortHeader />
                <ProductsContainer />
              </div>
            </div>
            <ProductPagination />
          </div>
        </section>
        <CompanyFeaturesSlider
          className="bg-transparent mt-0"
          cardClassName="bg-[#F5F5F7]"
        />
      </ShopGridViewProvider>
    </main>
  );
};
export default ShopWithSidebar;
