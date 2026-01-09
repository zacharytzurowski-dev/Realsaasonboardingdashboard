import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  children?: ReactNode;
}

export function PageHero({ 
  title, 
  subtitle, 
  icon, 
  gradientFrom = '#06B6D4',
  gradientTo = '#0D9488',
  children 
}: PageHeroProps) {
  return (
    <div className="mb-8">
      <div
        className="bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 p-8 overflow-hidden relative"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        <div className="relative flex items-center gap-6">
          {icon && (
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
                boxShadow: `0 10px 15px -3px ${gradientFrom}80`
              }}
            >
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-3xl text-white tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-[#8B8D98]">
              {subtitle}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}