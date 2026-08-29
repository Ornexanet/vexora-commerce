import Image from "next/image";
import React from "react";

const ProductPreviewImages = () => {
  return (
    <div className="grid grid-cols-2 gap-[5px] rounded-[15px] overflow-hidden lg:sticky top-0">
      <div>
        <Image
          width={524}
          height={600}
          sizes="100vw"
          src="/images-optimized/product-details-two/preview-img-1.webp"
          alt="Product Image 1"
        />
      </div>
      <div>
        <Image
          width={524}
          height={600}
          sizes="100vw"
          src="/images-optimized/product-details-two/preview-img-2.webp"
          alt="Product Image 1"
        />
      </div>
      <div>
        <Image
          width={524}
          height={600}
          sizes="100vw"
          src="/images-optimized/product-details-two/preview-img-3.webp"
          alt="Product Image 1"
        />
      </div>
      <div>
        <Image
          width={524}
          height={600}
          sizes="100vw"
          src="/images-optimized/product-details-two/preview-img-4.webp"
          alt="Product Image 1"
        />
      </div>
    </div>
  );
};

export default ProductPreviewImages;
