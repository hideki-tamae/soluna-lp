import React from 'react';

export default function Footer() {
  return (
    // 🚩 修正: mt-20 を削除し、上部マージンを RoadmapCTA 側に任せる
    <footer className="w-full py-10 text-center bg-black border-t border-gray-900">
      <div className="flex flex-col items-center gap-6">
        
        {/* Copyright */}
        <p className="text-xs text-gray-600 font-mono tracking-widest">
          © 2025 Re-Verse Civilization / ACES Care HUB JAPAN
        </p>

        {/* Links: Legal & Privacy */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] md:text-xs text-gray-500 font-medium tracking-wider uppercase">
          {/* 利用規約 */}
          <a 
            href="/terms" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            Terms of Service
          </a>

          <span className="text-gray-800">|</span>

          {/* プライバシーポリシー */}
          <a 
            href="/privacy" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            Privacy Policy
          </a>

          <span className="text-gray-800">|</span>

          {/* 特定商取引法 */}
          <a 
            href="https://aces-care-hub-site-ru8w.vercel.app/legal/tokushoho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors duration-300"
          >
            特定商取引法
          </a>
        </div>

      </div>
    </footer>
  );
}