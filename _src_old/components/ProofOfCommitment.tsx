'use client';

import React, { useState } from 'react';

export default function ProofOfCommitment() {
  const [status, setStatus] = useState<'idle' | 'signing' | 'verified'>('idle');

  const handleSign = async () => {
    setStatus('signing');
    // 2.5秒の重厚な書き込み演出
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setStatus('verified');
  };

  // -------------------------------------------------------
  // View 1: 完了画面 "Golden Eclipse" (金環蝕)
  // -------------------------------------------------------
  if (status === 'verified') {
    return (
      <div className="w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden rounded-3xl border border-amber-500/30 bg-black/80 backdrop-blur-2xl shadow-[0_0_100px_rgba(255,215,0,0.1)] animate-in fade-in duration-1000">
        
        {/* 環境光 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Brand Icon: Golden Check */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-amber-400 blur-3xl opacity-20 rounded-full"></div>
          <div className="relative h-24 w-24 rounded-full border border-amber-500/50 bg-gradient-to-b from-black to-amber-950/50 flex items-center justify-center shadow-2xl">
            <svg className="w-12 h-12 text-amber-200 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" className="animate-[draw_0.8s_ease-out_forwards]" style={{ strokeDasharray: 100, strokeDashoffset: 100 }} />
            </svg>
          </div>
        </div>

        <h3 className="text-4xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100">
          Proof Verified
        </h3>
        <p className="text-amber-100/60 text-lg mb-8 font-light">
          優しさが、永遠の価値として刻まれました。
        </p>
      </div>
    );
  }

  // -------------------------------------------------------
  // View 2: 署名待機画面 (Idle)
  // -------------------------------------------------------
  return (
    <div className="w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-10 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-500">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Re-Verse Civilization<br/><span className="text-slate-400 text-2xl font-light">への誓い</span></h2>
        <p className="text-slate-300 mb-10 leading-relaxed max-w-lg">
          私は、ケア資本主義の実装者として、<br/>優しさが循環する社会を創り上げることを宣言します。
        </p>
        <button
          onClick={handleSign}
          disabled={status === 'signing'}
          className={`px-12 py-4 rounded-full font-bold text-lg tracking-widest transition-all duration-300 ${status === 'signing' ? 'bg-slate-800 text-slate-500' : 'bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]'}`}
        >
          {status === 'signing' ? "SIGNING..." : "COMMIT PLEDGE"}
        </button>
      </div>
      <style jsx>{`@keyframes draw { to { stroke-dashoffset: 0; } }`}</style>
    </div>
  );
}