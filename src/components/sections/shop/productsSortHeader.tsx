"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useShopGridView } from "@/contextApi/shopGridViewProvider";
import { MenuGridBig, MenuGridSmall, MenuListSmall } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

const ProductsSortHeader = () => {
  const { shopView, setShopView } = useShopGridView();

  return (
    <div className="flex items-center justify-between xl:w-full max-h-[50px]">
      <div className="bg-[#F9F9F9] border border-light-gray rounded-md p-1 hidden xl:flex items-center gap-1">
        <button
          onClick={() => setShopView("default")}
          className={cn(
            "w-[42px] h-[42px] flex justify-center items-center rounded-md",
            shopView === "default"
              ? "shadow-[0_3px_4px_0_rgba(0,0,0,0.03)] bg-background border border-light-gray"
              : "",
          )}
        >
          <MenuGridSmall />
        </button>
        <button
          onClick={() => setShopView("six")}
          className={cn(
            "w-[42px] h-[42px] flex justify-center items-center rounded-md",
            shopView === "six"
              ? "shadow-[0_3px_4px_0_rgba(0,0,0,0.03)] bg-background border border-light-gray"
              : "",
          )}
        >
          <MenuGridBig />
        </button>
        <button
          onClick={() => setShopView("list")}
          className={cn(
            "w-[42px] h-[42px] flex justify-center items-center rounded-md",
            shopView === "list"
              ? "shadow-[0_3px_4px_0_rgba(0,0,0,0.03)] bg-background border border-light-gray"
              : "",
          )}
        >
          <MenuListSmall />
        </button>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-center gap-x-[26px] gap-y-0">
        <div className="flex items-center">
          <Label
            htmlFor="filter"
            className="lg:text-xl text-lg text-light-dark"
          >
            Sort by:
          </Label>
          <Select defaultValue="best-selling">
            <SelectTrigger
              id="filter"
              className="border-none lg:text-xl text-lg font-medium focus-visible:ring-0 [&_svg]:w-4"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="best-selling">Best selling</SelectItem>
              <SelectItem value="new-items">New Items</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <Label
            htmlFor="perpage"
            className="lg:text-xl text-lg text-light-dark"
          >
            Products per page:
          </Label>
          <Select defaultValue="10">
            <SelectTrigger
              id="perpage"
              className="border-none lg:text-xl text-lg font-medium focus-visible:ring-0 [&_svg]:w-4"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductsSortHeader;
