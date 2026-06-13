import React from "react";
import CompareTable from "./compareTable";
import PageHeader from "@/components/sections/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Compare",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const Compare = () => {
  return (
    <main>
      <PageHeader title="Compare" currentPageName="Compare" />
      <CompareTable />
    </main>
  );
};

export default Compare;
