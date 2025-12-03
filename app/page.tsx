import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import InversionSection from '@/components/InversionSection'; // ★ここを変更 (ProblemSolution -> InversionSection)
import FearSection from '@/components/FearSection';
import ProfileSummary from '@/components/ProfileSummary';
import BetaRecruitment from '@/components/BetaRecruitment';
import Benefits from '@/components/Benefits';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050511] text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Social Proof */}
      <SocialProof />

      {/* 3. Concept (世界は「反転」する。セクション) */}
      <InversionSection /> {/* ★ここを変更 (ProblemSolution -> InversionSection) */}

      {/* 4. Fear (Policyリンク付き) */}
      <FearSection />

      {/* 5. Profile (Profileリンク付き) */}
      <ProfileSummary />

      {/* 6. Recruitment */}
      <BetaRecruitment />

      {/* 7. Benefits */}
      <Benefits />

      {/* 8. Final CTA */}
      <FinalCTA />
       
      {/* 9. Footerは削除 (layout.tsxに任せる) */}
       
    </main>
  );
} 