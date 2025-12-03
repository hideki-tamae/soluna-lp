import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold">●</span> 
              </div>
              <span className="font-bold tracking-wider">ACES CARE HUB JAPAN</span>
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Re-Verse Civilization</p>
              <p>優しさが制度になる文明へ。</p>
            </div>
          </div>

          {/* Discovery Column - 修正箇所 */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Discovery</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                {/* 修正: <Link>から<a>へ変更し、/policyへ内部遷移 */}
                <a href="/policy" className="hover:text-blue-400 transition-colors">
                  SOLUNA Protocol & Policy
                </a>
              </li>
              <li>
                {/* 修正: <Link>から<a>へ変更し、/whitepaperへ内部遷移 */}
                <a href="/whitepaper" className="hover:text-blue-400 transition-colors">
                  Whitepaper (En/Jp)
                </a>
              </li>
              <li>
                {/* 外部遷移（Notion） */}
                <a 
                  href="https://www.notion.so/Public-Dashboard-2ac6197f1e5580699329eca765fce2f2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  Public Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Transparency Column - リンク設定完了済み */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Transparency</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              
              {/* Security & Audit (ファイルリンク) */}
              <li>
                <a 
                  href="/audit/report-v1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 group hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>Security & Audit</span>
                  <span className="px-2 py-0.5 text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded group-hover:bg-blue-500/30 transition-colors">
                    Live
                  </span>
                </a>
              </li>

              {/* Transaction Logs (CSV) (ファイルリンク) */}
              <li>
                <a 
                  href="/admin"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Transaction Logs (CSV)
                </a>
              </li>

              {/* Smart Contract (外部Etherscanリンク) */}
              <li>
                <a 
                  href="https://sepolia.etherscan.io/token/0x3F8125C9666014e7aB889d1c7689F18a38F6F4C5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Smart Contract Verification
                </a>
              </li>

            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                {/* 内部遷移（戻るボタンが出る） */}
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                {/* 内部遷移（戻るボタンが出る） */}
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                {/* 外部遷移（新規タブで開く） */}
                <a 
                  href="https://aces-care-hub-site-ru8w.vercel.app/legal/tokushoho"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  特定商取引法に基づく表記
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2025 Re-Verse Civilization / ACES CARE HUB JAPAN. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;