import React from "react";
import OrdersTable from "./ordersTable";
import { ordersData } from "./data";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";

export const metadata = generatePageMetadata({
  title: "Mina beställningar | Ornexa Shop",
  description: "Se och hantera dina beställningar hos Ornexa Shop.",
  path: "/dashboard/orders",
  noindex: true,
});


const Orders = () => {
  return (
    <div className="pb-15 w-full min-w-0">
      <OrdersTable data={ordersData} />
    </div>
  );
};

export default Orders;
