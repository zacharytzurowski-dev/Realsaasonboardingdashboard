import { BookOpen, Cog, Phone, MessageSquare, Star, Clock, DollarSign, TrendingUp, PhoneCall, ExternalLink } from 'lucide-react';
import { PageHero } from '../PageHero';

interface GuideCard {
  icon: any;
  title: string;
  subtitle: string;
  buttonText: string;
  url: string;
}

export function OperatorsGuidePage() {
  const guideCards: GuideCard[] = [
    { icon: Cog, title: 'How LaunchOS Works', subtitle: 'Understanding your client acquisition system', buttonText: 'Learn More', url: '#' },
    { icon: BookOpen, title: 'How to Use Your CRM', subtitle: 'Operating Fieldd to manage leads and bookings', buttonText: 'Watch Tutorial', url: '#' },
    { icon: Phone, title: 'Lead Response Scripts', subtitle: 'How to answer calls/texts fast and close clients', buttonText: 'View Scripts', url: '#' },
    { icon: MessageSquare, title: 'Sales Scripts', subtitle: 'How to close the lead into a booked job', buttonText: 'View Scripts', url: '#' },
    { icon: Star, title: 'Review Request Scripts', subtitle: 'How to ask for Google reviews in person', buttonText: 'View Scripts', url: '#' },
    { icon: Clock, title: 'Follow-up Sequences', subtitle: 'What to say if a lead goes cold', buttonText: 'View Scripts', url: '#' },
    { icon: DollarSign, title: 'Pricing Guidance', subtitle: 'How to quote without discounting', buttonText: 'Read Guide', url: '#' },
    { icon: TrendingUp, title: 'Upsell 101: In Person', subtitle: 'How to upsell at the service appointment', buttonText: 'Read Guide', url: '#' },
    { icon: PhoneCall, title: 'Upsell 101: On the Call', subtitle: 'How to upsell before the service', buttonText: 'Read Guide', url: '#' },
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
        {guideCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-6 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#64748B]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5), 0 5px 15px -5px rgba(0,0,0,0.3)' }}>
              <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.05) 0%, transparent 50%)' }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105" style={{ background: 'linear-gradient(145deg, #cbd5e1 0%, #94a3b8 20%, #64748B 45%, #475569 65%, #334155 80%, #1e293b 100%)', boxShadow: '0 8px 25px -5px rgba(100, 116, 139, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 41, 59, 0.4)' }}>
                  <Icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <h3 className="text-[#E8F1FF] text-lg font-medium mb-2">{card.title}</h3>
                <p className="text-[#7a8494] text-sm mb-6 leading-relaxed">{card.subtitle}</p>
                <a href={card.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-[#94a3b8] border border-[#64748B]/25 hover:border-[#64748B]/40" style={{ background: 'rgba(100, 116, 139, 0.08)' }}>
                  <span>{card.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
