import { MessageSquare, ChevronLeft, Target, Shield, CheckCircle } from 'lucide-react';

interface SalesScriptsGuideProps {
  onBack: () => void;
}

export function SalesScriptsGuide({ onBack }: SalesScriptsGuideProps) {
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
              <MessageSquare className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">Sales Scripts</h1>
              <p className="text-sm text-[#7a8494] mt-1">How to close the lead into a booked job</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* The Right Mindset */}
            <div className="p-6 rounded-xl border-2 border-[#00D4AA]/30" style={{ background: 'rgba(0, 212, 170, 0.05)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#00D4AA]" />
                <h2 className="text-xl text-[#00D4AA] font-medium">The Right Mindset</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-3">
                You're not "selling" — you're helping someone solve a problem they already have. They reached out to you because they need help. Your job is to make it easy for them to say yes.
              </p>
              <p className="text-[#E8F1FF] font-medium">
                Be confident. Be helpful. Be direct.
              </p>
            </div>

            {/* The Sales Call Framework */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">The Sales Call Framework</h2>
              <div className="space-y-4">
                {[
                  { num: 1, title: 'Build Rapport', time: '30 seconds', script: '"Hey [Name], thanks for reaching out! Before we dive in — how\'s your day going?"' },
                  { num: 2, title: 'Understand the Problem', time: '1-2 minutes', script: '"Tell me what\'s going on. What made you reach out today?"' },
                  { num: 3, title: 'Ask Qualifying Questions', time: '1-2 minutes', script: '"How long has this been an issue?" "Have you tried anything else?" "What\'s the ideal outcome for you?"' },
                  { num: 4, title: 'Present the Solution', time: '30 seconds', script: '"Here\'s what I can do for you..." (explain your service clearly and confidently)' },
                  { num: 5, title: 'Quote the Price', time: '15 seconds', script: '"For what you\'re describing, it would be [price]." (Then stop talking. Let them respond.)' },
                  { num: 6, title: 'Ask for the Booking', time: '15 seconds', script: '"I\'ve got availability on [day]. Should I lock that in for you?"' },
                ].map((step) => (
                  <div key={step.num} className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>{step.num}</span>
                      <h3 className="text-[#E8F1FF] font-medium">{step.title}</h3>
                      <span className="text-[#7a8494] text-sm ml-auto">{step.time}</span>
                    </div>
                    <p className="text-[#c5cdd8] italic ml-11">{step.script}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Handling Objections */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">Handling Objections</h2>
              </div>
              <div className="rounded-xl border border-[#252a33] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: 'rgba(0, 212, 170, 0.08)' }}>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">They Say</th>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">You Say</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#c5cdd8]">
                    {[
                      { objection: '"That\'s more than I expected"', response: '"I understand. What were you expecting to pay? Let me see if there\'s a way to work with your budget."' },
                      { objection: '"I need to think about it"', response: '"Totally fair. What specifically do you want to think over? Maybe I can help answer that now."' },
                      { objection: '"I\'m getting other quotes"', response: '"Smart move. What matters most to you when choosing someone — price, quality, or speed?"' },
                      { objection: '"Can you do it cheaper?"', response: '"I price fairly for the quality I deliver. But tell me what you had in mind."' },
                      { objection: '"I\'ll call you back"', response: '"No problem! When should I expect to hear from you? I\'ll make a note to follow up."' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-[#252a33] last:border-b-0" style={{ background: idx % 2 === 0 ? 'rgba(15, 17, 21, 0.5)' : 'transparent' }}>
                        <td className="px-4 py-3 text-[#E8F1FF] italic">{row.objection}</td>
                        <td className="px-4 py-3 italic">{row.response}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Closing Techniques */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">Closing Techniques</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'The Direct Close', script: '"Ready to get this scheduled?"' },
                  { name: 'The Assumptive Close', script: '"I\'ve got Tuesday or Thursday open — which works better?"' },
                  { name: 'The Urgency Close', script: '"My schedule fills up fast — want me to hold this spot for you?"' },
                  { name: 'The Summary Close', script: '"So we\'ll do [service] on [day] for [price]. Sound good?"' },
                ].map((technique, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <h3 className="text-[#00D4AA] font-medium mb-2">{technique.name}</h3>
                    <p className="text-[#c5cdd8] italic">{technique.script}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Reminders */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Key Reminders</h2>
              <div className="space-y-3">
                {[
                  'Always ask for the booking — they won\'t book themselves',
                  'Silence after quoting is your friend — let them think',
                  'If they say no now, follow up in 24-48 hours',
                  'Every "no" gets you closer to a "yes"',
                  'Confidence is contagious — if you believe in your service, they will too',
                ].map((reminder, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA]">→</span>
                    <span className="text-[#c5cdd8]">{reminder}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">Every call is an opportunity. Ask for the job, and you'll get it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
