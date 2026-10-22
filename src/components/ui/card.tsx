
"use client";

import { Bolt, Eye, Heart, ShopingCartSm } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ProductType } from "@/mockData/products";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/contextApi/cartContext";
import { useWishlist } from "@/contextApi/wishlistContext";
import { useCompare } from "@/contextApi/compareContext";
import QuickViewProduct from "../sections/productDetails/quickViewProduct";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShuffleIcon } from "lucide-react";
import { trackEvent } from "@/lib/growth-events";
import {
  getExperimentVariant,
  type ExperimentVariant,
} from "@/lib/experiments";

interface PropsType {
  product: ProductType;
  className?: string;
  imgContainer?: string;
  imgWrapper?: string;
  ImgWidth?: number;
  ImgHeight?: number;
}

const Card = ({
  product,
  className,
  imgContainer,
  imgWrapper,
  ImgWidth = 333,
  ImgHeight = 333,
}: PropsType) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [variant, setVariant] = useState<ExperimentVariant>("A");

  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const {
    addToCompare,
    isInCompare,
    removeFromCompare,
  } = useCompare();

  const inWishlist = isInWishlist(product.id);
  const inCompare = isInCompare(product.id);

  
const handleAddToCart = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  addToCart(product);

  trackEvent("add_to_cart", {
    productId: product.id,
    productName: product.title,
    price: product.price,
    experiment: "ornexa_add_to_cart_v1",
    variant: variant,
  });
};



  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isInWishlist(product.id)) {
      trackEvent("add_to_wishlist", {
        productId: product.id,
        productName: product.title,
        price: product.price,
      });
    }

    addToWishlist(product);
  };

  const handleAddToCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (inCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  
useEffect(() => {
  const assignedVariant = getExperimentVariant();
  setVariant(assignedVariant);

  const exposureKey = "ornexa_add_to_cart_v1_exposure";

  if (sessionStorage.getItem(exposureKey) !== assignedVariant) {
    sessionStorage.setItem(exposureKey, assignedVariant);

    trackEvent("experiment_exposure", {
      experiment: "ornexa_add_to_cart_v1",
      variant: assignedVariant,
    });
  }
}, []);



  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const showCart = variant === "B" || isHovered || isMobile;

  return (
    <>
      <div
        className={cn("rounded-lg group/card h-full", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "relative rounded-lg flex items-center justify-center max-h-[460px] aspect-[378/460] w-full overflow-hidden",
            imgContainer
          )}
          style={{
            backgroundColor: product.backgroundColor || "#f1f1f1",
          }}
        >
          <Link
            href={`/product-details/${product.id}`}
            className={cn(
              "flex items-center justify-center p-5 hover:scale-105 transition-all duration-500 w-full h-full",
              imgWrapper
            )}
          >
            <Image
              width={ImgWidth}
              height={ImgHeight}
              sizes="100vw"
              src={product.thumbnail}
              alt={product.title}
              className={cn(
                "h-auto object-contain",
                `max-h-[${ImgHeight}px]`
              )}
            />
          </Link>

          {product.tag && (
            <div className="absolute top-[14px] right-[15px] rounded-sm py-1.5 pl-2.5 pr-[15px] bg-card max-h-[30px] flex items-center gap-1 shadow-[0_8px_40px_0_rgba(1,22,36,0.08)]">
              <span className="text-blue">
                <Bolt />
              </span>
              <p className="text-sm font-medium">{product.tag}</p>
            </div>
          )}

          {product.discount && (
            <div className="absolute top-[19px] left-0 rounded-tl-none rounded-bl-none rounded-sm py-1.5 pl-2.5 pr-2.5 bg-blue max-h-[30px] text-white flex items-center gap-1">
              <p className="text-sm">
                Spara ${product.discount}
              </p>
            </div>
          )}

          {/* Action buttons container */}
          <div className="absolute md:bottom-5 bottom-2 right-[15px] flex flex-col items-end md:gap-[15px] gap-1.5 z-20">

            {/* Wishlist */}
            <motion.div
              initial="hidden"
              animate={isHovered || isMobile ? "visible" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                  width: isMobile ? 32 : 45,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  width: isMobile ? 32 : 45,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={isMobile ? {} : { width: 172 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              onClick={handleAddToWishlist}
              className="group relative cursor-pointer flex items-center justify-end md:size-[45px] size-8 bg-card shadow rounded-[29px] overflow-hidden"
              style={{
                pointerEvents:
                  isHovered || isMobile ? "auto" : "none",
              }}
            >
              <span className="absolute left-[14px] font-medium leading-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                {inWishlist ? "I favoriter" : "Lägg till i favoriter"}
              </span>

              <div className="md:size-[45px] size-8 rounded-full flex justify-center items-center flex-shrink-0 bg-card relative z-10">
                <Heart
                  className={
                    inWishlist ? "fill-red-500 text-red-500" : ""
                  }
                />
              </div>
            </motion.div>

            {/* Quick View */}
            <motion.div
              initial="hidden"
              animate={isHovered || isMobile ? "visible" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                  width: isMobile ? 32 : 45,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  width: isMobile ? 32 : 45,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={isMobile ? {} : { width: 147 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              onClick={() => setOpen(true)}
              className="group relative cursor-pointer flex items-center justify-end md:size-[45px] size-8 bg-card shadow rounded-[29px] overflow-hidden"
              style={{
                pointerEvents:
                  isHovered || isMobile ? "auto" : "none",
              }}
            >
              <span className="absolute left-[14px] font-medium leading-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                Snabbvy
              </span>

              <div className="md:size-[45px] size-8 rounded-full flex justify-center items-center flex-shrink-0 bg-card relative z-10">
                <Eye />
              </div>
            </motion.div>

            {/* Add to Cart — A/B Experiment */}
            <motion.div
              initial="hidden"
              animate={showCart ? "visible" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                  width: isMobile ? 32 : 45,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  width: isMobile ? 32 : 45,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={isMobile ? {} : { width: 145 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              onClick={handleAddToCart}
              className="group relative cursor-pointer flex items-center justify-end md:size-[45px] size-8 bg-card shadow rounded-[29px] overflow-hidden"
              style={{
                pointerEvents: showCart ? "auto" : "none",
              }}
            >
              <span className="absolute left-[14px] font-medium leading-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                Lägg i varukorgen
              </span>

              <div className="md:size-[45px] size-8 rounded-full flex justify-center items-center flex-shrink-0 bg-card relative z-10">
                <ShopingCartSm />
              </div>
            </motion.div>

            {/* Compare */}
            <motion.div
              initial="hidden"
              animate={isHovered || isMobile ? "visible" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                  width: isMobile ? 32 : 45,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  width: isMobile ? 32 : 45,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={isMobile ? {} : { width: 147 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              onClick={handleAddToCompare}
              className="group relative cursor-pointer flex items-center justify-end md:size-[45px] size-8 bg-card shadow rounded-[29px] overflow-hidden"
              style={{
                pointerEvents:
                  isHovered || isMobile ? "auto" : "none",
              }}
            >
              <span className="absolute left-[14px] font-medium leading-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                {inCompare ? "I jämförelsen" : "Jämför"}
              </span>

              <div className="md:size-[45px] size-8 rounded-full flex justify-center items-center flex-shrink-0 bg-card relative z-10">
                <ShuffleIcon
                  size={18}
                  className={inCompare ? "text-blue" : ""}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product information */}
        <div className="mt-5">
          <Link
            href={`/product-details/${product.id}`}
            className="md:text-xl text-lg md:leading-normal text-light-dark font-bold hover:text-blue transition-all duration-300"
          >
            {product.title}
          </Link>

          <p className="md:text-lg md:leading-normal text-light-dark mt-2">
            {product.discount ? (
              <span className="flex gap-[14px]">
                <span className="text-blue">
                  {(
                    product.price - (product.discount ?? 0)
                  ).toLocaleString("sv-SE")}{" "}
                  kr
                </span>
              </span>
            ) : (
              <span>
                {product.price.toLocaleString("sv-SE")} kr
              </span>
            )}
          </p>
        </div>
      </div>

      <QuickViewProduct
        product={product}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};

export default Card;

