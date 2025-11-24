// components/ProblemSolution.tsx
import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="relative w-full">
      
      {/* ==============================================
          PART 1: THE PROBLEM (Shadow / Old World)
          テーマ: 消費される優しさ、孤立、モノクローム
      ============================================== */}
      <div className="relative py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* 課題の提起 */}
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-slate-500 leading-relaxed tracking-wide mb-10">
            なぜ、もっとも優しい人が<br />
            もっとも<span className="text-slate-300 border-b border-slate-600 pb-1">傷つかなければならない</span>のか？
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-8 md:leading-9 font-serif mb-16">
            誰かのために尽くす「ケア」が、評価されず、消費され、見えないまま埋もれていく。<br className="hidden md:block" />
            孤立の中で抱える痛み（ACEs）は、個人の責任として切り捨てられる。<br />
            <br />
            これが、私たちが生きる現代社会の「バグ」です。
          </p>

          {/* グリッチノイズ装飾 (閉塞感の演出) */}
          <div className="w-px h-20 mx-auto bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-50" />
        </div>
      </div>


      {/* ==============================================
          PART 2: THE SOLUTION (Light / Re-Verse World)
          テーマ: 資産となる優しさ、連携、オーロラ
      ============================================== */}
      <div className="relative py-32 bg-slate-900 overflow-hidden">
        
        {/* 背景の光 (反転の爆発) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-500/20 to-transparent blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          
          {/* 反転の宣言 */}
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-300 text-xs tracking-widest uppercase">
            The Great Inversion
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
            しかし、世界は<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">「反転」</span>する。
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-20">
            見えない「痛み」を癒やし、見えない「ケア」を価値に変える。<br className="hidden md:block" />
            Re-Verse Civilizationは、優しさが循環する新たな経済圏です。
          </p>

          {/* 3つの解決策 (Core Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-3">Proof of Care</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                ブロックチェーンが、あなたの優しさを永久に刻む。感謝の言葉やケアの行動が、改ざん不可能な「資産」となります。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Care Partner</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                最先端AIが、ACEsの痛みに寄り添い、あなただけの「回復のロードマップ」を伴走型でサポートします。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Well-being Democracy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                競争ではなく、共創へ。誰もが「自分らしく」あることが社会貢献になる、新しい民主主義の形。
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;