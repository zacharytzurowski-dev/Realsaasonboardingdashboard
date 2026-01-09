import { Megaphone, TrendingUp, Pin, ExternalLink, CheckCircle, Check, Clock } from 'lucide-react';
import { PageHero } from '../PageHero';
import { useProfile } from '../../contexts/ProfileContext';

export function PaidMarketingPage() {
  const { systemStatus, formData } = useProfile();
  const businessName = formData?.step1_business_info?.businessName || 'Your Business';
  const googleAdsData = {
    accountName: `${businessName} - Ads`,
    verified: systemStatus === 'active'
  };

  return (
    <div>
      <PageHero
        title="Paid Marketing"
        subtitle="View track, and monitor your paid advertising campaigns"
        icon={<TrendingUp className="w-7 h-7 text-white" />}
        gradientFrom="#818CF8"
        gradientTo="#3730a3"
      />

      <div className="relative overflow-hidden bg-gradient-to-br from-[#16181d] to-[#1a1d24] rounded-[24px] border border-[#252a33] mb-8" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 10px 30px -10px rgba(99, 102, 241, 0.15)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 30%, transparent 60%)' }}></div>
        <div className="relative p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-6 flex-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #a5b4fc 0%, #818CF8 20%, #6366F1 45%, #4F46E5 65%, #4338CA 80%, #3730a3 100%)', boxShadow: '0 10px 30px -5px rgba(99, 102, 241, 0.6), 0 4px 10px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(55, 48, 163, 0.4)' }}>
                <TrendingUp className="w-7 h-7 text-white drop-shadow-md" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#E8F1FF] text-xl font-medium mb-2">Google Ads</h2>
                <p className="text-[#7a8494] mb-3">View and track your high-converting paid ad campaigns built to drive leads...</p>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-[#6366F1]/15" style={{ background: 'rgba(15, 17, 21, 0.8)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)' }}>
                  {systemStatus === 'active' ? (
                    <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  ) : (
                    <Clock className="w-5 h-5 text-[#94a3b8]" />
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-[#c5cdd8] text-sm">{googleAdsData.accountName}</span>
                    {systemStatus === 'active' ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[#10B981] text-xs border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>Verified</span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[#94a3b8] text-xs border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.1)' }}>In Progress</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-center w-full lg:w-auto lg:min-w-[240px]">
              <a href="https://ads.google.com/aw/overview" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #a5b4fc 0%, #818CF8 15%, #6366F1 40%, #4F46E5 60%, #4338CA 80%, #3730a3 100%)', boxShadow: '0 15px 35px -8px rgba(99, 102, 241, 0.55), 0 5px 15px -5px rgba(0,0,0,0.3), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(55, 48, 163, 0.3)' }}>
                <span>Open Google Ads</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Local Service Ads Card */}
        <div className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5), 0 5px 15px -5px rgba(0,0,0,0.3)' }}>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #a5b4fc 0%, #818CF8 20%, #6366F1 45%, #4F46E5 65%, #4338CA 80%, #3730a3 100%)', boxShadow: '0 8px 25px -5px rgba(99, 102, 241, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(55, 48, 163, 0.4)' }}>
                <Megaphone className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF] font-medium">Local Service Ads</h3>
                <p className="text-[#7a8494] text-sm">Google LSA campaigns</p>
              </div>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#10B981] text-sm border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-3 h-3 mr-2" />Active</div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#94a3b8] text-sm border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.08)' }}><Clock className="w-3 h-3 mr-2" />Optimizing</div>
            )}
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Setup Status</span>{systemStatus === 'active' ? <span className="text-[#c5cdd8] flex items-center gap-1">Active <Check className="w-3 h-3" /></span> : <span className="text-[#c5cdd8]">In Progress</span>}</div>
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Background Check</span>{systemStatus === 'active' ? <span className="text-[#c5cdd8] flex items-center gap-1">Passed <Check className="w-3 h-3" /></span> : <span className="text-[#c5cdd8]">In Progress</span>}</div>
            <div className="flex items-center justify-between py-3"><span className="text-[#7a8494]">Google Guarantee</span>{systemStatus === 'active' ? <span className="text-[#c5cdd8] flex items-center gap-1">Active <Check className="w-3 h-3" /></span> : <span className="text-[#c5cdd8]">Not Eligible Yet</span>}</div>
          </div>
          <a href="https://ads.google.com/localservices/inbox" target="_blank" rel="noopener noreferrer" className="group/btn flex items-center justify-center gap-2 w-full text-white px-6 py-3 rounded-2xl hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #a5b4fc 0%, #818CF8 15%, #6366F1 40%, #4F46E5 60%, #4338CA 80%, #3730a3 100%)', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.5), 0 4px 10px -3px rgba(0,0,0,0.3), inset 0 2px 2px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(55, 48, 163, 0.3)' }}><span>Open LSA Platform</span><ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" /></a>
        </div>

        {/* Thumbtack Card */}
        <div className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5), 0 5px 15px -5px rgba(0,0,0,0.3)' }}>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #a5b4fc 0%, #818CF8 20%, #6366F1 45%, #4F46E5 65%, #4338CA 80%, #3730a3 100%)', boxShadow: '0 8px 25px -5px rgba(99, 102, 241, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(55, 48, 163, 0.4)' }}>
                <Pin className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-[#E8F1FF] font-medium">Thumbtack</h3>
                <p className="text-[#7a8494] text-sm">Profile and leads management</p>
              </div>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#10B981] text-sm border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-3 h-3 mr-2" />Active</div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#94a3b8] text-sm border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.08)' }}><Clock className="w-3 h-3 mr-2" />Optimizing</div>
            )}
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Profile Status</span>{systemStatus === 'active' ? <span className="text-[#c5cdd8] flex items-center gap-1">Active <Check className="w-3 h-3" /></span> : <span className="text-[#c5cdd8]">In Progress</span>}</div>
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Response Rate</span>{systemStatus === 'active' ? <span className="text-[#c5cdd8]">Open Thumbtack</span> : <span className="text-[#c5cdd8]">--</span>}</div>
            <div className="flex items-center justify-between py-3"><span className="text-[#7a8494]">Avg. Response Time</span>{systemStatus === 'active' ? <span className="text-[#c5cdd8]">Open Thumbtack</span> : <span className="text-[#c5cdd8]">--</span>}</div>
          </div>
          <a href="https://www.thumbtack.com/" target="_blank" rel="noopener noreferrer" className="group/btn flex items-center justify-center gap-2 w-full text-white px-6 py-3 rounded-2xl hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #a5b4fc 0%, #818CF8 15%, #6366F1 40%, #4F46E5 60%, #4338CA 80%, #3730a3 100%)', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.5), 0 4px 10px -3px rgba(0,0,0,0.3), inset 0 2px 2px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(55, 48, 163, 0.3)' }}><span>Open Thumbtack</span><ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" /></a>
        </div>
      </div>
    </div>
  );
}
