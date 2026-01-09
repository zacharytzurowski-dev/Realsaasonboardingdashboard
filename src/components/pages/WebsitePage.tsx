import { Globe, ExternalLink, Eye, Edit, Check, Clock, FileText, Sparkles, Calendar, Zap } from 'lucide-react';
import { PageHero } from '../PageHero';
import { useProfile } from '../../contexts/ProfileContext';

export function WebsitePage() {
  const { systemStatus } = useProfile();

  return (
    <div>
      <PageHero
        title="Your Website"
        subtitle="Track your website build progress and launch timeline"
        icon={<Globe className="w-7 h-7 text-white" />}
        gradientFrom="#60a5fa"
        gradientTo="#1e40af"
      />

      <div className="relative overflow-hidden bg-gradient-to-br from-[#16181d] to-[#1a1d24] rounded-[24px] border border-[#252a33] mb-8" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 10px 30px -10px rgba(59, 130, 246, 0.15)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.02) 30%, transparent 60%)' }}></div>
        <div className="relative p-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 20%, #3B82F6 45%, #2563EB 65%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.6), 0 4px 10px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 64, 175, 0.4)' }}>
                  <Globe className="w-7 h-7 text-white drop-shadow-md" />
                </div>
                <div>
                  <h2 className="text-[#E8F1FF] text-xl font-medium mb-1">Website Build</h2>
                  <div className="flex items-center gap-2">
                    {systemStatus === 'active' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[#10B981] text-sm border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-3 h-3 mr-2" />Active</span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[#94a3b8] text-sm border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.08)' }}><Clock className="w-3 h-3 mr-2" />Optimizing</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[#7a8494]">View and track your high-converting SEO-optimized website built to book clients...</p>
                <div className="flex items-center gap-4 text-sm text-[#7a8494]">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Est. Launch: See dashboard</span></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>Last Updated: Today</span></div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-center w-full lg:w-auto lg:min-w-[240px]">
              <button className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white hover:-translate-y-0.5 transition-all font-medium w-full lg:w-auto whitespace-nowrap" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 15%, #3B82F6 40%, #2563EB 60%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 15px 35px -8px rgba(59, 130, 246, 0.55), 0 5px 15px -5px rgba(0,0,0,0.3), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(30, 64, 175, 0.3)' }}>
                <Eye className="w-5 h-5" /><span>View Website</span><ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
          <div className="rounded-xl p-4 border border-[#252a33]" style={{ background: 'rgba(15, 17, 21, 0.6)' }}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><div className="text-2xl font-bold text-[#E8F1FF]">{systemStatus === 'active' ? '8' : '--'}</div><div className="text-xs text-[#7a8494]">Total Pages</div></div>
              <div><div className="text-2xl font-bold text-[#E8F1FF]">{systemStatus === 'active' ? '6' : '--'}</div><div className="text-xs text-[#7a8494]">Pages Ready</div></div>
              <div><div className="text-2xl font-bold text-[#E8F1FF]">{systemStatus === 'active' ? '2' : '--'}</div><div className="text-xs text-[#7a8494]">In Review</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Design Card */}
        <div className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5), 0 5px 15px -5px rgba(0,0,0,0.3)' }}>
          <div className="absolute top-6 right-6">
            {systemStatus === 'active' ? (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #6ee7b7 0%, #34d399 20%, #10B981 45%, #059669 70%, #047857 100%)', boxShadow: '0 6px 20px -4px rgba(16, 185, 129, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(4, 120, 87, 0.3)' }}>
                <Check className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 20%, #3B82F6 45%, #2563EB 65%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 6px 20px -4px rgba(59, 130, 246, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(30, 64, 175, 0.3)' }}>
                <Sparkles className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            )}
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 20%, #3B82F6 45%, #2563EB 65%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 64, 175, 0.4)' }}>
                <Sparkles className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <h3 className="text-[#E8F1FF] font-medium">Design</h3>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#10B981] text-sm border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-3 h-3 mr-2" />Active</div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#94a3b8] text-sm border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.08)' }}><Clock className="w-3 h-3 mr-2" />Optimizing</div>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Pages Designed</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? '8 of 8' : 'In Progress'}</span></div>
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Mockups Created</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? '12' : 'In Progress'}</span></div>
            <div className="flex items-center justify-between py-3"><span className="text-[#7a8494]">Last Updated</span><span className="text-[#c5cdd8]">Today</span></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5), 0 5px 15px -5px rgba(0,0,0,0.3)' }}>
          <div className="absolute top-6 right-6">
            {systemStatus === 'active' ? (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #6ee7b7 0%, #34d399 20%, #10B981 45%, #059669 70%, #047857 100%)', boxShadow: '0 6px 20px -4px rgba(16, 185, 129, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(4, 120, 87, 0.3)' }}>
                <Check className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 20%, #3B82F6 45%, #2563EB 65%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 6px 20px -4px rgba(59, 130, 246, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(30, 64, 175, 0.3)' }}>
                <Edit className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            )}
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 20%, #3B82F6 45%, #2563EB 65%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 64, 175, 0.4)' }}>
                <FileText className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <h3 className="text-[#E8F1FF] font-medium">Content</h3>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#10B981] text-sm border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-3 h-3 mr-2" />Active</div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#94a3b8] text-sm border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.08)' }}><Clock className="w-3 h-3 mr-2" />Optimizing</div>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Pages Written</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Completed' : 'In Progress'}</span></div>
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">SEO Score</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? '95/100' : 'In Progress'}</span></div>
            <div className="flex items-center justify-between py-3"><span className="text-[#7a8494]">Images Added</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? '30/30' : 'In Progress'}</span></div>
          </div>
        </div>

        {/* Launch Card */}
        <div className="group relative bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-[24px] p-8 border border-[#252a33] transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/25" style={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.5), 0 5px 15px -5px rgba(0,0,0,0.3)' }}>
          <div className="absolute top-6 right-6">
            {systemStatus === 'active' ? (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #6ee7b7 0%, #34d399 20%, #10B981 45%, #059669 70%, #047857 100%)', boxShadow: '0 6px 20px -4px rgba(16, 185, 129, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(4, 120, 87, 0.3)' }}>
                <Check className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 20%, #3B82F6 45%, #2563EB 65%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 6px 20px -4px rgba(59, 130, 246, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(30, 64, 175, 0.3)' }}>
                <Clock className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
            )}
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #93c5fd 0%, #60a5fa 20%, #3B82F6 45%, #2563EB 65%, #1d4ed8 80%, #1e40af 100%)', boxShadow: '0 8px 25px -5px rgba(59, 130, 246, 0.55), 0 3px 8px -2px rgba(0,0,0,0.4), inset 0 2px 3px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(30, 64, 175, 0.4)' }}>
                <Zap className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <h3 className="text-[#E8F1FF] font-medium">Launch</h3>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#10B981] text-sm border border-[#10B981]/25" style={{ background: 'rgba(16, 185, 129, 0.08)' }}><Check className="w-3 h-3 mr-2" />Active</div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[#94a3b8] text-sm border border-[#94a3b8]/25" style={{ background: 'rgba(148, 163, 184, 0.08)' }}><Clock className="w-3 h-3 mr-2" />Optimizing</div>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Launch Date</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Completed' : 'See Dashboard'}</span></div>
            <div className="flex items-center justify-between py-3 border-b border-[#252a33]"><span className="text-[#7a8494]">Readiness Score</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? '100/100' : 'In Progress'}</span></div>
            <div className="flex items-center justify-between py-3"><span className="text-[#7a8494]">Days Until Launch</span><span className="text-[#c5cdd8]">{systemStatus === 'active' ? 'Launched' : 'See Dashboard'}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
