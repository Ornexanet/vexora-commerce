import AdsTwo from "@/components/sections/adsTwo";
import BestSeller from "@/components/sections/bestSeller";
import BlogGrid from "@/components/sections/blogs/blogGrid";
import BrandsSlider from "@/components/sections/brandsSlider";
import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import FeaturesProductFour from "@/components/sections/featuresProductFour";
import HeroVideo from "@/components/sections/hero/heroVideo";
import HomeCategories from "@/components/sections/homeCategories";
import HotDealSlider from "@/components/sections/hotDealSlider";
import SplitProductShowcase from "@/components/sections/splitProductShowcase";
import TestimonialSlider from "@/components/sections/testimonialSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Home",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const HomeTwo = () => {
  return (
    <main>
      <HeroVideo />
      <HomeCategories />
      <AdsTwo />
      <HotDealSlider />
      <FeaturesProductFour />
      <BestSeller />
      <SplitProductShowcase />
      <TestimonialSlider />
      <BrandsSlider />
      <CompanyFeaturesSlider className="lg:pb-37.5 md:pb-25 pb-20" />
      <BlogGrid />
    </main>
  );
};

export default HomeTwo;
