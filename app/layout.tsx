import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saffron Hearth — A Modern Indian Kitchen, Bengaluru",
  description:
    "Charcoal, slow-cooked dals and dum biryani in the heart of Indiranagar. Explore the menu and reserve a table.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
