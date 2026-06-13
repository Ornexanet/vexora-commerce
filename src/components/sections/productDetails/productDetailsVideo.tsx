import React from "react";

const ProductDetailsVideo = () => {
  return (
    <div className="container py-25">
      <div className="rounded-[15px] bg-[#C0C0C033] relative overflow-hidden aspect-video w-full max-h-[690px]">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src="/images/home-2/watch-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ProductDetailsVideo;
