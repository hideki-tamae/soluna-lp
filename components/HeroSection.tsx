"use client";
import React from 'react';

const HeroSection = () => {
    return (
        // ヒーローセクション全体
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
            
            {/* 💡 背景動画の設定 (z-0) */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline 
                    className="object-cover w-full h-full opacity-60" 
                >
                    {/* ここで 9.mp4 を指定 */}
                    <source src="/9.mp4" type="video/mp4" />
                    <img src="/header-bg.jpg" alt="Background fallback" className="w-full h-full object-cover" />
                </video>
            </div>
            
            {/* コンテンツ (z-10) */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center text-white px-4">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-6">
                    • PUBLIC BETA COMING SOON
                </span>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                    Re-Verse Civilization
                </h1>
                
                <p className="text-xl md:text-2xl font-light mb-8 text-gray-300">
                    SOLUNA Proof-of-Care Token
                </p>
                
                <p className="text-base max-w-2xl mx-auto mb-10 text-gray-400">
                    優しさが制度に統合し、見えない「ケア」を価値として証明する<br />
                    新たな社会OS。
                </p>

                <div className="flex space-x-4">
                    <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-xl">
                        Whitepaperを読む →
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full transition duration-300 border border-white/20">
                        Kindle体験
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;