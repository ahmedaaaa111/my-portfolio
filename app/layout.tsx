import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/src/lib/fontawesome";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import MouseFollower from "@/src/components/MouseFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed El Naggar ✨ | Front-End Developer",
  description:
    "Portfolio of Ahmed El Naggar - Front-End Developer based in Prague 🇨🇿",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <MouseFollower />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}