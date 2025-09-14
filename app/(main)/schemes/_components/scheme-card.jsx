"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, CalendarDays, Users } from "lucide-react";

const SchemeCard = ({ scheme }) => {
  return (
    <Card className="w-full rounded-2xl border border-l-8 border-emerald-800 shadow-sm hover:shadow-md transition">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{scheme.name}</CardTitle>
          <div className="flex flex-col md:flex-row gap-2">
            <Badge
              variant={scheme.status === "Active" ? "default" : "secondary"}
              className="rounded-full"
            >
              {scheme.status}
            </Badge>
            <Badge variant="outline" className="rounded-full">
              {scheme.category}
            </Badge>
          </div>
        </div>
        <CardDescription className="mt-2 text-gray-600">
          {scheme.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 text-sm">
        <p className="text-lg font-medium text-green-700">
          ₹ {scheme.amount}
        </p>

        <div className="flex flex-wrap gap-4 text-gray-600">
          <span className="flex items-center gap-1 text-sm">
            <CalendarDays className="h-4 w-4" /> {scheme.duration}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <Globe className="h-4 w-4" /> {scheme.state}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <Users className="h-4 w-4" /> {scheme.ministry}
          </span>
        </div>

        <div>
          <p className="font-medium">Eligibility:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {scheme.eligibility.map((req, i) => (
              <Badge key={i} variant="outline" className="rounded-md">
                {req}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Link href={scheme.applyLink} className="w-full">
            <Button variant="primary" className="w-full">
              Apply Now
            </Button>
          </Link>
          <Link href={scheme.detailLink} className="w-full">
            <Button variant="secondary" className="w-full">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;
