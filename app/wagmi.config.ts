import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, base } from 'wagmi/chains';

// 世界最高のUXを実現するデュアルコア設定
export const config = getDefaultConfig({
  appName: 'ACES CARE HUB JAPAN',
  
  // WalletConnect Cloud (https://cloud.walletconnect.com/) で取得したID推奨
  // ※開発中は 'YOUR_PROJECT_ID' のままでも動きますが、本番公開前に取得してください
  projectId: 'YOUR_PROJECT_ID', 

  // 使用するチェーン定義
  // Baseを追加することでスマートウォレット（顔認証）の体験が向上します
  chains: [mainnet, sepolia, base],

  // Server Side Rendering有効化（Next.js App Router必須）
  ssr: true, 
});