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
    name: "Drönare",
    subcategories: [],
  },
  {
    id: 2,
    name: "Kamera",
    subcategories: [],
  },
  {
    id: 3,
    name: "Hörlurar",
    subcategories: [
      {
        id: 31,
        name: "Brusreducering",
      },
      {
        id: 32,
        name: "Over-ear",
      },
      {
        id: 33,
        name: "Sport och träning",
      },
      {
        id: 34,
        name: "Bluetooth-hörlurar",
      },
    ],
  },
  {
    id: 4,
    name: "Bärbar teknik",
    subcategories: [
      {
        id: 35,
        name: "Brusreducering",
      },
      {
        id: 36,
        name: "Over-ear",
      },
      {
        id: 37,
        name: "Sport och träning",
      },
      {
        id: 38,
        name: "Bluetooth-hörlurar",
      },
    ],
  },
  {
    id: 5,
    name: "Virtuell verklighet",
    subcategories: [],
  },
  {
    id: 6,
    name: "Teknikprylar",
    subcategories: [
      {
        id: 66,
        name: "Brusreducering",
      },
      {
        id: 77,
        name: "Over-ear",
      },
      {
        id: 68,
        name: "Sport och träning",
      },
      {
        id: 69,
        name: "Bluetooth-hörlurar",
      },
    ],
  },
  {
    id: 7,
    name: "Högtalare",
    subcategories: [],
  },
  {
    id: 8,
    name: "Tillbehör",
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

const ProductsFilterSidebar = ({
  heading = "Filtrera produkter",
}: {
  heading?: string;
}) => {

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
      <h2 className="sr-only">{heading}</h2>
      <button className="md:text-xl text-lg font-medium flex items-center gap-2.5">
        <Filter />
        Rensa filter
      </button>
      {/* filter by category */}
      <div>
        <Title asChild size="28" className="font-extrabold mb-[30px]">
          <h3>Produktkategorier</h3>
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
  type="button"
  onClick={() => handleExpendCategories(id)}
  className="w-6 h-6 flex justify-center items-center"
  aria-label={`Visa underkategorier för ${name}`}
>
  <Plus aria-hidden="true" />
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
          <h3>Prisfilter</h3>
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
          aria-label="Prisintervall"
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
          <h3>Varumärken</h3>
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
          Visa fler
        </Button>
      </div>
      {/* filter by rating */}
      <div>
        <Title asChild size="28" className="font-extrabold mb-[30px]">
          <h3>Genomsnittligt betyg</h3>
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
