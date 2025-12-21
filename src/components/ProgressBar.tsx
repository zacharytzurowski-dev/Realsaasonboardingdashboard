interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[#8B8D98]">Setup Progress</span>
        <span className="text-[#00D9FF]">{percentage}% Complete</span>
      </div>
      <div className="h-2.5 bg-[#0A0A0A] rounded-full overflow-hidden border border-[#2A2B2E]/50">
        <div 
          className="h-full bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] rounded-full transition-all duration-500"
          style={{ 
            width: `${percentage}%`,
            boxShadow: '0 0 15px rgba(0, 217, 255, 0.4)'
          }}
        />
      </div>
    </div>
  );
}
