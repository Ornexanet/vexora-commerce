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
      <head>
  <link
    rel="preload"
    as="image"
    href="/images/hero/bg-1.webp"
    fetchPriority="high"
    type="image/webp"
  />
</head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Providers>
          {children}
          <Toaster richColors position="bottom-right" />
         {/* <WellcomeModal /> */}
        </Providers>
      </body>
    </html>
  );
}
