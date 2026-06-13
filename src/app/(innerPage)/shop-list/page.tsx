import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import ProductPagination from "@/components/sections/shop/productPagination";
import ProductsFilterSidebar from "@/components/sections/shop/productsFilterSidebar";
import ProductsFilterSidebarOffacnvise from "@/components/sections/shop/productsFilterSidebarOffacnvise";
import ProductsSortHeader from "@/components/sections/shop/productsSortHeader";
import ShopGridViewProvider from "@/contextApi/shopGridViewProvider";
import ProductsContainer from "./productsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Shop List",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const ShopList = () => {
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

export default ShopList;
