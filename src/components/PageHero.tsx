import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  iconGradient?: string;
  shadowColor?: string;
  children?: ReactNode;
}

// Map gradients to shadow colors
const getShadowColor = (gradient: string): string => {
  if (gradient.includes('#6366F1')) return '99, 102, 241'; // Indigo
  if (gradient.includes('#3B82F6')) return '59, 130, 246'; // Blue
  if (gradient.includes('#14B8A6')) return '20, 184, 166'; // Teal-500
  if (gradient.includes('#06B6D4')) return '6, 182, 212'; // Cyan
  if (gradient.includes('#10B981')) return '16, 185, 129'; // Green
  if (gradient.includes('#64748B')) return '100, 116, 139'; // Slate
  return '6, 182, 212'; // Default cyan
};

export function PageHero({ title, subtitle, icon, iconGradient = 'from-[#06B6D4] to-[#0D9488]', shadowColor, children }: PageHeroProps) {
  const rgb = shadowColor || getShadowColor(iconGradient);

  return (
    <div className="mb-8">
      {/* Hero Container - System-level style */}
      <div
        className="bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 p-8 overflow-hidden relative"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        {/* Soft gradient glow overlay - uses dynamic color */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(${rgb}, 0.05) 0%, transparent 50%, rgba(${rgb}, 0.03) 100%)`
          }}
        ></div>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        <div className="relative flex items-center gap-6">
          {/* Icon with gradient background and dynamic shadow */}
          {icon && (
            <div
              className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
              style={{
                boxShadow: `0 8px 24px rgba(${rgb}, 0.4), 0 0 40px rgba(${rgb}, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
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
