// app/whitepaper/page.tsx 

import React from "react";
import AntiCopyWrapper from "@/components/utils/AntiCopyWrapper"; 

// 🚨 修正後のパス: public/images フォルダからのパスを指定
const WHITEPAPER_PAGE_1_IMG = "/images/white1.png"; 
const WHITEPAPER_PAGE_2_IMG = "/images/white2.png";
const WHITEPAPER_PAGE_3_IMG = "/images/white3.png";

// 🚨 政策提言書の画像パスも仮で設定 (例: public/images/policy.png)
const POLICY_PROPOSAL_IMG = "/images/policy_proposal_unauth.png"; 


const WhitepaperPage = () => {
  return (
    <div className="py-16 md:py-24 bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        
        {/* --- ヘッダー --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 mb-2">
            SOLUNA Proof-of-Care Token
          </h1>
          <p className="text-xl text-gray-400">Whitepaper (※閲覧専用・著作権保護)</p>
          
          <div className="mt-8">
            <h3 className="text-lg text-red-400 font-bold">
              PDFダウンロードリンクは終了しました。<br/>以下はコピペ防止処理が施された閲覧専用です。
            </h3>
          </div>
        </div>

        {/* --- コンテンツ --- */}
        {/* AntiCopyWrapperで全体を囲み、右クリック・コピペを無効化 */}
        <AntiCopyWrapper>
          <div className="space-y-12">
            
            {/* ページ 1: ホワイトペーパー */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-indigo-700">Whitepaper Page 1 (Abstract/Vision)</h2>
            <img 
              src={WHITEPAPER_PAGE_1_IMG} 
              alt="Whitepaper Page 1 - Unauthorized Copy" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />
            
            {/* ページ 2: ホワイトペーパー */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-indigo-700">Whitepaper Page 2 (Philosophy/Tech)</h2>
            <img 
              src={WHITEPAPER_PAGE_2_IMG} 
              alt="Whitepaper Page 2 - Unauthorized Copy" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />

            {/* ページ 3: ホワイトペーパー */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-indigo-700">Whitepaper Page 3 (Roadmap/Governance)</h2>
            <img 
              src={WHITEPAPER_PAGE_3_IMG} 
              alt="Whitepaper Page 3 - Unauthorized Copy" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </AntiCopyWrapper>
        
        <div className="text-center mt-12 text-sm text-gray-600">
          <p>最終目標は、Decentralized Governance (DAO)への移行です。</p>
        </div>

      </div>
    </div>
  );
};

export default WhitepaperPage;