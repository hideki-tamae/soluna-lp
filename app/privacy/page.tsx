import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-cyan-900 selection:text-white">
      {/* Header / Navigation */}
      <nav className="w-full p-6 flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-sm font-bold tracking-widest hover:text-white transition-colors">
          SOLUNA: Re-Verse Civilization
        </Link>
        <Link href="/" className="text-xs border border-gray-600 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
          TOPへ戻る
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          プライバシーポリシー
        </h1>
        <p className="text-center text-gray-500 text-sm mb-16">
          Privacy Policy | Last Updated: November 30, 2025
        </p>

        <div className="space-y-12 leading-relaxed">
          {/* 第1章 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              第1章 個人情報の取扱い
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-gray-200 font-semibold mb-2">第1条（基本理念）</h3>
                <p>
                  ACES Care HUB JAPAN（以下「運営者」といいます）は、「SOLUNA Proof-of-Care Token エコシステム」（以下「本サービス」といいます）において、「完全透明性（Radical Transparency）」と「個人のプライバシー保護」の両立を目指します。
                </p>
              </div>
              <div>
                <h3 className="text-lg text-gray-200 font-semibold mb-2">第2条（収集する情報）</h3>
                <p className="mb-2">本サービスでは、以下の情報を収集する場合があります。</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>ユーザー提供情報:</strong> メールアドレス、自己診断フォーム（Re-Verse Code）の回答内容、共創参加時のプロフィール情報。</li>
                  <li><strong>Web3情報:</strong> ウォレットアドレス（Public Key）、SOLUNAトークンのClaim履歴、オンチェーン上のトランザクションデータ。</li>
                  <li><strong>システムログ:</strong> アクセスログ、IPアドレス（不正利用防止のため）。</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 第2章 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              第2章 データの利用と透明性
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-gray-200 font-semibold mb-2">第3条（利用目的）</h3>
                <p>
                  収集した情報は、Proof-of-Care（ケアの証明）の検証、トークンの付与、不正利用（Sybil Attack等）の防止、および本サービスの制度設計（Institutional Design）の改善のために利用されます。
                </p>
              </div>
              <div>
                <h3 className="text-lg text-gray-200 font-semibold mb-2">第4条（ブロックチェーン特有の注意点）</h3>
                <p>
                  利用者は、ブロックチェーン技術の性質上、一度ブロックチェーン（オンチェーン）に記録されたトランザクションデータ（ウォレットアドレス、トークン移動履歴等）は、<strong>技術的に削除や変更が不可能</strong>であることを理解し、同意するものとします。これらのデータは、システムの透明性を担保するために永続的に公開されます。
                </p>
              </div>
            </div>
          </section>

          {/* 第3章 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              第3章 管理と共有
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-gray-200 font-semibold mb-2">第5条（第三者提供の制限）</h3>
                <p>
                  運営者は、法令に基づく場合や、人の生命・身体の保護が必要な場合を除き、利用者の同意なく個人情報（メールアドレス等のオフチェーン情報）を第三者に提供しません。ただし、統計的に処理された匿名データについては、社会実装の研究目的で公開される場合があります。
                </p>
              </div>
              <div>
                <h3 className="text-lg text-gray-200 font-semibold mb-2">第6条（お問い合わせ）</h3>
                <p>
                  プライバシーに関する開示・訂正・削除のご請求、その他のお問い合わせは、公式サイトの指定フォームよりご連絡ください。
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-20 pt-10 border-t border-gray-800 text-center">
          <Link href="/" className="text-cyan-500 hover:text-cyan-400 transition-colors">
            ← ホームに戻る
          </Link>
        </div>
      </main>
    </div>
  );
}