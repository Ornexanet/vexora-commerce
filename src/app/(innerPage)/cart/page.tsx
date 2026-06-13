import PageHeader from "@/components/sections/pageHeader";
import React from "react";
import CartTable from "./cartTable";
import PriceSummary from "./priceSummary";
import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Cart",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const Cart = () => {
  return (
    <main>
      <PageHeader title="Cart" currentPageName="Cart" />
      <section className="mt-7.5">
        <div className="container">
          <div className="grid lg:grid-cols-[1057fr_513fr] gap-x-7.5 gap-y-10 items-start">
            <CartTable />
            <PriceSummary />
          </div>
        </div>
      </section>
      <CompanyFeaturesSlider
        className="bg-transparent pt-0"
        cardClassName="bg-[#F5F5F7]"
      />
    </main>
  );
};

export default Cart;
