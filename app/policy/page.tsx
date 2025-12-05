import PolicySection from '@/components/PolicySection';
import Footer from '@/components/Footer';

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-[#050511] text-white">
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-cyan-400 mb-8 leading-tight">
            SOLUNA Protocol & Policy
          </h1>
          
          {/* 修正箇所: 改行位置を指定の位置に変更し、text-balanceを削除して手動制御を優先 */}
          <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            科学的根拠（エビデンス）に基づき、見えない「ケア」を価値として証明する<br className="hidden md:block" />
            新たな社会OSの設計図。
          </p>
        </div>
        
        <PolicySection />
      </div>
    </main>
  );
}