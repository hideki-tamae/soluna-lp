import React from 'react';

const RoadmapCTA = () => {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden">
      
      {/* 背景装飾: 終着点へ向かう光のライン */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617]" />
      
      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* --- ROADMAP SECTION --- */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200 mb-16">
            Roadmap to Re-Verse
          </h2>

          <div className="relative">
            {/* タイムラインの中央線 */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              
              {/* Phase 1: Current */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 group">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">2025 Q4</h3>
                  <p className="text-slate-400 text-sm">Community Building & System Audit</p>
                  <p className="text-slate-500 text-xs mt-1">コミュニティ形成・セキュリティ監査・法務調整</p>
                </div>
                {/* Center Point */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] -translate-x-1/2 order-1 md:order-2 z-10" />
                <div className="md:w-1/2 md:pl-12 order-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-200 text-xs font-semibold">
                    CURRENT PHASE
                  </div>
                </div>
              </div>

              {/* Phase 2: Beta Launch */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 group">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <div className="hidden md:block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs inline-block">
                    UPCOMING
                  </div>
                </div>
                {/* Center Point */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-slate-700 border border-slate-500 -translate-x-1/2 order-1 md:order-2 z-10 group-hover:bg-purple-500 group-hover:border-purple-300 transition-colors" />
                <div className="md:w-1/2 md:pl-12 order-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">2025 Dec - 2026 Jan</h3>
                  <p className="text-slate-400 text-sm">Public Beta Launch</p>
                  <p className="text-slate-500 text-xs mt-1">SOLUNAアプリ β版公開・初期サポーター募集開始</p>
                </div>
              </div>

              {/* Phase 3: Token Generation */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 group">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">2026 Q1</h3>
                  <p className="text-slate-400 text-sm">Token Generation Event (TGE)</p>
                  <p className="text-slate-500 text-xs mt-1">SOLUNAトークン発行・エコシステム本格稼働</p>
                </div>
                {/* Center Point */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-slate-700 border border-slate-500 -translate-x-1/2 order-1 md:order-2 z-10 group-hover:bg-emerald-500 group-hover:border-emerald-300 transition-colors" />
                <div className="md:w-1/2 md:pl-12 order-3">
                   {/* Empty for balance */}
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* --- CTA SECTION (Updated) --- */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-br from-cyan-500 via-purple-500 to-indigo-500">
          <div className="relative rounded-[20px] bg-[#0f172a] px-8 py-16 md:py-24 text-center overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              {/* ヘッドライン: 誰よりも早く体験する */}
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                新たな社会OSを、<br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">誰よりも早く体験</span>
              </h2>
              
              {/* サブコピー: 優先搭乗チケット */}
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                優しさが資産になる世界線へ。<br />
                β版の先行利用権や、開発の裏側が見れる限定コミュニティへの<br className="hidden md:block"/>
                「優先搭乗チケット」を手に入れましょう。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://tally.so/r/wM9JVY" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  β版 参加申し込み（無料）
                </a>
                <a 
                  href="#" // ※Discordリンクがあればここに入れる
                  className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition-all"
                >
                  Discordに参加する
                </a>
              </div>
              
              <p className="mt-8 text-xs text-slate-500">
                ※ 登録は無料です。いつでも解除できます。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RoadmapCTA;