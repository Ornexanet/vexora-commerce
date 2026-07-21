import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import ProductPagination from "@/components/sections/shop/productPagination";
import ProductsFilterSidebar from "@/components/sections/shop/productsFilterSidebar";
import ProductsFilterSidebarOffacnvise from "@/components/sections/shop/productsFilterSidebarOffacnvise";
import ProductsSortHeader from "@/components/sections/shop/productsSortHeader";
import ShopGridViewProvider from "@/contextApi/shopGridViewProvider";
import ProductsContainer from "./productsContainer";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";



export const metadata = generatePageMetadata({
  title: "Produkter med filter | Ornexa Shop",
  description:
    "Utforska Ornexa Shops sortiment av mobiler, smartklockor, hörlurar och tillbehör med praktiska filter och sortering.",
  path: "/shop-with-sidebar",
  keywords: [
    "Ornexa Shop",
    "Produkter",
    "Elektronik",
    "Mobiler",
    "Smartklockor",
    "Hörlurar",
    "Tillbehör",
    "Produktfilter",
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
