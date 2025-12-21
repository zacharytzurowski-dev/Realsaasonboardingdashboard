import { Clock, CheckCircle, Sparkles, Globe, TrendingUp, Zap, Rocket, ArrowRight, Palette, FileText, Calendar, Database, Star, Loader2, User, Briefcase, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { LaunchOSLogo } from '../LaunchOSLogo';
import { useAuth } from '../../contexts/AuthContext';

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { user, signOut } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // Get user information from auth session
  const ownerName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  const businessName = user?.user_metadata?.business_name || 'My Business';
  const userInitial = ownerName.charAt(0).toUpperCase();
  
  // Deployment started - countdown from 72 hours
  const deploymentStartTime = new Date('2025-12-09T00:00:00'); // Started 2 days ago
  const totalDeploymentHours = 72;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate countdown from 72 hours
  const elapsedTime = currentTime.getTime() - deploymentStartTime.getTime();
  const elapsedHours = elapsedTime / (1000 * 60 * 60);
  const remainingHours = Math.max(0, totalDeploymentHours - elapsedHours);
  const hoursLeft = Math.max(0, Math.ceil(remainingHours));
  
  // Calculate HH:MM:SS for display
  const totalSecondsRemaining = Math.max(0, Math.floor(remainingHours * 3600));
  const hours = Math.floor(totalSecondsRemaining / 3600);
  const minutes = Math.floor((totalSecondsRemaining % 3600) / 60);
  const seconds = totalSecondsRemaining % 60;
  
  // Calculate percentage for progress (72 hours = 100%)
  const progressPercentage = Math.max(0, Math.min(100, (elapsedHours / totalDeploymentHours) * 100));

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
            <LaunchOSLogo size={56} withGlow={true} />
            
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
                className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#0EA5E9] flex items-center justify-center text-white font-semibold"
                style={{
                  boxShadow: '0 4px 16px rgba(0, 217, 255, 0.3)'
                }}
              >
                {userInitial}
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
                  {/* Edit Personal Info */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate && onNavigate('settings');
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 border border-[#2A2B2E]/30 hover:border-[#00D9FF]/40 hover:bg-[#151618]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <User className="w-6 h-6 text-[#00D9FF]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white mb-0.5">Edit Personal Info</div>
                      <div className="text-[#8B8D98] text-sm">Update your name and contact details</div>
                    </div>
                  </button>

                  {/* Edit Business Info */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate && onNavigate('onboarding');
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 border border-[#2A2B2E]/30 hover:border-[#8B5CF6]/40 hover:bg-[#151618]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white mb-0.5">Edit Business Info</div>
                      <div className="text-[#8B8D98] text-sm">Business name, company info, and industry</div>
                    </div>
                  </button>

                  {/* Account Settings */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate && onNavigate('settings');
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 border border-[#2A2B2E]/30 hover:border-[#0EA5E9]/40 hover:bg-[#151618]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#0EA5E9] flex items-center justify-center">
                        <Settings className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white mb-0.5">Account Settings</div>
                      <div className="text-[#8B8D98] text-sm">Manage notifications and preferences</div>
                    </div>
                  </button>

                  {/* Contact Support */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                    }}
                    className="group w-full flex items-start gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 border border-[#2A2B2E]/30 hover:border-[#06B6D4]/40 hover:bg-[#151618]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-[#06B6D4]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-white mb-0.5">Contact Support</div>
                      <div className="text-[#8B8D98] text-sm">Get help from our team</div>
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#2A2B2E] to-transparent my-2"></div>

                  {/* Log Out */}
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      signOut();
                    }}
                    className="group w-full flex items-center gap-4 p-4 rounded-xl bg-[#0A0A0A]/50 border border-[#2A2B2E]/30 hover:border-[#EF4444]/40 hover:bg-[#151618]/80 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <LogOut className="w-6 h-6 text-[#EF4444]" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-[#EF4444]">Log Out</div>
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
            {/* Status Badge */}
            <div className="flex items-center justify-between mb-6">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 backdrop-blur-sm"
                style={{
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)'
                }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)'
                  }}
                ></div>
                <span className="text-xs text-[#00D9FF] font-medium uppercase tracking-wider">System Deployment Active</span>
              </div>
              <div className="text-sm text-[#8B8D98]">
                {hoursLeft} hours remaining
              </div>
            </div>

            {/* Countdown Display */}
            <div className="flex items-center justify-center gap-6 mb-6">
              {/* Hours */}
              <div className="text-center">
                <div className="text-5xl text-white tabular-nums tracking-tight">
                  {String(hours).padStart(2, '0')}
                </div>
                <div className="text-xs text-[#6B6C7B] uppercase tracking-wider mt-1">Hours</div>
              </div>
              
              <div className="text-3xl text-[#2A2B2E]">•</div>
              
              {/* Minutes */}
              <div className="text-center">
                <div className="text-5xl text-white tabular-nums tracking-tight">
                  {String(minutes).padStart(2, '0')}
                </div>
                <div className="text-xs text-[#6B6C7B] uppercase tracking-wider mt-1">Minutes</div>
              </div>
              
              <div className="text-3xl text-[#2A2B2E]">•</div>
              
              {/* Seconds */}
              <div className="text-center">
                <div className="text-5xl text-white tabular-nums tracking-tight">
                  {String(seconds).padStart(2, '0')}
                </div>
                <div className="text-xs text-[#6B6C7B] uppercase tracking-wider mt-1">Seconds</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="h-2 bg-[#0A0A0A] rounded-full overflow-hidden border border-[#2A2B2E]/50">
                <div 
                  className="h-full bg-gradient-to-r from-[#00D9FF] via-[#0EA5E9] to-[#3B82F6] rounded-full transition-all duration-1000 relative"
                  style={{ 
                    width: `${progressPercentage}%`,
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#3B82F6] blur-sm opacity-50"></div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-[#6B6C7B]">
                <span>Started</span>
                <span className="text-[#00D9FF]">{Math.round(progressPercentage)}% Complete</span>
                <span>Complete</span>
              </div>
            </div>
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
                <span className="text-[#00D9FF]">2</span> of 5 completed
              </div>
            </div>

            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                { step: 1, text: 'Upload your business info & brand assets', icon: FileText, completed: true },
                { step: 2, text: 'Preview your new business hub', icon: Globe, completed: true },
                { step: 3, text: 'Your backend completes in 72 hours', icon: Clock, completed: false },
                { step: 4, text: 'Explore Fieldd (your new CRM)', icon: Database, completed: false },
                { step: 5, text: 'LaunchOS runs without you', icon: Sparkles, completed: false },
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
              <button 
                onClick={() => onNavigate && onNavigate('onboarding')}
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
              {/* Caption */}
              <p className="text-xs text-[#6B6C7B] mt-4 text-center max-w-md">
                Completing onboarding unlocks your full system and deploys remaining subsystems automatically.
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
