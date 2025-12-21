import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  iconGradient?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, icon, iconGradient = 'from-[#00D9FF] to-[#0EA5E9]', children }: PageHeroProps) {
  return (
    <div className="mb-8">
      {/* Hero Container - System-level style */}
      <div 
        className="bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 p-8 overflow-hidden relative"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        {/* Soft gradient glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none"></div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        <div className="relative flex items-center gap-6">
          {/* Icon with gradient background */}
          {icon && (
            <div 
              className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
              style={{
                boxShadow: '0 8px 24px rgba(0, 217, 255, 0.25), 0 0 40px rgba(0, 217, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {icon}
            </div>
          )}
          
          {/* Header Text */}
          <div className="flex-1">
            <h1 className="text-3xl text-white tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-[#8B8D98]">
              {subtitle}
            </p>
          </div>

          {/* Optional children (e.g., action buttons) */}
          {children}
        </div>
      </div>
    </div>
  );
}
