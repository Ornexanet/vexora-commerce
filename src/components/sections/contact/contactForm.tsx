import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/title";
import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-[15px] xl:px-12 lg:px-8 md:px-6 px-4 py-12.5">
      <Title size="60" className="font-bold leading-[130%]">
        Let’s Talk
      </Title>
      <p className="mt-5 text-xl leading-[180%] text-light-dark">
        We’re here to help—reach out with any questions or feedback.
      </p>
      <form className="space-y-5 mt-15">
        <div className="grid xl:grid-cols-2 gap-x-4 gap-y-5">
          <Input
            placeholder="Your Name"
            className="h-15 bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="h-15 bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Your Number"
            className="h-15 bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
        </div>
        <div>
          <Textarea
            placeholder="Write Massage"
            className="min-h-[148px] bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
        </div>
        <Button className="mt-5">Send Massage</Button>
      </form>
    </div>
  );
};

export default ContactForm;
