import { products } from "@/mockData/products";
import Link from "next/link";
import { Button } from "../ui/button";
import Card from "../ui/card";
import Title from "../ui/title";

const NewStock = () => {
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div>
            <Title asChild size="36">
              <h4>Nya produkter</h4>
            </Title>
            <p className="mt-2.5 text-lg leading-normal">
              Upptäck våra senaste produkter och nyheter 
            </p>
          </div>
          <Button asChild className="rounded-lg">
            <Link href={"/shop"}>Se alla nyheter</Link>
          </Button>
        </div>
        <div className="mt-12.5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 sm:gap-7.5 gap-5">
          {products.newStockProducts.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default NewStock;
