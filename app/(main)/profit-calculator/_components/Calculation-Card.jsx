"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

const CalculationCard = ({ cropData }) => {
  if (!cropData) return null;

  const { revenue, totalCost, profitMargin, netSale } = cropData;

  const isProfit = netSale >= 0;

  return (
    <Card className="w-full rounded-xl shadow-md border border-l-8 border-emerald-800 text-gray-900">
      <CardContent
        className="
          p-6 
          grid 
          grid-cols-1 gap-6 
          sm:grid-cols-2
        "
      >
        {/* Total Cost */}
        <div className="flex flex-col gap-2">
          <span className="text-lg md:text-xl font-extrabold text-gray-700">
            Total Cost
          </span>
          <span className="text-base md:text-lg font-bold">
            ₹{Number(totalCost).toLocaleString()}
          </span>
        </div>

        {/* Total Revenue */}
        <div className="flex flex-col items-start sm:items-end gap-2">
          <span className="text-lg md:text-xl font-extrabold text-gray-700">
            Total Revenue
          </span>
          <span className="text-base md:text-lg font-bold">
            ₹{Number(revenue).toLocaleString()}
          </span>
        </div>

        {/* Expected Profit */}
        <div className="flex flex-col border-t border-orange-300 pt-4">
          <span className="text-sm md:text-base text-gray-700">
            Expected Profit
          </span>
          <span
            className={`text-base md:text-lg font-bold flex items-center gap-1 ${
              isProfit ? "text-green-700" : "text-red-700"
            }`}
          >
            ₹{Number(netSale).toLocaleString()}
            {isProfit ? (
              <TrendingUp size={18} />
            ) : (
              <TrendingDown size={18} />
            )}
          </span>
        </div>

        {/* Profit Margin */}
        <div className="flex flex-col items-start sm:items-end border-t border-orange-300 pt-4">
          <span className="text-sm md:text-base text-gray-700">
            Profit Margin
          </span>
          <span
            className={`text-base md:text-lg font-bold ${
              isProfit ? "text-green-700" : "text-red-700"
            }`}
          >
            {profitMargin}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculationCard;
