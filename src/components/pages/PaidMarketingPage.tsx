import { Megaphone, TrendingUp, Pin, ExternalLink, DollarSign, Users, MousePointerClick, Eye, Target, CheckCircle, RefreshCw, BarChart3, Award, Zap } from 'lucide-react';
import { PageHero } from '../PageHero';

export function PaidMarketingPage() {
  // Mock Google Ads data
  const googleAdsData = {
    adSpend: 2847,
    leadsGenerated: 47,
    costPerLead: 60.57,
    clicks: 1842,
    impressions: 24680,
    conversionRate: 2.6,
    topCampaign: 'Emergency Plumbing - Atlanta',
    topKeyword: 'emergency plumber near me',
    qualityScore: 8.2,
    lastSynced: '1 hour ago',
    accountName: 'Acme Plumbing & HVAC - Ads',
    verified: true
  };

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Paid Marketing"
        subtitle="Monitor and optimize your paid advertising campaigns"
        icon={<TrendingUp className="w-7 h-7 text-white" />}
        gradientFrom="#6366F1"
        gradientTo="#4F46E5"
      />

      {/* Google Ads - Hero Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-2xl shadow-[#6366F1]/10 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#4F46E5]/5"></div>
        <div className="relative p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left side - Header and Status */}
            <div className="flex items-start gap-6 flex-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#4F46E5] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6366F1]/50 flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#E8F1FF] mb-2">Google Ads</h2>
                <p className="text-[#94A3B8] mb-3">Real-time performance metrics and campaign insights</p>

                {/* Connection Status Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#1A1D23]/60 backdrop-blur-sm border border-[#10B981]/30">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <div className="flex items-center gap-2">
                    <span className="text-[#E8F1FF] text-sm">{googleAdsData.accountName}</span>
                    {googleAdsData.verified && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs border border-[#10B981]/30">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Action Button */}
            <div className="flex items-start justify-center w-full lg:w-auto lg:min-w-[240px]">
              <a
                href="https://ads.google.com/aw/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white shadow-xl shadow-[#6366F1]/40 hover:shadow-2xl hover:shadow-[#6366F1]/60 hover:-translate-y-0.5 transition-all font-medium"
              >
                <span>Open Google Ads</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* External Platforms - LSA and Thumbtack */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Local Service Ads */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3AB8FF]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF]">Local Service Ads</h3>
                <p className="text-[#94A3B8] text-sm">Google LSA campaigns</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#3AB8FF]/20 text-[#3AB8FF] text-sm border border-[#3AB8FF]/30">
              <div className="w-2 h-2 bg-[#3AB8FF] rounded-full mr-2 animate-pulse shadow-lg shadow-[#3AB8FF]/50"></div>
              Optimizing
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Setup Status</span>
              <span className="text-[#E8F1FF]">In Progress</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Background Check</span>
              <span className="text-[#E8F1FF]">Pending</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Google Guarantee</span>
              <span className="text-[#E8F1FF]">Not Eligible Yet</span>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://ads.google.com/localservices/inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#3AB8FF] to-[#5DAEFF] text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:shadow-[#3AB8FF]/40 hover:-translate-y-0.5 transition-all shadow-md shadow-[#3AB8FF]/30 font-medium"
          >
            <span>Open LSA Platform</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Thumbtack */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-2xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
                <Pin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF]">Thumbtack</h3>
                <p className="text-[#94A3B8] text-sm">Profile and leads management</p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-sm border border-[#8B5CF6]/30">
              <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-2 animate-pulse shadow-lg shadow-[#8B5CF6]/50"></div>
              Optimizing
            </div>
          </div>

          {/* Metrics */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Profile Status</span>
              <span className="text-[#E8F1FF]">Active ✓</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Response Rate</span>
              <span className="text-[#E8F1FF]">92%</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Avg. Response Time</span>
              <span className="text-[#E8F1FF]">2.5 hours</span>
            </div>
          </div>

          {/* Button */}
          <a
            href="https://www.thumbtack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white px-6 py-3 rounded-2xl hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all shadow-md shadow-[#8B5CF6]/30 font-medium"
          >
            <span>Open Thumbtack</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}