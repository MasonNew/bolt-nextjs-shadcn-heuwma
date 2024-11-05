"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export function RoadmapCard() {
  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
        <Rocket className="h-5 w-5" />
        Roadmap
      </h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <Badge>Phase 1</Badge>
          <span>Launch on DEXs</span>
        </li>
        <li className="flex items-center gap-2">
          <Badge>Phase 2</Badge>
          <span>Build Virtual Wall in Metaverse</span>
        </li>
        <li className="flex items-center gap-2">
          <Badge>Phase 3</Badge>
          <span>Wall Reaches Moon</span>
        </li>
      </ul>
    </Card>
  );
}