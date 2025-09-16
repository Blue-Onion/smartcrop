"use client";

import React from "react";

export default function ResultCard() {
const cropData = {
  status: "Nutrient Deficiency Detected",
  confidence: "87%",
  treatment:
    "Your crop shows yellowing leaves, which indicates a nitrogen deficiency. Apply a nitrogen-rich fertilizer evenly around the base and water lightly.",
  prevention_measures: [
    "Conduct soil tests regularly",
    "Maintain balanced fertilization",
    "Use organic compost periodically",
    "Follow a proper irrigation schedule",
  ],
};

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-md bg-white border border-green-100 rounded-xl shadow-sm overflow-hidden">
        {/* Status Header with colored accent */}
        <div className="bg-green-50 px-4 py-3 border-b border-green-100">
          <div className="flex items-center justify-between">
            <h2 className="text-green-700 text-lg font-semibold flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {cropData.status}
            </h2>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {cropData.confidence} confidence
            </span>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-4 space-y-4">
          {/* Treatment Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1.5">Treatment</h3>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <p className="text-blue-800 text-sm">{cropData.treatment}</p>
            </div>
          </div>
          
          {/* Prevention Measures */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1.5">Prevention Measures</h3>
            <ul className="space-y-2">
              {cropData.prevention_measures.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}