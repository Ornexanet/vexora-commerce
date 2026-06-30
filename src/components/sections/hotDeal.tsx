"use client";
import { products } from "@/mockData/products";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Title from "../ui/title";
import { useCart } from "@/contextApi/cartContext";

const HotDeal = () => {
  const { addToCart } = useCart();
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
          {products.hotDealProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="rounded-lg group"
                style={{ backgroundColor: `${product.backgroundColor}` }}
              >
                <div className="text-center pt-[45px]">
                  <Title asChild size="42">
                    <h3>{product.title}</h3>
                  </Title>
                  <p className="sm:text-lg text-base sm:leading-normal mt-2 font-extralight max-w-[330px] mx-auto">
                    {product.description}
                  </p>
                  <div className="mt-[17px] flex justify-center items-center gap-[30px]">
                    <button
                      onClick={() => addToCart(product)}
                      className="font-medium text-lg leading-[28.8px] flex items-center gap-px hover:text-blue hover:[&_svg]:translate-x-1 transition-all duration-300"
                    >
                      Köp nu{" "}
                      <ChevronRight
                        size={16}
                        className="mt-1 transition-all duration-300"
                      />
                    </button>
                   <Link
                 href={`/product-details/${product.id}`}
                 className="font-medium text-lg leading-[28.8px] flex items-center gap-px"
                >
                 Läs mer{" "}
                 <ChevronRight size={16} className="mt-1 transition-all duration-300" />
                 </Link>

                  </div>
                </div>
                <div className="mt-5 max-h-[514px] overflow-hidden">
                  <Image
                    width={514}
                    height={387}
                    sizes="100vw"
                    src={product.thumbnail}
                    alt={product.title}
                    className="max-h-[387px] w-full group-hover:rotate-2 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotDeal;
