import React from "react";
import DashboardSidebar from "./dashboardSidebar";
import Header from "@/components/header";
import PageHeader from "@/components/sections/pageHeader";
import Footer from "@/components/sections/footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <PageHeader title="Orders" currentPageName="Orders" />
      <div className="container mt-20">
        <div className="flex xl:flex-row flex-col items-start gap-7.5">
          <DashboardSidebar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
