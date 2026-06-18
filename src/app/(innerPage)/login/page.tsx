import React from "react";
import LoginForm from "./loginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logga in | Ornexa Shop",
  description:
    "Logga in på ditt Ornexa Shop-konto för att hantera beställningar, sparade produkter och dina kontouppgifter.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://shop.ornexa.net/login",
  },
};


const Login = () => {
  const loginSchema = {
   "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Logga in",
  "url": "https://shop.ornexa.net/login",
  "description": "Logga in på ditt Ornexa Shop-konto för att hantera beställningar, sparade produkter och dina kontouppgifter."
}

  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(loginSchema),
  }}
/>

      <div className="my-5 grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
        <div className="container">
          <div className="xl:ml-20 w-full">
            <LoginForm />
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

export default Login;
