import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Speech } from "lucide-react";
import Image from "next/image";
import { features } from "@/lib/feature";

export default function Home() {
  return (
    <div className="">
      <section className="relative w-full h-[900px] md:h-[700px] p-20 mt-16 bg-[url('/banner.png')] bg-cover bg-center">
        {/* Overlay for blur + white tint */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        <div className="relative mx-auto max-w-6xl mt-12 space-y-6 grid grid-rows-2 md:grid-cols-2 gap-2 container">
          <div className="flex flex-col gap-7 items-start">
            <div className="text-5xl md:text-6xl lg:text-7xl text-center justify-start items-start font-extrabold flex flex-col gap-2">
              <div>Smart Crop</div>
              <div className="gradient-title">Advisory</div>
            </div>
            <p className="max-w-md text-green-900 flex justify-start items-start">
              Improve your farming with modern technology. Get crop care, weather updates, and market prices with the help of AI.
            </p>
            <div className="flex gap-2 items-center justify-center">
              <Button size={"lg"} variant={"primary"}>
                <Speech />
                Check today's weather
              </Button>
              <Button size={"lg"} variant={"secondary"}>Start Now</Button>
            </div>
          </div>
          <div className="flex items-start">
            {/* Modified grid layout with wider cards */}
            <div className="grid gap-5 grid-cols-2 w-full">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={idx} 
                    className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col h-44 w-full" // Reduced height, increased width
                  >
                    <CardHeader className="flex flex-col items-center gap-2 p-4"> {/* Reduced padding */}
                      <div className="p-2 rounded-full bg-green-700"> {/* Smaller icon container */}
                        <Icon className={`w-6 h-6 text-white`} /> {/* Smaller icon */}
                      </div>
                      <CardTitle className="text-base font-semibold text-center"> {/* Smaller font */}
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0"> {/* Reduced padding */}
                      <p className="text-xs text-gray-600 text-center"> {/* Smaller text */}
                        {feature.subtitle}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}