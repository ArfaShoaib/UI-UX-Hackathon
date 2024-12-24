import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'], // Add more subsets if needed
  weight: ['400', '700'], // Specify the weights you want (e.g., regular & bold)
  variable: '--font-montserrat', // Define a CSS variable for the font
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
