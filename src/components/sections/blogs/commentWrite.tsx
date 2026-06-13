import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/title";
import React from "react";

const CommentWrite = () => {
  return (
    <div className="max-w-[870px] mx-auto">
      <Title asChild size="36">
        <h3>Write a Comment</h3>
      </Title>
      <div className="mt-10">
        <form>
          <div className="grid md:grid-cols-2 gap-7.5">
            <Input
              placeholder="Your Name"
              className="px-5 py-2.5 bg-[#F5F5F7] font-medium text-lg"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="px-5 py-2.5 bg-[#F5F5F7] font-medium text-lg"
            />
          </div>
          <div className="mt-7.5">
            <Textarea
              placeholder="Write your Comment"
              className="px-5 py-2.5 min-h-50 bg-[#F5F5F7] font-medium text-lg"
            />
          </div>
          <div className="mt-8 flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentWrite;
