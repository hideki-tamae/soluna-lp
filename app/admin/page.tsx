"use client";

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
// 以前作った接続情報をインポート（これが銀行の金庫の鍵です）
import { SOLUNA_CONTRACT_ADDRESS, SOLUNA_ABI } from "@/lib/contracts";

// 型定義（新しいデータベースに合わせて修正済み）
type Claim = {
  id: string;
  walletAddress: string; // name から walletAddress に変更
  passphrase: string;    // phrase から passphrase に変更
  status: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(false);
  
  // 送金処理中にボタンを無効化するための状態
  const [transferringId, setTransferringId] = useState<string | null>(null);

  // ログイン処理
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchClaims(password);
  };

  // データ取得
  const fetchClaims = async (pwd: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin", {
        headers: { Authorization: `Bearer ${pwd}` },
      });
      if (res.ok) {
        const data = await res.json();
        setClaims(data);
        setIsLoggedIn(true);
      } else {
        alert("パスワードが違います");
      }
    } catch (err) {
      console.error(err);
      alert("エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  // ★ Phase 2の目玉機能：MetaMaskを使って実際に送金する
  const handleTransfer = async (claim: Claim) => {
    // 誤操作防止の確認
    if (!confirm(`${claim.walletAddress}\nここへ 100 SOLUNA を本当に送金しますか？`)) return;

    setTransferringId(claim.id); // ロード中表示にする

    try {
      // 0. MetaMaskがあるか確認
      if (!window.ethereum) {
        alert("MetaMaskをインストールしてください（PC推奨）");
        return;
      }

      // 1. 管理者のウォレットに接続
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // 2. コントラクトを準備（金庫を開ける）
      const contract = new ethers.Contract(SOLUNA_CONTRACT_ADDRESS, SOLUNA_ABI, signer);

      // 3. 送金実行！ (100 SOLUNA = 100 * 10の18乗)
      const amount = ethers.parseUnits("100", 18);
      
      console.log("Sending transaction...");
      // ここでMetaMaskがポップアップします
      const tx = await contract.transfer(claim.walletAddress, amount);
      
      console.log("Waiting for confirmation...");
      await tx.wait(); // ブロックチェーンの承認待ち（数秒〜十数秒）

      alert("送金成功！🎉 トークンが移動しました。");

      // 4. データベースのステータスを "transferred" に更新
      await updateStatus(claim.id, "transferred");

    } catch (err) {
      console.error("Transfer Error:", err);
      alert("送金に失敗しました。コンソールを確認してください。\n(残高不足や拒否の可能性があります)");
    } finally {
      setTransferringId(null); // ロード終了
    }
  };

  // ステータス更新API (送金成功後に実行)
  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${password}`,
      },
      body: JSON.stringify({ id, status }),
    });
    
    // 画面上のデータを即座に書き換え
    setClaims((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: status } : c))
    );
  };

  // --- ログイン画面 ---
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-xl border border-gray-800 w-full max-w-sm shadow-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            SOLUNA Admin
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin Password"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg mb-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-white font-bold transition-all shadow-lg"
            disabled={loading}
          >
            {loading ? "Checking..." : "Login System"}
          </button>
        </form>
      </main>
    );
  }

  // --- 管理ダッシュボード ---
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-gray-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Control Center
            </h1>
            <p className="text-gray-500 text-sm mt-1">Re-Verse Economy Management System</p>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 border border-gray-700 hover:bg-gray-800 rounded text-sm transition-colors"
          >
            Logout
          </button>
        </header>

        <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-2xl">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-gray-900 text-gray-200 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">User Wallet</th>
                <th className="px-6 py-4">Passphrase</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action (Economy)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-gray-900/50">
              {claims.map((claim) => (
                <tr key={claim.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(claim.createdAt).toLocaleString("ja-JP")}
                  </td>
                  <td className="px-6 py-4 font-mono text-white">
                    {claim.walletAddress}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {claim.passphrase}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        claim.status === "transferred" 
                          ? "bg-blue-900/50 text-blue-300 border border-blue-800" 
                          : "bg-green-900/50 text-green-300 border border-green-800"
                    }`}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {claim.status !== "transferred" ? (
                      <button
                        onClick={() => handleTransfer(claim)}
                        disabled={!!transferringId}
                        className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
                      >
                        {transferringId === claim.id ? (
                          <span className="animate-pulse">Sending...</span>
                        ) : (
                          "💰 Send 100 SOLUNA"
                        )}
                      </button>
                    ) : (
                      <span className="text-gray-500 font-mono text-xs flex items-center justify-end gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Sent
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {claims.length === 0 && (
            <div className="text-center py-12 text-gray-600">
              <p>申請データはまだありません。</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}