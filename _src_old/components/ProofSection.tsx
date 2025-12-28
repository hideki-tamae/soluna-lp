import React from 'react';

// 仮のリンク先（Notionや公開されたPDFのURLに置き換えてください）
const DOCS = [
  {
    title: '🥇 監査資金調達提案書 (Proof of Readiness Kit)',
    description: '技術的堅牢性とセキュリティ戦略、監査資金 ($35,000) の使途とROIを詳述。投資家・財団向け。',
    href: 'https://your-notion-link/audit-funding-proposal', // 【要置換】
    color: 'bg-red-600',
  },
  {
    title: '🥈 社会適合性・政策レポート骨子',
    description: '法規制の初期レビューと国際連携（UNICEF/WHO/OECD）の論理的根拠。政策決定者向け。',
    href: 'https://your-notion-link/policy-report-summary', // 【要置換】
    color: 'bg-blue-600',
  },
  {
    title: '🥉 βテスター募集要項 (Ver. 2.0)',
    description: 'Protocol Verifier（最初の監査人）としての役割と、コミュニティ監査体制への参加資格。技術者・当事者向け。',
    href: 'https://your-notion-link/beta-recruitment-v2', // 【要置換】
    color: 'bg-green-600',
  },
];

const ProofSection: React.FC = () => {
  return (
    <section id="proof-section" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
          🛡️ Re-Verse Civilization Proofs
        </h2>
        <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
          技術的堅牢性と、優しさが制度として機能するための論理的・倫理的な裏付けを、全て公開しています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCS.map((doc, index) => (
            <a 
              key={index}
              href={doc.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 ${doc.color} rounded-full flex items-center justify-center mb-4`}>
                <span className="text-white text-xl">{doc.title.split(' ')[0]}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{doc.title.split(' ').slice(1).join(' ')}</h3>
              <p className="text-gray-600 dark:text-gray-400">{doc.description}</p>
              <span className="mt-4 inline-flex items-center text-red-500 dark:text-red-400 font-semibold">
                詳細ドキュメントへ →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;