
"use client";

import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';

export default function FearSection() {
  return (
    <section className="relative py-32 md:py-48 bg-[#050511] overflow-hidden">
      
      {/* 背景の装飾：デジタル・オーロラとグリッド */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      
      {/* エメラルドの光（心臓の鼓動のようにゆっくり明滅） */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none opacity-40 animate-pulse-slow"></div>
      
      {/* シアンの光 */}
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/4 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="text-center mb-24">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-8 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Activity className="w-3 h-3" />
            Social Implementation
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-emerald-200 leading-tight tracking-tight drop-shadow-2xl">
            政策提言：SOLUNA Protocol
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* 左側：コピーライティング (余白を十分に取り、言葉を配置) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="prose prose-invert prose-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-8">
                社会の“見えない危機”を、<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">科学的根拠（エビデンス）</span>で証明する。
              </h3>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  日本では、<strong className="text-white border-b-2 border-emerald-500/50">15〜49歳の最大の死亡要因</strong>は
                  <br className="md:hidden"/>
                  <span className="inline-block bg-emerald-900/30 px-2 py-1 rounded text-emerald-300 font-bold mt-1 shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                    「自ら命を絶つ選択」
                  </span> です。
                </p>
                <p>
                  これは個人の弱さではなく、SOSが届かない<strong className="text-white">“構造的な欠陥”</strong>によって生まれています。
                </p>
                <p>
                  私たちはこの「見えないリスク」を可視化し、ケアを資産に変える国家OSの再設計を提言しています。
                </p>
              </div>
            </div>

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link 
                href="/policy" 
                className="group relative inline-flex items-center justify-center gap-3 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-400/60 text-emerald-100 px-8 py-5 rounded-2xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-lg font-bold relative z-10">【完全版】政策提言書を読む</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </div>
          </div>

          {/* 右側：データポータル (よりサイバーで奥行きのある表現へ) */}
          <div className="lg:col-span-7 relative group cursor-pointer perspective-1000">
            <Link href="/policy" className="block relative transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
              
              {/* グローエフェクト（背面） */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/30 via-cyan-500/30 to-emerald-600/30 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              
              {/* メインカード */}
              <div className="relative rounded-[2rem] overflow-hidden border border-emerald-500/20 bg-[#0A0A12]/80 backdrop-blur-xl aspect-video flex items-center justify-center shadow-2xl group-hover:border-emerald-400/40 transition-colors duration-500">
                   
                   {/* 内部グリッドアニメーション */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

                   {/* コンテンツ */}
                   <div className="relative z-10 text-center p-8 space-y-6 transform transition-transform duration-500 group-hover:scale-105">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#050511] border border-emerald-500/30 mb-2 shadow-[0_0_40px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_60px_rgba(16,185,129,0.3)] transition-shadow duration-500">
                        <Activity className="w-10 h-10 text-emerald-400" />
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-bold tracking-[0.2em] text-emerald-500 uppercase">Real-time Analysis</p>
                        <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">GBD Compare Data</p>
                        <p className="text-gray-400">東京都 15-49歳 死因分析ヒートマップ</p>
                      </div>

                      <div className="pt-6">
                        <span className="inline-flex items-center gap-2 text-sm text-emerald-300 font-medium bg-emerald-950/50 px-4 py-2 rounded-full border border-emerald-500/20 group-hover:bg-emerald-900/50 transition-colors">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          詳細データへアクセス
                        </span>
                      </div>
                   </div>

                   {/* スキャンライン（上から下へ流れる光） */}
                   <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                     <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent absolute top-0 -translate-y-full animate-scanline opacity-50"></div>
                   </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
      
      {/* CSSアニメーション定義 */}
      <style jsx global>{`
        @keyframes scanline {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
