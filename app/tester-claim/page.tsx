"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import React, { useState, useEffect } from 'react';

// 仮のテスト登録ロジック
const registerTester = async (address: string) => {
    // ここに、アドレスをデータベースやスプレッドシートに登録するAPIコールを実装します。
    console.log(`Tester registration requested for address: ${address}`);
    return new Promise(resolve => setTimeout(resolve, 2000)); // 2秒待機をシミュレート
};

export default function MicroTokenClaimPortal() {
    // ■ ハイドレーションエラー対策: マウント判定フラグ
    const [isMounted, setIsMounted] = useState(false);
    
    const { address, isConnected } = useAccount();
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // 初回レンダリング後にのみ表示許可（これでサーバー/クライアント不一致エラーを回避）
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleRegistration = async () => {
        if (!address) return;
        setIsLoading(true);
        try {
            await registerTester(address);
            setIsRegistered(true);
        } catch (error) {
            console.error("Registration failed:", error);
            alert("登録に失敗しました。コンソールを確認してください。");
        } finally {
            setIsLoading(false);
        }
    };

    // マウント前は何も表示しない（レイアウトシフト防止のためローディングでも可）
    if (!isMounted) return null;

    return (
        <div className="min-h-screen bg-[#050511] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* 背景装飾（サイバーパンク感の演出） */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

            <div className="w-full max-w-md bg-[#0a0a12]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
                
                <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 text-center drop-shadow-sm">
                    Micro-Token Claim Portal
                </h1>
                <p className="text-xs md:text-sm text-gray-400 mb-8 text-center leading-relaxed">
                    βテスター限定：マイクロトークン付与のための<br className="hidden md:block"/>アドレス登録
                </p>

                {/* 1. ウォレット接続エリア */}
                <div className="mb-6 p-5 bg-[#13131f] rounded-xl border border-white/5 shadow-inner">
                    <p className="text-sm font-semibold mb-4 flex items-center justify-center gap-2">
                        {isConnected ? (
                            <span className="text-emerald-400 flex items-center gap-2">
                                ✅ ウォレット接続済み
                            </span>
                        ) : (
                            <span className="text-yellow-400 flex items-center gap-2">
                                ⚠️ 1. ウォレットを接続してください
                            </span>
                        )}
                    </p>
                    
                    <div className="flex justify-center">
                        <ConnectButton 
                            label="ウォレットを接続" 
                            accountStatus="address" 
                            chainStatus="icon"
                            showBalance={false} 
                        />
                    </div>
                </div>

                {/* 2. 登録ステータス & アクション */}
                {isConnected && !isRegistered && (
                    <div className="space-y-5 animate-fade-in-up">
                        <div className="text-center">
                            <p className="text-xs text-gray-500 mb-1">接続アドレス</p>
                            <p className="font-mono text-cyan-300 text-xs md:text-sm break-all bg-black/30 p-2 rounded border border-white/5">
                                {address}
                            </p>
                        </div>

                        {/* ■ 修正ポイント: whitespace-nowrap
                            これで「登録」の文字が改行されて浮くのを防ぎます
                        */}
                        <button
                            onClick={handleRegistration}
                            disabled={isLoading}
                            className={`
                                w-full py-4 rounded-lg font-bold text-white shadow-lg transition-all duration-200 whitespace-nowrap
                                ${isLoading 
                                    ? 'bg-gray-700 cursor-wait' 
                                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:scale-[1.02] shadow-cyan-900/50'}
                            `}
                        >
                            {isLoading ? "送信中..." : "テスター登録を確定する"}
                        </button>
                    </div>
                )}
                
                {/* 3. 成功メッセージ（デジタル勲章デザイン） */}
                {isRegistered && (
                    <div className="py-6 px-4 bg-gradient-to-b from-[#0f1c15] to-[#0a0a12] border border-emerald-500/30 rounded-xl text-center animate-fade-in">
                        {/* ■ 修正ポイント: デジタル・ホログラム勲章（安っぽい絵文字の排除） */}
                        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-600 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] relative">
                             <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-sm animate-pulse"></div>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white relative z-10">
                               <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                             </svg>
                        </div>
                        
                        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold text-xl mb-2">Registration Complete</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            あなたのウォレットアドレスが<br/>βテストリストに正式に登録されました。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}