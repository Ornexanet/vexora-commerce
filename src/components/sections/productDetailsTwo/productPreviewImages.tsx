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
          src="/images/product-details-two/preview-img-1.png"
          alt="Product Image 1"
        />
      </div>
      <div>
        <Image
          width={524}
          height={600}
          sizes="100vw"
          src="/images/product-details-two/preview-img-2.png"
          alt="Product Image 1"
        />
      </div>
      <div>
        <Image
          width={524}
          height={600}
          sizes="100vw"
          src="/images/product-details-two/preview-img-3.png"
          alt="Product Image 1"
        />
      </div>
      <div>
        <Image
          width={524}
          height={600}
          sizes="100vw"
          src="/images/product-details-two/preview-img-4.png"
          alt="Product Image 1"
        />
      </div>
    </div>
  );
};

export default ProductPreviewImages;
