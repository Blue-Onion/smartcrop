import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/BottomBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agro Life | AI Farming Assistant",
  description:
    "Agro Life empowers farmers with AI-driven crop disease detection, weather alerts, government scheme updates, and profit calculators.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-[#F8F8F6]`}>
        <Navbar />

        {/* Sidebar only on large screens */}
        <div className="hidden xl:block">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Bottom bar only on mobile/tablet */}
        <div className="xl:hidden">
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
