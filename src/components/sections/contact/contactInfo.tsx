import Title from "@/components/ui/title";
import { LucideMessagesSquare, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-[15px] xl:px-12 lg:px-8 md:px-6 px-4 py-12.5">
      <Title size="60" className="font-bold leading-[130%]">
        Kontakta oss
      </Title>
      <p className="mt-5 text-xl leading-[180%] text-light-dark">
        Kontakta oss via telefon, e-post eller genom att besöka vårt kontor.
      </p>
      <div className="mt-12.5 space-y-8">
        <div className="flex items-center gap-4">
          <div className="shrink-0 size-17 flex items-center justify-center bg-background border border-light-gray rounded-full text-blue">
            <MapPin size={32} strokeWidth={1.5} />
          </div>
          <div>
            <strong className="text-lg leading-[180%] block">
              Stockholm, Sverige
            </strong>
            <p className="mt-1 text-lg">Stockholm, Sverige</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="shrink-0 size-17 flex items-center justify-center bg-background border border-light-gray rounded-full text-blue">
            <Mail size={32} strokeWidth={1.5} />
          </div>
          <div>
            <strong className="text-lg leading-[180%] block">E-post</strong>
            <p className="mt-1 text-lg ">
              <a
                href="mailto:info@shop.ornexa.net"
                className=" hover:text-blue transition-all duration-500"
              >
                info@shop.ornexa.net
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="shrink-0 size-17 flex items-center justify-center bg-background border border-light-gray rounded-full text-blue">
            <LucideMessagesSquare size={32} strokeWidth={1.5} />
          </div>
          <div>
            <strong className="text-lg leading-[180%] block">
              Support
            </strong>
            <p className="mt-1 text-lg ">
              <a
                href="mailto:support@Vexora.com"
                className=" hover:text-blue transition-all duration-500"
              >
                support@shop.ornexa.net
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="shrink-0 size-17 flex items-center justify-center bg-background border border-light-gray rounded-full text-blue">
            <Phone size={32} strokeWidth={1.5} />
          </div>
          <div>
            <strong className="text-lg leading-[180%] block">Telefon</strong>
            <p className="mt-1 text-lg ">
              <a
                href="tal:+8355621423567"
                className=" hover:text-blue transition-all duration-500"
              >
                +83556 214 23567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
