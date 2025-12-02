import HeroSection from '@/components/HeroSection';
import PolicySection from '@/components/PolicySection';
// 他に必要なセクションコンポーネントがあればここにインポートします。
// 例: import OtherSection from '@/components/OtherSection';

export default function Home() {
  return (
    // 【メインコンテナ】
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* === 1. ヒーローセクション（動画背景） === */}
      <HeroSection />

      {/* === 2. 政策提言セクション（ダウンロードボタン含む） === */}
      <PolicySection />

      {/* === 3. 他のセクションがあればここに配置 === */}
      {/* <OtherSection /> */}
      
      {/* --- フッター部分 (ここでは省略、PolicySection/app/page.tsx の下部にあるはずです) --- */}
      {/* このコンポーネントにフッターが含まれていない場合、別途フッターコンポーネントをインポート＆配置してください。 */}

    </div>
  )
}