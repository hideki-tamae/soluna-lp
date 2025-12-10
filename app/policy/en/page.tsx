// app/policy/en/page.tsx

'use client'; 

import React from "react";
import AntiCopyWrapper from "@/components/utils/AntiCopyWrapper"; 
import Link from 'next/link'; 
import Image from 'next/image'; // 1. Imageコンポーネントをインポート

// 2. 画像ファイルを直接インポートする（public/imagesからの相対パス）
// 画像ファイル名が En0.png, En1.png ... であることを前提とします。
import EnCover from "/public/images/En0.png"; 
import EnPage1 from "/public/images/En1.png"; 
import EnPage2 from "/public/images/En2.png";
import EnPage3 from "/public/images/En3.png";
import EnPage4 from "/public/images/En4.png";

// 元の定数宣言は削除またはコメントアウト
// const POLICY_PAGE_EN_COVER = "/images/En0.png"; 
// ...

const PolicyEnPage = () => {
  return (
    <div className="min-h-screen py-16 md:py-24 bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        
        {/* --- ヘッダー --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-orange-400 mb-2">
            Policy Paper (政策提言書)
          </h1>
          <p className="text-xl text-gray-400">English Version / View Only - Copyright Protected</p>
          
          <div className="mt-8">
            <h3 className="text-lg text-red-500 font-bold">
              PDF download has been disabled. The content below is view-only and protected against copying.
            </h3>
          </div>
          
          <Link href="/" passHref>
             <button className="mt-6 px-4 py-2 text-sm text-red-300 border border-red-500/50 rounded-full hover:bg-red-900/20 transition-colors">
                Back to LP Top
             </button>
          </Link>
        </div>

        {/* --- コンテンツ --- */}
        <AntiCopyWrapper>
          <div className="space-y-12">
            
            {/* ページ (カバー) */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-red-700">Cover</h2>
            {/* 🌟 3. Image コンポーネントに置き換え */}
            <Image 
              src={EnCover} 
              alt="Policy Cover Page" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10" 
              sizes="100vw"
            />

            {/* ページ 1 */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-red-700">Page 1 (Introduction/Challenge)</h2>
            <Image 
              src={EnPage1} 
              alt="Policy Page 1" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10" 
              sizes="100vw"
            />
            
            {/* ページ 2 */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-red-700">Page 2 (Tech/Scientific Basis)</h2>
            <Image 
              src={EnPage2} 
              alt="Policy Page 2" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10" 
              sizes="100vw"
            />

            {/* ページ 3 */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-red-700">Page 3 (Resilience/Economic Rationality)</h2>
            <Image 
              src={EnPage3} 
              alt="Policy Page 3" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10" 
              sizes="100vw"
            />

            {/* ページ 4 */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-red-700">Page 4 (Roadmap/Conclusion)</h2>
            <Image 
              src={EnPage4} 
              alt="Policy Page 4" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10" 
              sizes="100vw"
            />

          </div>
        </AntiCopyWrapper>

        <div className="text-center mt-12 text-sm text-gray-600">
          <p>Copyright © 2025 ACEs CARE HUB JAPAN. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default PolicyEnPage;