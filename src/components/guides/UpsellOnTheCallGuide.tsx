import { PhoneCall, ChevronLeft, CheckCircle, ArrowRight, Layers, MessageSquare } from 'lucide-react';

interface UpsellOnTheCallGuideProps {
  onBack: () => void;
}

export function UpsellOnTheCallGuide({ onBack }: UpsellOnTheCallGuideProps) {
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
              <PhoneCall className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">Upsell 101: On the Call</h1>
              <p className="text-sm text-[#7a8494] mt-1">How to upsell before the service</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* The Rule */}
            <div className="p-6 rounded-xl border-2 border-[#00D4AA]/30" style={{ background: 'rgba(0, 212, 170, 0.05)' }}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#00D4AA]" />
                <h2 className="text-xl text-[#00D4AA] font-medium">The Rule</h2>
              </div>
              <p className="text-[#E8F1FF] text-lg font-medium mb-2">
                Close first. Upsell second.
              </p>
              <p className="text-[#c5cdd8] leading-relaxed">
                Don't try to upsell before they've said yes to the main service. Get the booking confirmed, then offer more.
              </p>
            </div>

            {/* How to Transition */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ArrowRight className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">How to Transition</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-3">Once they've booked:</p>
              <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8] italic">"Awesome, you're all set for [day/time]. One quick question before I let you go—"</p>
              </div>
              <p className="text-[#7a8494] text-sm mt-2">Then move into the upsell.</p>
            </div>

            {/* The Framework: Assume the Yes */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">The Framework: Assume the Yes</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                Don't ask "Do you want...?" — that invites a no.<br />
                Instead, ask <span className="text-[#E8F1FF] font-medium">"Which one do you want?"</span>
              </p>
              <div className="rounded-xl border border-[#252a33] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: 'rgba(0, 212, 170, 0.08)' }}>
                      <th className="text-left text-red-400 font-medium px-4 py-3 border-b border-[#252a33]">Bad</th>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">Good</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#c5cdd8]">
                    <tr className="border-b border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                      <td className="px-4 py-3 italic">"Did you want any add-ons?"</td>
                      <td className="px-4 py-3 italic">"What kind of protection did you want on there?"</td>
                    </tr>
                    <tr style={{ background: 'transparent' }}>
                      <td className="px-4 py-3 italic">"Would you like to upgrade?"</td>
                      <td className="px-4 py-3 italic">"Which package works better for you — the standard or the full?"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#00D4AA] font-medium mt-4">
                You're not asking if. You're asking which.
              </p>
            </div>

            {/* Price Anchor High, Sell the Middle */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">Price Anchor High, Sell the Middle</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                Always present the highest option first.
              </p>
              <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8] italic mb-3">"So for protection, we've got three options:"</p>
                <div className="space-y-2 ml-4">
                  <p className="text-[#c5cdd8]"><span className="text-[#E8F1FF] font-medium">Ceramic coating</span> is $700 — that's the top tier, lasts 2+ years</p>
                  <p className="text-[#c5cdd8]"><span className="text-[#00D4AA] font-medium">Machine wax</span> is $150 — most people go with this one, lasts a few months</p>
                  <p className="text-[#c5cdd8]"><span className="text-[#7a8494] font-medium">Spray sealant</span> is $50 — basic protection, good for a quick boost</p>
                </div>
              </div>
              <p className="text-[#c5cdd8] mt-4">
                Most people pick the middle. The high option makes it feel reasonable. The low option makes it feel like a smart upgrade.
              </p>
            </div>

            {/* If They Hesitate */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">If They Hesitate</h2>
              <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8] italic">"Totally fine either way — most people just grab the wax since they're already getting the car done. Want me to add it on?"</p>
              </div>
              <p className="text-[#7a8494] text-sm mt-2">Low pressure, easy yes.</p>
            </div>

            {/* Why This Works */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Why This Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Assumptive language', desc: '"Which" not "if" keeps momentum going' },
                  { title: 'Anchoring', desc: 'High price first makes everything else feel affordable' },
                  { title: 'Middle option psychology', desc: 'People naturally avoid extremes' },
                  { title: 'Post-close timing', desc: 'They\'ve already said yes once, saying yes again is easier' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <h3 className="text-[#00D4AA] font-medium mb-1">{item.title}</h3>
                    <p className="text-[#c5cdd8] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">Ask "which," not "if" — and watch your average ticket climb.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
