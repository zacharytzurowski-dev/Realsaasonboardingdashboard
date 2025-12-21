import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface Profile {
  id: string;
  full_name: string;
  business_name: string;
  email: string;
  created_at?: string;
}

interface OnboardingProgress {
  id: string;
  user_id: string;
  step_1_status: 'not_started' | 'completed';
  step_2_status: 'not_started' | 'completed';
  step_3_status: 'not_started' | 'completed';
  step_4_status: 'not_started' | 'completed';
  step_5_status: 'not_started' | 'completed';
  step_6_status: 'not_started' | 'completed';
  updated_at?: string;
}

interface ProfileContextType {
  profile: Profile | null;
  onboardingProgress: OnboardingProgress | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
  updateOnboardingStep: (stepNumber: number, status: 'not_started' | 'completed') => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [onboardingProgress, setOnboardingProgress] = useState<OnboardingProgress | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    if (!user) {
      setProfile(null);
      setOnboardingProgress(null);
      setLoading(false);
      return;
    }

    try {
      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Error fetching profile:', profileError);
        // Create profile if it doesn't exist
        if (profileError.code === 'PGRST116') {
          const { data: newProfile, error: createError } = await supabase
            .from('profiles')
            .insert({
              id: user.id,
              email: user.email,
              full_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
              business_name: user.user_metadata?.business_name || 'My Business',
            })
            .select()
            .single();

          if (createError) {
            console.error('Error creating profile:', createError);
          } else {
            setProfile(newProfile);
          }
        }
      } else {
        setProfile(profileData);
      }

      // Fetch onboarding progress
      console.log('🔍 Fetching onboarding progress for user:', user.id);
      const { data: progressData, error: progressError } = await supabase
        .from('onboarding_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (progressError) {
        console.error('❌ Error fetching onboarding progress:', progressError);
        // Create onboarding progress if it doesn't exist
        if (progressError.code === 'PGRST116') {
          console.log('📝 Creating new onboarding progress record...');
          const { data: newProgress, error: createProgressError } = await supabase
            .from('onboarding_progress')
            .insert({
              user_id: user.id,
              step_1_status: 'not_started',
              step_2_status: 'not_started',
              step_3_status: 'not_started',
              step_4_status: 'not_started',
              step_5_status: 'not_started',
              step_6_status: 'not_started',
            })
            .select()
            .single();

          if (createProgressError) {
            console.error('❌ Error creating onboarding progress:', createProgressError);
          } else {
            console.log('✅ Created onboarding progress:', newProgress);
            setOnboardingProgress(newProgress);
          }
        }
      } else {
        console.log('✅ Fetched onboarding progress:', progressData);
        setOnboardingProgress(progressData);
      }
    } catch (error) {
      console.error('Error in fetchProfile:', error);
    } finally {
      setLoading(false);
    }
  };

  const refreshProfile = async () => {
    setLoading(true);
    await fetchProfile();
  };

  const updateOnboardingStep = async (stepNumber: number, status: 'not_started' | 'completed') => {
    console.log('🔵 updateOnboardingStep called:', { stepNumber, status, userId: user?.id });

    if (!user) {
      console.error('❌ No user found in updateOnboardingStep');
      throw new Error('User not authenticated');
    }

    if (!onboardingProgress) {
      console.error('❌ No onboardingProgress found in updateOnboardingStep');
      throw new Error('Onboarding progress not loaded');
    }

    const stepKey = `step_${stepNumber}_status` as keyof OnboardingProgress;
    const updateData = { [stepKey]: status };

    console.log('🔵 Updating Supabase with:', { stepKey, status, user_id: user.id });

    try {
      const { data, error } = await supabase
        .from('onboarding_progress')
        .update(updateData)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        console.error('❌ Supabase error updating onboarding step:', error);
        throw error;
      }

      console.log('✅ Successfully updated onboarding step in database:', data);
      setOnboardingProgress(data);
    } catch (error) {
      console.error('❌ Error in updateOnboardingStep:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [user]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        onboardingProgress,
        loading,
        refreshProfile,
        updateOnboardingStep,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
