"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Upload, RefreshCw, RotateCcw, Camera, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const fileInputRef = useRef(null);
  const rescanRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(file);
      });
      setShowResult(true);
    }
  };

  const handleRescan = () => {
    rescanRef.current?.click();
    setShowResult(false);
  };

  const handleScanAnother = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setShowResult(false);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  // Mock crop data
  const cropData = {
    status: "Healthy Crop",
    confidence: "94%",
    treatment: "Your crop is healthy! No treatment is needed.",
    prevention_measures: [
      "Continue regular monitoring",
      "Maintain balanced fertilization",
      "Follow a proper irrigation schedule",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white p-4 md:p-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-800 mb-2">
          Crop Health Scanner
        </h2>
        <p className="text-sm text-center text-emerald-600 mb-6">
          Upload a photo to analyze your crop's health
        </p>

        {!showResult ? (
          <div className="bg-white rounded-xl shadow-sm p-5 border border-emerald-100">
            <div 
              className="border-2 border-dashed border-emerald-200 rounded-lg h-64 flex flex-col justify-center items-center gap-4 p-4 bg-emerald-50/50 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="p-3 bg-emerald-100 rounded-full">
                <Upload className="text-emerald-600 h-6 w-6" />
              </div>
              <p className="text-center text-emerald-700 font-medium">
                Tap to upload a photo
              </p>
              <p className="text-center text-sm text-emerald-500">
                Supports JPG, PNG, or WEBP
              </p>
              <Button
                size="sm"
                className="mt-2 bg-emerald-600 hover:bg-emerald-700"
              >
                <Camera className="mr-2 h-4 w-4" />
                Select Image
              </Button>
            </div>
            <Input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-emerald-100">
            {/* Preview image with close button */}
            {previewUrl && (
              <div className="relative">
                <div className="h-48 w-full relative">
                  <Image
                    src={previewUrl}
                    alt="Crop Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={handleScanAnother}
                  className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full shadow-sm hover:bg-white"
                >
                  <X className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            )}

            {/* Result card - compact version */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-emerald-700">Analysis Result</h3>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                  {cropData.confidence} confidence
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-start gap-2">
                  <div className={`p-1.5 rounded-full mt-0.5 ${cropData.status === "Healthy Crop" ? 'bg-emerald-100' : 'bg-amber-100'}`}>
                    <div className={`h-2 w-2 rounded-full ${cropData.status === "Healthy Crop" ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{cropData.status}</p>
                    <p className="text-sm text-gray-600 mt-1">{cropData.treatment}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Prevention Measures</h4>
                <ul className="space-y-1.5">
                  {cropData.prevention_measures.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className="px-4 pb-4 pt-2 flex gap-2">
              <Input
                ref={rescanRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <Button
                variant="outline"
                className="flex-1 h-10 text-sm"
                onClick={handleRescan}
              >
                <RefreshCw className="mr-2 h-3.5 w-3.5" />
                Rescan
              </Button>
              <Button 
                variant="secondary" 
                className="flex-1 h-10 text-sm bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={handleScanAnother}
              >
                <RotateCcw className="mr-2 h-3.5 w-3.5" />
                New Scan
              </Button>
            </div>
          </div>
        )}

        {/* Tips for better scanning */}
        {!showResult && (
          <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="text-sm font-medium text-amber-800 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Tips for better results
            </h3>
            <ul className="text-xs text-amber-700 space-y-1">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 mr-2"></span>
                <span>Take photos in good lighting conditions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 mr-2"></span>
                <span>Focus on affected leaves or areas</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 mr-2"></span>
                <span>Capture both close-up and overall plant views</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;