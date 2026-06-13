import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { GoogleOriginalIcon, AppleOriginalIcon } from "@/lib/icons";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function LoginForm() {
  return (
    <form className="min-w-[360px] mx-auto border border-[#F1F1F4] rounded-xl p-10 space-y-7.5 max-w-[480px] shadow-[0px_3px_4px_0px_#00000008]">
      <div className="text-center">
        <h6 className="font-medium text-[22px] mb-2.5">Sign in</h6>
        <p className="text-light-dark">
          Need an account?{" "}
          <Link
            href={"/register"}
            className="text-blue hover:underline underline-offset-2"
          >
            Sign up
          </Link>
        </p>
      </div>
      <div className="flex items-center gap-2.5">
        <button className="border border-[#DBDFE9] rounded-md flex items-center justify-center gap-1 h-11 w-full text-light-dark font-medium hover:border-blue hover:text-blue transition-all duration-300">
          <GoogleOriginalIcon /> <span>Use Google</span>
        </button>
        <button className="border border-[#DBDFE9] rounded-md flex items-center justify-center gap-1 h-11 w-full text-light-dark font-medium hover:border-blue hover:text-blue transition-all duration-300">
          <AppleOriginalIcon /> <span>Use Apple</span>
        </button>
      </div>
      <div className="flex items-center justify-center gap-2">
        <span className="w-full h-px bg-light-gray block"></span>
        <span className="text-light-dark">OR</span>
        <span className="w-full h-px bg-light-gray block"></span>
      </div>
      <div>
        <label htmlFor="email" className="text-lg leading-[14px] mb-2 block">
          Email
        </label>
        <Input
          placeholder="email@email.com"
          type="email"
          id="email"
          className="bg-[#FCFCFC] placeholder:text-light-dark"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="password" className="text-lg leading-[14px] block">
            Password
          </label>
          <Link
            href={"#"}
            className="text-blue text-sm leading-[14px] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="relative">
          <Input
            placeholder="Enter Password"
            type="password"
            id="password"
            className="bg-[#FCFCFC] placeholder:text-light-dark"
          />
          <button
            aria-label="eye"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-light-dark"
          >
            <EyeIcon size={20} strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <Checkbox id="remember" className="size-5 rounded-sm [&_svg]:size-4" />
        <label htmlFor="remember" className="text-lg">
          Remember me
        </label>
      </div>
      <Button type="submit" className="w-full">
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;
