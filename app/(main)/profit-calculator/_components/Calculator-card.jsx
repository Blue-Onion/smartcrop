"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/use-Fetch";
import { getCropData } from "@/actions/profit-calculator";
import CalculationCard from "./Calculation-Card";

const CalculatorCard = () => {
    const [crop, setCrop] = useState("");
    const [land, setLand] = useState("");
    const [showCard, setShowCard] = useState(false);

    const {
        fn: fetchCropData,
        data: cropData,
        loading: isLoading,
        errors: error,
    } = useFetch(getCropData)
    const handleCalculate = async () => {
        const formData = new FormData();
        formData.append("cropType", crop);
        formData.append("landAcre", land);
        await fetchCropData(formData);
    };
    useEffect(() => {
        if (!isLoading && cropData?.success === true) {
            setShowCard(true);

        }
    }, [cropData])

    return (
        <div className="w-full mx-auto p-6 space-y-4">


            <div className="flex gap-4 w-full flex-col md:flex-row">
                {/* Crop Selection */}
                <div className="w-full md:w-1/2 space-y-2">
                    <Label htmlFor="crop">Select Crop</Label>
                    <Select onValueChange={(value) => setCrop(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose a crop" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="rice">Rice</SelectItem>
                            <SelectItem value="wheat">Wheat</SelectItem>
                            <SelectItem value="sugarcane">Sugarcane</SelectItem>
                            <SelectItem value="cotton">Cotton</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Land Size */}
                <div className="w-full md:w-1/2 space-y-2">
                    <Label htmlFor="land">Land Size (in acres)</Label>
                    <Input
                        id="land"
                        type="number"
                        placeholder="Enter land area in acres"
                        value={land}
                        onChange={(e) => setLand(e.target.value)}
                    />
                </div>
            </div>

            {/* Button */}
            <div className="w-full">
                <Button variant="primary" disabled={!crop || !land} className="w-full" onClick={handleCalculate}>
                    Calculate
                </Button>
            </div>
            {showCard && <CalculationCard cropData={cropData.data} />}

        </div>
    );
};

export default CalculatorCard;
