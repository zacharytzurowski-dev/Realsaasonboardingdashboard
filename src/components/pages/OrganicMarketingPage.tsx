import { MapPin, Search, Users, ExternalLink, MessageCircle, TrendingUp, AlertCircle, CheckCircle, Clock, Zap, Check } from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '../PageHero';
import { useProfile } from '../../contexts/ProfileContext';

export function OrganicMarketingPage() {
  const { systemStatus, formData } = useProfile();
  const [gbpStatus, setGbpStatus] = useState<'connected' | 'not-connected' | 'error-permissions' | 'error-not-verified'>('connected');
  const businessName = formData?.step1_business_info?.businessName || 'Your Business';
  const gbpData = { locationName: businessName, verified: systemStatus === 'active' };
  const handleConnect = () => setGbpStatus('connected');

  return (
    <div>
      <PageHero
        title="Organic Marketing"
        subtitle="View track, and monitor your organic presence"
        icon={<MapPin className="w-7 h-7 text-white" />}
        gradientFrom="#5eead4"
        gradientTo="#0f766e"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {gbpStatus === 'connected' && (
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#16181d] to-[#1a1d24] rounded-[24px] border border-[#252a33] mb-8" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 10px 30px -10px rgba(20, 184, 166, 0.15)' }}>
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(20, 184, 166, 0.02) 30%, transparent 60%)' }}></div>
              <div className="relative p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-6 flex-1">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #5eead4 0%, #2dd4bf 20%, #14B8A6 45%, #0D9488 65%, #0f766e 80%, #115e59 100%)', boxShadow: '0 10px 30px -5px rgba(20, 184, 166, 0.6), 0 4px 10px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(17, 94, 89, 0.4)' }}>
                      <MapPin className="w-7 h-7 text-white drop-shadow-md" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-[#E8F1FF] text-xl font-medium mb-2">Google Business Profile</h2>
                      <p className="text-[#7a8494] mb-3">View and track your optimized local listing built for visibility and trust...</p>
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-[#14B8A6]/15" style={{ background: 'rgba(15, 17, 21, 0.8)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)' }}>
                        {systemStatus === 'active' ? (
                          <CheckCircle className="w-5 h-5 text-[#10B981]" />
                        ) : (
                          <Clock className="w-5 h-5 text-[#94a3b8]" />
                        )}
                        <div className="flex items-center gap-2">
                          <span className="text-[#c5cdd8] text-sm">{gbpData.locationName}</span>
                          {systemStatus === 'active' ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[#10B981] text-xs border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>Verified</span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[#94a3b8] text-xs border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.1)' }}>In Progress</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[240px]">
                    <a href="https://business.google.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #5eead4 0%, #2dd4bf 15%, #14B8A6 40%, #0D9488 60%, #0f766e 80%, #115e59 100%)', boxShadow: '0 15px 35px -8px rgba(20, 184, 166, 0.55), 0 5px 15px -5px rgba(0,0,0,0.3), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(17, 94, 89, 0.3)' }}>
                      <span>Open GBP Dashboard</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33]" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5)' }}>
                <h3 className="text-[#E8F1FF] font-medium mb-6">Customer Interactions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><div className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-[#2dd4bf]" /><span className="text-[#7a8494]">Messages</span></div><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open GBP Dashboard' : 'In Progress'}</span></div>
                  <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><div className="flex items-center gap-3"><ExternalLink className="w-5 h-5 text-[#14B8A6]" /><span className="text-[#7a8494]">Website Clicks</span></div><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open GBP Dashboard' : 'In Progress'}</span></div>
                  <div className="flex items-center justify-between py-3"><div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#2dd4bf]" /><span className="text-[#7a8494]">Direction Requests</span></div><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open GBP Dashboard' : 'In Progress'}</span></div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33]" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5)' }}>
                <h3 className="text-[#E8F1FF] font-medium mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><div className="flex items-center gap-3"><TrendingUp className="w-5 h-5 text-[#10B981]" /><span className="text-[#7a8494]">vs. Last Month</span></div><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open GBP Dashboard' : 'In Progress'}</span></div>
                  <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><div className="flex items-center gap-3"><Search className="w-5 h-5 text-[#2dd4bf]" /><span className="text-[#7a8494]">Search Ranking</span></div><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open GBP Dashboard' : 'In Progress'}</span></div>
                  <div className="flex items-center justify-between py-3"><div className="flex items-center gap-3"><Zap className="w-5 h-5 text-[#14B8A6]" /><span className="text-[#7a8494]">Response Rate</span></div><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open GBP Dashboard' : 'In Progress'}</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {gbpStatus === 'not-connected' && (
          <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#16181d] to-[#1a1d24] rounded-[24px] border border-[#252a33] p-10" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)' }}>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, transparent 60%)' }}></div>
            <div className="relative">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #5eead4 0%, #2dd4bf 20%, #14B8A6 45%, #0D9488 65%, #0f766e 80%, #115e59 100%)', boxShadow: '0 10px 30px -5px rgba(20, 184, 166, 0.5), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(17, 94, 89, 0.4)' }}>
                  <MapPin className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <div className="flex-1"><h2 className="text-[#E8F1FF] text-xl font-medium mb-2">Google Business Profile</h2><p className="text-[#7a8494]">Connect your account to see insights and performance</p></div>
              </div>
              <div className="rounded-xl p-6 border border-[#14B8A6]/15 mb-6" style={{ background: 'rgba(15, 17, 21, 0.6)' }}>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#2dd4bf] flex-shrink-0 mt-0.5" />
                  <div><h4 className="text-[#E8F1FF] mb-2">GBP Not Connected</h4><p className="text-[#7a8494] text-sm mb-3">Connect your Google Business Profile to unlock:</p><ul className="list-disc list-inside space-y-1 text-sm text-[#7a8494]"><li>Real-time review monitoring and ratings</li><li>Customer interaction analytics</li><li>Monthly views and search performance</li></ul></div>
                </div>
              </div>
              <button onClick={handleConnect} className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #5eead4 0%, #2dd4bf 15%, #14B8A6 40%, #0D9488 60%, #0f766e 80%, #115e59 100%)', boxShadow: '0 15px 35px -8px rgba(20, 184, 166, 0.55), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(17, 94, 89, 0.3)' }}>
                <span>Connect Google Business Profile</span>
              </button>
            </div>
          </div>
        )}

        {/* Website SEO Card */}
        <div className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5)' }}>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #5eead4 0%, #2dd4bf 20%, #14B8A6 45%, #0D9488 65%, #0f766e 80%, #115e59 100%)', boxShadow: '0 8px 25px -5px rgba(20, 184, 166, 0.55), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(17, 94, 89, 0.4)' }}>
                <Search className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <div><h3 className="text-[#E8F1FF] font-medium">Website SEO</h3><p className="text-[#7a8494] text-sm">Search engine optimization</p></div>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[#7a8494] text-sm border border-[#64748B]/25" style={{ background: 'rgba(100, 116, 139, 0.08)' }}>Coming Soon</div>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">SEO Score</span><span className="text-[#64748B]">-</span></div>
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Keywords Tracked</span><span className="text-[#64748B]">-</span></div>
            <div className="flex items-center justify-between py-3"><span className="text-[#7a8494]">Organic Traffic</span><span className="text-[#64748B]">-</span></div>
          </div>
          <button disabled className="flex items-center justify-center gap-2 w-full text-[#64748B] px-6 py-3 rounded-2xl cursor-not-allowed opacity-50" style={{ background: 'rgba(41, 48, 56, 0.5)' }}><span>Open SEO Tools</span><ExternalLink className="w-4 h-4" /></button>
        </div>

        {/* Nextdoor Card */}
        <div className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5)' }}>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #6ee7b7 0%, #34d399 20%, #10B981 45%, #059669 65%, #047857 80%, #065f46 100%)', boxShadow: '0 8px 25px -5px rgba(16, 185, 129, 0.55), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(6, 95, 70, 0.4)' }}>
                <Users className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <div><h3 className="text-[#E8F1FF] font-medium">Nextdoor / Neighbor</h3><p className="text-[#7a8494] text-sm">Local community connection</p></div>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#10B981] text-sm border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-3 h-3 mr-2" />Active</div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#94a3b8] text-sm border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.08)' }}><Clock className="w-3 h-3 mr-2" />Optimizing</div>
            )}
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Profile Status</span>{systemStatus === 'active' ? <span className="text-[#c5cdd8] flex items-center gap-1">Active <Check className="w-3 h-3" /></span> : <span className="text-[#c5cdd8]">In Progress</span>}</div>
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Recommendations</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open Nextdoor' : 'In Progress'}</span></div>
            <div className="flex items-center justify-between py-3"><span className="text-[#7a8494]">Neighborhood Reach</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Open Nextdoor' : 'In Progress'}</span></div>
          </div>
          <a href="https://nextdoor.com/profile" target="_blank" rel="noopener noreferrer" className="group/btn flex items-center justify-center gap-2 w-full text-white px-6 py-3 rounded-2xl hover:-translate-y-0.5 transition-all font-medium" style={{ background: 'linear-gradient(145deg, #6ee7b7 0%, #34d399 15%, #10B981 40%, #059669 60%, #047857 80%, #065f46 100%)', boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.5), inset 0 2px 2px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(6, 95, 70, 0.3)' }}><span>Open Nextdoor</span><ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" /></a>
        </div>
      </div>
    </div>
  );
}
