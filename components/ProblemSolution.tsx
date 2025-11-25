"use client";

import React from "react";

export default function ProblemSolution() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-950">
      {/* 背景のエフェクト（オーロラのような光） */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- ヘッダーセクション --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          
          {/* Badge: THE GREAT INVERSION */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            THE GREAT INVERSION
          </div>

          {/* Headline: 修正済み（世界は、反転する） */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            世界は、<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              「反転」
            </span>
            する。
          </h2>

          {/* Subtext */}
          <p className="mt-8 text-lg md:text-xl font-medium leading-relaxed text-blue-100/80 max-w-2xl mx-auto">
            見えない「痛み」を癒やし、見えない「ケア」を価値に変える。<br className="hidden md:block" />
            Re-Verse Civilizationは、優しさが循環する新たな経済圏です。
          </p>
        </div>

        {/* --- 特徴グリッド（3つの柱） --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* 1. Proof of Care (画像にあったもの) */}
          <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            
            <div className="relative h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
              {/* Cube Icon */}
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            
            <h3 className="relative text-xl font-bold text-white mb-3">Proof of Care</h3>
            <p className="relative text-sm text-blue-200/60 leading-relaxed">
              あなたのケアの実践を、ブロックチェーン上の不可逆な記録として証明。
              優しさが「資産」として蓄積されます。
            </p>
          </div>

          {/* 2. Value of Kindness (価値の転換) */}
          <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            
            <div className="relative h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
              {/* Heart Icon */}
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            
            <h3 className="relative text-xl font-bold text-white mb-3">Value of Kindness</h3>
            <p className="relative text-sm text-blue-200/60 leading-relaxed">
              自己犠牲ではなく、正当な対価へ。
              トークンエコノミーにより、誰かを助ける行為が、経済的にも報われる社会へ。
            </p>
          </div>

          {/* 3. Decentralized OS (社会OS) */}
          <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            
            <div className="relative h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
              {/* Globe/Network Icon */}
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            
            <h3 className="relative text-xl font-bold text-white mb-3">Decentralized OS</h3>
            <p className="relative text-sm text-blue-200/60 leading-relaxed">
              中央集権的な管理を排除し、透明なプログラム（Smart Contract）が
              公平な分配と秩序を自動執行します。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}