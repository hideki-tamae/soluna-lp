import { Landmark, ShieldCheck, Cpu, Feather, CheckCircle2 } from 'lucide-react';

export default function ArchitectProfile() {
  return (
    <section className="relative py-32 bg-[#020205] overflow-hidden">
      
      {/* 背景：ノイズと深い闇 */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* ヘッダー：金属的なグラデーション */}
        <div className="text-center mb-24">
          <span className="inline-block py-1 px-3 border border-white/10 rounded-sm text-gray-500 text-[10px] tracking-[0.4em] mb-8 uppercase">
            Organizer Profile
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Liberal Arts Architect
            </span>
          </h1>
          <p className="text-xl text-gray-500 font-light tracking-wider">
            技術 × 制度 × 思想 を統合する <span className="text-gray-300 border-b border-gray-700 pb-1">文明OSデザイナー</span>
          </p>
        </div>

        {/* 4つの権威セクション：モノリス・スタイル */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Block 1: Scientific Foundation */}
          <div className="group relative p-10 rounded-[4px] bg-[#0A0A0F] border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-[#0F0F16]">
            {/* 左側のアクセントライン */}
            <div className="absolute left-0 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-5 mb-8">
              {/* アイコン：Landmark (権威・大学) */}
              <Landmark className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors stroke-1" />
              <h3 className="text-2xl font-medium text-white tracking-wide">Scientific Foundation</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Yale University: Science of Well-Being (Adult & Teen) Completed",
                "University of Pennsylvania: Positive Psychology Completed",
                "UCLA – UCSF: ACEs Aware Completed",
                "University of Minnesota: Resilience in Trauma, Disaster, and War Completed",
                "Johns Hopkins University: Psychological First Aid (PFA) Completed"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-gray-600 group-hover:text-blue-400/50 flex-shrink-0" />
                  <span className="text-sm leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 2: Public Health Expertise */}
          <div className="group relative p-10 rounded-[4px] bg-[#0A0A0F] border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-[#0F0F16]">
            <div className="absolute left-0 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-5 mb-8">
              {/* アイコン：ShieldCheck (予防・守る) */}
              <ShieldCheck className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors stroke-1" />
              <h3 className="text-2xl font-medium text-white tracking-wide">Public Health Expertise</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Johns Hopkins University: Essential Epidemiology Tools Completed",
                "Preventive Medicine Specialist / Health Management Advisor Certified"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-gray-600 group-hover:text-emerald-400/50 flex-shrink-0" />
                  <span className="text-sm leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3: Technical Foundation */}
          <div className="group relative p-10 rounded-[4px] bg-[#0A0A0F] border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-[#0F0F16]">
            <div className="absolute left-0 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-5 mb-8">
              {/* アイコン：Cpu (基盤・構造) */}
              <Cpu className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors stroke-1" />
              <h3 className="text-2xl font-medium text-white tracking-wide">Technical Foundation</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "IBM Data Science Specialization Completed",
                "SAMURAI ENGINEER Expert Course Completed (Full-stack Development)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <CheckCircle2 className="w-4 h-4 mt-1 text-gray-600 group-hover:text-purple-400/50 flex-shrink-0" />
                  <span className="text-sm leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 4: Personal Discipline */}
          <div className="group relative p-10 rounded-[4px] bg-[#0A0A0F] border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-[#0F0F16]">
            <div className="absolute left-0 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-5 mb-8">
              {/* アイコン：Feather (書道・精神) */}
              <Feather className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors stroke-1" />
              <h3 className="text-2xl font-medium text-white tracking-wide">Personal Discipline</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                <CheckCircle2 className="w-4 h-4 mt-1 text-gray-600 group-hover:text-amber-400/50 flex-shrink-0" />
                <span className="text-sm leading-relaxed font-light">Deep understanding as an ACEs survivor / Young Carer</span>
              </li>
              <li className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                <CheckCircle2 className="w-4 h-4 mt-1 text-gray-600 group-hover:text-amber-400/50 flex-shrink-0" />
                <span className="text-sm leading-relaxed font-light">Minami-Nihon Calligraphy: 8th Dan (Kaisho) Achieved</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}