"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

export default function ProofOfCommitment() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "analyzing" | "done" | "error">("idle");
  const [result, setResult] = useState<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (f: File | undefined) => {
    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
      setResult(null);
      setStatus("idle");
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files?.[0]);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files?.[0]);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setStatus("analyzing");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/verify-commitment", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data);
      setStatus("done");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden px-4 md:px-0">
      {/* 背景の装飾 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[800px] h-[350px] md:h-[800px] bg-emerald-500/10 rounded-full blur-[100px] md:blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ヘッダー */}
        <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-950/40 border border-emerald-500/20 mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                    Exclusive Gateway
                </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                AI Oracle <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Protocol.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                世界初、あなたの「購買行動」を資産に変える認証ゲート。<br className="hidden md:block"/>
                <span className="text-white font-medium">読者限定エリア</span>へのアクセス権を、ここで証明してください。
            </p>
        </div>

        {/* メインパネル */}
        <div className={`relative bg-[#05050A]/60 backdrop-blur-2xl rounded-3xl p-6 md:p-10 border transition-all duration-700 group overflow-hidden ${isDragging ? 'border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.2)]' : 'border-white/10 hover:border-white/20'}`}>
            
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            {/* ガイダンスエリア */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-0 border-t border-emerald-500/60 rounded-full animate-[spin_3s_linear_infinite]"></div>
                        <div className="absolute inset-2 border border-emerald-400/10 rounded-full"></div>
                        <div className="absolute inset-2 border-b border-emerald-400/50 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse"></div>
                    </div>
                    <p className="text-white font-bold text-sm md:text-base tracking-widest uppercase">
                        TARGET EVIDENCE <span className="text-emerald-500/50 mx-2">|</span> <span className="text-gray-500 font-normal text-xs normal-case tracking-normal">以下のいずれかをアップロード</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Amazon Card */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors group/card">
                        <div className="p-2.5 bg-black/40 rounded-lg text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover/card:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm mb-1 group-hover/card:text-emerald-300 transition-colors">Amazonの「注文履歴」</p>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                注文日と<span className="text-emerald-400 font-medium border-b border-emerald-500/30">「合計金額」</span>等の支払事実が見える画面
                            </p>
                        </div>
                    </div>

                    {/* Kindle Card */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-colors group/card">
                        <div className="p-2.5 bg-black/40 rounded-lg text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover/card:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" className="opacity-50" />
                                <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm mb-1 group-hover/card:text-cyan-300 transition-colors">Kindleの「ライブラリ」</p>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                書影または<span className="text-cyan-400 font-medium border-b border-cyan-500/30">「Kindle Unlimited」</span>のロゴが見える画面
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          {/* Upload Area */}
          <div className="mb-8 group/dropzone">
            <input
              type="file"
              accept="image/*"
              onChange={onInputChange}
              className="hidden"
              ref={fileInputRef}
            />
            <div 
                onClick={() => fileInputRef.current?.click()}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`relative flex flex-col items-center justify-center w-full h-56 md:h-72 border border-dashed rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden bg-black/20 ${
                    isDragging 
                    ? 'border-emerald-400 bg-emerald-900/10' 
                    : preview ? 'border-emerald-500/50' : 'border-gray-700 hover:border-emerald-500/50 hover:bg-white/5'
                }`}
            >
                {!preview && !isDragging && (
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-[scan_3s_linear_infinite]"></div>
                )}

                {preview ? (
                    <img src={preview} alt="Preview" className="absolute inset-0 w-full h-full object-contain p-4 opacity-80 group-hover/dropzone:opacity-40 transition-opacity" />
                ) : (
                    <div className="text-center p-4 z-10">
                        <div className={`w-16 h-16 md:w-20 md:h-20 mb-4 mx-auto rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/5 shadow-2xl ${isDragging ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30 scale-110' : 'text-gray-500 group-hover/dropzone:text-emerald-400 group-hover/dropzone:border-emerald-500/30 group-hover/dropzone:scale-105'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                        </div>
                        <p className="text-base md:text-lg text-white font-medium mb-2 tracking-wide group-hover/dropzone:text-emerald-300 transition-colors">ここに画像をドロップ</p>
                        <p className="text-xs md:text-sm text-gray-500">または クリックして選択</p>
                    </div>
                )}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleAnalyze}
            disabled={!file || status === "analyzing"}
            className={`w-full py-5 px-8 rounded-xl font-bold text-base md:text-lg transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed
                ${status === "analyzing" 
                    ? 'bg-gray-800 text-gray-400 border border-gray-700'
                    : 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 hover:bg-emerald-500 hover:shadow-emerald-500/30'
                }
            `}
          >
            <span className="relative z-10 flex items-center justify-center gap-3 tracking-wider">
                {status === "analyzing" ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting to Oracle...
                  </>
                ) : (
                  <>
                    コミットメントを証明する
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </>
                )}
            </span>
          </button>

          {/* Result Display */}
          {status === "done" && result && (
            <div className={`mt-8 p-6 md:p-8 rounded-2xl border backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 ${
              result.rank === "CITIZEN" 
                ? "bg-emerald-950/40 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]" 
                : result.rank === "TESTER"
                ? "bg-blue-950/40 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                : "bg-red-950/40 border-red-500/30"
            }`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                
                {/* 💎 RANK ICON - The "World Class" Update */}
                <div className={`flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 shrink-0 relative overflow-hidden ${
                     result.rank === "CITIZEN" ? "border-emerald-500 bg-emerald-950" : result.rank === "TESTER" ? "border-cyan-500 bg-cyan-950" : "border-red-500 bg-red-950"
                }`}>
                    {result.rank === "CITIZEN" && (
                        // Genesis Badge (Golden/Emerald)
                        <div className="relative w-12 h-12 text-emerald-300">
                            <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-50 animate-pulse"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
                                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.636-.759-3.808a.75.75 0 00-.722-.515 11.209 11.209 0 01-7.877-3.08zM12 4.695c1.45.672 2.975 1.096 4.569 1.226a11.252 11.252 0 01-1.354 7.64L12 18.06l-3.215-4.498a11.252 11.252 0 01-1.354-7.64C9.025 5.791 10.55 5.367 12 4.695zm-2.008 6.643a.75.75 0 011.065.046L12 12.53l1.943-2.146a.75.75 0 111.114 1.032l-2.5 2.76a.75.75 0 01-1.114 0l-1.5-1.684a.75.75 0 01.046-1.065z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                    {result.rank === "TESTER" && (
                        // Data Key (Cyan/Holographic)
                        <div className="relative w-12 h-12 text-cyan-300">
                            <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 animate-pulse"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                    {result.rank === "UNKNOWN" && (
                        // Error Glitch (Red)
                        <div className="relative w-12 h-12 text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-full h-full animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                        </div>
                    )}
                </div>

                <div>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-1 font-semibold">Oracle Verdict</p>
                  <h4 className={`text-4xl md:text-5xl font-black italic tracking-tighter ${
                    result.rank === "CITIZEN" ? "text-emerald-400" : result.rank === "TESTER" ? "text-cyan-400" : "text-red-400"
                  }`}>
                    {result.rank || "UNKNOWN"}
                  </h4>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 mb-6">
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    <span className="text-white font-bold block mb-1 text-xs uppercase tracking-wider opacity-70">Analysis Reason</span>
                    {result.reason}
                </p>
              </div>
              
              <div className={`p-5 rounded-xl border ${result.rank === "CITIZEN" ? "bg-emerald-900/20 border-emerald-500/20" : result.rank === "TESTER" ? "bg-blue-900/20 border-blue-500/20" : "bg-red-900/20 border-red-500/20"}`}>
                {result.rank === "CITIZEN" ? (
                  <div className="space-y-5">
                    <div>
                        <p className="text-emerald-300 font-bold text-base md:text-lg mb-2">Welcome, Genesis Citizen.</p>
                        <p className="text-xs md:text-sm text-gray-400">リスクの証明が完了しました。正規トークンClaim権が付与されます。</p>
                    </div>
                    {/* 🏆 合格者のみ: 輝くボタン */}
                    <Link href="/claim" className="group relative block w-full text-center py-4 rounded-lg bg-emerald-500 text-white font-bold overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            SOLUNA Claim Portal へ進む
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Link>
                  </div>
                ) : result.rank === "TESTER" ? (
                  <div className="space-y-5">
                    <div>
                        <p className="text-cyan-300 font-bold text-base md:text-lg mb-2">Welcome, UI/UX Tester.</p>
                        <p className="text-xs md:text-sm text-gray-400">アクセスを確認。テスターとして参加し、マイクロトークンを受け取ってください。</p>
                    </div>
                     {/* 🧪 TESTER用ボタン: 次の導線 */}
                    <Link href="/tester-claim" className="group relative block w-full text-center py-4 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors">
                        <span className="relative flex items-center justify-center gap-2">
                            マイクロトークンClaim へ進む
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Link>
                  </div>
                ) : (
                   <p className="text-red-300 text-sm font-bold">判定できませんでした。画像を再確認してください。</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}