// app/page.tsx
'use client'; 

import React, { useEffect, useState } from 'react'; 
// ✅ wagmiインポートを復元
import { useAccount } from 'wagmi'; 

// 🚨 修正: すべて 'src/' を削除し、相対パス '../components/...' に切り替え
import HeroSection from '../components/HeroSection';
import SocialProof from '../components/SocialProof';
import ProblemSolution from '../components/ProblemSolution';
import FearSection from '../components/FearSection';
import ProfileSummary from '../components/ProfileSummary';
import BetaRecruitment from '../components/BetaRecruitment';
import Benefits from '../components/Benefits';

import FinalCTA from '../components/FinalCTA'; 

import ProofOfCommitment from '../components/ProofOfCommitment';
// ✅ AuthGateインポートを復元 (相対パス)
import { AuthGate } from '../components/AuthGate';


export default function Home() {
  // ✅ useAccountの使用を復元し、仮の値を削除
  const { isConnected, isReconnecting, isStatusLoading } = useAccount(); 
  
  // クライアント側で完全にマウントされたかを確認する状態
  const [isClientReady, setIsClientReady] = useState(false);

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  // ★ UX改善: 接続済みなら、自動で誓いのセクションへスクロール
  useEffect(() => {
    // isConnected が true の場合、スクロールが実行されます
    if (isClientReady && isConnected && !isReconnecting) { 
      const target = document.getElementById('proof-section');
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    }
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
        {/* ✅ AuthGate の使用を復元 */}
        <AuthGate>
          <ProofOfCommitment />
        </AuthGate>
        
        {/* 🗑️ 削除: SOLUNAボタンがあった場所は空にしました */}
      </div>

      <FinalCTA />
      
    </main>
  );
}