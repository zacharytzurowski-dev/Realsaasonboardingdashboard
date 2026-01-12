import { Clock, ChevronLeft, Target, Calendar, Lightbulb } from 'lucide-react';

interface FollowUpSequencesGuideProps {
  onBack: () => void;
}

export function FollowUpSequencesGuide({ onBack }: FollowUpSequencesGuideProps) {
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
              <Clock className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">Follow-up Sequences</h1>
              <p className="text-sm text-[#7a8494] mt-1">What to say if a lead goes cold</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* The Reality */}
            <div className="p-6 rounded-xl border-2 border-[#00D4AA]/30" style={{ background: 'rgba(0, 212, 170, 0.05)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#00D4AA]" />
                <h2 className="text-xl text-[#00D4AA] font-medium">The Reality</h2>
              </div>
              <p className="text-[#c5cdd8] leading-relaxed mb-3">
                Most leads don't buy on the first conversation. They get busy, distracted, or need time. Your job is to stay in front of them without being annoying.
              </p>
              <p className="text-[#E8F1FF] text-lg font-medium">
                The fortune is in the follow-up.
              </p>
            </div>

            {/* Key Principles */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Key Principles</h2>
              <div className="space-y-3">
                {[
                  { title: 'Persistence wins', desc: '80% of sales happen after the 5th follow-up, but most people quit after 1-2' },
                  { title: 'Vary your approach', desc: 'Don\'t send the same message every time' },
                  { title: 'Add value, not pressure', desc: 'Each touchpoint should give them a reason to respond' },
                  { title: 'Know when to stop', desc: 'There\'s a line between persistent and annoying' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA] font-medium whitespace-nowrap">{item.title}</span>
                    <span className="text-[#7a8494]">—</span>
                    <span className="text-[#c5cdd8]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Sequence */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">The Sequence</h2>
              </div>
              <div className="space-y-4">
                {[
                  { day: 'Day 1', timing: '2-3 hours after first contact', script: 'Hey [Name], just circling back — did you have any questions about getting this scheduled?' },
                  { day: 'Day 2', timing: '', script: 'Hey! Still have availability this week if you want to get on the calendar. What day works best?' },
                  { day: 'Day 4', timing: '', script: '[Name] — just checking in. Still interested in getting this taken care of?' },
                  { day: 'Day 7', timing: '', script: 'Hey, I know life gets busy. If now\'s not the right time, no worries — just let me know and I\'ll stop bugging you. But if you\'re still thinking about it, I\'m here.' },
                  { day: 'Day 14', timing: '', script: 'Last follow-up from me — if you ever need [service] down the road, you\'ve got my number. Take care!' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-lg text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>{item.day}</span>
                      {item.timing && <span className="text-[#7a8494] text-sm">({item.timing})</span>}
                    </div>
                    <p className="text-[#c5cdd8] italic">"{item.script}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After Day 14 */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">After Day 14</h2>
              <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                <p className="text-[#c5cdd8] leading-relaxed">
                  Stop active follow-up. Add them to a monthly or quarterly check-in list if you have one. But don't keep chasing — <span className="text-[#E8F1FF] font-medium">respect their silence</span>.
                </p>
              </div>
            </div>

            {/* Pro Tips */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-[#00D4AA]" />
                <h2 className="text-xl text-[#E8F1FF] font-medium">Pro Tips</h2>
              </div>
              <div className="space-y-3">
                {[
                  'Call, don\'t just text — A quick call on Day 2 or 4 can close deals that texts never will',
                  'Reference something specific — "Hey, you mentioned your car had dog hair everywhere — still dealing with that?"',
                  'Don\'t apologize for following up — You\'re offering to help, not bothering them',
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA]">→</span>
                    <span className="text-[#c5cdd8]">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">Most people give up too early. Stay in the game, and you'll win more jobs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
