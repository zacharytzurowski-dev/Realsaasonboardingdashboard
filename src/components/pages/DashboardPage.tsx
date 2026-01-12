import { Clock, CheckCircle, Globe, Zap, ArrowRight, FileText, Database, Sparkles, Settings, HelpCircle, ChevronDown, Check, LogOut } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeploymentCountdown } from '../DeploymentCountdown';
import { useProfile } from '../../contexts/ProfileContext';
import { useAuth } from '../../contexts/AuthContext';
import { useIntercom } from '../../contexts/IntercomContext';

export function DashboardPage() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const { profile, onboardingSubmitted, systemStatus, formData } = useProfile();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { showIntercom } = useIntercom();

  const ownerName = profile?.full_name || user?.user_metadata?.full_name || 'User';
  const businessName = formData?.step1_business_info?.businessName || profile?.business_name || 'Your Business';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    if (isProfileDropdownOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileDropdownOpen]);

  const handleLogout = async () => {
    setIsProfileDropdownOpen(false);
    await signOut();
    navigate('/dashboard');
  };

  const steps = [
    { step: 1, text: 'Upload business info & brand assets', icon: FileText, completed: onboardingSubmitted },
    { step: 2, text: 'Preview your new business hub', icon: Globe, completed: onboardingSubmitted },
    { step: 3, text: 'Backend deployment (72 hours)', icon: Clock, completed: systemStatus === 'active' },
    { step: 4, text: 'Explore Fieldd CRM', icon: Database, completed: systemStatus === 'active' },
    { step: 5, text: 'System runs automatically', icon: Sparkles, completed: systemStatus === 'active' },
  ];

  const completedSteps = steps.filter(s => s.completed).length;

  return (
    <div className="max-w-[1200px] mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-white">
            Welcome back, {ownerName}
          </h1>
          <p className="text-[#6B7280] mt-1">
            Your client acquisition system is being configured.
          </p>
        </div>

        {/* User Profile */}
        <div className="relative" ref={profileDropdownRef}>
          <button
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg border border-[#1e1e1e] bg-[#131416] hover:border-[#2a2a2a] transition-colors"
          >
            <div className="text-right">
              <div className="text-sm text-white">{ownerName}</div>
              <div className="text-xs text-[#6B7280]">{businessName}</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#00D4AA] flex items-center justify-center text-white text-sm font-medium">
              {(profile?.full_name?.[0] || user?.user_metadata?.full_name?.[0] || user?.email?.[0] || 'U').toUpperCase()}
            </div>
            <ChevronDown className={`w-4 h-4 text-[#6B7280] transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileDropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-[#131416] rounded-lg border border-[#1e1e1e] overflow-hidden z-50">
              <div className="p-2 space-y-1">
                <button
                  onClick={() => { setIsProfileDropdownOpen(false); navigate('/settings'); }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-[#E5E7EB] hover:bg-[#1e1e1e] transition-colors"
                >
                  <Settings className="w-4 h-4 text-[#6B7280]" />
                  <span className="text-sm">Settings</span>
                </button>
                <button
                  onClick={() => { setIsProfileDropdownOpen(false); showIntercom(); }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-[#E5E7EB] hover:bg-[#1e1e1e] transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-[#6B7280]" />
                  <span className="text-sm">Support</span>
                </button>
                <div className="h-px bg-[#1e1e1e] my-1" />
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-[#EF4444] hover:bg-[#1e1e1e] transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Log out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Deployment Timer Card */}
      <div className="bg-[#131416] rounded-lg border border-[#1e1e1e] p-6">
        <DeploymentCountdown showFullDisplay={true} />
      </div>

      {/* Next Steps Card */}
      <div className="bg-[#131416] rounded-lg border border-[#1e1e1e] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-medium text-white">Setup Progress</h2>
          <span className="text-sm text-[#6B7280]">{completedSteps} of {steps.length}</span>
        </div>

        <div className="space-y-3 mb-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`flex items-center gap-4 p-3 rounded-lg border ${
                  item.completed
                    ? 'border-[#1e1e1e] bg-[#0A0A0B]'
                    : 'border-[#1e1e1e]'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.completed ? 'bg-[#00D4AA]/10' : 'bg-[#1e1e1e]'
                }`}>
                  {item.completed ? (
                    <CheckCircle className="w-4 h-4 text-[#00D4AA]" />
                  ) : (
                    <Icon className="w-4 h-4 text-[#6B7280]" />
                  )}
                </div>
                <span className={`text-sm ${item.completed ? 'text-[#9CA3AF]' : 'text-[#E5E7EB]'}`}>
                  {item.text}
                </span>
                {item.completed && (
                  <Check className="w-4 h-4 text-[#00D4AA] ml-auto" />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center pt-4 border-t border-[#1e1e1e]">
          {onboardingSubmitted ? (
            <div className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00D4AA]/10 text-[#00D4AA]">
              <Check className="w-4 h-4" />
              <span className="text-sm font-medium">Onboarding Complete</span>
            </div>
          ) : (
            <button
              onClick={() => navigate('/onboarding')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00D4AA] text-white font-medium hover:bg-[#00C49A] transition-colors"
            >
              <span>Complete Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
          <p className="text-xs text-[#6B7280] mt-3 text-center max-w-md">
            {onboardingSubmitted
              ? 'Your system is being deployed. Check the timer above for progress.'
              : 'Complete onboarding to start your 72-hour deployment.'}
          </p>
        </div>
      </div>

      {/* Status Footer */}
      {!onboardingSubmitted && (
        <div className="flex items-center justify-center gap-2 text-sm text-[#6B7280]">
          <Zap className="w-4 h-4 text-[#00D4AA]" />
          <span>System ready to deploy</span>
        </div>
      )}
    </div>
  );
}
