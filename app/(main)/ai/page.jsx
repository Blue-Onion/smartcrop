"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CameraIcon, Upload, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ChatPage from "./_compnents/chatPlace";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInputRef = useRef(null);
  const changePhotoRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(file); // preview image
      });
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleCheckDiseases = () => {
    alert("Checking crop for diseases...");
  };

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
          <ChatPage/>
        </div>
      </div>
    </div>
  );
};

export default Page;
