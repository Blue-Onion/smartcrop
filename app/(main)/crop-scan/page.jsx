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
            Crop Health Scanner
          </h2>
          <p className="text-muted-foreground max-w-2xl sm:text-xs md:text-lg text-center">
            Take photos of your crops to identify diseases and pests. Get instant treatment recommendations.
          </p>
        </div>

        <div className="w-full">
          <Card className="w-full p-5">
            <CardHeader>
              <CardTitle className="text-2xl">Crop Health Scanner</CardTitle>
            </CardHeader>
            <CardContent className="border-2 border-dotted rounded-md border-gray-300 h-[400px] md:h-[500px]">
              <div className="flex flex-col justify-center items-center h-full w-full">
                {!previewUrl ? (
                  <>
                    <div className="flex flex-col gap-3 items-center text-center">
                      <CameraIcon className="text-emerald-500 h-16 w-16" />
                      <p className="text-muted-foreground sm:text-xs md:text-lg">
                        Take photos of your crops from your phone to identify diseases and pests
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 mt-5">
                      {/* Hidden file input */}
                      <Input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <Button
                        variant="primary"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="mr-1" />
                        Upload photo
                      </Button>

                      <Button variant="secondary">
                        <CameraIcon className="mr-1" />
                        Take photo
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col justify-between items-center h-full w-full">
                    {/* Change photo button */}
                    <div className="w-full flex justify-end">
                      <Input
                        ref={changePhotoRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => changePhotoRef.current?.click()}
                      >
                        <RefreshCw className="mr-1 h-4 w-4" />
                        Change Photo
                      </Button>
                    </div>

                    {/* Image fills parent */}
                    <div className="relative w-full flex-1 my-3">
                      <Image
                        src={previewUrl}
                        alt="Crop preview"
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>

                    {/* Full-width check button */}
                    <Button
                      variant="primary"
                      className="w-full my-2"
                      onClick={handleCheckDiseases}
                    >
                      Check for Diseases
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
