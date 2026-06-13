import { ArrowLeft, ArrowRight } from "@/lib/icons";

const Pagination = () => {
  return (
    <div className="flex items-center gap-0.5">
      <button className="size-8 rounded-md hover:bg-[#F1F1F4] hover:text-foreground font-medium text-lg flex justify-center items-center text-light-dark">
        <ArrowLeft className="size-4" />
      </button>
      <button className="size-8 rounded-md hover:bg-[#F1F1F4] hover:text-foreground font-medium text-lg flex justify-center items-center text-light-dark">
        1
      </button>
      <button className="size-8 rounded-md hover:bg-[#F1F1F4] hover:text-foreground font-medium text-lg flex justify-center items-center text-light-dark">
        2
      </button>
      <button className="size-8 rounded-md hover:bg-[#F1F1F4] hover:text-foreground font-medium text-lg flex justify-center items-center text-light-dark">
        3
      </button>
      <button className="size-8 rounded-md hover:bg-[#F1F1F4] hover:text-foreground font-medium text-lg flex justify-center items-center text-light-dark">
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
};

export default Pagination;
