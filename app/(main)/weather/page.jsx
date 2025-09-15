import { Weather } from "@/lib/weather";
import { WeatherCard } from "./_components/weather-card";


const Page = () => {
  const data=Weather;
  return (
    <div className="p-10">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="gradient-title text-3xl md:text-4xl xl:text-6xl">
           Weather & Alerts
          </h2>
          <p className="text-muted-foreground max-w-2xl sm:text-xs md:text-lg text-center">
            Get latest weather information and essential crop alerts for better farming decisions.
          </p>
        </div>

        <div className="w-full">
          <WeatherCard data={data}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
