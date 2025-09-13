import { Button } from "@/components/ui/button";
import { Speech } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
<section className="relative w-full h-[600px] p-20 mt-16 bg-[url('/banner.png')] bg-cover bg-center">
  {/* Overlay for blur + white tint */}
  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
  <div className="relative mx-auto mt-16 space-y-6 grid grid-cols-2 gap-2 container">
    <div className="flex flex-col gap-7 items-start">

    <div className="text-5xl md:text-6xl lg:text-7xl text-center justify-start items-start font-extrabold flex flex-col gap-2">
      <div>Smart Crop</div>
      <div className="text-green-800">Advisory</div>
    </div>
    <p className="text-muted-foreground max-w-md flex justify-start items-start">
      Improve your farming with modern technology. Get crop care, weather updates, and market prices with the help of AI.
    </p>
    <div className="flex gap-2 items-center justify-center">
      <Button size={"lg"} variant={"primary"}>
        <Speech />
        Talk to Ai
      </Button>
      <Button size={"lg"} variant={"secondary"}>Get Started Now</Button>
    </div>
    </div>
  </div>
</section>

    </div>
  );
}
