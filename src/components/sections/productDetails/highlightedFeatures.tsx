import { ProductType } from "@/mockData/products";

const HighlightedFeatures = ({ product }: { product: ProductType }) => {
  return (
    <div className="mt-11">
      <div className="border border-[#E0E4E9] rounded-[15px] py-7.5 pl-7.5 pr-2.5 relative">
        <span className="text-lg font-bold text-light-dark px-2 absolute -top-4 bg-background">
          Highlighted Features
        </span>
        <div className="flex gap-3 overflow-x-auto">
          {product.features?.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl py-[15px] px-3 bg-[#F5F5F7] flex items-center gap-4 min-w-fit"
            >
            {/* eslint-disable-next-line*/}
              <span className="text-2xl">✓</span>

     <div className="mt-2.5">
  <p className="font-medium text-sm">{feature.title}</p>
  <p className="text-sm text-light-dark">{feature.text}</p>
</div>



              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightedFeatures;
