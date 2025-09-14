"use client";

import { Home, Bot, CloudSun, Camera, Calculator, Calendar, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "AI", icon: Bot, path: "/ai" },
    { name: "Weather", icon: CloudSun, path: "/weather" },
    { name: "Scan", icon: Camera, path: "/crop-scan" },
    { name: "Profit", icon: Calculator, path: "/profit-calculator" },
    { name: "Calendar", icon: Calendar, path: "/calendar" },
    { name: "Schemes", icon: FileText, path: "/schemes" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around bg-white border-t shadow-md 2xl:hidden">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.path;
        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.path}
            className={`flex flex-col items-center gap-1 py-2 px-3 text-xs transition 
              ${isActive ? "text-emerald-600 font-semibold" : "text-gray-500 hover:text-emerald-600"}`}
          >
            <Icon
              size={22}
              className={`${isActive ? "text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"}`}
            />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
