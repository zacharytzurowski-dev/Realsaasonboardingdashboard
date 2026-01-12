import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, CheckCircle, Globe, DollarSign, TrendingUp, Settings, Menu, X, ExternalLink, BookOpen } from 'lucide-react';
import { useProfile } from '../contexts/ProfileContext';
import { useIntercom } from '../contexts/IntercomContext';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { onboardingSubmitted } = useProfile();
  const { showIntercom } = useIntercom();

  // Map pathname to page identifier
  const currentPage = location.pathname.replace('/', '') || 'dashboard';

  const navItems = [
    { icon: Home, label: 'Dashboard', page: 'dashboard' },
    { icon: CheckCircle, label: 'Onboarding', page: 'onboarding', highlightGreen: !onboardingSubmitted },
    { icon: Globe, label: 'Website', page: 'website' },
    { icon: DollarSign, label: 'Paid Marketing', page: 'paid-marketing' },
    { icon: TrendingUp, label: 'Organic Marketing', page: 'organic-marketing' },
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
            <img src="data:image/webp;base64,UklGRkIHAABXRUJQVlA4WAoAAAAwAAAAYwAAWQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBILwIAAA0kAUmKyoiIhg5tbcf26NzP88a2bVt1Ktu2bdtJZ9u2UVpj2zZe3oM4zzvdrBUREyCQTZY/dAIHiIgJIJO2qX/R3bVJGBExAfxvoKDuMzGirvMCW+gzUbdl+IMjO056kdMy/J7zCLtxe8bfSh8HG7tM7O+NdgZz53qRw4yG7Sf/Ub1yFxxuQyY1frMtTRB1lueznkuTwc+kuNr6mY+y+SCZ/xScZcISJ5j2LfZPQNRNJsp9gl4YQkticLRo4SwLyOgroCLqJojtjyj/FkziKiGTTwqKPkrUXWmoIuo+UNwvqZCWoo8SdVc6aiqko6bC46rDRB/1X19TIR31MdRhok9P1B3K07IS4k7Rp2OMr/l+DhEqJnmYCo9pTJDkm16+fdwARSXr7w97XGOCpMDI/rz1Gcifcxb7TB+i8jBjgiTf6IGcLVolcYPyTdT09VgUEDKEIDZIco8cwo3ZrKrxqyNsdH3UB9+Zf4XyO2LDONew4dye9i1k+gNHiu7v0fpYxoCYV5plsX+QfcgY7o/9GskQJOKKmGO1jy/61AOCbyDj4Mm8PPF9rBdFSOIK9fxBhy4MfJl/F+88ltfGvA3EEUrsqSOI7JXVLx3/4sZ32UrXLcAbw14jT54AUeSX4EecGduDk6asbp2P5K11+7/Bi1a28wwCOfg4ThTE9t1lJzNnj74F8ELOfPDbQ9QiOGNj/I9/BTxNQuTINSIUiIEZJIkYUA0B1BgeqTHUyKjt6gUAVlA4IBwDAAAQEwCdASpkAFoAPlEkj0YjoaEhIxv6iHAKCUAPCcIK8D4EdI7bAeYD9d+oB6AH6c+pz/bvZg9AD9bPS//bf4Jv2f9gP9Y//pmkvOASgE7Z/s3b056bOu82ewR/KP6L1T/Qe/WYieDRMEYsuqcwMFk+0z3XOJCFXHi8HdVRMRGXz9wGHlfiWiAZfX0izQxdA6MhKoAGVW/6pSXXGwCEAHakgAD+/gbVZ62PEBzXm5D44VwIAAHkcXmRTub8p8zj+ZPhO/eW87R/95fhGJciN4fWgtMwAG/3nDTYI89hyf3/4FPoaZMogkVRSM7NtgVqZuAj3aDiLZHtxCDXrg0PjinrqD2WYwpDDTYtYGHTX9VpgS872nu9sXAr1uH/szV1eWn3kCDZXaSuWFlADn7y1fYEdq5gSsdRYwI+m6oIKplvUb7IAdEq7EF4PuZwOQg7cfG8F+OYm9eEQeGhk6eRMCy57q/gW8KoFrknnw3HFtfV/u/bUmNMYsYXjEgv/dCZHPWj74bvtiDAJI8ZA0cSr9M4Jk4iwTWU3dT2hv33FH5Oy6mMOJ67CYq8lVR1fGAuiUXGz7NadjQ0PQeXD77+tjVGea/CJcsm9psyiJJQbc7Ck7rKpcK77NBqa+liqaXzJFg/3hgoMWb/8n4Mb8lNslRwM6db/fidCc9Xc2GfZGT5WfvgiPL9PbR8cD3ITIn/C9lTJtaftowmrftrCgqt6H/mYqzE+dEW+TzMXilqkHWgbUxVMuH8W+mEySuRp142s/GNj22r9qii2nSqWO4sfzW32MdHgW/l358/WFgubaps5totfK3JwzYLsnh/O8eI1eayeGA+m/1jwaIRGVxj/8ucGdtD8ee5ReyMkNNhHr9BX3t6CHl54BWQcdeGMPWbdlvXjPlEktXZL8WgrXpZFoDnfioqu2M5oHqKv1ix21h1be0sSurq4QZMP/1XwcUleHUn+2Vsqi5YS4J1oI8t/kv2y1vzzyAt/zcB/xasxLN1njXQ+jxaXJWqKl1YeA+7D5zqO/+/2HPWesMDGXff1HLr5DhwkR0AAAAAAAAA" alt="LaunchOS" className="h-8 w-8" />
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
                  className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#1a1a1a] text-white'
                      : 'text-[#8B8D98] hover:text-[#a8aab5]'
                  }`}
                >
                  {/* Active indicator - left edge */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#00D9FF] rounded-r-full" />
                  )}
                  <Icon className={`w-5 h-5 relative z-10 ${useGreenHighlight ? 'text-[#10B981]' : ''}`} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
            
            {/* CRM Link */}
            <button
              onClick={handleCRMClick}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[#8B8D98] hover:text-[#a8aab5]"
            >
              <ExternalLink className="w-5 h-5" />
              <span>CRM</span>
            </button>

            {/* Operator's Guide */}
            <button
              onClick={() => handleNavigation('operators-guide')}
              className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentPage === 'operators-guide'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-[#8B8D98] hover:text-[#a8aab5]'
              }`}
            >
              {currentPage === 'operators-guide' && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#00D9FF] rounded-r-full" />
              )}
              <BookOpen className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Operator's Guide</span>
            </button>

            {/* Settings */}
            <button
              onClick={() => handleNavigation('settings')}
              className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentPage === 'settings'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-[#8B8D98] hover:text-[#a8aab5]'
              }`}
            >
              {currentPage === 'settings' && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#00D9FF] rounded-r-full" />
              )}
              <Settings className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Settings</span>
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
                  onClick={showIntercom}
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
