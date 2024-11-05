"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Coins } from "lucide-react";

export function TokenomicsCard() {
  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
        <Coins className="h-5 w-5" />
        Tokenomics
      </h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <Badge variant="secondary">Total Supply</Badge>
          <span>1,776,000,000,000 $WALL</span>
        </li>
        <li className="flex items-center gap-2">
          <Badge variant="secondary">Locked Liquidity</Badge>
          <span>Until Wall Completion</span>
        </li>
        <li className="flex items-center gap-2">
          <Badge variant="secondary">Governance</Badge>
          <span>Make Crypto Great Again DAO</span>
        </li>
      </ul>
    </Card>
  );
}