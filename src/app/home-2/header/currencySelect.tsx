import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "@/lib/icons";

const countryList = [
  {
    label: "USD $",
    value: "us",
    flag: "/images/flags/united-states.png",
  },
  {
    label: "CAD $",
    value: "canada",
    flag: "/images/flags/canada.png",
  },
  {
    label: "EUR €",
    value: "france",
    flag: "/images/flags/france.png",
  },
  {
    label: "HKD $",
    value: "hong-kong",
    flag: "/images/flags/hong-kong.png",
  },
  {
    label: "JPY ¥",
    value: "japan",
    flag: "/images/flags/japan.png",
  },
  {
    label: "GBP £",
    value: "united-kingdom",
    flag: "/images/flags/united-kingdom.png",
  },
];

const CurrencySelect = () => {
  return (
    <Select>
      <SelectTrigger className="gap-1 border-none md:text-lg font-medium focus-visible:ring-0 data-[size=default]:h-auto p-0 text-start">
        <Globe className="md:size-6 size-5 [&>path]:stroke-3" />
        <SelectValue placeholder="USD $" />
      </SelectTrigger>
      <SelectContent>
        {countryList.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CurrencySelect;
