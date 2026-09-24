import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = localFont({
  src: "../../public/fonts/Fraunces-Variable.woff2",
  variable: "--font-fraunces",
  weight: "100 900",
  display: "swap",
});

const manrope = localFont({
  src: "../../public/fonts/Manrope-Variable.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunspire Energy | Solar Installation in Central Texas",
  description:
    "Sunspire Energy designs, installs, and maintains residential and commercial solar and battery storage across Central Texas. Fixed quotes, in house crews, honest numbers.",
  keywords: [
    "solar installation",
    "residential solar",
    "commercial solar",
    "battery storage",
    "Central Texas solar",
    "Austin solar company",
  ],
  icons: {
    icon: "/sun-fav.svg",
  },
  openGraph: {
    title: "Sunspire Energy",
    description:
      "Honest solar for Central Texas homes and businesses. Fixed quotes, in house crews, systems we would put on our own roofs.",
    siteName: "Sunspire Energy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
