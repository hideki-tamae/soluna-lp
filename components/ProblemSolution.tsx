import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="relative w-full">
      
      {/* ==============================================
          PART 1: THE PROBLEM (Shadow / Old World)
      ============================================== */}
      <div className="relative py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* 課題の提起 (修正: 人たちが -> 人が) */}
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-slate-500 leading-relaxed tracking-wide mb-10">
            なぜ、もっとも優しい人が<br />
            もっとも<span className="text-slate-300 border-b border-slate-600 pb-1">傷つかなければならない</span>のか？
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-8 md:leading-9 font-serif mb-12">
            {/* 修正: 「ケア」が、の読点削除 */}
            誰かのために尽くす「ケア」が評価されず、消費され見えないまま埋もれていく。<br className="hidden md:block" />
            孤立の中で抱える痛み（ACEs）は、個人の責任として切り捨てられる。<br />
            <br />
            {/* 修正: 構造的バグ、改行位置 */}
            これが、私たちが生きる現代社会OSの<br className="md:hidden" />
            「構造的バグ」です。
          </p>

          {/* 追加: エモーショナルコピー (修正: その削除、1行化) */}
          <p className="text-base md:text-lg text-slate-400 font-serif italic mb-16 opacity-80">
            「あなたの優しさは弱さではありません。<br />
            世界を再生する、唯一無二の力です。」
          </p>

          {/* グリッチノイズ装飾 */}
          <div className="w-px h-20 mx-auto bg-gradient-to-b from-transparent via-slate-700 to-transparent opacity-50" />
        </div>
      </div>


      {/* ==============================================
          PART 2: THE SOLUTION (Light / Re-Verse World)
      ============================================== */}
      <div className="relative py-32 bg-slate-900 overflow-hidden">
        
        {/* 背景の光 */}
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
            Re-Verse Civilizationは、優しさが循環する
            <br className="md:hidden" />
            新たな経済圏です。
          </p>

          {/* 3つの解決策 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Feature 1: Proof of Care */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-300 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proof of Care</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                ブロックチェーンが、あなたの優しさを永久に刻む。感謝の言葉やケアの行動が、改ざん不可能な「資産」となります。
              </p>
            </div>

            {/* Feature 2: AI Care Partner */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-300 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Care Partner</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                最先端AIが、ACEsの痛みに寄り添い、あなただけの「回復のロードマップ」を伴走型でサポートします。
              </p>
            </div>

            {/* Feature 3: Well-being Democracy */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-300 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.272m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Well-being Democracy</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                競争ではなく、共創へ。誰もが「自分らしく」あることが社会貢献になる、New Social Standard。
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;