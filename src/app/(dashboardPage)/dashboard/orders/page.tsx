import React from "react";
import OrdersTable from "./ordersTable";
import { ordersData } from "./data";

const Orders = () => {
  return (
    <div className="pb-15 w-full min-w-0">
      <OrdersTable data={ordersData} />
    </div>
  );
};

export default Orders;
