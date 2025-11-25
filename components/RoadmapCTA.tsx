"use client";

import React from "react";

export default function RoadmapCTA() {

  // ▼ ここにボタンを押した時の処理を書きます
  // もし以前のコードで wallet connect の処理などがあればここに書き戻してください
  const handleConnect = () => {
    console.log("Connect clicked");
    // 例: ウォレット接続モーダルを開く、またはフォームへ遷移する処理
    // openConnectModal(); 
  };

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* 背景装飾（必要に応じて調整してください） */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-900/5 to-purple-900/10 pointer-events-none" />

      {/* ▼ ここからが先ほどの修正デザイン部分です */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto px-4">
        
        {/* 1. キャッチコピー */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200 drop-shadow-sm">
          その優しさが、<br className="md:hidden" />
          資産になる文明へ。
        </h2>

        {/* 2. リード文 */}
        <p className="text-lg md:text-xl text-blue-100/80 font-medium leading-relaxed max-w-lg">
          報われない世界を、<br className="md:hidden" />
          ここから書き換える。
        </p>

        {/* 3. ボタン */}
        <div className="w-full flex justify-center pt-4">
          <button
            onClick={handleConnect}
            className="
              group relative w-full max-w-sm overflow-hidden rounded-xl
              bg-gradient-to-r from-blue-600 to-purple-600 
              p-1 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] 
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)]
            "
          >
            <div className="
              relative flex flex-col items-center justify-center 
              rounded-[10px] bg-black/20 backdrop-blur-sm 
              px-8 py-4 transition-all duration-300 group-hover:bg-transparent
            ">
              {/* メインテキスト */}
              <span className="text-xl md:text-2xl font-bold text-white tracking-widest mb-1">
                第1期・市民先行登録
              </span>
              
              {/* サブテキスト */}
              <span className="text-xs md:text-sm font-medium text-blue-100/90 tracking-wider">
                （無料・β版アクセス権）
              </span>
            </div>
            
            {/* 光のアニメーション */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </div>

        {/* 補足 */}
        <p className="text-xs text-slate-500 mt-4">
          ※ SOLUNAはEthereum Sepolia Testnet上で稼働する分散型社会OSです。
        </p>
      </div>
    </section>
  );
}