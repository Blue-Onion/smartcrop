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
    <div className="overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="relative w-full h-auto min-h-[600px] md:min-h-[700px] 2xl:min-h-[750px] px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 mt-16 bg-[url('/banner.png')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

        <div className="relative mx-auto max-w-7xl mt-4 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start text-center lg:text-left">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold flex flex-col gap-1 md:gap-2">
              <h2>Smart Crop</h2>
              <h2 className="gradient-title">Advisory</h2>
            </div>
            <p className="max-w-xl text-emerald-900 text-sm sm:text-base md:text-lg">
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
          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-2xl lg:max-w-none">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Link href={feature.link} key={idx}>
                    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex flex-col h-36 sm:h-40 md:h-44 w-full">
                      <CardHeader className="flex flex-col items-center gap-2 p-3 md:p-4">
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
      
      {/* Preview Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 lg:py-16 space-y-6 md:space-y-8">
        <div className="mx-auto gap-6 md:gap-8 flex flex-col max-w-7xl">
          <div className="text-center space-y-2 md:space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Complete Farming Solution
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Enhance your farming with modern AI technology. All solutions in one place for better agricultural management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Link href="/ai">
              <Card className={"shadow-md hover:shadow-lg transition-all p-6 md:p-8"}>
                <CardHeader className="p-2 md:p-4">
                  <CardTitle className={"flex items-center justify-start text-lg sm:text-xl md:text-2xl"}>
                    <MessageCircle className="mr-2 text-emerald-800 h-5 w-5 md:h-6 md:w-6" />
                    AI Assistant Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className={"py-2 md:py-4 flex flex-col gap-2 md:gap-3 justify-center items-center px-1 rounded-lg bg-[#F0EDE6]"}>
                  <p className="text-muted-foreground text-sm md:text-base text-center">
                    Click to access full AI agricultural assistant
                  </p>
                  <Button variant={"primary"} className="mt-2">
                    Open AI Chat
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link href="/schemes">
              <Card className={"shadow-md hover:shadow-lg transition-all p-6 md:p-8"}>
                <CardHeader className="p-2 md:p-4">
                  <CardTitle className={"flex items-center justify-start text-lg sm:text-xl md:text-2xl"}>
                    <MessageCircle className="mr-2 text-emerald-800 h-5 w-5 md:h-6 md:w-6" />
                    Government Schemes Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className={"py-2 md:py-4 flex flex-col gap-2 md:gap-3 justify-center items-center px-1 rounded-lg bg-[#F0EDE6]"}>
                  <p className="text-muted-foreground text-sm md:text-base text-center">
                    Discover eligible government schemes
                  </p>
                  <Button variant={"secondary"} className="mt-2">
                    Explore schemes
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 lg:py-16 bg-gradient-to-r from-[#235F4B] to-[#278767] text-white space-y-6 md:space-y-8">
        <div className="mx-auto gap-6 md:gap-8 flex flex-col max-w-7xl">
          <div className="text-center space-y-2 md:space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Empowering Indian Farmers
            </h3>
            <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
              Join thousands of farmers who are already benefiting from our AI-powered agricultural solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={idx}
                  className="bg-[#3A7B65] text-white shadow-md rounded-2xl flex flex-col items-center p-4 md:p-6 hover:shadow-lg transition-all duration-200 border-0"
                >
                  <CardHeader className="flex flex-col items-center gap-2 p-0">
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-center mt-2">
                      {stat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-1">
                    <p className="text-xs md:text-sm text-center text-white/90">{stat.subtitle}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 lg:py-16">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2 md:space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Transform Your Farming?
            </h3>
            <p className="text-emerald-700 text-sm md:text-base max-w-xl">
              Join the agricultural revolution with AI-powered insights, weather alerts, and expert guidance in your local language.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto items-center justify-center">
            <Link href={"/ai"}>
              <Button className={"py-5 md:py-6 px-6 md:px-8 shadow-md w-full sm:w-auto"} variant={"primary"}>Start AI Chat</Button>
            </Link>
            <Link href={"/schemes"}>
              <Button className={"py-5 md:py-6 px-6 md:px-8 shadow-md w-full sm:w-auto"} variant={"secondary"}>Explore Schemes</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 lg:py-16 bg-gradient-to-r from-[#235F4B] to-[#278767] text-white">
        <footer className="text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* About */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl font-bold">Smart Crop Advisory</h2>
              <p className="text-sm md:text-base text-white/90">
                Empowering farmers with AI-driven agricultural solutions for better yields and sustainable farming practices.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="text-sm md:text-base space-y-1 md:space-y-2 text-white/90">
                <li>AI Crop Disease Detection</li>
                <li>Weather-based Alerts</li>
                <li>Multilingual Voice Support</li>
                <li>Government Schemes Advisory</li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="text-sm md:text-base space-y-1 md:space-y-2 text-white/90">
                <li>24/7 Helpline: 1800-123-FARM</li>
                <li>SMS Support: Send HELP to 56677</li>
                <li>WhatsApp: +91-98765-43210</li>
                <li>Email: support@smartcrop.in</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 md:mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/80">
            © 2024 Smart Crop Advisory. Made with ❤️ for Indian Farmers.
          </div>
        </footer>
      </section>
    </div>
  );
}