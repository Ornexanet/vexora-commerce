import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  FileIcon,
  Globe,
  Heart,
  HouseIcon,
  MoreGridIcon,
  ShoppingCartSmIcon,
  User,
} from "@/lib/icons";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const countryList = [
  {
    label: "United States (USD $)",
    value: "us",
    flag: "/images/flags/united-states.png",
  },
  {
    label: "Canada (CAD $)",
    value: "canada",
    flag: "/images/flags/canada.png",
  },
  {
    label: "France (EUR  €)",
    value: "france",
    flag: "/images/flags/france.png",
  },
  {
    label: "Hong Kong SAR (HKD $)",
    value: "hong-kong",
    flag: "/images/flags/hong-kong.png",
  },
  {
    label: "Japan (JPY ¥)",
    value: "japan",
    flag: "/images/flags/japan.png",
  },
  {
    label: "United Kingdom (GBP £)",
    value: "united-kingdom",
    flag: "/images/flags/united-kingdom.png",
  },
];

const itemsOne = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <MoreGridIcon className="size-6 text-light-dark" />,
  },
  {
    label: "My Account",
    href: "#",
    icon: <User className="size-6 text-light-dark stroke-3" />,
  },
  {
    label: "My Orders",
    href: "/dashboard/orders",
    icon: <FileIcon className="size-6 text-light-dark stroke-2" />,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: <Heart className="size-6 text-light-dark stroke-2" />,
  },
  {
    label: "Varukorg",
    href: "/cart",
    icon: <ShoppingCartSmIcon className="size-6 text-light-dark" />,
  },
  {
    label: "Addresses",
    href: "#",
    icon: <HouseIcon className="size-6 text-light-dark stroke-2" />,
  },
];
const itemsTwo = [
  { label: "Account Settings", href: "#" },
  { label: "Payment methods", href: "#" },
  { label: "Support / Help Center", href: "#" },
  { label: "Return & Refund Policy", href: "#" },
];

const HeaderExtraInfo = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="[&_svg:not([class*='size-'])]:first:size-[35px] [&_img]:hidden gap-1 text-sm border-none font-bold focus-visible:ring-0 data-[size=default]:h-auto p-0 items-end text-start">
          <span className="flex items-center gap-2.5">
            <Globe />
            <span>
              <span className="block font-normal text-sm">Country/ Region</span>
              <SelectValue placeholder="United States (USD $)" />
            </span>
          </span>
        </SelectTrigger>
        <SelectContent>
          {countryList.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              <Image
                width={20}
                height={20}
                src={country.flag}
                alt={country.label}
                className="shrink-0"
              />
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <DropdownMenu>
        <DropdownMenuTrigger className="min-w-max text-sm border-none font-bold text-start focus-visible:ring-0 flex items-end gap-1">
          <span className="flex items-center gap-2.5">
            <User className="size-[35px]" />
            <span>
              <span className="block font-normal text-sm">Welcome</span>
              <span className="block">Sign in / Register</span>
            </span>
          </span>
          <ChevronDownIcon className="size-6 shrink-0" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[299px]">
          <div className="flex flex-col gap-2 w-full">
            <Button asChild size={"sm"} className="w-full rounded-full">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              size={"sm"}
              className="w-full rounded-full"
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>
          <hr className="border-[#F1F1F4] my-2.5" />

          {itemsOne.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <Link href={item.href}>
                {item.icon} {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <hr className="border-[#F1F1F4] my-2.5" />
          {itemsTwo.map((item) => (
            <DropdownMenuItem
              key={item.label}
              asChild
              className="text-light-dark focus:text-light-dark"
            >
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderExtraInfo;
