import { Header } from "@/components/Header";
import { FloatingBricks } from "@/components/FloatingBricks";
import { MainCard } from "@/components/MainCard";
import { TokenomicsCard } from "@/components/TokenomicsCard";
import { RoadmapCard } from "@/components/RoadmapCard";
import { Statistics } from "@/components/Statistics";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-300 via-pink-500 to-purple-600">
      <FloatingBricks />
      
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <Header />
        <MainCard />
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <TokenomicsCard />
          <RoadmapCard />
        </div>

        <Statistics />
      </div>

      <footer className="bg-purple-900 text-white text-center py-4 mt-12">
        <p className="text-sm">This is not financial advice. 1 $WALL = 1 $WALL. To the moon! 🚀</p>
      </footer>
    </main>
  );
}