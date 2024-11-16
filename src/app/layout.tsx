// AUTH
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";

// UI
import "./globals.css";
import { cn } from "@/lib/utils";

// NEXT
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
    <ClerkProvider>
      <html lang="en">
        <body className={cn(appFont.className)}>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>
              <div className="flex h-screen w-screen items-center justify-center">
                <SignIn routing="hash" />
              </div>
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
