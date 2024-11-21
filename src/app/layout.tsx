"use client";

import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/app/ui/sidenav";
import Navbar from "@/app/ui/header";
import { useBoolean } from "@/hooks/use-boolean";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarOpen = useBoolean();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen">
          <Navbar setIsSidebarOpen={sidebarOpen.onToggle} />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar isSidebarOpen={sidebarOpen.value} setIsSidebarOpen={sidebarOpen.onFalse} />
            <main className="flex-1 p-4 overflow-y-auto w-screen">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
