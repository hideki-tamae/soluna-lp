    // app/page.tsx
import LandingTop from "@/components/LandingTop";
import GlobalEcosystem from "@/components/GlobalEcosystem";
import ProblemSolution from "@/components/ProblemSolution";
import RoadmapCTA from "@/components/RoadmapCTA"; // ← 追加

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <LandingTop />
      <GlobalEcosystem />
      <ProblemSolution />
      
      {/* ↓↓↓ 最後に追加 ↓↓↓ */}
      <RoadmapCTA />
      
    </main>
  );
}