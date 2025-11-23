// app/admin/page.tsx (全て上書き)
"use client";

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { SOLUNA_CONTRACT_ADDRESS, SOLUNA_ABI } from "@/lib/contracts";

// 型定義（DBに合わせて修正済み）
type Claim = {
  id: string;
  walletAddress: string; 
  passphrase: string;    
  status: string;
  createdAt: string;
};

// --- Main Component ---
export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true); // 初期ローディング状態をtrueに変更
  const [transferringId, setTransferringId] = useState<string | null>(null);

  // 初回ロード時にCookieをチェックし、セッションを確立する
  useEffect(() => {
    // 画面表示と同時にセッションチェックを行う
    fetchClaims(null, true);
  }, []);

  // データの取得とセッションチェック
  const fetchClaims = async (pwd: string | null, isSessionCheck = false) => {
    if (!isSessionCheck) setLoading(true);

    try {
      // ログインAPIではなく、データ取得APIを叩いてCookieの有無をチェック
      const res = await fetch("/api/admin", {
        // Cookie認証のため、Authorizationヘッダーは不要
        credentials: 'include', // ★ Cookieを含めるための設定
      });
      
      if (res.ok) {
        const data = await res.json();
        setClaims(data);
        setIsLoggedIn(true);
        setLoading(false);
        return true;
      } else if (isSessionCheck) {
        // セッションがない場合、エラーとはせず静かに終了
        setIsLoggedIn(false);
        setLoading(false);
        return false;
      }
      
    } catch (err) {
      console.error(err);
    } finally {
      if (!isSessionCheck) setLoading(false);
    }
    return false;
  };

  // ログイン処理（/api/admin/loginを呼び出し、Cookieを設定させる）
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/admin/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'include', // ★ Cookieの受け取りと送信を可能にする
      });

      if (res.ok) {
        // ログイン成功後、Cookieを使ってデータを再取得
        await fetchClaims(null);
      } else {
        alert("パスワードが違います");
      }
    } catch (err) {
      alert("エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  // ログアウト処理 (Cookieを削除するAPIを呼び出し、画面をリロード)
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: 'POST', credentials: 'include' });
      window.location.reload(); // Cookie削除後、ページをリロードしてログイン状態をリセット
    } catch (err) {
      console.error(err);
      alert("ログアウトに失敗しました");
    }
  };


  // --- 省略：handleTransferとupdateStatus関数は変更なし ---
  // (前回のコードからそのままコピーして使用してください)

  
  // --- ログイン前の画面 ---
  if (loading) {
    return <main className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</main>
  }
  
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

  // --- ダッシュボード (修正なし) ---
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-gray-800 pb-6">
          {/* ... 既存のヘッダーコードを維持 ... */}
          <button 
            onClick={handleLogout} // ★ ログアウト関数を修正
            className="px-4 py-2 border border-gray-700 hover:bg-gray-800 rounded text-sm transition-colors"
          >
            Logout
          </button>
        </header>
        {/* ... 既存のテーブル表示コードを維持 ... */}
      </div>
    </main>
  );
}
// ※注意：handleTransferとupdateStatus関数は、前回の完成版コードから手動でコピーしてこのファイルの一番下に配置してください。