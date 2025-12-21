import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'

export type SystemStatus = 'optimizing' | 'active'

interface Profile {
  id: string
  full_name: string | null
  business_name: string | null
}

interface OnboardingProgress {
  user_id: string
  onboarding_completed_at: string | null
  activation_deadline: string | null
}

interface ProfileContextType {
  profile: Profile | null
  loading: boolean
  systemStatus: SystemStatus
  activationDeadline: Date | null
  onboardingSubmitted: boolean
  submitting: boolean
  refreshProfile: () => Promise<void>
  submitOnboarding: () => Promise<boolean>
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [onboardingProgress, setOnboardingProgress] = useState<OnboardingProgress | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null)
      setOnboardingProgress(null)
      setLoading(false)
      return
    }

    try {
      // Fetch profile data
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('id, full_name, business_name')
        .eq('id', user.id)
        .single()

      if (profileError) {
        console.log('Profile fetch error (may not exist yet):', profileError.message)
        setProfile(null)
      } else {
        setProfile(profileData)
      }

      // Fetch onboarding progress
      const { data: progressData, error: progressError } = await supabase
        .from('onboarding_progress')
        .select('user_id, onboarding_completed_at, activation_deadline')
        .eq('user_id', user.id)
        .single()

      if (progressError) {
        console.log('Onboarding progress fetch error (may not exist yet):', progressError.message)
        setOnboardingProgress(null)
      } else {
        setOnboardingProgress(progressData)
      }
    } catch (err) {
      console.error('Error fetching data:', err)
      setProfile(null)
      setOnboardingProgress(null)
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  // Compute activation deadline as Date
  const activationDeadline = onboardingProgress?.activation_deadline
    ? new Date(onboardingProgress.activation_deadline)
    : null

  // Compute system status based on current time vs activation deadline
  const computeSystemStatus = (): SystemStatus => {
    if (!activationDeadline) {
      return 'optimizing' // Default to optimizing if no deadline set
    }

    const now = new Date()
    if (now >= activationDeadline) {
      return 'active'
    }
    return 'optimizing'
  }

  const systemStatus = computeSystemStatus()

  const refreshProfile = async () => {
    setLoading(true)
    await fetchProfile()
  }

  // Check if onboarding has been submitted
  const onboardingSubmitted = onboardingProgress?.onboarding_completed_at !== null && onboardingProgress?.onboarding_completed_at !== undefined

  // Submit onboarding: set onboarding_completed_at = NOW and activation_deadline = NOW + 72 hours
  const submitOnboarding = async (): Promise<boolean> => {
    if (!user) return false

    setSubmitting(true)
    try {
      const now = new Date()
      const deadline = new Date(now.getTime() + 72 * 60 * 60 * 1000) // NOW + 72 hours

      const { error } = await supabase
        .from('onboarding_progress')
        .upsert({
          user_id: user.id,
          onboarding_completed_at: now.toISOString(),
          activation_deadline: deadline.toISOString()
        }, { onConflict: 'user_id' })

      if (error) {
        console.error('Error submitting onboarding:', error.message)
        return false
      }

      // Refresh data to get updated values
      await fetchProfile()
      return true
    } catch (err) {
      console.error('Error submitting onboarding:', err)
      return false
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <ProfileContext.Provider value={{
      profile,
      loading,
      systemStatus,
      activationDeadline,
      onboardingSubmitted,
      submitting,
      refreshProfile,
      submitOnboarding
    }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }
  return context
}
