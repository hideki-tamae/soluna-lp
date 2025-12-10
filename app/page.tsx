'use client'; 

import React, { useEffect, useState } from 'react'; // useStateをインポートに追加
import { useAccount } from 'wagmi'; // isReconnectingなどを取得

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


export default function Home() {
  // isReconnectingを追加
  const { isConnected, isReconnecting, isStatusLoading } = useAccount(); 
  
  // クライアント側で完全にマウントされたかを確認する状態 (モバイル安定化のため)
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  // ★ UX改善: 接続済みなら、自動で誓いのセクションへスクロール
  useEffect(() => {
    // isClientReady (クライアント側でマウント完了) かつ 
    // isConnected (ウォレット接続済み) かつ
    // isReconnecting (再接続中ではない) 場合に実行
    if (isClientReady && isConnected && !isReconnecting) {
      const target = document.getElementById('proof-section');
      if (target) {
        // DOM描画待ちを確実にするため、500msのまま維持
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    }
  // 依存配列に新しい状態を追加
  }, [isClientReady, isConnected, isReconnecting]); 

  return (
    <main className="min-h-screen bg-[#050511] text-white selection:bg-purple-500 selection:text-white overflow-hidden">
      
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <FearSection />
      <ProfileSummary />
      <BetaRecruitment />
      <Benefits />

      {/* 👇 IDを追加: 自動スクロールの目的地 */}
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