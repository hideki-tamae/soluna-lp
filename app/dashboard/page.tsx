'use client';

import { motion } from 'framer-motion';
// 👇 RainbowKitのConnectButtonをインポート
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* ヘッダーエリア */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-widest text-gray-200">
          DASHBOARD
        </h1>
        
        {/* 👇 ConnectButtonを配置 */}
        <div className="flex items-center gap-4">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button 
                          onClick={openConnectModal} 
                          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full text-sm text-gray-300 transition-all flex items-center gap-2"
                        >
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
                        <button
                          onClick={openAccountModal}
                          type="button"
                          className="px-4 py-2 bg-gray-900 border border-yellow-600/30 rounded-full text-yellow-500 text-sm flex items-center gap-2 hover:bg-yellow-900/10 transition-all"
                        >
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

      {/* メインコンテンツエリア（Gold MemberのUIに光沢を少し追加） */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 左カラム：ステータス表示 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 relative overflow-hidden group"
        >
          {/* 金色の光のエフェクト (デザイン性の向上) */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all"></div>
          
          <h2 className="text-gray-400 text-sm mb-2">CURRENT RANK</h2>
          <div className="text-3xl font-bold text-yellow-500">Gold Member</div>
          <p className="text-xs text-gray-500 mt-2">Proof Verified via Kindle</p>
        </motion.div>

        {/* 右カラム：メインアクション */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center relative"
          >
             <p className="text-gray-400">SOLUNA Mining Status Graph (Coming Soon)</p>
          </motion.div>
        </div>

      </main>
    </div>
  );
}