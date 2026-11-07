import { connection } from "next/server";
import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import ProductPagination from "@/components/sections/shop/productPagination";
import ProductsFilterSidebarOffacnvise from "@/components/sections/shop/productsFilterSidebarOffacnvise";
import ProductsFilterSidebar from "@/components/sections/shop/productsFilterSidebar";
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

const Shop = async () => {
  await connection();
  return (
    <main>
      <ShopGridViewProvider>
        <section className="pt-[100px]">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8">
  Butik
</h1>
            
            
            <div className="flex xl:flex-row flex-col gap-[30px]">
  {/* Desktop filters */}
  <aside className="hidden xl:block shrink-0">
    <ProductsFilterSidebar heading="Filtrera hela sortimentet" />
  </aside>

  {/* Products */}
  <div className="flex-1 min-w-0">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
      <div className="xl:hidden">
        <ProductsFilterSidebarOffacnvise />
      </div>

      <ProductsSortHeader />
    </div>

    <ProductsContainer />
    <ProductPagination />
  </div>
</div>
</div>
        </section>
        <CompanyFeaturesSlider
        
heading="Varför välja Ornexa för shopping och teknikprodukter?"

          className="bg-transparent mt-0"
          cardClassName="bg-[#F5F5F7]"
        />
      </ShopGridViewProvider>
    </main>
  );
};

export default Shop;
