import "./globals.css"; 
import { WagmiProvider } from './WagmiProvider'; 

export const metadata = {
  title: "Re-Verse Civilization / SOLUNA",
  description: "Care Capitalism — Proof-of-Care™",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black text-white">
        {/* WagmiProviderは body の中に入れるのがベストプラクティスです */}
        <WagmiProvider>
          
          {/* ===== Header（共通） ===== */}
          <header className="w-full border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              {/* 左：ロゴ + サイト名 */}
              <a href="/" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
                <img src="/logo.png" alt="ACEs Care HUB JAPAN" className="h-6 w-6 rounded" />
                <span className="text-xs md:text-sm font-semibold tracking-wide">ACES Care HUB JAPAN</span>
              </a>

              {/* 右：ナビ（修正箇所） */}
              <nav className="flex items-center gap-4 md:gap-6">
                <a 
                  href="/claim" 
                  className="text-xs md:text-sm font-medium opacity-80 hover:opacity-100 transition-colors"
                >
                  共創参加
                </a>
                <a 
                  href="/thanks" 
                  className="text-xs md:text-sm font-medium opacity-80 hover:opacity-100 transition-colors"
                >
                  読者限定
                </a>
              </nav>
            </div>
          </header>

          {/* コンテンツ */}
          {children}

          {/* ===== Footer（共通） ===== */}
          <footer className="w-full border-t border-white/10 bg-black">
            <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm gap-4 md:gap-0">
              {/* 左下 */}
              <div className="opacity-70">© 2025 ACEs Care HUB JAPAN</div>
              {/* 右下 */}
              <div className="flex items-center gap-6">
                <a
                  href="https://tally.so/r/wM9JVY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-colors"
                >
                  β参加フォーム
                </a>
                <a
                  href="https://aces-care-hub-site-ru8w.vercel.app/legal/tokushoho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-colors"
                >
                  特定商取引法
                </a>
              </div>
            </div>
          </footer>
          
        </WagmiProvider>
      </body>
    </html>
  );
}