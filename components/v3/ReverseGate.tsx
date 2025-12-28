// components/v3/ReverseGate.tsx - SOLUNA v3.0
// RE-VERSE GATE 誘導セクション
// 千利休的ミニマリズム + ゲーリー・ハルバート流0.5秒訴求

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ReverseGate() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      
      {/* 背景エフェクト（控えめ・千利休的） */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010308] via-gray-900/50 to-[#010308]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        {/* バッジ（極小） */}
        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400/80 text-xs font-mono tracking-wider uppercase">
            Amazon / Kindle 限定
          </span>
        </div>
        
        {/* メインメッセージ（ゲーリー・ハルバート流：0.5秒で理解） */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
          <span className="text-white">
            読者なら、今すぐトークンを
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
            無料で受け取れます
          </span>
        </h2>
        
        {/* サブコピー（簡潔） */}
        <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Amazon購入履歴 または Kindle Unlimited を<br className="hidden sm:block" />
          アップロードするだけ。AI が自動判定します。
        </p>
        
        {/* CTA（1つだけ・強力） */}
        <Link 
          href="/tester-claim"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full font-bold text-white text-lg transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] hover:-translate-y-1 active:translate-y-0"
        >
          <span className="relative">
            RE-VERSE GATE へ進む
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300" />
          </span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
        
        {/* 信頼性（小さく） */}
        <p className="mt-8 text-xs text-gray-500 font-mono">
          所要時間: 約30秒 / 完全無料 / AI自動認証
        </p>
        
      </div>
    </section>
  );
}
