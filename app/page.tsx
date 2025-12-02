import LandingTop from '@/components/LandingTop';
import GlobalEcosystem from '@/components/GlobalEcosystem';
import ProblemSolution from '@/components/ProblemSolution';
import RoadmapCTA from '@/components/RoadmapCTA';

// 信頼性証明と社会実装フェーズのコンポーネントをインポート
import ArchitectProfile from '@/components/ArchitectProfile';
import BetaRecruitment from '@/components/BetaRecruitment';
import TransparencySection from '@/components/TransparencySection';
import PolicySection from '@/components/PolicySection';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      
      {/* 1. トップセクション / ヒーロー */}
      <LandingTop />
      
      {/* 2. 既存コンテンツセクション */}
      <GlobalEcosystem />
      <ProblemSolution />
      
      {/* 3. CTA（市民先行登録） - フッター直前のセクション */}
      <RoadmapCTA />
      
      {/* ===== 信頼性証明と社会実装セクション（Public Dashboardの核） ===== */}
      
      {/* 4. βテスター募集要項の組み込み */}
      <BetaRecruitment /> 

      {/* 5. Architectプロフィールの組み込み (専門性・信頼性の証明) */}
      <ArchitectProfile />

      {/* 政策提言セクションの組み込み */}
      <PolicySection />

      {/* 6. 透明性レポートの組み込み (監査・技術的健全性の証明) */}
      <TransparencySection />

    </main>
  );
}