import { Bot, ScanLine, Calculator, CalendarDays } from "lucide-react";

export const features = [
  {
    title: "AI Advisor",
    subtitle: "Ask in your own language",
    icon: Bot,
    color: "text-purple-600",
    link: "/ai",
  },
  {
    title: "Crop Scan",
    subtitle: "Detect diseases",
    icon: ScanLine,
    link: "/crop-scan",
    color: "text-green-600"
  },
  {
    title: "Profit Calculator",
    subtitle: "Calculate earnings",
    icon: Calculator,
    link: "/profit-calculator",
    color: "text-blue-600"
  },
  {
    title: "Crop Calendar",
    subtitle: "View schedule",
    icon: CalendarDays,
    link: "/calendar",
    color: "text-orange-600"
  }
];
