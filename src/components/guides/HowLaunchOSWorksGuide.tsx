import { Cog, ChevronLeft, Play } from 'lucide-react';

interface HowLaunchOSWorksGuideProps {
  onBack: () => void;
}

export function HowLaunchOSWorksGuide({ onBack }: HowLaunchOSWorksGuideProps) {
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
              <Cog className="w-8 h-8 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#E8F1FF]">How LaunchOS Works</h1>
              <p className="text-sm text-[#7a8494] mt-1">Understanding your client acquisition system</p>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] p-8 relative overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.03) 0%, transparent 50%)' }}></div>

          <div className="relative space-y-8">
            {/* Video Placeholder */}
            <div className="rounded-xl border border-[#252a33] overflow-hidden cursor-pointer group" style={{ background: 'linear-gradient(135deg, #0f1115 0%, #1a1d24 100%)' }}>
              <div className="aspect-video flex flex-col items-center justify-center gap-3">
                <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'rgba(0, 212, 170, 0.15)', border: '2px solid rgba(0, 212, 170, 0.3)' }}>
                  <Play className="w-9 h-9 text-[#00D4AA] ml-1" />
                </div>
                <p className="text-[#7a8494]">Video: How LaunchOS Works (3 min)</p>
              </div>
            </div>

            {/* Quick Summary */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Quick Summary</h2>
              <p className="text-[#c5cdd8] leading-relaxed mb-3">
                Once you complete onboarding, we build your entire marketing system — your website, your ads, your profiles — all custom to your business, your brand, your service area.
              </p>
              <p className="text-[#c5cdd8] leading-relaxed">
                In 72 hours, everything goes live. We'll send you a message with all your logins and instructions for each platform.
              </p>
            </div>

            {/* Your System Includes */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Your System Includes:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: 'Website', desc: 'Books jobs for you. SEO built in.' },
                  { label: 'Google Ads', desc: 'Top of search results. Pay per click.' },
                  { label: 'Local Service Ads', desc: 'Google Guaranteed badge. Pay per lead.' },
                  { label: 'Thumbtack', desc: 'Local marketplace. Pay per lead.' },
                  { label: 'Nextdoor', desc: 'Free neighborhood exposure.' },
                  { label: 'Google Business Profile', desc: 'Free Google Maps listing.' },
                  { label: 'CRM', desc: 'Manage leads and bookings.' },
                  { label: 'This Portal', desc: 'Your central hub for everything.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="text-[#00D4AA] font-medium whitespace-nowrap">{item.label}</span>
                    <span className="text-[#7a8494]">— {item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Where Leads Come From Table */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Where Leads Come From & How to Respond:</h2>
              <div className="rounded-xl border border-[#252a33] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr style={{ background: 'rgba(0, 212, 170, 0.08)' }}>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">Source</th>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">How Leads Reach You</th>
                      <th className="text-left text-[#00D4AA] font-medium px-4 py-3 border-b border-[#252a33]">Where to Respond</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#c5cdd8]">
                    {[
                      { source: 'Website', how: 'Booking or contact form', where: 'Email or CRM' },
                      { source: 'Google Ads', how: 'Calls, emails, bookings', where: 'Phone, Email, or CRM' },
                      { source: 'Local Service Ads', how: 'Calls or messages', where: 'Phone or LSA app' },
                      { source: 'Thumbtack', how: 'Quote requests', where: 'Thumbtack app' },
                      { source: 'Nextdoor', how: 'Messages', where: 'Nextdoor app' },
                      { source: 'Google Business Profile', how: 'Calls or website clicks', where: 'Phone' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-[#252a33] last:border-b-0" style={{ background: idx % 2 === 0 ? 'rgba(15, 17, 21, 0.5)' : 'transparent' }}>
                        <td className="px-4 py-3 text-[#E8F1FF] font-medium">{row.source}</td>
                        <td className="px-4 py-3">{row.how}</td>
                        <td className="px-4 py-3">{row.where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Your Job From Here */}
            <div>
              <h2 className="text-xl text-[#E8F1FF] font-medium mb-4">Your Job From Here:</h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {[
                  { num: 1, text: 'Answer fast' },
                  { num: 2, text: 'Book the job' },
                  { num: 3, text: 'Do great work' },
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-3 flex-1 p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.5)' }}>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>{item.num}</span>
                    <span className="text-[#c5cdd8]">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#7a8494]">Everything else is handled.</p>
            </div>

            {/* Closing Statement */}
            <div className="pt-6 border-t border-[#252a33]">
              <p className="text-[#00D4AA] text-lg italic text-center">This is your system. Let's fill your schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
