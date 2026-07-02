"use client";
import {
  Cable,
  Camera,
  ChevronLeft,
  ChevronRight,
  Drone,
  Headphones,
  Speaker,
  Watch,
} from "@/lib/icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categoriesList = [
  {
  id: 1,
  title: "Mobiler",
  href: "/shop-with-sidebar?category=mobiler",
  icon: <Watch />,
},
{
  id: 2,
  title: "Hörlurar",
  href: "/shop-with-sidebar?category=headphones",
  icon: <Headphones />,
},
{
  id: 3,
  title: "Smarta klockor",
  href: "/shop-with-sidebar?category=smartWatch",
  icon: <Watch />,
},
{
  id: 4,
  title: "Tillbehör",
  href: "/shop-with-sidebar?category=accessories",
  icon: <Cable />,
},

];

const HomeCategories = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth * 0.8;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const checkScroll = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      // small epsilon to avoid floating point/rounding showing extra when at end
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    // initial check
    checkScroll();

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 prev-nav-hot-deal w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500"
            >
              <ChevronLeft />
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex justify-between gap-7.5">
              {categoriesList.map(({ icon, id, title, href }) => (
                <div key={id} className="flex flex-col items-center">
                  <Link
                    href={href}
                    className="xl:w-[220px] xl:h-[220px] lg:w-50 lg:h-50 w-40 h-40 lg:rounded-[60px] rounded-[40px] bg-[#F3F5F8] text-light-dark flex items-center justify-center lg:mb-10 mb-5 hover:text-foreground transition-all duration-500"
                  >
                    <span className="lg:[&_svg]:size-auto [&_svg]:size-20">
                      {icon}
                    </span>
                  </Link>
                  <Link
                    href={href}
                    className="font-medium lg:text-[22px] text-lg text-center hover:text-blue transition-all duration-500"
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 next-nav-hot-deal w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
