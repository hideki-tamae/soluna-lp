"use client";
import React from 'react';

const HeroSection = () => {
    return (
        // ヒーローセクション全体 (背景は動画に置き換え)
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
            
            {/* 💡 背景動画のコンテナ (z-0) */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline 
                    // 動画をセクション全体にフィットさせ、opacityで暗くしてテキストを見やすくする
                    className="object-cover w-full h-full opacity-50 transition-opacity duration-1000" 
                >
                    <source src="/9.mp4" type="video/mp4" />
                    
                    {/* 動画がサポートされない場合の代替（現在の静止画） */}
                    <img src="/header-bg.jpg" alt="Background fallback" className="w-full h-full object-cover" />
                </video>
            </div>
            
            {/* 💡 コンテンツ (z-10) - 既存のLP構造を再現 */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center text-white px-4">
                
                {/* PUBLIC BETA COMING SOON */}
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-6">
                    • PUBLIC BETA COMING SOON
                </span>
                
                {/* タイトル */}
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                    Re-Verse Civilization
                </h1>
                
                {/* サブタイトル */}
                <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">
                    SOLUNA Proof-of-Care Token
                </p>
                
                {/* 説明テキスト */}
                <p className="text-base max-w-2xl mx-auto mb-10 text-gray-400">
                    優しさが制度に統合し、見えない「ケア」を価値として証明する<br />
                    新たな社会OS。
                </p>

                {/* ボタン */}
                <div className="flex space-x-4">
                    {/* Whitepaperを読む ボタン */}
                    <a 
                      href="#" // 実際のリンクに修正してください
                      className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-xl hover:shadow-indigo-500/50"
                    >
                        Whitepaperを読む →
                    </a>
                    
                    {/* Kindleで体験 ボタン - 💡 ここを「Kindle体験」に修正しました */}
                    <a 
                      href="#" // 実際のリンクに修正してください
                      className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full transition duration-300 border border-white/20"
                    >
                        Kindle体験
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;