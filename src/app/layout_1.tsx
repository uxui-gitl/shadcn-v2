import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Godrej Infotech",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className="dark">
    <html lang="en" className={`${inter.className} dark`}>
      <body className={`dark:bg-[#1d162b] dark:text-white`}>{children}</body>
    </html>
  );
}
