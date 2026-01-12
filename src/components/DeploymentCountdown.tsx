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
  isWaiting?: boolean
}

export function StatusBadge({ status, isWaiting }: StatusBadgeProps) {
  const isActive = status === 'active'

  if (isWaiting) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1e1e] border border-[#2a2a2a]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#6B7280]" />
        <span className="text-xs font-medium text-[#6B7280]">Awaiting Onboarding</span>
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${
      isActive
        ? 'bg-[#00D4AA]/10 border-[#00D4AA]/20'
        : 'bg-[#3B82F6]/10 border-[#3B82F6]/20'
    }`}>
      <div className={`w-1.5 h-1.5 rounded-full ${
        isActive ? 'bg-[#00D4AA]' : 'bg-[#3B82F6] animate-pulse'
      }`} />
      <span className={`text-xs font-medium ${
        isActive ? 'text-[#00D4AA]' : 'text-[#3B82F6]'
      }`}>
        {isActive ? 'Active' : 'Deploying'}
      </span>
    </div>
  )
}

interface DeploymentCountdownProps {
  showFullDisplay?: boolean
}

export function DeploymentCountdown({ showFullDisplay = false }: DeploymentCountdownProps) {
  const { activationDeadline, systemStatus, onboardingSubmitted } = useProfile()
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(activationDeadline)
  )

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining(activationDeadline))
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(activationDeadline))
    }, 1000)
    return () => clearInterval(timer)
  }, [activationDeadline])

  const isActive = systemStatus === 'active'
  const isWaitingForOnboarding = !onboardingSubmitted

  // Compact display
  if (!showFullDisplay) {
    return (
      <div className="flex items-center gap-3">
        <StatusBadge status={systemStatus} isWaiting={isWaitingForOnboarding} />
        {!isActive && !isWaitingForOnboarding && (
          <span className="text-sm text-[#6B7280]">
            {timeRemaining.hours}h {timeRemaining.minutes}m remaining
          </span>
        )}
      </div>
    )
  }

  // Full display
  const progressPercentage = activationDeadline
    ? Math.max(0, Math.min(100, ((72 * 3600 - timeRemaining.totalSeconds) / (72 * 3600)) * 100))
    : 0

  const displayHours = isWaitingForOnboarding ? 72 : timeRemaining.hours
  const displayMinutes = isWaitingForOnboarding ? 0 : timeRemaining.minutes
  const displaySeconds = isWaitingForOnboarding ? 0 : timeRemaining.seconds

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <StatusBadge status={systemStatus} isWaiting={isWaitingForOnboarding} />
        <span className="text-sm text-[#6B7280]">
          {isActive
            ? 'Deployment complete'
            : isWaitingForOnboarding
            ? 'Submit onboarding to start'
            : `${timeRemaining.hours}h ${timeRemaining.minutes}m remaining`}
        </span>
      </div>

      {/* Countdown Display */}
      <div className="flex items-center justify-center gap-8 mb-6">
        <div className="text-center">
          <div className={`text-4xl font-mono tabular-nums ${isWaitingForOnboarding ? 'text-[#6B7280]' : 'text-white'}`}>
            {String(displayHours).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#6B7280] mt-1">Hours</div>
        </div>

        <div className="text-2xl text-[#2a2a2a]">:</div>

        <div className="text-center">
          <div className={`text-4xl font-mono tabular-nums ${isWaitingForOnboarding ? 'text-[#6B7280]' : 'text-white'}`}>
            {String(displayMinutes).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#6B7280] mt-1">Minutes</div>
        </div>

        <div className="text-2xl text-[#2a2a2a]">:</div>

        <div className="text-center">
          <div className={`text-4xl font-mono tabular-nums ${isWaitingForOnboarding ? 'text-[#6B7280]' : 'text-white'}`}>
            {String(displaySeconds).padStart(2, '0')}
          </div>
          <div className="text-xs text-[#6B7280] mt-1">Seconds</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${
              isActive ? 'bg-[#00D4AA]' : isWaitingForOnboarding ? 'bg-[#6B7280]' : 'bg-[#3B82F6]'
            }`}
            style={{ width: `${isActive ? 100 : isWaitingForOnboarding ? 0 : progressPercentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-[#6B7280]">
          <span>{isWaitingForOnboarding ? 'Not started' : 'Started'}</span>
          <span className={isActive ? 'text-[#00D4AA]' : ''}>
            {isActive ? 'Complete' : isWaitingForOnboarding ? '—' : `${Math.round(progressPercentage)}%`}
          </span>
        </div>
      </div>
    </div>
  )
}
