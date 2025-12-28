// app/v3/page.tsx - SOLUNA v3.0: World's Top LP Standard
// 戦略パートナー: 田前秀樹 × Claude (World's Top Minds Integrated)
// 修正: v1コンポーネント復活、コピー改善、誓いセクション軽量化

'use client';

import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

// v3専用コンポーネント群
import HeroSectionV3 from '@/components/v3/HeroSectionV3';
import SocialProofV3 from '@/components/v3/SocialProofV3';
import CaseANarrative from '@/components/v3/CaseANarrative';
import ProblemSolutionV3 from '@/components/v3/ProblemSolutionV3';
import FearSectionV3 from '@/components/v3/FearSectionV3';
import ImpactSimulator from '@/components/v3/ImpactSimulator';
import ProfileSummaryV3 from '@/components/v3/ProfileSummaryV3';
import BetaRecruitmentV3 from '@/components/v3/BetaRecruitmentV3';
import BenefitsV3 from '@/components/v3/BenefitsV3';
import ReverseGate from '@/components/v3/ReverseGate';
import ParticipationPaths from '@/components/v3/ParticipationPaths';
import FinalCTAV3 from '@/components/v3/FinalCTAV3';
import FooterSection from '@/components/v3/FooterSection';

// 既存コンポーネント
import ProofOfCommitment from '@/components/ProofOfCommitment';
import { AuthGate } from '@/components/AuthGate';

export default function HomeV3() {
  const { isConnected, isReconnecting } = useAccount();
  const [isClientReady, setIsClientReady] = useState(false);
  const [showPledge, setShowPledge] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  // ウォレット接続時の自動スクロール
  useEffect(() => {
    if (!isClientReady) return;
    if (!isConnected) return;
    if (isReconnecting) return;

    setShowPledge(true);
    
    const target = document.getElementById('proof-section');
    if (!target) return;

    const t = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 500);

    return () => window.clearTimeout(t);
  }, [isClientReady, isConnected, isReconnecting]);

  return (
    <main className="relative bg-[#010308] text-[#D4D4D8] min-h-screen font-serif antialiased overflow-x-hidden selection:bg-emerald-500/30">
      {/* Google Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;700;900&family=Inter:wght@100;400;700;900&family=Italiana&display=swap" 
        rel="stylesheet" 
      />
      
      {/* v3プレビューバッジ */}
      <div className="fixed top-4 left-4 z-50 px-3 py-1.5 bg-amber-500/90 text-black text-[10px] font-black tracking-wider uppercase rounded-full shadow-lg">
        v3.0 Preview
      </div>
      
      {/* ============================================================
          VSL構成（ジョン・ベンソン流）:
          1. Hook → HeroSectionV3
          2. Social Proof → SocialProofV3
          3. Story → CaseANarrative
          4. Problem/Solution → ProblemSolutionV3 (復活)
          5. Fear → FearSectionV3
          6. Solution → ImpactSimulator
          7. Authority → ProfileSummaryV3 (復活)
          8. Recruitment → BetaRecruitmentV3 (復活)
          9. Benefits → BenefitsV3 (復活)
          10. CTA → ReverseGate
          11. Options → ParticipationPaths
          12. Final Push → FinalCTAV3
      ============================================================ */}
      
      {/* 1. Hero: 0.5秒フック × 臨場感動画 */}
      <HeroSectionV3 />
      
      {/* 2. Social Proof: 技術基盤の信頼性 */}
      <SocialProofV3 />
      
      {/* 3. Story: 創設者のナラティブ */}
      <CaseANarrative />
      
      {/* 4. Problem/Solution: 「反転」セクション (v1から復活) */}
      <ProblemSolutionV3 />
      
      {/* 5. Fear: 行動しないことのリスク */}
      <FearSectionV3 />
      
      {/* 6. Solution: シミュレーター */}
      <ImpactSimulator />
      
      {/* 7. Authority: プロフィール (v1から復活) */}
      <ProfileSummaryV3 />
      
      {/* 8. Recruitment: βテスター募集 (v1から復活) */}
      <BetaRecruitmentV3 />
      
      {/* 9. Benefits: ベネフィット (v1から復活) */}
      <BenefitsV3 />
      
      {/* 10. Primary CTA: RE-VERSE GATE */}
      <ReverseGate />
      
      {/* 11. Options: 3つの参加パス */}
      <ParticipationPaths />
      
      {/* Web3 Commitment（ウォレット接続後のみ表示） */}
      {showPledge && (
        <div id="proof-section" className="py-10 relative z-20 flex flex-col items-center gap-12">
          <div className="text-center max-w-2xl mx-auto px-4 mb-8">
            <p className="text-white/50 text-sm mb-4">
              ウォレットが接続されました。<br />
              準備ができたら、下のボタンで記録を開始できます。
            </p>
          </div>
          {isClientReady && (
            <AuthGate>
              <ProofOfCommitment />
            </AuthGate>
          )}
        </div>
      )}
      
      {/* 12. Final CTA: 最終プッシュ */}
      <FinalCTAV3 />
      
      {/* Footer */}
      <FooterSection />
    </main>
  );
}
