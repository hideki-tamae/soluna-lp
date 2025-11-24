import React from 'react';

const GlobalEcosystem = () => {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* --- 背景装飾 (世界地図のメタファー) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 背景のグロー効果 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[80px] rounded-full" />
        
        {/* グリッドライン */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- セクションヘッダー --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-purple-200 mb-6 leading-tight">
            共鳴する世界、
            <br className="md:hidden" />
            実装される優しさ。
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            国境を超えた集合知と、Web3テクノロジーが融合。<br className="hidden md:block" />
            孤立した「個」を救うための、新たな信頼インフラがここにあります。
          </p>
        </div>

        {/* --- トラストシグナル (3カラム) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-4xl font-bold text-cyan-300 mb-2">185+</div>
              <div className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Countries Reached</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Re-Verseの思想と音楽は、すでに185ヶ国以上へ配信され、国境を超えた共感のネットワークを形成しています。
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-4xl font-bold text-purple-300 mb-2">Scientific</div>
              <div className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Evidence Based</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                ACEs（逆境体験）研究の世界的権威である機関の知見を参照し、科学的根拠に基づいたケアシステムを構築しています。
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-4xl font-bold text-emerald-300 mb-2">SOLUNA</div>
              <div className="text-sm font-semibold text-slate-300 tracking-wider uppercase mb-4">Proof of Care</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                優しさの行動証明（PoC）により、見えない善意をブロックチェーン上で永続的な価値として刻みます。
              </p>
            </div>
          </div>
        </div>

        {/* --- 追加のパートナーロゴエリア (6つに増強) --- */}
        <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-center text-sm text-slate-500 mb-8 tracking-widest uppercase">Powered by Global Standards</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Ethereum */}
                <span className="text-lg md:text-xl font-bold text-white">Ethereum</span>
                {/* Next.js */}
                <span className="text-lg md:text-xl font-bold text-white">Next.js</span>
                {/* Supabase */}
                <span className="text-lg md:text-xl font-bold text-white">Supabase</span>
                {/* Prisma (New) */}
                <span className="text-lg md:text-xl font-bold text-white">Prisma</span>
                {/* MetaMask (New) */}
                <span className="text-lg md:text-xl font-bold text-white">MetaMask</span>
                {/* Vercel */}
                <span className="text-lg md:text-xl font-bold text-white">Vercel</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalEcosystem;