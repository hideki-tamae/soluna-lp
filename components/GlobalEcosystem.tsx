import React from 'react';
import { Box, Heart, Globe, Layers, Sparkles, Cpu } from 'lucide-react';

const GlobalEcosystem = () => {
  const features = [
    {
      title: "Proof of Care",
      description: "あなたのケアの実践を、ブロックチェーン上の不可逆な記録として証明。優しさが「資産」として蓄積されます。",
      // Icon: A hyper-cube representing immutable data
      icon: (
        <div className="relative">
          <Box className="w-12 h-12 text-cyan-400 opacity-80" strokeWidth={1} />
          <Layers className="absolute top-0 left-0 w-12 h-12 text-blue-500 opacity-50 animate-pulse" strokeWidth={1} />
        </div>
      ),
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGlow: "group-hover:border-cyan-500/50",
      shadowGlow: "group-hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]"
    },
    {
      title: "Value of Kindness",
      description: "自己犠牲ではなく、正当な対価へ。トークンエコノミーにより、誰かを助ける行為が、経済的にも報われる社会へ。",
      // Icon: A pulsating organic heart with energy
      icon: (
        <div className="relative">
          <Heart className="w-12 h-12 text-fuchsia-400 opacity-80" strokeWidth={1} />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-300 opacity-70 animate-bounce" strokeWidth={1} />
        </div>
      ),
      gradient: "from-fuchsia-500/20 to-purple-500/20",
      borderGlow: "group-hover:border-fuchsia-500/50",
      shadowGlow: "group-hover:shadow-[0_0_50px_rgba(232,121,249,0.2)]"
    },
    {
      title: "Decentralized OS",
      description: "中央集権的な管理を排除し、透明なプログラム（Smart Contract）が公平な分配と秩序を自動執行します。",
      // Icon: A global network processing data
      icon: (
        <div className="relative">
          <Globe className="w-12 h-12 text-emerald-400 opacity-80" strokeWidth={1} />
          <Cpu className="absolute bottom-0 right-0 w-6 h-6 text-green-300 opacity-70" strokeWidth={1} />
        </div>
      ),
      gradient: "from-emerald-500/20 to-green-500/20",
      borderGlow: "group-hover:border-emerald-500/50",
      shadowGlow: "group-hover:shadow-[0_0_50px_rgba(52,211,153,0.2)]"
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm">
            <span className="text-xs font-mono text-blue-300 tracking-[0.2em] uppercase">
              The Great Inversion
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight drop-shadow-2xl">
            世界は <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">「反転」</span> する。
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            見えない「痛み」を癒やし、見えない「ケア」を価値に変える。<br className="hidden md:block" />
            <strong className="text-white font-medium">Re-Verse Civilization</strong>は、優しさが循環する新たな経済圏OSです。
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative p-10 rounded-3xl bg-[#0A0A0A] border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${feature.borderGlow} ${feature.shadowGlow}`}
            >
              {/* Internal Gradient Light */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container - No Box, Pure Light */}
                <div className="mb-10 p-2 inline-flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalEcosystem;