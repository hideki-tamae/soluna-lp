// src/app/pricing/page.tsx

import PricingSection from '@/components/PricingSection';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 料金ページ専用のヘッダー */}
      <header className="py-8 bg-indigo-600 text-white text-center">
        <h1 className="text-3xl font-bold">SOLUNA 料金プラン</h1>
        <p className="mt-2">お客様に最適なケア履歴証明ソリューション</p>
      </header>

      {/* 料金セクションの配置 */}
      <PricingSection />

      {/* 料金ページ専用のフッター */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="mb-2">
          <a href="/" className="underline hover:text-indigo-400 transition-colors">トップページに戻る</a>
        </p>
        &copy; 2025 SOLUNA. All rights reserved.
      </footer>
    </main>
  );
}