"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cropCalendar = [
  { month: "January", crops: ["Wheat", "Mustard"] },
  { month: "February", crops: ["Wheat", "Potato"] },
  { month: "March", crops: ["Maize", "Sunflower"] },
  { month: "April", crops: ["Cotton", "Sugarcane"] },
  { month: "May", crops: ["Rice (nursery)", "Vegetables"] },
  { month: "June", crops: ["Rice", "Pulses"] },
  { month: "July", crops: ["Rice", "Maize"] },
  { month: "August", crops: ["Rice", "Soybean"] },
  { month: "September", crops: ["Rice", "Groundnut"] },
  { month: "October", crops: ["Wheat (sowing)", "Mustard"] },
  { month: "November", crops: ["Wheat", "Barley"] },
  { month: "December", crops: ["Wheat", "Gram"] },
]

export default function CropCalendar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold gradient-title mb-4 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
            🌱 Crop Calendar
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Plan your agricultural activities with our monthly crop calendar. 
            Know what to plant and when for optimal harvests.
          </p>
        </div>

        {/* Crop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cropCalendar.map((item, index) => (
            <Card 
              key={index} 
              className="shadow-lg rounded-2xl overflow-hidden border border-emerald-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-200 hover:scale-105 group"
            >
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-green-400 text-white pb-3">
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>{item.month}</span>
                  <span className="text-emerald-100 text-xs font-medium bg-emerald-700/30 px-2 py-1 rounded-full">
                    {item.crops.length} crops
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 bg-white">
                {/* Suggested Crop */}
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <p className="text-sm text-emerald-700 font-semibold">
                    🌟 Suggested Crop: <span className="font-bold">{item.crops[0]}</span>
                  </p>
                </div>

                {/* Crop List */}
                <ul className="space-y-2">
                  {item.crops.map((crop, i) => (
                    <li key={i} className="flex items-center py-2 border-b border-emerald-50 last:border-b-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-3 group-hover:bg-emerald-600 transition-colors"></div>
                      <span className="text-gray-700 group-hover:text-emerald-900 transition-colors">{crop}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Note: Crop timing may vary based on your specific region and climate conditions.</p>
        </div>
      </div>
    </div>
  )
}
