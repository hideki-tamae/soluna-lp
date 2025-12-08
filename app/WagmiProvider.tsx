// WagmiProvider.tsx

'use client';

// RainbowKitに必要なインポートを追加
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { WagmiProvider as Provider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './wagmi.config'; // 既存のwagmi設定をインポート
import { ReactNode } from 'react';

const queryClient = new QueryClient();

// RainbowKitの設定（チェーン）は、ここではwagmi.config.tsに依存します。
// getDefaultWalletsを使う代わりに、configのchainsを使います。
const chains = config.chains;

export function WagmiProvider({ children }: { children: ReactNode }) {
  return (
    <Provider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* WagmiProviderの子としてRainbowKitProviderを追加 */}
        <RainbowKitProvider chains={chains}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </Provider>
  );
}