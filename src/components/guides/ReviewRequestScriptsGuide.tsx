import { Star, ChevronLeft, Sparkles, Smartphone, MessageSquare } from 'lucide-react';

interface ReviewRequestScriptsGuideProps {
  onBack: () => void;
}

export function ReviewRequestScriptsGuide({ onBack }: ReviewRequestScriptsGuideProps) {
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
              <Star className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">Review Request Scripts</h1>
              <p className="text-sm text-[#7a8494] mt-1">How to ask for Google reviews in person</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* The Golden Rule */}
            <div className="p-6 rounded-xl border-2 border-[#00D4AA]/30" style={{ background: 'rgba(0, 212, 170, 0.05)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-[#00D4AA]" />
                <h2 className="text-xl text-[#00D4AA] font-medium">The Golden Rule</h2>
              </div>
              <p className="text-[#E8F1FF] text-lg leading-relaxed">
                Get the review while you're standing in front of them. Don't send a text and hope they remember — they won't.
              </p>
            </div>

            {/* Why In-Person Works */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Why In-Person Works</h2>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                When you send a review request via text, you're leaving it up to them. People forget. Life gets busy. Your 5-star moment disappears.
              </p>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">When you ask in person:</p>
              <div className="space-y-3 mb-4">
                {[
                  'They just saw the finished work — they\'re at peak happiness',
                  'There\'s no time to forget how good it looks',
                  'If something\'s wrong, you fix it right there before it becomes a bad review',
                  'You can incentivize them on the spot',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA]">→</span>
                    <span className="text-[#c5cdd8]">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#00D4AA] font-medium">
                In-person review requests convert 5-10x better than text follow-ups.
              </p>
            </div>

            {/* What You Need */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">What You Need</h2>
              </div>
              <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8] leading-relaxed">
                  Order <span className="text-[#E8F1FF] font-medium">Tap Five NFC review cards</span> from Amazon. The customer taps their phone, it opens your Google review page automatically. No searching, no typing, no excuses.
                </p>
              </div>
            </div>

            {/* The Script */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">The Script</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                Once the job is done and they've seen the finished work:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>1</span>
                    <h3 className="text-[#E8F1FF] font-medium">Confirm they're happy</h3>
                  </div>
                  <p className="text-[#c5cdd8] italic ml-11">"What do you think? Everything look good?"</p>
                  <p className="text-[#7a8494] text-sm ml-11 mt-1">Wait for the yes.</p>
                </div>

                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>2</span>
                    <h3 className="text-[#E8F1FF] font-medium">Ask for the review</h3>
                  </div>
                  <p className="text-[#c5cdd8] italic ml-11">"Awesome. Hey, do you have your phone on you?"</p>
                  <div className="ml-11 mt-3 space-y-2">
                    <p className="text-[#c5cdd8]"><span className="text-[#00D4AA]">If yes:</span> <span className="italic">"Perfect — if you tap this card and leave a quick review, I'll take $5 off your invoice today."</span></p>
                    <p className="text-[#c5cdd8]"><span className="text-[#00D4AA]">If no:</span> <span className="italic">"No worries — mind grabbing it real quick? I want to make sure you get a discount on today's service."</span></p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>3</span>
                    <h3 className="text-[#E8F1FF] font-medium">Hand them the card</h3>
                  </div>
                  <p className="text-[#c5cdd8] ml-11">Let them tap, leave the review while you're standing there. Thank them and apply the discount.</p>
                </div>
              </div>
            </div>

            {/* Why This Works */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Why This Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Immediate', desc: 'They review while the experience is fresh' },
                  { title: 'Easy', desc: 'One tap, no friction' },
                  { title: 'Incentivized', desc: 'They get something for doing it' },
                  { title: 'Controlled', desc: 'If they\'re not happy, you find out now, not in a 1-star review later' },
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
              <p className="text-[#00D4AA] text-lg italic text-center">5-star reviews don't happen by accident. Ask for them while you're standing there.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
