import "./globals.css"; 
import { WagmiProvider } from './WagmiProvider'; 
import Footer from '@/components/Footer'; 

export const metadata = {
  title: "Re-Verse Civilization / SOLUNA",
  description: "Care Capitalism — Proof-of-Care™",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  // ホバーカラーの変数定義
  const hoverColorClass = "hover:text-cyan-400"; 

  return (
    <html lang="ja">
      <body className="bg-black text-white antialiased">
        <WagmiProvider>
          
          {/* ===== Header ===== */}
          <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
              
              {/* 🚩 修正 1: ACES Care HUB JAPAN ホバーカラー修正 */}
              <a 
                href="/" 
                className={`flex items-center gap-3 opacity-100 ${hoverColorClass} transition-colors`} 
              >
                <img 
                  src="/logo.png" 
                  alt="ACEs Care HUB JAPAN" 
                  className="h-8 w-8 rounded shadow-lg transition-transform" 
                />
                <span className="text-white font-bold tracking-wide text-sm md:text-base drop-shadow-md">
                  ACES CARE HUB JAPAN
                </span>
              </a>

              {/* 🚩 修正 2 & 3: ナビゲーションを四角で囲み、間隔を強制確保 */}
              <nav className="flex items-center **gap-2** whitespace-nowrap"> 
                
                {/* 共創参加 */}
                {/* リンクを囲むコンテナを作成し、paddingとborderを適用 */}
                <div className="rounded-md border border-transparent hover:border-cyan-400 transition-colors">
                  <a 
                    href="https://tally.so/r/wM9JVY" 
                    target="_blank"
                    rel="noopener noreferrer"
                    // リンク自体はテキストスタイルを維持し、コンテナで間隔調整
                    className={`text-sm font-bold text-gray-300 ${hoverColorClass} transition-colors tracking-wider px-3 py-1`}
                  >
                    共創参加
                  </a>
                </div>
                
                {/* 読者限定 */}
                {/* リンクを囲むコンテナを作成し、paddingとborderを適用 */}
                <div className="rounded-md border border-transparent hover:border-cyan-400 transition-colors">
                  <a 
                    href="/claim" 
                    className={`text-sm font-bold text-gray-300 ${hoverColorClass} transition-colors tracking-wider px-3 py-1`}
                  >
                    読者限定
                  </a>
                </div>
              </nav>
            </div>
          </header>

          {/* コンテンツ */}
          {children}

          {/* ===== Footer（コンポーネント読込） ===== */}
          <Footer />
          
        </WagmiProvider>
      </body>
    </html>
  );
}