import { DollarSign, ChevronLeft, Brain, Layers, MessageSquare, AlertCircle } from 'lucide-react';

interface PricingGuidanceGuideProps {
  onBack: () => void;
}

export function PricingGuidanceGuide({ onBack }: PricingGuidanceGuideProps) {
  return (
    <div className="min-h-screen bg-[#0A0B0D] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, #94a3b8 1px, transparent 1px), linear-gradient(0deg, #94a3b8 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-96 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(148, 163, 184, 0.03), transparent)' }}></div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-8">
        {/* Back button */}
        <button onClick={onBack} className="flex items-center gap-2 text-[#94a3b8] hover:text-[#cbd5e1] mb-6 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Back to Operator's Guide
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 10px 30px -5px rgba(100, 116, 139, 0.5), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 41, 59, 0.4)' }}>
              <DollarSign className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">Pricing Guidance</h1>
              <p className="text-sm text-[#7a8494] mt-1">How to quote without discounting</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* The Mindset */}
            <div className="p-6 rounded-xl border-2 border-[#00D4AA]/30" style={{ background: 'rgba(0, 212, 170, 0.05)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[#00D4AA]" />
                <h2 className="text-xl text-[#00D4AA] font-medium">The Mindset</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-3">
                Price is only an issue in the absence of value. If someone says you're too expensive, they don't fully understand what they're getting.
              </p>
              <p className="text-[#E8F1FF] text-lg font-medium">
                Your job isn't to be the cheapest. It's to be worth it.
              </p>
            </div>

            {/* Key Principles */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Key Principles</h2>
              <div className="space-y-3">
                {[
                  { title: 'Never apologize for your price', desc: 'If you don\'t believe it\'s worth it, neither will they' },
                  { title: 'Don\'t discount to win the job', desc: 'You\'ll attract price shoppers and train them to expect deals' },
                  { title: 'Charge for the value, not the time', desc: 'What\'s the outcome worth to them?' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA] font-medium whitespace-nowrap">{item.title}</span>
                    <span className="text-[#7a8494]">—</span>
                    <span className="text-[#c5cdd8]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Value Stack */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">The Value Stack</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                Before you quote, make sure they understand what they're getting. Stack the value so the price feels like a deal.
              </p>
              <p className="text-[#E8F1FF] font-medium mb-3">Three things more valuable than a discount:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { num: 1, title: 'Speed', example: '"I can get this done for you tomorrow"' },
                  { num: 2, title: 'Convenience', example: '"I come to you, you don\'t have to do anything"' },
                  { num: 3, title: 'Outcome', example: '"When you\'re done, it\'s going to look like this..."' },
                ].map((item) => (
                  <div key={item.num} className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA] mb-3" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>{item.num}</span>
                    <h3 className="text-[#E8F1FF] font-medium mb-2">{item.title}</h3>
                    <p className="text-[#7a8494] text-sm italic">{item.example}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#c5cdd8] mt-4">
                When they see the full picture, price becomes secondary.
              </p>
            </div>

            {/* How to Quote */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">How to Quote</h2>
              </div>
              <div className="space-y-3">
                {[
                  { num: 1, text: 'Ask questions first — Understand their situation before you throw out a number' },
                  { num: 2, text: 'Recommend a solution — "Based on what you\'re telling me, here\'s what I\'d do..."' },
                  { num: 3, text: 'State the price with confidence — "[Service] is [price]." Then stop talking.' },
                  { num: 4, text: 'Wait for their response — Don\'t fill the silence. Let them process.' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-3 p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA] flex-shrink-0" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>{item.num}</span>
                    <span className="text-[#c5cdd8]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* If They Say It's Too Expensive */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">If They Say It's Too Expensive</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                Don't immediately drop your price. Instead:
              </p>
              <div className="p-4 rounded-xl border border-[#252a33] mb-4" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8] italic text-lg">"I get it — what were you expecting to pay?"</p>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                Let them answer. Now you know the gap. Then either:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <span className="text-[#00D4AA] font-medium">Explain the value</span>
                  <span className="text-[#7a8494]">—</span>
                  <span className="text-[#c5cdd8]">Help them understand what they're getting for that price</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <span className="text-[#00D4AA] font-medium">Offer a smaller option</span>
                  <span className="text-[#7a8494]">—</span>
                  <span className="text-[#c5cdd8]">"I can do [lesser service] for [lower price] if that works better"</span>
                </div>
              </div>
              <p className="text-red-400 mt-4 font-medium">
                Never just say "okay I'll do it for less." That kills your value and your margins.
              </p>
            </div>

            {/* Remember */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Remember</h2>
              <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8] leading-relaxed">
                  <span className="text-[#E8F1FF] font-medium">Cheap customers are expensive.</span> They haggle, complain, and never come back anyway. Charge what you're worth and attract customers who value quality.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">Price with confidence. The right customers will pay for quality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
