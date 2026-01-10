import { useState } from 'react';
import { BookOpen, Cog, Phone, MessageSquare, Star, Clock, DollarSign, TrendingUp, PhoneCall, ChevronRight, Play } from 'lucide-react';
import { PageHero } from '../PageHero';
import { SlideOutPanel } from '../SlideOutPanel';

interface GuideCard {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  buttonText: string;
}

export function OperatorsGuidePage() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const guideCards: GuideCard[] = [
    { id: 'how-launchos-works', icon: Cog, title: 'How LaunchOS Works', subtitle: 'Understanding your client acquisition system', buttonText: 'Learn More' },
    { id: 'how-to-use-crm', icon: BookOpen, title: 'How to Use Your CRM', subtitle: 'Operating Fieldd to manage leads and bookings', buttonText: 'Watch Tutorial' },
    { id: 'lead-response-scripts', icon: Phone, title: 'Lead Response Scripts', subtitle: 'How to answer calls/texts fast and close clients', buttonText: 'View Scripts' },
    { id: 'sales-scripts', icon: MessageSquare, title: 'Sales Scripts', subtitle: 'How to close the lead into a booked job', buttonText: 'View Scripts' },
    { id: 'review-request-scripts', icon: Star, title: 'Review Request Scripts', subtitle: 'How to ask for Google reviews in person', buttonText: 'View Scripts' },
    { id: 'follow-up-sequences', icon: Clock, title: 'Follow-up Sequences', subtitle: 'What to say if a lead goes cold', buttonText: 'View Scripts' },
    { id: 'pricing-guidance', icon: DollarSign, title: 'Pricing Guidance', subtitle: 'How to quote without discounting', buttonText: 'Read Guide' },
    { id: 'upsell-in-person', icon: TrendingUp, title: 'Upsell 101: In Person', subtitle: 'How to upsell at the service appointment', buttonText: 'Read Guide' },
    { id: 'upsell-on-call', icon: PhoneCall, title: 'Upsell 101: On the Call', subtitle: 'How to upsell before the service', buttonText: 'Read Guide' },
  ];

  return (
    <div>
      <PageHero
        title="Operator's Guide"
        subtitle="We install the system. Here's how you run it."
        icon={<BookOpen className="w-7 h-7 text-white" />}
        gradientFrom="#94a3b8"
        gradientTo="#334155"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guideCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-6 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#64748B]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5), 0 5px 15px -5px rgba(0,0,0,0.3)' }}>
              <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.05) 0%, transparent 50%)' }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 8px 25px -5px rgba(100, 116, 139, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 41, 59, 0.4)' }}>
                  <Icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <h3 className="text-[#E8F1FF] text-lg font-medium mb-2">{card.title}</h3>
                <p className="text-[#7a8494] text-sm mb-6 leading-relaxed">{card.subtitle}</p>
                <button
                  onClick={() => setActivePanel(card.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-[#94a3b8] border border-[#64748B]/25 hover:border-[#64748B]/40"
                  style={{ background: 'rgba(100, 116, 139, 0.08)' }}
                >
                  <span>{card.buttonText}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide-out Panel for How LaunchOS Works */}
      <SlideOutPanel
        isOpen={activePanel === 'how-launchos-works'}
        onClose={() => setActivePanel(null)}
        title="How LaunchOS Works"
      >
        <div className="space-y-6">
          {/* Video Placeholder */}
          <div className="relative rounded-xl border border-[#252a33] overflow-hidden cursor-pointer group" style={{ background: 'linear-gradient(135deg, #0f1115 0%, #1a1d24 100%)' }}>
            <div className="aspect-video flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: 'rgba(0, 212, 170, 0.15)', border: '2px solid rgba(0, 212, 170, 0.3)' }}>
                <Play className="w-7 h-7 text-[#00D4AA] ml-1" />
              </div>
              <p className="text-[#7a8494] text-sm">Video: How LaunchOS Works (3 min)</p>
            </div>
          </div>

          {/* Quick Summary */}
          <div>
            <h3 className="text-[#E8F1FF] font-medium mb-3">Quick Summary</h3>
            <p className="text-[#c5cdd8] text-sm leading-relaxed mb-3">
              Once you complete onboarding, we build your entire marketing system — your website, your ads, your profiles — all custom to your business, your brand, your service area.
            </p>
            <p className="text-[#c5cdd8] text-sm leading-relaxed">
              In 72 hours, everything goes live. We'll send you a message with all your logins and instructions for each platform.
            </p>
          </div>

          {/* Your System Includes */}
          <div>
            <h3 className="text-[#E8F1FF] font-medium mb-3">Your System Includes:</h3>
            <div className="space-y-2">
              {[
                { label: 'Website', desc: 'Books jobs for you. SEO built in.' },
                { label: 'Google Ads', desc: 'Top of search results. Pay per click.' },
                { label: 'Local Service Ads', desc: 'Google Guaranteed badge. Pay per lead.' },
                { label: 'Thumbtack', desc: 'Local marketplace. Pay per lead.' },
                { label: 'Nextdoor', desc: 'Free neighborhood exposure.' },
                { label: 'Google Business Profile', desc: 'Free Google Maps listing.' },
                { label: 'CRM', desc: 'Manage leads and bookings. See "How to Use Your CRM."' },
                { label: 'This Portal', desc: 'Your central hub for everything.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <span className="text-[#00D4AA] font-medium whitespace-nowrap">{item.label}</span>
                  <span className="text-[#7a8494]">— {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Where Leads Come From Table */}
          <div>
            <h3 className="text-[#E8F1FF] font-medium mb-3">Where Leads Come From & How to Respond:</h3>
            <div className="rounded-xl border border-[#252a33] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'rgba(0, 212, 170, 0.08)' }}>
                    <th className="text-left text-[#00D4AA] font-medium px-3 py-2 border-b border-[#252a33]">Source</th>
                    <th className="text-left text-[#00D4AA] font-medium px-3 py-2 border-b border-[#252a33]">How Leads Reach You</th>
                    <th className="text-left text-[#00D4AA] font-medium px-3 py-2 border-b border-[#252a33]">Where to Respond</th>
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
                      <td className="px-3 py-2 text-[#E8F1FF]">{row.source}</td>
                      <td className="px-3 py-2">{row.how}</td>
                      <td className="px-3 py-2">{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Your Job From Here */}
          <div>
            <h3 className="text-[#E8F1FF] font-medium mb-3">Your Job From Here:</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>1</span>
                <span className="text-[#c5cdd8] text-sm">Answer fast</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>2</span>
                <span className="text-[#c5cdd8] text-sm">Book the job</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-[#00D4AA]" style={{ background: 'rgba(0, 212, 170, 0.15)' }}>3</span>
                <span className="text-[#c5cdd8] text-sm">Do great work</span>
              </div>
            </div>
            <p className="text-[#7a8494] text-sm mt-3">Everything else is handled.</p>
          </div>

          {/* Closing Statement */}
          <div className="pt-4 border-t border-[#252a33]">
            <p className="text-[#00D4AA] text-sm italic">This is your system. Let's fill your schedule.</p>
          </div>
        </div>
      </SlideOutPanel>
    </div>
  );
}
