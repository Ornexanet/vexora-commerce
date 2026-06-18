import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/title";
import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-[15px] xl:px-12 lg:px-8 md:px-6 px-4 py-12.5">
      <Title size="60" className="font-bold leading-[130%]">
        Kontakta oss
      </Title>
      <p className="mt-5 text-xl leading-[180%] text-light-dark">
        Har du frågor eller synpunkter? Kontakta oss så hjälper vi dig gärna.

      </p>
      <form className="space-y-5 mt-15">
        <div className="grid xl:grid-cols-2 gap-x-4 gap-y-5">
          <Input
            placeholder="Ditt namn"
            className="h-15 bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
          <Input
            type="email"
            placeholder="Din e-postadress"
            className="h-15 bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
        </div>
        <div>
          <Input
            type="Telefonnummer"
            placeholder="Din telefonnummer"
            className="h-15 bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
        </div>
        <div>
          <Textarea
            placeholder="Skriv ditt meddelande"
            className="min-h-[148px] bg-background border-l-light-gray px-5 text-lg rounded-lg placeholder:text-light-dark"
          />
        </div>
        <Button className="mt-5">Skicka meddelande</Button>
      </form>
    </div>
  );
};

export default ContactForm;
