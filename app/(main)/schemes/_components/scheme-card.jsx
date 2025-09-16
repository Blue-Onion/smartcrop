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
import { Globe, CalendarDays, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const SchemeCard = ({ scheme }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="w-full rounded-lg border-l-4 border-emerald-700 shadow-sm">
      <CardHeader className="pb-1 space-y-1">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-sm font-semibold leading-snug line-clamp-2">
            {scheme.name}
          </CardTitle>
          <div className="flex flex-col items-end gap-0.5 shrink-0">
            <Badge
              variant={scheme.status === "Active" ? "default" : "secondary"}
              className="rounded-full text-[10px] px-1.5 py-0"
            >
              {scheme.status}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full text-[10px] px-1.5 py-0"
            >
              {scheme.category}
            </Badge>
          </div>
        </div>

        <CardDescription className="text-xs line-clamp-2">
          {scheme.description}
        </CardDescription>

        <p className="text-sm font-semibold text-green-700">
          ₹ {scheme.amount}
        </p>
      </CardHeader>

      <CardContent className="pt-0 flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 text-gray-600 text-[11px]">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" /> {scheme.duration}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="h-3 w-3" /> {scheme.state}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" /> {scheme.ministry}
          </span>
        </div>

        {expanded && (
          <div className="text-xs">
            <p className="font-medium mb-1">Eligibility:</p>
            <div className="flex flex-wrap gap-1">
              {scheme.eligibility.map((req, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="rounded-md text-[10px] px-1.5 py-0"
                >
                  {req}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-1 mt-1">
          <Link href={scheme.applyLink} className="flex-1">
            <Button size="sm" variant="primary" className="w-full text-xs h-7">
              Apply
            </Button>
          </Link>
          <Link href={scheme.detailLink} className="flex-1">
            <Button size="sm" variant="secondary" className="w-full text-xs h-7">
              Details
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchemeCard;
