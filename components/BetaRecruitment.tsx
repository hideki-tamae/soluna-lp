"use client";
import React from 'react';

const BetaRecruitment = () => {
  return (
    <section className="relative bg-black py-32 px-4 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ヘッダー */}
        <div className="text-center mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-widest uppercase mb-6">
            Recruitment
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-indigo-300 drop-shadow-[0_0_15px_rgba(165,180,252,0.3)]">
            βテスター募集要項 (Founding Member)
          </h2>
          <p className="text-gray-400 text-lg md:text-xl tracking-wide max-w-3xl mx-auto font-light">
            このβテストは、「ケアが制度になる文明」を共同で設計・検証する、<br className="hidden md:inline" />初期構築者を招致します。
          </p>
        </div>

        {/* 3カラムカード (Glassmorphism) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              role: "Civilization Architect",
              color: "blue",
              persona: "政策・制度設計、福祉現場、社会起業家",
              contribution: "Claimフローが社会システムとして機能する上での矛盾点、および法規制/運用面での問題提起。"
            },
            {
              role: "Protocol Engineer",
              color: "indigo",
              // 👇 ここを修正しました：インフラエンジニアも含めたフルスタックな表現に変更
              persona: "Web3技術者、セキュリティ監査人、フルスタックエンジニア（フロント/バックエンド/インフラ）",
              contribution: "Claim基盤、HMAC/Nonceロジック、ウォレット接続の技術的な脆弱性およびUXの検証。"
            },
            {
              role: "Care Pioneer",
              color: "cyan",
              persona: "ACEs、ヤングケアラー、当事者家族、福祉従事者",
              contribution: "Claimの体験が、実際のケア現場や生活においてどれほど意味を持つか、感情的なフィードバックを提供。"
            }
          ].map((item, index) => (
            <div key={index} className={`group bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:border-${item.color}-500/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`}>
              <div className={`text-${item.color}-400 text-sm font-bold tracking-widest mb-4 opacity-70`}>0{index + 1}.</div>
              <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all">
                {item.role}
              </h3>
              
              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-3">Target Persona</span>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {item.persona}
                </p>
              </div>
              
              <div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-3">Contribution</span>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.contribution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Benefits (Ultra Luxury Design) */}
        <div className="relative bg-gradient-to-b from-[#0f1014] to-black border border-white/10 rounded-3xl p-10 md:p-20 overflow-hidden shadow-2xl">
          {/* 金色の光の演出 */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 space-y-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-1.5 h-10 bg-gradient-to-b from-[#C0A062] to-[#8A6E3E] rounded-full shadow-[0_0_15px_rgba(192,160,98,0.5)]" />
                独占的なベネフィット
              </h3>
              
              <ul className="space-y-6">
                {[
                  { title: "Founder's Claim Guarantee", desc: "SOLUNAトークンのClaim権を確約し、優先付与。" },
                  { title: "Architects' Private Channel", desc: "コア開発チームとの限定コミュニティへの参加資格。" },
                  { title: "Contributor Log", desc: "Public Dashboardへの貢献者（Contributor）記録。" }
                ].map((benefit, i) => (
                  <li key={i} className="group flex items-start gap-6 p-4 rounded-xl transition-colors hover:bg-white/5 border border-transparent hover:border-white/5">
                    {/* アイコン部分：発光する金色のオーブ */}
                    <div className="mt-1 flex-shrink-0 relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E6C683] to-[#8E7036] p-[1px] shadow-[0_0_20px_rgba(192,160,98,0.3)]">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#E6C683]" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#E6C683] transition-colors">{benefit.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto text-center">
              <button className="group relative w-full lg:w-auto px-12 py-6 bg-gradient-to-br from-[#D4AF37] to-[#8A6E3E] text-black font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                {/* ボタンの光沢エフェクト */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                
                <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
                  いますぐ Founding Member に応募
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </button>
              <p className="mt-4 text-xs text-gray-500 font-mono">
                LIMITED SEATS AVAILABLE
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BetaRecruitment;