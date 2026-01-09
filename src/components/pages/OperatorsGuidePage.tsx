import { useState } from 'react';
import { BookOpen, Cog, Phone, MessageSquare, Star, Clock, DollarSign, TrendingUp, PhoneCall, ChevronRight } from 'lucide-react';
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
          <p className="text-[#c5cdd8] leading-relaxed">
            LaunchOS is your automated client acquisition system. We handle the marketing, you handle the service.
          </p>

          <div className="space-y-4">
            <h3 className="text-[#E8F1FF] font-medium">The System Has 3 Parts:</h3>

            <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(20, 184, 166, 0.05)' }}>
              <h4 className="text-[#14B8A6] font-medium mb-2">1. Lead Generation</h4>
              <p className="text-[#7a8494] text-sm">Google Ads, SEO, and social media bring leads directly to your booking system.</p>
            </div>

            <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(56, 189, 248, 0.05)' }}>
              <h4 className="text-[#38bdf8] font-medium mb-2">2. Automated Follow-up</h4>
              <p className="text-[#7a8494] text-sm">Email and SMS sequences nurture leads who don't book immediately.</p>
            </div>

            <div className="p-4 rounded-xl border border-[#252a33]" style={{ background: 'rgba(139, 92, 246, 0.05)' }}>
              <h4 className="text-[#8B5CF6] font-medium mb-2">3. Review Automation</h4>
              <p className="text-[#7a8494] text-sm">After each job, we automatically request Google reviews to boost your visibility.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f1115] border border-[#252a33]">
            <p className="text-[#7a8494] text-sm">
              <span className="text-[#E8F1FF] font-medium">Your only job:</span> Answer leads quickly, show up on time, and do great work. The system handles everything else.
            </p>
          </div>
        </div>
      </SlideOutPanel>
    </div>
  );
}
