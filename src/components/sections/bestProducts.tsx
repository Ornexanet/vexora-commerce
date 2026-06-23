"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/mockData/products";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Card from "../ui/card";
import Title from "../ui/title";
const BestProducts = () => {
  const [selectValue, setSelectValue] = useState("mobiler");

  const filterList = [
  {
    label: "Mobiler",
    value: "mobiler",
  },
  {
    label: "Hörlurar",
    value: "headphones",
  },
  {
    label: "Smarta klockor",
    value: "smartWatch",
  },
  {
    label: "Tillbehör",
    value: "accessories",
  },
];


  const handleTabClick = (value: string) => {
    setSelectValue(value);
  };

  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <Tabs value={selectValue} defaultValue="mobiler">
          <div className="flex justify-between items-center flex-wrap gap-x-5 gap-y-5">
            <div>
              <div className="flex lg:flex-row flex-col lg:items-center gap-2">
                <Title size="36" className="font-medium">
                  Best in
                </Title>
                <TabsList className="bg-transparent p-0 gap-x-5 gap-y-1 justify-start flex-wrap h-auto">
                  {filterList.map(({ label, value }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      onClick={() => handleTabClick(value)}
                      className="justify-start grow-0 data-[state=active]:shadow-none data-[state=active]:text-foreground hover:text-foreground transition-all duration-500 text-[clamp(1.875rem,1.7661rem+0.4839vw,2.25rem)] font-extrabold leading-normal p-0 text-[#B0B5BB]"
                    >
                      {label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <p className="text-lg leading-normal mt-2">
                Shop the best products from Vexora
              </p>
            </div>
            <Button asChild className="rounded-lg capitalize">
              <Link href={"/shop-with-sidebar"}>Shop {selectValue}</Link>
            </Button>
          </div>
          {filterList.map(({ value }) => {
            const filteredData = products.bestProductsData.filter(
              ({ filter }) => filter === value,
            );
            return (
              <TabsContent key={value} value={value} className="mt-[50px]">
                {filteredData.length ? (
                  <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-7.5 gap-5">
                    {filteredData.map((product) => (
                      <Card key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <Title
                    asChild
                    size="36"
                    className="py-20 text-center text-light-dark"
                  >
                    <h6>Product Not Found</h6>
                  </Title>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default BestProducts;
