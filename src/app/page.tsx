import Footer from "@/components/sections/footer";
import Header from "@/components/header";
import MobileHeader from "@/components/header/mobileHeader";
import Ads from "@/components/sections/ads";
import BestProducts from "@/components/sections/bestProducts";
import BlogSlider from "@/components/sections/blogs/blogSlider";
import CompanyFeatures from "@/components/sections/companyFeatures";
import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import FeaturesProduct from "@/components/sections/featuresProduct";
import FeaturesProductThree from "@/components/sections/featuresProductThree";
import FeaturesProductTwo from "@/components/sections/featuresProductTwo";
import GroupOfProducts from "@/components/sections/groupOfProducts";
import HeadPhonesHeilight from "@/components/sections/headPhonesHeilight";
import HeroSlider from "@/components/sections/hero/heroSlider";
import HotDeal from "@/components/sections/hotDeal";
import NewStock from "@/components/sections/newStock";
import Testimonial from "@/components/sections/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Home",
};

const Home = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>
       {/* <HeroSlider /> */}
        <HotDeal />
        <NewStock />
        <FeaturesProduct />
        <GroupOfProducts />
        <BestProducts />
        <HeadPhonesHeilight />
        <Ads />
        <CompanyFeatures />
        <FeaturesProductTwo />
        <FeaturesProductThree />
        <CompanyFeaturesSlider />
        <Testimonial />
       {/* <BlogSlider />*/}
      </main>
      <Footer />
    </>
  );
};

export default Home;
