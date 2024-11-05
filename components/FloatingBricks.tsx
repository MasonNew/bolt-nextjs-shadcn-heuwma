"use client";

import { useEffect, useState } from "react";

interface BrickProps {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

function Brick({ left, top, delay, duration }: BrickProps) {
  return (
    <div
      className="absolute w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-400 border border-gray-500"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        transform: 'rotate(45deg)',
        animation: `pixelFloat ${duration}s infinite ease-in-out ${delay}s`,
        opacity: 0.1
      }}
    />
  );
}

export function FloatingBricks() {
  const [bricks, setBricks] = useState<BrickProps[]>([]);

  useEffect(() => {
    const newBricks = Array.from({ length: 100 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setBricks(newBricks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {bricks.map((brick, index) => (
          <Brick key={index} {...brick} />
        ))}
      </div>
    </div>
  );
}