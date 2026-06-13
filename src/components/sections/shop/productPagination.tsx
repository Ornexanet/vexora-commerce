import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "@/lib/icons";
import { Label } from "@radix-ui/react-label";

const ProductPagination = () => {
  return (
    <div className="px-5 pt-[14px] pb-[14px] mt-[98px] flex justify-between items-center flex-wrap gap-5">
      <div className="flex items-center">
        <Label htmlFor="perpage-2" className="text-lg text-light-dark">
          Show
        </Label>
        <Select defaultValue="10">
          <SelectTrigger
            id="perpage-2"
            className="border-none text-lg font-medium focus-visible:ring-0 [&_svg]:w-4"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-lg text-light-dark">per page</span>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-light-dark tracking-[-0.18px] font-medium text-lg leading-[14px] sm:block hidden">
          1-10 of 52
        </p>
        <div className="flex items-center gap-0.5">
          <button className="w-[30px] h-[30px] flex items-center justify-center text-light-dark hover:text-foreground hover:bg-[#F1F1F4] transition-all duration-500">
            <ArrowLeft />
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center text-light-dark hover:text-foreground hover:bg-[#F1F1F4] transition-all duration-500">
            1
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center bg-[#F1F1F4] hover:text-foreground hover:bg-[#F1F1F4] transition-all duration-500">
            2
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center text-light-dark hover:text-foreground hover:bg-[#F1F1F4] transition-all duration-500">
            3
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center text-light-dark hover:text-foreground hover:bg-[#F1F1F4] transition-all duration-500">
            4
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center text-light-dark hover:text-foreground hover:bg-[#F1F1F4] transition-all duration-500">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPagination;
