import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/BottomBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Crop Advisory | AI Farming Assistant",
  description:
    "Smart Crop Advisory empowers farmers with AI-driven crop disease detection, weather alerts, government scheme updates, and profit calculators.",
  keywords: [
    "smart farming",
    "AI agriculture",
    "crop advisory",
    "weather alerts for farmers",
    "government schemes",
    "farming assistant",
    "profit calculator for crops",
    "agri tech",
  ],
  authors: [{ name: "Smart Crop Advisory Team" }],
  creator: "Smart Crop Advisory",
  publisher: "Smart Crop Advisory",
  openGraph: {
    title: "Smart Crop Advisory | AI Farming Assistant",
    description:
      "AI-powered farming platform with crop scanning, weather alerts, multilingual support, and government scheme updates.",
    url: "https://your-domain.com",
    siteName: "Smart Crop Advisory",
    images: [
      {
        url: "https://your-domain.com/og-image.png", // replace with your banner
        width: 1200,
        height: 630,
        alt: "Smart Crop Advisory - AI farming assistant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Crop Advisory | AI Farming Assistant",
    description:
      "Empowering farmers with AI tools: crop disease detection, profit calculator, and weather-based alerts.",
    images: ["https://your-domain.com/og-image.png"], // same as OG image
    creator: "@yourhandle", // optional if you have X/Twitter
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#10B981", // emerald-600
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
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
