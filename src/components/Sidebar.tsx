import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, CheckCircle, Globe, DollarSign, TrendingUp, Settings, Menu, X, ExternalLink } from 'lucide-react';
import { useProfile } from '../contexts/ProfileContext';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { onboardingSubmitted } = useProfile();

  // Map pathname to page identifier
  const currentPage = location.pathname.replace('/', '') || 'dashboard';

  const navItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: CheckCircle, label: 'Onboarding', page: 'onboarding', highlightGreen: !onboardingSubmitted },
    { icon: Globe, label: 'Website', page: 'website' },
    { icon: DollarSign, label: 'Paid Marketing', page: 'paid-marketing' },
    { icon: TrendingUp, label: 'Organic Marketing', page: 'organic-marketing' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  const handleNavigation = (page: string) => {
    navigate(`/${page}`);
    setIsOpen(false);
  };

  const handleCRMClick = () => {
    window.open('https://fieldd.co', '_blank');
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2.5 bg-[#151618] rounded-xl shadow-lg border border-[#2A2B2E]/50 backdrop-blur-xl"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
        }}
      >
        {isOpen ? <X className="w-5 h-5 text-[#00D9FF]" /> : <Menu className="w-5 h-5 text-[#00D9FF]" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-[#0A0A0A] border-r border-[#1A1B1E] transition-all duration-300 z-40 w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{
          backdropFilter: 'blur(20px)',
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <img src="/logo.png" alt="LaunchOS" className="h-8 w-auto" />
            <div>
              <h2 className="text-white tracking-tight">LaunchOS</h2>
              <p className="text-[#6B6C7B] text-xs">System Control</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              const useGreenHighlight = item.highlightGreen && !isActive;
              
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.page)}
                  className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#151618] text-white'
                      : useGreenHighlight
                      ? 'bg-[#10B981]/10 text-[#10B981]'
                      : 'text-[#8B8D98] hover:bg-[#151618] hover:text-white'
                  }`}
                  style={isActive ? {
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  } : undefined}
                >
                  {/* Active indicator glow - left edge */}
                  {isActive && (
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#00D9FF] rounded-r-full"
                      style={{
                        boxShadow: '0 0 10px rgba(0, 217, 255, 0.6)'
                      }}
                    />
                  )}
                  {useGreenHighlight && (
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#10B981] rounded-r-full"
                      style={{
                        boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)'
                      }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
            
            {/* CRM Link */}
            <button
              onClick={handleCRMClick}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[#8B8D98] hover:bg-[#151618] hover:text-white"
            >
              <ExternalLink className="w-5 h-5" />
              <span>CRM</span>
            </button>
          </nav>

          {/* Bottom Help Section */}
          <div className="mt-auto">
            <div 
              className="bg-[#151618] rounded-2xl p-4 border border-[#2A2B2E]/50 relative overflow-hidden"
              style={{
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 to-transparent pointer-events-none" />
              <div className="relative">
                <h4 className="text-white mb-1">Need Help?</h4>
                <p className="text-[#8B8D98] text-sm mb-3">Support available 24/7</p>
                <button 
                  className="w-full bg-[#00D9FF]/10 text-[#00D9FF] px-4 py-2.5 rounded-xl hover:bg-[#00D9FF]/20 transition-all border border-[#00D9FF]/20 backdrop-blur-sm"
                  style={{
                    boxShadow: '0 0 15px rgba(0, 217, 255, 0.1)'
                  }}
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
