"use client";

import { Home, Bot, CloudSun, Camera, Calculator, Calendar, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: <Home size={22} />, path: "/" },
    { name: "AI", icon: <Bot size={22} />, path: "/ai" },
    { name: "Weather", icon: <CloudSun size={22} />, path: "/weather" },
    { name: "Scan", icon: <Camera size={22} />, path: "/crop-scan" },
    { name: "Profit", icon: <Calculator size={22} />, path: "/profit-calculator" },
    { name: "Calendar", icon: <Calendar size={22} />, path: "/calendar" },
    { name: "Schemes", icon: <FileText size={22} />, path: "/schemes" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-white border-t shadow-md 2xl:hidden">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={`flex flex-col items-center gap-1 py-2 px-3 text-xs transition 
              ${isActive ? "text-emerald-600 font-semibold" : "text-gray-500 hover:text-emerald-600"}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
