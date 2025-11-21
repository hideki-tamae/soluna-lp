"use client";

import React, { useState } from "react";

// APIからのレスポンス型定義
type ClaimResponse = {
  success?: boolean;
  message?: string;
  id?: string;
};

export default function ClaimPage() {
  const [address, setAddress] = useState<string>("");
  const [passphrase, setPassphrase] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string>("");
  const [resultStatus, setResultStatus] = useState<"success" | "error" | "">(
    ""
  );

  // MetaMask などのウォレット接続
  const connectWallet = async () => {
    try {
      if (typeof window === "undefined" || !(window as any).ethereum) {
        setResultStatus("error");
        setResultMessage(
          "ブラウザにウォレットが見つかりません。MetaMask などをインストールしてください。"
        );
        return;
      }

      const ethereum = (window as any).ethereum;
      const accounts: string[] = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length > 0) {
        setAddress(accounts[0]);
        setResultStatus("");
        setResultMessage("✅ ウォレットを接続しました。");
      }
    } catch (error) {
      console.error(error);
      setResultStatus("error");
      setResultMessage("ウォレット接続中にエラーが発生しました。");
    }
  };

  // トークン請求 API 呼び出し
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address) {
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
    setResultMessage("");
    setResultStatus("");

    try {
      // ✅ 修正ポイント: URLのドメイン指定を削除し、相対パスにしました。
      // これで自動的に正しいポート（localhost:3000）へ送信されます。
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // ✅ バックエンドが期待するデータ形式に合わせています
        body: JSON.stringify({
          name: address,      // ウォレットアドレスを名前として送信
          phrase: passphrase, // 合言葉
          soluna: "1000",     // 申請ごとの基本額
        }),
      });

      const data = (await res.json()) as ClaimResponse;

      // fetchの `res.ok` はHTTPステータスコードが200-299の時にtrueになります
      if (res.ok) {
        setResultStatus("success");
        setResultMessage(
          data.message ?? "申請を受け付けました！管理画面で承認をお待ちください。"
        );
        console.log("Claim Success:", data);
      } else {
        setResultStatus("error");
        // サーバーからのエラーメッセージを表示
        setResultMessage(data.message || "エラーが発生しました。");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResultStatus("error");
      setResultMessage(
        "ネットワークエラーが発生しました。サーバーの状態を確認してください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-2">
          SOLUNA ケア・トークン請求フォーム
        </h1>
        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          書籍の中に隠された{" "}
          <span className="font-semibold">合言葉（パスフレーズ）</span> と、
          接続したウォレットアドレスを使って、
          Sepolia テストネット上の SOLUNA トークンを請求できます。
        </p>

        <button
          type="button"
          onClick={connectWallet}
          className="mb-4 inline-flex items-center rounded-xl border border-emerald-500 px-4 py-2 text-sm font-medium hover:bg-emerald-500/10 transition disabled:opacity-60"
        >
          {address ? "ウォレットを再接続する" : "ウォレットを接続する"}
        </button>

        {address && (
          <p className="text-xs text-emerald-300 mb-4 break-all">
            接続中のアドレス: <span className="font-mono">{address}</span>
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              合言葉（パスフレーズ）
            </label>
            <input
              type="text"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="本の中に書かれている合言葉を入力"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "送信中..." : "SOLUNA を請求する"}
          </button>
        </form>

        {resultMessage && (
          <div
            className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
              resultStatus === "success"
                ? "border-emerald-500/70 bg-emerald-500/10 text-emerald-100"
                : resultStatus === "error"
                ? "border-rose-500/70 bg-rose-500/10 text-rose-100"
                : "border-slate-700 bg-slate-800/60 text-slate-100"
            }`}
          >
            {resultMessage}
          </div>
        )}

        <p className="mt-6 text-[11px] text-slate-400 leading-relaxed">
          ※ 現在は{" "}
          <span className="font-mono">Sepolia テストネット</span>{" "}
          上での βテストです。本番ネットワークへの展開時には、
          ガバナンスやマルチシグなどの追加セキュリティ強化を行います。
        </p>
      </div>
    </main>
  );
}