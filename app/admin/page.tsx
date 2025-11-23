"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// --- ヘルパー関数と定数 ---
// APIのベースURLを決定するヘルパー関数 (AdminPageから流用)
const getApiUrl = (path: string) => {
    const baseUrl = window.location.origin;
    return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
};

// --- Particle Effect (背景アニメーション) ---
const Particle = ({ size, x, y, delay }: { size: number, x: number, y: number, delay: number }) => (
    <motion.div
        className="absolute bg-indigo-400 rounded-full"
        style={{ width: size, height: size, left: x, top: y }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
            opacity: [0, 0.5, 0], 
            scale: [0, 1, 0], 
            // -100pxから100pxの間でランダムな動き
            x: [0, Math.random() * 200 - 100, 0], 
            y: [0, Math.random() * 200 - 100, 0],
        }}
        transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
    />
);

const ParticleField = () => {
    const particles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        delay: Math.random() * 10,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
            {particles.map(p => (
                <Particle key={p.id} size={p.size} x={p.x as number} y={p.y as number} delay={p.delay} />
            ))}
        </div>
    );
};


// --- CurrentHoldingsコンポーネント (洗練されたデザイン) ---
const CurrentHoldings = ({ address }: { address: `0x${string}` | undefined }) => {
    // 実際の残高表示ロジックはwagmi等で実装することを想定
    const mockBalance = 10000000000.00; // 桁の多いテスト値
    const formattedBalance = mockBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return (
        <motion.div 
            className="mt-16 p-8 bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-700 shadow-2xl w-full max-w-sm mx-auto z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
        >
            <div className="flex items-center space-x-3 mb-4">
                <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse-slow"></span>
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">CURRENT HOLDINGS</p>
            </div>
            
            <div className="flex justify-between items-end gap-2 mb-2"> 
                <p className="text-4xl sm:text-5xl font-extrabold text-white leading-none break-all">
                    {formattedBalance}
                </p>
                <p className="text-xl font-bold text-gray-300 leading-none">
                    SOLUNA 
                </p>
            </div>
            
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium block text-right">
                Connect to Re-Verse Economy →
            </a>
        </motion.div>
    );
}

// --- Main Page Component ---
export default function HomePage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']); // ヒーローセクションをスクロールで少し上に動かす
    
    // スクロール時に要素を左右に動かす効果
    const xLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
    const xRight = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <motion.main 
            ref={ref} 
            className="min-h-screen bg-black text-white flex flex-col items-center pt-8 md:pt-20 px-4 relative overflow-hidden"
            // style={{ opacity }} // ヒーローセクション全体の透明度をスクロールで変化
        >
            {/* 背景パーティクルアニメーション */}
            <ParticleField />

            <div className="w-full max-w-7xl text-center relative z-10">
                
                {/* ヘッダー/ロゴ */}
                <motion.div 
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="text-sm font-semibold tracking-widest px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full uppercase shadow-lg">
                        RE-VERSE NETWORK
                    </span>
                </motion.div>

                {/* メインタイトル */}
                <motion.h1 
                    className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ y }} // スクロール時に少し上へ
                >
                    Re-Verse Civilization / <br className="sm:hidden" /> SOLUNAケア・トークン
                </motion.h1>
                
                {/* サブテキスト */}
                <motion.p 
                    className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-16 font-light leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・メタバース美術館・コミュニティを横断したケア資本主義の土台をつくります。
                </motion.p>

                {/* CTAボタン群 */}
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <a 
                        href="/teaser" 
                        className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-xl hover:bg-gray-200 transition-all text-lg transform hover:scale-105"
                    >
                        ティーザーの一覧を見る
                    </a>
                    <a 
                        href="/claim" 
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-xl hover:from-blue-400 hover:to-purple-500 transition-all text-lg transform hover:scale-105"
                    >
                        読者の方はこちら (合言葉) →
                    </a>
                </motion.div>

                {/* 残高表示セクション */}
                <CurrentHoldings address={undefined} /> 
                
            </div>
            
            {/* 3つの柱セクション (スクロールと視差効果) */}
            <div className="mt-20 w-full max-w-7xl relative z-10 pt-20">
                <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
                    Re-Verse Civilization の3つの柱
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20">
                    <motion.div 
                        className="bg-gray-900/60 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500 transition-all shadow-xl backdrop-blur-sm"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ x: xLeft }}
                    >
                        <h3 className="text-3xl font-bold mb-4 text-indigo-400">1. 世界観に触れる</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            音楽（世界185カ国以上で配信中）、デジタルアート、VR展示などを通じて、Re-Verseの世界観を体験します。感性を刺激し、新たな視点を発見する旅へ。
                        </p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-900/60 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500 transition-all shadow-xl backdrop-blur-sm"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-3xl font-bold mb-4 text-indigo-400">2. プロジェクトに参加する</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            ACES Care HUB JAPAN の活動に参加し、ケア資本主義の推進に貢献。共に未来を築くコミュニティの一員となりましょう。
                        </p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-900/60 p-8 rounded-3xl border border-gray-800 hover:border-indigo-500 transition-all shadow-xl backdrop-blur-sm"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ x: xRight }}
                    >
                        <h3 className="text-3xl font-bold mb-4 text-indigo-400">3. オープンな議論の場</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Web3公民館で共同議論に参加し、トークンの活用方針やDAOのルール設計に貢献。あなたの声が未来を形作ります。
                        </p>
                    </motion.div>
                </div>
            </div>

            <footer className="w-full text-center py-10 mt-20 text-gray-500 text-sm border-t border-gray-800 relative z-10">
                © {new Date().getFullYear()} Re-Verse Civilization / SOLUNA. All rights reserved.
            </footer>
        </motion.main>
    );
}