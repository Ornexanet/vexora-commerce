"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MicroPhone } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { categoriesList } from "@/mockData/categoriesList";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeaderExtraInfo from "./headerExtraInfo";
import CartSidebar from "./cartSidebar";

const TopHeader = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  return (
    <div className="flex justify-between items-center gap-[50px] relative">
      <Link href={"/"} className="shrink-0">
        <Image
  width={320}
  height={80}
  src="/images/shop-ornexa-net-logo.webp"
  alt="Ornexa logo"
  className="h-10 w-auto"
/>

      </Link>
      {/* center search input field and  category dropdown */}
      <div
        className={cn(
          "flex-7 max-lg:absolute max-lg:bg-background max-lg:w-full ",
          isShowSearch ? "block lg:block" : "lg:block hidden",
        )}
      >
        <div className="border border-light-gray rounded-[47px] flex items-center lg:pl-[25px] max-h-[50px] overflow-hidden">
          <div className="border-r border-r-light-gray py-1.5 h-full">
            <Select defaultValue="All Categories">
              <SelectTrigger className="lg:w-[190px] border-none font-bold lg:text-base text-sm lg:pr-[37px] focus-visible:ring-0 h-auto max-lg:[&>svg]:size-5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="min-w-[220px]">
                <SelectItem value={"All Categories"}>Alla kategorier</SelectItem>
                {categoriesList.map(({ id, label }) => (
                  <SelectItem key={id} value={label}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <InputGroup className="h-auto border-none rounded-[47px] [&_svg]:size-5 lg:[&_svg]:size-6 lg:pl-[25px] has-[[data-slot=input-group-control]:focus-visible]:ring-0">
            <InputGroupInput
              placeholder="Sök efter produkter..."
              className="py-[15px] h-auto rounded-[47px] placeholder:text-[#B0B5BB] text-[#B0B5BB] font-medium"
            />
            <InputGroupAddon align={"inline-end"} className="text-foreground ">
              <InputGroupButton className="lg:mr-3 max-lg:px-0!">
                <MicroPhone className="size-6" />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon
              align="inline-end"
              className="text-foreground max-lg:block hidden"
            >
              <InputGroupButton
                className="lg:mr-2"
                onClick={() => setIsShowSearch(false)}
              >
                <X className="size-6" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      {/* right side countray, user, cart icons and dropdown */}
      <div className="flex-2 flex items-center justify-end gap-[25px]">
        {/* search icons for meduim devices */}
        <div
          onClick={() => setIsShowSearch(true)}
          className="lg:hidden flex items-center gap-2 cursor-pointer"
        >
          <Search size={20} />
          <span className="text-lg leading-normal font-medium lg:block hidden">
            Search
          </span>
        </div>
        {/* search icons for meduim devices */}
        <div className="xl:flex gap-[25px] hidden">
          <HeaderExtraInfo />
        </div>
        <CartSidebar />
      </div>
    </div>
  );
};

export default TopHeader;
