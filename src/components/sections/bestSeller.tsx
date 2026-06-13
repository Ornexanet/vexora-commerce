import { products } from "@/mockData/products";
import Link from "next/link";
import { Button } from "../ui/button";
import Card from "../ui/card";
import Title from "../ui/title";

const BestSeller = () => {
  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between gap-x-5 gap-y-5 lg:items-center mb-12.5">
          <div>
            <Title size="36">Best Seller</Title>
            <p className="text-lg mt-2 leading-[1.28]">
              Shop the best seller products from Vexora
            </p>
          </div>
          <div>
            <Button asChild>
              <Link href={"/shop"}>View All Products</Link>
            </Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-5 sm:gap-x-7.5 lg:gap-y-17.5 sm:gap-y-12.5 gap-y-10">
          {products.bestProductsData.slice(0, 8).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
