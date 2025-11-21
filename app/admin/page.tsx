"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // ロゴなどで使用する場合

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
      {/* ヘッダー */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {/* ロゴ画像があればここに入れます。なければテキストで代用 */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-xs">HUB</span>
          </div>
          <span className="font-bold tracking-wider text-sm md:text-base">
            ACES Care HUB JAPAN
          </span>
        </div>
        <div className="flex gap-6 text-xs md:text-sm text-slate-400">
          <Link href="/claim" className="hover:text-white transition">
            参画の扉
          </Link>
          <span className="cursor-not-allowed opacity-50">読了者解除</span>
        </div>
      </header>

      {/* メインビジュアル & コピー */}
      <section className="px-6 pt-12 pb-16 md:pt-20 md:pb-24 max-w-7xl mx-auto">
        <p className="text-xs font-bold text-slate-500 tracking-[0.2em] mb-6">
          RE-VERSE NETWORK
        </p>
        <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
          Re-Verse Civilization / SOLUNAケア・トークン
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed mb-12 text-sm md:text-base">
          「優しさが制度になる」世界へ。Proof-of-Care™で貢献を可視化し、
          書籍・NFT・音楽・メタバース美術館・コミュニティを横断したケア資本主義の土台をつくります。
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition">
            ティーザーの一覧を見る
          </button>

          {/* 👇 重要な修正ポイント：合言葉ページへのリンク */}
          <Link href="/claim">
            <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
              読者の方はこちら（合言葉）
            </button>
          </Link>
        </div>
      </section>

      {/* 3つのカードセクション */}
      <section className="px-6 pb-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition bg-slate-900/20">
          <h3 className="font-bold mb-6 text-lg">
            1. 世界観に触れる（聴く・観る）
          </h3>
          <ul className="space-y-4 text-sm underline text-slate-300 underline-offset-4">
            <li>
              <a
                href="https://acescare.fanlink.tv/hidekitamae"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                音楽（世界185カ国以上で配信中）
              </a>
            </li>
            <li>
              <span className="cursor-not-allowed opacity-50">
                メタバース美術館（Healing Ukiyo-e 3D）
              </span>
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition bg-slate-900/20">
          <h3 className="font-bold mb-6 text-lg">
            2. プロジェクトに参加する（繋がる）
          </h3>
          <ul className="space-y-4 text-sm underline text-slate-300 underline-offset-4">
            <li>
              <a
                href="https://aces-care-hub-site-ru8w.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                ACEs Care HUB JAPANの活動（プロジェクト）
              </a>
            </li>
            {/* 👇 Tallyへのリンク */}
            <li>
              <a
                href="https://tally.so/r/wM9JVY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition font-bold text-white"
              >
                β参加フォーム（共創の第一歩）
              </a>
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="border border-slate-800 rounded-3xl p-8 hover:border-slate-600 transition bg-slate-900/20">
          <h3 className="font-bold mb-6 text-lg">3. オープンな議論の場</h3>
          <ul className="space-y-4 text-sm underline text-slate-300 underline-offset-4">
            <li>
              <span className="cursor-not-allowed opacity-50">
                Web3公民館で共同議論に参加
              </span>
            </li>
            <li>
              <span className="cursor-not-allowed opacity-50">
                リバース・ラジオ（Spotify・準備中）
              </span>
            </li>
            <li>
              <span className="no-underline text-slate-500 text-xs">
                月次レポート（構築中・随時更新）
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 動画プレースホルダー */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">ティーザー動画（Day3）</h2>
        <div className="w-full aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden relative">
          {/* ここに実際のvideoタグやYouTube埋め込みが入ります */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-slate-600">Video Content Area</p>
          </div>
        </div>
      </section>
    </main>
  );
}