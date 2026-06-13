import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CheckoutForm = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="flex flex-col gap-7.5">
          <div className="flex sm:flex-row flex-col justify-between gap-x-[22px] gap-y-7.5">
            <label htmlFor="first_name" className="w-full text-lg">
              First name<span className="text-red-400">*</span>
              <Input
                className={"py-3 mt-2"}
                type={"text"}
                name={"first_name"}
                id="first_name"
                required
              />
            </label>
            <label htmlFor="last_name" className="w-full text-lg">
              Last name<span className="text-red-400">*</span>
              <Input
                className={"py-3 mt-2"}
                type={"text"}
                name={"last_name"}
                id="last_name"
                required
              />
            </label>
          </div>
          <div className="flex sm:flex-row flex-col justify-between gap-x-[22px] gap-y-7.5">
            <label htmlFor="email" className="w-full text-lg">
              Email address<span className="text-red-400">*</span>
              <Input
                className={"py-3 mt-2"}
                type={"email"}
                name={"email"}
                id="email"
                required
              />
            </label>
            <label htmlFor="phone" className="w-full text-lg">
              Phone<span className="text-red-400">*</span>
              <Input
                className={"py-3 mt-2"}
                type={"number"}
                name={"phone"}
                id="phone"
                required
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="country"
              className="text-gray-1-foreground text-base"
            >
              Country/Region<span className="text-red-400">*</span>
            </label>
            <Select name="country" required>
              <SelectTrigger
                id="country"
                className="data-[size=default]:h-12.5 w-full py-2.5 mt-2.5"
              >
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent className="py-[14px] bg-background ">
                <SelectItem value="united-states" className="cursor-pointer">
                  United States
                </SelectItem>
                <SelectItem value="united-kingdom" className="cursor-pointer">
                  United Kingdom
                </SelectItem>
                <SelectItem value="bangladesh" className="cursor-pointer">
                  Bangladesh
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="town" className="w-full text-lg">
              Town / City<span className="text-red-400">*</span>
              <Input
                className={"py-3 mt-2"}
                type={"text"}
                name={"town"}
                id="town"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="street" className="w-full text-lg">
              Street address<span className="text-red-400">*</span>
              <Input
                className={"py-3 mt-2"}
                type={"text"}
                name={"street"}
                id="street"
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="zip" className="w-full text-lg">
              ZIP Code<span className="text-red-400">*</span>
              <Input
                className={"py-3 mt-2"}
                type={"text"}
                name={"zip"}
                id="zip"
                required
              />
            </label>
          </div>
          <label htmlFor="notes" className="w-full text-lg">
            Additional information (optional)
            <Textarea
              className={"py-3 mt-2 min-h-[140px]"}
              name={"notes"}
              id="notes"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
