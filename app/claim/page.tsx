"use client";

import React, { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi"; // wagmiのフック
import { injected } from "wagmi/connectors"; // メタマスクなどのコネクタ

// APIからのレスポンス型定義
type ClaimResponse = {
  success?: boolean;
  message?: string;
  id?: string;
};

export default function ClaimPage() {
  // Hydration Error 回避用ステート
  const [isMounted, setIsMounted] = useState(false); 
  
  // wagmiからウォレット接続状態を取得
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const [passphrase, setPassphrase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string>("");
  const [resultStatus, setResultStatus] = useState<"success" | "error" | "">("");

  // クライアント側でマウントされたことを確認（Hydration回避）
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ウォレット接続ボタンのハンドラ
  const handleConnectWallet = async () => {
    if (isConnected) {
      disconnect();
      setResultMessage("ウォレットを切断しました。");
      setResultStatus("");
    } else {
      try {
        connect({ connector: injected() }); 
        // 接続成功時のメッセージは useEffect に任せるか、ここでセットする
      } catch (error) {
        console.error("Error connecting wallet:", error);
        setResultStatus("error");
        setResultMessage("ウォレット接続中にエラーが発生しました。");
      }
    }
  };

  // 接続アドレスが更新された際にメッセージを表示する制御
  useEffect(() => {
    // ★修正ポイント: 既に「申請成功」のメッセージが出ている場合は、接続メッセージで上書きしない！
    if (resultMessage.includes("申請成功")) return;

    if (isConnected && address) {
      // メッセージが空、または切断メッセージ等の場合のみ「接続しました」を表示
      // これにより、API成功メッセージを上書きするのを防ぎます
      if (!resultMessage || resultMessage === "ウォレットを切断しました。") {
        setResultMessage(`✅ ウォレットを接続しました: ${address}`);
        setResultStatus("success");
      }
    } else if (!isConnected && !address && resultMessage.startsWith("✅ ウォレットを接続しました")) {
      setResultMessage("");
      setResultStatus("");
    }
  }, [address, isConnected, resultMessage]);

  // トークン請求 API 呼び出し
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isMounted) return; 

    if (!address || !isConnected) {
      setResultStatus("error");
      setResultMessage("まずウォレットを接続してください。");
      return;
    }
    if (!passphrase) {
      setResultStatus("error");
      setResultMessage("合言葉を入力してください。");
      return;
    }

    setIsSubmitting(true);
    setResultMessage(""); // メッセージを一度クリア
    setResultStatus("");

    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: address,      
          phrase: passphrase, 
          soluna: "1000",     
        }),
      });

      const data: ClaimResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      // 成功時：メッセージとステータスを更新
      setResultStatus("success");
      setResultMessage(`✅ 申請成功！ID: ${data.id}`);

    } catch (error: any) {
      console.error(error);
      setResultStatus("error");
      setResultMessage(error.message || "エラーが発生しました。");
    } finally {
      setPassphrase(""); // パスフレーズをクリア
      setIsSubmitting(false); // ローディング解除
    }
  };

  // Hydration Error 回避のための条件分岐
  if (!isMounted) { 
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl text-gray-400">Loading Wallet Status...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          SOLUNA Claim Portal
        </h1>
        
        <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Status</p>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="font-mono text-sm truncate">
              {isConnected && address ? address : "Not Connected"}
            </span>
          </div>
        </div>

        {/* ウォレット接続ボタン */}
        <button
          type="button"
          onClick={handleConnectWallet}
          className="w-full mb-6 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
        </button>

        {/* 申請フォーム */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="passphrase" className="block text-sm font-medium text-gray-300 mb-2">
              合言葉 (Passphrase)
            </label>
            <input
              id="passphrase"
              type="text"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
              placeholder="合言葉を入力..."
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isConnected}
            className={`w-full py-3 px-4 font-bold rounded-lg transition-all duration-200 ${
              isSubmitting || !isConnected
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-900/30"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Claim SOLUNA"
            )}
          </button>
        </form>

        {/* 結果メッセージ */}
        {resultMessage && (
          <div className={`mt-6 p-4 rounded-lg border ${
            resultStatus === "success" 
              ? "bg-green-900/20 border-green-800 text-green-200" 
              : resultStatus === "error"
              ? "bg-red-900/20 border-red-800 text-red-200"
              : "bg-blue-900/20 border-blue-800 text-blue-200"
          }`}>
            <p className="text-sm text-center">{resultMessage}</p>
          </div>
        )}
      </div>
    </main>
  );
}