"use client";
import React from 'react';

const ArchitectProfile = () => {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      {/* 背景装飾（宇宙的な光） */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 統一されたヘッダーデザイン */}
        <div className="text-center mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-6">
            Organizer Profile
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-300 drop-shadow-lg">
            Liberal Arts Architect
          </h2>
          <p className="text-gray-400 text-lg md:text-xl tracking-wide max-w-2xl mx-auto font-light">
            技術 × 制度 × 思想 を統合する<br className="md:hidden" /> 文明OSデザイナー
          </p>
        </div>

        {/* グリッドレイアウト (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1 */}
          <div className="space-y-8">
            {/* Scientific Foundation */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-200 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                Scientific Foundation
              </h3>
              <ul className="space-y-4">
                {[
                  "Yale University: Science of Well-Being (Adult & Teen) Completed",
                  "University of Pennsylvania: Positive Psychology Completed",
                  "UCLA – UCSF: ACEs Aware Completed",
                  "University of Minnesota: Resilience in Trauma, Disaster, and War Completed",
                  "Johns Hopkins University: Psychological First Aid (PFA) Completed"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 font-light group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Foundation */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-900/20">
              <h3 className="text-2xl font-bold mb-6 text-indigo-200 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
                Technical Foundation
              </h3>
              <ul className="space-y-4">
                {[
                  "IBM Data Science Specialization Completed",
                  "SAMURAI ENGINEER Expert Course Completed (Full-stack Development)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 font-light group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {/* Public Health Expertise */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/20">
              <h3 className="text-2xl font-bold mb-6 text-emerald-200 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                Public Health Expertise
              </h3>
              <ul className="space-y-4">
                {[
                  "Johns Hopkins University: Essential Epidemiology Tools Completed",
                  "Preventive Medicine Specialist / Health Management Advisor Certified"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 font-light group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Discipline & Background */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-900/20">
              <h3 className="text-2xl font-bold mb-6 text-amber-200 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-amber-500 to-transparent rounded-full" />
                Personal Discipline
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300 font-light group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  <span>Deep understanding as an ACEs survivor / Young Carer</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 font-light group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  <span>Minami-Nihon Calligraphy: 8th Dan (Kaisho) Achieved</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ArchitectProfile;