import { Clock, CheckCircle, Sparkles, Globe, TrendingUp, Zap, ArrowRight, Palette, FileText, Calendar, Database, Star, Loader2, Settings, HelpCircle, ChevronDown, Check, LogOut } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeploymentCountdown } from '../DeploymentCountdown';
import { useProfile } from '../../contexts/ProfileContext';
import { useAuth } from '../../contexts/AuthContext';
import { useIntercom } from '../../contexts/IntercomContext';

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);
  const { profile, onboardingSubmitted, systemStatus, formData } = useProfile();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { showIntercom } = useIntercom();

  const ownerName = profile?.full_name || user?.user_metadata?.full_name || 'User';
  const businessName = formData?.step1_business_info?.businessName || profile?.business_name || 'Your Business';

  const activities = [
    { icon: Zap, message: 'Deploying automation workflows...', color: '#14B8A6' },
    { icon: Palette, message: 'Importing brand assets...', color: '#0D9488' },
    { icon: TrendingUp, message: 'Building Google Ads campaigns...', color: '#10B981' },
    { icon: Calendar, message: 'Syncing booking calendar...', color: '#14B8A6' },
    { icon: Database, message: 'Configuring CRM pipelines...', color: '#0D9488' },
    { icon: Star, message: 'Setting up review automation...', color: '#14B8A6' },
  ];

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const activityTimer = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % activities.length);
    }, 3000);
    return () => clearInterval(activityTimer);
  }, []);

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
    navigate('/login');
  };

  return (
    <div className="min-h-screen relative">
      {/* Grid/Plaid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{ 
          marginLeft: '256px',
          opacity: 0.05,
          backgroundImage: 'linear-gradient(90deg, #14B8A6 1px, transparent 1px), linear-gradient(0deg, #14B8A6 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
      ></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto space-y-8">
        
        {/* Top Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-[#E8F1FF] tracking-tight">
              Welcome back, <span style={{ background: "linear-gradient(90deg, #5eead4, #2dd4bf, #14B8A6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 8px rgba(20,184,166,0.4))" }}>{ownerName}</span>
            </h1>
            <p className="text-[#7a8494] mt-2">LaunchOS builds your client acquisition system. Everything runs without you.</p>
          </div>

          {/* User Profile */}
          <div className="relative" ref={profileDropdownRef}>
            <button onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)} className="flex items-center gap-3 rounded-2xl px-5 py-3 border border-[#252a33] hover:border-[#14B8A6]/30 transition-all bg-gradient-to-br from-[#14161a] to-[#1a1d24]" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}>
              <div className="text-right">
                <div className="text-sm text-[#E8F1FF]">{ownerName}</div>
                <div className="text-xs text-[#7a8494]">{businessName}</div>
              </div>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: 'linear-gradient(145deg, #5eead4 0%, #2dd4bf 20%, #14B8A6 45%, #0D9488 65%, #0f766e 80%, #115e59 100%)', boxShadow: '0 4px 16px rgba(20, 184, 166, 0.4)' }}>
                {(profile?.full_name?.[0] || user?.user_metadata?.full_name?.[0] || user?.email?.[0] || 'U').toUpperCase()}
              </div>
              <ChevronDown className={`w-4 h-4 text-[#7a8494] transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-80 bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-2xl border border-[#252a33] overflow-hidden z-50" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(20, 184, 166, 0.08)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, transparent 50%)' }}></div>
                <div className="relative p-3 space-y-1">
                  <button onClick={() => { setIsProfileDropdownOpen(false); navigate('/settings'); }} className="group w-full flex items-center gap-4 p-4 rounded-xl border border-[#252a33] hover:border-[#14B8A6]/40 transition-all hover:-translate-y-0.5" style={{ background: 'rgba(15, 17, 21, 0.6)' }}>
                    <Settings className="w-5 h-5 text-[#14B8A6]" />
                    <div className="flex-1 text-left"><div className="text-[#E8F1FF]">Edit Account</div></div>
                  </button>
                  <button onClick={() => { setIsProfileDropdownOpen(false); showIntercom(); }} className="group w-full flex items-center gap-4 p-4 rounded-xl border border-[#252a33] hover:border-[#38bdf8]/40 transition-all hover:-translate-y-0.5" style={{ background: 'rgba(15, 17, 21, 0.6)' }}>
                    <HelpCircle className="w-5 h-5 text-[#38bdf8]" />
                    <div className="flex-1 text-left"><div className="text-[#E8F1FF]">Contact Support</div></div>
                  </button>
                  
                  {/* Divider */}
                  <div className="h-px my-2" style={{ background: 'linear-gradient(to right, transparent, #252a33, transparent)' }}></div>
                  
                  {/* Logout Button */}
                  <button onClick={handleLogout} className="group w-full flex items-center gap-4 p-4 rounded-xl border border-[#252a33] hover:border-[#ef4444]/40 transition-all hover:-translate-y-0.5" style={{ background: 'rgba(15, 17, 21, 0.6)' }}>
                    <LogOut className="w-5 h-5 text-[#ef4444]" />
                    <div className="flex-1 text-left"><div className="text-[#E8F1FF]">Log Out</div></div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 72-Hour Deployment Progress Module */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-3xl border border-[#252a33] p-8 overflow-hidden relative" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 10px 30px -10px rgba(20, 184, 166, 0.1)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, transparent 50%)' }}></div>
          <div className="relative"><DeploymentCountdown showFullDisplay={true} /></div>
        </div>

        {/* Next Steps Panel */}
        <div className="bg-gradient-to-br from-[#14161a] to-[#1a1d24] rounded-3xl border border-[#252a33] p-8 overflow-hidden relative" style={{ boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.03) 0%, transparent 50%)' }}></div>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-[#E8F1FF] tracking-tight">Next Steps to Activate Your System</h2>
              <div className="text-sm text-[#7a8494]"><span className="text-[#14B8A6]">{systemStatus === 'active' ? 5 : 2}</span> of 5 completed</div>
            </div>

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
                  <div key={item.step} className="group rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border border-[#252a33] hover:border-[#14B8A6]/25" style={{ background: item.completed ? 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(13, 148, 136, 0.03) 100%)' : 'rgba(15, 17, 21, 0.5)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' }}>
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl text-[#E8F1FF] tabular-nums relative">
                          {item.step}
                          {item.completed && <CheckCircle className="absolute -top-1 -right-1 w-3 h-3 text-[#14B8A6]" />}
                        </div>
                        <Icon className={`w-5 h-5 ${item.completed ? 'text-[#14B8A6]' : 'text-[#7a8494]'}`} />
                      </div>
                      <p className={`text-xs uppercase tracking-wider mb-2 ${item.completed ? 'text-[#14B8A6]' : 'text-[#7a8494]'}`}>Step {item.step}</p>
                      <p className={`text-sm leading-relaxed ${item.completed ? 'text-[#c5cdd8]' : 'text-[#7a8494]'}`}>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center">
              {onboardingSubmitted ? (
                <div className="relative px-12 py-4 rounded-2xl flex items-center gap-3 overflow-hidden cursor-default" style={{ background: 'linear-gradient(145deg, #6ee7b7 0%, #34d399 20%, #10B981 45%, #059669 65%, #047857 80%, #065f46 100%)', boxShadow: '0 10px 30px -5px rgba(16, 185, 129, 0.5), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(6, 95, 70, 0.3)' }}>
                  <Check className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Onboarding Complete</span>
                </div>
              ) : (
                <button onClick={() => navigate('/onboarding')} className="group relative px-12 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 flex items-center gap-3 overflow-hidden" style={{ background: 'linear-gradient(145deg, #5eead4 0%, #2dd4bf 15%, #14B8A6 40%, #0D9488 60%, #0f766e 80%, #115e59 100%)', boxShadow: '0 15px 35px -8px rgba(20, 184, 166, 0.55), inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(17, 94, 89, 0.3)' }}>
                  <span className="text-white font-medium">Complete Onboarding</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              <p className="text-xs text-[#7a8494] mt-4 text-center max-w-md">
                {onboardingSubmitted ? 'Your system is being deployed. Check the countdown timer above for progress.' : 'Completing onboarding unlocks your full system and deploys remaining subsystems automatically.'}
              </p>
            </div>
          </div>
        </div>

        {/* Real-Time Activity Ticker */}
        <div className="relative flex items-center justify-center gap-3 py-2 overflow-hidden">
          {activities[currentActivityIndex].icon && (
            <div className="relative w-5 h-5 flex items-center justify-center" style={{ color: activities[currentActivityIndex].color }}>
              {(() => { const Icon = activities[currentActivityIndex].icon; return <Icon className="w-5 h-5" />; })()}
            </div>
          )}
          <span className="text-sm text-[#7a8494] animate-fade-in">{activities[currentActivityIndex].message}</span>
          <Loader2 className="w-4 h-4 text-[#14B8A6]/60 animate-spin" />
        </div>
      </div>
    </div>
  );
}
