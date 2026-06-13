"use client";
import {
  Downloadicon,
  FileIcon,
  LogOutIcon,
  MoreGridIcon,
  PaymentCardIcon,
  ShopingCart,
  UserSquearIcon,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <MoreGridIcon />,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <ShopingCart className="size-6 stroke-[2.2]" />,
  },
  {
    title: "Downloads",
    href: "#",
    icon: <Downloadicon />,
  },
  {
    title: "Addresses",
    href: "#",
    icon: <FileIcon />,
  },
  {
    title: "Payment Methods",
    href: "#",
    icon: <PaymentCardIcon />,
  },
  {
    title: "Account Details",
    href: "#",
    icon: <UserSquearIcon />,
  },
  {
    title: "Logout",
    href: "#",
    icon: <LogOutIcon />,
  },
];

const DashboardSidebar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-[#F5F5F7] w-[350px] sm:w-[378px] max-w-[378px] rounded-xl overflow-hidden shrink-0">
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className={cn(
                "p-5 flex items-center justify-between gap-5 font-medium text-lg border-b border-b-light-gray group hover:bg-light-gray transition-all duration-500",
                pathName === item.href && "bg-light-gray",
              )}
            >
              <span
                className={cn(
                  "text-[#252F4A] group-hover:text-blue transition-all duration-500",
                  pathName === item.href && "text-blue",
                )}
              >
                {item.title}
              </span>
              <span
                className={cn(
                  "text-[#B0B5BB] group-hover:text-blue transition-all duration-500",
                  pathName === item.href && "text-blue",
                )}
              >
                {item.icon}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
