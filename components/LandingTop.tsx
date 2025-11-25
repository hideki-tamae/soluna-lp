"use client";

import React from "react";
import Link from "next/link"; // Next.jsのLinkを使う場合

export default function LandingTop() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030305] pt-20">
      
      {/* --- 🪐 惑星ビジュアル & 宇宙背景 (World-Class Visuals) --- */}
      
      {/* 1. 星々（背景のノイズ） */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

      {/* 2. メインの惑星（巨大な光の弧） */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[180vw] h-[180vw] md:w-[120vw] md:h-[120vw] rounded-full bg-gradient-to-b from-blue-900/10 via-[#0b0b1e] to-[#030305] shadow-[0_20px_100px_rgba(59,130,246,0.1)] border-b border-white/5 blur-sm" />

      {/* 3. 惑星の縁（リムライト）：青と紫のグラデーションで「反転」を表現 */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[100vw] h-[100px] bg-blue-500/30 blur-[100px] mix-blend-screen" />
      <div className="absolute top-[10%] left-1/3 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      <div className="absolute top-[10%] right-1/3 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />

      {/* --- コンテンツ --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-[-5vh]">
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs md:text-sm font-medium text-blue-200/80 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          PUBLIC BETA COMING SOON
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl">
          Re-Verse Civilization
        </h1>

        {/* Sub Title with Gradient */}
        <p className="text-xl md:text-3xl font-bold tracking-wide text-blue-100/90 mb-8">
          SOLUNA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-extrabold italic">Proof-of-Care</span> Token
        </p>

        {/* Description */}
        <p className="max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed mb-10">
          優しさが「制度」になる文明へ。<br className="hidden md:block" />
          AI・Web3・福祉を統合し、見えない「ケア」を価値として証明する<br className="hidden md:block" />
          新たな社会OS。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <button className="group relative px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)]">
            <span className="relative z-10 flex items-center gap-2">
              Whitepaperを読む
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
            世界観を体験する
          </button>
        </div>

      </div>

      {/* --- ボトムフェード（下のセクションと馴染ませる） --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030305] to-transparent pointer-events-none" />
    </section>
  );
}