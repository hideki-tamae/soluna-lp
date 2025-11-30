import "./globals.css"; 
import { WagmiProvider } from './WagmiProvider'; 
// ▼ 新しく作ったFooterコンポーネントを読み込み
import Footer from '@/components/Footer'; 

export const metadata = {
  title: "Re-Verse Civilization / SOLUNA",
  description: "Care Capitalism — Proof-of-Care™",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black text-white antialiased">
        <WagmiProvider>
          
          {/* ===== Header（視認性向上版） ===== */}
          {/* 背景を少し濃く(bg-black/80)し、文字をはっきりさせました */}
          <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
              
              {/* 左：ロゴ + サイト名（サイズアップ） */}
              <a href="/" className="flex items-center gap-3 opacity-100 hover:opacity-80 transition group">
                <img 
                  src="/logo.png" 
                  alt="ACEs Care HUB JAPAN" 
                  className="h-8 w-8 rounded shadow-lg group-hover:scale-105 transition-transform" 
                />
                <span className="text-white font-bold tracking-wide text-sm md:text-base drop-shadow-md">
                  ACES Care HUB JAPAN
                </span>
              </a>

              {/* 右：ナビ（サイズアップ & リンク修正） */}
              <nav className="flex items-center gap-5 md:gap-8">
                {/* 共創参加 -> Tallyフォームへ (別タブ) */}
                <a 
                  href="https://tally.so/r/wM9JVY" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-300 hover:text-cyan-400 transition-colors tracking-wider"
                >
                  共創参加
                </a>
                
                {/* 読者限定 -> アプリ内Claimページへ */}
                <a 
                  href="/claim" 
                  className="text-sm font-bold text-gray-300 hover:text-gold transition-colors tracking-wider"
                >
                  読者限定
                </a>
              </nav>
            </div>
          </header>

          {/* コンテンツ */}
          {children}

          {/* ===== Footer（コンポーネント読込） ===== */}
          {/* components/Footer.tsx が全ページで自動表示されます。
             規約・プライバシーポリシーへのリンクもここに含まれています。
          */}
          <Footer />
          
        </WagmiProvider>
      </body>
    </html>
  );
}