"use client";

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // ★ Linkコンポーネントのインポートを削除し、エラーを回避

// wagmiフックはコメントアウトしたまま維持
// import { useAccount, useBalance } from 'wagmi'; 

// --- コンポーネント定義 ---

// 仮のウォレット残高表示コンポーネント (UI修正を反映)
const CurrentHoldings = ({ address }: { address: `0x${string}` | undefined }) => {
    // 仮のトークンシンボルとコントラクトアドレス
    const tokenContractAddress = "0xYourTokenContractAddressHere"; // 実際のアドレスに置き換える
    const mockBalance = 10000000000.00; // 桁の多いテスト値

    // useBalance (wagmi)を使って実際の残高を取得する実装を想定 (コメントアウト)
    
    const formattedBalance = mockBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });


    return (
        <div className="mt-12 p-6 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl w-full max-w-xs mx-auto">
            <div className="flex items-center space-x-2 mb-2">
                <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                <p className="text-sm text-gray-400 font-medium uppercase">CURRENT HOLDINGS</p>
            </div>
            
            {/* 飛び出し修正ロジック: flexとgap-2, text-xlで調整 */}
            <div className="flex justify-between items-end gap-2"> 
                <p className="text-3xl sm:text-4xl font-extrabold text-white leading-none break-all">
                    {formattedBalance}
                </p>
                <p className="text-lg font-bold text-gray-300 leading-none">
                    SOLUNA 
                </p>
            </div>
            
            <p className="text-xs text-indigo-400 mt-2">
                Connect to Re-Verse Economy
            </p>
        </div>
    );
}

// --- メインページコンポーネント ---
export default function HomePage() {
    // wagmiフックの使用を想定 (コメントアウト)

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center pt-8 md:pt-20 px-4">
            <div className="w-full max-w-5xl text-center">
                
                {/* ヘッダー/ロゴ */}
                <div className="flex justify-center mb-8">
                    <span className="text-xs font-semibold tracking-widest px-3 py-1 bg-gray-800 text-gray-400 rounded-full uppercase">
                        RE-VERSE NETWORK
                    </span>
                </div>

                {/* メインタイトル */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                    Re-Verse Civilization / SOLUNAケア・トークン
                </h1>
                
                {/* サブテキスト */}
                <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                    「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、書籍・NFT・音楽・メタバース美術館・コミュニティを横断したケア資本主義の土台をつくります。
                </p>

                {/* CTAボタン群 */}
                <div className="flex justify-center space-x-4 mb-16">
                    {/* Linkの使用を<a>タグに置き換え、エラーを回避 */}
                    <a 
                        href="/teaser" 
                        className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-200 transition-all text-lg"
                    >
                        ティーザーの一覧を見る
                    </a>
                    
                    {/* Linkの使用を<a>タグに置き換え、エラーを回避 */}
                    <a 
                        href="/claim" 
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:from-purple-500 hover:to-indigo-500 transition-all text-lg"
                    >
                        読者の方はこちら (合言葉)
                    </a>
                </div>

                {/* 残高表示セクション */}
                <CurrentHoldings address={undefined} /> 
                {/* 実際の環境では address={address} を使用 */}
                
            </div>
            
            {/* 3つの柱セクション */}
            <div className="mt-20 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all shadow-xl">
                    <h2 className="text-2xl font-bold mb-3 text-indigo-400">1. 世界観に触れる (聴く・観る)</h2>
                    <p className="text-gray-400">
                        音楽（世界185カ国以上で配信中）、デジタルアート、VR展示などを通じて、Re-Verseの世界観を体験します。
                    </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all shadow-xl">
                    <h2 className="text-2xl font-bold mb-3 text-indigo-400">2. プロジェクトに参加する (繋がる)</h2>
                    <p className="text-gray-400">
                        ACES Care HUB JAPAN の活動（プロジェクト運営）に参加し、ケア資本主義の推進に貢献します。
                    </p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition-all shadow-xl">
                    <h2 className="text-2xl font-bold mb-3 text-indigo-400">3. オープンな議論の場</h2>
                    <p className="text-gray-400">
                        Web3公民館で共同議論に参加し、トークンの活用方針やDAOのルール設計に貢献します。
                    </p>
                </div>
            </div>

            <footer className="w-full text-center py-6 text-gray-500 text-sm border-t border-gray-800">
                © {new Date().getFullYear()} Re-Verse Civilization / SOLUNA. All rights reserved.
            </footer>
        </main>
    );
}