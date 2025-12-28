// app/layout.tsx
import "./globals.css";
// 🚨 修正: '../src/components/' から 'src/' を削除
import { Web3Provider } from "../components/Web3Provider"; 
import Footer from "../components/Footer";
import DisableContextMenu from "./DisableContextMenu";
// ConnectButtonの直接インポートを削除（変更なし）
// import { ConnectButton } from '@rainbow-me/rainbowkit';

// 🚨 修正: '../src/components/' から 'src/' を削除
import MobileAuthButton from "../components/MobileAuthButton"; 

// 🚨 【削除】一時的なWeb3Providerプレースホルダー関数を削除しました。

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

        {/* <Web3Provider> は本来のコンポーネントとして機能します */}
        <Web3Provider> 
          {/* ===== Header ===== */}
          <header className="w-full border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
              
              {/* ロゴエリア (変更なし) */}
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
                {/* 共創参加 (変更なし) */}
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

                {/* 読者限定 (変更なし) */}
                <div className="hidden md:block rounded-md border border-transparent hover:border-cyan-400 transition-colors">
                  <a
                    href="/tester-claim"
                    className={`text-sm font-bold text-gray-300 ${hoverColorClass} transition-colors tracking-wider px-3 py-1`}
                  >
                    読者限定
                  </a>
                </div>

                {/* MobileAuthButton の利用を復元 */}
                <div className="ml-2">
                    <MobileAuthButton /> 
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