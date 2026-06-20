import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/contextApi/providers";
import { Toaster } from "@/components/ui/sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vexora",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
    <body className={`${plusJakartaSans.variable} antialiased`}>
      {children}
    </body>
  </html>

  );
}
