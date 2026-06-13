import React from "react";
import RegisterForm from "./registerForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Register",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};
const Register = () => {
  return (
    <main>
      <div className="my-5 grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
        <div className="container">
          <div className="xl:ml-20 w-full">
            <RegisterForm />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden lg:block hidden">
          <div
            style={{ backgroundImage: "url('/images/login-bg.png')" }}
            className="bg-cover bg-center h-[948px] w-full rounded-xl"
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Register;
