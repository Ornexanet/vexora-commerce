import Footer from "@/components/sections/footer";
import Header from "@/components/header";
import MobileHeader from "@/components/header/mobileHeader";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
