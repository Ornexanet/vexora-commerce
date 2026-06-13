import Title from "@/components/ui/title";
import { LucideMessagesSquare, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-[15px] xl:px-12 lg:px-8 md:px-6 px-4 py-12.5">
      <Title size="60" className="font-bold leading-[130%]">
        Get in Touch
      </Title>
      <p className="mt-5 text-xl leading-[180%] text-light-dark">
        Reach us directly through phone, email, or visit one of our locations.
      </p>
      <div className="mt-12.5 space-y-8">
        <div className="flex items-center gap-4">
          <div className="shrink-0 size-17 flex items-center justify-center bg-background border border-light-gray rounded-full text-blue">
            <MapPin size={32} strokeWidth={1.5} />
          </div>
          <div>
            <strong className="text-lg leading-[180%] block">
              Head Office
            </strong>
            <p className="mt-1 text-lg">689 5th Ave, New York, NY 10022, USA</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="shrink-0 size-17 flex items-center justify-center bg-background border border-light-gray rounded-full text-blue">
            <Mail size={32} strokeWidth={1.5} />
          </div>
          <div>
            <strong className="text-lg leading-[180%] block">Our Email</strong>
            <p className="mt-1 text-lg ">
              <a
                href="mailto:info@Vexora.com"
                className=" hover:text-blue transition-all duration-500"
              >
                info@Vexora.com
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
              Support Email
            </strong>
            <p className="mt-1 text-lg ">
              <a
                href="mailto:support@Vexora.com"
                className=" hover:text-blue transition-all duration-500"
              >
                support@Vexora.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="shrink-0 size-17 flex items-center justify-center bg-background border border-light-gray rounded-full text-blue">
            <Phone size={32} strokeWidth={1.5} />
          </div>
          <div>
            <strong className="text-lg leading-[180%] block">Phone Call</strong>
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
