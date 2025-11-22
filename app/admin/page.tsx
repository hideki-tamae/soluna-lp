"use client";

import React, { useState, useEffect } from "react";

// 型定義
type Claim = {
  id: string;
  name: string; // Wallet Address
  phrase: string;
  soluna: string;
  status: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(false);

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

  // 承認処理 (Status を approved に変更)
  const handleApprove = async (id: string) => {
    if (!confirm("この申請を承認しますか？")) return;

    try {
      const res = await fetch("/api/admin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, status: "approved" }),
      });

      if (res.ok) {
        // 画面上のデータを更新
        setClaims((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status: "approved" } : c))
        );
      } else {
        alert("更新に失敗しました");
      }
    } catch (err) {
      console.error(err);
      alert("通信エラー");
    }
  };

  // --- ログイン前の画面 ---
  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-xl border border-gray-800 w-full max-w-sm">
          <h1 className="text-xl font-bold mb-4 text-center">SOLUNA Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Admin Password"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded mb-4 text-white"
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold"
            disabled={loading}
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>
      </main>
    );
  }

  // --- ログイン後のダッシュボード ---
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm"
          >
            Logout
          </button>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-gray-900 text-gray-200 uppercase font-medium">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Wallet Address</th>
                <th className="px-6 py-3">Passphrase</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {claims.map((claim) => (
                <tr key={claim.id} className="hover:bg-gray-900/50 transition-colors">
                  <td className="px-6 py-4">
                    {new Date(claim.createdAt).toLocaleString("ja-JP")}
                  </td>
                  <td className="px-6 py-4 font-mono text-white">
                    {claim.name}
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    {claim.phrase}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        claim.status === "approved"
                          ? "bg-green-900 text-green-300"
                          : "bg-yellow-900 text-yellow-300"
                      }`}
                    >
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {claim.status !== "approved" && (
                      <button
                        onClick={() => handleApprove(claim.id)}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {claims.length === 0 && (
            <p className="text-center py-8 text-gray-500">申請データはありません。</p>
          )}
        </div>
      </div>
    </main>
  );
}