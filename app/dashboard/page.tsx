'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React, { useState } from 'react'; 
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

// 👇 作成したコンポーネントをインポート
import ClaimRewardFlow from '../../components/claim/ClaimRewardFlow';

// 仮のコントラクト情報 (実際のアドレスとABIに置き換えてください)
const REWARD_CONTRACT_ADDRESS = '0xYourContractAddressHere'; 
const REWARD_CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "claimReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
];

export default function DashboardPage() {
  // ▼ モーダルの開閉状態を管理
  const [isClaiming, setIsClaiming] = useState(false);

  const { isConnected } = useAccount();

  // 1. コントラクト書き込みフック
  const { data: hash, isPending, writeContract } = useWriteContract();

  // 2. トランザクション完了待ちフック
  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    });

  // 3. 請求ロジック (現在は直接呼び出さず、将来的にフローと連携可能)
  const handleClaim = () => {
    if (!isConnected) return;
    writeContract({
      address: REWARD_CONTRACT_ADDRESS,
      abi: REWARD_CONTRACT_ABI,
      functionName: 'claimReward',
    });
  };

  // 請求ボタンの状態判定
  let buttonText;
  let buttonStyle;
  let isDisabled = true;

  if (!isConnected) {
    buttonText = 'ウォレットを接続して請求';
    buttonStyle = 'bg-gray-700/50 text-gray-400 cursor-not-allowed';
    isDisabled = true;
  } else if (isConfirmed) {
    buttonText = 'CLAIMED (所有済み)';
    buttonStyle = 'bg-green-700/50 text-green-300 cursor-not-allowed border border-green-700';
    isDisabled = true;
  } else if (isPending || isConfirming) {
    buttonText = isPending ? 'トランザクション送信中...' : '確認中... (ブロック待ち)';
    buttonStyle = 'bg-amber-900/50 text-yellow-200 border border-amber-500 animate-pulse';
    isDisabled = true;
  } else {
    // 請求可能な状態
    buttonText = 'CLAIM REWARD NFT';
    buttonStyle = 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white shadow-lg shadow-amber-500/20';
    isDisabled = false;
  }

  // ----------------------------------------------------
  // UIレンダリング
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-black text-white p-8 relative">
      {/* ヘッダーエリア */}
      <header className="flex justify-between items-center mb-12 relative z-10">
        <h1 className="text-2xl font-bold tracking-widest text-gray-200">
          DASHBOARD
        </h1>
        
        <div className="flex items-center gap-4">
          <ConnectButton.Custom>
            {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted, }) => {
              const ready = mounted && authenticationStatus !== 'loading';
              const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');
              return (
                <div {...(!ready && { 'aria-hidden': true, 'style': { opacity: 0, pointerEvents: 'none', userSelect: 'none', }, })} >
                  {(() => {
                    if (!connected) {
                      return (
                        <button onClick={openConnectModal} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full text-sm text-gray-300 transition-all flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                          Connect Wallet
                        </button>
                      );
                    }
                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} className="px-4 py-2 bg-red-900/50 border border-red-500 rounded-full text-red-200 text-sm">
                          Wrong network
                        </button>
                      );
                    }
                    return (
                      <div style={{ display: 'flex', gap: 12 }}>
                        <button onClick={openAccountModal} type="button" className="px-4 py-2 bg-gray-900 border border-yellow-600/30 rounded-full text-yellow-500 text-sm flex items-center gap-2 hover:bg-yellow-900/10 transition-all">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                          {account.displayName}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </header>

      {/* メインコンテンツエリア */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* 左カラム：ステータス表示 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all"></div>
          
          <h2 className="text-gray-400 text-sm mb-2">CURRENT RANK</h2>
          <div className="text-3xl font-bold text-yellow-500">Gold Member</div>
          <p className="text-xs text-gray-500 mt-2">Proof Verified via Kindle</p>
        </motion.div>

        {/* 右カラム：リワード請求カード */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="bg-gray-900/50 border border-yellow-800/50 rounded-2xl p-8 flex flex-col items-start justify-center relative shadow-xl min-h-[16rem]"
          >
             {/* タイトル */}
             <h2 className="text-3xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                Founding Member Reward
             </h2>
             <p className="text-gray-400 mb-6">
                Gold Member限定のオーナーNFT（Proof-of-Care Token）を請求できます。
             </p>

             {/* 請求ボタン (フロー起動) */}
             <button
               // ▼ handleClaimからモーダル起動に変更
               onClick={() => setIsClaiming(true)} 
               disabled={isDisabled}
               className={`
                 px-8 py-3 rounded-full font-bold text-sm tracking-widest transition-all duration-300
                 ${buttonStyle}
               `}
             >
               {buttonText}
             </button>
             
             {/* トランザクション結果メッセージ */}
             {isConfirmed && (
               <p className="mt-4 text-xs text-green-500">
                 リワードはウォレットに発行されました。トランザクションハッシュ: ${hash}
               </p>
             )}
             {hash && isPending && (
               <p className="mt-4 text-xs text-yellow-500">
                 ウォレットで署名してください...
               </p>
             )}

          </motion.div>
        </div>
      </main>

      {/* ▼▼▼ Proof-of-Care Claim Modal ▼▼▼ */}
      <AnimatePresence>
        {isClaiming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsClaiming(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-[#C89F53] transition-colors z-50 flex items-center gap-2 group"
            >
              <span className="text-xs tracking-widest uppercase group-hover:text-white transition-colors">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Content Container */}
            <div className="w-full max-w-5xl relative">
              <ClaimRewardFlow />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}