"use client"

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import React, { useState } from "react"; // Import useState from React
import NavMobile from "@/components/Navmobile";



const inter = Inter({
  subsets: ["latin"],
});

// Correctly define the showNav and setShowNav using useState
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNav, setShowNav] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-y-scroll overflow-x-hidden`}
      >
        <NavMobile showNav={showNav} closeNav={() => setShowNav(false)} />
      <Navbar openNav={() => setShowNav(true)} />
      
   
        {children}

      </body>
   
    </html>
  );
}
