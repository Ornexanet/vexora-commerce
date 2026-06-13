export type OrderStatus = "Completed" | "Cancelled" | "Processing" | "Failed" | "Refunded";

export type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  itemCount: number;
};
