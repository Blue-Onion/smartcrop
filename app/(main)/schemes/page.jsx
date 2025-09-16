"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { schemes } from "@/lib/scheme";
import SchemeCard from "./_components/scheme-card";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [state, setState] = useState("all-india");

  // Filter schemes
  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === "all" || scheme.category.toLowerCase() === category;
    const matchesState =
      state === "all-india" || scheme.state.toLowerCase() === state;

    return matchesSearch && matchesCategory && matchesState;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("all");
    setState("all-india");
  };

  const hasActiveFilters =
    searchTerm || category !== "all" || state !== "all-india";

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col items-center text-center mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            Government Scheme Advisory
          </h2>
        </div>

        <Card className="w-full">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="text-xl sm:text-2xl">
                Government Schemes
              </CardTitle>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="flex items-center gap-1"
                >
                  <X className="h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            {/* Search + Filters inline */}
            {/* Search + Filters inline */}
<div className="flex flex-col md:flex-row gap-3">
  {/* Search Input */}
  <div className="relative flex-1">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    <Input
      placeholder="Search by name or description..."
      className="w-full pl-10"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  {/* Selects in one line */}
  <div className="flex flex-row gap-2 w-full md:w-auto">
    {/* Category Select */}
    <Select value={category} onValueChange={setCategory}>
      <SelectTrigger className="w-1/2 md:w-40">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="financial">Financial</SelectItem>
        <SelectItem value="insurance">Insurance</SelectItem>
        <SelectItem value="technical">Technical</SelectItem>
        <SelectItem value="subsidies">Subsidies</SelectItem>
        <SelectItem value="technology">Technology</SelectItem>
      </SelectContent>
    </Select>

    {/* State Select */}
    <Select value={state} onValueChange={setState}>
      <SelectTrigger className="w-1/2 md:w-40">
        <SelectValue placeholder="State" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all-india">All India</SelectItem>
        <SelectItem value="kerala">Kerala</SelectItem>
        <SelectItem value="punjab">Punjab</SelectItem>
        <SelectItem value="maharashtra">Maharashtra</SelectItem>
        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
      </SelectContent>
    </Select>
  </div>
</div>


            {/* Results count */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                {filteredSchemes.length} scheme
                {filteredSchemes.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {/* Scheme Cards */}
            <div className="space-y-4">
              {filteredSchemes.length > 0 ? (
                filteredSchemes.map((scheme) => (
                  <SchemeCard scheme={scheme} key={scheme.id} />
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No schemes match your filters.</p>
                  {hasActiveFilters && (
                    <Button
                      variant="link"
                      onClick={clearFilters}
                      className="mt-2"
                    >
                      Clear all filters
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
