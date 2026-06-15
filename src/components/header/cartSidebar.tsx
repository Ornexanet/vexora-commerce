"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShopingCart } from "@/lib/icons";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "lucide-react";
import { useCart } from "@/contextApi/cartContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CartSidebar = ({ cartIconTwo }: { cartIconTwo?: boolean }) => {
  const { cartItems, removeFromCart, getCartTotal, getCartCount } = useCart();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        {cartIconTwo ? (
          <ShopingCart className="size-6 [&>path]:stroke-3" />
        ) : (
          <span className="flex items-center gap-2.5">
            <ShopingCart className="max-lg:size-5" />
            <span>
              <span className="text-xs font-bold bg-blue text-white px-2 py-px block rounded-[49px]">
                {getCartCount()}
              </span>
              <span className="text-sm font-bold">Varukorg</span>
            </span>
          </span>
        )}
      </SheetTrigger>
      <SheetContent
        className="gap-0 sm:max-w-md max-w-[350px] w-auto"
        isShowCloseIcon={false}
      >
        <SheetHeader className="py-6 px-6 border-b flex flex-row items-center justify-between">
          <SheetTitle className="font-extrabold text-[22px]">
            Din Varukorg
          </SheetTitle>
          <SheetClose className="rounded-full size-10 flex items-center justify-center border border-light-dark hover:border-black transition-all duration-500">
            <XIcon size={20} />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full">
          <div>
            {cartItems.length > 0 && (
              <div className="px-6 py-4 bg-[#F5F5F7] mb-5">
                <p className="font-medium">
                  Congratulations! Your order is eligible for FREE Delivery.
                </p>
                <div className="mt-4 w-full h-1.5 bg-[#16A34A] rounded-lg"></div>
              </div>
            )}

            {cartItems.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <p className="text-light-dark">Din varukorg är tom</p>
              </div>
            ) : (
              <div className="max-h-[calc(100vh-380px)] overflow-y-auto">
                {cartItems.map((item) => {
                  const itemPrice = item.discount
                    ? item.price - item.discount
                    : item.price;

                  return (
                    <div
                      key={item.id}
                      className="px-6 flex items-center gap-3 last:border-b-0 border-b border-light-gray py-4"
                    >
                      <div
                        className="rounded-sm overflow-hidden flex items-center justify-center shrink-0 w-20 h-25"
                        style={{
                          backgroundColor: item.backgroundColor || "#F5F5F7",
                        }}
                      >
                        <Image
                          width={70}
                          height={80}
                          src={item.thumbnail}
                          alt={item.title}
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-1 w-full">
                        <div className="flex items-center justify-between w-full">
                          <Link
                            href={"/"}
                            className="text-light-dark text-lg leading-normal truncate hover:text-blue transition-all duration-500"
                          >
                            {item.title}
                          </Link>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="hover:text-red-400 shrink-0 transition-all duration-500 text-light-dark"
                          >
                            <XIcon size={20} />
                          </button>
                        </div>
                        {/* <p className="text-light-dark text-lg leading-normal truncate">
                          Color:White
                        </p> */}
                        <p className="text-light-dark text-lg leading-normal">
                          {item.quantity} x <b>${itemPrice.toFixed(2)}</b>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="border-t">
            <div className="px-6 pt-4 flex items-center justify-between">
              <p className="font-semibold text-light-dark text-lg leading-normal">
                Delsumma
              </p>
              <p className="text-lg font-semibold leading-normal">
                {getCartTotal().toFixed(2)} kr
              </p>
            </div>
            <div className="flex items-center gap-2.5 px-6 pt-5 pb-7 justify-between">
              <Button asChild variant={"secondary"}>
                <Link href={"/cart"}>Visa varukorg</Link>
              </Button>
              <Button asChild>
                <Link href={"/checkout"}>Till kassan</Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
