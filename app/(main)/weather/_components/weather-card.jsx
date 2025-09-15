"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Sun, Droplets, Wind } from "lucide-react";

export const WeatherCard = ({ data }) => {
  return (
    <div className="grid gap-4">
      {/* Weather Overview */}
      <Card className="shadow-lg w-full rounded-2xl">
        <CardHeader>
          <CardTitle>🌤 Weather in {data.location}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-xl font-bold">{data.temperature} – {data.condition}</p>
          <p><Droplets className="inline w-4 h-4 mr-2" /> Humidity: {data.humidity}</p>
          <p><Wind className="inline w-4 h-4 mr-2" /> Wind Speed: {data.wind_speed}</p>
          <p>🌧 Precipitation: {data.precipitation}</p>
        </CardContent>
      </Card>

      {/* Weather Alerts */}
      <Card className="shadow-lg border-l-8  rounded-2xl border-red-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" /> Weather Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {data.weather_alerts.length > 0 ? (
            data.weather_alerts.map((alert, idx) => (
              <div key={idx} className="p-2 border rounded-md bg-red-50">
                <p className="font-semibold">{alert.type}</p>
                <p className="text-sm text-gray-700">{alert.message}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No alerts currently 🚫</p>
          )}
        </CardContent>
      </Card>

      {/* Optimal Crop Conditions */}
      <Card className="shadow-lg border-l-8 rounded-2xl border-green-400">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <Sun className="w-5 h-5" /> Optimal Crop Conditions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {data.optimal_conditions.length > 0 ? (
            data.optimal_conditions.map((cond, idx) => (
              <div key={idx} className="p-2 border rounded-md bg-green-50">
                <p className="font-semibold">{cond.crop}</p>
                <p className="text-sm text-gray-700">{cond.message}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No crop suggestions 🌱</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};