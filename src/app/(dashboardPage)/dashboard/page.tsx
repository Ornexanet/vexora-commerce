import { CreditCard, Download, Heart, Ticket, Truck } from "lucide-react";
import Link from "next/link";
import React from "react";
import OrdersTable from "./orders/ordersTable";
import { ordersData } from "./orders/data";

const page = () => {
  return (
    <div className="w-full">
      <section className="bg-[#F5F5F7] px-5 py-10 rounded-lg">
        <h6 className="font-semibold text-2xl">Jon Deo</h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
          <Link
            href={"#"}
            className="text-center flex flex-col justify-center items-center hover:text-blue transition-colors"
          >
            <Heart />
            <p className="mt-1.5">Wish List</p>
          </Link>
          <Link
            href={"#"}
            className="text-center flex flex-col justify-center items-center hover:text-blue transition-colors"
          >
            <Ticket />
            <p className="mt-1.5">Coupons</p>
          </Link>
          <Link
            href={"#"}
            className="text-center flex flex-col justify-center items-center hover:text-blue transition-colors"
          >
            <Truck />
            <p className="mt-1.5">Track Order</p>
          </Link>
          <Link
            href={"#"}
            className="text-center flex flex-col justify-center items-center hover:text-blue transition-colors"
          >
            <Download />
            <p className="mt-1.5">Downloads</p>
          </Link>
          <Link
            href={"#"}
            className="text-center flex flex-col justify-center items-center hover:text-blue transition-colors"
          >
            <CreditCard />
            <p className="mt-1.5">Shopping credit</p>
          </Link>
        </div>
      </section>
      <div className="mt-10">
        <h6 className="font-semibold text-2xl mb-4">Recent Order</h6>
        <OrdersTable data={ordersData.slice(0, 3)} />
      </div>
    </div>
  );
};

export default page;
