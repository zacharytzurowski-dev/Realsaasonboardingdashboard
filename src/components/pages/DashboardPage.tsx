import { Clock, CheckCircle, Sparkles, Globe, TrendingUp, Zap, Rocket, ArrowRight, Palette, FileText, Calendar, Database, Star, Loader2, Settings, HelpCircle, ChevronDown, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeploymentCountdown } from '../DeploymentCountdown';
import { useProfile } from '../../contexts/ProfileContext';
import { useAuth } from '../../contexts/AuthContext';

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const { profile, onboardingSubmitted, systemStatus } = useProfile();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Owner information from profile or auth user
  const ownerName = profile?.full_name || user?.user_metadata?.full_name || 'User';
  const businessName = profile?.business_name || 'Your Business';

  // Activity ticker messages
  const activities = [
    { icon: Zap, message: 'Deploying automation workflows...', color: '#00D9FF' },
    { icon: Palette, message: 'Importing brand assets...', color: '#8B5CF6' },
    { icon: TrendingUp, message: 'Building Google Ads campaigns...', color: '#10B981' },
    { icon: Calendar, message: 'Syncing booking calendar...', color: '#F59E0B' },
    { icon: Database, message: 'Configuring CRM pipelines...', color: '#EC4899' },
    { icon: Star, message: 'Setting up review automation...', color: '#FBBF24' },
  ];

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const activityTimer = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(activityTimer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };

    if (isProfileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileDropdownOpen]);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 max-w-[1600px] mx-auto space-y-8">
        
        {/* Top Header Section - Welcome Hero */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* Logo with Glow */}
            <img src="data:image/webp;base64,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" alt="LaunchOS" className="h-12 w-12" />
            
            {/* Header Text */}
            <div>
              <h1 className="text-3xl text-white tracking-tight">
                Welcome back, <span className="bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] bg-clip-text text-transparent">{ownerName}</span>
              </h1>
              <p className="text-[#6B6C7B] mt-2">
                LaunchOS is building your system. Everything runs without you.
              </p>
            </div>
          </div>

          {/* User Profile */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center gap-3 bg-[#151618] rounded-2xl px-5 py-3 border border-[#2A2B2E]/50 hover:border-[#00D9FF]/30 transition-all"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
              }}
            >
              <div className="text-right">
                <div className="text-sm text-white">{ownerName}</div>
                <div className="text-xs text-[#8B8D98]">{businessName}</div>
              </div>
              <div 
                className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0EA5E9] flex items-center justify-center text-white"
                style={{
                  boxShadow: '0 4px 16px rgba(0, 217, 255, 0.3)'
                }}
              >
                S
              </div>
              <ChevronDown className={`w-4 h-4 text-[#8B8D98] transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Dropdown Panel */}
            {isProfileDropdownOpen && (
              <div 
                className="absolute right-0 top-full mt-3 w-80 bg-[#151618] rounded-2xl border border-[#2A2B2E]/50 overflow-hidden z-50"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 217, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
                }}
              >
                {/* Soft inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none"></div>

                <div className="relative p-3 space-y-1">
                  {/* Edit Account */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      navigate('/settings');
                    }}
                    className="group w-full flex items-center gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 border border-[#2A2B2E]/30 hover:border-[#00D9FF]/40 hover:bg-[#151618]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-[#00D9FF]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white">Edit Account</div>
                    </div>
                  </button>

                  {/* Contact Support */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      console.log('Open Intercom');
                    }}
                    className="group w-full flex items-center gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 border border-[#2A2B2E]/30 hover:border-[#06B6D4]/40 hover:bg-[#151618]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-[#06B6D4]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white">Contact Support</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 72-Hour Deployment Progress Module */}
        <div
          className="bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 p-8 overflow-hidden relative"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none"></div>

          <div className="relative">
            <DeploymentCountdown showFullDisplay={true} />
          </div>
        </div>

        {/* Next Steps Panel */}
        <div 
          className="bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 p-8 overflow-hidden relative"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-white tracking-tight">
                Next Steps to Activate Your System
              </h2>
              <div className="text-sm text-[#8B8D98]">
                <span className="text-[#00D9FF]">{systemStatus === 'active' ? 5 : 2}</span> of 5 completed
              </div>
            </div>

            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { step: 1, text: 'Upload your business info & brand assets', icon: FileText, completed: true },
                { step: 2, text: 'Preview your new business hub', icon: Globe, completed: true },
                { step: 3, text: 'Your backend completes in 72 hours', icon: Clock, completed: systemStatus === 'active' },
                { step: 4, text: 'Explore Fieldd (your new CRM)', icon: Database, completed: systemStatus === 'active' },
                { step: 5, text: 'LaunchOS runs without you', icon: Sparkles, completed: systemStatus === 'active' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.step} 
                    className="group rounded-2xl p-4 transition-all duration-300 hover:shadow-lg relative overflow-hidden border border-[#2A2B2E]/30"
                    style={{
                      background: item.completed 
                        ? 'linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)'
                        : 'transparent',
                      boxShadow: item.completed ? '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.03)' : 'none'
                    }}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/10 to-[#8B5CF6]/10 blur-xl"></div>
                    </div>
                    
                    <div className="relative">
                      {/* Step Number */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl text-white tabular-nums relative">
                          {item.step}
                          {item.completed && (
                            <CheckCircle className="absolute -top-1 -right-1 w-3 h-3 text-[#00D9FF]" />
                          )}
                        </div>
                        <Icon className={`w-5 h-5 ${
                          item.completed ? 'text-[#00D9FF]' : 'text-[#6B6C7B]'
                        }`} />
                      </div>
                      
                      {/* Step Description */}
                      <p className={`text-xs uppercase tracking-wider mb-2 ${
                        item.completed ? 'text-[#00D9FF]' : 'text-[#6B6C7B]'
                      }`}>
                        Step {item.step}
                      </p>
                      <p className={`text-sm leading-relaxed ${
                        item.completed ? 'text-white' : 'text-[#8B8D98]'
                      }`}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complete Onboarding Button */}
            <div className="flex flex-col items-center">
              {onboardingSubmitted ? (
                // Onboarding submitted - show green completed status
                <div
                  className="relative px-12 py-4 rounded-2xl flex items-center gap-3 overflow-hidden cursor-default"
                  style={{
                    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  {/* Button gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] via-[#059669] to-[#10B981]"></div>
                  <Check className="relative w-5 h-5 text-white" />
                  <span className="relative text-white">Onboarding Complete</span>
                </div>
              ) : (
                // Onboarding not submitted - show blue button linking to onboarding
                <button
                  onClick={() => navigate('/onboarding')}
                  className="group relative px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 overflow-hidden"
                  style={{
                    boxShadow: '0 8px 24px rgba(0, 217, 255, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 217, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 217, 255, 0.3)';
                  }}
                >
                  {/* Button gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] via-[#0EA5E9] to-[#3B82F6]"></div>
                  <span className="relative text-white">Complete Onboarding</span>
                  <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              {/* Caption */}
              <p className="text-xs text-[#6B6C7B] mt-4 text-center max-w-md">
                {onboardingSubmitted
                  ? 'Your system is being deployed. Check the countdown timer above for progress.'
                  : 'Completing onboarding unlocks your full system and deploys remaining subsystems automatically.'}
              </p>
            </div>
          </div>
        </div>

        {/* Real-Time Activity Ticker */}
        <div className="relative flex items-center justify-center gap-3 py-2 overflow-hidden">
          {activities[currentActivityIndex].icon && (
            <div className="relative">
              <div className="relative w-5 h-5 rounded-lg flex items-center justify-center" style={{ color: activities[currentActivityIndex].color }}>
                {(() => {
                  const Icon = activities[currentActivityIndex].icon;
                  return <Icon className="w-5 h-5" />;
                })()}
              </div>
            </div>
          )}
          <span className="text-sm text-[#8B8D98] animate-fade-in">
            {activities[currentActivityIndex].message}
          </span>
          <Loader2 className="w-4 h-4 text-[#00D9FF]/60 animate-spin" />
        </div>

      </div>
    </div>
  );
}
