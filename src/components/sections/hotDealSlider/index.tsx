import Countdown from "@/components/ui/countdown";
import Title from "@/components/ui/title";
import Slider from "./slider";

const HotDealSlider = () => {
  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container flex lg:flex-row flex-col lg:items-center justify-between gap-x-3 gap-y-5">
        <div>
          <Title size="36">Hot Deals</Title>
          <p className="text-lg mt-2 leading-[1.28]">
            Find something that hits the right note
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-3">
          <strong className="text-lg">Hurry up! Deal ends in</strong>
          <Countdown />
        </div>
      </div>
      <div className="container mt-12.5">
        <Slider />
      </div>
    </section>
  );
};

export default HotDealSlider;
