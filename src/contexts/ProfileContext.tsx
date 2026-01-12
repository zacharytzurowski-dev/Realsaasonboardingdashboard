import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'
import { Loader2 } from 'lucide-react'

export type SystemStatus = 'optimizing' | 'active'
export type StepStatus = 'completed' | 'in-progress' | 'not-started'

interface Profile {
  id: string
  full_name: string | null
  business_name: string | null
}

interface OnboardingProgress {
  id: string
  step_1_status: StepStatus | null
  step_2_status: StepStatus | null
  step_3_status: StepStatus | null
  step_4_status: StepStatus | null
  step_5_status: StepStatus | null
  step_6_status: StepStatus | null
  form_data: Record<string, any> | null
  onboarding_completed_at: string | null
  activation_deadline: string | null
}

// Form data types
export interface Step1FormData {
  businessName: string
  legalName: string
  businessPhone: string
  businessEmail: string
  businessAddress: string
  yearEstablished: string
  businessType: string
  servicesPricing: string
  primaryCity: string
  serviceRadius: string
  excludedAreas: string
  hoursOfOperation: string
  websiteUrl: string
  insuranceDocumentLink: string
  monthlyRevenueRange: string
  teamSize: string
  teamMembers: Array<{ id: string; name: string; role: string }>
}

export interface Step2FormData {
  logoLink: string
  workPhotosLink: string
  teamPhotosLink: string
  businessTagline: string
  usps: string
  brandPersonality: string
  primaryColor: string
  secondaryColor: string
}

export interface Step3FormData {
  customerType: string
  ageRangeFrom: string
  ageRangeTo: string
  householdIncome: string
  targetRadius: string
  highValueNeighborhoods: string
  excludedZipCodes: string
  minimumJobValue: string
  keyCustomerProblems: string
  idealCustomerDescription: string
}

export interface Step4FormData {
  toneVoice: string
  usps: string
  servicesOffered: string
  pricingStructure: string
  competitorWebsites: string
  exampleWebsites: string
  hasProfessionalPhotos: string
  additionalNotes: string
}

export interface Step5FormData {
  hasWebsite: string
  websiteUrl: string
  hasDomainAccess: string
  domainProvider: string
  hasGBP: string
  gbpEmail: string
  gbpSuspended: string
  hasGoogleAds: string
  googleAdsEmail: string
  googleAdsSuspended: string
  hasLSA: string
  lsaEmail: string
  lsaRejectionReason: string
  backgroundCheckReady: string
  hasFacebook: string
  facebookUrl: string
  hasInstagram: string
  instagramUrl: string
  hasNextdoor: string
  nextdoorEmail: string
  nextdoorPassword: string
  hasYelp: string
  yelpUrl: string
  yelpEmail: string
  yelpPassword: string
  hasCRM: string
  crmName: string
}

export interface Step6FormData {
  selectedPlan: string
  hasPurchased: string
  purchaseConfirmationLink: string
  fielddEmail: string
  fielddPassword: string
}

export interface AllFormData {
  step1_business_info?: Step1FormData
  step2_brand_identity?: Step2FormData
  step3_target_audience?: Step3FormData
  step4_content_messaging?: Step4FormData
  step5_existing_assets?: Step5FormData
  step6_crm_setup?: Step6FormData
}

interface ProfileContextType {
  profile: Profile | null
  loading: boolean
  systemStatus: SystemStatus
  activationDeadline: Date | null
  onboardingSubmitted: boolean
  submitting: boolean
  stepStatuses: Record<number, StepStatus>
  formData: AllFormData
  refreshProfile: () => Promise<void>
  submitOnboarding: () => Promise<boolean>
  saveStepData: (stepNumber: number, data: any) => Promise<boolean>
  getStepData: <T>(stepNumber: number) => T | null
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
      let { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('id, full_name, business_name')
        .eq('id', user.id)
        .single()

      // If profile doesn't exist (PGRST116 = row not found), create it
      if (profileError && profileError.code === 'PGRST116') {
        console.log('Profile not found, creating for new user...')
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .upsert({
            id: user.id,
            full_name: user.user_metadata?.full_name || null,
            business_name: null
          }, { onConflict: 'id' })
          .select()
          .single()

        if (createError) {
          console.log('Could not create profile (RLS may be blocking):', createError.message)
          // Set a fallback profile so the UI still works
          setProfile({
            id: user.id,
            full_name: user.user_metadata?.full_name || null,
            business_name: null
          })
        } else {
          setProfile(newProfile)
        }
      } else if (profileError) {
        console.log('Profile fetch error:', profileError.message)
        // Set a fallback profile so the UI still works
        setProfile({
          id: user.id,
          full_name: user.user_metadata?.full_name || null,
          business_name: null
        })
      } else {
        setProfile(profileData)
      }

      // Fetch onboarding progress with all fields
      let { data: progressData, error: progressError } = await supabase
        .from('onboarding_progress')
        .select('id, step_1_status, step_2_status, step_3_status, step_4_status, step_5_status, step_6_status, form_data, onboarding_completed_at, activation_deadline')
        .eq('id', user.id)
        .single()

      // If onboarding progress doesn't exist, create it
      if (progressError && progressError.code === 'PGRST116') {
        console.log('Onboarding progress not found, creating for new user...')
        const { data: newProgress, error: createError } = await supabase
          .from('onboarding_progress')
          .upsert({
            id: user.id,
            step_1_status: 'not-started',
            step_2_status: 'not-started',
            step_3_status: 'not-started',
            step_4_status: 'not-started',
            step_5_status: 'not-started',
            step_6_status: 'not-started',
            form_data: {},
            onboarding_completed_at: null,
            activation_deadline: null
          }, { onConflict: 'id' })
          .select()
          .single()

        if (createError) {
          console.log('Could not create onboarding progress (RLS may be blocking):', createError.message)
          // Set a fallback so the UI still works
          setOnboardingProgress({
            id: user.id,
            step_1_status: 'not-started',
            step_2_status: 'not-started',
            step_3_status: 'not-started',
            step_4_status: 'not-started',
            step_5_status: 'not-started',
            step_6_status: 'not-started',
            form_data: {},
            onboarding_completed_at: null,
            activation_deadline: null
          })
        } else {
          setOnboardingProgress(newProgress)
        }
      } else if (progressError) {
        console.log('Onboarding progress fetch error:', progressError.message)
        // Set a fallback so the UI still works
        setOnboardingProgress({
          id: user.id,
          step_1_status: 'not-started',
          step_2_status: 'not-started',
          step_3_status: 'not-started',
          step_4_status: 'not-started',
          step_5_status: 'not-started',
          step_6_status: 'not-started',
          form_data: {},
          onboarding_completed_at: null,
          activation_deadline: null
        })
      } else {
        console.log('Onboarding progress loaded:', progressData)
        setOnboardingProgress(progressData)
      }
    } catch (err) {
      console.error('Error fetching data:', err)
      // Set fallback values so the UI still works
      setProfile({
        id: user.id,
        full_name: user.user_metadata?.full_name || null,
        business_name: null
      })
      setOnboardingProgress({
        id: user.id,
        step_1_status: 'not-started',
        step_2_status: 'not-started',
        step_3_status: 'not-started',
        step_4_status: 'not-started',
        step_5_status: 'not-started',
        step_6_status: 'not-started',
        form_data: {},
        onboarding_completed_at: null,
        activation_deadline: null
      })
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  // Compute step statuses from onboarding progress
  const stepStatuses: Record<number, StepStatus> = {
    1: (onboardingProgress?.step_1_status as StepStatus) || 'not-started',
    2: (onboardingProgress?.step_2_status as StepStatus) || 'not-started',
    3: (onboardingProgress?.step_3_status as StepStatus) || 'not-started',
    4: (onboardingProgress?.step_4_status as StepStatus) || 'not-started',
    5: (onboardingProgress?.step_5_status as StepStatus) || 'not-started',
    6: (onboardingProgress?.step_6_status as StepStatus) || 'not-started',
  }

  // Get form data
  const formData: AllFormData = (onboardingProgress?.form_data as AllFormData) || {}

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

  // Save step data to Supabase
  const saveStepData = async (stepNumber: number, data: any): Promise<boolean> => {
    console.log('saveStepData called:', { stepNumber, data, userId: user?.id })

    if (!user) {
      console.error('saveStepData: No user found')
      return false
    }

    try {
      // Map step number to form data key
      const stepKeys: Record<number, string> = {
        1: 'step1_business_info',
        2: 'step2_brand_identity',
        3: 'step3_target_audience',
        4: 'step4_content_messaging',
        5: 'step5_existing_assets',
        6: 'step6_crm_setup',
      }

      const stepKey = stepKeys[stepNumber]
      if (!stepKey) {
        console.error('saveStepData: Invalid step number', stepNumber)
        return false
      }

      // Merge with existing form data
      const existingFormData = onboardingProgress?.form_data || {}
      const newFormData = {
        ...existingFormData,
        [stepKey]: data
      }

      // Build the update object - use 'id' as the primary key (which IS the user id)
      const stepStatusField = `step_${stepNumber}_status`
      const updateData: any = {
        id: user.id,
        form_data: newFormData,
        [stepStatusField]: 'completed'
      }

      console.log('saveStepData: Upserting data:', updateData)

      const { data: result, error } = await supabase
        .from('onboarding_progress')
        .upsert(updateData, { onConflict: 'id' })
        .select()

      if (error) {
        console.error('saveStepData: Supabase error:', error)
        return false
      }

      console.log('saveStepData: Success, result:', result)

      // Refresh data
      await fetchProfile()
      return true
    } catch (err) {
      console.error('saveStepData: Exception:', err)
      return false
    }
  }

  // Get step data from form_data
  const getStepData = <T,>(stepNumber: number): T | null => {
    const stepKeys: Record<number, keyof AllFormData> = {
      1: 'step1_business_info',
      2: 'step2_brand_identity',
      3: 'step3_target_audience',
      4: 'step4_content_messaging',
      5: 'step5_existing_assets',
      6: 'step6_crm_setup',
    }

    const stepKey = stepKeys[stepNumber]
    if (!stepKey) return null

    return (formData[stepKey] as T) || null
  }

  // Submit onboarding: set onboarding_completed_at = NOW and activation_deadline = NOW + 72 hours
  const submitOnboarding = async (): Promise<boolean> => {
    console.log('submitOnboarding called:', { userId: user?.id })

    if (!user) {
      console.error('submitOnboarding: No user found')
      return false
    }

    setSubmitting(true)
    try {
      const now = new Date()
      const deadline = new Date(now.getTime() + 72 * 60 * 60 * 1000) // NOW + 72 hours

      const updateData = {
        id: user.id,
        onboarding_completed_at: now.toISOString(),
        activation_deadline: deadline.toISOString()
      }

      console.log('submitOnboarding: Upserting data:', updateData)

      const { data: result, error } = await supabase
        .from('onboarding_progress')
        .upsert(updateData, { onConflict: 'id' })
        .select()

      if (error) {
        console.error('submitOnboarding: Supabase error:', error)
        return false
      }

      console.log('submitOnboarding: Success, result:', result)

      // Refresh data to get updated values
      await fetchProfile()
      return true
    } catch (err) {
      console.error('submitOnboarding: Exception:', err)
      return false
    } finally {
      setSubmitting(false)
    }
  }

  // Show loading screen while fetching profile data
  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-[#38bdf8] animate-spin" />
          <p className="text-[#7a8494] text-sm">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <ProfileContext.Provider value={{
      profile,
      loading,
      systemStatus,
      activationDeadline,
      onboardingSubmitted,
      submitting,
      stepStatuses,
      formData,
      refreshProfile,
      submitOnboarding,
      saveStepData,
      getStepData
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
