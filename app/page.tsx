import React from 'react';
import { ArrowRight, Globe, Users, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    // 背景色を少しだけ明るくして、オーロラの光が映えるように調整
    <div className="relative min-h-screen w-full bg-[#07070c] text-white overflow-hidden font-sans selection:bg-purple-500/30">
      
      {/* --- 背景エフェクト (修正版：オーロラの視認性を大幅に強化) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* メインの紫のオーロラ（色を明るく、濃く調整） */}
        <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-purple-700/40 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* 青/シアンのオーロラ（右下、色を明るく調整） */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* ティール/緑のオーロラ（左側、アクセント） */}
        <div className="absolute top-[30%] left-[-20%] w-[600px] h-[600px] bg-teal-700/20 rounded-full blur-[120px] mix-blend-screen opacity-70" />
        
        {/* 全体の質感（ノイズ） */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
      </div>

      {/* --- メインコンテンツ --- */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        
        {/* タイトルセクション */}
        <div className="text-center max-w-5xl mx-auto mb-16 space-y-6">
          <div className="inline-block px-3 py-1 mb-4 text-xs tracking-widest text-purple-300 uppercase border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
            Public Beta Coming Soon
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-gray-400 drop-shadow-2xl">
            Re-Verse Civilization
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light tracking-wide text-purple-200/90 font-serif italic">
            SOLUNA <span className="font-semibold not-italic text-white">Proof-of-Care</span> Token
          </h2>
          
          <p className="max-w-3xl mx-auto mt-8 text-base md:text-lg text-gray-400 leading-relaxed">
            優しさが制度になる文明へ。<br className="hidden md:block" />
            AI・Web3・福祉を統合し、見えない「ケア」を価値として証明する新たな社会OS。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="px-8 py-4 text-sm font-bold text-white transition-all bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] flex items-center justify-center gap-2">
              Whitepaperを読む <ArrowRight size={16} />
            </button>
            <button className="px-8 py-4 text-sm font-bold text-gray-300 transition-all border border-gray-700 rounded-full hover:bg-white/5 hover:text-white hover:border-gray-500">
              世界観を体験する
            </button>
          </div>
        </div>

        {/* --- 3つのカードセクション --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-2">
          
          {/* Card 1: 世界観 (修正：改行位置を指定) */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20">
            <div className="w-12 h-12 mb-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform duration-500">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-100">Re-Verseの世界を五感で巡る</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              世界185ヶ国以上に響く音楽、心を揺さぶるデジタルアート、そして没入感あふれるVR展示。
              Re-Verseが織りなす新たな文明の物語を、<br />あなたの感覚で深くご体験ください。
            </p>
          </div>

          {/* Card 2: 参加・貢献 */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:border-pink-500/30 hover:shadow-2xl hover:shadow-pink-900/20">
            <div className="w-12 h-12 mb-6 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-300 group-hover:scale-110 transition-transform duration-500">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-100">未来を共創するケア推進者へ</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              ACES Care Hub JAPANの活動に参画し、「優しさが価値となる」ケア資本主義の実現に貢献しませんか。
              あなたの行動が、新しい文明を形作る力となります。
            </p>
          </div>

          {/* Card 3: 議論・DAO (修正：改行位置を指定) */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/20">
            <div className="w-12 h-12 mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform duration-500">
              <BookOpen size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-100">集合知が紡ぐ、文明の羅針盤</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Web3公民館にて、トークンの活用方針やDAOのルール設計について、未来を見据えた活発な議論に参加できます。
              知恵を共有し、<br />Re-Verseの基盤を共に築きましょう。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}