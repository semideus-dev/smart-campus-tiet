import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const appFont = localFont({
  src: "./fonts/AppFont.ttf",
  variable: "--app-font",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Smart Campus",
  description: "TIET Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(appFont.className)}>{children}</body>
    </html>
  );
}
