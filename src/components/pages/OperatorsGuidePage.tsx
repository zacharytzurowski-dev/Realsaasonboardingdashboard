import { BookOpen, Cog, Phone, MessageSquare, Star, Clock, DollarSign, TrendingUp, PhoneCall, ExternalLink } from 'lucide-react';
import { PageHero } from '../PageHero';

interface GuideCard {
  icon: any;
  title: string;
  subtitle: string;
  buttonText: string;
  url: string;
  color: string;
  shadowColor: string;
}

export function OperatorsGuidePage() {
  const guideCards: GuideCard[] = [
    {
      icon: Cog,
      title: 'How LaunchOS Works',
      subtitle: 'Understanding your client acquisition system',
      buttonText: 'Learn More',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: BookOpen,
      title: 'How to Use Your CRM',
      subtitle: 'Operating Fieldd to manage leads and bookings',
      buttonText: 'Watch Tutorial',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: Phone,
      title: 'Lead Response Scripts',
      subtitle: 'How to answer calls/texts fast and close clients',
      buttonText: 'View Scripts',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: MessageSquare,
      title: 'Sales Scripts',
      subtitle: 'How to close the lead into a booked job',
      buttonText: 'View Scripts',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: Star,
      title: 'Review Request Scripts',
      subtitle: 'How to ask for Google reviews in person',
      buttonText: 'View Scripts',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: Clock,
      title: 'Follow-up Sequences',
      subtitle: 'What to say if a lead goes cold',
      buttonText: 'View Scripts',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: DollarSign,
      title: 'Pricing Guidance',
      subtitle: 'How to quote without discounting',
      buttonText: 'Read Guide',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: TrendingUp,
      title: 'Upsell 101: In Person',
      subtitle: 'How to upsell at the service appointment',
      buttonText: 'Read Guide',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
    {
      icon: PhoneCall,
      title: 'Upsell 101: On the Call',
      subtitle: 'How to upsell before the service',
      buttonText: 'Read Guide',
      url: '#',
      color: 'from-[#64748B] to-[#475569]',
      shadowColor: '#64748B',
    },
  ];

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Operator's Guide"
        subtitle="We install the system. Here's how you run it."
        icon={<BookOpen className="w-8 h-8 text-white" />}
        iconGradient="from-[#64748B] to-[#475569]"
      />

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guideCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] p-6 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px ${card.shadowColor}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px rgba(0, 0, 0, 0.2)`;
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${card.shadowColor}08 0%, transparent 50%)`,
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 10px 30px -5px ${card.shadowColor}50` }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-[#E8F1FF] text-lg font-semibold mb-2">{card.title}</h3>

                {/* Subtitle */}
                <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">{card.subtitle}</p>

                {/* Button */}
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                  style={{
                    background: `linear-gradient(135deg, ${card.shadowColor}15 0%, ${card.shadowColor}08 100%)`,
                    border: `1px solid ${card.shadowColor}30`,
                    color: card.shadowColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${card.shadowColor}25 0%, ${card.shadowColor}15 100%)`;
                    e.currentTarget.style.borderColor = `${card.shadowColor}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${card.shadowColor}15 0%, ${card.shadowColor}08 100%)`;
                    e.currentTarget.style.borderColor = `${card.shadowColor}30`;
                  }}
                >
                  <span>{card.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
