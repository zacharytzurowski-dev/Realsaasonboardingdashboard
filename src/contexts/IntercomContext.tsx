import { createContext, useContext, useEffect, useCallback, useRef } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { useAuth } from './AuthContext';
import { useProfile } from './ProfileContext';

const INTERCOM_APP_ID = 'nod3jhrj';

interface IntercomContextType {
  showIntercom: () => void;
}

const IntercomContext = createContext<IntercomContextType | undefined>(undefined);

// Extend Window interface for Intercom
declare global {
  interface Window {
    Intercom: (command: string, ...args: unknown[]) => void;
  }
}

export function IntercomProvider({ children }: { children: React.ReactNode }) {
  console.log("INTERCOM PROVIDER MOUNTED");

  const { user } = useAuth();
  const { profile } = useProfile();
  const initialized = useRef(false);

  useEffect(() => {
    console.log("INTERCOM useEffect - user:", user?.email, "profile:", profile?.full_name);

    if (!user) {
      console.log("INTERCOM: No user, skipping init");
      // Shutdown Intercom if user logs out
      if (window.Intercom && initialized.current) {
        window.Intercom('shutdown');
        initialized.current = false;
      }
      return;
    }

    // Initialize Intercom with user data
    if (!initialized.current) {
      initialized.current = true;
      console.log("INTERCOM: Calling Intercom() SDK init with app_id:", INTERCOM_APP_ID);

      Intercom({
        app_id: INTERCOM_APP_ID,
        user_id: user.id,
        email: user.email,
        name: profile?.full_name || profile?.business_name || user.user_metadata?.full_name || 'User',
        created_at: user.created_at ? Math.floor(new Date(user.created_at).getTime() / 1000) : undefined,
      });

      console.log("INTERCOM: SDK init called successfully");
    } else if (window.Intercom) {
      // Update Intercom if already initialized
      window.Intercom('update', {
        user_id: user.id,
        email: user.email,
        name: profile?.full_name || profile?.business_name || user.user_metadata?.full_name || 'User',
      });
    }

    return () => {
      if (window.Intercom && initialized.current) {
        window.Intercom('shutdown');
        initialized.current = false;
      }
    };
  }, [user, profile]);

  const showIntercom = useCallback(() => {
    if (window.Intercom) {
      window.Intercom('show');
    }
  }, []);

  return (
    <IntercomContext.Provider value={{ showIntercom }}>
      {children}
    </IntercomContext.Provider>
  );
}

export function useIntercom() {
  const context = useContext(IntercomContext);
  if (context === undefined) {
    throw new Error('useIntercom must be used within an IntercomProvider');
  }
  return context;
}
