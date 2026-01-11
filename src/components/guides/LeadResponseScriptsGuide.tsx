import { Phone, ChevronLeft, Zap, Clock, MessageCircle } from 'lucide-react';

interface LeadResponseScriptsGuideProps {
  onBack: () => void;
}

export function LeadResponseScriptsGuide({ onBack }: LeadResponseScriptsGuideProps) {
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
              <Phone className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">Lead Response Scripts</h1>
              <p className="text-sm text-[#7a8494] mt-1">How to answer calls/texts fast and close clients</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* Speed Matters */}
            <div className="p-6 rounded-xl border-2 border-[#00D4AA]/30" style={{ background: 'rgba(0, 212, 170, 0.05)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-[#00D4AA]" />
                <h2 className="text-xl text-[#00D4AA] font-medium">Speed Wins Jobs</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-4">
                The #1 factor in closing leads is response time. Respond within 5 minutes and you're 10x more likely to book the job.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#00D4AA]" />
                  <span className="text-[#E8F1FF] font-medium">Under 5 min = 10x better close rate</span>
                </div>
              </div>
            </div>

            {/* Key Principles */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Key Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { num: 1, title: 'Answer Fast', desc: 'Every minute counts. Drop what you\'re doing.' },
                  { num: 2, title: 'Sound Friendly', desc: 'Smile when you talk — they can hear it.' },
                  { num: 3, title: 'Get the Booking', desc: 'Don\'t just answer questions — schedule the job.' },
                ].map((item) => (
                  <div key={item.num} className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA] mb-3" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>{item.num}</span>
                    <h3 className="text-[#E8F1FF] font-medium mb-1">{item.title}</h3>
                    <p className="text-[#7a8494] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Call Script */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">Phone Call Script</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <p className="text-[#00D4AA] text-sm font-medium mb-2">Opening:</p>
                  <p className="text-[#c5cdd8] italic">"Hey, this is [Your Name] with [Business Name]! Thanks for reaching out. How can I help you today?"</p>
                </div>
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <p className="text-[#00D4AA] text-sm font-medium mb-2">After they explain their need:</p>
                  <p className="text-[#c5cdd8] italic">"Perfect, I can definitely help with that. Let me ask a few quick questions so I can give you an accurate quote."</p>
                </div>
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <p className="text-[#00D4AA] text-sm font-medium mb-2">Closing:</p>
                  <p className="text-[#c5cdd8] italic">"Based on what you've told me, I can get you on my schedule for [day/time]. Does that work for you?"</p>
                </div>
              </div>
            </div>

            {/* Text Message Scripts */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">Text Message Scripts</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <p className="text-[#00D4AA] text-sm font-medium mb-2">Initial Response:</p>
                  <p className="text-[#c5cdd8] italic">"Hey! This is [Your Name] from [Business Name]. Got your message — I'd love to help! What's the best time to give you a quick call?"</p>
                </div>
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <p className="text-[#00D4AA] text-sm font-medium mb-2">If they prefer text:</p>
                  <p className="text-[#c5cdd8] italic">"No problem! Can you tell me a bit more about what you need? I'll get you a quote right away."</p>
                </div>
                <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                  <p className="text-[#00D4AA] text-sm font-medium mb-2">After quoting:</p>
                  <p className="text-[#c5cdd8] italic">"I've got availability on [day]. Want me to lock that in for you?"</p>
                </div>
              </div>
            </div>

            {/* Scripts by Lead Source */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Scripts by Lead Source</h2>
              <div className="rounded-xl border border-[#252a33] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: 'rgba(0, 212, 170, 0.08)' }}>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">Source</th>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">Opening Line</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#c5cdd8]">
                    {[
                      { source: 'Google Ads', line: '"Thanks for finding us on Google! How can I help?"' },
                      { source: 'Local Service Ads', line: '"Hey, saw you reached out through Google — perfect timing!"' },
                      { source: 'Thumbtack', line: '"Got your request on Thumbtack — I\'d love to help!"' },
                      { source: 'Website Form', line: '"Thanks for filling out the form! Let\'s get you scheduled."' },
                      { source: 'Nextdoor', line: '"Hey neighbor! Saw your post — happy to help."' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-[#252a33] last:border-b-0" style={{ background: idx % 2 === 0 ? 'rgba(15, 17, 21, 0.5)' : 'transparent' }}>
                        <td className="px-4 py-3 text-[#E8F1FF] font-medium">{row.source}</td>
                        <td className="px-4 py-3 italic">{row.line}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Common Mistakes */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-3">
                {[
                  'Waiting too long to respond — every minute costs you money',
                  'Giving a price without asking questions first',
                  'Ending the call without scheduling a job or follow-up',
                  'Sounding rushed or distracted',
                  'Not asking for the booking directly',
                ].map((mistake, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-red-400">✗</span>
                    <span className="text-[#c5cdd8]">{mistake}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">Speed + friendliness + asking for the booking = jobs booked.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
