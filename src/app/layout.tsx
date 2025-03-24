import "./globals.css";
import Footer from "./_Components/Footer/Footer";
import Navbar from "./_Components/Navbar/Navbar";
import React from "react";
import { Geist, Geist_Mono, Libre_Baskerville, Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const LibreBaskerville=Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight:"400"
});
const PoppinsSans = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight:"400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children } : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${PoppinsSans.variable} ${LibreBaskerville.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
