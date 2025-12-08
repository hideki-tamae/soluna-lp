import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import ProblemSolution from '@/components/ProblemSolution'; // 👈 ここを確実にファイル名と合わせる
import FearSection from '@/components/FearSection';
import ProfileSummary from '@/components/ProfileSummary';
import BetaRecruitment from '@/components/BetaRecruitment';
import Benefits from '@/components/Benefits';
import FinalCTA from '@/components/FinalCTA';
import ProofOfCommitment from '@/components/ProofOfCommitment'; // 🆕 AIオラクル

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050511] text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Social Proof */}
      <SocialProof />

      {/* 3. Concept (ProblemSolutionに戻しました) */}
      <ProblemSolution />

      {/* 4. Fear */}
      <FearSection />

      {/* 5. Profile */}
      <ProfileSummary />

      {/* 6. Recruitment */}
      <BetaRecruitment />

      {/* 7. Benefits */}
      <Benefits />

      {/* 8. Proof of Commitment (AI Oracle) */}
      <div className="py-10 relative z-20">
        <ProofOfCommitment />
      </div>

      {/* 9. Final CTA */}
      <FinalCTA />
      
    </main>
  );
}