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
                {/* 以前の●マークから、より洗練された記号へ変更も可能 (例: ◆) */}
                <span className="text-blue-500 font-bold">●</span> 
              </div>
              <span className="font-bold tracking-wider">ACES CARE HUB JAPAN</span>
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Re-Verse Civilization</p>
              <p>優しさが制度になる文明へ。</p>
            </div>
          </div>

          {/* Discovery Column (装飾適用) */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Discovery</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              
              {/* Re-Verse Code Diagnosis: ✦で装飾 */}
              <li>
                <a 
                  href="https://tally.so/r/mK7Yez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group"
                >
                  <span className="text-cyan-400 group-hover:text-blue-400 transition-colors">✦</span> 
                  Re-Verse Code Diagnosis 
                </a>
              </li>

              {/* 知的ルーツ (Library): ✦で装飾 */}
              <li>
                <a 
                  href="https://www.notion.so/SOLUNA-The-Intellectual-Roots-2c06197f1e5580288650d94d468a01d2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group"
                >
                  <span className="text-cyan-400 group-hover:text-blue-400 transition-colors">✦</span> 
                  Intellectual Roots 
                </a>
              </li>
              
              {/* SOLUNA Protocol & Policy: リンクを強調 */}
              <li>
                <a href="/policy" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group">
                  <span className="text-cyan-400/50 group-hover:text-blue-400 transition-colors">◆</span> 
                  SOLUNA Protocol & Policy
                </a>
              </li>
              {/* Whitepaper (En/Jp) */}
              <li>
                <a href="/whitepaper" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group">
                   <span className="text-cyan-400/50 group-hover:text-blue-400 transition-colors">◆</span>
                   Whitepaper (En/Jp)
                </a>
              </li>
              {/* Public Dashboard */}
              <li>
                <a 
                  href="https://www.notion.so/Public-Dashboard-2ac6197f1e5580699329eca765fce2f2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group"
                >
                  <span className="text-cyan-400/50 group-hover:text-blue-400 transition-colors">◆</span>
                  Public Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Transparency Column (装飾適用) */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Transparency</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              
              {/* Official Blueprint: ◈で装飾 */}
              <li>
                <a 
                  href="https://www.notion.so/Project-SOLUNA-Genesis-The-Blueprint-2bf6197f1e5580b296b0f6faff4c0233" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group"
                >
                  <span className="text-cyan-400 group-hover:text-blue-400 transition-colors">◈</span>
                  Official Blueprint 
                </a>
              </li>

              {/* Security & Audit (監査ページへ): ◈で装飾 */}
              <li>
                <a 
                  href="/audit"
                  target="_self" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 group hover:text-blue-400 transition-colors cursor-pointer text-white/90 font-medium"
                >
                  <span className="text-cyan-400/50 group-hover:text-blue-400 transition-colors">◈</span>
                  <span>Security & Audit</span>
                  <span className="px-2 py-0.5 text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded group-hover:bg-blue-500/30 transition-colors">
                    Live
                  </span>
                </a>
              </li>

              {/* Transaction Logs (CSV) (監査ページへ) */}
              <li>
                <a 
                  href="/audit" 
                  target="_self" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2 text-white/90 font-medium group"
                >
                  <span className="text-cyan-400/50 group-hover:text-blue-400 transition-colors">◈</span>
                  Transaction Logs (CSV)
                </a>
              </li>

              {/* Smart Contract (外部Etherscanリンク) */}
              <li>
                <a 
                  href="https://sepolia.etherscan.io/token/0x3F8125C9666014e7aB889d1c7689F18a38F6F4C5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2 text-white/90 font-medium group"
                >
                  <span className="text-cyan-400/50 group-hover:text-blue-400 transition-colors">◈</span>
                  Smart Contract Verification
                </a>
              </li>

            </ul>
          </div>

          {/* Legal Column (装飾適用) */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {/* Privacy Policy: §で装飾 */}
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group">
                  <span className="text-gray-500 group-hover:text-blue-400 transition-colors">§</span>
                  Privacy Policy
                </Link>
              </li>
              {/* Terms of Service: §で装飾 */}
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group">
                  <span className="text-gray-500 group-hover:text-blue-400 transition-colors">§</span>
                  Terms of Service
                </Link>
              </li>
              {/* 特定商取引法に基づく表記: §で装飾 */}
              <li>
                <a 
                  href="https://aces-care-hub-site-ru8w.vercel.app/legal/tokushoho"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-white/90 font-medium group"
                >
                  <span className="text-gray-500 group-hover:text-blue-400 transition-colors">§</span>
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