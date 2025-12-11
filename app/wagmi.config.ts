import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, mainnet, sepolia } from 'wagmi/chains';

// 世界最高のUXを実現する「Smart Walletファースト」設定
export const config = getDefaultConfig({
  appName: 'ACES CARE HUB JAPAN',
  
  // WalletConnect Cloud ID (本番時は必ず取得してください)
  projectId: 'YOUR_PROJECT_ID', 

  // ★重要変更: 'base' を配列の [0]番目（先頭）にします。
  // これにより、デフォルトの接続先がBaseになり、
  // RainbowKitは自動的に「Smart Wallet (顔認証)」を推奨表示にします。
  chains: [base, mainnet, sepolia],

  // Server Side Rendering有効化
  ssr: true, 
});