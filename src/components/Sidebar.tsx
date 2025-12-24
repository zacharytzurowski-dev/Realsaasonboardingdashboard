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
            <img src="data:image/png;base64,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" alt="LaunchOS" className="h-8 w-8" />
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
