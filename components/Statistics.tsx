"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Statistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-6 bg-white/95 backdrop-blur-sm text-center">
        <h3 className="text-purple-600 font-semibold mb-2">Community</h3>
        <p className="text-2xl font-bold text-green-600">1,000,000+ HOLDERS</p>
      </Card>
      
      <Card className="p-6 bg-white/95 backdrop-blur-sm text-center">
        <h3 className="text-purple-600 font-semibold mb-2">Burned</h3>
        <p className="text-2xl font-bold text-green-600">42.0% SUPPLY</p>
      </Card>
      
      <Card className="p-6 bg-white/95 backdrop-blur-sm text-center">
        <h3 className="text-purple-600 font-semibold mb-2">Wall Progress</h3>
        <p className="text-2xl font-bold text-green-600">40% COMPLETE</p>
        <Progress value={40} className="mt-2" />
      </Card>
    </div>
  );
}