"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Order, OrderStatus } from "./types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Eye, PaymentCardIcon } from "@/lib/icons";

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const statusConfig = {
    Completed: "bg-[#EAFFF1] border-[#17C65333] text-[#04B440]",
    Cancelled: "bg-[#FFEEF3] border-[#F8285A33] text-[#D81A48]",
    Processing: "bg-[#EFF6FF] border-[#1B84FF33] text-[#056EE9]",
    Failed: "bg-[#FFEEF3] border-[#F8285A33] text-[#D81A48]",
    Refunded: "bg-purple-100/70 border-purple-200 text-purple-700 ",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full h-7 font-medium border",
        statusConfig[status],
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
};

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="size-5 rounded-sm"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="size-5 rounded-sm"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Order",
    cell: ({ row }) => (
      <Link
        href={`#`}
        className="text-blue underline font-medium text-lg leading-3.5"
      >
        #{row.original.id}
      </Link>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.original.date);
      return (
        <span className="text-lg leading-3.5">
          {date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => (
      <span className="text-lg leading-3.5">
        ${row.original.total.toFixed(2)} for {row.original.itemCount} Item
        {row.original.itemCount > 1 ? "s" : ""}
      </span>
    ),
  },
  {
    id: "actions",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const showActions = status === "Processing";

      return (
        <div className="flex items-center gap-2.5">
          {showActions && (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 px-2.5 border-[#E0E4E9] border font-medium text-base"
              >
                <PaymentCardIcon className="text-light-dark size-5" />
                Pay
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 px-2.5 border-[#E0E4E9] border font-medium text-base"
              >
                <Eye className="size-5 text-light-dark" />
                View
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 px-2.5 border font-medium text-base border-[#FF3B3080] bg-[#FF3B301A] text-[#FF3B30] hover:text-[#FF3B30]"
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </>
          )}
          {!showActions && (
            <Button
              variant="ghost"
              size="sm"
              className="h-10 px-2.5 border-[#E0E4E9] border font-medium text-base"
            >
              <Eye className="size-5 text-light-dark" />
              View
            </Button>
          )}
        </div>
      );
    },
  },
  {
    id: "menu",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="space-y-0">
          <DropdownMenuItem className="text-base py-2">
            View Details
          </DropdownMenuItem>
          <DropdownMenuItem className="text-base py-2">
            Download Invoice
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-600 focus:text-red-600 text-base py-2">
            Delete Order
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
