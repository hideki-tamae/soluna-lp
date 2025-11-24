import React from 'react';

export default function LandingTop() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#020617]">
      
      {/* --- 背景グラデーション (Midnight Blue & Aurora) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ベースの青黒いグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617]" />
        
        {/* オーロラのような光 (中央) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full opacity-60 mix-blend-screen animate-pulse-slow" />
        
        {/* アクセントのシアン (右上) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 blur-[100px] rounded-full opacity-40" />
      </div>

      {/* --- コンテンツエリア --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24">
        
        {/* PUBLIC BETA バッジ */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-widest text-purple-200 uppercase">
            Public Beta Coming Soon
          </span>
        </div>

        {/* メインタイトル */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
          Re-Verse Civilization
        </h1>
        <div className="text-2xl md:text-4xl font-serif italic text-slate-300 mb-8">
          <span className="text-slate-400">SOLUNA</span> <span className="font-bold text-white">Proof-of-Care</span> Token
        </div>

        {/* リードコピー */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          優しさが制度になる文明へ。<br />
          AI・Web3・福祉を統合し、見えない「ケア」を価値として証明する新たな社会OS。
        </p>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1">
            Whitepaperを読む →
          </a>
          <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all">
            世界観を体験する
          </a>
        </div>

        {/* 3つのカード (New Version) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-[#0f172a]/50 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-300 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S13.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Re-Verseの世界を五感で巡る</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              世界185ヶ国以上に響く音楽、心を揺さぶるデジタルアート、そして没入感あふれるVR展示。Re-Verseが織りなす新たな文明の物語を、あなたの感覚で深くご体験ください。
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-[#0f172a]/50 border border-white/10 backdrop-blur-md hover:border-purple-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-300 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.272m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">未来を共創するケアの推進者へ</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ACES Care Hub JAPANの活動に参加し、「優しさが価値となる」ケア資本主義の実現に貢献しませんか。あなたの行動が、新しい文明を形作る力となります。
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-[#0f172a]/50 border border-white/10 backdrop-blur-md hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-300 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">集合知が紡ぐ、文明の羅針盤</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Web3公民館にて、トークンの活用方針やDAOのルール設計について、未来を見据えた活発な議論に参加できます。知恵を共有し、Re-Verseの基盤を共に築きましょう。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}