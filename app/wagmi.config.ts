import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
  // 1. 接続するチェーンを定義
  chains: [mainnet, sepolia],
  
  // 2. 接続方法を定義 (例: MetaMaskなど)
  connectors: [
    injected(),
  ],
  
  // 3. 各チェーンへの接続設定 (RPC URL)
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(), // <-- エラーの原因となっていた不要なコードを削除し、修正しました
  },
});