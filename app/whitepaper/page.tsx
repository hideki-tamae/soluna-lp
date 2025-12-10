// app/whitepaper/page.tsx の該当箇所

import React from "react";
import AntiCopyWrapper from "@/components/utils/AntiCopyWrapper"; 

// 🚨 修正後のパス: public/images フォルダからのパスを指定
const WHITEPAPER_PAGE_1_IMG = "/images/white1.png"; 
const WHITEPAPER_PAGE_2_IMG = "/images/white2.png";
const WHITEPAPER_PAGE_3_IMG = "/images/white3.png";

// 🚨 政策提言書の画像パスも仮で設定 (例: public/images/policy.png)
const POLICY_PROPOSAL_IMG = "/images/policy_proposal_unauth.png"; 


const WhitepaperPage = () => {
// ... (中略) ...

        {/* --- コンテンツ --- */}
        <AntiCopyWrapper>
          <div className="space-y-12">
            
            {/* ページ 1 */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-indigo-700">Whitepaper Page 1 (Abstract/Vision)</h2>
            <img 
              src={WHITEPAPER_PAGE_1_IMG} 
              alt="Whitepaper Page 1 - Unauthorized Copy" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />
            
            {/* ページ 2 */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-indigo-700">Whitepaper Page 2 (Philosophy/Tech)</h2>
            <img 
              src={WHITEPAPER_PAGE_2_IMG} 
              alt="Whitepaper Page 2 - Unauthorized Copy" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />

            {/* ページ 3 */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-indigo-700">Whitepaper Page 3 (Roadmap/Governance)</h2>
            <img 
              src={WHITEPAPER_PAGE_3_IMG} 
              alt="Whitepaper Page 3 - Unauthorized Copy" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />

            {/* 政策提言書のセクション */}
            <h2 className="text-3xl font-bold text-white pt-10 border-t border-red-700">Policy Proposal (政策提言)</h2>
            <img 
              src={POLICY_PROPOSAL_IMG} 
              alt="Policy Proposal - Unauthorized Copy" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </AntiCopyWrapper>
        
        {/* ... (以下略) ... */}