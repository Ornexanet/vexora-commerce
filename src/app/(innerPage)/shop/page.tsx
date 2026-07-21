import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import ProductPagination from "@/components/sections/shop/productPagination";
import ProductsFilterSidebarOffacnvise from "@/components/sections/shop/productsFilterSidebarOffacnvise";
import ProductsSortHeader from "@/components/sections/shop/productsSortHeader";
import ShopGridViewProvider from "@/contextApi/shopGridViewProvider";
import ProductsContainer from "./productsContainer";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";


export const metadata = generatePageMetadata({
  title: "Butik | Ornexa Shop",
  description:
    "Utforska hela sortimentet av mobiler, smartklockor, hörlurar och tillbehör hos Ornexa Shop.",
  path: "/shop",
  keywords: [
    "Ornexa Shop",
    "Elektronik",
    "Mobiler",
    "Smartklockor",
    "Hörlurar",
    "Tillbehör",
    "Onlinebutik",
  ],
});

const Shop = () => {
  return (
    <main>
      <ShopGridViewProvider>
        <section className="pt-[100px]">
          <div className="container">
            <div className="flex md:flex-row flex-col md:items-center justify-between gap-x-[50px] gap-y-4">
              <ProductsFilterSidebarOffacnvise />
              <ProductsSortHeader />
            </div>
            <ProductsContainer />
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

export default Shop;
