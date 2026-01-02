import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  iconGradient?: string;
  shadowColor?: string;
  children?: ReactNode;
}

export function PageHero({
  title,
  subtitle,
  icon,
  iconGradient = 'from-[#00D9FF] to-[#0EA5E9]',
  shadowColor = '#00D9FF',
  children
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#1A1D23] to-[#21262D] rounded-[24px] border border-[#293038] shadow-2xl mb-8"
      style={{ boxShadow: `0 25px 50px -12px ${shadowColor}1a` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br pointer-events-none"
        style={{
          background: `linear-gradient(to bottom right, ${shadowColor}0d, transparent)`
        }}
      ></div>
      <div className="relative p-10">
        <div className="flex items-start gap-6">
          {/* Icon with gradient background */}
          {icon && (
            <div
              className={`w-14 h-14 bg-gradient-to-br ${iconGradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
              style={{
                boxShadow: `0 10px 15px -3px ${shadowColor}80, 0 4px 6px -4px ${shadowColor}80`
              }}
            >
              {icon}
            </div>
          )}

          {/* Header Text */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-[#E8F1FF]">
              {title}
            </h1>
            <p className="text-[#94A3B8]">
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
