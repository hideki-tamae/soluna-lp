import "./globals.css";
import { Web3Provider } from "@/components/Web3Provider";
import Footer from "@/components/Footer";
import DisableContextMenu from "./DisableContextMenu";
// 👇 追加 1: ボタンの部品をインポート
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const metadata = {
  title: "Re-Verse Civilization / SOLUNA",
  description: "Care Capitalism — Proof-of-Care™",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hoverColorClass = "hover:text-cyan-400";

  return (
    <html lang="ja">
      <body className="bg-black text-white antialiased">
        <DisableContextMenu />

        <Web3Provider>
          {/* ===== Header ===== */}
          <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
              
              {/* ロゴエリア */}
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

              {/* ナビゲーションエリア */}
              <nav className="flex items-center gap-4 whitespace-nowrap">
                {/* 共創参加 */}
                <div className="hidden md:block rounded-md border border-transparent hover:border-cyan-400 transition-colors">
                  <a
                    href="https://tally.so/r/wM9JVY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold text-gray-300 ${hoverColorClass} transition-colors tracking-wider px-3 py-1`}
                  >
                    共創参加
                  </a>
                </div>

                {/* 読者限定 */}
                <div className="hidden md:block rounded-md border border-transparent hover:border-cyan-400 transition-colors">
                  <a
                    href="/claim"
                    className={`text-sm font-bold text-gray-300 ${hoverColorClass} transition-colors tracking-wider px-3 py-1`}
                  >
                    読者限定
                  </a>
                </div>

                {/* 👇 追加 2: ここに「指紋認証への入り口」を配置！ */}
                <div className="ml-2">
                    <ConnectButton 
                        label="Connect ID" 
                        accountStatus="avatar" 
                        chainStatus="icon"
                        showBalance={false}
                    />
                </div>

              </nav>
            </div>
          </header>

          {children}

          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}