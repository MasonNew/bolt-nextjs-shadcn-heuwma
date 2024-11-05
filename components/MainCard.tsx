"use client";

import { Card } from "@/components/ui/card";
import Script from "next/script";

export function MainCard() {
  return (
    <Card className="bg-white/95 backdrop-blur-sm p-6 mb-8 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Current Progress</h2>
          <div className="bg-green-100 rounded-md p-4">
            <p className="text-green-700 font-semibold">Current Wall Height: 40.00m</p>
          </div>
          <div className="text-3xl font-bold text-purple-800">
            Market Cap: $940,006,859,054
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <blockquote className="imgur-embed-pub h-full" lang="en" data-id="a/5XPfZV9">
            <a href="//imgur.com/a/5XPfZV9"></a>
          </blockquote>
          <Script src="//s.imgur.com/min/embed.js" strategy="lazyOnload" />
        </div>
      </div>
    </Card>
  );
}