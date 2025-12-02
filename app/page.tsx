import HeroSection from '@/components/HeroSection';
import PolicySection from '@/components/PolicySection';
// 他のコンポーネントがあればインポート

export default function Home() {
  return (
    // 【修正】全体背景に header-bg.jpg を固定設定 (bg-fixed)
    <div 
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/header-bg.jpg')" }}
    >
      
      {/* 背景を少し暗くするためのオーバーレイ (必要に応じて) */}
      <div className="w-full h-full bg-black/40">
      
          {/* === 1. ヒーローセクション（動画あり） === */}
          <HeroSection />

          {/* === 2. 政策提言セクション === */}
          {/* PolicySection自体が透明または半透明なら背景が見えます */}
          <PolicySection />

          {/* フッターなど他の要素 */}
          <footer className="bg-black/60 border-t border-white/10 py-8 text-center text-xs text-gray-400">
             {/* 著作権表記など */}
             <div className="container mx-auto">
                 <p>© 2025 Re-Verse Civilization / ACES Care HUB JAPAN</p>
                 {/* リンク等 */}
             </div>
          </footer>
      
      </div>
    </div>
  )
}