"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Title from "@/components/ui/title";
import { Filter, Minus } from "@/lib/icons";
import { shopCategories } from "@/lib/shopFilters";
import { useShopFilters } from "@/contextApi/shopFiltersProvider";
import Link from "next/link";
import { useId, useState } from "react";

function PriceFilter() {
  const { min, max, ceiling, update } = useShopFilters();
  const [value, setValue] = useState([min, max]);
  const id = useId();
  const valid = value.every(Number.isFinite) && value[0] >= 0 && value[1] >= value[0];
  return <div>
    <Title asChild size="28" className="font-extrabold mb-[30px]"><h3>Prisfilter</h3></Title>
    <div className="flex items-center gap-[15px] mb-6">
      <Input id={id + "-min"} aria-label="Lägsta pris i kronor" type="number" min={0} value={value[0]} onChange={(event) => setValue([Number(event.target.value), value[1]])} className="px-2.5 border-light-gray rounded-sm text-light-dark text-lg h-10" />
      <span aria-hidden="true"><Minus /></span>
      <Input id={id + "-max"} aria-label="Högsta pris i kronor" type="number" min={0} value={value[1]} onChange={(event) => setValue([value[0], Number(event.target.value)])} className="px-2.5 border-light-gray rounded-sm text-light-dark text-lg h-10" />
    </div>
    <p className="text-sm mb-4">Pris i SEK</p>
    <Slider value={value.map((entry) => Math.min(Math.max(0, entry), Math.max(ceiling, 1)))} onValueChange={setValue} max={Math.max(ceiling, 1)} min={0} step={1} className="w-full" aria-label="Prisintervall" />
    {!valid && <p role="alert">Ange ett giltigt prisintervall.</p>}
    <Button type="button" variant="outline" disabled={!valid} onClick={() => update({ min: [String(value[0])], max: [String(value[1])] })} className="mt-9 w-full gap-[15px] text-light-dark border-light-dark"><Filter />Filter</Button>
  </div>;
}

export default function ProductsFilterSidebar({ heading = "Filtrera produkter" }: { heading?: string }) {
  const filters = useShopFilters();
  const id = useId();
  return <aside className="2xl:max-w-[378px] max-w-[310px] space-y-[50px] mt-3">
    <h2 className="sr-only">{heading}</h2>
    <button type="button" onClick={filters.reset} className="md:text-xl text-lg font-medium flex items-center gap-2.5"><Filter />Rensa filter</button>
    <div>
      <Title asChild size="28" className="font-extrabold mb-[30px]"><h3>Produktkategorier</h3></Title>
      <ul className="space-y-[15px]">{shopCategories.map((category) => <li key={category.key}>
        <Link href={category.href} aria-current={filters.category === category.key ? "page" : undefined} className="flex items-center gap-2.5">
          <span aria-hidden="true" className={`size-[26px] border rounded-sm ${filters.category === category.key ? "bg-blue border-blue" : "border-light-gray"}`} />
          {category.label}
        </Link>
      </li>)}</ul>
    </div>
    <PriceFilter key={`${filters.category}:${filters.min}:${filters.max}`} />
    <div>
      <Title asChild size="28" className="font-extrabold mb-[30px]"><h3>Varumärken</h3></Title>
      <ul className="space-y-[15px]">{filters.brands.map((brand, index) => <li key={brand} className="flex items-center gap-2.5">
        <Checkbox id={id + index} checked={filters.selectedBrands.includes(brand)} onCheckedChange={(checked) => filters.update({ brand: checked === true ? [...filters.selectedBrands, brand] : filters.selectedBrands.filter((entry) => entry !== brand) })} className="size-[26px]" />
        <Label htmlFor={id + index}>{brand}</Label>
      </li>)}</ul>
      {!filters.brands.length && <p>Inga varumärken finns i denna kategori.</p>}
    </div>
  </aside>;
}
