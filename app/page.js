import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudSun } from "lucide-react";
import Link from "next/link";
import { features } from "@/lib/feature";

export default function Home() {
  return (
    <div className="">
      <section className="relative w-full h-auto md:h-[700px] 2xl:h-[750px] px-6 md:px-20 py-16 mt-16 bg-[url('/banner.png')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

        <div className="relative mx-auto max-w-7xl mt-8 grid grid-cols-1 2xl:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-6 items-start text-center md:text-left">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl  font-extrabold flex md:flex-col gap-2">
              <h2>Smart Crop</h2>
              <h2 className="gradient-title">Advisory</h2>
            </div>
            <p className="max-w-xl text-emerald-900 text-sm sm:text-base">
              Improve your farming with modern technology. Get crop care, weather updates, and market prices with the help of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
              <Button size={"lg"} variant={"primary"} className="w-full sm:w-auto">
                <CloudSun className="mr-2" />
                Check today's weather
              </Button>
              <Button size={"lg"} variant={"secondary"} className="w-full sm:w-auto">
                Start Now
              </Button>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Link href={feature.link} key={idx}>
                    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col h-40 sm:h-44 w-full">
                      <CardHeader className="flex flex-col items-center gap-2 p-3">
                        <div className="p-2 rounded-full bg-emerald-700">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <CardTitle className="text-sm sm:text-base font-semibold text-center">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-3 pb-4">
                        <p className="text-xs sm:text-sm text-gray-600 text-center">
                          {feature.subtitle}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
