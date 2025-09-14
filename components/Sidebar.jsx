"use client";

import { Home, Bot, CloudSun, Camera, Calculator, Calendar, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "AI Advisor", icon: <Bot size={20} />, path: "/ai" },
    { name: "Weather", icon: <CloudSun size={20} />, path: "/weather" },
    { name: "Crop Scan", icon: <Camera size={20} />, path: "/crop-scan" },
    { name: "Calculator", icon: <Calculator size={20} />, path: "/profit-calculator" },
    { name: "Calendar", icon: <Calendar size={20} />, path: "/calendar" },
    { name: "Schemes", icon: <FileText size={20} />, path: "/schemes" },
  ];

  return (
    <div className="fixed top-1/4 left-4 z-50 flex flex-col gap-4 p-3 bg-white shadow-xl rounded-lg">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={index}
            href={item.path}
            className={`flex flex-col items-center gap-2 p-2 rounded-lg transition w-20
              ${isActive ? "bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-500 text-white shadow-md" : "hover:bg-green-100 text-gray-700"}`}
          >
            <span>{item.icon}</span>
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
