import { Globe, ExternalLink, Eye, Edit, Check, Clock, FileText, TrendingUp, Sparkles, Calendar, Zap } from 'lucide-react';
import { PageHero } from '../PageHero';
import { useProfile } from '../../contexts/ProfileContext';

export function WebsitePage() {
  const { systemStatus } = useProfile();
  // Project data
  const websiteProgress = 75; // Overall progress percentage

  return (
    <div>
      {/* Page Hero */}
      <PageHero
        title="Your Website"
        subtitle="Track your website build progress and launch timeline"
        icon={<Globe className="w-8 h-8 text-white" />}
        iconGradient="from-[#3AB8FF] to-[#5DAEFF]"
      />

      {/* Main Website Status Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-2xl shadow-[#3AB8FF]/10 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3AB8FF]/5 to-[#5DAEFF]/5"></div>
        <div className="relative p-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
            {/* Left side - Status Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-[#E8F1FF] text-2xl mb-1">Website Build</h2>
                  <div className="flex items-center gap-2">
                    {systemStatus === 'active' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
                        <Check className="w-3 h-3 mr-2" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3AB8FF]/20 text-[#3AB8FF] text-sm border border-[#3AB8FF]/30">
                        <div className="w-2 h-2 bg-[#3AB8FF] rounded-full mr-2 animate-pulse shadow-lg shadow-[#3AB8FF]/50"></div>
                        Optimizing
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-[#94A3B8]">Your website draft is ready for review. Preview the design and provide feedback.</p>
                <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Est. Launch: See dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Last Updated: Today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Action Button */}
            <div className="flex items-start justify-center w-full lg:w-auto lg:min-w-[240px]">
              <button className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#3AB8FF] to-[#5DAEFF] text-white shadow-xl shadow-[#3AB8FF]/40 hover:shadow-2xl hover:shadow-[#3AB8FF]/60 hover:-translate-y-0.5 transition-all font-medium w-full lg:w-auto whitespace-nowrap">
                <Eye className="w-5 h-5" />
                <span>View Website</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>

          {/* Progress Breakdown - Full Width */}
          <div className="bg-[#1A1D23]/60 backdrop-blur-sm rounded-xl p-4 border border-[#293038]">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#E8F1FF]">8</div>
                <div className="text-xs text-[#94A3B8]">Total Pages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E8F1FF]">6</div>
                <div className="text-xs text-[#94A3B8]">Pages Ready</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E8F1FF]">2</div>
                <div className="text-xs text-[#94A3B8]">In Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Stat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Design Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Status indicator */}
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg shadow-[#10B981]/50">
              <Check className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center border border-[#10B981]/30">
                <Sparkles className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="text-[#E8F1FF]">Design</h3>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
                <Check className="w-3 h-3 mr-2" />
                Active
              </div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
                <div className="w-2 h-2 bg-[#10B981] rounded-full mr-2 animate-pulse shadow-lg shadow-[#10B981]/50"></div>
                Optimizing
              </div>
            )}
          </div>

          {/* Metrics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Pages Designed</span>
              <span className="text-[#E8F1FF]">8 of 8</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Mockups Created</span>
              <span className="text-[#E8F1FF]">12</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Last Updated</span>
              <span className="text-[#E8F1FF]">Dec 5, 2025</span>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#3AB8FF]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Status indicator */}
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3AB8FF] to-[#5DAEFF] rounded-xl flex items-center justify-center shadow-lg shadow-[#3AB8FF]/50">
              <Edit className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#3AB8FF]/10 rounded-xl flex items-center justify-center border border-[#3AB8FF]/30">
                <FileText className="w-6 h-6 text-[#3AB8FF]" />
              </div>
              <h3 className="text-[#E8F1FF]">Content</h3>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
                <Check className="w-3 h-3 mr-2" />
                Active
              </div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#3AB8FF]/20 text-[#3AB8FF] text-sm border border-[#3AB8FF]/30">
                <div className="w-2 h-2 bg-[#3AB8FF] rounded-full mr-2 animate-pulse shadow-lg shadow-[#3AB8FF]/50"></div>
                Optimizing
              </div>
            )}
          </div>

          {/* Metrics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Pages Written</span>
              <span className="text-[#E8F1FF]">5 of 8</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">SEO Score</span>
              <span className="text-[#E8F1FF]">78/100</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Images Added</span>
              <span className="text-[#E8F1FF]">24/30</span>
            </div>
          </div>
        </div>

        {/* Launch Card */}
        <div className="group relative bg-[#1A1D23] rounded-[24px] p-8 border border-[#293038] shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Status indicator */}
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-xl flex items-center justify-center border border-[#8B5CF6]/30">
                <Zap className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <h3 className="text-[#E8F1FF]">Launch</h3>
            </div>
            {systemStatus === 'active' ? (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm border border-[#10B981]/30">
                <Check className="w-3 h-3 mr-2" />
                Active
              </div>
            ) : (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] text-sm border border-[#8B5CF6]/30">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-2 animate-pulse shadow-lg shadow-[#8B5CF6]/50"></div>
                Optimizing
              </div>
            )}
          </div>

          {/* Metrics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Launch Date</span>
              <span className="text-[#E8F1FF]">Dec 18, 2025</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-[#293038]">
              <span className="text-[#94A3B8]">Readiness Score</span>
              <span className="text-[#E8F1FF]">65/100</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-[#94A3B8]">Days Until Launch</span>
              <span className="text-[#E8F1FF]">8 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}