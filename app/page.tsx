import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import ProblemSolution from '@/components/ProblemSolution';
import FearSection from '@/components/FearSection';
import ProfileSummary from '@/components/ProfileSummary';
import BetaRecruitment from '@/components/BetaRecruitment';
import Benefits from '@/components/Benefits';
import FinalCTA from '@/components/FinalCTA';
import ProofOfCommitment from '@/components/ProofOfCommitment';
// 👇 追加: 門番（AuthGate）をインポート
import { AuthGate } from '@/components/AuthGate';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050511] text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Social Proof */}
      <SocialProof />

      {/* 3. Concept */}
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
        {/* 👇 ここをAuthGateで囲むことで、未認証ユーザーにはロック画面を見せる */}
        <AuthGate>
          <ProofOfCommitment />
        </AuthGate>
      </div>

      {/* 9. Final CTA */}
      <FinalCTA />
      
    </main>
  );
}