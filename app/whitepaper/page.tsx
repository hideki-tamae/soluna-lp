import React from "react";

const WHITEPAPER_JP_PDF = "/docs/JP_Haikei_official.pdf";

const WhitepaperPage = () => {
  return (
    <div className="py-16 md:py-24 bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        
        {/* --- ヘッダー --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 mb-2">
            SOLUNA Proof-of-Care Token
          </h1>
          <p className="text-xl text-gray-400">Whitepaper (最終版)</p>

          {/* ✅ ここを差し替え */}
          <p className="mt-4 text-sm text-indigo-400">
            [{" "}
            <a
              href={WHITEPAPER_JP_PDF}
              download
              className="underline hover:text-indigo-300 transition"
            >
              PDFダウンロードはこちら
            </a>{" "}
            ]
          </p>
        </div>

        {/* --- コンテンツ --- */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          
          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">ABSTRACT (要約)</h2>
          <p className="mb-8">
            SOLUNAは、「優しさ（ケア）」を経済的価値として証明・循環させるWeb3ネイティブな「ケア資本主義（Care Capitalism）」を実装するプロジェクトです。従来の経済システムでは評価不能であった社会貢献や相互扶助の行動（PoC: Proof-of-Care）を、ブロックチェーン上で追跡・証明し、トークン（$SLN$）を通じてインセンティブとして還元します。本プロジェクトは、技術的完全性と国際政策との連携を前提とした、次世代の社会OS（Civilization OS）の基盤を提供します。
          </p>

          <hr className="my-10 border-indigo-700" />

          {/* I. 序論・ビジョン - モバイル改行修正済み */}
          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            I. 序論・ビジョン<br className="sm:hidden" /> (Vision & Problem)
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Web3.0とブロックチェーン誕生背景</h3>
          <p className="mb-8">
            Web3.0は、巨大プラットフォームが情報を独占し、個人の価値が中央集権的にコントロールされるWeb2.0の限界に対するアンチテーゼとして誕生しました。その核心的な目的は、特定の管理者に依存しない非中央集権性（Decentralization）と、改ざんや隠蔽が不可能な透明性と信頼性（Trustlessness）の確立です。
          </p>
          
          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">SOLUNAへの接続</h3>
          <p className="mb-8">
            SOLUNAは、このWeb3の価値観を「ケア」と「社会制度」の領域に応用します。既存の福祉・行政システムが抱える不透明性や隠蔽といった中央集権的な問題を、Web3の透明性をもって根絶し、優しさの価値を特定の権力に独占されずに市民の手に戻すことを使命とします。
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">ビジョンとミッション</h3>
          <p className="mb-8">
            SOLUNAは、AI・Web3・福祉・国際政策を統合し、「優しさが制度として機能する文明（Re-Verse Civilization）」を設計します。究極的な目標は、社会の痛みを構造で反転させ、全ての参加者がケアの提供者として報われる、持続可能な経済圏を構築することです。
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">グローバル企業が採用する戦略骨子</h3>
          <p className="mb-8">
            世界の巨大企業は、例外なく「制度（ルール）」を味方にした構造で収益を爆増させています。Googleの検索アルゴリズムのように、市場における「法律」を作った者が勝つという原理です。SOLUNAの「ケアが制度になる文明OS」は、この成功企業の『制度モデル』をコアに持っています。
          </p>

          <hr className="my-10 border-indigo-700" />
          
          {/* II. コアコンセプト・哲学 - モバイル改行修正済み */}
          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            II. コアコンセプト・哲学<br className="sm:hidden" /> (The SOLUNA Philosophy)
          </h2>
          
          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Proof-of-Care (PoC) の定義</h3>
          <p className="mb-8">
            PoCは、従来のPoWやPoSと異なり、ブロックチェーン上で証明された「優しさ、貢献、相互扶助」の行動履歴です。AIとWeb3技術により、行動の質と量を測定し、これを$SLN$ トークンによって評価・報酬化します。
          </p>
          
          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">三大原則</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Proof of Care: あなたのケアの実践を、ブロックチェーン上の不可逆な記録として証明。優しさが「資産」として蓄積されます。</li>
            <li>Value of Kindness: 自己犠牲ではなく、正当な対価へ。トークンエコノミーにより、誰かを助ける行為が、経済的にも報われる社会へ。</li>
            <li>Decentralized OS: 中央集権的な管理を排除し、透明なプログラムが公平な分配と秩序を自動執行します。</li>
          </ol>

          <hr className="my-10 border-indigo-700" />

          {/* III. 技術とプロトコル */}
          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">III. 技術とプロトコル (Technology & Protocol)</h2>
          
          <h3>トークンエコノミー ($SLN$ 設計)</h3>
          <table className="w-full text-left border-collapse table-auto my-6">
            <thead>
              <tr className="border-b border-indigo-600">
                <th className="py-2 px-4">項目</th>
                <th className="py-2 px-4">設定</th>
                <th className="py-2 px-4">役割</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 px-4">ティッカー</td>
                <td className="py-2 px-4">$SLN</td>
                <td className="py-2 px-4">報酬、ガバナンス、サービスアクセス権。</td>
              </tr>
              <tr>
                <td className="py-2 px-4">総供給量</td>
                <td className="py-2 px-4">1,000,000,000 SLN (10億枚)</td>
                <td className="py-2 px-4">エコシステムへの広範な配布と流動性確保。</td>
              </tr>
            </tbody>
          </table>
          
          <h3>資金調達と持続可能性</h3>
          <p className="mb-8">
            プロジェクトの公共性を担保するため、初期資金調達の一部としてクラウドファンディングを計画しています。調達資金は、一般社団法人設立費用やガバナンス機構の構築費用、および開発・運営の初期費用に充当されます。
          </p>

          <h3>APIエコシステムによる収益化</h3>
          <p className="mb-8">
            SOLUNAは、PoC APIを通じて永続的な収益源を確立します。収益モデルは、API接続した自治体、医療機関、NPO、企業のCSR部門などに対し、StripeやOpenAIと同様の従量課金モデルを適用し、継続的な収益を生み出します。
          </p>

          <hr className="my-10 border-indigo-700" />

          {/* IV. ロードマップとガバナンス - 構造統一化 */}
          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            IV. ロードマップとガバナンス (Roadmap & Governance)
          </h2>
          
          <h3 className="text-xl md:text-2xl font-semibold mt-0 mb-3">Milestones and Timeline</h3>
          <table className="w-full text-left border-collapse table-auto my-6">
            <thead>
              <tr className="border-b border-indigo-600">
                <th className="py-2 px-4">フェーズ</th>
                <th className="py-2 px-4">期間</th>
                <th className="py-2 px-4">開発目標 (マイルストーン)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2 px-4">Phase 0-1</td>
                <td className="py-2 px-4">完了済</td>
                <td className="py-2 px-4">技術的完全稼働（ERC-20実装、Backend構築、Vercelデプロイ完了）</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 px-4">Phase 2 (制度設計)</td>
                <td className="py-2 px-4">2026年 Q1-Q2</td>
                <td className="py-2 px-4">クラウドファンディング/シード調達成功後、制度設計を加速し、セキュリティ監査を完了。</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 px-4">一般社団法人設立</td>
                <td className="py-2 px-4">2026年 Q2以降</td>
                <td className="py-2 px-4">ガバナンス構造の構築と、公共機関との連携準備。</td>
              </tr>
              <tr>
                <td className="py-2 px-4">正式リリース</td>
                <td className="py-2 px-4">2026年 Q2（4月〜6月）</td>
                <td className="py-2 px-4">安全性と制度設計の完了を最優先。</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">ガバナンス（統治構造）</h3>
          <br className="sm:hidden" />

          <p className="mb-8">
            初期体制はプロジェクトコアチーム（Initiative Lead）による集中的な意思決定。将来的な公共トラスト層として一般社団法人 ACEs Care HUB JAPAN を位置づけ、資金調達の完了をもって2026年Q2に設立を計画。
          </p>
          <p>
            最終目標は、Phase 3移行時に、Decentralized Governance (DAO)への移行を完了し、トークン保有者による自律分散型の意思決定を確立することです。
          </p>

          <div className="text-right mt-16 md:mt-24 pt-8 border-t border-indigo-700">
            <p className="text-lg font-semibold text-white mb-1">
              田前 秀樹 (Hideki Tamae)
            </p>
            <p className="text-sm text-gray-400">
              プロジェクト設計者 (Re-Verse Civilization Architect)<br/>
              ACEs Care HUB JAPAN 代表
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WhitepaperPage;
