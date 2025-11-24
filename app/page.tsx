// app/page.tsx
import LandingTop from "@/components/LandingTop";
import GlobalEcosystem from "@/components/GlobalEcosystem";
import ProblemSolution from "@/components/ProblemSolution"; // ← 追加

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <LandingTop />
      <GlobalEcosystem />
      
      {/* ↓↓↓ ここに追加 ↓↓↓ */}
      <ProblemSolution />
      
    </main>
  );
}