import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "@/lib/icons";
import ProductsFilterSidebar from "./productsFilterSidebar";

const ProductsFilterSidebarOffacnvise = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center gap-2.5 md:text-xl text-lg font-medium">
        <Filter />
        Filters
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-[420px] pt-12 pb-10 px-8 overflow-y-auto">
        <SheetHeader className="hidden ">
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <ProductsFilterSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default ProductsFilterSidebarOffacnvise;
