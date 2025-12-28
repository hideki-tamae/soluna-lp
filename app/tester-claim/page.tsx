"use client";

import React, { useState, useRef, useCallback } from 'react';
import { 
  Upload, 
  CheckCircle2, 
  Wallet,
  BookOpen,
  ScanFace,
  Fingerprint,
  Loader2, 
  X,
  AlertCircle,
  Download,
  Target,
  ArrowRight,
  Crown,
  Ticket,
  Music,
  Users,
  Zap
} from 'lucide-react';

// --- Custom High-End Icons (SVG) ---

const RadarIcon = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-emerald-400 absolute inset-0 animate-[spin_4s_linear_infinite]">
      <circle cx="12" cy="12" r="10" strokeOpacity="0.5" strokeDasharray="4 4" />
      <path d="M12 2C12 2 12 12 12 12" />
      <path d="M12 12L19.07 4.93" opacity="0.5" />
    </svg>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-emerald-500/50 absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
      <path d="M4 12H2M22 12H20M12 4V2M12 22V20" />
    </svg>
    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,1)] z-10" />
  </div>
);

const CyberLockIcon = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-cyan-500/60 absolute inset-0">
      <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" strokeDasharray="6 2" />
    </svg>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3/5 h-3/5 text-cyan-400 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
    <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-90" />
  </div>
);

// --- Premium High-End Icons with 3D Effects + Micro Animations ---

const PremiumAmazonIcon = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* IMPROVED: Gold color scheme instead of orange */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-600/20 blur-xl animate-pulse" />
    
    {/* NEW: Breathing effect */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/10 to-yellow-400/10 animate-[pulse_3s_ease-in-out_infinite]" />
    
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
        <defs>
          <linearGradient id="amazonGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" 
              stroke="url(#amazonGradGold)" strokeWidth="1.5" fill="none" 
              className="animate-[pulse_2s_ease-in-out_infinite]" />
        <path d="M3.3 7l8.7 5 8.7-5" stroke="#fbbf24" strokeWidth="1.5" opacity="0.8" />
        <path d="M12 22v-9" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        <path d="M9 17c2 1.5 4 1.5 6 0" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      </svg>
      
      {/* NEW: Animated glow dot with pulse */}
      <div className="absolute w-2 h-2 bg-amber-300 rounded-full blur-sm animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" style={{top: '45%'}} />
      <div className="absolute w-2 h-2 bg-yellow-400 rounded-full blur-sm animate-pulse" style={{top: '45%'}} />
    </div>
  </div>
);

const PremiumKindleIcon = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-blue-600/20 blur-xl animate-pulse" />
    
    {/* NEW: Breathing effect */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 to-cyan-400/10 animate-[pulse_3s_ease-in-out_infinite]" />
    
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <defs>
          <linearGradient id="kindleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="url(#kindleGrad)" strokeWidth="1.5" fill="none" 
              className="animate-[pulse_2s_ease-in-out_infinite]" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" 
              stroke="url(#kindleGrad)" strokeWidth="1.5" fill="none" />
        
        <path d="M8 7h8M8 11h8M8 15h5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M6 6v12" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
      
      {/* NEW: Animated glow dot with pulse */}
      <div className="absolute w-2 h-2 bg-blue-300 rounded-full blur-sm animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" style={{top: '50%', left: '55%'}} />
      <div className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse" style={{top: '50%', left: '55%'}} />
    </div>
  </div>
);

const UploadSection = () => {
  const [activeTab, setActiveTab] = useState<'oracle' | 'guardian'>('oracle');
  const [activeCard, setActiveCard] = useState<'amazon' | 'kindle' | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'result'>('idle');
  const [verdict, setVerdict] = useState<'citizen' | 'nomad' | 'unknown' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleVerify = () => {
    if (!file) return;
    setStatus('analyzing');
    setTimeout(() => {
      const isErrorTest = file.name.toLowerCase().includes('error');
      if (isErrorTest) {
        setVerdict('unknown');
      } else if (activeCard === 'amazon') {
        setVerdict('citizen');
      } else {
        setVerdict('nomad');
      }
      setStatus('result');
    }, 2500);
  };

  const handleFile = (file: File) => {
    setFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setStatus('idle');
    setVerdict(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) handleFile(e.target.files[0]);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }, []);

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation(); setFile(null); setPreview(null); setStatus('idle');
  };

  const renderResult = () => {
    if (verdict === 'citizen') {
      return (
        <div className="w-full bg-[#05050A] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden animate-in fade-in zoom-in duration-500">
           <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
           <div className="relative z-10 text-left">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-emerald-500/10 rounded-full border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                   <Target className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <div>
                   <p className="text-[10px] sm:text-xs text-gray-400 font-mono tracking-[0.2em] uppercase mb-1">Oracle Verdict</p>
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-white to-yellow-100 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
                     CITIZEN
                   </h2>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
                 <p className="text-[10px] text-gray-500 font-mono tracking-widest mb-2 uppercase flex items-center gap-2">
                   <ScanFace className="w-3 h-3" /> Identity Confirmed
                 </p>
                 <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                   購入履歴（¥3,880）及びコミットメントを確認。<br/>
                   あなたは「Re-Verse Civilization」の正当な構成員として承認されました。
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                 <div className="bg-emerald-900/20 border border-emerald-500/20 p-3 sm:p-4 rounded-xl flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg"><Zap className="w-4 h-4 text-emerald-400" /></div>
                    <div>
                       <p className="text-emerald-200 text-xs font-bold tracking-wider">Standard Token</p>
                       <p className="text-emerald-500/70 text-[10px]">10x Reward Multiplier</p>
                    </div>
                 </div>
                 <div className="bg-emerald-900/20 border border-emerald-500/20 p-3 sm:p-4 rounded-xl flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg"><Crown className="w-4 h-4 text-yellow-400" /></div>
                    <div>
                       <p className="text-emerald-200 text-xs font-bold tracking-wider">Guaranteed Gift</p>
                       <p className="text-emerald-500/70 text-[10px]">Amazon Gift / Coke</p>
                    </div>
                 </div>
                 <div className="bg-emerald-900/20 border border-emerald-500/20 p-3 sm:p-4 rounded-xl flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg"><Users className="w-4 h-4 text-blue-400" /></div>
                    <div>
                       <p className="text-emerald-200 text-xs font-bold tracking-wider">Community Access</p>
                       <p className="text-emerald-500/70 text-[10px]">Private Discord Invite</p>
                    </div>
                 </div>
                 <div className="bg-emerald-900/20 border border-emerald-500/20 p-3 sm:p-4 rounded-xl flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg"><Music className="w-4 h-4 text-purple-400" /></div>
                    <div>
                       <p className="text-emerald-200 text-xs font-bold tracking-wider">Full Music & Note</p>
                       <p className="text-emerald-500/70 text-[10px]">Unlimited Access</p>
                    </div>
                 </div>
              </div>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 sm:py-5 rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden text-sm sm:text-base">
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                 <span className="relative z-10 tracking-widest">CITIZEN PORTAL へ進む</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
           </div>
        </div>
      );
    }

    if (verdict === 'nomad') {
      return (
        <div className="w-full bg-[#05050A] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden animate-in fade-in zoom-in duration-500">
           <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
           <div className="relative z-10 text-left">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-cyan-500/10 rounded-full border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                   <Download className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                </div>
                <div>
                   <p className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-[0.2em] uppercase mb-1">Oracle Verdict</p>
                   <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-blue-200 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                     NOMAD
                   </h2>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
                 <p className="text-[10px] text-gray-500 font-mono tracking-widest mb-2 uppercase flex items-center gap-2">
                    <ScanFace className="w-3 h-3" /> Access Granted (Limited)
                 </p>
                 <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                   Kindle Unlimitedの利用を確認。あなたは「NOMAD（遊動民）」として認識されました。<br/>
                   まずはこの文明の欠片（Micro Token）を受け取ってください。
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                 <div className="bg-cyan-900/10 border border-cyan-500/20 p-3 sm:p-4 rounded-xl flex items-center gap-3 opacity-80">
                    <div className="p-2 bg-cyan-500/10 rounded-lg"><Zap className="w-4 h-4 text-cyan-400" /></div>
                    <div>
                       <p className="text-cyan-200 text-xs font-bold tracking-wider">Micro Token</p>
                       <p className="text-cyan-500/70 text-[10px]">Trial Amount</p>
                    </div>
                 </div>
                 <div className="bg-cyan-900/10 border border-cyan-500/20 p-3 sm:p-4 rounded-xl flex items-center gap-3 opacity-80">
                    <div className="p-2 bg-cyan-500/10 rounded-lg"><Ticket className="w-4 h-4 text-yellow-400" /></div>
                    <div>
                       <p className="text-cyan-200 text-xs font-bold tracking-wider">Lottery Ticket</p>
                       <p className="text-cyan-500/70 text-[10px]">Chance to win Gift</p>
                    </div>
                 </div>
                 <div className="col-span-1 sm:col-span-2 bg-black/40 border border-white/5 p-3 sm:p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-gray-800 rounded-lg"><Target className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" /></div>
                       <div>
                          <p className="text-gray-400 text-xs font-bold tracking-wider group-hover:text-emerald-300 transition-colors">Upgrade to CITIZEN</p>
                          <p className="text-gray-600 text-[10px] group-hover:text-emerald-500/70 transition-colors">Unlock 10x Rewards & Community</p>
                       </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-emerald-400" />
                 </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 sm:py-5 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden text-sm sm:text-base">
                 <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                 <span className="relative z-10 tracking-widest">CLAIM MICRO TOKEN</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
           </div>
        </div>
      );
    }

    return (
      <div className="w-full bg-[#0F0505] border border-red-500/30 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden animate-in fade-in zoom-in duration-500">
         <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
         <div className="relative z-10 text-left">
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className="p-2 sm:p-3 bg-red-500/10 rounded-full border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                 <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
              </div>
              <div>
                 <p className="text-[10px] sm:text-xs text-gray-500 font-mono tracking-widest uppercase mb-1">Oracle Verdict</p>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-white to-orange-200 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                   UNKNOWN
                 </h2>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
               <p className="text-[10px] text-gray-400 font-mono tracking-widest mb-2 uppercase">Analysis Failed</p>
               <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                 画像を認識できませんでした。<br/>
                 正しいスクリーンショットを選択してください。
               </p>
            </div>
            <button 
              onClick={() => { setFile(null); setPreview(null); setStatus('idle'); }}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 sm:py-4 rounded-xl transition-all border border-white/10 text-sm sm:text-base"
            >
               再試行する
            </button>
         </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-3 sm:p-4 md:p-6 text-white min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[80%] h-[200px] sm:h-[300px] bg-gradient-to-r from-emerald-900/10 via-blue-900/10 to-cyan-900/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className={`text-center mb-8 sm:mb-12 md:mb-16 relative z-10 w-full transition-all duration-500 ${status === 'result' ? 'opacity-50 blur-sm scale-95' : 'opacity-100'}`}>
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 py-1.5 px-4 sm:px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
           <span className="text-gray-400 text-[9px] sm:text-[10px] font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase">
             System Ready // Est. 2025
           </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-4 sm:mb-6 relative select-none px-4">
          <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-emerald-500/20 via-blue-500/10 to-cyan-500/20 opacity-50" />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-cyan-100 to-emerald-200 drop-shadow-[0_0_35px_rgba(34,211,238,0.5)] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] relative z-10">
            RE-VERSE GATE
          </span>
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 text-xs sm:text-sm md:text-base font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 drop-shadow-[0_0_20px_rgba(52,211,153,0.6)] animate-pulse px-4">
          Powered by AI Oracle Technology
        </p>
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <p className="text-cyan-200/80 font-bold tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs md:text-sm uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            Proof of Care Protocol
          </p>
          <div className="flex items-center gap-3 sm:gap-4 opacity-60 mt-2">
            <div className="h-px w-6 sm:w-8 md:w-16 bg-gradient-to-r from-transparent to-gray-500" />
            <p className="text-gray-400 text-[9px] sm:text-[10px] tracking-widest font-light whitespace-nowrap">
              優しさを資産に変える、世界初の認証ゲート
            </p>
            <div className="h-px w-6 sm:w-8 md:w-16 bg-gradient-to-l from-transparent to-gray-500" />
          </div>
        </div>
      </div>

      <div className="w-full">
        {status === 'result' ? (
          renderResult()
        ) : (
          <>
            <div className="flex w-full mb-6 sm:mb-8 bg-black/40 backdrop-blur-xl rounded-2xl p-1.5 border border-white/10 relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#0A0A12] rounded-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out ${activeTab === 'oracle' ? 'left-1.5' : 'translate-x-[calc(100%+6px)] left-1.5'}`}>
                <div className={`absolute inset-0 opacity-20 transition-colors duration-500 ${activeTab === 'oracle' ? 'bg-gradient-to-r from-emerald-500/50 to-transparent' : 'bg-gradient-to-r from-cyan-500/50 to-transparent'}`} />
              </div>
              <button onClick={() => setActiveTab('oracle')} className={`relative z-10 flex-1 flex flex-col items-center justify-center py-3 sm:py-4 transition-all duration-300 ${activeTab === 'oracle' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <RadarIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${activeTab === 'oracle' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'opacity-50 grayscale'}`} />
                  <span className="font-mono tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm font-bold">AI ORACLE PROTOCOL</span>
                </div>
                <span className={`text-[9px] sm:text-[10px] tracking-wider transition-opacity duration-300 ${activeTab === 'oracle' ? 'text-emerald-500/70 opacity-100' : 'opacity-0'}`}>画像認証 (Kindle / Amazon)</span>
              </button>
              <button onClick={() => setActiveTab('guardian')} className={`relative z-10 flex-1 flex flex-col items-center justify-center py-3 sm:py-4 transition-all duration-300 ${activeTab === 'guardian' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <CyberLockIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${activeTab === 'guardian' ? 'opacity-100 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'opacity-50 grayscale'}`} />
                  <span className="font-mono tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm font-bold">GUARDIAN GATE</span>
                </div>
                <span className={`text-[9px] sm:text-[10px] tracking-wider transition-opacity duration-300 ${activeTab === 'guardian' ? 'text-cyan-500/70 opacity-100' : 'opacity-0'}`}>メンバー認証 / Web3</span>
              </button>
            </div>

            <div className="bg-[#05050A] border border-white/5 rounded-3xl p-4 sm:p-6 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all">
              <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center">

                {activeTab === 'guardian' ? (
                  <div className="w-full text-center py-8 sm:py-12 animate-in fade-in">
                     <div className="mb-6 sm:mb-8 flex justify-center">
                        <div className="p-4 sm:p-6 bg-cyan-900/10 rounded-full border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                           <CyberLockIcon className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
                        </div>
                     </div>
                     <h2 className="text-2xl sm:text-3xl font-bold mb-4">RESTRICTED ACCESS</h2>
                     <p className="text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed text-sm sm:text-base px-4">
                        ここは「文明の守護者」のみが通過できるゲートです。<br/>
                        Genesis Code または Guardian Wallet を接続してください。
                     </p>
                     <button className="bg-white text-black font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full hover:bg-cyan-50 transition-colors shadow-lg flex items-center gap-3 mx-auto text-sm sm:text-base">
                        <Wallet className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>CONNECT GUARDIAN WALLET</span>
                     </button>
                     <p className="mt-6 text-[10px] text-gray-500 tracking-widest uppercase">
                        Requires Tier 3 Clearance
                     </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full mb-6 sm:mb-8">
                      {/* IMPROVED: Amazon Card with GOLD color + enhanced animations */}
                      <button 
                        onClick={() => setActiveCard('amazon')}
                        className={`group relative p-4 sm:p-6 bg-[#0A0A12] border rounded-xl transition-all duration-500 text-left hover:transform hover:-translate-y-1 ${activeCard === 'amazon' ? 'border-amber-500 bg-[#0E0E1A] shadow-[0_0_40px_rgba(251,191,36,0.3)]' : 'border-white/10 hover:border-amber-500/30 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]'}`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          {/* IMPROVED: GOLD theme with stronger animations */}
                          <div className={`p-3 sm:p-4 rounded-xl border transition-all duration-500 ${activeCard === 'amazon' ? 'bg-amber-900/30 border-amber-500/60 shadow-[0_0_30px_rgba(251,191,36,0.4)]' : 'bg-gray-900/50 border-white/10'} group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.6)]`}>
                            <PremiumAmazonIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                          </div>
                          {activeCard === 'amazon' && <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,1)] animate-pulse" />}
                        </div>
                        <h3 className={`font-bold mb-1 text-sm sm:text-base ${activeCard === 'amazon' ? 'text-white' : 'text-gray-400'}`}>Amazon History</h3>
                        <p className="text-[10px] text-gray-500 font-mono">注文履歴（¥3,880）をアップロード</p>
                        <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[9px] sm:text-[10px] font-bold tracking-widest text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">FOR CITIZEN</span>
                      </button>

                      {/* IMPROVED: Kindle Card with enhanced animations */}
                      <button 
                        onClick={() => setActiveCard('kindle')}
                        className={`group relative p-4 sm:p-6 bg-[#0A0A12] border rounded-xl transition-all duration-500 text-left hover:transform hover:-translate-y-1 ${activeCard === 'kindle' ? 'border-cyan-500 bg-[#0E0E1A] shadow-[0_0_40px_rgba(6,182,212,0.3)]' : 'border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]'}`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 sm:p-4 rounded-xl border transition-all duration-500 ${activeCard === 'kindle' ? 'bg-cyan-900/30 border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.4)]' : 'bg-gray-900/50 border-white/10'} group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]`}>
                            <PremiumKindleIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                          </div>
                          {activeCard === 'kindle' && <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)] animate-pulse" />}
                        </div>
                        <h3 className={`font-bold mb-1 text-sm sm:text-base ${activeCard === 'kindle' ? 'text-white' : 'text-gray-400'}`}>Kindle Unlimited</h3>
                        <p className="text-[10px] text-gray-500 font-mono">ライブラリ画面をアップロード</p>
                        <span className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[9px] sm:text-[10px] font-bold tracking-widest text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">FOR NOMAD</span>
                      </button>
                    </div>

                    <div 
                      className={`w-full border-2 border-dashed rounded-2xl p-4 sm:p-6 md:p-10 text-center transition-all duration-300 relative group overflow-hidden cursor-pointer ${
                        !activeCard ? 'opacity-50 pointer-events-none border-white/10' : 
                        dragActive ? 'border-blue-500 bg-blue-500/5' : 
                        'border-white/10 hover:border-white/20 hover:bg-white/5'
                      } ${file ? (activeCard === 'amazon' ? 'border-amber-500/50 bg-amber-900/5' : 'border-cyan-500/50 bg-cyan-900/5') : ''}`}
                      onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} onClick={() => activeCard && inputRef.current?.click()}
                    >
                       <input ref={inputRef} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                       {activeCard && <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${activeCard === 'amazon' ? 'via-amber-500' : 'via-cyan-500'} to-transparent opacity-0 group-hover:opacity-50 animate-[scan_2s_linear_infinite]`} />}
                       
                       <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 relative z-10 min-h-[140px] sm:min-h-[160px]">
                          {!activeCard ? (
                             <p className="text-gray-500 font-mono text-xs sm:text-sm px-4">先に証明タイプ（Amazon / Kindle）を選択してください</p>
                          ) : preview ? (
                            <div className="relative w-full max-w-xs sm:max-w-sm h-40 sm:h-48 rounded-lg overflow-hidden border border-white/20 shadow-2xl">
                              <img src={preview} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3 sm:p-4">
                                <p className="text-white text-xs font-mono truncate">{file?.name}</p>
                                <p className={`${activeCard === 'amazon' ? 'text-amber-400' : 'text-cyan-400'} text-[10px] font-mono tracking-widest mt-1`}>EVIDENCE READY</p>
                              </div>
                              <button onClick={removeFile} className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-red-500/50 transition-colors"><X className="w-4 h-4 text-white" /></button>
                            </div>
                          ) : (
                            <>
                              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#05050A] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                                <Upload className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-colors ${activeCard === 'amazon' ? 'group-hover:text-amber-400' : 'group-hover:text-cyan-400'}`} />
                              </div>
                              <div>
                                <p className={`${activeCard === 'amazon' ? 'text-amber-500' : 'text-cyan-500'} font-mono text-[10px] sm:text-xs tracking-widest mb-2 opacity-80`}>
                                  TARGET: {activeCard === 'amazon' ? 'CITIZEN' : 'NOMAD'} VERIFICATION
                                </p>
                                <h4 className="text-white text-base sm:text-lg font-bold mb-1 tracking-wider">画像をタップして選択</h4>
                                <p className="text-[10px] sm:text-xs text-gray-500 font-mono uppercase tracking-widest">Or Drop Proof Here</p>
                              </div>
                            </>
                          )}
                       </div>
                    </div>
                    
                    <div className="mt-6 sm:mt-8 w-full">
                       <button 
                         onClick={handleVerify}
                         disabled={!file || status === 'analyzing'}
                         className={`w-full font-bold py-3 sm:py-4 rounded-xl tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center gap-1 text-sm sm:text-base ${
                           status === 'analyzing' ? 'bg-blue-600 text-white cursor-wait' : 
                           !file ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 
                           activeCard === 'amazon' ? 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                         }`}
                       >
                          {status === 'analyzing' ? (
                            <div className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /><span>ANALYZING EVIDENCE...</span></div>
                          ) : (
                            <><span>VERIFY & CLAIM</span><span className="text-[10px] font-normal opacity-80 tracking-wider">認証してトークンを受け取る</span></>
                          )}
                       </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
