'use client';

import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, base, arbitrum, optimism, polygon } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// WalletConnectのプロジェクトID (将来的に取得推奨ですが、開発中はこれで動作します)
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID';

const config = getDefaultConfig({
  appName: 'Re-Verse Civilization',
  projectId,
  chains: [base, mainnet, arbitrum, optimism, polygon], // Baseを最優先チェーンに設定
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