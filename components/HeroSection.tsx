import React from 'react';
import { ArrowRight, BookOpen, Globe, Dna, Box } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  // カードデータ定義
  const cards = [
    {
      title: "185+",
      subtitle: "GLOBAL REACH",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      description: (
        <>
          国境を超えた共感のネットワーク。<br />
          地球規模で広がる「反転」の波。
        </>
      ),
      gradient: "from-blue-400 via-blue-200 to-white",
      borderHover: "group-hover:border-blue-500/50",
      bgHover: "group-hover:bg-blue-900/10",
      iconBg: "bg-blue-900/20",
      subColor: "text-blue-400/80"
    },
    {
      title: "Scientific",
      subtitle: "EVIDENCE BASED",
      icon: <Dna className="w-6 h-6 text-purple-400" />,
      description: (
        <>
          Johns Hopkins等の世界的権威の<br />
          公衆衛生学知見をプロトコルに実装。
        </>
      ),
      gradient: "from-purple-400 via-pink-400 to-pink-200",
      borderHover: "group-hover:border-purple-500/50",
      bgHover: "group-hover:bg-purple-900/10",
      iconBg: "bg-purple-900/20",
      subColor: "text-purple-400/80"
    },
    {
      title: "SOLUNA",
      subtitle: "PROTOCOL",
      icon: <Box className="w-6 h-6 text-emerald-400" />,
      description: (
        <span>
          {/* PC(md以上)では強制的にブロック要素にして改行させる。モバイル(inline)では自然な折り返し。 */}
          <span className="inline md:block">優しさの行動証明を</span>
          <span className="inline md:block">ブロックチェーンに刻み、</span>
          <span className="inline md:block">不変の価値として資産化する。</span>
        </span>
      ),
      gradient: "from-emerald-400 via-teal-300 to-teal-100",
      borderHover: "group-hover:border-emerald-500/50",
      bgHover: "group-hover:bg-emerald-900/10",
      iconBg: "bg-emerald-900/20",
      subColor: "text-emerald-400/80"
    }
  ];

  const techStack = [
    "Ethereum", "Next.js", "Supabase", "Prisma", "Vercel"
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-black pb-20">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 h-[140vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/9.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      {/* --- HERO TEXT CONTENT AREA (幅狭め: max-w-5xl) --- */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-32 md:pt-48 mb-24 max-w-5xl">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-black/40 border border-white/20 backdrop-blur-md animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-mono text-blue-200 tracking-widest uppercase">
            Public Beta Coming Soon
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] leading-[0.95]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-200">
            Re-Verse
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 pb-2">
            Civilization
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-50 font-light tracking-[0.2em] uppercase mb-12 drop-shadow-md">
          Proof-of-Care Token
        </p>

        {/* Hero Description */}
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-16 font-medium drop-shadow-md">
          優しさが制度に統合し、見えない「ケア」を<br className="hidden md:block" />
          価値として証明する新たな社会OS。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <Link 
            href="/whitepaper"
            className="group relative px-8 py-4 bg-blue-600/90 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] overflow-hidden backdrop-blur-sm border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
            <span className="flex items-center gap-2 text-white font-bold tracking-wide">
              Whitepaperを読む
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <a 
            href="https://x.gd/8YyVc"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            <span className="flex items-center gap-3 text-white font-bold tracking-wider">
              <BookOpen className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
              Kindle
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce opacity-80 drop-shadow-md">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-1 mx-auto">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>

      {/* --- CARDS SECTION AREA (幅広め: max-w-7xl) --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-300 tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            共鳴する世界、実装される優しさ。
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl bg-[#050505] border border-white/10 transition-all duration-500 hover:-translate-y-1 ${card.borderHover} ${card.bgHover} shadow-lg`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-6 border border-white/5`}>
                    {card.icon}
                  </div>
                  
                  <div className={`text-xs font-bold tracking-[0.2em] mb-3 ${card.subColor}`}>
                    {card.subtitle}
                  </div>
                  
                  <h3 className={`text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${card.gradient} tracking-tight`}>
                    {card.title}
                  </h3>
                  
                  {/* descriptionのフォントサイズや行間を調整して見やすく */}
                  <div className="text-gray-400 font-medium leading-relaxed">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-gray-600 mb-8 uppercase">
            Powered by Global Standards
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {techStack.map((tech, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;