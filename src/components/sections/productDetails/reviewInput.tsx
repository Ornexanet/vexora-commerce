"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/title";
import { ImageShadow } from "@/lib/icons";
import { ArrowRightIcon, Star } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ReviewInput = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
  };
  return (
    <section className="mt-25">
      <div className="container">
        <div className="grid lg:grid-cols-[679fr_921fr] gap-x-5 gap-y-12">
          <Title asChild size="52">
            <h4>Post your review</h4>
          </Title>
          <form>
            <div className="flex md:flex-row flex-col items-start gap-y-3 gap-x-17">
              <label
                htmlFor=""
                className="font-medium text-lg shrink-0 w-[150px]"
              >
                Your rating
              </label>
              <ul className="flex items-center gap-[5px] w-full">
                {[1, 2, 3, 4, 5].map((value) => (
                  <li key={value}>
                    <Star
                      size={20}
                      className={`cursor-pointer transition ${
                        value <= (hover || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleClick(value)}
                      onMouseEnter={() => setHover(value)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:flex-row flex-col items-start gap-y-3 gap-x-17 mt-9">
              <label
                htmlFor="review-img"
                className="font-medium text-lg shrink-0 w-[150px]"
              >
                Choose pictures
              </label>
              <label
                htmlFor="review-img"
                className="rounded-xl border border-dashed border-light-gray lg:px-9 px-4 py-4.5 cursor-pointer flex items-center w-full"
              >
                <input type="file" hidden id="review-img" />
                <ImageShadow />
                <span className="font-medium leading-3 inline-block ml-2.5">
                  Click or Drag & Drop
                </span>
                <span className="text-[#B0B5BB] leading-3 lg:inline-block hidden ml-5">
                  SVG,PNG, JPG (max. 800x400)
                </span>
              </label>
            </div>
            <div className="flex md:flex-row flex-col items-start gap-y-3 gap-x-17 mt-9">
              <label
                htmlFor="review-img"
                className="font-medium text-lg shrink-0 w-[150px]"
              >
                Write your review
              </label>
              <div className="w-full space-y-5">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="text-lg mb-2.5 inline-block leading-3.5"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    className="placeholder:text-[#B0B5BB] border-light-gray rounded-md px-3 py-4.5 w-full"
                    placeholder="Jason Tatum"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-lg mb-2.5 inline-block leading-3.5"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="placeholder:text-[#B0B5BB] border-light-gray rounded-md px-3 py-4.5 w-full"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="review"
                    className="text-lg mb-2.5 inline-block leading-3.5"
                  >
                    Your review
                  </label>
                  <Textarea
                    id="review"
                    className="placeholder:text-[#B0B5BB] border-light-gray rounded-md px-3 py-4.5 min-h-[150px] w-full"
                    placeholder="Write here..."
                  />
                </div>
                <Button className="w-full mt-2.5">
                  Submit <ArrowRightIcon />
                </Button>
                <p className="text-light-dark text-sm">
                  By submitting you agree to the{" "}
                  <Link href={"#"} className="underline underline-offset-2">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href={"#"} className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewInput;
