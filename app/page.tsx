'use client'; // フックを使うため、最上部に必須

import React, { useEffect } from 'react';
import { useAccount } from 'wagmi'; // 認証状態の監視用

import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import ProblemSolution from '@/components/ProblemSolution';
import FearSection from '@/components/FearSection';
import ProfileSummary from '@/components/ProfileSummary';
import BetaRecruitment from '@/components/BetaRecruitment';
import Benefits from '@/components/Benefits';
import FinalCTA from '@/components/FinalCTA';
import ProofOfCommitment from '@/components/ProofOfCommitment';
import { AuthGate } from '@/components/AuthGate';

// 🗑️ 削除: SolunaButton のインポートは不要になりました

export default function Home() {
  const { isConnected } = useAccount(); // ユーザーが接続しているかチェック

  // ★ UX改善: 接続済みなら、自動で誓いのセクションへスクロール
  useEffect(() => {
    if (isConnected) {
      const target = document.getElementById('proof-section');
      if (target) {
        // 少しだけ待ってからスクロール（DOM描画待ち）
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    }
  }, [isConnected]);

  return (
    <main className="min-h-screen bg-[#050511] text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <FearSection />
      <ProfileSummary />
      <BetaRecruitment />
      <Benefits />

      {/* 👇 IDを追加: 自動スクロールの目的地 
         ここが「画像アップロード（誓いの提出）」セクションになります
      */}
      <div id="proof-section" className="py-10 relative z-20 flex flex-col items-center gap-12">
        <AuthGate>
          <ProofOfCommitment />
        </AuthGate>
        
        {/* 🗑️ 削除: SOLUNAボタンがあった場所は空にしました */}
      </div>

      <FinalCTA />
      
    </main>
  );
}