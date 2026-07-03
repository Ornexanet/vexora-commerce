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
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[30px] relative w-full">
      <Link href={"/"} className="shrink-0 w-[120px] block">
        <Image
          width={120}
          height={40}
          src={"/images/ornexa-logo121.png"}
          alt="Ornexa logo"
          priority
        />
      </Link>

      <div
        className={cn(
          "min-w-0 max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:z-50 max-lg:bg-background max-lg:w-full",
          isShowSearch ? "block lg:block" : "lg:block hidden"
        )}
      >
        <div className="border border-light-gray rounded-[47px] flex items-center lg:pl-[25px] max-h-[50px] overflow-hidden">
          <div className="border-r border-r-light-gray py-1.5 h-full shrink-0">
            <Select defaultValue="All Categories">
              <SelectTrigger className="lg:w-[190px] border-none font-bold lg:text-base text-sm lg:pr-[37px] focus-visible:ring-0 h-auto max-lg:[&>svg]:size-5">
                <SelectValue />
              </SelectTrigger>

              <SelectContent className="min-w-[220px]">
                <SelectItem value={"All Categories"}>
                  Alla kategorier
                </SelectItem>

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

            <InputGroupAddon align={"inline-end"} className="text-foreground">
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

      <div className="flex items-center justify-end gap-[25px] shrink-0">
        <div
          onClick={() => setIsShowSearch(true)}
          className="lg:hidden flex items-center gap-2 cursor-pointer"
        >
          <Search size={20} />
          <span className="text-lg leading-normal font-medium lg:block hidden">
            Sök
          </span>
        </div>

        <div className="xl:flex gap-[25px] hidden">
          <HeaderExtraInfo />
        </div>

        <CartSidebar />
      </div>
    </div>
  );
};

export default TopHeader;
