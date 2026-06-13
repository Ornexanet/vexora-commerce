"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Title from "@/components/ui/title";
import { Filter, Minus, Plus } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const productCategories = [
  {
    id: 1,
    name: "Drone",
    subcategories: [],
  },
  {
    id: 2,
    name: "Camera",
    subcategories: [],
  },
  {
    id: 3,
    name: "Headphones",
    subcategories: [
      {
        id: 31,
        name: "Noise Canceling",
      },
      {
        id: 32,
        name: "Over-Ear",
      },
      {
        id: 33,
        name: "Sports & Fitness",
      },
      {
        id: 34,
        name: "Bluetooth Headphones",
      },
    ],
  },
  {
    id: 4,
    name: "Wearable",
    subcategories: [
      {
        id: 35,
        name: "Noise Canceling",
      },
      {
        id: 36,
        name: "Over-Ear",
      },
      {
        id: 37,
        name: "Sports & Fitness",
      },
      {
        id: 38,
        name: "Bluetooth Headphones",
      },
    ],
  },
  {
    id: 5,
    name: "Virtual Reality",
    subcategories: [],
  },
  {
    id: 6,
    name: "Gadgets",
    subcategories: [
      {
        id: 66,
        name: "Noise Canceling",
      },
      {
        id: 77,
        name: "Over-Ear",
      },
      {
        id: 68,
        name: "Sports & Fitness",
      },
      {
        id: 69,
        name: "Bluetooth Headphones",
      },
    ],
  },
  {
    id: 7,
    name: "Speakers",
    subcategories: [],
  },
  {
    id: 8,
    name: "Accessories",
    subcategories: [],
  },
];

const brands = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "DJI",
  },
  {
    id: 3,
    name: "JBL",
  },
  {
    id: 4,
    name: "GoPro",
  },
  {
    id: 5,
    name: "Insta360",
  },
  {
    id: 6,
    name: "Bowers & Wilkins",
  },
  {
    id: 7,
    name: "Xiaomi",
  },
  {
    id: 8,
    name: "CMF by Nothing",
  },
];

const ratings = [
  {
    id: 1,
    star: 5,
    availableProducts: 15,
  },
  {
    id: 2,
    star: 4,
    availableProducts: 8,
  },
  {
    id: 3,
    star: 3,
    availableProducts: null,
  },
  {
    id: 4,
    star: 2,
    availableProducts: null,
  },
  {
    id: 5,
    star: 1,
    availableProducts: null,
  },
];

const ProductsFilterSidebar = () => {
  const [value, setValue] = useState([200, 800]);
  const [expendCategories, setExpendCategories] = useState<number[]>([]);
  const handleExpendCategories = (id: number) => {
    if (!expendCategories.includes(id)) {
      setExpendCategories((prev) => [...prev, id]);
    } else {
      const x = expendCategories.filter((cat) => cat !== id);
      setExpendCategories(x);
    }
  };
  //   console.log(expendCategories);
  return (
    <aside className="2xl:max-w-[378px] max-w-[310px] space-y-[50px] mt-3">
      <button className="md:text-xl text-lg font-medium flex items-center gap-2.5">
        <Filter />
        Clear Filters
      </button>
      {/* filter by category */}
      <div>
        <Title asChild size="28" className="font-extrabold mb-[30px]">
          <h4>Product Categories</h4>
        </Title>
        <ul className="space-y-[15px]">
          {productCategories.map(({ id, name, subcategories }) => (
            <li key={id}>
              <div className="flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                  <Checkbox id={`${id}${name}`} className="size-[26px]" />
                  <Label htmlFor={`${id}${name}`}>{name}</Label>
                </div>
                {subcategories.length ? (
                  <button
                    onClick={() => handleExpendCategories(id)}
                    className="w-6 h-6 flex justify-center items-center"
                  >
                    <Plus />
                  </button>
                ) : null}
              </div>
              <AnimatePresence initial={false}>
                {subcategories.length && expendCategories.includes(id) ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <ul className="pl-9 pt-[15px] space-y-[15px]">
                      {subcategories.map(({ id, name }) => (
                        <li key={id} className="flex items-center gap-2.5">
                          <Checkbox
                            id={`${id}${name}`}
                            className="size-[26px]"
                          />
                          <Label htmlFor={`${id}${name}`}>{name}</Label>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      {/* price range slider and input */}
      <div>
        <Title asChild size="28" className="font-extrabold mb-[30px]">
          <h4>Price Filter</h4>
        </Title>
        <div className="flex items-center gap-[15px] mb-6 ">
          <Input
            type="number"
            value={value[0]}
            onChange={(e) => {
              const newValue = parseInt(e.target.value) || 0;
              setValue([newValue, value[1]]);
            }}
            className="px-2.5 border-light-gray rounded-sm text-light-dark text-lg h-10"
          />
          <span className="flex items-center justify-center w-6 h-6 text-[#B0B5BB]">
            <Minus />
          </span>
          <Input
            type="number"
            value={value[1]}
            onChange={(e) => {
              const newValue = parseInt(e.target.value) || 0;
              setValue([value[0], newValue]);
            }}
            className="px-2.5 border-light-gray rounded-sm text-light-dark text-lg h-10"
          />
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={1}
          className="w-full"
          aria-label="Price Range"
        />
        <Button
          variant={"outline"}
          className="mt-9 w-full gap-[15px] text-light-dark border-light-dark"
        >
          <Filter />
          Filter
        </Button>
      </div>
      {/* filter by Brands */}
      <div>
        <Title asChild size="28" className="font-extrabold mb-[30px]">
          <h4>Brands</h4>
        </Title>
        <ul className="space-y-[15px]">
          {brands.map(({ id, name }) => (
            <li key={id} className="flex items-center gap-2.5">
              <Checkbox id={`${id}${name}`} className="size-[26px]" />
              <Label htmlFor={`${id}${name}`}>{name}</Label>
            </li>
          ))}
        </ul>
        <Button variant={"link"} className="mt-5 text-light-dark font-medium">
          See more
        </Button>
      </div>
      {/* filter by rating */}
      <div>
        <Title asChild size="28" className="font-extrabold mb-[30px]">
          <h4>Average Ratings</h4>
        </Title>
        <ul className="space-y-[15px]">
          {ratings.map(({ id, availableProducts, star }) => (
            <li key={id} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox id={`${id}${star}`} className="size-[26px]" />
                <Label htmlFor={`${id}${star}`} className="flex gap-[5px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className={cn(
                        "",
                        index + 1 <= star
                          ? "fill-blue text-blue"
                          : "fill-[#B0B5BB] text-[#B0B5BB]",
                      )}
                    />
                  ))}
                </Label>
              </div>
              <p className="text-lg text-light-dark">
                {availableProducts ? <span>({availableProducts})</span> : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ProductsFilterSidebar;
