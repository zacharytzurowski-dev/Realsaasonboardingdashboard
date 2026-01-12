import { TrendingUp, ChevronLeft, Clock, HelpCircle, BookOpen, Tag, Zap } from 'lucide-react';

interface UpsellInPersonGuideProps {
  onBack: () => void;
}

export function UpsellInPersonGuide({ onBack }: UpsellInPersonGuideProps) {
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
              <TrendingUp className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">Upsell 101: In Person</h1>
              <p className="text-sm text-[#7a8494] mt-1">How to upsell at the service appointment</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* When to Upsell */}
            <div className="p-6 rounded-xl border-2 border-[#00D4AA]/30" style={{ background: 'rgba(0, 212, 170, 0.05)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#00D4AA]" />
                <h2 className="text-xl text-[#00D4AA] font-medium">When to Upsell</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed">
                After the main service is already in progress or almost done. <span className="text-[#E8F1FF] font-medium">Never before you've delivered value</span> — earn the right to offer more.
              </p>
            </div>

            {/* The 4-Step Framework */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">The 4-Step Framework</h2>
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>1</span>
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#00D4AA]" />
                      <h3 className="text-[#E8F1FF] font-medium">Ask if they've heard of it</h3>
                    </div>
                  </div>
                  <p className="text-[#c5cdd8] italic ml-11 mb-2">"Hey, have you ever heard of [upsell service]?"</p>
                  <div className="ml-11 text-[#7a8494] text-sm space-y-1">
                    <p><span className="text-[#00D4AA]">If yes →</span> Great, they have context</p>
                    <p><span className="text-[#00D4AA]">If no →</span> Great, you get to educate them</p>
                  </div>
                  <p className="text-[#c5cdd8] text-sm ml-11 mt-2">Either way, you're opening a conversation, not pitching.</p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>2</span>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#00D4AA]" />
                      <h3 className="text-[#E8F1FF] font-medium">Explain what it is (not the benefits)</h3>
                    </div>
                  </div>
                  <p className="text-[#c5cdd8] ml-11 mb-2">Keep it simple. Don't oversell.</p>
                  <p className="text-[#c5cdd8] italic ml-11">"So basically, it's [simple explanation]. A lot of people find it helpful for [reason]."</p>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>3</span>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-[#00D4AA]" />
                      <h3 className="text-[#E8F1FF] font-medium">Sacrificial Lamb (Price Anchor)</h3>
                    </div>
                  </div>
                  <p className="text-[#c5cdd8] ml-11 mb-3">Introduce a higher-end option first — not to sell it, but to make your real offer feel reasonable.</p>
                  <div className="ml-11 space-y-2">
                    <p className="text-[#c5cdd8] italic">"Now, if you wanted to go all out, there's [premium option] which runs around [high price]. But honestly, I don't think you need that."</p>
                    <p className="text-[#7a8494] text-sm">Pause.</p>
                    <p className="text-[#c5cdd8] italic">"This would be more in the [actual price] range, and it'll [key benefit]."</p>
                  </div>
                  <p className="text-[#00D4AA] text-sm ml-11 mt-3">The contrast makes your real offer feel like a no-brainer.</p>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>4</span>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#00D4AA]" />
                      <h3 className="text-[#E8F1FF] font-medium">Incentivize Today</h3>
                    </div>
                  </div>
                  <p className="text-[#c5cdd8] ml-11 mb-2">Give them a reason to say yes right now.</p>
                  <p className="text-[#c5cdd8] italic ml-11">"If you want to add it on while I'm already here, I can do [discount or bonus]. Up to you — no pressure."</p>
                </div>
              </div>
            </div>

            {/* Why This Works */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Why This Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Curiosity first', desc: 'Asking if they\'ve heard of it opens dialogue without pressure' },
                  { title: 'Education, not selling', desc: 'You\'re informing, not pushing' },
                  { title: 'Price anchoring', desc: 'The premium option makes the real offer feel cheap' },
                  { title: 'Urgency', desc: 'The incentive gives them a reason to decide now, not later' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <h3 className="text-[#00D4AA] font-medium mb-1">{item.title}</h3>
                    <p className="text-[#c5cdd8] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Example */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Example (Detailing)</h2>
              <div className="p-4 rounded-xl border border-[#252a33] space-y-3" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8]"><span className="text-[#00D4AA]">You:</span> <span className="italic">"Hey, have you ever heard of paint sealant?"</span></p>
                <p className="text-[#c5cdd8]"><span className="text-[#7a8494]">Customer:</span> <span className="italic">"No, what's that?"</span></p>
                <p className="text-[#c5cdd8]"><span className="text-[#00D4AA]">You:</span> <span className="italic">"So it's basically a protective layer that goes on after the wash — keeps your paint looking cleaner longer, makes it easier to wash next time. A lot of people do it a couple times a year."</span></p>
                <p className="text-[#c5cdd8]"><span className="text-[#00D4AA]">You:</span> <span className="italic">"Now, if you wanted the best of the best, there's ceramic coating which is around $700 — but honestly, I don't think you need that for what you're doing."</span></p>
                <p className="text-[#c5cdd8]"><span className="text-[#00D4AA]">You:</span> <span className="italic">"The sealant's more like $80, and it'll keep this looking fresh for a few months."</span></p>
                <p className="text-[#c5cdd8]"><span className="text-[#00D4AA]">You:</span> <span className="italic">"If you want to add it on while I'm here, I'll throw in a free interior wipe-down. Up to you."</span></p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">Every job is an upsell opportunity. Make it easy for them to say yes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
