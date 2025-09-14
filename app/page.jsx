import { Button } from "@/components/ui/button";

import { CloudSun, MessageCircle } from "lucide-react";
import Link from "next/link";
import { features } from "@/lib/feature";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { stats } from "@/lib/stats";
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
      <section className="p-10 space-y-4">
        <div className="mx-auto gap-8 flex flex-col max-w-7xl mt-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Complete Farming Solution
            </h3>
            <p className="text-muted-foreground">
              Enhance your farming with modern AI technology. All solutions in one place for better agricultural management.
            </p>
          </div>
          <div className=" grid grid-cols-1 2xl:grid-cols-2 gap-8">
            <Link href="/ai">
              <Card className={"shadow-md hover:shadow-lg transition-all p-8"}>
                <CardHeader>
                  <CardTitle className={"flex  items-center justify-start text-xl sm:text-2xl "}>
                    <MessageCircle className="mr-2 text-emerald-800" />
                    AI Assistant Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className={"py-2 flex flex-col gap-2 justify-center items-center px-1 rounded-lg bg-[#F0EDE6]"}>
                  <p className="text-muted-foreground">
                    Click to access full AI agricultural assistant
                  </p>
                  <Button variant={"primary"}>
                    Open AI Chat
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link href="/schemes">
              <Card className={"shadow-md hover:shadow-lg transition-all p-8"}>
                <CardHeader>
                  <CardTitle className={"flex  items-center justify-start text-xl sm:text-2xl "}>
                    <MessageCircle className="mr-2 text-emerald-800" />
                    Government Schemes Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className={"py-2 flex flex-col gap-2 justify-center items-center px-1 rounded-lg bg-[#F0EDE6]"}>
                  <p className="text-muted-foreground">
                    Discover eligible government schemes
                  </p>
                  <Button variant={"secondary"}>
                    Explore schemes
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      <section className="p-10 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white space-y-4">
        <div className="mx-auto gap-8 flex flex-col max-w-7xl mt-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Empowering Indian Farmers
            </h3>
            <p className="">
              Join thousands of farmers who are already benefiting from our AI-powered agricultural solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={idx}
                  className="bg-[#3A7B65] text-white shadow-md rounded-2xl flex flex-col items-center p-6 hover:shadow-lg transition-all duration-200 border-0"
                >
                  <CardHeader className="flex flex-col items-center gap-2 p-0">
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <Icon className={`text-${stat.color} w-6 h-6`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-center mt-2">
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-1">
                    <p className="text-sm text-center ">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="p-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Transform Your Farming?
            </h3>
            <p className="text-emerald-700 max-w-xl">
              Join the agricultural revolution with AI-powered insights, weather alerts, and expert guidance in your local language.
            </p>
          </div>
          <div className="w-fit gap-4 flex items-center justify-center h-16">
            <Link href={"/ai"}>
              <Button className={"w-full py-6 px-8 shadow-md"} variant={"primary"}>Start AI Chat</Button>
            </Link>
            <Link href={"/schemes"}>
              <Button className={"w-full py-6 px-8 shadow-md"} variant={"secondary"}>Explore Schemes</Button>
            </Link>

          </div>
        </div>

      </section>
       <section className="p-10 bg-gradient-to-r from-[#235F4B] to-[#278767] text-white space-y-4">
        <footer className=" text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Smart Crop Advisory</h2>
          <p className="text-sm">
            Empowering farmers with AI-driven agricultural solutions for better yields and sustainable farming practices.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Features</h3>
          <ul className="text-sm space-y-1">
            <li>AI Crop Disease Detection</li>
            <li>Weather-based Alerts</li>
            <li>Multilingual Voice Support</li>
            <li>Government Schemes Advisory</li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="text-sm space-y-1">
            <li>24/7 Helpline: 1800-123-FARM</li>
            <li>SMS Support: Send HELP to 56677</li>
            <li>WhatsApp: +91-98765-43210</li>
            <li>Email: support@smartcrop.in</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/80">
        © 2024 Smart Crop Advisory. Made with ❤️ for Indian Farmers.
      </div>
    </footer>
      </section>
    </div>
  );
}
