import { useState, useEffect } from 'react'
import { useProfile, SystemStatus } from '../contexts/ProfileContext'

interface TimeRemaining {
  hours: number
  minutes: number
  seconds: number
  totalSeconds: number
}

function calculateTimeRemaining(deadline: Date | null): TimeRemaining {
  if (!deadline) {
    return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 }
  }

  const now = new Date()
  const difference = deadline.getTime() - now.getTime()

  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 }
  }

  const totalSeconds = Math.floor(difference / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { hours, minutes, seconds, totalSeconds }
}

interface StatusBadgeProps {
  status: SystemStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === 'active'

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm ${
        isActive
          ? 'bg-[#10B981]/10 border border-[#10B981]/20'
          : 'bg-[#00D9FF]/10 border border-[#00D9FF]/20'
      }`}
      style={{
        boxShadow: isActive
          ? '0 0 20px rgba(16, 185, 129, 0.1)'
          : '0 0 20px rgba(0, 217, 255, 0.1)'
      }}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          isActive ? 'bg-[#10B981]' : 'bg-[#00D9FF] animate-pulse'
        }`}
        style={{
          boxShadow: isActive
            ? '0 0 10px rgba(16, 185, 129, 0.5)'
            : '0 0 10px rgba(0, 217, 255, 0.5)'
        }}
      />
      <span
        className={`text-xs font-medium uppercase tracking-wider ${
          isActive ? 'text-[#10B981]' : 'text-[#00D9FF]'
        }`}
      >
        {isActive ? 'Active' : 'Optimizing'}
      </span>
    </div>
  )
}

interface DeploymentCountdownProps {
  showFullDisplay?: boolean
}

export function DeploymentCountdown({ showFullDisplay = false }: DeploymentCountdownProps) {
  const { activationDeadline, systemStatus } = useProfile()
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(activationDeadline)
  )

  useEffect(() => {
    // Calculate immediately on mount or deadline change
    setTimeRemaining(calculateTimeRemaining(activationDeadline))

    // Update every second
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(activationDeadline))
    }, 1000)

    return () => clearInterval(timer)
  }, [activationDeadline])

  const isActive = systemStatus === 'active'

  // If active, show the active badge only
  if (isActive && !showFullDisplay) {
    return (
      <div className="flex items-center gap-3">
        <StatusBadge status={systemStatus} />
      </div>
    )
  }

  // Compact display: "XX hours XX minutes remaining"
  if (!showFullDisplay) {
    return (
      <div className="flex items-center gap-4">
        <StatusBadge status={systemStatus} />
        <span className="text-sm text-[#8B8D98]">
          {timeRemaining.hours} hours {timeRemaining.minutes} minutes remaining
        </span>
      </div>
    )
  }

  // Full display with hours, minutes, seconds
  const progressPercentage = activationDeadline
    ? Math.max(
        0,
        Math.min(
          100,
          ((72 * 3600 - timeRemaining.totalSeconds) / (72 * 3600)) * 100
        )
      )
    : 0

  return (
    <div className="relative">
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-6">
        <StatusBadge status={systemStatus} />
        <div className="text-sm text-[#8B8D98]">
          {isActive
            ? 'System is live'
            : `${timeRemaining.hours} hours remaining`}
        </div>
      </div>

      {/* Countdown Display */}
      <div className="flex items-center justify-center gap-6 mb-6">
        {/* Hours */}
        <div className="text-center">
          <div className="text-5xl text-white tabular-nums tracking-tight">
            {String(timeRemaining.hours).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#6B6C7B] uppercase tracking-wider mt-1">
            Hours
          </div>
        </div>

        <div className="text-3xl text-[#2A2B2E]">•</div>

        {/* Minutes */}
        <div className="text-center">
          <div className="text-5xl text-white tabular-nums tracking-tight">
            {String(timeRemaining.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#6B6C7B] uppercase tracking-wider mt-1">
            Minutes
          </div>
        </div>

        <div className="text-3xl text-[#2A2B2E]">•</div>

        {/* Seconds */}
        <div className="text-center">
          <div className="text-5xl text-white tabular-nums tracking-tight">
            {String(timeRemaining.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#6B6C7B] uppercase tracking-wider mt-1">
            Seconds
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="h-2 bg-[#0A0A0A] rounded-full overflow-hidden border border-[#2A2B2E]/50">
          <div
            className={`h-full rounded-full transition-all duration-1000 relative ${
              isActive
                ? 'bg-gradient-to-r from-[#10B981] via-[#059669] to-[#047857]'
                : 'bg-gradient-to-r from-[#00D9FF] via-[#0EA5E9] to-[#3B82F6]'
            }`}
            style={{
              width: `${isActive ? 100 : progressPercentage}%`,
              boxShadow: isActive
                ? '0 0 20px rgba(16, 185, 129, 0.4)'
                : '0 0 20px rgba(0, 217, 255, 0.4)'
            }}
          >
            <div
              className={`absolute inset-0 blur-sm opacity-50 ${
                isActive
                  ? 'bg-gradient-to-r from-[#10B981] to-[#047857]'
                  : 'bg-gradient-to-r from-[#00D9FF] to-[#3B82F6]'
              }`}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-[#6B6C7B]">
          <span>Started</span>
          <span className={isActive ? 'text-[#10B981]' : 'text-[#00D9FF]'}>
            {isActive ? 'Complete!' : `${Math.round(progressPercentage)}% Complete`}
          </span>
          <span>Complete</span>
        </div>
      </div>
    </div>
  )
}
