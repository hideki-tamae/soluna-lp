import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative w-full py-40 md:py-64 overflow-hidden bg-[#050505] border-t border-white/10">
      
      {/* Background Image: The Universe (Replaces CSS Gradients) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Image Layer - Opacity adjusted for elegance */}
        <img 
          src="/header-bg.jpg" 
          alt="Universe Background" 
          className="w-full h-full object-cover opacity-50 mix-blend-screen select-none"
        />
        
        {/* Overlays for Depth & Readability */}
        {/* 上部からのフェード（前のセクションとの馴染み） */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#050505] to-transparent" />
        {/* 全体のトーンダウン（文字を浮き立たせる） */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        {/* 下部からのフェード（フッターへの接続） */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12 md:mb-16 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 pb-4 leading-tight">
          その優しさを、<br className="md:hidden" />
          資産に。
        </h2>

        {/* Sub Headline */}
        <p className="text-xl md:text-3xl text-gray-200 mb-20 md:mb-24 tracking-wide max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
          報われない世界を、<br className="md:hidden" />
          ここから書き換える。
        </p>

        {/* The Button */}
        <div className="flex flex-col items-center justify-center gap-8">
          <button className="group relative px-14 py-6 bg-gradient-to-r from-blue-600/90 to-purple-600/90 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_rgba(124,58,237,0.6)] border border-white/20 backdrop-blur-md">
            {/* Inner Glow Layer */}
            <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
            
            {/* Text & Icon */}
            <span className="relative flex items-center gap-4 text-2xl md:text-3xl font-bold text-white tracking-wider drop-shadow-md">
              <a 
                href="https://tally.so/r/wM9JVY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="..." // 既存のクラスネームを維持
                >
                第1期・市民先行登録
            　</a>
              <ArrowRight className="w-8 h-8 text-white/90 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            
            {/* Tag */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-500"></span>
            </span>
          </button>
          
          <span className="text-base text-blue-200/80 font-medium tracking-widest uppercase drop-shadow-md">
            Free Access / Beta Version
          </span>
        </div>

        {/* Technical Disclaimer */}
        <div className="mt-20 pt-10 border-t border-white/10 max-w-xl mx-auto">
          <p className="text-xs text-gray-400 font-mono leading-relaxed tracking-wider drop-shadow">
            ※ SOLUNAは、Ethereum Sepolia Network 上で稼働する<br />
            “透明性・分配・インセンティブ”を再設計した<br />
            分散型の社会インフラ〈Soluna Proto-Mainnet〉です。
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;