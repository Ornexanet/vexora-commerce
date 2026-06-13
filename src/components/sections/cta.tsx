import React from "react";
import Title from "../ui/title";
import { Button } from "../ui/button";
import Link from "next/link";
import { HeadsetIcon } from "lucide-react";

const Cta = () => {
  return (
    <section className="container lg:mt-37.5 md:mt-25 mt-20">
      <div className="rounded-[20px] bg-[#eef4ff] flex md:flex-row flex-col-reverse gap-x-10 md:py-24 py-18 xl:px-[136px] lg:px-10 px-5">
        <div className="text-center flex flex-col justify-center items-center w-full">
          <span>
            <HeadsetIcon size={60} />
          </span>
          <Title className="mt-5">Still have questions?</Title>
          <p className="text-lg font-semibold mt-3 max-w-[600px]">
            Our amazing customer service team is available 24/7 to help you with
            any additional questions or concerns.
          </p>
          <Button asChild className="mt-8">
            <Link href={"/contact"}>Support Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
