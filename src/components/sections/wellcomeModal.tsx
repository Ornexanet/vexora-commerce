"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import Title from "../ui/title";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { InfoIcon, XIcon } from "lucide-react";

const WellcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem("welcomeModalClosed");
    if (!isClosed) {
      setOpen(true);
    }
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      sessionStorage.setItem("welcomeModalClosed", "true");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent
        showCloseButton={false}
        className="rounded-xl p-0 flex flex-col md:flex-row justify-between border-none xl:max-w-[978px] sm:max-w-[calc(100%-8rem)] max-h-[calc(100vh-15rem)] sm:max-h-[calc(100vh-10rem)] overflow-y-auto gap-0"
      >
        <DialogClose className="size-10 flex items-center justify-center border border-light-gray rounded-full absolute right-2.5 top-2.5 text-light-dark">
          <XIcon />
        </DialogClose>
        <div className="md:max-w-[501px] w-full">
          <Image
            width={501}
            height={515}
            sizes="100vw"
            src="/images/wellcome-img.png"
            alt="img"
            className="w-full h-full rounded-xl md:rounded-l-xl"
          />
        </div>
        <div className="pr-5.5 pl-6 sm:py-[73px] py-5 md:max-w-[542px]">
          <DialogHeader className="sm:text-center">
            <DialogTitle>
              <Title asChild size="28" className="font-light">
                <p>
                  Join Vexora & Get <b className="font-bold">10% Off</b> Your
                  First Order!
                </p>
              </Title>
            </DialogTitle>
            <DialogDescription className="text-light-dark font-light mt-2.5">
              Subscribe to our newsletter and know about exclusive deals, new
              tech drops, and member-only offers.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-7.5">
            <Input
              placeholder="example@email.com"
              className="h-12.5 border-light-gray text-base placeholder:text-[#B0B5BB]"
            />
            <div className="flex items-center gap-2.5 mt-3.5">
              <Checkbox id="terms" className="size-6" />
              <label
                htmlFor="terms"
                className="font-medium text-[15px] leading-4 text-light-dark"
              >
                I agree to the{" "}
                <Link href={"#"} className="underline underline-offset-4">
                  Privacy Policy.
                </Link>
              </label>
            </div>
          </div>
          <div className="mt-7.5">
            <Button className="w-full">Subscribe & Unlock 10% Off</Button>
            <p className="mt-2.5 text-sm text-light-dark flex items-start leading-normal gap-1.5">
              <InfoIcon size={16} className="mt-1 shrink-0" /> We respect your
              privacy. No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WellcomeModal;
