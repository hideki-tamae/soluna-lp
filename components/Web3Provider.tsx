'use client';

import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';

import {
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets, // ウォレットリストを自作するためにインポート
} from '@rainbow-me/rainbowkit';

// 👇 必要なウォレットのみを個別にインポート
import {
  coinbaseWallet, // Base Account (Smart Wallet)
} from '@rainbow-me/rainbowkit/wallets';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet, base, arbitrum, optimism, polygon } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// WalletConnectのプロジェクトID
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID';

// 1. ウォレットリストの定義：ここにあるものだけが表示されます
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        coinbaseWallet, // Base Account (Coinbase) のみを表示
      ],
    },
    // 将来的に「玄人向け (Pro Mode)」を追加する場合は、ここに新しいグループを作成します
  ],
  {
    appName: 'Re-Verse Civilization',
    projectId,
  }
);

// 2. Wagmi設定の作成：getDefaultConfigの代わりに手動設定で厳密に管理
const config = createConfig({
  chains: [base, mainnet, arbitrum, optimism, polygon], // Baseを最優先
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
  },
  connectors,
  ssr: true,
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          initialChain={base}
          theme={darkTheme({
            accentColor: '#22d3ee', // Re-Verse Cyan
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
          locale="ja" // 日本語対応
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}