import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  iconGradient?: string;
  children?: ReactNode;
}

// Map gradients to Tailwind shadow classes
const getShadowClass = (gradient: string): string => {
  if (gradient.includes('#6366F1')) return 'shadow-[#6366F1]/50';
  if (gradient.includes('#3B82F6')) return 'shadow-[#3B82F6]/50';
  if (gradient.includes('#14B8A6')) return 'shadow-[#14B8A6]/50';
  if (gradient.includes('#06B6D4')) return 'shadow-[#06B6D4]/50';
  if (gradient.includes('#10B981')) return 'shadow-[#10B981]/50';
  if (gradient.includes('#64748B')) return 'shadow-[#64748B]/50';
  return 'shadow-[#06B6D4]/50';
};

export function PageHero({ title, subtitle, icon, iconGradient = 'from-[#06B6D4] to-[#0D9488]', children }: PageHeroProps) {
  const shadowClass = getShadowClass(iconGradient);

  return (
    <div className="mb-8">
      {/* Hero Container */}
      <div
        className="bg-[#151618] rounded-3xl border border-[#2A2B2E]/50 p-8 overflow-hidden relative"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
        }}
      >
        <div className="relative flex items-center gap-6">
          {/* Icon with gradient background - matches PaidMarketingPage pattern exactly */}
          {icon && (
            <div className={`w-16 h-16 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${shadowClass}`}>
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
