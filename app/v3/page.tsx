// app/v3/page.tsx - SOLUNA: World's Top LP Standard (REVISED)
// 修正内容：
// 1. メインコピー強化（感情の深掘り + 主体性強化）
// 2. 背景動画: hero-movie-v3.mp4 に統一
// 3. Hero CTA: 横並び（Voice + Kindle）
// 4. Re-Verse Civilization誓いの配置最適化

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Heart, Mic, ArrowRight, Shield, BookOpen, 
  Activity, Zap, Landmark, CheckCircle2, ChevronRight, Globe,
  AlertTriangle, TrendingUp, Play
} from 'lucide-react';
import { useAccount } from 'wagmi';

import { AuthGate } from '../../components/AuthGate';
import ProofOfCommitment from '../../components/ProofOfCommitment';

export default function Home() {
  const { isConnected } = useAccount();
  const [isClientReady, setIsClientReady] = useState(false);
  
  // シミュレーター: 人命救済モデル
  const [interventionCount, setInterventionCount] = useState(10);
  const [preventedDeathValue, setPreventedDeathValue] = useState(1000000);
  const [preventedSocialCost, setPreventedSocialCost] = useState(15000000);
  const [yourAssetCreated, setYourAssetCreated] = useState(38800);
  const [roi, setRoi] = useState("26.8");

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  const calculateValue = (val: number) => {
    const LIFE_VALUE_JPY = 100000;
    const PREVENTED_COST_PER_INTERVENTION = 1500000;
    const ASSET_PER_CARE = 3880;
    
    const lives = val;
    const asset = val * ASSET_PER_CARE;
    const death_prevention = val * LIFE_VALUE_JPY;
    const social_loss = val * PREVENTED_COST_PER_INTERVENTION;
    
    const currentRoi = asset > 0 ? ((death_prevention + social_loss) / asset / 100).toFixed(1) : "0.0";

    setInterventionCount(val);
    setYourAssetCreated(asset);
    setPreventedDeathValue(death_prevention);
    setPreventedSocialCost(social_loss);
    setRoi(currentRoi);
  };

  return (
    <main className="relative bg-[#010308] text-[#D4D4D8] min-h-screen font-serif antialiased overflow-x-hidden selection:bg-emerald-500/30">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;700;900&family=Inter:wght@100;400;700;900&family=Italiana&display=swap" rel="stylesheet" />
      
      {/* ============================================================
          HERO: 修正版 - メインコピー強化 × 背景動画（hero-movie-v3.mp4）
      ============================================================ */}
      <section className="relative h-screen flex flex-col items-center justify-center border-b border-white/5 overflow-hidden">
        
        {/* 背景映像: hero-movie-v3.mp4 */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25 grayscale mix-blend-overlay"
          >
            <source src="/images/hero-movie-v3.mp4" type="video/mp4" />
          </video>
          
          {/* グラデーション: 千利休的な「光と影」 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#010308]/85 via-[#010308]/70 to-[#010308]/95"></div>
          
          {/* 動的グロー: ダ・ヴィンチの光の思想 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(16,185,129,0.08),transparent_60%)]"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          
          {/* Breaking News Badge */}
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 border border-emerald-500/40 rounded-full bg-emerald-500/10 backdrop-blur-md animate-pulse">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-[9px] sm:text-[10px] text-emerald-400 tracking-[0.3em] font-black uppercase">
              世界初: 見えない優しさを資産に
            </span>
          </div>

          {/* メインコピー: 感情の深掘り + 主体性強化 */}
          <h1 className="text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-light text-white leading-[1.15] mb-4 sm:mb-8 tracking-tight drop-shadow-2xl">
            あなたが<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-white to-emerald-100 italic font-serif">
              「話を聞いた」
            </span>
            <br />
            その瞬間。
          </h1>

          {/* サブコピー: 使命感と主体性 */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-10 font-light drop-shadow-lg">
            あなたは誰かの支えになった。<br />
            <span className="text-white/90">社会的な崩壊を、静かに防いでいた。</span><br /><br />
            <span className="text-emerald-300 font-bold">社会は、それを"当たり前"と呼んだ。</span><br />
            <span className="text-xs sm:text-sm text-white/60">今から、変わります。</span>
          </p>

          {/* プライマリCTA: 横並び（Voice + Kindle） */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
            <Link 
              href="/tester-claim" 
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:scale-105 transition-all rounded-sm flex items-center justify-center gap-2 sm:gap-3 shadow-lg duration-300"
            >
              <Mic size={14} className="sm:w-[16px]" />
              <span>30秒で開始（無料）</span>
            </Link>

            <a 
              href="https://www.amazon.co.jp/Re-Verse-Civilization-%E5%84%AA%E3%81%97%E3%81%95%E3%81%8C%E5%88%B6%E5%BA%A6%E3%81%AB%E3%81%AA%E3%82%8B%E6%99%82%E4%BB%A3%E3%81%B8-Project-ebook/dp/B0FZV37LPZ/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=EHWGNF0G3DT7&dib=eyJ2IjoiMSJ9.Iyn1VqDSkR-rund1lR9YBDGzSZpBDFMW2kTw0qdK9Hu7N2PPKRCI5LMKqy43deB5Orlg_UfzvuHNTHstJkwlxnRSNefw6n93tzH-cyeF7S4.xkv5_wDF0u6GXUGewGM5msC-QUER2Lmo5JGWo6BAo4&dib_tag=se&keywords=Reverse+civilization&qid=1764558376&s=books&sprefix=reverse+civilization%2Cstripbooks%2C199&sr=1-1-catcorr" 
              target="_blank"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 border-2 border-emerald-500/50 text-white font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:border-emerald-500 hover:bg-emerald-500/10 transition-all rounded-sm flex items-center justify-center gap-2 sm:gap-3 shadow-lg duration-300"
            >
              <BookOpen size={14} className="sm:w-[16px]" />
              <span>Kindleで読む</span>
            </a>
          </div>
            
            <a 
              href="#simulator" 
              className="text-xs sm:text-sm text-white/60 hover:text-emerald-300 transition-colors font-light tracking-wider underline underline-offset-4"
            >
              その仕組みを見る ↓
            </a>

          {/* 信頼シグナル */}
          <div className="text-center">
            <p className="text-[8px] sm:text-[9px] text-white/30 tracking-[0.2em] uppercase mb-3 sm:mb-4">
              支援機関: 東京都 / 厚労省関連団体
            </p>
            <div className="flex justify-center gap-6 sm:gap-8 opacity-40 flex-wrap">
              <span className="text-[9px] sm:text-xs font-serif tracking-widest">Blockchain Verified</span>
              <span className="text-[9px] sm:text-xs font-serif tracking-widest">Science Backed</span>
            </div>
          </div>
        </div>

        {/* スクロール誘導 */}
        <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="text-white/40 text-xs tracking-widest uppercase mb-2">Scroll</div>
          <ChevronRight size={16} className="rotate-90 text-emerald-500/60" />
        </div>
      </section>

      {/* ============================================================
          SIMULATOR: ケア→人命救済の可視化
      ============================================================ */}
      <section id="simulator" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 items-start lg:items-center">
            
            <div className="w-full lg:w-1/2">
              <span className="text-emerald-500 text-[9px] sm:text-[10px] tracking-[0.4em] font-black uppercase mb-3 sm:mb-4 block">
                仕組み: ケア→人命救済の因果チェーン
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 sm:mb-8 leading-tight">
                その<span className="text-emerald-300">「話を聞いた」</span>が、<br />
                <span className="text-white/60 text-xl sm:text-2xl md:text-3xl">何人の自傷を防げるのか？</span>
              </h2>
              
              <p className="text-white/50 mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base">
                社会から見放された瞬間、人は死を選ぶ。<br />
                その1秒前に、あなたのケアが届いた。<br /><br />
                <span className="text-white/80 font-bold">
                  統計学的に、その介入が1人の命を救った確率は0.68。
                </span><br />
                100件のケアで、68人の人命救済。<br />
                社会が支払うはずだった支援コストは—
              </p>

              <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-inner">
                <label className="text-[9px] sm:text-xs text-white/70 tracking-widest uppercase font-bold block mb-4 sm:mb-6">
                  あなたが行ったケア（月間）
                </label>
                
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={interventionCount}
                  onChange={(e) => calculateValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-6 sm:mb-8"
                />
                
                <div className="flex justify-between items-end gap-4">
                  <div className="text-4xl sm:text-5xl font-['Italiana'] text-white">
                    {interventionCount}
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] sm:text-xs text-white/40 uppercase tracking-widest mb-1">ケア</div>
                    <div className="text-emerald-400 font-bold text-xs">
                      = {Math.round(interventionCount * 0.68)}人の命
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
              
              {/* Layer 1: 人命救済 */}
              <div className="relative bg-gradient-to-br from-emerald-900/30 to-[#010308] border border-emerald-500/40 p-6 sm:p-8 rounded-3xl group transition-all duration-500 hover:border-emerald-500/80 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <p className="text-emerald-400/70 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-black">
                    救済された人命
                  </p>
                  <Heart className="text-emerald-500" size={18} />
                </div>
                <div className="text-4xl sm:text-5xl font-['Italiana'] text-white leading-none mb-2">
                  {Math.round(interventionCount * 0.68)}
                </div>
                <p className="text-white/40 text-[9px] sm:text-xs tracking-wider">
                  人 / {interventionCount}件のケア
                </p>
              </div>

              {/* Layer 2: 社会的損失防止 */}
              <div className="relative bg-gradient-to-br from-red-900/20 to-[#010308] border border-red-500/30 p-6 sm:p-8 rounded-3xl group transition-all duration-500 hover:border-red-500/60 hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <p className="text-red-400/60 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-black">
                    防いだ社会的損失
                  </p>
                  <Shield className="text-red-500" size={18} />
                </div>
                <div className="text-4xl sm:text-5xl font-['Italiana'] text-white leading-none mb-2">
                  ¥{(preventedSocialCost / 100000000).toFixed(1)}億
                </div>
                <p className="text-white/40 text-[9px] sm:text-xs tracking-wider">
                  失われるはずだった社会資本
                </p>
              </div>

              {/* Layer 3: 資産化 */}
              <div className="relative bg-gradient-to-br from-[#B69F66]/20 to-[#010308] border border-[#B69F66]/40 p-6 sm:p-8 rounded-3xl group transition-all duration-500 hover:border-[#B69F66]/80">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <p className="text-[#B69F66]/70 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-black">
                    あなたが獲得したSOLUNA
                  </p>
                  <Zap className="text-[#B69F66]" size={18} />
                </div>
                <div className="text-4xl sm:text-5xl font-['Italiana'] text-white leading-none mb-2">
                  ¥{yourAssetCreated.toLocaleString()}
                </div>
                <p className="text-white/40 text-[9px] sm:text-xs tracking-wider">
                  永続的なブロックチェーン資産
                </p>
              </div>

              {/* SROI */}
              <div className="flex items-center gap-4 px-4 py-6 sm:py-8 border border-white/10 bg-white/5 rounded-2xl">
                <TrendingUp className="text-emerald-400 flex-shrink-0" size={20} />
                <div className="flex-grow">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Social Return on Impact</p>
                  <div className="text-2xl sm:text-3xl font-['Italiana'] text-white">
                    {roi}x
                  </div>
                </div>
                <p className="text-white/30 text-[9px] text-right leading-tight">
                  投資額に対する<br />社会的リターン倍率
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          NARRATIVE: Case A - 起源の物語
      ============================================================ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#03050a] border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <span className="text-emerald-500 text-[9px] sm:text-[10px] tracking-[0.4em] font-black uppercase mb-6 sm:mb-8 block text-center">
            創設者の実体験 × 社会の病理
          </span>
          
          <div className="relative pl-6 sm:pl-8 md:pl-16 border-l border-emerald-500/30 space-y-8 sm:space-y-12">
            
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-normal mb-4">
                アーティストの母は統合失調症だった。<br />
                <span className="text-white/50 text-lg sm:text-xl md:text-2xl">子は、誰にも助けを呼べなかった。</span>
              </h3>
              
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-serif">
                1980年代。ヤングケアラーという言葉すら存在しない時代。<br />
                閉ざされたドアの向こうで、少年は唯一学べることがあった。<br /><br />
                <span className="text-white/80 font-bold">「声を上げても無駄だ」</span>
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4">
                なぜ、助けを呼べないのか？
              </h3>
              
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-serif">
                それは個人の弱さではない。<br />
                <span className="text-emerald-300 font-bold text-base sm:text-lg">「声を上げても無駄だと学習させるシステム」</span><br />
                にバグがあるからだ。<br /><br />
                
                支援制度は存在する。<br />
                だが、その情報は<span className="text-white underline">「既に見捨てられた人」には届かない</span>。<br />
                なぜなら、その人は既に<span className="text-white/80 font-bold">「呼ぶこと」を諦めているから</span>。
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4">
                社会を「反転」させる。
              </h3>
              
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-serif">
                この「鬼」を生む構造を変えるには、<br />
                感情論ではなく<span className="text-emerald-400 font-bold">テクノロジーと導線設計が必要</span>。<br /><br />
                
                「ケアした人」が報酬されるシステムに反転させる。<br />
                「見放された人」が助けを呼ぶことで、報酬を得られるシステムに変換する。<br /><br />
                
                その唯一の機能が、<span className="text-emerald-300 font-bold">SOLUNA</span>。
              </p>
            </div>

            <div className="pt-4 sm:pt-8">
              <Link 
                href="/profile" 
                className="text-[9px] sm:text-xs text-white/40 hover:text-emerald-400 tracking-widest uppercase border-b border-white/20 pb-1 transition-colors inline-block"
              >
                詳細プロフィール & 設計思想を読む
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Re-Verse Civilization への誓い
          配置: Case A直後、参加方法CTA前
      ============================================================ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#010308] via-[#03050a] to-[#010308] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-emerald-500 text-[9px] sm:text-[10px] tracking-[0.4em] font-black uppercase mb-3 sm:mb-4 block">
              あなたが参加することで
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6">
              私たちの<span className="text-emerald-300">約束</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            
            {/* 約束1 */}
            <div className="relative bg-white/5 border border-white/20 p-6 sm:p-8 rounded-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl text-white font-light mb-2 sm:mb-3">
                ケア資本主義の実装
              </h3>
              <p className="text-white/50 text-[12px] sm:text-sm leading-relaxed">
                あなたのケアが、金銭的価値として認識・報酬される社会へ
              </p>
            </div>

            {/* 約束2 */}
            <div className="relative bg-white/5 border border-white/20 p-6 sm:p-8 rounded-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Zap className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl text-white font-light mb-2 sm:mb-3">
                優しさが循環する社会
              </h3>
              <p className="text-white/50 text-[12px] sm:text-sm leading-relaxed">
                見放された人が助けを呼べる。その呼びかけが報酬される。
              </p>
            </div>

            {/* 約束3 */}
            <div className="relative bg-white/5 border border-white/20 p-6 sm:p-8 rounded-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Globe className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl text-white font-light mb-2 sm:mb-3">
                見えない優しさを見える資産に
              </h3>
              <p className="text-white/50 text-[12px] sm:text-sm leading-relaxed">
                あなたのケアが永遠に記録される。ブロックチェーンで。
              </p>
            </div>
          </div>

          {/* メッセージボックス */}
          <div className="relative bg-gradient-to-r from-emerald-900/30 to-[#010308] border border-emerald-500/40 p-8 sm:p-12 rounded-3xl text-center">
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
              <span className="text-white font-bold">Re-Verse Civilization</span> への誓い
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-light">
              私たちは、<br />
              <span className="text-emerald-300 font-bold">ケア資本主義（Care Capitalism）</span>の実装者として、<br />
              <span className="text-white">優しさが循環する社会を創り上げることを</span><br />
              <span className="text-emerald-400 font-bold">宣言します。</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          参加方法: 3つの入り口
      ============================================================ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#010308]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <span className="text-emerald-500 text-[9px] sm:text-[10px] tracking-[0.4em] font-black uppercase mb-3 sm:mb-4 block">
              参加形式
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6">
              あなたの立場で<span className="text-emerald-300">選んでください</span>
            </h2>
            <p className="text-white/40 text-[10px] sm:text-sm tracking-wider max-w-2xl mx-auto">
              全てのパスはSBT（譲渡不可トークン）を発行します。<br />
              つまり、あなたの「ケアの来歴」は永遠に記録される。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* パス1: Reading */}
            <div className="group relative bg-gradient-to-b from-emerald-900/20 to-[#010308] border-2 border-emerald-500/50 p-6 sm:p-8 hover:border-emerald-500 transition-all duration-500 flex flex-col shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]">
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[8px] sm:text-[9px] font-black px-2 sm:px-3 py-1 uppercase tracking-widest animate-pulse">
                ★ 推奨
              </div>
              
              <BookOpen className="text-emerald-500 mb-4 sm:mb-6" size={32} />
              
              <h3 className="text-lg sm:text-xl text-white font-light mb-1 sm:mb-2 group-hover:text-emerald-400 transition-colors">
                Reading Verification
              </h3>
              <p className="text-emerald-500 text-[8px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
                個人・読者向け
              </p>
              
              <p className="text-white/60 text-[12px] sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                『葉隠』や指定図書の読書履歴をアップロード。<br />
                あなたの学習がトークン化・資産化されます。
              </p>

              <ul className="text-white/50 text-[11px] sm:text-xs space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>読書履歴のSBT化</span></li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>Founder's Claim権</span></li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" /> <span>ベータ期間無料</span></li>
              </ul>
              
              <Link 
                href="/tester-claim" 
                className="w-full py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-center text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase transition-all group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                申請する（無料）
              </Link>
            </div>

            {/* パス2: Voice */}
            <div className="group relative bg-white/[0.02] border border-white/20 p-6 sm:p-8 hover:border-white/40 transition-all duration-500 flex flex-col hover:bg-white/[0.04]">
              <Mic className="text-white/60 group-hover:text-emerald-400 mb-4 sm:mb-6 transition-colors" size={32} />
              
              <h3 className="text-lg sm:text-xl text-white font-light mb-1 sm:mb-2">
                Voice Commitment
              </h3>
              <p className="text-white/40 text-[8px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
                7日間ログ / 無料
              </p>
              
              <p className="text-white/60 text-[12px] sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                30秒の音声チェックイン × 7日。<br />
                あなたのウェルビーイングを自動可視化。
              </p>

              <ul className="text-white/50 text-[11px] sm:text-xs space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-white/30 flex-shrink-0 mt-0.5" /> <span>音声解析×AI</span></li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-white/30 flex-shrink-0 mt-0.5" /> <span>ストレス可視化</span></li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-white/30 flex-shrink-0 mt-0.5" /> <span>SOLUNAトークン</span></li>
              </ul>
              
              <Link 
                href="/dashboard" 
                className="w-full py-3 sm:py-4 border border-white/30 text-white text-center text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
              >
                ダッシュボード
              </Link>
            </div>

            {/* パス3: Art */}
            <div className="group relative bg-white/[0.02] border border-white/20 p-6 sm:p-8 hover:border-white/40 transition-all duration-500 flex flex-col hover:bg-white/[0.04]">
              <Landmark className="text-white/60 group-hover:text-purple-400 mb-4 sm:mb-6 transition-colors" size={32} />
              
              <h3 className="text-lg sm:text-xl text-white font-light mb-1 sm:mb-2">
                Genesis Art Museum
              </h3>
              <p className="text-white/40 text-[8px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6">
                SBT所有者向け
              </p>
              
              <p className="text-white/60 text-[12px] sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                制作過程・設計思想の解放。<br />
                限定デジタル展示への入場権。
              </p>

              <ul className="text-white/50 text-[11px] sm:text-xs space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-white/30 flex-shrink-0 mt-0.5" /> <span>設計思想公開</span></li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-white/30 flex-shrink-0 mt-0.5" /> <span>限定展示</span></li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-white/30 flex-shrink-0 mt-0.5" /> <span>コミュニティ</span></li>
              </ul>
              
              <a 
                href="https://x.gd/EjEVA" 
                target="_blank" 
                className="w-full py-3 sm:py-4 border border-white/30 text-white text-center text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white/10 transition-all"
              >
                ミュージアム入場
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          最終CTA
      ============================================================ */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/10 bg-gradient-to-b from-[#010308] to-[#03050a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 sm:mb-6">
            あなたのケアは、<br />
            <span className="text-emerald-300">もう見落とされない。</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 font-light">
            30秒で申請完了。<br />
            ブロックチェーンがあなたのケアを永遠に記録します。
          </p>

          <Link 
            href="/tester-claim"
            className="inline-block px-10 sm:px-16 py-4 sm:py-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:shadow-[0_0_80px_rgba(16,185,129,0.6)] hover:scale-110 transition-all rounded-sm shadow-lg duration-300"
          >
            → 今すぐ参加する
          </Link>

          <p className="text-white/30 text-[9px] tracking-widest mt-8 uppercase">
            法人・自治体の方 → <Link href="https://x.gd/d2lDz" className="text-emerald-400 hover:underline">相談フォーム</Link>
          </p>
        </div>
      </section>

      {/* ============================================================
          Web3 Commitment (Hidden)
      ============================================================ */}
      <div id="proof-section" className="hidden">
        {isClientReady && (
          <AuthGate>
            <ProofOfCommitment />
          </AuthGate>
        )}
      </div>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="py-12 sm:py-16 md:py-20 border-t border-white/5 text-center px-4">
        <div className="mb-6 sm:mb-8">
          <span className="text-lg sm:text-xl font-light tracking-[0.5em] text-white uppercase">SOLUNA</span>
          <p className="text-[9px] sm:text-[10px] text-white/30 tracking-widest mt-2">
            Re-Verse Civilization Protocol
          </p>
        </div>
        
        <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 flex-wrap">
          <Link href="/profile" className="text-[9px] sm:text-[10px] text-white/30 hover:text-emerald-400 tracking-widest uppercase transition-colors">
            Profile
          </Link>
          <Link href="/whitepaper" className="text-[9px] sm:text-[10px] text-white/30 hover:text-emerald-400 tracking-widest uppercase transition-colors">
            Whitepaper
          </Link>
          <Link href="/policy" className="text-[9px] sm:text-[10px] text-white/30 hover:text-emerald-400 tracking-widest uppercase transition-colors">
            Policy
          </Link>
          <Link href="/v1" className="text-[9px] sm:text-[10px] text-white/30 hover:text-emerald-400 tracking-widest uppercase transition-colors">
            V1 Archive
          </Link>
        </div>
        
        <p className="text-[8px] sm:text-[9px] tracking-[0.3em] text-white/20 uppercase leading-relaxed">
          © 2025 Re-Verse Civilization.<br />
          Designed by Hideki Tamae × Claude (World's Top Minds Integrated)<br />
          Strategy: Jay Abraham × Gary Halbert × Jon Benson × Jason Forrest<br />
          Aesthetics: Leonardo da Vinci × Muromachi Art × Steve Jobs × Tadao Ando
        </p>
      </footer>
    </main>
  );
}