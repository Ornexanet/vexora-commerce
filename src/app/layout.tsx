import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Providers } from "@/contextApi/providers";
import { Toaster } from "@/components/ui/sonner";
import { generateOrganizationSchema } from "@/seo/schemas/organizationSchema";
import { siteConfig } from "@/seo/config/siteConfig";
import { generateWebsiteSchema } from "@/seo/schemas/websiteSchema";


const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="sv">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/bg-1.webp"
          fetchPriority="high"
          type="image/webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteSchema),
  }}
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
