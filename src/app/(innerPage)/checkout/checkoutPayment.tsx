import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Link from "next/link";

const CheckoutPayment = () => {
  return (
    <div className="bg-[#F5F5F5] sm:p-10 p-7 rounded-xl">
      <div className="border border-[#999796] sm:p-7.5 p-5 rounded-lg">
        <p className="bg-primary text-white lg:py-[15px] py-3 lg:text-2xl sm:text-xl text-lg lg:leading-[125%] font-semibold text-center rounded-md">
          Orderöversikt
        </p>
        <div className="overflow-x-auto">
          <div className="mt-7.5  min-w-[350px]">
            <div className="flex justify-between border-b-[1.5px] border-b-[#999796] pb-5">
              <p className="lg:text-2xl sm:text-xl text-lg lg:leading-[125%] font-semibold text-secondary-foreground">
                Produkt
              </p>
              <p className="lg:text-2xl sm:text-xl text-lg lg:leading-[125%] font-semibold text-secondary-foreground">
                Delsumma
              </p>
            </div>

            <div className="mt-7.5 flex flex-col gap-5 border-b-[1.5px] border-b-[#999796] pb-7.5">
              <div className="flex justify-between">
                <div className="flex items-center gap-5">
                  <Image
                    width={70}
                    height={70}
                    src={"/images/bestProducts/camera-1.png"}
                    alt="img"
                    className="bg-white max-h-[70px] object-contain"
                  />
                  <div>
                    <p className="text-secondary-foreground lg:text-xl sm:text-lg text-base font-medium">
                      Go360 4Pro
                    </p>
                    <span className="text-base text-secondary-foreground">
                      Antal: 2
                    </span>
                  </div>
                </div>
                <p className="text-secondary-foreground lg:text-xl sm:text-lg text-base font-semibold lg:leading-[150%] mt-2">
                  $350.00
                </p>
              </div>
            </div>

            <div className="flex justify-between border-b-[1.5px] border-b-[#999796] pb-5 mt-7.5">
              <p className="lg:text-xl text-lg lg:leading-[150%] font-medium text-secondary-foreground">
                Delsumma
              </p>
              <p className="lg:text-xl text-lg lg:leading-[150%] font-medium text-secondary-foreground">
                $1000.00
              </p>
            </div>

            <div className="flex justify-between items-center border-b-[1.5px] border-b-[#999796] pb-5 mt-7.5">
              <p className="lg:text-xl text-lg lg:leading-[150%] font-medium text-secondary-foreground">
                Frakt
              </p>
              <RadioGroup
                name="shipping_method"
                defaultValue="0"
                className="gap-2.5 justify-end"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="0"
                    id="free-shipping"
                    aria-label="radio"
                    className="border-light-dark text-transparent "
                  />
                  <Label
                    htmlFor="free-shipping"
                    className="text-gray-1-foreground text-base"
                  >
                    Fri frakt
                  </Label>
                </div>
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem
                    value="10"
                    id="fat-rate"
                    aria-label="radio"
                    className="border-light-dark text-transparent"
                  />
                  <Label
                    htmlFor="fat-rate"
                    className="text-gray-1-foreground text-base"
                  >
                    Fast frakt $10.00
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between mt-7.5">
              <p className="text-xl leading-[150%] font-medium text-secondary-foreground">
                Totalt
              </p>
              <p className="text-xl leading-[150%] font-medium text-secondary-foreground">
                $1025.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <RadioGroup
          name="payment_method"
          defaultValue="bank-transfer"
          className="gap-y-5"
        >
          <div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="bank-transfer"
                id="bank-transfer"
                aria-label="radio"
                className="border-light-dark text-transparent"
              />
              <Label
                htmlFor="bank-transfer"
                className="text-secondary-foreground text-base"
              >
                Direkt banköverföring
              </Label>
            </div>
            <p className="text-gray-1-foreground mt-3">
              Betala direkt till vårt bankkonto. Använd ditt ordernummer som betalningsreferens. Din beställning skickas först när betalningen har registrerats på vårt konto.

            </p>
          </div>
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem
              value="check payments"
              id="check-payment"
              aria-label="radio"
              className="border-light-dark text-transparent"
            />
            <Label
              htmlFor="check-payment"
              className="text-secondary-foreground text-base"
            >
              Checkbetalning
            </Label>
          </div>
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem
              value="cash-on-delivery"
              id="cash-on-delivery"
              aria-label="radio"
              className="border-light-dark text-transparent"
            />
            <Label
              htmlFor="cash-on-delivery"
              className="text-secondary-foreground text-base"
            >
              Betalning vid leverans
            </Label>
          </div>
          <div className="flex items-center space-x-2 ">
            <RadioGroupItem
              value="paypal"
              id="paypal"
              aria-label="radio"
              className="border-light-dark text-transparent"
            />
            <Label
              htmlFor="paypal"
              className="text-secondary-foreground text-base"
            >
              PayPal
            </Label>
          </div>
        </RadioGroup>

        <div className="flex items-center gap-2.5 mt-10">
          <Checkbox
            id="terms"
            name="terms_agreement"
            required
            className="rounded-sm [&_svg]:size-4 size-5 border-light-dark"
          />
          <Label
            htmlFor="terms"
            className="lg:text-lg text-base font-normal text-secondary-foreground"
          >
            Jag har läst ochgodkänner webbplatsens{" "}
            <Link href={"/returer-och-aterbetalningar"} className="underline">
              Villkor
            </Link>
            <span className="text-primary-foreground">*</span>{" "}
          </Label>
        </div>

        <Button
          type="submit"
          className="lg:py-3 w-full mt-10 lg:leading-[166%] lg:text-lg"
        >
          Lägg order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPayment;
