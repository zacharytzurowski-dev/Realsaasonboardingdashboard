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
      <div className="relative z-10 max-w-[1600px] mx-auto space-y-10">
        
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
